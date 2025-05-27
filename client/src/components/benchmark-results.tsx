import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, FileText, Github, Brain, Settings, Globe, Route, ChevronDown, ChevronUp, ArrowUpDown } from "lucide-react";
import { benchmarks, type Benchmark } from "@/data/benchmarks";
import { cn } from "@/lib/utils";

const tagIcons = {
  reasoning: Brain,
  tools: Settings,
  web: Globe,
  planning: Route
};

const tagColors = {
  reasoning: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
  tools: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
  web: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
  planning: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300"
};

export function BenchmarkResults() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedBenchmark, setSelectedBenchmark] = useState<Benchmark | null>(null);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const filters = [
    { id: "all", name: "All", icon: null },
    { id: "reasoning", name: "Reasoning", icon: Brain },
    { id: "tools", name: "Tool Use", icon: Settings },
    { id: "web", name: "Web", icon: Globe },
    { id: "planning", name: "Planning", icon: Route }
  ];

  const filteredBenchmarks = benchmarks.filter(benchmark => 
    selectedFilter === "all" || benchmark.tags.includes(selectedFilter)
  );

  const sortedBenchmarks = [...filteredBenchmarks].sort((a, b) => {
    if (!sortConfig) return 0;
    
    let aValue: any, bValue: any;
    
    if (sortConfig.key === 'title') {
      aValue = a.title;
      bValue = b.title;
    } else if (sortConfig.key === 'lastUpdated') {
      aValue = a.lastUpdated;
      bValue = b.lastUpdated;
    } else if (sortConfig.key === 'topScore') {
      aValue = Math.max(...a.scores.map(s => parseFloat(s.score)));
      bValue = Math.max(...b.scores.map(s => parseFloat(s.score)));
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

  const getScoreBar = (score: string) => {
    const numScore = parseFloat(score);
    return (
      <div className="flex items-center space-x-2">
        <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300"
            style={{ width: `${numScore}%` }}
          />
        </div>
        <span className="text-sm font-mono text-muted-foreground min-w-[3rem]">
          {score}
        </span>
      </div>
    );
  };

  return (
    <section id="benchmarks" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agent-Centric Benchmarks
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive evaluation frameworks designed specifically for agentic AI systems
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = selectedFilter === filter.id;
            
            return (
              <Button
                key={filter.id}
                variant={isActive ? "default" : "secondary"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className={cn(
                  "rounded-full transition-all duration-200",
                  isActive && "bg-blue-600 hover:bg-blue-700"
                )}
              >
                {Icon && <Icon className="mr-1 h-3 w-3" />}
                {filter.name}
              </Button>
            );
          })}
        </div>

        {/* Benchmarks Table */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead 
                      className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                      onClick={() => handleSort('title')}
                    >
                      <div className="flex items-center">
                        Benchmark Name
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead className="px-6 py-4 font-semibold text-foreground">
                      Task Categories
                    </TableHead>
                    <TableHead className="px-6 py-4 font-semibold text-foreground">
                      Top Models & Scores
                    </TableHead>
                    <TableHead 
                      className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                      onClick={() => handleSort('lastUpdated')}
                    >
                      <div className="flex items-center">
                        Last Updated
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead className="px-6 py-4 font-semibold text-foreground">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedBenchmarks.map((benchmark) => (
                    <TableRow key={benchmark.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="px-6 py-4">
                        <div>
                          <button
                            onClick={() => setSelectedBenchmark(benchmark)}
                            className="text-lg font-bold text-primary hover:text-primary/80 transition-colors text-left"
                          >
                            {benchmark.title}
                          </button>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                            {benchmark.description.length > 100 
                              ? `${benchmark.description.substring(0, 100)}...` 
                              : benchmark.description}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {benchmark.tags.map((tag) => {
                            const Icon = tagIcons[tag as keyof typeof tagIcons];
                            return (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className={cn(
                                  "text-xs font-medium rounded-lg",
                                  tagColors[tag as keyof typeof tagColors]
                                )}
                              >
                                <Icon className="mr-1 h-2 w-2" />
                                {tag.charAt(0).toUpperCase() + tag.slice(1)}
                              </Badge>
                            );
                          })}
                        </div>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <div className="space-y-2">
                          {benchmark.scores.slice(0, 2).map((score) => (
                            <div key={score.model} className="flex items-center space-x-3">
                              <span className="text-sm font-medium text-foreground min-w-[4rem]">
                                {score.model}
                              </span>
                              {getScoreBar(score.score)}
                            </div>
                          ))}
                          {benchmark.scores.length > 2 && (
                            <div className="text-xs text-muted-foreground">
                              +{benchmark.scores.length - 2} more models
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <span className="text-sm text-muted-foreground">
                          {benchmark.lastUpdated}
                        </span>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedBenchmark(benchmark)}
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

        {/* Benchmark Details Modal */}
        <Dialog open={!!selectedBenchmark} onOpenChange={() => setSelectedBenchmark(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedBenchmark && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {selectedBenchmark.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What it evaluates</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedBenchmark.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Created by</h4>
                      <p className="text-muted-foreground text-sm">
                        {selectedBenchmark.creator}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">How it evaluates</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedBenchmark.evaluation}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Metrics</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedBenchmark.metrics}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Top Model Scores</h4>
                      <div className="space-y-3">
                        {selectedBenchmark.scores.map((score) => (
                          <div
                            key={score.model}
                            className="flex items-center justify-between p-3 bg-muted rounded-lg"
                          >
                            <span className="font-medium text-foreground">
                              {score.model}
                            </span>
                            <span className="font-mono text-primary">
                              {score.score}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-3">Resources</h4>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                          asChild
                        >
                          <a href={selectedBenchmark.paper} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-3 h-4 w-4" />
                            Read Paper
                            <ExternalLink className="ml-auto h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                          asChild
                        >
                          <a href={selectedBenchmark.repo} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-3 h-4 w-4" />
                            View Repository
                            <ExternalLink className="ml-auto h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
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
