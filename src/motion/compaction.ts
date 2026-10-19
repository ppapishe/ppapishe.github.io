// The concept's driver: time-window compaction.
// One variable per window, its scroll progress p (0 → 1), moves every fragment in that window
// from a loose, scattered position into its slot in the compacted row. The same p names the
// window's state in the status line. Loose fragments drift a little on the ticker (idle input);
// compacted ones hold still. Under reduced motion nothing moves: fragments render compacted.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ease, isMobile, onPage, prefersReducedMotion } from '../engine';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Deterministic scatter, so a window looks the same on every visit.
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

type Win = { el: HTMLElement; label: string; p: number; drifts: HTMLElement[]; phase: number[] };

function setStatus(status: HTMLElement | null, win: Win | null) {
  if (!status) return;
  status.classList.toggle('is-on', !!win);
  if (!win) return;
  const text = `window ${win.label} · ${win.p >= 0.999 ? 'compacted' : 'compacting'}`;
  if (status.textContent !== text) status.textContent = text;
}

function windows(): () => void {
  const status = document.querySelector<HTMLElement>('[data-status]');
  const els = [...document.querySelectorAll<HTMLElement>('[data-window]')];
  if (!els.length) return () => {};
  const mobile = isMobile();
  let active: Win | null = null;

  const wins: Win[] = els.map((el, wi) => {
    const rand = seeded(wi * 7919 + 17);
    const frags = [...el.querySelectorAll<HTMLElement>('[data-frag]')];
    const lines = [...el.querySelectorAll<HTMLElement>('[data-line]')];
    const win: Win = {
      el,
      label: el.dataset.window || '',
      p: 0,
      drifts: frags.map((f) => f.querySelector<HTMLElement>('.frag__drift')!).filter(Boolean),
      phase: frags.map(() => rand() * Math.PI * 2),
    };
    // Fragments stay inside their own window: they spread along their row and drift a little
    // above and below it, never into the window before or after.
    const ay = mobile ? 18 : 28; // px
    const row = el.querySelector<HTMLElement>('.win__frags') || el;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: 'top bottom',
        end: 'top 45%',
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          win.p = self.progress;
          if (active === win) setStatus(status, win);
        },
      },
    });
    frags.forEach((f, i) => {
      tl.fromTo(
        f,
        {
          // Layout offsets ignore transforms, so this stays right when a resize re-measures it.
          x: () => rand() * Math.max(0, row.clientWidth - f.offsetWidth) - f.offsetLeft,
          y: () => (rand() - 0.5) * 2 * ay,
          opacity: 0,
        },
        { x: 0, y: 0, opacity: 1, ease: ease.out, duration: 1 },
        i * 0.04,
      );
    });
    if (lines.length) {
      tl.fromTo(lines, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, ease: ease.soft, duration: 0.5, stagger: 0.06 }, 0.55);
    }
    ScrollTrigger.create({
      trigger: el,
      start: 'top 60%',
      end: 'bottom 40%',
      onToggle: (self) => {
        if (self.isActive) active = win;
        else if (active === win) active = null;
        setStatus(status, active);
      },
    });
    return win;
  });

  // Idle input: loose fragments drift a few pixels; the amplitude falls to zero as p → 1.
  const tick = (t: number) => {
    const w = active;
    if (!w) return;
    const amp = 6 * (1 - w.p);
    w.drifts.forEach((d, i) => {
      const ph = w.phase[i];
      gsap.set(d, { x: Math.sin(t * 0.6 + ph) * amp, y: Math.cos(t * 0.5 + ph) * amp * 0.6 });
    });
  };
  gsap.ticker.add(tick);
  return () => {
    gsap.ticker.remove(tick);
    wins.forEach((w) => gsap.set(w.drifts, { clearProps: 'transform' }));
    setStatus(status, null);
  };
}

// Hero: the letters of the name arrive loose and settle into the name.
function settleName(intro: gsap.core.Timeline) {
  const el = document.querySelector<HTMLElement>('[data-settle]');
  if (!el) return;
  const rand = seeded(42);
  const split = SplitText.create(el, { type: 'chars,words', charsClass: 'settle-char' });
  gsap.set(el, { visibility: 'visible' });
  intro.add(
    gsap.from(split.chars, {
      x: () => (rand() - 0.5) * 0.5 * innerWidth,
      y: () => (rand() - 0.5) * 0.4 * innerHeight,
      autoAlpha: 0,
      duration: 1.3,
      ease: ease.out,
      stagger: { each: 0.025, from: 'random' },
    }),
    0,
  );
}

export function startConcept() {
  onPage(({ intro }) => {
    if (prefersReducedMotion()) return;
    settleName(intro);
    return windows();
  });
}
