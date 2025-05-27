import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bot, Zap, Wrench, Users, Target, ChevronRight } from "lucide-react";
import { agentTypes, type AgentType } from "@/data/agent-types";

const typeIcons = {
  reactive: Zap,
  proactive: Target,
  "tool-using": Wrench,
  "human-in-loop": Users,
  "multi-agent": Users,
  "autonomous-planners": Bot
};

const typeColors = {
  reactive: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
  proactive: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
  "tool-using": "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
  "human-in-loop": "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
  "multi-agent": "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
  "autonomous-planners": "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
};

export function AgentTypesExplorer() {
  const [selectedType, setSelectedType] = useState<AgentType | null>(null);

  return (
    <section id="agent-types" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agent Types Explorer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding different types of AI agents and their characteristics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentTypes.map((type) => {
            const Icon = typeIcons[type.id as keyof typeof typeIcons];
            const colorClass = typeColors[type.id as keyof typeof typeColors];
            
            return (
              <Card 
                key={type.id}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 cursor-pointer"
                onClick={() => setSelectedType(type)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {type.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Characteristics</h4>
                      <div className="flex flex-wrap gap-1">
                        {type.characteristics.slice(0, 2).map((char, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {char}
                          </Badge>
                        ))}
                        {type.characteristics.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{type.characteristics.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Agent Type Details Modal */}
        <Dialog open={!!selectedType} onOpenChange={() => setSelectedType(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedType && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${typeColors[selectedType.id as keyof typeof typeColors]}`}>
                      {(() => {
                        const Icon = typeIcons[selectedType.id as keyof typeof typeIcons];
                        return <Icon className="w-4 h-4" />;
                      })()}
                    </div>
                    {selectedType.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedType.description}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Characteristics</h3>
                      <div className="space-y-2">
                        {selectedType.characteristics.map((characteristic, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                            <span className="text-muted-foreground">{characteristic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Common Use Cases</h3>
                      <div className="space-y-2">
                        {selectedType.useCases.map((useCase, index) => (
                          <div key={index} className="p-3 bg-muted rounded-lg">
                            <span className="text-foreground font-medium">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Real-World Examples</h3>
                      <div className="space-y-2">
                        {selectedType.examples.map((example, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                            <span className="text-muted-foreground">{example}</span>
                          </div>
                        ))}
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