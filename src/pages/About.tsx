import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "1990", label: "Year founded" },
  { value: "18", label: "Global offices" },
  { value: "500+", label: "Consultants worldwide" },
  { value: "50+", label: "Countries served" },
];

const leadership = [
  {
    name: "Robert Williams",
    title: "Global Managing Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    href: "/about/leadership/robert-williams",
  },
  {
    name: "Jennifer Park",
    title: "Chief Strategy Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    href: "/about/leadership/jennifer-park",
  },
  {
    name: "David Thompson",
    title: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    href: "/about/leadership/david-thompson",
  },
  {
    name: "Maria Santos",
    title: "Chief People Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    href: "/about/leadership/maria-santos",
  },
];

const About = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="About Us"
        title="Who We Are"
        description="We are a global consulting firm dedicated to helping organizations achieve lasting impact through strategic innovation, operational excellence, and transformative leadership."
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1990, we began with a simple belief: that the best consulting 
                  comes from combining rigorous analysis with deep industry expertise and 
                  a genuine partnership with our clients.
                </p>
                <p>
                  Over three decades, we've grown from a small team of passionate consultants 
                  to a global firm serving clients across every major industry and geography. 
                  Yet our founding principles remain unchanged.
                </p>
                <p>
                  Today, we work with the world's leading organizations to solve their most 
                  complex challenges—from digital transformation to organizational redesign, 
                  from market entry to sustainability integration.
                </p>
              </div>
              <Link 
                to="/about/history"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group mt-6"
              >
                Learn more about our history
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="aspect-square rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern office interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <StatsSection stats={stats} />

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-muted-foreground">
              We believe in working alongside our clients, not just for them. Our collaborative 
              approach ensures that solutions are practical, sustainable, and owned by the 
              organizations we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Diagnose",
                description: "We start by deeply understanding the challenge, its root causes, and the context in which it exists.",
              },
              {
                number: "02",
                title: "Design",
                description: "We develop solutions that are analytically rigorous, practically feasible, and aligned with your goals.",
              },
              {
                number: "03",
                title: "Deliver",
                description: "We work alongside your teams to implement changes and build lasting capabilities.",
              },
            ].map((step, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection
        title="Our Leadership"
        members={leadership}
      />
    </Layout>
  );
};

export default About;