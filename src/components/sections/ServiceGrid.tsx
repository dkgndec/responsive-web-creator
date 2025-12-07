import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  href: string;
}

interface ServiceGridProps {
  title: string;
  services: Service[];
}

export const ServiceGrid = ({ title, services }: ServiceGridProps) => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;