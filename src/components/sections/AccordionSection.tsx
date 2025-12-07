import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemData {
  id: string;
  title: string;
  content: string;
}

interface AccordionSectionProps {
  heading: string;
  items: AccordionItemData[];
}

export const AccordionSection = ({ heading, items }: AccordionSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          {heading}
        </h2>
        <Accordion type="multiple" className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-border">
              <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AccordionSection;
