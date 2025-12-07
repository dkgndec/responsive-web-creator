import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { HighlightBlock } from "@/components/sections/HighlightBlock";
import { QuickLinks } from "@/components/sections/QuickLinks";

const quickLinks = [
  { label: "Getting Started", href: "/overview" },
  { label: "Our Functions", href: "/functions" },
  { label: "Office Services", href: "/office-services" },
  { label: "Community Hub", href: "/community" },
  { label: "Latest News", href: "/news" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <HeroBanner
        heading="Banner Heading"
        description="This is a Hero Banner in 50% size, it serves as a user's first glimpse of your microsite. It is prominent, extends full-width, should be visually impactful. Content should be accurate, complete and first glimpse of your microsite. It has an image of ratio 16:9 & a link CTA."
        ctaText="Explore Overview"
        ctaLink="/overview"
      />

      {/* Highlight Block with Quick Links */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Highlight Content - 2 columns */}
            <div className="lg:col-span-2">
              <HighlightBlock
                title="Highlight block Title"
                subtitle="Highlight block sub heading"
                description="A Highlight Block in essence is like a feature box which is well-spaced and more impactful. It has max 3 levels of text, the sub-heading and text body corresponds to the image on the right. A perfect solution to showcase your product image, a short description. This space can be used to highlight a deeper detail page or a new article story. There is a text limit. The ellipsis, a row of three dots, stands for an omitted section of text."
              />
            </div>

            {/* Quick Links - 1 column */}
            <div className="lg:col-span-1">
              <QuickLinks links={quickLinks} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
