import { Button } from "@/components/ui/button";
import { TrendingUp, Bot } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-200 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">
              Agent Intelligence
            </span>
            <br />
            <span className="text-foreground">Dashboard</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Explore everything about AI agents: benchmarks, models, types, tools, and use cases.
            <br className="hidden md:block" />
            Your comprehensive hub for agentic AI development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("benchmarks")}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Explore Benchmarks
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("evaluator")}
              className="w-full sm:w-auto px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-all duration-200"
            >
              <Bot className="mr-2 h-4 w-4" />
              Evaluate Your Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
