import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { allServices } from "@/data/services";
import { CheckCircle, ArrowRight } from "lucide-react";

const ServicePage = () => {
  const { serviceSlug } = useParams();
  const { language, t } = useLanguage();
  
  const service = allServices.find(s => s.slug === serviceSlug);
  
  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground text-center">Service niet gevonden</h1>
        </main>
        <Footer />
      </div>
    );
  }

  // Fallback to EN if the current language doesn't have a translation
  const content = service.content[language as keyof typeof service.content] || service.content.EN;
  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-20 lg:py-32">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <IconComponent className="h-10 w-10 text-primary" />
                </div>
              </div>
              
              <Badge variant="secondary" className="mb-4">
                {t(`category.${service.category.replace('-', '')}`)}
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                {content.title}
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {content.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/appointment">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground hover:text-black"
                  >
                    {t('common.getStarted')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {t('common.contactUs')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-0 shadow-hero">
                <CardHeader>
                  <CardTitle className="text-2xl lg:text-3xl text-center">
                    {t('servicePage.about')} {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    {content.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-accent/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
                {t('servicePage.benefits')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.benefits.map((benefit, index) => (
                  <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-6 w-6 text-primary mt-1" />
                        </div>
                        <p className="text-foreground font-medium">{benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
                {t('servicePage.whatsIncluded')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.features.map((feature, index) => (
                  <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-foreground font-medium">{feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-accent/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
                {t('servicePage.ourProcess')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.process.map((step, index) => (
                  <Card key={index} className="bg-gradient-card border-0 shadow-card relative">
                    <CardContent className="p-6 text-center">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                        </div>
                      </div>
                      <div className="pt-4">
                        <p className="text-foreground font-medium">{step}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                {t('servicePage.readyToStart')} {content.title}?
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('servicePage.ctaDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground"
                  >
                    {t('common.contactUs')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {t('servicePage.viewMoreServices')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePage;