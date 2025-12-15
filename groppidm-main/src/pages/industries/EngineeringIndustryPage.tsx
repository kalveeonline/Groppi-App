import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Search, Users, Globe, TrendingUp, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const EngineeringIndustryPage = () => {
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
                {t('industry.engineering.title')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t('industry.engineering.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('industry.engineering.services')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Technical Portfolio Websites</h3>
                <p className="text-muted-foreground">
                  Professional websites that showcase your projects, technical expertise, and industry certifications. Include project galleries, case studies, and downloadable resources.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">B2B SEO Strategy</h3>
                <p className="text-muted-foreground">
                  Rank for industry-specific keywords like "structural engineering services," "MEP design," or "civil engineering consultants" to attract qualified leads.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">LinkedIn & Professional Networks</h3>
                <p className="text-muted-foreground">
                  Build authority through LinkedIn marketing, industry group engagement, and thought leadership content targeting decision-makers.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Targeted B2B Advertising</h3>
                <p className="text-muted-foreground">
                  Google Ads and LinkedIn campaigns targeting construction firms, developers, and government agencies looking for engineering services.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Content Marketing</h3>
                <p className="text-muted-foreground">
                  Technical articles, whitepapers, and case studies that demonstrate your expertise and attract high-value clients through educational content.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Corporate Identity Design</h3>
                <p className="text-muted-foreground">
                  Professional branding that reflects your technical expertise—logos, business cards, proposal templates, and presentation materials.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Engineering Needs Digital Marketing */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t('industry.engineering.why')}</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">Engineering is a relationship business</strong>, but 89% of B2B buyers start their search online. Your digital presence establishes credibility before the first meeting.
              </p>
              <p className="text-lg">
                Project decision-makers research potential engineering partners extensively online. They want to see your past projects, understand your technical capabilities, and verify your certifications and experience.
              </p>
              <p className="text-lg">
                Our specialized engineering marketing solutions help you present complex technical information in an accessible way, showcase your project portfolio effectively, and generate qualified leads from architects, contractors, and developers.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('industry.engineering.cta')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('industry.engineering.ctaDesc')}
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

export default EngineeringIndustryPage;
