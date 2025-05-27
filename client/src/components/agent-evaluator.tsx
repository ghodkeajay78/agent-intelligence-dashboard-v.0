import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Upload, CloudUpload, Bell, Workflow, Link, Settings as SettingsIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const supportedFrameworks = [
  { name: "Flowise", icon: Workflow, color: "text-blue-600" },
  { name: "LangChain", icon: Link, color: "text-green-600" },
  { name: "AutoGen", icon: SettingsIcon, color: "text-purple-600" }
];

export function AgentEvaluator() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Add real-time data sync logic here for email notifications
    toast({
      title: "Success!",
      description: "You'll be notified when the agent evaluator is available.",
    });
    setEmail("");
  };

  const handleFileUpload = () => {
    // TODO: Add real-time data sync logic here for file upload processing
    toast({
      title: "Coming Soon",
      description: "Agent upload functionality will be available soon.",
    });
  };

  return (
    <section id="evaluator" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agent Evaluator
          </h2>
          <p className="text-lg text-muted-foreground">
            Evaluate your custom agents against industry-standard benchmarks
          </p>
        </div>

        <Card className="bg-gradient-to-br from-blue-50 to-violet-50 dark:from-slate-800/50 dark:to-slate-700/50 border-blue-200 dark:border-slate-600">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="text-primary text-2xl h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Upload Your Agent</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Coming soon: Evaluate your Flowise, LangChain, or AutoGen agent using industry benchmarks.
                Get detailed performance insights and recommendations for improvement.
              </p>
            </div>

            {/* Upload Area */}
            <div 
              className="bg-background rounded-xl border-2 border-dashed border-primary/30 p-8 mb-6 text-center hover:border-primary/50 transition-colors cursor-pointer group"
              onClick={handleFileUpload}
            >
              <CloudUpload className="text-primary text-3xl mb-4 mx-auto h-12 w-12 group-hover:scale-110 transition-transform" />
              <p className="text-muted-foreground mb-2">
                Drag & drop your agent configuration files
              </p>
              <p className="text-sm text-muted-foreground">
                Supports .json, .yaml, .py files
              </p>
            </div>

            {/* Supported Frameworks */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {supportedFrameworks.map((framework) => {
                const Icon = framework.icon;
                return (
                  <Card key={framework.name} className="p-4 text-center hover:shadow-md transition-shadow">
                    <Icon className={`text-xl mb-2 mx-auto h-6 w-6 ${framework.color}`} />
                    <span className="text-sm font-medium text-foreground">
                      {framework.name}
                    </span>
                  </Card>
                );
              })}
            </div>

            {/* Email Notification */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Get Notified When Available</h4>
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" className="px-6">
                    <Bell className="mr-2 h-4 w-4" />
                    Notify Me
                  </Button>
                </form>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
