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
    eraTagline: 'Datastores Foundation team. Managing one of the largest production deployments of Vitess and MySQL \u2014 shard topology, failover tooling, schema-change pipelines.',
    dateRange: '2026 \u2014 Present',
    locationDisplay: 'Seattle metro \u00b7 Remote',
  },
  hbomax: {
    eraClass: 'hbo',
    eraTagLabel: 'Warner Bros. Discovery',
    eraTitle: '1,200+ Aurora clusters,',
    eraTitleEm: 'quietly.',
    eraTagline: 'Seven years of database infrastructure for streaming. Built DIM (Database Infra Manager), cutting provisioning from 3 weeks to 12 hours. Migrations happened while people were mid-episode.',
    dateRange: '2019 \u2014 2026',
    locationDisplay: 'Seattle metro \u00b7 Remote',
  },
  att: {
    eraClass: 'att',
    eraTagLabel: 'AT&T',
    eraTitle: 'Telecom-grade',
    eraTitleEm: 'reliability.',
    eraTagline: 'Four years on enterprise Oracle systems \u2014 RAC, GoldenGate, Data Guard. Cutovers measured in minutes, not weekends.',
    dateRange: '2015 \u2014 2019',
    locationDisplay: 'Seattle metro',
  },
  rental: {
    eraClass: 'hertz',
    eraTagLabel: 'Dollar Thrifty \u2192 Hertz',
    eraTitle: 'Where it',
    eraTitleEm: 'all started.',
    eraTagline: 'Oracle DBA through the DTAG \u2192 Hertz acquisition. Nightly batch, RMAN backups, the occasional 3am page. The fleet that kept rolling.',
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
      'Joined Slack for the scale and the pace. The Datastores Foundation team owns all ops and maintenance across Slack\'s entire database fleet — Vitess, MySQL, and the infrastructure handling hundreds of millions of messages every day.',
      'Currently ramping up on the team\'s ops, automations, and tooling. The scope is enormous: this is one of the largest Vitess deployments running in production anywhere.',
      'The timing is deliberate. Salesforce announced a Slack-first strategy, which means this infrastructure is about to carry even more weight. Scale problems are what I do — and this is a good one.',
    ],
    highlights: [
      'Joined the team responsible for Slack\'s entire datastore fleet at Salesforce scale',
      'One of the largest Vitess/MySQL deployments in production',
      'Salesforce Slack-first strategy making this infrastructure increasingly critical',
    ],
    projects: [
      {
        id: 'slack-vitess-ops',
        title: 'Vitess Fleet Operations',
        description: 'Shard topology and failover tooling for MySQL/Vitess at Slack scale.',
        impact: ['Managing one of the largest Vitess deployments in production'],
        techStack: ['Vitess', 'MySQL', 'Go'],
        lede: 'Owning operational tooling for one of the largest Vitess clusters in production \u2014 from healthy keyspace topology to on-call ergonomics during failovers.',
        roleDetail: 'Sr. Software Engineer \u00b7 Datastores Foundation',
        stackDetail: 'Vitess, MySQL, Go, Kubernetes, Bazel',
        status: 'In progress',
        bullets: [
          'Designing automation for shard topology drift detection across thousands of shards.',
          'Improving failover orchestration so primary cutovers stay sub-second under load.',
          'Partnering with SRE on the runbooks that page humans only when humans are needed.',
        ],
      },
      {
        id: 'slack-schema-pipeline',
        title: 'Schema Change Pipeline',
        description: 'Safe, reviewable schema migrations across thousands of tables.',
        impact: ['Validation gates reject unsafe migrations at PR-time'],
        techStack: ['gh-ost', 'Go', 'Python'],
        lede: 'A code-reviewable migration pipeline that turns DDL into a deploy artifact \u2014 no more ad-hoc ALTERs, no more surprises during peak traffic.',
        roleDetail: 'Tech lead, schema tooling',
        stackDetail: 'gh-ost, Go, Python, GitHub Actions',
        bullets: [
          'Validation gates that reject unsafe migrations at PR-time, not 3am.',
          'Throttle-aware execution that backs off when replicas fall behind.',
          'Audit trail mapping every applied DDL back to the PR that introduced it.',
        ],
      },
      {
        id: 'slack-capacity',
        title: 'Capacity Signals',
        description: 'Early warning system for hotspots before they page someone.',
        impact: ['Per-shard heatmaps surface skew before it tips into latency'],
        techStack: ['Prometheus', 'Grafana'],
        lede: 'Telemetry and alerting that finds capacity problems while they\'re still trends, not incidents.',
        stackDetail: 'Prometheus, Grafana, Vitess metrics, Slack alerts',
        bullets: [
          'Per-shard heatmaps that surface skew before it tips into latency.',
          'Burn-rate SLO alerts wired into the on-call routing.',
          'Weekly capacity report that goes from raw metrics to a one-page summary.',
        ],
      },
    ],
    techStack: [
      { category: 'Databases', items: ['Vitess', 'MySQL', 'PostgreSQL'] },
      { category: 'Cloud', items: ['AWS'] },
      { category: 'Languages', items: ['Python', 'Go', 'SQL', 'Shell'] },
      { category: 'Tools', items: ['Kubernetes', 'Terraform', 'GitHub Actions'] },
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
      'Joined via Metis Software Solutions in 2019 as a contractor \u2014 drawn in by how HBO operated and the people who interviewed me. The contract-to-hire path took longer than originally scoped; I went full-time at WBD in 2021 and stayed for seven years.',
      'The headline project was DIM (Database Infra Manager) \u2014 a rules-driven, self-service deployment framework I designed and built from the ground up. Before DIM, provisioning a new database took three weeks of manual tickets and waiting. After DIM: 12 hours. DIM managed 30 datastores spanning ~1,200 Aurora PostgreSQL clusters, ~1,000 DynamoDB tables, ~150 ElastiCache instances, and 2 MongoDB Atlas clusters.',
      'What made this role special was the freedom to learn. I got deep into Terraform, Jenkins/Groovy pipelines, GitHub Actions, Argo Workflows, Backstage templates, Python CLI tools, and multi-region deployments at streaming scale. If there was a tool I didn\'t know, I figured it out and built something with it.',
    ],
    highlights: [
      'Built DIM \u2014 cut database provisioning from 3 weeks \u2192 12 hours across 1,200+ Aurora clusters',
      'Cut global deployment time 70% via Terraform automation and Checkov-based automated PR review',
      'Automated Cassandra multi-DC rebuilds and scaling, reducing operational toil by 60%',
      'Built Python DB connection tool that eliminated manual SSM bastion tunneling, cutting support volume 30%',
      'Engineered RDS EOL upgrade pipeline for near-zero downtime migrations with DMS & CDC',
    ],
    projects: [
      {
        id: 'wbd-dim',
        title: 'DIM \u2014 Database Infra Manager',
        description: 'Rules-driven, self-service database provisioning. 3 weeks \u2192 12 hours.',
        impact: [
          'Cut provisioning time from 3 weeks \u2192 12 hours',
          'Reduced support requests by ~50%',
          '30 datastores under management across the fleet',
        ],
        techStack: ['Python', 'Terraform', 'Aurora'],
        teamSize: 3,
        lede: 'Self-service platform that lets product engineers ship a production-grade Aurora cluster from a YAML request \u2014 without filing a ticket, paging a DBA, or copy-pasting Terraform.',
        roleDetail: 'Tech lead & primary author',
        stackDetail: 'Python, Terraform, AWS Aurora, Step Functions',
        impactStats: [
          { value: '3 wks \u2192 12 hrs', label: 'Provisioning time' },
          { value: '1,200+', label: 'Clusters managed' },
          { value: '~95%', label: 'Tickets eliminated' },
        ],
        bullets: [
          'Rules engine codified org-wide DB standards (encryption, backup windows, parameter groups).',
          'Self-service portal replaced a fragile DBA-ticket workflow.',
          'Drift detection auto-remediated config divergence across the fleet.',
        ],
      },
      {
        id: 'wbd-terraform',
        title: 'Global Terraform Deployment',
        description: 'Rolled Terraform module defaults across 1,200+ clusters without downtime.',
        impact: [
          'Cut global market deployment time by 70%',
          'Removed manual peer review bottleneck from all Terraform PRs',
        ],
        techStack: ['Terraform', 'AWS'],
        lede: 'A fleet-wide Terraform module rev that touched every Aurora cluster \u2014 done as a rolling change with zero customer-visible disruption.',
        stackDetail: 'Terraform, Atlantis, AWS Aurora, GitHub Actions',
        bullets: [
          'Phased rollout with automatic rollback on health-check regressions.',
          'Pre-flight diff tooling that summarized blast radius across all 1,200+ clusters.',
          'Documented playbook other teams now reuse for fleet-wide module bumps.',
        ],
      },
      {
        id: 'wbd-db-connection',
        title: 'DB Connection Automation',
        description: 'Python CLI that abstracted away a dozen fragile runbooks.',
        impact: [
          'Reduced support volume by ~30%',
          'Eliminated manual endpoint and credential lookups during incidents',
        ],
        techStack: ['Python', 'Click'],
        lede: 'One CLI for "connect me to the right database, the right way" \u2014 replacing copy-pasted jump-host commands and a wiki page that was always slightly wrong.',
        stackDetail: 'Python, Click, AWS SSM, IAM auth',
        bullets: [
          'Auto-resolves cluster endpoint, role, and bastion path from a single nickname.',
          'Audit logging on every session \u2014 who connected to what, when, for how long.',
          'Adopted across multiple platform teams as the default DB access path.',
        ],
      },
      {
        id: 'wbd-rds-eol',
        title: 'RDS EOL Upgrade Pipeline',
        description: 'End-to-end pipeline for end-of-life RDS upgrades with near-zero downtime.',
        impact: [
          'Near-zero downtime on all RDS EOL migrations',
          'Saved ~80% of manual upgrade effort',
        ],
        techStack: ['Aurora', 'DNS', 'CI/CD'],
        lede: 'Automated AWS RDS major-version upgrades across the fleet \u2014 turning what used to be a multi-team weekend into a scheduled, observable, hands-off pipeline.',
        stackDetail: 'Aurora, Route53, GitHub Actions, Python',
        bullets: [
          'Blue/green replicas + DNS cutover for sub-minute downtime windows.',
          'Automated compatibility checks against EOL deprecations before scheduling.',
          'Per-cluster rollback path and post-upgrade health attestation.',
        ],
      },
    ],
    techStack: [
      { category: 'Databases', items: ['Aurora PostgreSQL', 'DynamoDB', 'ElastiCache', 'MongoDB Atlas', 'Cassandra'] },
      { category: 'Cloud', items: ['AWS', 'GCP', 'Multi-region'] },
      { category: 'Infra & Tooling', items: ['Terraform', 'Terragrunt', 'Kubernetes', 'Jenkins', 'Argo Workflows', 'GitHub Actions', 'Backstage', 'Checkov'] },
      { category: 'Languages', items: ['Python', 'Groovy', 'Shell'] },
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
      'Served as the SME for AT&T\'s eSUPPORT application \u2014 12 Oracle databases with cascading GoldenGate replications. Configured the full replication topology (uni-directional, bi-directional, cascade) from scratch as part of a team of 6-7.',
      'This is where the NoSQL world opened up. In one role: Cassandra, DataStax Cassandra, Couchbase, MariaDB, PostgreSQL, MySQL, ScyllaDB \u2014 plus tools like Spark, Hazelcast, Presto, and Zeppelin. The breadth of exposure here shaped every role that came after.',
      'Automated Cassandra cluster repairs using node_exporter, Prometheus, and Grafana, cutting repair time by 80%. Also implemented Presto + Zeppelin for ad-hoc reporting across the distributed store landscape.',
    ],
    highlights: [
      'SME for eSUPPORT: 12 Oracle databases with full GoldenGate cascade topology, configured from scratch',
      'Automated Cassandra repairs with Prometheus/Grafana stack, cutting repair time by 80%',
      'Exposure to 7+ database technologies \u2014 Oracle, Cassandra, Couchbase, MariaDB, PostgreSQL, MySQL, ScyllaDB',
      'Implemented Presto + Zeppelin for ad-hoc analytics over distributed stores',
    ],
    projects: [
      {
        id: 'att-replication',
        title: 'Replication Monitoring',
        description: 'Kept a telecom fleet of Oracle RAC clusters in lockstep.',
        impact: [
          'Configured from scratch across 12 Oracle databases',
          'Established reliable heterogeneous replication for critical application data',
        ],
        techStack: ['Oracle RAC', 'GoldenGate'],
        lede: 'Monitoring and recovery tooling for GoldenGate replication across an Oracle RAC fleet running mission-critical telecom workloads.',
        stackDetail: 'Oracle 11g/12c RAC, GoldenGate, Shell, PL/SQL',
        bullets: [
          'Lag dashboards across primary/secondary topologies.',
          'Automated split-brain detection and operator alerting.',
          'Re-sync runbooks that turned a 6-hour incident into a 30-minute one.',
        ],
      },
      {
        id: 'att-migration',
        title: 'Migration Playbooks',
        description: 'Cutovers measured in minutes, not weekends.',
        impact: ['Cut Cassandra repair time by ~80%'],
        techStack: ['RMAN', 'Data Pump'],
        lede: 'Repeatable migration playbooks for moving large Oracle estates between hardware, storage, and data centers \u2014 always inside the maintenance window.',
        stackDetail: 'RMAN, Data Pump, Oracle 11g/12c',
        bullets: [
          'Pre-migration checklists that caught environment drift before cutover.',
          'Hot-clone strategies that limited downtime to the final DNS flip.',
          'Post-migration smoke tests automated as the final gate.',
        ],
      },
      {
        id: 'att-ha-dr',
        title: 'HA & DR Drills',
        description: 'Regularly pulled the plug on prod (on purpose) so nothing surprised us.',
        impact: ['RPO / RTO measured against SLA targets after every exercise'],
        techStack: ['Data Guard'],
        lede: 'Quarterly DR drills against Oracle Data Guard standbys \u2014 full failovers, full failbacks, full timing reports back to leadership.',
        stackDetail: 'Oracle Data Guard, RAC, Shell',
        bullets: [
          'Drill runbooks rehearsed end-to-end before each game day.',
          'RPO / RTO measured against SLA targets after every exercise.',
          'Findings fed back into infrastructure changes the next quarter.',
        ],
      },
    ],
    techStack: [
      { category: 'Databases', items: ['Oracle RAC', 'Cassandra', 'Couchbase', 'ScyllaDB', 'PostgreSQL', 'MySQL NDB', 'MariaDB'] },
      { category: 'Replication', items: ['GoldenGate', 'Veridata'] },
      { category: 'Analytics', items: ['Presto', 'Zeppelin', 'Spark', 'Hazelcast'] },
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
      'First real DBA job, landed after graduating from Wilmington University. Supported the car reservation applications for both the Dollar and Thrifty brands \u2014 30+ Oracle instances across prod and non-prod, including a 14TB production database.',
      'Led an offshore team of 4 DBAs. Improved application performance by 50% through methodical SQL and database tuning using AWR, ADDM, TKPROF, and Explain Plan. Also executed an Oracle-to-MSSQL data migration via SSIS with minimal downtime.',
      'Where it all started.',
    ],
    highlights: [
      'First production Oracle DBA role \u2014 30+ instances, 14TB production database',
      'Improved app performance 50% through Oracle tuning (AWR/ADDM/TKPROF/Explain Plan)',
      'Led offshore team of 4 DBAs',
      'Executed Oracle \u2192 MSSQL data migration via SSIS with minimal downtime',
    ],
    projects: [
      {
        id: 'rental-core-db',
        title: 'Core Reservations DB',
        description: 'Tuned the queries that rented you a car.',
        impact: ['Improved application performance by ~50%'],
        techStack: ['Oracle 11g', 'PL/SQL'],
        lede: 'DBA on the core reservations system \u2014 the one that decided whether you got the mid-size you booked. Tuning, indexing, and capacity work for peak travel windows.',
        stackDetail: 'Oracle 11g, PL/SQL, AWR/ADDM',
        bullets: [
          'Statement-level tuning for the highest-traffic booking flows.',
          'Index strategy refresh that cut peak-hour wait events significantly.',
          'Capacity forecasting tied to seasonal demand curves.',
        ],
      },
      {
        id: 'rental-migration',
        title: 'DTAG \u2192 Hertz Migration',
        description: 'Merged two data estates post-acquisition without losing a single booking.',
        impact: ['Zero data loss migration with minimal downtime'],
        techStack: ['RMAN', 'Data Pump'],
        lede: 'Data integration work during the Hertz acquisition of Dollar Thrifty \u2014 reconciling schemas, harmonizing identifiers, and keeping the rental fleet bookable throughout.',
        stackDetail: 'RMAN, Data Pump, Oracle 11g, Informatica',
        bullets: [
          'Schema-mapping discovery across two production estates.',
          'Phased data movement with reconciliation reports per phase.',
          'Zero-loss cutover validated against booking-system audit logs.',
        ],
      },
      {
        id: 'rental-batch',
        title: 'Nightly Batch',
        description: 'If you returned a car at 3am, this ran your receipt.',
        impact: ['Eliminated manual backup management across 30+ instances'],
        techStack: ['Shell', 'PL/SQL'],
        lede: 'The nightly batch chain that closed every rental \u2014 billing, accounting, fleet status \u2014 and called you at 3am if any link broke.',
        stackDetail: 'Shell, PL/SQL, cron, Oracle 11g',
        bullets: [
          'Job dependency graph rebuilt for clarity and easier on-call recovery.',
          'Failure-isolation logic so a stuck job no longer halted the entire chain.',
          'Runtime telemetry that turned "is batch done?" into a one-glance answer.',
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
