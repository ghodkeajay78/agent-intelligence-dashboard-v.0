export interface ModelPerformance {
  model: string;
  company: string;
  reasoning: { score: number; benchmark: string; details: string };
  toolUse: { score: number; benchmark: string; details: string };
  webSearch: { score: number; benchmark: string; details: string };
  planning: { score: number; benchmark: string; details: string };
}

export interface BaseBenchmarkPerformance {
  model: string;
  company: string;
  helm: { score: number; description: string };
  opencompass: { score: number; description: string };
  agieval: { score: number; description: string };
  mmlu: { score: number; description: string };
}

export const modelPerformance: ModelPerformance[] = [
  {
    model: "GPT-4",
    company: "OpenAI",
    reasoning: {
      score: 94,
      benchmark: "GAIA",
      details: "Excellent performance on complex multi-step reasoning tasks requiring logical inference and problem decomposition."
    },
    toolUse: {
      score: 88,
      benchmark: "AgentBench",
      details: "Strong tool integration capabilities with reliable API calls and parameter handling across diverse tools."
    },
    webSearch: {
      score: 91,
      benchmark: "GAIA",
      details: "Superior web navigation and information extraction from multiple sources with high accuracy."
    },
    planning: {
      score: 85,
      benchmark: "AutoGenBench",
      details: "Solid planning capabilities with good task decomposition and sequential execution strategies."
    }
  },
  {
    model: "Claude 3",
    company: "Anthropic",
    reasoning: {
      score: 92,
      benchmark: "GAIA",
      details: "Exceptional reasoning abilities with nuanced understanding of complex logical relationships."
    },
    toolUse: {
      score: 82,
      benchmark: "AgentBench",
      details: "Good tool usage with occasional challenges in complex multi-tool coordination scenarios."
    },
    webSearch: {
      score: 86,
      benchmark: "GAIA",
      details: "Reliable web search capabilities with strong content understanding and synthesis."
    },
    planning: {
      score: 89,
      benchmark: "AutoGenBench",
      details: "Excellent planning with sophisticated strategy formulation and adaptive execution."
    }
  },
  {
    model: "Gemini 1.5",
    company: "Google",
    reasoning: {
      score: 87,
      benchmark: "GAIA",
      details: "Strong reasoning performance with particular strength in multi-modal understanding tasks."
    },
    toolUse: {
      score: 79,
      benchmark: "AgentBench",
      details: "Moderate tool usage capabilities with room for improvement in complex scenarios."
    },
    webSearch: {
      score: 83,
      benchmark: "GAIA",
      details: "Good web search abilities with effective information gathering and processing."
    },
    planning: {
      score: 81,
      benchmark: "AutoGenBench",
      details: "Decent planning capabilities with consistent but sometimes sub-optimal strategies."
    }
  },
  {
    model: "Mistral",
    company: "Mistral AI",
    reasoning: {
      score: 76,
      benchmark: "GAIA",
      details: "Adequate reasoning performance with challenges in highly complex logical scenarios."
    },
    toolUse: {
      score: 71,
      benchmark: "AgentBench",
      details: "Basic tool usage capabilities with frequent errors in multi-step tool interactions."
    },
    webSearch: {
      score: 74,
      benchmark: "GAIA",
      details: "Limited web search effectiveness with inconsistent information extraction quality."
    },
    planning: {
      score: 68,
      benchmark: "AutoGenBench",
      details: "Basic planning abilities with tendency towards simple, linear strategies."
    }
  }
];

export const baseBenchmarkPerformance: BaseBenchmarkPerformance[] = [
  {
    model: "GPT-4",
    company: "OpenAI",
    helm: {
      score: 89.2,
      description: "Holistic Evaluation of Language Models - comprehensive assessment across 42 scenarios."
    },
    opencompass: {
      score: 87.5,
      description: "Open-source evaluation platform with standardized benchmarks for language understanding."
    },
    agieval: {
      score: 85.1,
      description: "Assessment using human-centric standardized exams like SAT, LSAT, and math competitions."
    },
    mmlu: {
      score: 86.4,
      description: "Massive Multitask Language Understanding across 57 academic subjects."
    }
  },
  {
    model: "Claude 3",
    company: "Anthropic",
    helm: {
      score: 84.7,
      description: "Strong performance across diverse evaluation scenarios with particular strength in safety."
    },
    opencompass: {
      score: 82.3,
      description: "Solid evaluation results with consistent performance across multiple domains."
    },
    agieval: {
      score: 81.9,
      description: "Good performance on standardized tests with strong reasoning capabilities."
    },
    mmlu: {
      score: 84.2,
      description: "Excellent multitask understanding across academic disciplines."
    }
  },
  {
    model: "Gemini 1.5",
    company: "Google",
    helm: {
      score: 78.9,
      description: "Moderate performance with strengths in multimodal understanding tasks."
    },
    opencompass: {
      score: 79.4,
      description: "Consistent evaluation results across standard benchmarks."
    },
    agieval: {
      score: 76.8,
      description: "Adequate performance on standardized exams with room for improvement."
    },
    mmlu: {
      score: 81.9,
      description: "Good multitask performance across diverse academic subjects."
    }
  },
  {
    model: "Mistral",
    company: "Mistral AI",
    helm: {
      score: 71.2,
      description: "Basic performance levels with challenges in complex reasoning tasks."
    },
    opencompass: {
      score: 72.8,
      description: "Moderate evaluation results showing potential for improvement."
    },
    agieval: {
      score: 69.5,
      description: "Limited performance on standardized tests requiring advanced reasoning."
    },
    mmlu: {
      score: 73.1,
      description: "Decent multitask understanding with room for enhancement."
    }
  }
];
