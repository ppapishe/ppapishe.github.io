import type { PersonalData } from '../types'

export const personal: PersonalData = {
  name: 'Praneeth Papishetty',
  title: 'Builder · Datastores · Slack',
  location: 'Kirkland, WA',
  bio: [
    "I build tools for the people who keep production alive. At Warner Bros. Discovery, that meant DIM — a platform that turned a three-week database provisioning ticket into a twelve-hour self-serve flow. Now I'm on Slack's Datastores Foundation team, applying the same playbook to Vitess and MySQL at a much louder scale.",
    'Took the long way in — pharmacy, then chemistry, then databases finally stuck. The work I keep coming back to is the same: spot the friction, ship the tool that eliminates it, move on.',
  ],
  email: 'me@praneethpapishetty.com',
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
