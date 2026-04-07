import type { PersonalData } from '../types'

export const personal: PersonalData = {
  name: 'Praneeth Papishetty',
  title: 'Senior Software Engineer at Slack',
  location: 'Kirkland, WA',
  bio: [
    'Started as an Oracle DBA at Dollar Thrifty and worked my way up through database reliability and infrastructure engineering — AT&T, HBO, Warner Bros. Discovery, and now Slack.',
    'At WBD, built DIM (Database Infra Manager), cutting database provisioning from 3 weeks to 12 hours across 1,200+ Aurora clusters. Now on the Datastores Foundation team at Slack, managing Vitess and MySQL at one of the largest scales in production.',
  ],
  email: 'praneeth1962@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/praneethpapishetty/',
  github: 'https://github.com/ppapishe',
  instagram: 'https://www.instagram.com/praneeth1507/',
  skills: [
    { category: 'Databases', items: ['Vitess', 'MySQL', 'PostgreSQL', 'Oracle RAC', 'Cassandra', 'DynamoDB', 'ElastiCache', 'Couchbase', 'ScyllaDB', 'MongoDB', 'Redis'] },
    { category: 'Cloud & Infra', items: ['AWS', 'GCP', 'Kubernetes', 'Terraform', 'Terragrunt', 'Argo Workflows'] },
    { category: 'Languages', items: ['Python', 'Go', 'SQL', 'Shell', 'Groovy'] },
    { category: 'Tools', items: ['Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'Backstage', 'Checkov', 'Steampipe'] },
  ],
}
