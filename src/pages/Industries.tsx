import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Technology",
    description: "Helping technology companies scale, innovate, and capture market opportunities in a rapidly evolving landscape.",
    href: "/industries/technology",
  },
  {
    title: "Financial Services",
    description: "Transforming financial institutions through digital innovation, regulatory compliance, and customer experience.",
    href: "/industries/financial-services",
  },
  {
    title: "Healthcare",
    description: "Improving healthcare delivery, reducing costs, and enhancing patient outcomes across the value chain.",
    href: "/industries/healthcare",
  },
  {
    title: "Energy & Utilities",
    description: "Navigating the energy transition while optimizing operations and embracing sustainability.",
    href: "/industries/energy",
  },
  {
    title: "Manufacturing",
    description: "Driving operational excellence, supply chain resilience, and Industry 4.0 transformation.",
    href: "/industries/manufacturing",
  },
  {
    title: "Retail & Consumer",
    description: "Redefining retail experiences, optimizing operations, and building customer loyalty.",
    href: "/industries/retail",
  },
  {
    title: "Telecommunications",
    description: "Enabling connectivity, driving digital transformation, and creating new revenue streams.",
    href: "/industries/telecommunications",
  },
  {
    title: "Transportation & Logistics",
    description: "Optimizing networks, embracing automation, and building sustainable logistics solutions.",
    href: "/industries/transportation",
  },
  {
    title: "Public Sector",
    description: "Helping government agencies deliver better services and drive policy implementation.",
    href: "/industries/public-sector",
  },
];

const Industries = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="Industries"
        title="Deep Sector Expertise"
        description="We bring specialized knowledge and proven methodologies to every industry we serve, combining global insights with local expertise."
      />

      <ServiceGrid
        title="Industries We Serve"
        services={industries}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your industry?</h2>
            <p className="text-muted-foreground mb-8">
              Contact our team to discuss how we can help your organization achieve lasting impact.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 transition-colors group"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;