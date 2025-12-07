import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding bg-background min-h-[60vh] flex items-center">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-8xl font-bold text-primary/20">404</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Page not found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 transition-colors group"
            >
              Return to Home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;