import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Target, Users, Wrench, Brain, TestTube, Monitor, Rocket } from "lucide-react";
import { developmentChecklist, type ChecklistStep } from "@/data/development-checklist";

const stepIcons = {
  "define-problem": Target,
  "choose-base-model": Brain,
  "task-decomposition": Target,
  "tool-selection": Wrench,
  "memory-strategy": Brain,
  "reasoning-planning": Brain,
  "evaluation-strategy": TestTube,
  "ux-layer": Users,
  "hosting-monitoring": Monitor
};

const difficultyColors = {
  Beginner: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
  Intermediate: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
  Advanced: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
};

export function DevelopmentChecklist() {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const toggleStepCompletion = (stepId: string) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const toggleStepExpansion = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  const progressPercentage = (completedSteps.size / developmentChecklist.length) * 100;

  return (
    <section id="development-checklist" className="py-16 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agent Development Checklist
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            A comprehensive guide to building production-ready AI agents
          </p>
          
          {/* Progress Overview */}
          <div className="bg-background rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-foreground">Progress</span>
              <span className="text-sm text-muted-foreground">
                {completedSteps.size} of {developmentChecklist.length} steps completed
              </span>
            </div>
            <Progress value={progressPercentage} className="w-full" />
            <div className="mt-2 text-xs text-muted-foreground">
              {progressPercentage.toFixed(0)}% complete
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {developmentChecklist.map((step) => {
            const Icon = stepIcons[step.id as keyof typeof stepIcons];
            const isCompleted = completedSteps.has(step.id);
            const isExpanded = expandedStep === step.id;
            const difficultyColor = difficultyColors[step.difficulty];
            
            return (
              <Card 
                key={step.id}
                className={`transition-all duration-200 ${isCompleted ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-border hover:border-primary/20'}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleStepCompletion(step.id)}
                        className={`p-2 ${isCompleted ? 'text-green-600 hover:text-green-700' : 'text-muted-foreground hover:text-foreground'}`}
                      >
                        <CheckCircle className={`w-5 h-5 ${isCompleted ? 'fill-current' : ''}`} />
                      </Button>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {step.order}. {step.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className={difficultyColor}>
                        {step.difficulty}
                      </Badge>
                      <Badge variant="outline" className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.estimatedTime}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleStepExpansion(step.id)}
                      >
                        {isExpanded ? 'Less' : 'More'}
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Detailed Steps</h4>
                        <div className="space-y-2">
                          {step.details.map((detail, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Recommended Tools</h4>
                        <div className="space-y-2">
                          {step.tools.map((tool, index) => (
                            <div key={index} className="p-2 bg-muted rounded-lg">
                              <span className="text-sm text-foreground">{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* Completion Summary */}
        {completedSteps.size === developmentChecklist.length && (
          <div className="mt-8 text-center">
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-500">
              <CardContent className="p-6">
                <Rocket className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  Congratulations! 🎉
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  You've completed all steps in the agent development checklist. 
                  Your agent should be ready for production deployment!
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}