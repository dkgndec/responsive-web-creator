interface IntroSectionProps {
  content: string;
}

export const IntroSection = ({ content }: IntroSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;