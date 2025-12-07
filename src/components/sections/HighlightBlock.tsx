import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-collaboration.png";

interface HighlightBlockProps {
  badgeNumber?: string;
  title: string;
  subtitle: string;
  description: string;
  images?: string[];
}

export const HighlightBlock = ({
  badgeNumber = "64",
  title,
  subtitle,
  description,
  images = [teamImage],
}: HighlightBlockProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-block bg-accent text-accent-foreground text-sm font-bold px-4 py-2">
            {badgeNumber}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              {title}
            </h2>
            <h3 className="text-lg font-semibold text-foreground">
              {subtitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: "200ms" }}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={images[currentImage]}
                alt="Highlight visual"
                className="w-full h-64 md:h-80 object-cover"
              />
              
              {/* Carousel Controls */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium text-foreground">
                    {currentImage + 1} / {images.length}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
