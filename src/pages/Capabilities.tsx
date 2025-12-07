import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { StatsSection } from "@/components/sections/StatsSection";

const capabilities = [
  {
    title: "Strategy & Corporate Finance",
    description: "Develop winning strategies, optimize portfolio and capital allocation, and drive sustainable value creation.",
    href: "/capabilities/strategy",
  },
  {
    title: "Digital & Technology",
    description: "Navigate digital transformation with comprehensive strategies for technology adoption and data-driven decision making.",
    href: "/capabilities/digital",
  },
  {
    title: "Operations",
    description: "Transform operations to achieve step-change improvements in efficiency, quality, and cost.",
    href: "/capabilities/operations",
  },
  {
    title: "Marketing & Sales",
    description: "Drive growth through customer-centric strategies, pricing optimization, and sales force effectiveness.",
    href: "/capabilities/marketing-sales",
  },
  {
    title: "Organization",
    description: "Build high-performing organizations through design, culture change, and capability building.",
    href: "/capabilities/organization",
  },
  {
    title: "M&A",
    description: "Execute successful transactions from deal strategy through post-merger integration.",
    href: "/capabilities/ma",
  },
  {
    title: "Sustainability",
    description: "Integrate environmental and social goals into business strategy for long-term value.",
    href: "/capabilities/sustainability",
  },
  {
    title: "Risk & Resilience",
    description: "Build robust risk management capabilities and organizational resilience.",
    href: "/capabilities/risk",
  },
  {
    title: "Implementation",
    description: "Turn strategy into action with disciplined execution and change management.",
    href: "/capabilities/implementation",
  },
];

const stats = [
  { value: "90%", label: "client satisfaction rate" },
  { value: "3x", label: "average ROI on engagements" },
  { value: "85%", label: "repeat client rate" },
  { value: "1000+", label: "projects delivered annually" },
];

const Capabilities = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="Capabilities"
        title="What We Do"
        description="We bring together deep functional expertise with industry knowledge to help clients solve their most pressing challenges and capture their greatest opportunities."
      />

      <ServiceGrid
        title="Our Capabilities"
        services={capabilities}
      />

      <StatsSection stats={stats} />
    </Layout>
  );
};

export default Capabilities;