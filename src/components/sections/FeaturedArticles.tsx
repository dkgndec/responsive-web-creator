import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  href: string;
}

interface FeaturedArticlesProps {
  title: string;
  articles: Article[];
}

export const FeaturedArticles = ({ title, articles }: FeaturedArticlesProps) => {
  const [featured, ...rest] = articles;

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Large Article */}
          {featured && (
            <Link 
              to={featured.href}
              className="group block overflow-hidden animate-fade-in"
            >
              <div className="aspect-video overflow-hidden rounded-sm mb-4">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {featured.category}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                {featured.title}
                <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="text-muted-foreground line-clamp-2">
                {featured.excerpt}
              </p>
            </Link>
          )}

          {/* Side Articles */}
          <div className="space-y-6">
            {rest.map((article, index) => (
              <Link
                key={article.id}
                to={article.href}
                className="group flex gap-4 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="w-32 h-24 flex-shrink-0 overflow-hidden rounded-sm">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {article.category}
                  </p>
                  <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                    <ArrowRight className="inline-block ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;