import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building2, Users, Heart, Code, DollarSign, FileText, Gavel, Wrench, ChevronRight } from "lucide-react";
import { useCases, type UseCase } from "@/data/use-cases";

const categoryIcons = {
  "HR & Recruitment": Users,
  "Academic & Research": FileText,
  "Healthcare": Heart,
  "Customer Service": Users,
  "Finance": DollarSign,
  "Marketing": Building2,
  "Development": Code,
  "Legal": Gavel
};

const complexityColors = {
  Simple: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
  Medium: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
  Complex: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
};

export function UseCaseGallery() {
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(useCases.map(uc => uc.category)))];
  
  const filteredUseCases = useCases.filter(useCase => 
    filterCategory === "all" || useCase.category === filterCategory
  );

  return (
    <section id="use-case-gallery" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Use Case Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world AI agent implementations across industries
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filterCategory === category ? "default" : "secondary"}
              size="sm"
              onClick={() => setFilterCategory(category)}
              className="rounded-full transition-all duration-200"
            >
              {category === "all" ? "All Categories" : category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUseCases.map((useCase) => {
            const Icon = categoryIcons[useCase.category as keyof typeof categoryIcons] || Building2;
            const complexityColor = complexityColors[useCase.complexity];
            
            return (
              <Card 
                key={useCase.id}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 cursor-pointer"
                onClick={() => setSelectedUseCase(useCase)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {useCase.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {useCase.industry}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className={complexityColor}>
                      {useCase.complexity}
                    </Badge>
                    <Badge variant="outline">
                      {useCase.category}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Tools</h4>
                    <div className="flex flex-wrap gap-1">
                      {useCase.tools.slice(0, 3).map((tool, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                      {useCase.tools.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{useCase.tools.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Use Case Details Modal */}
        <Dialog open={!!selectedUseCase} onOpenChange={() => setSelectedUseCase(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedUseCase && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      {(() => {
                        const Icon = categoryIcons[selectedUseCase.category as keyof typeof categoryIcons] || Building2;
                        return <Icon className="w-4 h-4 text-primary" />;
                      })()}
                    </div>
                    {selectedUseCase.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {selectedUseCase.description}
                      </p>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-foreground">Industry:</span>
                          <Badge variant="outline">{selectedUseCase.industry}</Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-foreground">Complexity:</span>
                          <Badge variant="secondary" className={complexityColors[selectedUseCase.complexity]}>
                            {selectedUseCase.complexity}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Real-World Example</h3>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedUseCase.example}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Tools & Technologies</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedUseCase.tools.map((tool, index) => (
                          <div key={index} className="p-3 bg-muted rounded-lg">
                            <span className="text-sm text-foreground font-medium">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Benefits</h3>
                      <div className="space-y-2">
                        {selectedUseCase.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
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