import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, GraduationCap, Users, Globe } from "lucide-react";

const careerPaths = [
  {
    icon: GraduationCap,
    title: "Students & Graduates",
    description: "Start your career with world-class training, mentorship, and exposure to diverse industries and challenges.",
    href: "/careers/students",
  },
  {
    icon: Briefcase,
    title: "Experienced Professionals",
    description: "Bring your expertise to solve complex problems and make a meaningful impact on leading organizations.",
    href: "/careers/experienced",
  },
  {
    icon: Users,
    title: "Alumni Network",
    description: "Join a global community of former colleagues who continue to shape industries and support each other.",
    href: "/careers/alumni",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Work across borders, cultures, and industries with opportunities in offices around the world.",
    href: "/careers/locations",
  },
];

const values = [
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do.",
  },
  {
    title: "Impact",
    description: "We measure success by the lasting change we create for our clients.",
  },
  {
    title: "Collaboration",
    description: "We work as one firm, bringing the best of our collective expertise to every engagement.",
  },
  {
    title: "Growth",
    description: "We invest in continuous learning and development for all our people.",
  },
];

const Careers = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="Careers"
        title="Build Your Future With Us"
        description="Join a team of exceptional people solving the world's most complex business challenges. We offer unparalleled opportunities for growth, impact, and fulfillment."
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Career Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((path, index) => (
              <Link
                key={index}
                to={path.href}
                className="group p-8 border border-border rounded-sm hover:border-primary hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <path.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                  {path.title}
                  <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="text-muted-foreground">
                  {path.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              Our values guide how we work with clients, with each other, and in the communities where we operate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to make an impact?</h2>
            <p className="text-white/70 mb-8">
              Explore open positions and find where your skills and passions can make a difference.
            </p>
            <Link 
              to="/careers/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 transition-colors group"
            >
              View open positions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;