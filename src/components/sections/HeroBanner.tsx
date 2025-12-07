import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

interface HeroBannerProps {
  badgeNumber?: string;
  heading: string;
  subBadgeNumber?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export const HeroBanner = ({
  badgeNumber = "60",
  heading,
  subBadgeNumber = "24",
  description,
  ctaText = "Learn More",
  ctaLink = "/overview",
}: HeroBannerProps) => {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Badge */}
            <span className="inline-block bg-accent text-accent-foreground text-sm font-bold px-4 py-2">
              {badgeNumber}
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              {heading}
            </h1>

            {/* Sub Badge */}
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5">
              {subBadgeNumber}
            </span>

            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl">
              {description}
            </p>

            {/* CTA */}
            <Button variant="hero" size="lg" asChild>
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Team collaboration illustration"
                className="w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
