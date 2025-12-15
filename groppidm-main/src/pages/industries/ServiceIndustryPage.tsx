import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Search, Users, Globe, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ServiceIndustryPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('industry.serviceIndustry.title')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t('industry.serviceIndustry.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('industry.serviceIndustry.services')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Service Websites</h3>
                <p className="text-muted-foreground">
                  Mobile-first websites with online booking, service area maps, pricing information, and click-to-call buttons to convert visitors into customers instantly.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Service SEO</h3>
                <p className="text-muted-foreground">
                  Dominate "near me" searches and Google Maps results. Rank for "plumber near me," "emergency electrician," and service-specific local searches.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Social Media Presence</h3>
                <p className="text-muted-foreground">
                  Build trust through Facebook and Instagram. Share before-and-after photos, customer testimonials, tips, and promotions to engage local communities.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Service Ads</h3>
                <p className="text-muted-foreground">
                  Google Local Services Ads, Facebook Ads, and Nextdoor advertising to reach homeowners and businesses in your service area when they need you most.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Star className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Review Generation</h3>
                <p className="text-muted-foreground">
                  Automated systems to collect Google and Facebook reviews from satisfied customers. Build a 5-star reputation that attracts more business.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customer Retention</h3>
                <p className="text-muted-foreground">
                  Email and SMS campaigns for seasonal reminders, maintenance schedules, special offers, and referral programs to maximize customer lifetime value.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Service Businesses Need Digital Marketing */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t('industry.serviceIndustry.why')}</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">93% of consumers check online reviews</strong> before hiring local services. If you're not managing your online reputation, you're losing business to competitors who are.
              </p>
              <p className="text-lg">
                Service businesses thrive on local visibility and trust. When someone needs a plumber, electrician, or cleaner, they search online immediately. You need to appear at the top of those results with a strong reputation.
              </p>
              <p className="text-lg">
                Our service business marketing solutions help you get found locally, build trust through reviews and social proof, and convert searchers into paying customers—all while you focus on delivering great service.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('industry.serviceIndustry.cta')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('industry.serviceIndustry.ctaDesc')}
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

export default ServiceIndustryPage;
