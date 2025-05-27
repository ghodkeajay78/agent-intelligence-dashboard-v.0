export interface AgentType {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  useCases: string[];
  examples: string[];
  diagram?: string;
}

export const agentTypes: AgentType[] = [
  {
    id: "reactive",
    name: "Reactive Agents",
    description: "Agents that respond to environmental changes without maintaining internal state or planning ahead.",
    characteristics: [
      "Event-driven responses",
      "No internal world model",
      "Fast response times",
      "Simple decision rules"
    ],
    useCases: [
      "Chatbots with predefined responses",
      "Alert systems",
      "Simple automation scripts"
    ],
    examples: [
      "Customer service bots",
      "Monitoring alerts",
      "Basic Q&A systems"
    ]
  },
  {
    id: "proactive",
    name: "Proactive Agents",
    description: "Goal-oriented agents that maintain internal state and can plan future actions to achieve objectives.",
    characteristics: [
      "Goal-driven behavior",
      "Internal state management",
      "Planning capabilities",
      "Anticipatory actions"
    ],
    useCases: [
      "Personal assistants",
      "Project management",
      "Predictive maintenance"
    ],
    examples: [
      "Calendar scheduling agents",
      "Investment advisors",
      "Supply chain optimizers"
    ]
  },
  {
    id: "tool-using",
    name: "Tool-Using Agents",
    description: "Agents equipped with external tools and APIs to extend their capabilities beyond text generation.",
    characteristics: [
      "API integration",
      "Function calling",
      "Tool selection logic",
      "Context-aware tool usage"
    ],
    useCases: [
      "Data analysis",
      "Web research",
      "Code execution",
      "File manipulation"
    ],
    examples: [
      "Code interpreters",
      "Research assistants",
      "Data scientists",
      "DevOps automation"
    ]
  },
  {
    id: "human-in-loop",
    name: "Human-in-the-Loop Agents",
    description: "Agents designed to collaborate with humans, seeking approval or guidance for critical decisions.",
    characteristics: [
      "Human approval workflows",
      "Escalation mechanisms",
      "Collaborative interfaces",
      "Feedback incorporation"
    ],
    useCases: [
      "Content moderation",
      "Medical diagnosis support",
      "Financial decisions",
      "Legal document review"
    ],
    examples: [
      "Medical AI assistants",
      "Investment approval systems",
      "Content review tools"
    ]
  },
  {
    id: "multi-agent",
    name: "Multi-Agent Systems",
    description: "Collections of specialized agents that coordinate and collaborate to solve complex problems.",
    characteristics: [
      "Agent coordination",
      "Role specialization",
      "Communication protocols",
      "Emergent behaviors"
    ],
    useCases: [
      "Software development teams",
      "Research collaborations",
      "Complex problem solving",
      "Distributed decision making"
    ],
    examples: [
      "AutoGen teams",
      "CrewAI workflows",
      "Research paper generation",
      "Software engineering teams"
    ]
  },
  {
    id: "autonomous-planners",
    name: "Autonomous Task Planners",
    description: "Advanced agents capable of breaking down complex goals into actionable steps and executing them independently.",
    characteristics: [
      "Task decomposition",
      "Dynamic planning",
      "Self-monitoring",
      "Adaptive execution"
    ],
    useCases: [
      "Project automation",
      "Complex workflows",
      "Research tasks",
      "Business process automation"
    ],
    examples: [
      "AutoGPT",
      "BabyAGI",
      "LangChain agents",
      "Custom planning systems"
    ]
  }
];