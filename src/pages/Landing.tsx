import { Layout } from "@/components/layout/Layout";
import { LandingHero } from "@/components/sections/LandingHero";
import { AccordionSection } from "@/components/sections/AccordionSection";
import { FeaturesCardGrid } from "@/components/sections/FeaturesCardGrid";
import { ProfileCardsGrid } from "@/components/sections/ProfileCardsGrid";
import { useLandingData } from "@/hooks/useLandingData";

// Feature card images (static as they're design assets)
const featureImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80",
];

const featureEyebrows = [
  "Strategy",
  "Innovation",
  "Technology",
  "Operations",
  "Finance",
  "Marketing",
  "Analytics",
  "Growth",
];

const Landing = () => {
  const { heroContent, accordionItems, features, teamMembers, loading } = useLandingData();

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </Layout>
    );
  }

  // Transform features to card format
  const featureCards = features.map((feature, index) => ({
    id: feature.id,
    eyebrow: featureEyebrows[index % featureEyebrows.length],
    title: feature.title,
    description: feature.description,
    image: featureImages[index % featureImages.length],
    href: `/insights/${index + 1}`,
    linkText: "View all news",
  }));

  // Transform team members to profile format
  const profiles = teamMembers.map((member) => ({
    id: member.id,
    name: member.name,
    designation: member.designation,
    location: member.location,
    image: member.image_url || undefined,
    initials: member.initials || member.name.split(" ").map(n => n[0]).join(""),
    href: member.href || `/team/${member.id}`,
  }));

  return (
    <Layout>
      <LandingHero
        eyebrow={heroContent?.badge_text || "Eyebrow"}
        headline={heroContent?.title || "Display Headline"}
        description={heroContent?.subtitle || "Lorem ipsum dolor sit amet, consectetur."}
        primaryAction={{
          label: heroContent?.cta_text || "Primary Action",
          href: heroContent?.cta_link || "/contact",
        }}
        secondaryAction={{
          label: heroContent?.secondary_cta_text || "Secondary action",
          href: heroContent?.secondary_cta_link || "/about",
        }}
        image="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=1200&q=80"
      />

      <AccordionSection
        heading="Accordion heading"
        items={accordionItems.map((item) => ({
          id: item.id,
          title: item.title,
          content: item.content,
        }))}
      />

      <FeaturesCardGrid
        title="Title lorem ipsum"
        viewAllHref="/insights"
        viewAllText="View all news"
        cards={featureCards}
      />

      <ProfileCardsGrid title="Title Lorem Ipsum" profiles={profiles} />
    </Layout>
  );
};

export default Landing;
