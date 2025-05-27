export interface Insight {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
  icon: string;
  iconColor: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
}

export const insights: Insight[] = [
  {
    id: "1",
    title: "Claude-3 Overtakes GPT-4 on GAIA Web Tasks!",
    description: "Latest evaluation shows Claude-3 achieving 93% accuracy on web-based reasoning tasks, surpassing GPT-4's previous benchmark of 91%.",
    timeAgo: "2 hours ago",
    icon: "Trophy",
    iconColor: "text-green-600",
    tags: [
      { name: "GAIA", color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300" },
      { name: "Web", color: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300" }
    ]
  },
  {
    id: "2",
    title: "New AgentBench Dataset Released",
    description: "AgentBench v2.0 introduces 500 new tasks focusing on multi-modal reasoning and enhanced tool usage scenarios.",
    timeAgo: "6 hours ago",
    icon: "TrendingUp",
    iconColor: "text-blue-600",
    tags: [
      { name: "AgentBench", color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300" },
      { name: "Tools", color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300" }
    ]
  },
  {
    id: "3",
    title: "Gemini 1.5 Shows Improved Planning",
    description: "Recent AutoGenBench results indicate a 15% improvement in planning capabilities compared to the previous version.",
    timeAgo: "1 day ago",
    icon: "Brain",
    iconColor: "text-purple-600",
    tags: [
      { name: "AutoGenBench", color: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300" },
      { name: "Planning", color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300" }
    ]
  },
  {
    id: "4",
    title: "Tool Usage Benchmark Analysis",
    description: "Comprehensive analysis reveals that specialized tool-calling training significantly impacts agent performance across all models.",
    timeAgo: "2 days ago",
    icon: "Settings",
    iconColor: "text-orange-600",
    tags: [
      { name: "Tools", color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300" },
      { name: "Analysis", color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300" }
    ]
  },
  {
    id: "5",
    title: "Benchmark Reliability Study",
    description: "New research highlights the importance of diverse evaluation metrics and potential biases in current benchmarking approaches.",
    timeAgo: "3 days ago",
    icon: "AlertTriangle",
    iconColor: "text-red-600",
    tags: [
      { name: "Research", color: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300" },
      { name: "Methodology", color: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300" }
    ]
  },
  {
    id: "6",
    title: "Open Source Agent Framework",
    description: "Community launches open-source benchmarking framework enabling researchers to evaluate custom agents against standardized metrics.",
    timeAgo: "1 week ago",
    icon: "Rocket",
    iconColor: "text-indigo-600",
    tags: [
      { name: "Open Source", color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300" },
      { name: "Framework", color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300" }
    ]
  }
];
