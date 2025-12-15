import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Search, Users, Globe, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const SalesIndustryPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('industry.sales.title')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t('industry.sales.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('industry.sales.services')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lead Generation Websites</h3>
                <p className="text-muted-foreground">
                  Conversion-optimized websites with clear CTAs, lead capture forms, and landing pages designed to turn visitors into qualified sales leads.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">High-Intent SEO</h3>
                <p className="text-muted-foreground">
                  Target bottom-of-funnel keywords that indicate buying intent. Capture prospects actively searching for solutions you provide.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Social Selling Strategy</h3>
                <p className="text-muted-foreground">
                  Build your personal brand on LinkedIn and other platforms. Create content that positions you as an industry expert and attracts inbound leads.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance-Driven Ads</h3>
                <p className="text-muted-foreground">
                  Google Ads, LinkedIn Ads, and retargeting campaigns focused on ROI. Track every lead back to its source and optimize for conversions.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Marketing Automation</h3>
                <p className="text-muted-foreground">
                  Automated email sequences, lead nurturing campaigns, and CRM integration to keep prospects engaged throughout the sales cycle.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sales Funnel Optimization</h3>
                <p className="text-muted-foreground">
                  Analyze and optimize every stage of your digital sales funnel—from awareness to conversion—to maximize revenue per visitor.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Sales Teams Need Digital Marketing */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t('industry.sales.why')}</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">68% of B2B buyers prefer to research independently online</strong> before engaging with sales. Your digital presence is your first sales pitch.
              </p>
              <p className="text-lg">
                Modern sales success requires more than cold calls and door-knocking. Digital marketing fills your pipeline with warm, qualified leads who have already researched your solution and are ready to buy.
              </p>
              <p className="text-lg">
                Our sales-focused digital strategies help you generate more leads, shorten sales cycles, and close more deals. We understand the sales process and create marketing that directly supports revenue goals.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('industry.sales.cta')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('industry.sales.ctaDesc')}
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

export default SalesIndustryPage;
