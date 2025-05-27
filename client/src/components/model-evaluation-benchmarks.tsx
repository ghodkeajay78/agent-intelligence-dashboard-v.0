import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TrendingUp, Compass, GraduationCap, BookOpen, Bot, ArrowUpDown, ExternalLink, FileText } from "lucide-react";
import { baseBenchmarkPerformance, type BaseBenchmarkPerformance } from "@/data/models";
import { cn } from "@/lib/utils";

const benchmarks = [
  { key: "helm", name: "HELM", icon: TrendingUp, color: "text-blue-600" },
  { key: "opencompass", name: "OpenCompass", icon: Compass, color: "text-green-600" },
  { key: "agieval", name: "AGIEval", icon: GraduationCap, color: "text-purple-600" },
  { key: "mmlu", name: "MMLU", icon: BookOpen, color: "text-orange-600" }
];

const modelColors = {
  "GPT-4": "bg-green-100 dark:bg-green-900 text-green-600",
  "Claude 3": "bg-blue-100 dark:bg-blue-900 text-blue-600",
  "Gemini 1.5": "bg-purple-100 dark:bg-purple-900 text-purple-600",
  "Mistral": "bg-orange-100 dark:bg-orange-900 text-orange-600"
};

function getPerformanceIcon(score: number) {
  if (score >= 85) return "✅";
  if (score >= 75) return "⚠️";
  return "❌";
}

interface ModelDetail {
  model: BaseBenchmarkPerformance;
}

const benchmarkInfo = {
  helm: {
    name: "HELM",
    description: "Holistic Evaluation of Language Models - comprehensive assessment across 42 scenarios covering accuracy, calibration, robustness, fairness, bias, toxicity, and efficiency.",
    paper: "https://arxiv.org/abs/2211.09110",
    repo: "https://github.com/stanford-crfm/helm"
  },
  opencompass: {
    name: "OpenCompass",
    description: "Open-source evaluation platform with standardized benchmarks for language understanding, providing comprehensive evaluation across diverse domains and tasks.",
    paper: "https://arxiv.org/abs/2304.07295",
    repo: "https://github.com/open-compass/OpenCompass"
  },
  agieval: {
    name: "AGIEval",
    description: "Assessment using human-centric standardized exams like SAT, LSAT, math competitions, and graduate admission tests to evaluate general intelligence.",
    paper: "https://arxiv.org/abs/2304.06364",
    repo: "https://github.com/microsoft/AGIEval"
  },
  mmlu: {
    name: "MMLU",
    description: "Massive Multitask Language Understanding across 57 academic subjects ranging from elementary mathematics to advanced professional topics.",
    paper: "https://arxiv.org/abs/2009.03300",
    repo: "https://github.com/hendrycks/test"
  }
};

export function ModelEvaluationBenchmarks() {
  const [selectedModel, setSelectedModel] = useState<ModelDetail | null>(null);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const sortedModels = [...baseBenchmarkPerformance].sort((a, b) => {
    if (!sortConfig) return 0;
    
    let aValue: any, bValue: any;
    
    if (sortConfig.key === 'model') {
      aValue = a.model;
      bValue = b.model;
    } else {
      aValue = a[sortConfig.key as keyof BaseBenchmarkPerformance] as any;
      bValue = b[sortConfig.key as keyof BaseBenchmarkPerformance] as any;
      aValue = aValue?.score || 0;
      bValue = bValue?.score || 0;
    }
    
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key: string) => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Base Model Benchmarks
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Foundation model performance across established evaluation frameworks
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead 
                      className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                      onClick={() => handleSort('model')}
                    >
                      <div className="flex items-center">
                        Model Name
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </TableHead>
                    {benchmarks.map((benchmark) => {
                      const Icon = benchmark.icon;
                      return (
                        <TableHead 
                          key={benchmark.key} 
                          className="px-6 py-4 text-center cursor-pointer hover:bg-muted/80 transition-colors"
                          onClick={() => handleSort(benchmark.key)}
                        >
                          <div className="flex flex-col items-center">
                            <Icon className={cn("mb-1 h-4 w-4", benchmark.color)} />
                            <span className="font-semibold text-foreground">{benchmark.name}</span>
                            <ArrowUpDown className="mt-1 h-3 w-3 opacity-60" />
                          </div>
                        </TableHead>
                      );
                    })}
                    <TableHead className="px-6 py-4 font-semibold text-foreground">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedModels.map((model) => (
                    <TableRow key={model.model} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="px-6 py-4">
                        <div className="flex items-center">
                          <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center mr-3",
                            modelColors[model.model as keyof typeof modelColors]
                          )}>
                            <Bot className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{model.model}</div>
                            <div className="text-sm text-muted-foreground">{model.company}</div>
                          </div>
                        </div>
                      </TableCell>
                      {benchmarks.map((benchmark) => {
                        const benchmarkData = model[benchmark.key as keyof BaseBenchmarkPerformance] as any;
                        const score = benchmarkData.score;
                        return (
                          <TableCell
                            key={benchmark.key}
                            className="px-6 py-4 text-center"
                          >
                            <div className="flex flex-col items-center">
                              <span className="text-2xl mb-1">
                                {getPerformanceIcon(score)}
                              </span>
                              <div className="text-sm font-mono text-foreground font-semibold">
                                {score}%
                              </div>
                            </div>
                          </TableCell>
                        );
                      })}
                      <TableCell className="px-6 py-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedModel({ model })}
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <FileText className="mr-1 h-3 w-3" />
                          More Info
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Model Details Modal */}
        <Dialog open={!!selectedModel} onOpenChange={() => setSelectedModel(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedModel && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {selectedModel.model.model} - Benchmark Performance
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center mr-4",
                        modelColors[selectedModel.model.model as keyof typeof modelColors]
                      )}>
                        <Bot className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{selectedModel.model.model}</h3>
                        <p className="text-muted-foreground">{selectedModel.model.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Benchmark Scores</h4>
                      {benchmarks.map((benchmark) => {
                        const benchmarkData = selectedModel.model[benchmark.key as keyof BaseBenchmarkPerformance] as any;
                        const Icon = benchmark.icon;
                        return (
                          <div key={benchmark.key} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                            <div className="flex items-center">
                              <Icon className={cn("mr-3 h-4 w-4", benchmark.color)} />
                              <span className="font-medium text-foreground">{benchmark.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{getPerformanceIcon(benchmarkData.score)}</span>
                              <span className="font-mono text-foreground font-semibold">
                                {benchmarkData.score}%
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Benchmark Descriptions</h4>
                    {benchmarks.map((benchmark) => {
                      const info = benchmarkInfo[benchmark.key as keyof typeof benchmarkInfo];
                      const benchmarkData = selectedModel.model[benchmark.key as keyof BaseBenchmarkPerformance] as any;
                      return (
                        <div key={benchmark.key} className="border border-border rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <benchmark.icon className={cn("mr-2 h-4 w-4", benchmark.color)} />
                            <h5 className="font-semibold text-foreground">{info.name}</h5>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {benchmarkData.description}
                          </p>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" asChild>
                              <a href={info.paper} target="_blank" rel="noopener noreferrer">
                                <FileText className="mr-1 h-3 w-3" />
                                Paper
                                <ExternalLink className="ml-1 h-3 w-3" />
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <a href={info.repo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-1 h-3 w-3" />
                                Repository
                              </a>
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}