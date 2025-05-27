import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, Github, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { frameworks, type Framework } from "@/data/frameworks";
import { cn } from "@/lib/utils";

const getSupportLevel = (level: string) => {
  switch (level.toLowerCase()) {
    case 'excellent':
      return { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900' };
    case 'good':
    case 'extensive':
    case 'built-in':
      return { icon: CheckCircle, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900' };
    case 'moderate':
    case 'basic':
    case 'limited':
      return { icon: AlertCircle, color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900' };
    case 'manual':
    case 'external':
    case 'custom':
      return { icon: XCircle, color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900' };
    default:
      return { icon: AlertCircle, color: 'text-gray-600', bg: 'bg-gray-100 dark:bg-gray-900' };
  }
};

export function FrameworkComparison() {
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);

  return (
    <section id="framework-comparison" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Framework & Tool Comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compare popular frameworks and tools for building AI agents
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="px-6 py-4 font-semibold text-foreground min-w-[200px]">
                      Framework
                    </TableHead>
                    <TableHead className="px-4 py-4 text-center font-semibold text-foreground min-w-[120px]">
                      Tool Support
                    </TableHead>
                    <TableHead className="px-4 py-4 text-center font-semibold text-foreground min-w-[120px]">
                      Memory Mgmt
                    </TableHead>
                    <TableHead className="px-4 py-4 text-center font-semibold text-foreground min-w-[120px]">
                      Multi-Agent
                    </TableHead>
                    <TableHead className="px-4 py-4 text-center font-semibold text-foreground min-w-[120px]">
                      UI Support
                    </TableHead>
                    <TableHead className="px-4 py-4 text-center font-semibold text-foreground min-w-[120px]">
                      Evaluation
                    </TableHead>
                    <TableHead className="px-6 py-4 font-semibold text-foreground min-w-[200px]">
                      Best For
                    </TableHead>
                    <TableHead className="px-6 py-4 font-semibold text-foreground">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {frameworks.map((framework) => (
                    <TableRow key={framework.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-primary font-bold text-sm">
                              {framework.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{framework.name}</div>
                            <div className="text-sm text-muted-foreground line-clamp-2">
                              {framework.description}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      
                      {['toolSupport', 'memoryManagement', 'multiAgentSupport', 'uiSupport', 'evalIntegration'].map((key) => {
                        const value = framework[key as keyof Framework] as string;
                        const support = getSupportLevel(value);
                        const Icon = support.icon;
                        
                        return (
                          <TableCell key={key} className="px-4 py-4 text-center">
                            <div className="flex flex-col items-center space-y-1">
                              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", support.bg)}>
                                <Icon className={cn("w-4 h-4", support.color)} />
                              </div>
                              <span className="text-xs text-muted-foreground">{value}</span>
                            </div>
                          </TableCell>
                        );
                      })}
                      
                      <TableCell className="px-6 py-4">
                        <span className="text-sm text-muted-foreground">{framework.bestFor}</span>
                      </TableCell>
                      
                      <TableCell className="px-6 py-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedFramework(framework)}
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Framework Details Modal */}
        <Dialog open={!!selectedFramework} onOpenChange={() => setSelectedFramework(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedFramework && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-primary font-bold text-sm">
                        {selectedFramework.name.charAt(0)}
                      </span>
                    </div>
                    {selectedFramework.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedFramework.description}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Best For</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedFramework.bestFor}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Capabilities</h3>
                      <div className="space-y-3">
                        {[
                          { label: 'Tool Support', value: selectedFramework.toolSupport },
                          { label: 'Memory Management', value: selectedFramework.memoryManagement },
                          { label: 'Multi-Agent Support', value: selectedFramework.multiAgentSupport },
                          { label: 'UI Support', value: selectedFramework.uiSupport },
                          { label: 'Evaluation Integration', value: selectedFramework.evalIntegration }
                        ].map((capability) => {
                          const support = getSupportLevel(capability.value);
                          const Icon = support.icon;
                          
                          return (
                            <div key={capability.label} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                              <span className="font-medium text-foreground">{capability.label}</span>
                              <div className="flex items-center space-x-2">
                                <div className={cn("w-6 h-6 rounded-full flex items-center justify-center", support.bg)}>
                                  <Icon className={cn("w-3 h-3", support.color)} />
                                </div>
                                <span className="text-sm text-muted-foreground">{capability.value}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Pros</h3>
                      <div className="space-y-2">
                        {selectedFramework.pros.map((pro, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{pro}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Cons</h3>
                      <div className="space-y-2">
                        {selectedFramework.cons.map((con, index) => (
                          <div key={index} className="flex items-center">
                            <XCircle className="w-4 h-4 text-red-600 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{con}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Resources</h3>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href={selectedFramework.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-3 h-4 w-4" />
                            Official Website
                            <ExternalLink className="ml-auto h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href={selectedFramework.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-3 h-4 w-4" />
                            GitHub Repository
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