import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LandingHeroProps {
  eyebrow: string;
  headline: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  image: string;
}

export const LandingHero = ({
  eyebrow,
  headline,
  description,
  primaryAction,
  secondaryAction,
  image,
}: LandingHeroProps) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Left Content */}
      <div className="bg-navy flex items-center px-8 md:px-16 lg:px-20 py-16 lg:py-24">
        <div className="max-w-xl">
          <p className="text-white/70 text-sm mb-4">{eyebrow}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-white/70 text-lg mb-8">{description}</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to={primaryAction.href}>{primaryAction.label}</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link to={secondaryAction.href}>{secondaryAction.label}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative min-h-[400px] lg:min-h-0">
        <img
          src={image}
          alt="Hero visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default LandingHero;
