import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Video, BookOpen, ArrowRight } from "lucide-react";

const resourceCategories = [
  {
    icon: FileText,
    title: "Whitepapers",
    description: "In-depth research and analysis on industry trends and best practices.",
    count: 12,
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides to help you master our platform.",
    count: 28,
  },
  {
    icon: BookOpen,
    title: "E-books",
    description: "Comprehensive guides covering various topics and strategies.",
    count: 8,
  },
  {
    icon: Download,
    title: "Templates",
    description: "Ready-to-use templates to streamline your workflow.",
    count: 35,
  },
];

const featuredResources = [
  {
    type: "Whitepaper",
    title: "Digital Transformation Guide 2024",
    description: "A comprehensive guide to navigating digital transformation in the modern workplace.",
  },
  {
    type: "E-book",
    title: "Building High-Performance Teams",
    description: "Learn the secrets to creating and managing teams that consistently deliver results.",
  },
  {
    type: "Template",
    title: "Project Planning Toolkit",
    description: "Everything you need to plan, execute, and track projects effectively.",
  },
];

const Resources = () => {
  return (
    <Layout>
      <PageHeader
        badgeText="Learn"
        title="Resources"
        description="Access a wealth of knowledge with our collection of guides, tutorials, templates, and more."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Resource Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {resourceCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">{category.count}</span>
                  </div>
                  <CardTitle className="font-display text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Resources */}
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              Featured Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.map((resource, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <CardHeader>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {resource.type}
                    </span>
                    <CardTitle className="font-display text-lg group-hover:text-primary transition-colors">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground text-sm">
                      {resource.description}
                    </CardDescription>
                    <Button variant="outline" size="sm" className="group/btn">
                      Download
                      <Download className="h-4 w-4 ml-2 group-hover/btn:translate-y-0.5 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
