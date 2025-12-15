import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, Target, Link, MapPin, TrendingUp, BarChart, Users, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SeoOptimizationPage = () => {
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
                {t('seoOptimization.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('seoOptimization.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t('seoOptimization.intro')}
              </p>
            </div>
          </div>
        </section>

        {/* Why SEO is Important */}
        <section className="py-16 lg:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                {t('seoOptimization.section1.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-16">
                {t('seoOptimization.section1.content')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">93%</div>
                  <div className="text-sm text-muted-foreground">{t('seoOptimization.stats.stat1')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000%</div>
                  <div className="text-sm text-muted-foreground">{t('seoOptimization.stats.stat2')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">75%</div>
                  <div className="text-sm text-muted-foreground">{t('seoOptimization.stats.stat3')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">14.6%</div>
                  <div className="text-sm text-muted-foreground">{t('seoOptimization.stats.stat4')}</div>
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
                {t('seoOptimization.features.title')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('seoOptimization.features.feature1.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('seoOptimization.features.feature1.desc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Search className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('seoOptimization.features.feature2.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('seoOptimization.features.feature2.desc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Link className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('seoOptimization.features.feature3.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('seoOptimization.features.feature3.desc')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-hero bg-card">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t('seoOptimization.features.feature4.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('seoOptimization.features.feature4.desc')}
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
                {t('seoOptimization.process.title')}
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
                      {t('seoOptimization.process.step1.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('seoOptimization.process.step1.desc')}
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
                      {t('seoOptimization.process.step2.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('seoOptimization.process.step2.desc')}
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
                      {t('seoOptimization.process.step3.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('seoOptimization.process.step3.desc')}
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
                      {t('seoOptimization.process.step4.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('seoOptimization.process.step4.desc')}
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
                {t('seoOptimization.cta.title')}
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                {t('seoOptimization.cta.description')}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground" onClick={() => navigate('/contact')}>
                {t('seoOptimization.cta.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SeoOptimizationPage;