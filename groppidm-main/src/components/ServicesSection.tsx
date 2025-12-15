import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  ShoppingCart, 
  Search, 
  RefreshCw, 
  MousePointer, 
  Share2, 
  Target, 
  FileText 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesSection = () => {
  const { t } = useLanguage();
  
  const solidBasisServices = [
    {
      icon: Monitor,
      title: t('services.website'),
      description: t('services.websiteDesc')
    },
    {
      icon: ShoppingCart,
      title: t('services.webshop'),
      description: t('services.webshopDesc')
    },
    {
      icon: Search,
      title: t('services.seo'),
      description: t('services.seoDesc')
    },
    {
      icon: RefreshCw,
      title: t('services.netsync'),
      description: t('services.netsyncDesc')
    }
  ];

  const adverterenServices = [
    {
      icon: MousePointer,
      title: t('services.sea'),
      description: t('services.seaDesc')
    },
    {
      icon: Share2,
      title: t('services.socialMedia'),
      description: t('services.socialMediaDesc')
    },
    {
      icon: Target,
      title: t('services.omni'),
      description: t('services.omniDesc')
    },
    {
      icon: FileText,
      title: t('services.goudengids'),
      description: t('services.goudengidsDesc')
    }
  ];
  return (
    <section className="py-20 bg-background/50">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('services.mainTitle')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('services.mainSubtitle')}
          </p>
        </div>

        {/* Solide Basis Services */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm">1</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {t('services.solidBasisTitle')}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solidBasisServices.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 shadow-card"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('/solid-foundation', '_blank')}
            >
              {t('services.solidBasisButton')}
            </Button>
          </div>
        </div>

        {/* Digital Advertising Services */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm">2</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {t('services.adverterenTitle')}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adverterenServices.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 shadow-card"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('/branding', '_blank')}
            >
              {t('services.adverterenButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};