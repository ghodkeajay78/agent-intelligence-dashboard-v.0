import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Trophy, TrendingUp, Brain, Settings, AlertTriangle, Rocket } from "lucide-react";
import { insights } from "@/data/insights";

const iconMap = {
  Trophy,
  TrendingUp,
  Brain,
  Settings,
  AlertTriangle,
  Rocket
};

export function InsightsFeed() {
  return (
    <section id="insights" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Benchmark Intelligence Feed
          </h2>
          <p className="text-lg text-muted-foreground">
            Latest updates and insights from the AI benchmarking community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => {
            const Icon = iconMap[insight.icon as keyof typeof iconMap];
            
            return (
              <Card 
                key={insight.id}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 cursor-pointer transform hover:scale-[1.02]"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center ${insight.iconColor}`}>
                      <Icon className="text-lg h-5 w-5" />
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {insight.timeAgo}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {insight.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className={`text-xs ${tag.color}`}
                        >
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
