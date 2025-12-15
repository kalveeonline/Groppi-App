import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Megaphone, Search, Users, Globe, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const MarketingIndustryPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <Megaphone className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('industry.marketing.title')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t('industry.marketing.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('industry.marketing.services')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">White-Label Web Development</h3>
                <p className="text-muted-foreground">
                  Partner with us for professional website development. Deliver high-quality sites to your clients under your brand—we stay invisible.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">SEO Partnership Services</h3>
                <p className="text-muted-foreground">
                  Expand your SEO offerings without hiring specialists. We handle technical SEO, content optimization, and link building for your clients.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Social Media Management</h3>
                <p className="text-muted-foreground">
                  Scale your social media services with our management solutions. Content creation, scheduling, and community management under your brand.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">PPC Campaign Management</h3>
                <p className="text-muted-foreground">
                  Expert Google Ads and social advertising management. Certified specialists who optimize for performance while you maintain client relationships.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Sparkles className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Creative Design Services</h3>
                <p className="text-muted-foreground">
                  Professional graphic design, branding, and creative assets. Support your campaigns with high-quality visuals that convert.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Megaphone className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Content Marketing</h3>
                <p className="text-muted-foreground">
                  Blog posts, articles, and content strategies that drive organic traffic and engagement for your clients' campaigns.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t('industry.marketing.why')}</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">Scale without overhead.</strong> Expand your service offerings without hiring full-time specialists or investing in expensive tools and training.
              </p>
              <p className="text-lg">
                Marketing agencies face constant pressure to deliver diverse services while maintaining quality and profitability. Our white-label solutions let you focus on client relationships and strategy while we handle execution.
              </p>
              <p className="text-lg">
                We work as an extension of your team—transparent communication, on-time delivery, and quality work that reflects well on your agency. Your clients never know we exist; all credit goes to you.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('industry.marketing.cta')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('industry.marketing.ctaDesc')}
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

export default MarketingIndustryPage;
