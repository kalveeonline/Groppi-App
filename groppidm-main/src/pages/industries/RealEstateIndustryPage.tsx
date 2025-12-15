import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Search, Users, Globe, TrendingUp, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const RealEstateIndustryPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('industry.realEstate.title')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t('industry.realEstate.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('industry.realEstate.services')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">IDX-Integrated Websites</h3>
                <p className="text-muted-foreground">
                  Beautiful, mobile-responsive real estate websites with MLS integration, property search, virtual tours, and lead capture forms to convert visitors into clients.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hyperlocal Real Estate SEO</h3>
                <p className="text-muted-foreground">
                  Rank for neighborhood-specific searches like "homes for sale in [area]" and "real estate agent near me." Dominate local search results.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Social Media Marketing</h3>
                <p className="text-muted-foreground">
                  Engaging content for Instagram, Facebook, and LinkedIn. Showcase listings, share market insights, and build your personal brand as a local expert.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Listing & Lead Generation Ads</h3>
                <p className="text-muted-foreground">
                  Facebook and Google Ads campaigns targeting buyers and sellers in your area. Generate quality leads and get listings in front of motivated buyers.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Camera className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Property Marketing Materials</h3>
                <p className="text-muted-foreground">
                  Professional listing presentations, virtual tours, video walkthroughs, and branded property brochures that help you win listings and sell faster.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Home className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email Marketing Automation</h3>
                <p className="text-muted-foreground">
                  Stay top-of-mind with automated drip campaigns, market updates, new listing alerts, and nurture sequences for buyers and sellers.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Real Estate Needs Digital Marketing */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t('industry.realEstate.why')}</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">97% of home buyers start their search online.</strong> If you're not visible in search results and social media, you're invisible to potential clients.
              </p>
              <p className="text-lg">
                Real estate is more competitive than ever. Success requires more than just putting a sign in the yard—you need a comprehensive digital presence that positions you as the go-to expert in your market.
              </p>
              <p className="text-lg">
                Our real estate marketing solutions help you attract buyers, win listings, and close more deals. We understand the unique challenges of real estate marketing and create strategies that deliver measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('industry.realEstate.cta')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('industry.realEstate.ctaDesc')}
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

export default RealEstateIndustryPage;
