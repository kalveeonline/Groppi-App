import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, Search, Users, Globe, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const BusinessIndustryPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('industry.business.title')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t('industry.business.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('industry.business.services')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Websites</h3>
                <p className="text-muted-foreground">
                  Sophisticated websites that reflect your expertise and credibility. Features include case studies, team bios, client testimonials, and consultation booking.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Industry-Specific SEO</h3>
                <p className="text-muted-foreground">
                  Rank for high-value service keywords like "business consultant," "corporate lawyer," or "accounting firm" in your target markets.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Thought Leadership Content</h3>
                <p className="text-muted-foreground">
                  Establish authority through LinkedIn articles, blog posts, whitepapers, and webinars that demonstrate your expertise and attract ideal clients.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">B2B Lead Generation</h3>
                <p className="text-muted-foreground">
                  LinkedIn Ads, Google Ads, and content marketing strategies that generate qualified leads from decision-makers who need your services.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Brand Positioning</h3>
                <p className="text-muted-foreground">
                  Develop a strong professional brand identity that differentiates you from competitors and resonates with your target clients.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Briefcase className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Client Retention Marketing</h3>
                <p className="text-muted-foreground">
                  Email newsletters, client appreciation campaigns, and referral programs that increase lifetime value and generate word-of-mouth referrals.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Professional Services Need Digital Marketing */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t('industry.business.why')}</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">Expertise alone isn't enough.</strong> In today's digital-first world, potential clients research service providers extensively online before ever making contact.
              </p>
              <p className="text-lg">
                Professional services operate on trust and credibility. Your digital presence—website, content, reviews, and social media—is how you demonstrate expertise and build that trust before the first consultation.
              </p>
              <p className="text-lg">
                Our professional services marketing solutions help you establish thought leadership, generate qualified leads, and position your firm as the obvious choice in your market.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('industry.business.cta')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('industry.business.ctaDesc')}
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

export default BusinessIndustryPage;
