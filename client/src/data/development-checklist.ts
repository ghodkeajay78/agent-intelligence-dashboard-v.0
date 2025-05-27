export interface ChecklistStep {
  id: string;
  title: string;
  description: string;
  details: string[];
  tools: string[];
  estimatedTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  order: number;
}

export const developmentChecklist: ChecklistStep[] = [
  {
    id: "define-problem",
    title: "Define Problem",
    description: "Clearly articulate the problem your agent will solve and success criteria",
    details: [
      "Write a clear problem statement",
      "Define success metrics and KPIs",
      "Identify target users and use cases",
      "Document constraints and requirements",
      "Research existing solutions and gaps"
    ],
    tools: ["Problem definition frameworks", "User research tools", "Competitive analysis"],
    estimatedTime: "1-2 days",
    difficulty: "Beginner",
    order: 1
  },
  {
    id: "choose-base-model",
    title: "Choose Base Model",
    description: "Select the appropriate language model based on your requirements",
    details: [
      "Evaluate model capabilities (reasoning, tool use, etc.)",
      "Consider cost and latency requirements",
      "Test model performance on sample tasks",
      "Review model limitations and safety considerations",
      "Choose between API vs self-hosted options"
    ],
    tools: ["OpenAI API", "Anthropic Claude", "Google Gemini", "Open source models"],
    estimatedTime: "2-3 days",
    difficulty: "Intermediate",
    order: 2
  },
  {
    id: "task-decomposition",
    title: "Task Decomposition",
    description: "Break down complex problems into manageable subtasks",
    details: [
      "Map out the complete workflow",
      "Identify decision points and branching logic",
      "Define input/output for each subtask",
      "Plan error handling and edge cases",
      "Design task prioritization logic"
    ],
    tools: ["Flowchart tools", "Mind mapping", "Process documentation"],
    estimatedTime: "2-4 days",
    difficulty: "Intermediate",
    order: 3
  },
  {
    id: "tool-selection",
    title: "Tool Selection",
    description: "Choose and integrate external tools and APIs your agent needs",
    details: [
      "Identify required external capabilities",
      "Research available APIs and tools",
      "Design tool calling interface",
      "Implement authentication and rate limiting",
      "Create tool usage documentation"
    ],
    tools: ["API documentation", "Tool libraries", "Authentication systems"],
    estimatedTime: "3-5 days",
    difficulty: "Intermediate",
    order: 4
  },
  {
    id: "memory-strategy",
    title: "Memory Strategy",
    description: "Design how your agent will store and retrieve information",
    details: [
      "Choose memory architecture (short-term, long-term)",
      "Design context management strategy",
      "Implement conversation history handling",
      "Plan for knowledge base integration",
      "Design memory retrieval mechanisms"
    ],
    tools: ["Vector databases", "Traditional databases", "Memory frameworks"],
    estimatedTime: "2-4 days",
    difficulty: "Advanced",
    order: 5
  },
  {
    id: "reasoning-planning",
    title: "Reasoning/Planning Loop",
    description: "Implement the core decision-making and planning logic",
    details: [
      "Design reasoning framework (ReAct, Chain-of-Thought, etc.)",
      "Implement planning algorithms",
      "Create self-reflection mechanisms",
      "Design error recovery strategies",
      "Implement adaptive behavior patterns"
    ],
    tools: ["Planning frameworks", "Reasoning libraries", "Logic engines"],
    estimatedTime: "5-10 days",
    difficulty: "Advanced",
    order: 6
  },
  {
    id: "evaluation-strategy",
    title: "Evaluation Strategy",
    description: "Develop comprehensive testing and evaluation methods",
    details: [
      "Design test cases and scenarios",
      "Implement automated testing",
      "Create performance benchmarks",
      "Design human evaluation protocols",
      "Set up continuous monitoring"
    ],
    tools: ["Testing frameworks", "Benchmark suites", "Monitoring tools"],
    estimatedTime: "3-5 days",
    difficulty: "Intermediate",
    order: 7
  },
  {
    id: "ux-layer",
    title: "UX Layer (CLI, Web, Bot)",
    description: "Build user interfaces for interacting with your agent",
    details: [
      "Choose interface type (CLI, web app, chat bot)",
      "Design user interaction flows",
      "Implement real-time communication",
      "Create user authentication",
      "Design responsive and accessible UI"
    ],
    tools: ["Web frameworks", "CLI libraries", "Chat platforms", "UI libraries"],
    estimatedTime: "5-15 days",
    difficulty: "Intermediate",
    order: 8
  },
  {
    id: "hosting-monitoring",
    title: "Hosting and Monitoring",
    description: "Deploy your agent and set up production monitoring",
    details: [
      "Choose deployment platform",
      "Set up CI/CD pipelines",
      "Implement logging and monitoring",
      "Configure scaling and load balancing",
      "Set up alerting and incident response"
    ],
    tools: ["Cloud platforms", "Container orchestration", "Monitoring services", "CI/CD tools"],
    estimatedTime: "3-7 days",
    difficulty: "Advanced",
    order: 9
  }
];