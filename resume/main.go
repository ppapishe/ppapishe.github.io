// Command resume builds public/resume.pdf from src/data/site.json, the same file the
// website renders, so the site and the PDF never drift apart.
//
//	cd resume && go run .
package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"os"
	"strings"
	"time"

	"github.com/go-pdf/fpdf"
)

// Site mirrors the parts of site.json the resume needs. Fields not listed here are ignored.
type Site struct {
	Person  Person   `json:"person"`
	Windows []Window `json:"windows"`
	Skills  []Skill  `json:"skills"`
}

type Person struct {
	Name        string   `json:"name"`
	Headline    string   `json:"headline"`
	Location    string   `json:"location"`
	Summary     []string `json:"summary"`
	ResumeEmail string   `json:"resumeEmail"`
	Phone       string   `json:"phone"`
	Site        string   `json:"site"`
	Links       struct {
		LinkedIn string `json:"linkedin"`
	} `json:"links"`
}

type Window struct {
	Company  string   `json:"company"`
	Role     string   `json:"role"`
	Team     string   `json:"team"`
	Start    string   `json:"start"` // "2015-01"
	End      string   `json:"end"`   // "2019-01" or "present"
	Location string   `json:"location"`
	Lines    []string `json:"lines"`
}

type Skill struct {
	Group string   `json:"group"`
	Items []string `json:"items"`
}

// Page geometry in millimetres (US Letter).
const (
	margin   = 14.0
	bodySize = 9.5
	lineH    = 4.4
)

func main() {
	in := flag.String("in", "../src/data/site.json", "content file")
	out := flag.String("out", "../public/resume.pdf", "output PDF")
	flag.Parse()

	site, err := load(*in)
	if err != nil {
		log.Fatal(err)
	}
	if err := render(site, *out); err != nil {
		log.Fatal(err)
	}
	fmt.Println("wrote", *out)
}

func load(path string) (Site, error) {
	var s Site
	b, err := os.ReadFile(path)
	if err != nil {
		return s, fmt.Errorf("read content: %w", err)
	}
	if err := json.Unmarshal(b, &s); err != nil {
		return s, fmt.Errorf("parse %s: %w", path, err)
	}
	return s, nil
}

func render(s Site, out string) error {
	pdf := fpdf.New("P", "mm", "Letter", "")
	pdf.SetMargins(margin, margin, margin)
	pdf.SetAutoPageBreak(true, margin)
	pdf.SetTitle(s.Person.Name+" - Resume", true)
	pdf.SetAuthor(s.Person.Name, true)
	pdf.SetCreator("resume/main.go", true)
	// The core Helvetica font speaks Windows-1252, not UTF-8: translate every string.
	tr := pdf.UnicodeTranslatorFromDescriptor("")
	pdf.AddPage()
	width, _ := pdf.GetPageSize()
	textW := width - 2*margin

	ink := func() { pdf.SetTextColor(10, 10, 10) }
	muted := func() { pdf.SetTextColor(92, 92, 92) }

	// Header
	ink()
	pdf.SetFont("Helvetica", "B", 20)
	pdf.CellFormat(textW, 9, tr(s.Person.Name), "", 1, "L", false, 0, "")
	pdf.SetFont("Helvetica", "", 10.5)
	pdf.CellFormat(textW, 5.5, tr(s.Person.Headline), "", 1, "L", false, 0, "")
	muted()
	pdf.SetFont("Helvetica", "", 9)
	contact := []string{
		s.Person.Location,
		s.Person.ResumeEmail,
		s.Person.Phone,
		strings.TrimSuffix(strings.TrimPrefix(s.Person.Links.LinkedIn, "https://www."), "/"),
		strings.TrimPrefix(s.Person.Site, "https://"),
	}
	pdf.CellFormat(textW, 5, tr(strings.Join(contact, "  |  ")), "", 1, "L", false, 0, "")

	section := func(title string) {
		pdf.Ln(3)
		ink()
		pdf.SetFont("Helvetica", "B", 10)
		pdf.CellFormat(textW, 5.5, strings.ToUpper(title), "", 1, "L", false, 0, "")
		x, y := pdf.GetXY()
		pdf.SetDrawColor(10, 10, 10)
		pdf.SetLineWidth(0.25)
		pdf.Line(x, y, x+textW, y)
		pdf.Ln(2)
	}

	section("Summary")
	ink()
	pdf.SetFont("Helvetica", "", bodySize)
	pdf.MultiCell(textW, lineH, tr(strings.Join(s.Person.Summary, " ")), "", "L", false)

	section("Experience")
	for i, w := range s.Windows {
		if i > 0 {
			pdf.Ln(2)
		}
		// Company on the left, dates on the right, on one line.
		ink()
		pdf.SetFont("Helvetica", "B", 10.5)
		dates := span(w.Start, w.End)
		datesW := pdf.GetStringWidth(tr(dates)) + 1
		pdf.CellFormat(textW-datesW, 5.5, tr(w.Company), "", 0, "L", false, 0, "")
		pdf.SetFont("Helvetica", "", 9.5)
		pdf.CellFormat(datesW, 5.5, tr(dates), "", 1, "R", false, 0, "")

		muted()
		pdf.SetFont("Helvetica", "I", 9.5)
		pdf.CellFormat(textW, 5, tr(fmt.Sprintf("%s, %s  |  %s", w.Role, w.Team, w.Location)), "", 1, "L", false, 0, "")

		ink()
		pdf.SetFont("Helvetica", "", bodySize)
		for _, line := range w.Lines {
			bullet(pdf, tr(line), textW)
		}
	}

	section("Skills")
	for _, g := range s.Skills {
		ink()
		pdf.SetFont("Helvetica", "B", bodySize)
		label := g.Group + ": "
		labelW := pdf.GetStringWidth(label)
		pdf.CellFormat(labelW, lineH, tr(label), "", 0, "L", false, 0, "")
		pdf.SetFont("Helvetica", "", bodySize)
		pdf.MultiCell(textW-labelW, lineH, tr(strings.Join(g.Items, ", ")), "", "L", false)
	}

	return pdf.OutputFileAndClose(out)
}

// bullet writes one hanging-indent bullet: the marker in a narrow column, wrapped text beside it.
func bullet(pdf *fpdf.Fpdf, text string, textW float64) {
	const indent = 4.0
	x := pdf.GetX()
	pdf.CellFormat(indent, lineH, "\x95", "", 0, "L", false, 0, "") // "•" in Windows-1252
	pdf.MultiCell(textW-indent, lineH, text, "", "L", false)
	pdf.SetX(x)
}

// span turns "2015-01" and "2019-01" (or "present") into "Jan 2015 - Jan 2019".
func span(start, end string) string {
	return month(start) + " – " + month(end)
}

func month(ym string) string {
	if ym == "present" {
		return "Present"
	}
	t, err := time.Parse("2006-01", ym)
	if err != nil {
		return ym
	}
	return t.Format("Jan 2006")
}
