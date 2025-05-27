import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { BenchmarkResults } from "@/components/benchmark-results";
import { ModelTaskMatrix } from "@/components/model-task-matrix";
import { AgentTypesExplorer } from "@/components/agent-types-explorer";
import { DevelopmentChecklist } from "@/components/development-checklist";
import { FrameworkComparison } from "@/components/framework-comparison";
import { UseCaseGallery } from "@/components/use-case-gallery";
import { AgentEvaluator } from "@/components/agent-evaluator";
import { ModelEvaluationBenchmarks } from "@/components/model-evaluation-benchmarks";
import { InsightsFeed } from "@/components/insights-feed";
import { Footer } from "@/components/footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <BenchmarkResults />
        <ModelTaskMatrix />
        <ModelEvaluationBenchmarks />
        <AgentTypesExplorer />
        <DevelopmentChecklist />
        <FrameworkComparison />
        <UseCaseGallery />
        <AgentEvaluator />
        <InsightsFeed />
      </main>
      <Footer />
    </div>
  );
}
