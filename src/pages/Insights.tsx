import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { FeaturedArticles } from "@/components/sections/FeaturedArticles";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredArticles = [
  {
    id: "1",
    title: "The Future of Work: Reimagining the Workplace",
    excerpt: "How organizations are adapting to hybrid work models and building cultures that thrive in the new normal.",
    category: "Featured Report",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    href: "/insights/future-of-work",
  },
  {
    id: "2",
    title: "AI and the Enterprise: From Pilot to Scale",
    excerpt: "Practical insights on moving AI initiatives from experimentation to enterprise-wide implementation.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    href: "/insights/ai-enterprise",
  },
  {
    id: "3",
    title: "Global Economic Outlook 2024",
    excerpt: "Analysis of macroeconomic trends and their implications for business strategy.",
    category: "Economics",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    href: "/insights/economic-outlook",
  },
];

const insights = [
  {
    id: "1",
    title: "Climate Risk and Business Strategy",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    href: "/insights/climate-risk",
    featured: true,
  },
  {
    id: "2",
    title: "The New Rules of Customer Engagement",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
    href: "/insights/customer-engagement",
  },
  {
    id: "3",
    title: "Supply Chain Resilience in a Volatile World",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    href: "/insights/supply-chain-resilience",
  },
  {
    id: "4",
    title: "Leadership in Times of Uncertainty",
    category: "Organization",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    href: "/insights/leadership-uncertainty",
  },
];

const categories = [
  "All Topics",
  "Strategy",
  "Digital",
  "Sustainability",
  "Operations",
  "Organization",
  "Technology",
];

const Insights = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="Featured Insights"
        title="Ideas & Research"
        description="Explore our latest thinking on the issues shaping business and society. From in-depth research to practical perspectives, discover insights that inspire action."
      />

      <section className="py-8 bg-muted border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Topics" ? "default" : "ghost"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <FeaturedArticles 
        title="Latest Insights"
        articles={featuredArticles}
      />

      <InsightsGrid
        title="More From Our Experts"
        insights={insights}
      />

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay informed</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive our latest insights and research directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="gap-2">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;