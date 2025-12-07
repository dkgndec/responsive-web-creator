import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, Mail, Phone, Calendar, FileText, MapPin } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Print Services",
    description: "Professional printing solutions for all your document needs, from business cards to large format prints.",
  },
  {
    icon: Mail,
    title: "Mail Services",
    description: "Efficient mail handling and distribution services to keep your communications flowing smoothly.",
  },
  {
    icon: Phone,
    title: "Reception Services",
    description: "Professional reception and concierge services to welcome your guests and clients.",
  },
  {
    icon: Calendar,
    title: "Meeting Rooms",
    description: "Fully equipped meeting rooms and conference facilities available for booking.",
  },
  {
    icon: FileText,
    title: "Document Services",
    description: "Comprehensive document management including scanning, filing, and archival services.",
  },
  {
    icon: MapPin,
    title: "Workspace Solutions",
    description: "Flexible workspace options from hot desks to dedicated offices.",
  },
];

const OfficeServices = () => {
  return (
    <Layout>
      <PageHeader
        badgeText="Services"
        title="Office Services"
        description="Comprehensive office support services designed to help your business run smoothly and efficiently."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OfficeServices;
