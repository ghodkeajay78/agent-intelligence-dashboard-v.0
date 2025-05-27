export interface Framework {
  id: string;
  name: string;
  description: string;
  toolSupport: string;
  memoryManagement: string;
  multiAgentSupport: string;
  uiSupport: string;
  evalIntegration: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  website: string;
  github: string;
}

export const frameworks: Framework[] = [
  {
    id: "langchain",
    name: "LangChain",
    description: "Comprehensive framework for building applications with large language models",
    toolSupport: "Extensive",
    memoryManagement: "Built-in",
    multiAgentSupport: "Limited",
    uiSupport: "External",
    evalIntegration: "LangSmith",
    bestFor: "Complex LLM applications with tool integration",
    pros: ["Rich ecosystem", "Great documentation", "Active community", "Tool integrations"],
    cons: ["Complex for simple use cases", "Performance overhead", "Frequent API changes"],
    website: "https://langchain.com",
    github: "https://github.com/langchain-ai/langchain"
  },
  {
    id: "autogen",
    name: "AutoGen",
    description: "Microsoft's framework for creating multi-agent conversational systems",
    toolSupport: "Moderate",
    memoryManagement: "Basic",
    multiAgentSupport: "Excellent",
    uiSupport: "Limited",
    evalIntegration: "Custom",
    bestFor: "Multi-agent conversations and collaboration",
    pros: ["Multi-agent focus", "Easy setup", "Microsoft backing", "Research-oriented"],
    cons: ["Limited tool ecosystem", "Basic UI support", "Newer framework"],
    website: "https://microsoft.github.io/autogen/",
    github: "https://github.com/microsoft/autogen"
  },
  {
    id: "openai-sdk",
    name: "OpenAI SDK",
    description: "Official SDK for building applications with OpenAI's models",
    toolSupport: "Function calling",
    memoryManagement: "Manual",
    multiAgentSupport: "Manual",
    uiSupport: "Manual",
    evalIntegration: "Evals library",
    bestFor: "Direct OpenAI integration with full control",
    pros: ["Official support", "Latest features", "High performance", "Simple API"],
    cons: ["OpenAI-only", "Manual setup", "Limited abstractions", "No built-in agents"],
    website: "https://platform.openai.com",
    github: "https://github.com/openai/openai-python"
  },
  {
    id: "crewai",
    name: "CrewAI",
    description: "Framework for orchestrating role-playing autonomous AI agents",
    toolSupport: "Good",
    memoryManagement: "Built-in",
    multiAgentSupport: "Excellent",
    uiSupport: "Basic",
    evalIntegration: "Custom",
    bestFor: "Role-based multi-agent teams",
    pros: ["Role-based agents", "Easy multi-agent setup", "Good documentation", "Active development"],
    cons: ["Newer framework", "Limited ecosystem", "Python-only", "Basic UI"],
    website: "https://crewai.com",
    github: "https://github.com/joaomdmoura/crewAI"
  },
  {
    id: "flowise",
    name: "Flowise",
    description: "Visual tool for building LLM flows using LangChain components",
    toolSupport: "LangChain tools",
    memoryManagement: "Visual config",
    multiAgentSupport: "Limited",
    uiSupport: "Excellent",
    evalIntegration: "Limited",
    bestFor: "No-code LLM application development",
    pros: ["Visual interface", "No-code", "LangChain integration", "Easy deployment"],
    cons: ["Limited customization", "Performance constraints", "UI-dependent", "Complex flows can be messy"],
    website: "https://flowiseai.com",
    github: "https://github.com/FlowiseAI/Flowise"
  },
  {
    id: "haystack",
    name: "Haystack",
    description: "End-to-end framework for building search systems and RAG applications",
    toolSupport: "Search-focused",
    memoryManagement: "Document stores",
    multiAgentSupport: "Limited",
    uiSupport: "External",
    evalIntegration: "Built-in",
    bestFor: "Search and RAG applications",
    pros: ["Search expertise", "Production-ready", "Good performance", "Evaluation tools"],
    cons: ["Search-focused", "Complex setup", "Limited general agents", "Steep learning curve"],
    website: "https://haystack.deepset.ai",
    github: "https://github.com/deepset-ai/haystack"
  }
];