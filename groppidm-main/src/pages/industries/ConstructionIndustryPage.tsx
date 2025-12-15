import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HardHat, Search, Users, Globe, TrendingUp, Image } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ConstructionIndustryPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <HardHat className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('industry.construction.title')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t('industry.construction.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('industry.construction.services')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Construction Portfolio Websites</h3>
                <p className="text-muted-foreground">
                  Showcase your completed projects with photo galleries, testimonials, and detailed case studies. Mobile-responsive sites that impress potential clients.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Construction SEO</h3>
                <p className="text-muted-foreground">
                  Dominate local search results for "contractors near me," "home builders," and "commercial construction." Get found when projects need bidding.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Social Media Showcase</h3>
                <p className="text-muted-foreground">
                  Share project progress, before-and-after transformations, and team culture on Instagram, Facebook, and LinkedIn to build trust and attract clients.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Targeted Advertising</h3>
                <p className="text-muted-foreground">
                  Google Ads and social campaigns targeting homeowners, property developers, and commercial clients looking for construction services.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Image className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Photography</h3>
                <p className="text-muted-foreground">
                  Coordination with photographers to capture your best work. High-quality project photos that sell your capabilities better than words.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <HardHat className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Reputation Management</h3>
                <p className="text-muted-foreground">
                  Monitor and respond to reviews on Google, Yelp, and industry platforms. Build a stellar reputation that wins bids and attracts quality clients.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Construction Needs Digital Marketing */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t('industry.construction.why')}</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">82% of homeowners search online</strong> before hiring a contractor. Your website and online reviews are often the deciding factor in winning jobs.
              </p>
              <p className="text-lg">
                Construction is still a relationship business, but those relationships increasingly start online. Developers, homeowners, and commercial clients research potential contractors extensively before reaching out.
              </p>
              <p className="text-lg">
                Our construction-focused digital marketing helps you showcase your best work, generate quality leads, and build trust with potential clients before you ever meet them on-site.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('industry.construction.cta')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('industry.construction.ctaDesc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/appointment">
                <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary-dark text-primary-foreground hover:text-black">{t('industry.common.scheduleConsultation')}</Button>
              </Link>
              <Link to="/prices">
                <Button size="lg" variant="outline" className="text-lg px-8">{t('industry.common.viewPricing')}</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConstructionIndustryPage;
