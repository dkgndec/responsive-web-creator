import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface QuickLinkProps {
  label: string;
  href: string;
}

interface QuickLinksProps {
  title?: string;
  links: QuickLinkProps[];
}

export const QuickLinks = ({ title = "Quick Links", links }: QuickLinksProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-display font-semibold text-foreground">{title}</h3>
      <div className="border-t border-border" />
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group font-medium"
            >
              {link.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
