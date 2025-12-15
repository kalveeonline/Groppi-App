import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Search, Users, Globe, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const MedicalIndustryPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('industry.medical.title')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t('industry.medical.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('industry.medical.services')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Medical Websites</h3>
                <p className="text-muted-foreground">
                  HIPAA-compliant, user-friendly websites that showcase your practice, services, and expertise. Features include appointment booking, patient portals, and telehealth integration.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Medical SEO Optimization</h3>
                <p className="text-muted-foreground">
                  Rank higher for local medical searches. Optimize for "doctor near me," specialty-specific keywords, and location-based queries to attract more patients.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Social Media for Healthcare</h3>
                <p className="text-muted-foreground">
                  Build trust and educate patients through compliant social media marketing. Share health tips, patient testimonials, and showcase your practice's culture.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Digital Advertising</h3>
                <p className="text-muted-foreground">
                  Targeted Google Ads and social campaigns to attract new patients. Focus on specific treatments, specialties, and geographic areas for maximum ROI.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Reputation Management</h3>
                <p className="text-muted-foreground">
                  Monitor and manage online reviews across multiple platforms. Build a strong online reputation that attracts new patients and builds trust.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Patient Engagement Tools</h3>
                <p className="text-muted-foreground">
                  Email campaigns, appointment reminders, and patient education content to improve retention and satisfaction rates.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Healthcare Needs Digital Marketing */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t('industry.medical.why')}</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">77% of patients</strong> use search engines before booking an appointment. Your online presence is often the first impression patients have of your practice.
              </p>
              <p className="text-lg">
                In today's competitive healthcare landscape, having a strong digital presence isn't optional—it's essential. Patients expect to find detailed information about providers, read reviews, book appointments online, and access telehealth services.
              </p>
              <p className="text-lg">
                Our specialized healthcare marketing solutions help you stand out while maintaining compliance with HIPAA and medical advertising regulations. We understand the unique challenges of healthcare marketing and create strategies that work.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('industry.medical.cta')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('industry.medical.ctaDesc')}
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

export default MedicalIndustryPage;
