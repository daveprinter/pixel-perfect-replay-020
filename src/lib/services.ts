import {
  Users, Briefcase, Compass, Wallet, GraduationCap, Target, FileText, Handshake, Building2, Puzzle,
  type LucideIcon,
} from "lucide-react";

export type Audience = "Business" | "Individual";
export interface Service {
  slug: string;
  name: string;
  category: "Talent" | "Advisory" | "Administration" | "Careers";
  audience: Audience[];
  icon: LucideIcon;
  short: string;
  problems: string[];
  deliverables: string[];
  provide: string[];
  whatsapp: string;
  price: string; // "Request a Quote" until confirmed
  faqs: { q: string; a: string }[];
  enabled: boolean;
}

const quote = "Request a Quote";
const commonFaq = [
  { q: "How is pricing determined?", a: "Pricing depends on the scope of your requirements. We discuss scope with you first and share a quote before any engagement." },
  { q: "Do I pay when I submit a request?", a: "No. Submitting a request is free. No payment is collected on this website." },
];

export const services: Service[] = [
  {
    slug: "recruitment", name: "Recruitment and Talent Acquisition", category: "Talent", audience: ["Business"], icon: Users,
    short: "Identify, screen, shortlist and recruit suitable candidates for your open positions.",
    problems: ["Hard-to-fill roles", "High volume of unqualified applicants", "Limited internal hiring capacity"],
    deliverables: ["Recruitment planning", "Vacancy advertising", "CV screening", "Candidate shortlisting", "Interview coordination", "Candidate recommendations"],
    provide: ["Job description", "Required qualifications", "Proposed start date", "Salary range (if available)"],
    whatsapp: "Hello, I am interested in your Recruitment and Talent Acquisition service. Please share more information about the process and pricing.",
    price: quote, faqs: commonFaq, enabled: true,
  },
  {
    slug: "staffing", name: "Staffing and Workforce Solutions", category: "Talent", audience: ["Business"], icon: Briefcase,
    short: "Temporary, contract, project-based or permanent personnel when you need them.",
    problems: ["Seasonal or project demand", "Sudden staff shortages", "Scaling teams quickly"],
    deliverables: ["Workforce requirements assessment", "Candidate sourcing", "Staffing coordination", "Contract or placement administration, where offered"],
    provide: ["Number of staff needed", "Role profiles", "Duration of engagement", "Work location"],
    whatsapp: "Hello, I would like to discuss your Staffing and Workforce Solutions service. Please contact me about my staffing requirements.",
    price: quote, faqs: commonFaq, enabled: true,
  },
  {
    slug: "hr-consultancy", name: "HR Consultancy", category: "Advisory", audience: ["Business"], icon: Compass,
    short: "Professional guidance to improve HR processes and employee management.",
    problems: ["Outdated or missing HR policies", "Unclear structures and roles", "Employee relations challenges"],
    deliverables: ["HR policy development", "HR process reviews", "Employee relations guidance", "Performance management frameworks", "Workforce planning", "Organizational structure reviews"],
    provide: ["Current HR policies (if any)", "Organization chart", "Key challenges you face"],
    whatsapp: "Hello, I am interested in HR Consultancy services for my organization. I would like to discuss my requirements and your pricing.",
    price: quote, faqs: commonFaq, enabled: true,
  },
  {
    slug: "payroll", name: "Payroll and HR Administration", category: "Administration", audience: ["Business"], icon: Wallet,
    short: "Support with payroll processes and employee administration.",
    problems: ["Time-consuming payroll runs", "Scattered employee records", "Leave tracking gaps"],
    deliverables: ["Payroll processing support", "Employee records administration", "Leave and attendance administration", "HR reporting", "Payroll compliance coordination"],
    provide: ["Number of employees", "Pay frequency", "Current payroll process"],
    whatsapp: "Hello, I would like more information about your Payroll and HR Administration services.",
    price: quote, faqs: [...commonFaq, { q: "Do you file statutory returns?", a: "The exact scope of compliance support is agreed during consultation." }], enabled: true,
  },
  {
    slug: "training", name: "Employee Training and Development", category: "Advisory", audience: ["Business"], icon: GraduationCap,
    short: "Structured programmes that build workforce capability.",
    problems: ["Skills gaps", "New managers without leadership support", "Low engagement"],
    deliverables: ["Training needs assessment", "Employee development planning", "Leadership development", "Workplace skills training", "Training coordination"],
    provide: ["Team size", "Skill areas of interest", "Preferred format and dates"],
    whatsapp: "Hello, I would like to inquire about Employee Training and Development services.",
    price: quote, faqs: commonFaq, enabled: true,
  },
  {
    slug: "performance", name: "Performance Management", category: "Advisory", audience: ["Business"], icon: Target,
    short: "Effective evaluation and improvement processes for your people.",
    problems: ["Inconsistent appraisals", "Unclear targets", "Underperformance without a plan"],
    deliverables: ["Performance review frameworks", "KPI development", "Appraisal templates", "Performance improvement planning"],
    provide: ["Current appraisal approach", "Departments in scope", "Business goals"],
    whatsapp: "Hello, I would like to learn more about your Performance Management service.",
    price: quote, faqs: commonFaq, enabled: true,
  },
  {
    slug: "cv-writing", name: "CV Writing and Career Support", category: "Careers", audience: ["Individual"], icon: FileText,
    short: "Professional career documents and job-search preparation.",
    problems: ["CV not getting responses", "Career change", "Interview nerves"],
    deliverables: ["CV review", "Professional CV writing", "Cover letter preparation", "Interview preparation", "Career guidance"],
    provide: ["Your current CV", "Target roles", "Key achievements"],
    whatsapp: "Hello, I am interested in your CV Writing and Career Support service. Please share the available packages and pricing.",
    price: quote, faqs: commonFaq, enabled: true,
  },
  {
    slug: "job-placement", name: "Job Placement", category: "Careers", audience: ["Individual"], icon: Handshake,
    short: "Connecting suitable candidates with relevant employment opportunities.",
    problems: ["Finding the right openings", "Navigating application processes"],
    deliverables: ["Candidate profiling", "Matching with suitable vacancies", "Application guidance", "Interview preparation"],
    provide: ["Updated CV", "Preferred roles and locations", "Availability"],
    whatsapp: "Hello, I would like to inquire about your Job Placement service and the process for candidates.",
    price: quote, faqs: [...commonFaq, { q: "Is placement guaranteed?", a: "No. We work to match you with suitable openings, but final hiring decisions rest with employers." }], enabled: true,
  },
  {
    slug: "outsourcing", name: "Employee Outsourcing", category: "Administration", audience: ["Business"], icon: Building2,
    short: "Outsourced staff managed on your behalf, so you can focus on your core business.",
    problems: ["Administrative burden of non-core staff", "Need for flexible headcount"],
    deliverables: ["Requirements assessment", "Staff sourcing", "Ongoing staff administration, where offered"],
    provide: ["Roles to outsource", "Number of staff", "Expected duration"],
    whatsapp: "Hello, I would like to learn more about your Employee Outsourcing service.",
    price: quote, faqs: commonFaq, enabled: true,
  },
  {
    slug: "custom", name: "Customized HR Solutions", category: "Advisory", audience: ["Business", "Individual"], icon: Puzzle,
    short: "Tailored support for HR needs that don't fit a standard package.",
    problems: ["Unique or combined HR needs"],
    deliverables: ["Requirements discussion", "Tailored proposal", "Agreed delivery plan"],
    provide: ["A short description of what you need"],
    whatsapp: "Hello, I would like to discuss a customized HR solution. My requirements are: ",
    price: quote, faqs: commonFaq, enabled: true,
  },
];

export const activeServices = services.filter((s) => s.enabled);
export const getService = (slug: string) => activeServices.find((s) => s.slug === slug);
