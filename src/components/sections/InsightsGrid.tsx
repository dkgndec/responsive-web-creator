import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Insight {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
  featured?: boolean;
}

interface InsightsGridProps {
  title: string;
  insights: Insight[];
}

export const InsightsGrid = ({ title, insights }: InsightsGridProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <Link
              key={insight.id}
              to={insight.href}
              className={`group relative overflow-hidden rounded-sm animate-fade-in ${
                insight.featured ? 'md:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`overflow-hidden ${insight.featured ? 'aspect-square' : 'aspect-video'}`}>
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs text-white/70 uppercase tracking-wider mb-2">
                  {insight.category}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-primary transition-colors">
                  {insight.title}
                  <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsGrid;