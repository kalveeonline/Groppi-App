import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceCategories } from "@/data/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AllServicesPage = () => {
  const { language, t } = useLanguage();

  // Helper to get translated content for a service
  const getServiceContent = (service: typeof serviceCategories[0]['items'][0]) => {
    const content = service.content[language as keyof typeof service.content] || service.content.EN;
    return content;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('allServices.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('allServices.subtitle')}
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl font-bold text-primary/20">
                  {String(categoryIndex + 1).padStart(2, '0')}
                </span>
                <h2 className="text-3xl font-bold text-foreground">
                  {t(`allServices.category.${category.title.toLowerCase().replace(/\s+/g, '')}`)}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, serviceIndex) => {
                  const IconComponent = service.icon;
                  const content = getServiceContent(service);
                  return (
                    <Card key={serviceIndex} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                          {content.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {content.subtitle}
                        </p>
                        <Link to={`/service/${service.slug}`}>
                          <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                            {t('allServices.learnMore')}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('allServices.cta.title')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('allServices.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t('allServices.cta.schedule')}
              </Button>
            </Link>
            <Link to="/prices">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                {t('allServices.cta.viewPricing')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllServicesPage;
