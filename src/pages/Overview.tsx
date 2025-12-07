import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Target, Globe } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Our Company",
    description: "Founded with a vision to transform how businesses operate, we've grown into a trusted partner for organizations worldwide.",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "A diverse group of professionals bringing expertise from various industries to deliver exceptional results.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower businesses with innovative solutions that drive growth and create lasting impact.",
  },
  {
    icon: Globe,
    title: "Our Reach",
    description: "Operating globally with local expertise, we serve clients across multiple continents and time zones.",
  },
];

const Overview = () => {
  return (
    <Layout>
      <PageHeader
        badgeText="About Us"
        title="Company Overview"
        description="Discover who we are, what we do, and how we're shaping the future of business solutions. Our commitment to excellence drives everything we create."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
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

export default Overview;
