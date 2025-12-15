import { Quote, Star, Building2, ShoppingBag, Utensils, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      nameKey: "testimonials.client1.name",
      companyKey: "testimonials.client1.company",
      textKey: "testimonials.client1.text",
      rating: 5
    },
    {
      nameKey: "testimonials.client2.name",
      companyKey: "testimonials.client2.company",
      textKey: "testimonials.client2.text",
      rating: 5
    },
    {
      nameKey: "testimonials.client3.name",
      companyKey: "testimonials.client3.company",
      textKey: "testimonials.client3.text",
      rating: 5
    }
  ];

  const customerDemos = [
    {
      icon: Building2,
      titleKey: 'customerDemos.realEstate',
      descKey: 'customerDemos.realEstateDesc',
      path: "/demo/real-estate"
    },
    {
      icon: ShoppingBag,
      titleKey: 'customerDemos.ecommerce',
      descKey: 'customerDemos.ecommerceDesc',
      path: "/demo/ecommerce"
    },
    {
      icon: Utensils,
      titleKey: 'customerDemos.restaurant',
      descKey: 'customerDemos.restaurantDesc',
      path: "/demo/restaurant"
    },
    {
      icon: Dumbbell,
      titleKey: 'customerDemos.fitness',
      descKey: 'customerDemos.fitnessDesc',
      path: "/demo/fitness"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4">
        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-card p-5 md:p-6 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 relative"
              >
                <Quote className="h-8 w-8 md:h-10 md:w-10 text-primary/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-6 italic">
                  "{t(testimonial.textKey)}"
                </p>
                <div className="border-t border-border/30 pt-4">
                  <p className="text-sm md:text-base font-semibold text-foreground">{t(testimonial.companyKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Demos */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('customerDemos.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('customerDemos.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerDemos.map((demo, index) => (
              <div
                key={index}
                className="group bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
                onClick={() => window.open(demo.path, '_blank')}
              >
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <demo.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(demo.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t(demo.descKey)}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {t('customerDemos.viewDemo')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
