import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
}

export const HeroSection = ({ title, subtitle, description }: HeroSectionProps) => {
  return (
    <section className="relative bg-hero-gradient text-white overflow-hidden">
      {/* Abstract geometric pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Network lines */}
          <g stroke="url(#grid-gradient)" strokeWidth="1">
            {[...Array(20)].map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 30} x2="1200" y2={i * 30} />
            ))}
            {[...Array(40)].map((_, i) => (
              <line key={`v-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="600" />
            ))}
          </g>
          {/* Glowing nodes */}
          <g fill="#3B82F6">
            <circle cx="600" cy="200" r="4" className="animate-pulse-slow" />
            <circle cx="750" cy="300" r="3" className="animate-pulse-slow" />
            <circle cx="450" cy="350" r="5" className="animate-pulse-slow" />
            <circle cx="850" cy="180" r="3" className="animate-pulse-slow" />
            <circle cx="350" cy="250" r="4" className="animate-pulse-slow" />
          </g>
          {/* Connection lines */}
          <g stroke="#3B82F6" strokeWidth="1" opacity="0.4">
            <line x1="600" y1="200" x2="750" y2="300" />
            <line x1="750" y1="300" x2="450" y2="350" />
            <line x1="600" y1="200" x2="350" y2="250" />
            <line x1="850" y1="180" x2="600" y2="200" />
          </g>
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <div className="py-20 md:py-32 lg:py-40 max-w-3xl">
          {subtitle && (
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 animate-fade-in">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {description}
          </p>
          <Link 
            to="/about"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Learn more about our work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;