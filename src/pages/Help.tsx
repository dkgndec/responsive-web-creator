import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HelpCircle, Book, MessageCircle, Phone, Search, ChevronRight } from "lucide-react";

const helpCategories = [
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Find answers to commonly asked questions about our services and platform.",
    link: "#faqs",
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Detailed guides and documentation to help you get the most out of our tools.",
    link: "#docs",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time for immediate assistance.",
    link: "#chat",
  },
  {
    icon: Phone,
    title: "Contact Us",
    description: "Get in touch with our team via email or phone for personalized support.",
    link: "#contact",
  },
];

const faqs = [
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply create an account and follow our onboarding guide.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise accounts.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time from your account settings.",
  },
];

const Help = () => {
  return (
    <Layout>
      <PageHeader
        badgeText="Support"
        title="Help Center"
        description="We're here to help. Find answers, get support, and learn how to make the most of our platform."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-16 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for help articles..."
                className="pl-12 h-14 bg-card border-border text-foreground"
              />
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center text-sm">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <CardHeader className="cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-display text-base">{faq.question}</CardTitle>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Help;
