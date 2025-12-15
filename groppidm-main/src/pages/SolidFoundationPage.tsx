import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Globe, Search, Shield, TrendingUp } from "lucide-react";

const SolidFoundationPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-16 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10"></div>
          
          <div className="container relative px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                {t('solidFoundation.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('solidFoundation.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t('solidFoundation.intro')}
              </p>
            </div>
          </div>
        </section>

        {/* Why Digital Foundation is Crucial */}
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
                {t('solidFoundation.section1.title')}
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-16">
                {t('solidFoundation.section1.content')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">75%</div>
                  <div className="text-sm text-muted-foreground">Meer online zichtbaarheid</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Toename websiteverkeer</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Meer online leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">Klanttevredenheid</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                {t('solidFoundation.section2.title')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('solidFoundation.section2.pillar1.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('solidFoundation.section2.pillar1.desc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Search className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('solidFoundation.section2.pillar2.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('solidFoundation.section2.pillar2.desc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('solidFoundation.section2.pillar3.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('solidFoundation.section2.pillar3.desc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('solidFoundation.section2.pillar4.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('solidFoundation.section2.pillar4.desc')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                {t('solidFoundation.section3.title')}
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {t('solidFoundation.section3.step1.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('solidFoundation.section3.step1.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {t('solidFoundation.section3.step2.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('solidFoundation.section3.step2.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {t('solidFoundation.section3.step3.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('solidFoundation.section3.step3.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {t('solidFoundation.section3.step4.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('solidFoundation.section3.step4.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                {t('solidFoundation.benefits.title')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('solidFoundation.benefits.benefit1')}</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('solidFoundation.benefits.benefit2')}</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('solidFoundation.benefits.benefit3')}</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{t('solidFoundation.benefits.benefit4')}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                {t('solidFoundation.cta.title')}
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                {t('solidFoundation.cta.description')}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                {t('solidFoundation.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolidFoundationPage;