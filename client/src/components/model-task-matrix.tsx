import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Brain, Settings, Globe, Route, Bot } from "lucide-react";
import { modelPerformance, type ModelPerformance } from "@/data/models";
import { cn } from "@/lib/utils";

const tasks = [
  { key: "reasoning", name: "Reasoning", icon: Brain, color: "text-blue-600" },
  { key: "toolUse", name: "Tool Use", icon: Settings, color: "text-green-600" },
  { key: "webSearch", name: "Web Search", icon: Globe, color: "text-purple-600" },
  { key: "planning", name: "Planning", icon: Route, color: "text-orange-600" }
];

const modelColors = {
  "GPT-4": "bg-green-100 dark:bg-green-900 text-green-600",
  "Claude 3": "bg-blue-100 dark:bg-blue-900 text-blue-600",
  "Gemini 1.5": "bg-purple-100 dark:bg-purple-900 text-purple-600",
  "Mistral": "bg-orange-100 dark:bg-orange-900 text-orange-600"
};

function getPerformanceEmoji(score: number) {
  if (score >= 85) return "🟢";
  if (score >= 75) return "🟡";
  return "🔴";
}

function getPerformanceLevel(score: number) {
  if (score >= 85) return "Excellent (85%+)";
  if (score >= 75) return "Good (75-84%)";
  return "Needs Improvement (<75%)";
}

interface PerformanceDetail {
  model: string;
  task: string;
  score: number;
  benchmark: string;
  details: string;
}

export function ModelTaskMatrix() {
  const [selectedCell, setSelectedCell] = useState<PerformanceDetail | null>(null);

  const handleCellClick = (model: ModelPerformance, taskKey: string) => {
    const taskData = model[taskKey as keyof ModelPerformance] as any;
    setSelectedCell({
      model: model.model,
      task: tasks.find(t => t.key === taskKey)?.name || taskKey,
      score: taskData.score,
      benchmark: taskData.benchmark,
      details: taskData.details
    });
  };

  return (
    <section id="matrix" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Model Performance Matrix
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Interactive comparison of leading models across key agent capabilities
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            {/* Matrix Grid */}
            <div className="grid grid-cols-5 gap-2">
              {/* Header Row */}
              <div className="p-3"></div>
              {tasks.map((task) => {
                const Icon = task.icon;
                return (
                  <div key={task.key} className="p-3 text-center">
                    <Icon className={cn("mb-1 mx-auto h-5 w-5", task.color)} />
                    <div className="font-semibold text-foreground text-sm">
                      {task.name}
                    </div>
                  </div>
                );
              })}

              {/* Data Rows */}
              {modelPerformance.map((model) => [
                <div key={model.model} className="p-3 font-semibold text-foreground flex items-center">
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center mr-3",
                    modelColors[model.model as keyof typeof modelColors]
                  )}>
                    <Bot className="w-4 h-4" />
                  </div>
                  {model.model}
                </div>,
                ...tasks.map((task) => {
                  const taskData = model[task.key as keyof ModelPerformance] as any;
                  const score = taskData.score;
                  return (
                    <div
                      key={`${model.model}-${task.key}`}
                      className="p-3 text-center cursor-pointer hover:bg-muted/80 rounded-lg transition-colors group"
                      onClick={() => handleCellClick(model, task.key)}
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform">
                        {getPerformanceEmoji(score)}
                      </div>
                      <div className="text-xs font-mono mt-1 text-muted-foreground">
                        {score}%
                      </div>
                    </div>
                  );
                })
              ]).flat()}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center">
                  <span className="text-lg mr-2">🟢</span>
                  <span className="text-muted-foreground">Excellent (85%+)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">🟡</span>
                  <span className="text-muted-foreground">Good (75-84%)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">🔴</span>
                  <span className="text-muted-foreground">Needs Improvement (&lt;75%)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Details Modal */}
        <Dialog open={!!selectedCell} onOpenChange={() => setSelectedCell(null)}>
          <DialogContent className="max-w-2xl">
            {selectedCell && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl">
                    {selectedCell.model} - {selectedCell.task} Performance
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 mt-6">
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-primary">Performance Score</h4>
                      <p className="text-2xl font-bold text-primary">
                        {selectedCell.score}%
                      </p>
                    </div>
                    <div className="text-right">
                      <h4 className="font-semibold text-primary">Primary Benchmark</h4>
                      <p className="text-primary font-medium">
                        {selectedCell.benchmark}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Performance Analysis</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedCell.details}
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">How to Interpret</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This score represents the model's performance on {selectedCell.task.toLowerCase()} tasks 
                      as measured by the {selectedCell.benchmark} benchmark. 
                      Performance level: {getPerformanceLevel(selectedCell.score)}.
                    </p>
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
