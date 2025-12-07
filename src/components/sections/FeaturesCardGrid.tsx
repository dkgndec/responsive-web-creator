import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FeatureCard {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  href: string;
  linkText: string;
}

interface FeaturesCardGridProps {
  title: string;
  viewAllHref?: string;
  viewAllText?: string;
  cards: FeatureCard[];
}

export const FeaturesCardGrid = ({
  title,
  viewAllHref,
  viewAllText = "View all news",
  cards,
}: FeaturesCardGridProps) => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            {title}
          </h2>
          {viewAllHref && (
            <Link
              to={viewAllHref}
              className="hidden md:inline-flex items-center gap-2 text-foreground hover:text-primary font-medium transition-colors group"
            >
              {viewAllText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground mb-2">{card.eyebrow}</p>
              <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {card.description}
              </p>

              {/* Link */}
              <Link
                to={card.href}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors group/link"
              >
                {card.linkText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        {viewAllHref && (
          <div className="mt-8 md:hidden text-center">
            <Link
              to={viewAllHref}
              className="inline-flex items-center gap-2 text-foreground hover:text-primary font-medium transition-colors group"
            >
              {viewAllText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesCardGrid;
