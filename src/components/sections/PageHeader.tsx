import { ReactNode } from "react";

interface PageHeaderProps {
  badgeText?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export const PageHeader = ({ badgeText, title, description, children }: PageHeaderProps) => {
  return (
    <section className="bg-hero-gradient py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl animate-fade-in">
          {badgeText && (
            <span className="inline-block bg-accent text-accent-foreground text-sm font-bold px-4 py-2 mb-6">
              {badgeText}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};
