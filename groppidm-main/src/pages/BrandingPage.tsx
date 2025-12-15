import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Monitor, 
  Palette, 
  FileText, 
  Share2, 
  TrendingUp, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const BrandingPage = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      text: t('branding.section2.point1')
    },
    {
      icon: Award,
      text: t('branding.section2.point2')
    },
    {
      icon: Users,
      text: t('branding.section2.point3')
    },
    {
      icon: Target,
      text: t('branding.section2.point4')
    }
  ];

  const elements = [
    {
      icon: Monitor,
      title: t('branding.section3.element1.title'),
      description: t('branding.section3.element1.desc')
    },
    {
      icon: Palette,
      title: t('branding.section3.element2.title'),
      description: t('branding.section3.element2.desc')
    },
    {
      icon: FileText,
      title: t('branding.section3.element3.title'),
      description: t('branding.section3.element3.desc')
    },
    {
      icon: Share2,
      title: t('branding.section3.element4.title'),
      description: t('branding.section3.element4.desc')
    }
  ];

  const process = [
    {
      step: "01",
      title: t('branding.section4.step1.title'),
      description: t('branding.section4.step1.desc')
    },
    {
      step: "02",
      title: t('branding.section4.step2.title'),
      description: t('branding.section4.step2.desc')
    },
    {
      step: "03",
      title: t('branding.section4.step3.title'),
      description: t('branding.section4.step3.desc')
    },
    {
      step: "04",
      title: t('branding.section4.step4.title'),
      description: t('branding.section4.step4.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">
                Online Presence & Branding
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('branding.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('branding.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="shadow-hero">
                  {t('branding.cta.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  {t('common.contactUs')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('branding.intro')}
              </p>
            </div>
          </div>
        </section>

        {/* What is Online Presence Section */}
        <section className="py-16 bg-accent/20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    {t('branding.section1.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed text-lg">
                    {t('branding.section1.content')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Branding is Crucial Section */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {t('branding.section2.title')}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <benefit.icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-foreground font-medium">
                          {benefit.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Essential Elements Section */}
        <section className="py-16 bg-accent/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {t('branding.section3.title')}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {elements.map((element, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 shadow-card">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <element.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">
                          {element.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {element.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {t('branding.section4.title')}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {process.map((step, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 shadow-card">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">
                            {step.step}
                          </span>
                        </div>
                        <CardTitle className="text-xl">
                          {step.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                {t('branding.cta.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('branding.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="shadow-hero">
                  {t('branding.cta.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  {t('common.contactUs')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandingPage;