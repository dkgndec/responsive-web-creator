import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    category: "Industry Insights",
    title: "The Future of Remote Work in 2024",
    excerpt: "Explore how companies are adapting to the new normal and what trends are shaping the workplace.",
    date: "Dec 5, 2024",
    readTime: "5 min read",
  },
  {
    category: "Product Updates",
    title: "Introducing New Collaboration Features",
    excerpt: "We've launched exciting new features to help teams work together more effectively.",
    date: "Dec 3, 2024",
    readTime: "3 min read",
  },
  {
    category: "Case Studies",
    title: "How TechCorp Increased Productivity by 40%",
    excerpt: "A deep dive into how one of our clients transformed their operations with our solutions.",
    date: "Nov 28, 2024",
    readTime: "8 min read",
  },
  {
    category: "Best Practices",
    title: "10 Tips for Effective Team Communication",
    excerpt: "Learn proven strategies to improve communication and collaboration within your team.",
    date: "Nov 25, 2024",
    readTime: "6 min read",
  },
];

const News = () => {
  return (
    <Layout>
      <PageHeader
        badgeText="Stay Updated"
        title="News & Articles"
        description="The latest news, insights, and updates from our team and industry."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {articles.map((article, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {article.category}
                  </span>
                  <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <Button variant="arrow" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
