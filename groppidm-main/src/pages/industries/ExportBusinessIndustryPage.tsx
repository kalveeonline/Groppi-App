import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe2, Search, Users, Globe, TrendingUp, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ExportBusinessIndustryPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <Globe2 className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('industry.exportBusiness.title')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t('industry.exportBusiness.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('industry.exportBusiness.services')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Multilingual Websites</h3>
                <p className="text-muted-foreground">
                  Professional websites in multiple languages with country-specific content, currency conversion, and cultural localization to reach international buyers effectively.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">International SEO</h3>
                <p className="text-muted-foreground">
                  Multi-country SEO strategies targeting international search engines (Google, Baidu, Yandex) and industry-specific B2B keywords in target markets.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">B2B Digital Marketing</h3>
                <p className="text-muted-foreground">
                  LinkedIn campaigns, trade show promotion, and industry-specific digital strategies to connect with international distributors, agents, and buyers.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Export Lead Generation</h3>
                <p className="text-muted-foreground">
                  Targeted advertising on Google, LinkedIn, and industry platforms to reach qualified international buyers actively searching for your products.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Languages className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Market-Specific Content</h3>
                <p className="text-muted-foreground">
                  Product catalogs, technical documentation, case studies, and marketing materials adapted for different markets with proper localization and cultural relevance.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trade Platform Integration</h3>
                <p className="text-muted-foreground">
                  Optimization for B2B platforms like Alibaba, Global Sources, and Made-in-China to increase visibility and generate qualified international leads.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Export Businesses Need Digital Marketing */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t('industry.exportBusiness.why')}</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">87% of B2B buyers research online</strong> before making international sourcing decisions. Your digital presence is often the first—and sometimes only—impression for international buyers.
              </p>
              <p className="text-lg">
                Expanding into international markets requires more than just translating your website. You need culturally adapted content, market-specific SEO, and strategies to build trust with buyers who may never visit your facility in person.
              </p>
              <p className="text-lg">
                Our export-focused digital marketing helps you penetrate new markets, generate qualified international leads, and build relationships with overseas distributors and buyers—all while navigating language and cultural barriers effectively.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('industry.exportBusiness.cta')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('industry.exportBusiness.ctaDesc')}
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

export default ExportBusinessIndustryPage;
