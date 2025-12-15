import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Search, Users, Globe, TrendingUp, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const EcommerceIndustryPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('industry.ecommerce.title')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t('industry.ecommerce.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('industry.ecommerce.services')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">High-Converting Webshops</h3>
                <p className="text-muted-foreground">
                  Custom e-commerce stores built on Shopify, WooCommerce, or custom platforms. Optimized checkout flows, mobile shopping, and seamless payment integration.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">E-commerce SEO</h3>
                <p className="text-muted-foreground">
                  Product page optimization, category structure, and technical SEO to rank for high-intent product searches and drive organic traffic that converts.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Social Commerce</h3>
                <p className="text-muted-foreground">
                  Instagram Shopping, Facebook Shops, and social media strategies that turn followers into customers. Influencer collaborations and user-generated content campaigns.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Marketing</h3>
                <p className="text-muted-foreground">
                  Google Shopping Ads, Facebook Ads, and retargeting campaigns optimized for ROAS. Data-driven advertising that scales profitably.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Package className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Conversion Rate Optimization</h3>
                <p className="text-muted-foreground">
                  A/B testing, user experience improvements, and checkout optimization to increase conversion rates and average order values.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <ShoppingCart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email & SMS Marketing</h3>
                <p className="text-muted-foreground">
                  Abandoned cart recovery, post-purchase sequences, and promotional campaigns that drive repeat purchases and customer lifetime value.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why E-commerce Needs Digital Marketing */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t('industry.ecommerce.why')}</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">Building an online store is just the beginning.</strong> Success in e-commerce requires continuous traffic generation, conversion optimization, and customer retention strategies.
              </p>
              <p className="text-lg">
                The e-commerce landscape is fiercely competitive. Whether you're selling physical products, digital goods, or subscriptions, you need a comprehensive digital marketing strategy to stand out and scale profitably.
              </p>
              <p className="text-lg">
                Our e-commerce specialists understand the metrics that matter—customer acquisition cost, lifetime value, conversion rates, and ROAS. We create data-driven strategies that grow your revenue sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('industry.ecommerce.cta')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('industry.ecommerce.ctaDesc')}
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

export default EcommerceIndustryPage;
