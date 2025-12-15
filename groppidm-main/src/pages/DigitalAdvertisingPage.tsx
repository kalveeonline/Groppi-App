import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Users, Repeat, BarChart, DollarSign, Eye, MousePointer, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DigitalAdvertisingPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

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
                {t('digitalAdvertising.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('digitalAdvertising.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t('digitalAdvertising.intro')}
              </p>
            </div>
          </div>
        </section>

        {/* Power of Digital Advertising */}
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                {t('digitalAdvertising.section1.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-16">
                {t('digitalAdvertising.section1.content')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200%</div>
                  <div className="text-sm text-muted-foreground">{t('digitalAdvertising.stats.stat1')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">70%</div>
                  <div className="text-sm text-muted-foreground">{t('digitalAdvertising.stats.stat2')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">89%</div>
                  <div className="text-sm text-muted-foreground">{t('digitalAdvertising.stats.stat3')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">41%</div>
                  <div className="text-sm text-muted-foreground">{t('digitalAdvertising.stats.stat4')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                {t('digitalAdvertising.features.title')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('digitalAdvertising.features.feature1.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('digitalAdvertising.features.feature1.desc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('digitalAdvertising.features.feature2.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('digitalAdvertising.features.feature2.desc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Repeat className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('digitalAdvertising.features.feature3.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('digitalAdvertising.features.feature3.desc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <BarChart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('digitalAdvertising.features.feature4.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('digitalAdvertising.features.feature4.desc')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                {t('digitalAdvertising.process.title')}
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
                      {t('digitalAdvertising.process.step1.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('digitalAdvertising.process.step1.desc')}
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
                      {t('digitalAdvertising.process.step2.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('digitalAdvertising.process.step2.desc')}
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
                      {t('digitalAdvertising.process.step3.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('digitalAdvertising.process.step3.desc')}
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
                      {t('digitalAdvertising.process.step4.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('digitalAdvertising.process.step4.desc')}
                    </p>
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
                {t('digitalAdvertising.cta.title')}
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                {t('digitalAdvertising.cta.description')}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground" onClick={() => navigate('/contact')}>
                {t('digitalAdvertising.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalAdvertisingPage;