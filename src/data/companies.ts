import type { CompanyData, CompanyId } from '../types'

/** Unified design era metadata — titles, taglines, and display config */
export interface EraDisplay {
  eraClass: string
  eraTagLabel: string
  eraTitle: string
  eraTitleEm: string
  eraTagline: string
  dateRange: string
  locationDisplay: string
}

export const eraDisplayMap: Record<CompanyId, EraDisplay> = {
  slack: {
    eraClass: 'slack',
    eraTagLabel: 'Slack \u00b7 Datastores',
    eraTitle: 'Vitess & MySQL',
    eraTitleEm: 'at scale.',
    eraTagline: 'Datastores Foundation squad: Vitess and MySQL durability at Slack scale \u2014 shard topology, failover, schema-change pipelines. Two months in, ramping into the tooling layer of that work, where most of the leverage lives.',
    dateRange: '2026 \u2014 Present',
    locationDisplay: 'Seattle metro \u00b7 Remote',
  },
  hbomax: {
    eraClass: 'hbo',
    eraTagLabel: 'Warner Bros. Discovery',
    eraTitle: '1,200+ Aurora clusters,',
    eraTitleEm: 'quietly.',
    eraTagline: 'Seven years on the DRE team for HBO Max and WBD streaming — 1,200+ Aurora clusters, 300+ DynamoDB tables, 100+ ElastiCache. DIM was the platform we built to keep all of it deployable.',
    dateRange: '2019 \u2014 2026',
    locationDisplay: 'Seattle metro \u00b7 Remote',
  },
  att: {
    eraClass: 'att',
    eraTagLabel: 'AT&T',
    eraTitle: 'One role.',
    eraTitleEm: 'Every database.',
    eraTagline: "Four years on AT&T's eSUPPORT app. Oracle 11g/12c end-to-end, plus the role where I learned every database that wasn't Oracle \u2014 Cassandra, ScyllaDB at scale, multiple Couchbase clusters, MariaDB, MySQL NDB. The breadth here shaped every role after.",
    dateRange: '2015 \u2014 2019',
    locationDisplay: 'Dallas, TX',
  },
  rental: {
    eraClass: 'hertz',
    eraTagLabel: 'Dollar Thrifty \u2192 Hertz',
    eraTitle: 'Where it',
    eraTitleEm: 'all started.',
    eraTagline: 'Two years as Oracle SME on Dollar Thrifty / Hertz reservations \u2014 30+ instances, a 14TB production database. First real DBA job. Where I learned the technical and the corporate at the same time.',
    dateRange: '2013 \u2014 2015',
    locationDisplay: 'Tulsa, OK',
  },
}

export const companies: Record<CompanyId, CompanyData> = {
  slack: {
    id: 'slack',
    name: 'Slack',
    shortName: 'Slack',
    role: 'Senior Software Engineer',
    team: 'Datastores Foundation',
    startDate: '2026-03',
    endDate: 'present',
    location: 'Remote',
    brandPrimary: '#611f69',
    brandSecondary: '#1264a3',
    brandAccent: '#ecb22e',
    tagline: 'Managing the datastores powering Slack at massive scale — Vitess, MySQL, and beyond',
    narrative: [
      'Joined Slack\'s Datastores Foundation squad for the scale and the pace. The team owns Vitess and MySQL at the size where "large-scale" stops being a description and starts being a default.',
      'Two months in. Still ramping — reading the codebase, sitting on-call rotations, mapping where the team\'s existing tools end and where the next round of leverage could come from.',
      'The bet is simple: the bigger the system, the more value there is in tooling that makes durability boring. Slack\'s a good place to make that bet.',
    ],
    highlights: [
      'On Slack\'s Datastores Foundation squad — Vitess and MySQL durability at scale',
      'Two months in: ramping into the codebase, on-call rotations, and the team\'s tooling roadmap',
    ],
    projects: [
      {
        id: 'slack-foundation-rampup',
        title: 'Vitess Reliability Tooling',
        description: 'Ramping into the Datastores Foundation squad \u2014 Vitess durability, MySQL reliability, the tools that make both quieter.',
        impact: ['Goal: turn large-scale durability from a project into a baseline.'],
        techStack: ['Vitess', 'MySQL', 'Go', 'Python'],
        lede: 'Two months into Slack\'s Datastores Foundation squad. The team owns Vitess and MySQL durability at scale \u2014 shard topology, failover, schema-change pipelines. I\'m ramping into the tooling layer of that work, where most of the leverage lives.',
        roleDetail: 'Sr. Software Engineer \u00b7 Datastores Foundation',
        stackDetail: 'Vitess, MySQL, Go, Python, Kubernetes, Terraform, Claude Code',
        status: 'Ramping \u2014 month two',
        bullets: [
          'Onboarding: codebase, on-call rotations, the shape of incidents at this scale.',
          'Mapping where the team\'s existing tooling ends and where new tooling earns its keep.',
          'Pairing on the squad roadmap \u2014 durability primitives, failover ergonomics, schema-change pipelines.',
        ],
      },
    ],
    techStack: [
      { category: 'Databases', items: ['Vitess', 'MySQL'] },
      { category: 'Cloud', items: ['AWS'] },
      { category: 'Languages', items: ['Go', 'Python', 'SQL', 'Shell'] },
      { category: 'Tooling', items: ['Kubernetes', 'Terraform', 'GitHub Actions', 'Chef', 'Claude Code'] },
    ],
  },

  hbomax: {
    id: 'hbomax',
    name: 'Warner Bros. Discovery',
    shortName: 'HBO max',
    role: 'Sr. Staff Software Engineer',
    team: 'Infrastructure & Reliability',
    startDate: '2019-01',
    endDate: '2026-03',
    location: 'Remote',
    brandPrimary: '#0d0d0d',
    brandSecondary: '#ffffff',
    brandAccent: '#b0b0b0',
    tagline: 'Building the database infrastructure behind HBO Max — 1,200+ Aurora clusters, DIM, and zero-downtime migrations at streaming scale',
    narrative: [
      "Joined HBO via Metis as a contractor in 2019. Went full-time at WBD in 2021, stayed through the WarnerMedia\u2013Discovery merger and the Max launch. Seven years total. The DRE team's job was deceptively simple: review every database design before it shipped, own the deployment that followed, keep all of it running once it did.",
      "DIM (Database Infra Manager) was the answer I built to that job. A rules-driven self-service platform that took a three-week design-review-plus-deploy gauntlet and turned it into a Backstage form: rules engine catches the red flags, Argo workflow ships the PRs, Checkov auto-reviews the Terraform. Three other internal teams adopted the same pattern after watching it work for ours.",
      "Some of it was tool-building (DB connection automation, deploy pipelines, EMEA/APAC Terraform modules, multi-tenant DB architecture). Some of it was crisis response \u2014 pgbouncer rolled out between Game of Thrones episodes when Aurora memory pressure threatened the next airing; WAF rules added live when a Max-launch UI bug let users rage-click their way into a consent-datastore overload. Seven years of work that didn't make headlines because it kept the headlines from happening.",
    ],
    highlights: [
      'Built DIM \u2014 self-serve deployment platform that turned a 3-week DBA-ticket gauntlet into a 12-hour Backstage flow; three other teams adopted the same pattern',
      'Modernized DRE deployments: Jenkins/Groovy pipelines replacing local-laptop Terraform plans (~60% time saved)',
      'Composite Terraform modules + Checkov auto-review drove EMEA/APAC expansion (~70% deployment time cut)',
      'DB connection tool (Homebrew + Docker + Steampipe) adopted across DRE and the broader engineering org (~30% support volume cut)',
      'Co-designed the RDS EOL upgrade pipeline (DMS + CDC + Jenkins/Python) \u2014 ~80% manual effort eliminated, near-zero downtime',
    ],
    projects: [
      {
        id: 'wbd-dim',
        title: 'DIM \u2014 Database Infra Manager',
        description: 'Self-serve deployment platform across Aurora, DynamoDB, ElastiCache, and the rest of the streaming database fleet. 3 weeks \u2192 12 hours.',
        impact: [
          'Cut provisioning time from 3 weeks \u2192 12 hours',
          'Three other internal teams adopted the same pattern',
        ],
        techStack: ['Python', 'Backstage', 'Argo Workflows', 'Aurora'],
        teamSize: 3,
        lede: 'A rules-driven self-service platform that replaced a three-week design-review-plus-deploy gauntlet with a Backstage form. Backed by a config-management microservice that owned every Terraform input the platform consumed. Three other internal teams later adopted the same pattern.',
        roleDetail: 'Tech lead & primary author',
        stackDetail: 'Python, Backstage scaffolder, Argo Workflows, Terraform, Checkov, GitHub Actions, Aurora, DynamoDB',
        impactStats: [
          { value: '3 wks \u2192 12 hrs', label: 'Provisioning time' },
          { value: '3 teams adopted', label: "DIM's pattern" },
        ],
        bullets: [
          'Backstage questionnaire + rules engine catches WBD-specific design red flags before a JIRA opens.',
          'Auto-approve path fires an Argo Workflow that sequences the 3\u20134 deploy PRs end-to-end.',
          'Checkov-based TF auto-review merges compliant PRs, monitors GHA builds, retries known-flake errors.',
        ],
      },
      {
        id: 'wbd-db-connection',
        title: 'DB Connection Tool',
        description: 'Self-contained Homebrew package that gets you to the right Aurora cluster in one command. Bastion tunnels and psql version drift, gone.',
        impact: [
          '~30% drop in DB-access support volume',
          'Adopted across DRE and the broader engineering org',
        ],
        techStack: ['Homebrew', 'Docker', 'Steampipe', 'Python'],
        lede: 'One Homebrew install away from the right Aurora cluster. Identity-based discovery via a custom Steampipe container, version-matched psql/pgcli running in Docker, bastion tunnel automated. Replaced a copy-pasted runbook everyone had a slightly wrong version of.',
        roleDetail: 'Designer & sole author',
        stackDetail: 'Homebrew, Docker, Steampipe (custom container), psql/pgcli, Python',
        bullets: [
          'Uses caller IAM identity to fetch every Aurora cluster the user can reach.',
          'Auto-matches psql client version to server \u2014 no more "client too old/new" surprises.',
          'Caches Steampipe results so the second connection is near-instant.',
        ],
      },
      {
        id: 'wbd-pipelines',
        title: 'DRE Deploy Pipelines',
        description: 'Brought CI/CD to a team that used to run terraform plans from laptops. Plus the guardrails that kept it safe during tent-pole events.',
        impact: [
          '~60% deploy time reduction across DRE workflows',
          'Cassandra multi-DC ops automated end-to-end',
          'Tent-pole / peak-hour deploy blockers prevented mistimed deploys',
        ],
        techStack: ['Jenkins', 'Groovy', 'Cassandra', 'Terraform'],
        lede: "When I joined, DRE deploys ran from local workstations. I wrote the team's first Jenkins/Groovy pipelines, automated Cassandra multi-DC add/remove, and built the pipeline-blocker layer that kept deploys out of tent-pole windows like Game of Thrones airings.",
        roleDetail: "Author of the team's deploy infrastructure",
        stackDetail: 'Jenkins, Groovy, Cassandra (self-hosted on EC2), Terraform, Python',
        bullets: [
          'Scripted Jenkins/Groovy pipelines replaced "run terraform from your laptop" \u2014 ~60% cycle time gone.',
          'Cassandra multi-DC rebuilds and scaling \u2014 manual EC2 dance turned into a one-click pipeline.',
          'Custom blockers prevented deploys during tent-pole events, peak hours, and non-business windows.',
        ],
      },
      {
        id: 'wbd-terraform',
        title: 'Composite TF Modules + Checkov Auto-Review',
        description: 'Default-configured Terraform modules + a Checkov-based auto-review framework that turned PR approvals into a build step.',
        impact: [
          '~70% deployment time cut across global markets',
          'Removed manual peer review from the critical path on every TF PR',
        ],
        techStack: ['Terraform', 'Terragrunt', 'Checkov', 'Python'],
        lede: 'When WBD needed to expand fast into EMEA and APAC, the bottleneck was every Terraform PR sitting in a peer-review queue. I built the composite modules that baked in defaults and the Checkov framework that auto-reviewed the diffs \u2014 peer review became opt-in.',
        roleDetail: 'Designer of the module pattern + auto-review layer',
        stackDetail: 'Terraform, Terragrunt, Checkov, Python, GitHub Actions',
        bullets: [
          'Composite modules with defaults baked in \u2014 devs got a working cluster from a tiny YAML.',
          'Checkov-based auto-review evaluated TF plans against compliance rules at PR time.',
          'Auto-merge for compliant PRs; humans only saw the genuinely interesting diffs.',
        ],
      },
      {
        id: 'wbd-rds-eol',
        title: 'RDS EOL Upgrade Pipeline',
        description: 'End-to-end pipeline for AWS RDS major-version upgrades. Manual weekend \u2192 scheduled, observable, hands-off.',
        impact: [
          '~80% reduction in manual upgrade effort',
          'Near-zero downtime across all RDS major-version migrations',
        ],
        techStack: ['DMS', 'CDC', 'Jenkins', 'Python'],
        lede: 'Co-designed the pipeline that turned multi-team weekend RDS major-version upgrades into a scheduled, hands-off flow. DMS + CDC for the live-data piece, Jenkins/Groovy/Python for the orchestration and validation around it.',
        roleDetail: 'Co-designer & contributor',
        stackDetail: 'AWS DMS, CDC, Jenkins, Groovy, Python, Aurora, Route53',
        bullets: [
          'DMS + CDC handled live-data migration with sub-minute cutover windows.',
          'Pre-flight compatibility checks against the EOL deprecations before scheduling.',
          'Per-cluster rollback path and post-upgrade health attestation as the final gate.',
        ],
      },
    ],
    techStack: [
      { category: 'Databases', items: ['Aurora PostgreSQL', 'DynamoDB', 'ElastiCache', 'MongoDB Atlas', 'Cassandra'] },
      { category: 'Cloud', items: ['AWS'] },
      { category: 'Infra & Tooling', items: ['Terraform', 'Terragrunt', 'Kubernetes', 'Docker', 'Jenkins', 'Argo Workflows', 'GitHub Actions', 'Backstage', 'Checkov', 'Steampipe'] },
      { category: 'Languages', items: ['Python', 'Go', 'Groovy', 'Shell'] },
      { category: 'Observability', items: ['Prometheus', 'Grafana', 'Splunk'] },
    ],
  },

  att: {
    id: 'att',
    name: 'AT&T',
    shortName: 'AT&T',
    role: 'Database Analyst / DBA',
    team: 'eSUPPORT Application',
    startDate: '2015-01',
    endDate: '2019-01',
    location: 'Dallas, TX',
    brandPrimary: '#00a8e0',
    brandSecondary: '#009fdb',
    brandAccent: '#ffffff',
    tagline: 'SME for AT&T\'s eSUPPORT platform \u2014 Oracle RAC, GoldenGate from scratch, and a crash course in the NoSQL world',
    narrative: [
      "Joined AT&T in 2015 on the eSUPPORT application as SME \u2014 Oracle 11g/12c estate (RAC), end-to-end maintenance: patches, upgrades, runbooks. Plus the GoldenGate cascade replication topology I helped productionize from scratch \u2014 bi-directional, cascading, Veridata monitoring on top. The team was 6\u20137 DBAs.",
      "This is where the NoSQL world opened up. Cassandra was the first \u2014 tuned a repair, watched the cluster behave the way I wanted, and the rest followed: a large ScyllaDB cluster, multiple Couchbase clusters, MariaDB, MySQL NDB. Presto and Zeppelin sat on top for analytics. After the third unfamiliar datastore, picking up the fourth stopped being intimidating.",
      "And every year, iPhone launch night. Three months of capacity planning ahead of every release, then one intensive evening of watching the systems hold while the rest of the world bought a phone. The launches always landed. That's the kind of work AT&T trains you for.",
    ],
    highlights: [
      "SME for AT&T's eSUPPORT \u2014 owned Oracle 11g/12c maintenance (patches, upgrades, runbooks) and productionized GoldenGate cascade replication with Veridata monitoring on top",
      'Tuned and automated Cassandra cluster repairs (node_exporter + Prometheus + Grafana) \u2014 ~80% repair time cut',
      'First role where the NoSQL world opened up: Cassandra, ScyllaDB at scale, multiple Couchbase clusters, MariaDB, MySQL NDB, plus Presto/Zeppelin/Spark for analytics',
      'Annual iPhone launch support \u2014 three months of capacity planning, one intensive launch night, every year',
    ],
    projects: [
      {
        id: 'att-esupport',
        title: 'AT&T eSUPPORT \u2014 Oracle SME',
        description: "SME for AT&T's eSUPPORT app. Oracle 11g/12c estate (RAC) \u2014 patches, upgrades, runbooks, plus a productionized GoldenGate cascade with Veridata monitoring on top.",
        impact: [
          'Owned Oracle 11g/12c maintenance end-to-end',
          'Productionized GoldenGate cascade replication from scratch',
        ],
        techStack: ['Oracle 11g/12c', 'Oracle RAC', 'GoldenGate', 'Veridata'],
        lede: "SME on AT&T's eSUPPORT application. Owned the day-to-day of the Oracle 11g/12c estate (RAC) \u2014 patches, upgrades, runbook ownership, escalation triage. Productionized the GoldenGate cascade replication topology that fed downstream consumers, with Veridata monitoring on top so divergence didn't go quiet.",
        roleDetail: 'SME, Oracle DBA',
        stackDetail: 'Oracle 11g/12c, Oracle RAC, GoldenGate, Veridata, PL/SQL, Shell',
        bullets: [
          'Owned Oracle 11g/12c day-to-day on a 6\u20137 person DBA team \u2014 patches, upgrades, runbooks, escalation triage.',
          'Productionized GoldenGate cascade replication \u2014 uni-directional, bi-directional, and cascading flows.',
          'Veridata monitoring layer to catch replication divergence before downstream consumers noticed.',
        ],
      },
      {
        id: 'att-cassandra',
        title: 'Cassandra Repair Automation',
        description: 'Automated repair scheduling and monitoring for a large Cassandra fleet. Manual ops \u2192 Prometheus + Grafana, ~80% time saved.',
        impact: [
          '~80% Cassandra repair time cut',
          'First non-Oracle datastore I owned end-to-end',
        ],
        techStack: ['Cassandra', 'Prometheus', 'Grafana', 'node_exporter'],
        lede: "The Cassandra fleet was big and the repairs were manual, which meant they were also late. I tuned the repair process, automated the scheduling, and stood up node_exporter + Prometheus + Grafana so the cluster told us how it was doing instead of waiting for someone to ask.",
        roleDetail: 'Sole owner',
        stackDetail: 'Cassandra, node_exporter, Prometheus, Grafana, Shell',
        bullets: [
          'Repair tuning + scheduling automation cut Cassandra repair time ~80%.',
          'node_exporter + Prometheus + Grafana stack for cluster-state visibility at a glance.',
          'The first non-Oracle datastore I owned end-to-end \u2014 and the moment "I can pick up any database" stopped feeling presumptuous.',
        ],
      },
      {
        id: 'att-beyond-oracle',
        title: 'Beyond Oracle \u2014 NoSQL Production Ops',
        description: 'Production work across ScyllaDB (big cluster), multiple Couchbase clusters, MariaDB, MySQL NDB. The breadth that became my actual job description after AT&T.',
        impact: [
          'Owned a large-scale ScyllaDB cluster end-to-end',
          'Multiple Couchbase clusters under management',
        ],
        techStack: ['ScyllaDB', 'Couchbase', 'MariaDB', 'MySQL NDB'],
        lede: "After Cassandra, the rest of the database world followed. Owned ops on a large ScyllaDB cluster, multiple Couchbase clusters, MariaDB, and MySQL NDB across the same eSUPPORT-adjacent landscape. Each new datastore looked unfamiliar for about a week \u2014 then it didn't.",
        roleDetail: 'Production DBA \u2014 polyglot',
        stackDetail: 'ScyllaDB, Couchbase, MariaDB, MySQL NDB, Spark, Presto, Zeppelin',
        bullets: [
          'Owned a large-scale ScyllaDB cluster end-to-end \u2014 schema design, ops, capacity work.',
          'Multiple Couchbase clusters under management \u2014 bucket design, XDCR replication, day-to-day ops.',
          'MariaDB and MySQL NDB rounded out the polyglot mix \u2014 every datastore the team needed, owned.',
        ],
      },
      {
        id: 'att-iphone-launch',
        title: 'iPhone Launch Support',
        description: 'Annual iPhone launch capacity planning and live launch-night support. Three months of prep, one intense evening, every year.',
        impact: [
          'Three months of capacity planning per launch',
          'One intensive launch night every year, no surprises',
        ],
        techStack: ['Oracle', 'Capacity Planning', 'Production Ops'],
        lede: "AT&T's iPhone launches were the kind of event you couldn't underplan. Three months of capacity planning, load testing, and contingency prep ahead of each release; the launch night itself was watching the systems hold while the rest of the world bought a phone. The launches always landed.",
        roleDetail: 'Production support, eSUPPORT team',
        stackDetail: 'Oracle 11g/12c, RAC, capacity tooling, runbooks',
        bullets: [
          'Quarterly capacity planning and load testing ramping up to each iPhone launch.',
          'Launch-night production support \u2014 sustained traffic, no surprises, no escalations.',
          'Annual cycle: three months of prep, one intensive launch night, then the postmortem that fed into next year\'s plan.',
        ],
      },
    ],
    techStack: [
      { category: 'Databases', items: ['Oracle 11g/12c', 'Oracle RAC', 'Cassandra', 'Couchbase', 'ScyllaDB', 'MariaDB', 'MySQL NDB', 'PostgreSQL'] },
      { category: 'Replication', items: ['GoldenGate', 'Veridata'] },
      { category: 'Analytics', items: ['Presto', 'Zeppelin', 'Spark'] },
      { category: 'Observability', items: ['Prometheus', 'Grafana', 'node_exporter'] },
    ],
  },

  rental: {
    id: 'rental',
    name: 'Hertz',
    shortName: 'Hertz',
    role: 'Oracle Database Administrator',
    team: 'Database Administration',
    startDate: '2013-05',
    endDate: '2015-01',
    location: 'Tulsa, OK',
    brandPrimary: '#FFB81C',
    brandSecondary: '#1a1a1a',
    brandAccent: '#000000',
    tagline: 'First production DBA role \u2014 Oracle RAC supporting car reservation systems for Dollar and Thrifty brands (acquired by Hertz)',
    narrative: [
      "First DBA job, landed straight out of Wilmington University. Hired as Oracle SME on the Dollar Thrifty / Hertz reservations stack \u2014 30+ Oracle instances, a 14TB production database I was on call for at 23. Trained by a manager (a SQL DBA) who taught me as much about corporate process as about the database.",
      "Day-to-day was the steady stuff: patches, upgrades, runbooks, and the offshore team of four DBAs I led the schedule for. The actual interesting work was query tuning \u2014 strategic indexing, hint-driven plan stabilization, the occasional ADDM rabbit hole \u2014 that bought back about 50% of peak-hour latency on the booking flows.",
      "And one larger project: archiving older reservations data, which involved walking historical records from Oracle into MSSQL via SSIS. Nothing dramatic operationally \u2014 but it was the project where I first understood that \"data migration\" is mostly reconciliation and patience.",
    ],
    highlights: [
      'First Oracle SME role \u2014 30+ instances, a 14TB production database, on the Dollar Thrifty / Hertz reservations stack',
      'Query tuning + strategic indexing on the booking flows \u2014 ~50% peak-hour latency improvement',
      'Archiving project: historical reservations data walked from Oracle to MSSQL via SSIS',
      'Led the schedule for an offshore team of 4 DBAs while ramping up under a SQL DBA mentor',
    ],
    projects: [
      {
        id: 'rental-oracle-sme',
        title: 'Oracle SME \u2014 Reservations Estate',
        description: 'First DBA gig. Oracle SME on the Dollar Thrifty / Hertz reservations stack \u2014 30+ instances, a 14TB production database, day-to-day ops.',
        impact: [
          '30+ Oracle instances across prod and non-prod',
          '14TB production database under day-to-day ownership',
        ],
        techStack: ['Oracle 10g/11g', 'Oracle RAC', 'PL/SQL', 'Shell'],
        lede: 'First real DBA job \u2014 hired as Oracle SME straight out of Wilmington University. 30+ Oracle instances across prod and non-prod (including a 14TB production database), full day-to-day ownership: patches, upgrades, runbook maintenance, after-hours pages, and the offshore-team coordination that kept it all moving.',
        roleDetail: 'Oracle SME, first hire post-college',
        stackDetail: 'Oracle 10g/11g, Oracle RAC, PL/SQL, Shell, RMAN',
        bullets: [
          '30+ Oracle instances across prod and non-prod, including a 14TB production database.',
          'Patches, upgrades, runbook maintenance, after-hours pages \u2014 the full DBA day-to-day.',
          'Trained under a SQL DBA manager whose mentorship taught me corporate process alongside the database.',
        ],
      },
      {
        id: 'rental-tuning',
        title: 'Reservations Performance Tuning',
        description: 'Query tuning, strategic indexing, hint-driven plan stabilization on the reservations booking flows. ~50% peak-hour latency reduction.',
        impact: [
          '~50% peak-hour latency reduction on booking flows',
          'Improved performance without a hardware refresh',
        ],
        techStack: ['Oracle', 'AWR', 'ADDM', 'TKPROF'],
        lede: 'The booking flows were slow, the wait events were noisy, and I learned my way through every Oracle tuning tool in the room. AWR for the patterns, ADDM for the suggestions, TKPROF and Explain Plan for the actual work. Strategic indexes plus hint-driven plan stabilization gave back about half the peak-hour latency.',
        roleDetail: 'Owner \u2014 query tuning',
        stackDetail: 'Oracle 10g/11g, AWR, ADDM, TKPROF, Explain Plan, PL/SQL',
        bullets: [
          'Query tuning across the highest-traffic booking flows \u2014 driven by AWR/ADDM analysis.',
          'Strategic index strategy + plan-stabilizing hints to lock in good plans through optimizer churn.',
          '~50% peak-hour latency reduction \u2014 bought back headroom without a hardware refresh.',
        ],
      },
      {
        id: 'rental-archiving',
        title: 'Reservations Archiving \u2014 Oracle to MSSQL',
        description: 'Archiving project for historical reservations data \u2014 moving the long-tail records from Oracle to MSSQL via SSIS, with no impact to active bookings.',
        impact: [
          'Long-tail historical records archived from Oracle to MSSQL',
          'Active booking estate untouched throughout the migration',
        ],
        techStack: ['Oracle', 'MSSQL', 'SSIS', 'PL/SQL'],
        lede: 'An archiving project for the reservations data: older bookings walked from Oracle into MSSQL via SSIS, with the active estate untouched. Nothing dramatic operationally \u2014 but it was the project where I first understood that "data migration" is mostly reconciliation and patience.',
        roleDetail: 'Contributor',
        stackDetail: 'Oracle 10g/11g, MSSQL, SSIS, PL/SQL, Shell',
        bullets: [
          'Identified the archiving cut-line per reservation table; built the SSIS pipeline to move historical rows.',
          'Validated record-by-record reconciliation between Oracle source and MSSQL destination.',
          'First migration project I owned end-to-end \u2014 and the foundation for every migration project after it.',
        ],
      },
    ],
    techStack: [
      { category: 'Databases', items: ['Oracle 10g/11g', 'Oracle RAC', 'MSSQL'] },
      { category: 'Tools', items: ['SSIS', 'AWR', 'ADDM', 'TKPROF'] },
      { category: 'Languages', items: ['SQL', 'Shell'] },
    ],
  },
}

/** Ordered list for display (current company first) */
export const companyOrder: CompanyId[] = ['slack', 'hbomax', 'att', 'rental']
