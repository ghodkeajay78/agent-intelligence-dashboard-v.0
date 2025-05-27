export interface UseCase {
  id: string;
  title: string;
  description: string;
  category: string;
  tools: string[];
  complexity: "Simple" | "Medium" | "Complex";
  industry: string;
  example: string;
  benefits: string[];
}

export const useCases: UseCase[] = [
  {
    id: "recruiter-agent",
    title: "AI Recruiter Agent",
    description: "Automates candidate screening, interview scheduling, and initial assessments",
    category: "HR & Recruitment",
    tools: ["LinkedIn API", "Email automation", "Calendar integration", "ATS systems"],
    complexity: "Medium",
    industry: "Human Resources",
    example: "Screens 100+ resumes daily, schedules interviews, and provides candidate summaries",
    benefits: ["80% time savings", "Consistent screening", "24/7 availability", "Bias reduction"]
  },
  {
    id: "research-assistant",
    title: "Research Assistant Agent",
    description: "Conducts literature reviews, summarizes papers, and tracks research trends",
    category: "Academic & Research",
    tools: ["ArXiv API", "PubMed", "Web scraping", "PDF processing", "Citation management"],
    complexity: "Complex",
    industry: "Academia",
    example: "Analyzes 50+ papers weekly, creates research summaries, and identifies knowledge gaps",
    benefits: ["Comprehensive coverage", "Faster insights", "Trend identification", "Citation tracking"]
  },
  {
    id: "clinical-research-agent",
    title: "Clinical Research Agent",
    description: "Assists in clinical trial design, patient recruitment, and data analysis",
    category: "Healthcare",
    tools: ["Medical databases", "Patient records", "Statistical analysis", "Regulatory compliance"],
    complexity: "Complex",
    industry: "Healthcare",
    example: "Identifies eligible patients for trials and monitors adverse events",
    benefits: ["Patient safety", "Compliance assurance", "Faster recruitment", "Risk detection"]
  },
  {
    id: "customer-support-agent",
    title: "Customer Support Agent",
    description: "Handles customer inquiries, resolves issues, and escalates complex problems",
    category: "Customer Service",
    tools: ["Knowledge base", "Ticketing system", "Chat platforms", "CRM integration"],
    complexity: "Simple",
    industry: "Technology",
    example: "Resolves 70% of support tickets automatically with human handoff for complex issues",
    benefits: ["24/7 support", "Instant responses", "Cost reduction", "Scalability"]
  },
  {
    id: "financial-advisor-agent",
    title: "Financial Advisory Agent",
    description: "Provides personalized investment advice and portfolio management",
    category: "Finance",
    tools: ["Market data APIs", "Portfolio analytics", "Risk assessment", "Regulatory compliance"],
    complexity: "Complex",
    industry: "Financial Services",
    example: "Manages portfolios worth $50M+ with real-time risk monitoring",
    benefits: ["Personalized advice", "Risk management", "Cost efficiency", "24/7 monitoring"]
  },
  {
    id: "content-creator-agent",
    title: "Content Creation Agent",
    description: "Generates blog posts, social media content, and marketing materials",
    category: "Marketing",
    tools: ["Content APIs", "Image generation", "SEO tools", "Publishing platforms"],
    complexity: "Medium",
    industry: "Marketing",
    example: "Produces 20+ blog posts weekly with SEO optimization and social media promotion",
    benefits: ["Consistent output", "SEO optimization", "Multi-platform publishing", "Brand consistency"]
  },
  {
    id: "devops-agent",
    title: "DevOps Automation Agent",
    description: "Manages deployment pipelines, monitors infrastructure, and handles incidents",
    category: "Development",
    tools: ["CI/CD tools", "Monitoring systems", "Cloud APIs", "Incident management"],
    complexity: "Complex",
    industry: "Technology",
    example: "Handles 95% of deployments automatically with rollback capabilities",
    benefits: ["Faster deployments", "Reduced errors", "Automated monitoring", "Quick recovery"]
  },
  {
    id: "legal-document-agent",
    title: "Legal Document Agent",
    description: "Reviews contracts, identifies risks, and ensures compliance",
    category: "Legal",
    tools: ["Document processing", "Legal databases", "Risk analysis", "Compliance checking"],
    complexity: "Complex",
    industry: "Legal Services",
    example: "Reviews 100+ contracts daily, flagging potential risks and compliance issues",
    benefits: ["Risk reduction", "Compliance assurance", "Time savings", "Consistency"]
  }
];