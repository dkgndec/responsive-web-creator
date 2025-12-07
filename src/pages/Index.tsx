import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { FeaturedArticles } from "@/components/sections/FeaturedArticles";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { InsightsGrid } from "@/components/sections/InsightsGrid";

const featuredArticles = [
  {
    id: "1",
    title: "Global Industry Forum 2024",
    excerpt: "Join us at the premier industry event where leaders discuss transformation, innovation, and the future of business.",
    category: "Events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    href: "/insights/global-forum",
  },
  {
    id: "2",
    title: "Strategic Leadership in the Digital Age",
    excerpt: "How executives are navigating technological disruption and driving organizational change.",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    href: "/insights/digital-leadership",
  },
  {
    id: "3",
    title: "Sustainability and Business Performance",
    excerpt: "Research shows sustainable practices drive long-term value creation.",
    category: "Research",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
    href: "/insights/sustainability",
  },
];

const services = [
  {
    title: "Commercial Excellence",
    description: "Drive revenue growth through optimized sales strategies, pricing optimization, and customer experience enhancement.",
    href: "/capabilities/commercial",
  },
  {
    title: "Digital Transformation",
    description: "Navigate the digital landscape with comprehensive strategies for technology adoption and organizational change.",
    href: "/capabilities/digital",
  },
  {
    title: "Operations & Supply Chain",
    description: "Optimize operational efficiency, streamline supply chains, and reduce costs while maintaining quality.",
    href: "/capabilities/operations",
  },
  {
    title: "Strategy & Corporate Finance",
    description: "Develop winning strategies, optimize capital allocation, and drive sustainable value creation.",
    href: "/capabilities/strategy",
  },
  {
    title: "Organization & People",
    description: "Build high-performing organizations through talent development, culture change, and leadership excellence.",
    href: "/capabilities/organization",
  },
  {
    title: "Risk & Resilience",
    description: "Navigate uncertainty with robust risk management frameworks and business continuity planning.",
    href: "/capabilities/risk",
  },
  {
    title: "Innovation & Growth",
    description: "Foster innovation culture, develop new products, and identify growth opportunities.",
    href: "/capabilities/innovation",
  },
  {
    title: "Mergers & Acquisitions",
    description: "Execute successful M&A transactions from due diligence through post-merger integration.",
    href: "/capabilities/ma",
  },
  {
    title: "Sustainability",
    description: "Integrate ESG principles into business strategy for long-term value creation.",
    href: "/capabilities/sustainability",
  },
];

const stats = [
  { value: "25", label: "years of industry experience" },
  { value: "18", label: "offices worldwide" },
  { value: "21", label: "industry partners" },
  { value: ">500", label: "expert consultants" },
];

const teamMembers = [
  {
    name: "James Lancaster",
    title: "Senior Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    href: "/team/james-lancaster",
  },
  {
    name: "Sarah Mitchell",
    title: "Partner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    href: "/team/sarah-mitchell",
  },
  {
    name: "Michael Chen",
    title: "Partner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    href: "/team/michael-chen",
  },
  {
    name: "Emily Davis",
    title: "Associate Partner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    href: "/team/emily-davis",
  },
];

const insights = [
  {
    id: "1",
    title: "The $1.8 Trillion Opportunity for Global Economic Growth",
    category: "Research",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    href: "/insights/economic-growth",
    featured: true,
  },
  {
    id: "2",
    title: "Reshaping Industry Ecosystems for Sustainable Leadership",
    category: "Perspective",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    href: "/insights/industry-ecosystems",
  },
  {
    id: "3",
    title: "Building Resilient Supply Chains in an Uncertain World",
    category: "Article",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    href: "/insights/supply-chains",
  },
  {
    id: "4",
    title: "Technology Frontiers: AI and the Future of Work",
    category: "Report",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    href: "/insights/ai-future",
  },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection
        subtitle="Industries"
        title="Business & Strategy Consulting"
        description="Creating lasting impact through strategic innovation and operational excellence. We partner with organizations to navigate complex challenges and unlock sustainable growth."
      />

      <IntroSection
        content="For over two decades, we have been at the forefront of industry transformation. Our team of experts combines deep sector knowledge with cutting-edge analytical capabilities to deliver results that matter. From strategy development to operational improvement, we help clients achieve their most ambitious goals."
      />

      <FeaturedArticles 
        title="Featured Stories"
        articles={featuredArticles}
      />

      <ServiceGrid
        title="How We Help Clients"
        services={services}
      />

      <StatsSection stats={stats} />

      <TeamSection
        title="Our People"
        members={teamMembers}
      />

      <InsightsGrid
        title="Featured Insights"
        insights={insights}
      />
    </Layout>
  );
};

export default Index;