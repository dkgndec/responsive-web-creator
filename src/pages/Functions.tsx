import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, BarChart3, Shield, Zap, Database, Cloud } from "lucide-react";

const functions = [
  {
    icon: Cog,
    title: "Automation",
    description: "Streamline repetitive tasks with intelligent automation solutions that save time and reduce errors.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Gain actionable insights from your data with our comprehensive analytics and reporting tools.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security features to protect your data and ensure compliance.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized infrastructure for lightning-fast performance and reliability.",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Centralized data management solutions for efficient storage and retrieval.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless cloud integration for scalable and flexible operations.",
  },
];

const Functions = () => {
  return (
    <Layout>
      <PageHeader
        badgeText="Features"
        title="Our Functions"
        description="Explore the powerful features and capabilities that make our platform the choice of leading organizations."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {functions.map((func, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <func.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-xl">{func.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {func.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Functions;
