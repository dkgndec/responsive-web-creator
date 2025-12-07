import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Calendar, Award } from "lucide-react";

const communityFeatures = [
  {
    icon: Users,
    title: "Member Network",
    description: "Connect with thousands of professionals across industries and build meaningful relationships.",
  },
  {
    icon: MessageSquare,
    title: "Discussion Forums",
    description: "Engage in thoughtful discussions, share ideas, and learn from community experts.",
  },
  {
    icon: Calendar,
    title: "Events & Meetups",
    description: "Attend exclusive events, workshops, and networking opportunities.",
  },
  {
    icon: Award,
    title: "Recognition Program",
    description: "Get recognized for your contributions and expertise within the community.",
  },
];

const Community = () => {
  return (
    <Layout>
      <PageHeader
        badgeText="Connect"
        title="Community"
        description="Join our vibrant community of professionals, share knowledge, and grow together."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {communityFeatures.map((feature, index) => (
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

          {/* CTA Section */}
          <Card className="bg-secondary border-border text-center py-8">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-foreground">
                Ready to Join?
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Become a member today and unlock access to exclusive resources, events, and a supportive network.
              </p>
              <Button variant="hero" size="lg">
                Join the Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
