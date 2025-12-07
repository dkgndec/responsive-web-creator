import { Layout } from "@/components/layout/Layout";
import { LandingHero } from "@/components/sections/LandingHero";
import { AccordionSection } from "@/components/sections/AccordionSection";
import { FeaturesCardGrid } from "@/components/sections/FeaturesCardGrid";

const accordionItems = [
  {
    id: "1",
    title: "Accordion Header",
    content: "Data within accordion component. We provide comprehensive solutions tailored to your business needs.",
  },
  {
    id: "2",
    title: "Accordion Header 2",
    content: "Data within accordion component. Our team of experts delivers measurable results and sustainable growth.",
  },
  {
    id: "3",
    title: "Accordion Header 3",
    content: "Data within accordion component. We leverage cutting-edge technology and industry best practices.",
  },
];

const featureCards = [
  {
    id: "1",
    eyebrow: "Strategy",
    title: "Card Title Lorem Ipsum",
    description: "Mauris ultricies urna adipiscing risus tristique gravida. Lectus sodales non et diam sem euismod est vulputate. Vitae semper.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    href: "/insights/1",
    linkText: "View all news",
  },
  {
    id: "2",
    eyebrow: "Innovation",
    title: "Card Title Lorem Ipsum",
    description: "Mauris ultricies urna adipiscing risus tristique gravida. Lectus sodales non et diam sem euismod est vulputate. Vitae semper.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    href: "/insights/2",
    linkText: "View all news",
  },
  {
    id: "3",
    eyebrow: "Technology",
    title: "Card Title Lorem Ipsum",
    description: "Mauris ultricies urna adipiscing risus tristique gravida. Lectus sodales non et diam sem euismod est vulputate. Vitae semper.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    href: "/insights/3",
    linkText: "View all news",
  },
  {
    id: "4",
    eyebrow: "Operations",
    title: "Card Title Lorem Ipsum",
    description: "Mauris ultricies urna adipiscing risus tristique gravida. Lectus sodales non et diam sem euismod est vulputate. Vitae semper.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    href: "/insights/4",
    linkText: "View all news",
  },
  {
    id: "5",
    eyebrow: "Finance",
    title: "Card Title Lorem Ipsum",
    description: "Mauris ultricies urna adipiscing risus tristique gravida. Lectus sodales non et diam sem euismod est vulputate. Vitae semper.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80",
    href: "/insights/5",
    linkText: "View all news",
  },
  {
    id: "6",
    eyebrow: "Marketing",
    title: "Card Title Lorem Ipsum",
    description: "Mauris ultricies urna adipiscing risus tristique gravida. Lectus sodales non et diam sem euismod est vulputate. Vitae semper.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    href: "/insights/6",
    linkText: "View all news",
  },
  {
    id: "7",
    eyebrow: "Analytics",
    title: "Card Title Lorem Ipsum",
    description: "Mauris ultricies urna adipiscing risus tristique gravida. Lectus sodales non et diam sem euismod est vulputate. Vitae semper.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    href: "/insights/7",
    linkText: "View all news",
  },
  {
    id: "8",
    eyebrow: "Growth",
    title: "Card Title Lorem Ipsum",
    description: "Mauris ultricies urna adipiscing risus tristique gravida. Lectus sodales non et diam sem euismod est vulputate. Vitae semper.",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80",
    href: "/insights/8",
    linkText: "View all news",
  },
];

const Landing = () => {
  return (
    <Layout>
      <LandingHero
        eyebrow="Eyebrow"
        headline="Display Headline"
        description="Lorem ipsum dolor sit amet, consectetur."
        primaryAction={{ label: "Primary Action", href: "/contact" }}
        secondaryAction={{ label: "Secondary action", href: "/about" }}
        image="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=1200&q=80"
      />

      <AccordionSection
        heading="Heading Lorem Ipsum"
        items={accordionItems}
      />

      <FeaturesCardGrid
        title="Title lorem ipsum"
        viewAllHref="/insights"
        viewAllText="View all news"
        cards={featureCards}
      />
    </Layout>
  );
};

export default Landing;
