export interface Benchmark {
  id: string;
  title: string;
  description: string;
  tags: string[];
  lastUpdated: string;
  creator: string;
  evaluation: string;
  metrics: string;
  scores: Array<{
    model: string;
    score: string;
  }>;
  paper: string;
  repo: string;
}

export const benchmarks: Benchmark[] = [
  {
    id: "agentbench",
    title: "AgentBench",
    description: "Comprehensive benchmark evaluating agents across diverse real-world tasks including coding, reasoning, and tool usage.",
    tags: ["reasoning", "tools", "web"],
    lastUpdated: "Dec 2023",
    creator: "Tsinghua University & Microsoft Research",
    evaluation: "Multi-task evaluation including coding, reasoning, tool usage, and web navigation tasks.",
    metrics: "Success rate, efficiency score, and qualitative assessment across 8 distinct environments.",
    scores: [
      { model: "GPT-4", score: "42.3%" },
      { model: "Claude-3", score: "38.7%" },
      { model: "Gemini 1.5", score: "34.1%" },
      { model: "Mistral", score: "28.9%" }
    ],
    paper: "https://arxiv.org/abs/2308.03688",
    repo: "https://github.com/THUDM/AgentBench"
  },
  {
    id: "gaia",
    title: "GAIA",
    description: "General AI Assistant benchmark focusing on real-world question answering requiring multi-step reasoning.",
    tags: ["reasoning", "web", "planning"],
    lastUpdated: "Nov 2023",
    creator: "Meta AI Research & Hugging Face",
    evaluation: "Question-answering tasks requiring tool use, web search, and multi-modal reasoning.",
    metrics: "Accuracy on multi-step reasoning tasks with varying difficulty levels (Level 1-3).",
    scores: [
      { model: "GPT-4", score: "91.2%" },
      { model: "Claude-3", score: "86.4%" },
      { model: "Gemini 1.5", score: "83.7%" },
      { model: "Mistral", score: "74.3%" }
    ],
    paper: "https://arxiv.org/abs/2311.12983",
    repo: "https://github.com/gaia-benchmark/gaia"
  },
  {
    id: "autogenbench",
    title: "AutoGenBench",
    description: "Specialized benchmark for multi-agent systems and autonomous agent workflows with complex task planning.",
    tags: ["tools", "planning"],
    lastUpdated: "Jan 2024",
    creator: "Microsoft Research",
    evaluation: "Complex task planning, multi-agent coordination, and autonomous workflow execution.",
    metrics: "Task completion rate, coordination efficiency, and error recovery capabilities.",
    scores: [
      { model: "GPT-4", score: "85.1%" },
      { model: "Claude-3", score: "89.3%" },
      { model: "Gemini 1.5", score: "81.2%" },
      { model: "Mistral", score: "68.7%" }
    ],
    paper: "https://arxiv.org/abs/2401.04821",
    repo: "https://github.com/microsoft/autogen"
  }
];
