import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PricingCalculator } from "@/components/PricingCalculator";
import { Link } from "react-router-dom";

export const PricesPage = () => {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      name: t('prices.starter'),
      price: t('prices.starterPrice'),
      period: t('prices.starterPeriod'),
      description: t('prices.starterDesc'),
      features: [
        t('prices.starterFeature1'),
        t('prices.starterFeature2'),
        t('prices.starterFeature3'),
        t('prices.starterFeature4'),
        t('prices.starterFeature5'),
        t('prices.starterFeature6')
      ],
      popular: false
    },
    {
      name: t('prices.professional'),
      price: t('prices.professionalPrice'),
      period: t('prices.professionalPeriod'),
      description: t('prices.professionalDesc'),
      features: [
        t('prices.professionalFeature1'),
        t('prices.professionalFeature2'),
        t('prices.professionalFeature3'),
        t('prices.professionalFeature4'),
        t('prices.professionalFeature5'),
        t('prices.professionalFeature6'),
        t('prices.professionalFeature7')
      ],
      popular: true
    },
    {
      name: t('prices.enterprise'),
      price: t('prices.enterprisePrice'),
      period: t('prices.enterprisePeriod'),
      description: t('prices.enterpriseDesc'),
      features: [
        t('prices.enterpriseFeature1'),
        t('prices.enterpriseFeature2'),
        t('prices.enterpriseFeature3'),
        t('prices.enterpriseFeature4'),
        t('prices.enterpriseFeature5'),
        t('prices.enterpriseFeature6'),
        t('prices.enterpriseFeature7'),
        t('prices.enterpriseFeature8'),
        t('prices.enterpriseFeature9')
      ],
      popular: false
    }
  ];

  const addOns = [
    { name: t('prices.addon1Name'), price: t('prices.addon1Price') },
    { name: t('prices.addon2Name'), price: t('prices.addon2Price') },
    { name: t('prices.addon3Name'), price: t('prices.addon3Price') },
    { name: t('prices.addon4Name'), price: t('prices.addon4Price') },
    { name: t('prices.addon5Name'), price: t('prices.addon5Price') },
    { name: t('prices.addon6Name'), price: t('prices.addon6Price') }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              {t("prices.title")}
            </h1>
            <p className="text-xl text-primary/70 max-w-3xl mx-auto">
              {t("prices.subtitle")}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative bg-card border-2 ${
                  plan.popular ? 'border-primary shadow-glow' : 'border-primary/30'
                } hover:border-primary transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      {t("prices.mostPopular")}
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-primary/70">{plan.period}</span>
                  </div>
                  <CardDescription className="text-primary/70">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-primary/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary-dark text-primary-foreground hover:text-black' 
                        : 'bg-primary/20 hover:bg-primary/30 text-primary'
                    }`}
                    asChild
                  >
                    <Link to="/appointment">{t("prices.getStarted")}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Calculator */}
          <PricingCalculator />

          {/* Add-ons Section */}
          <div className="bg-card border border-primary/30 rounded-lg p-8 mt-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              {t("prices.addons")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 bg-background/50 rounded-lg border border-primary/20"
                >
                  <span className="text-primary font-medium">{addon.name}</span>
                  <span className="text-primary/70">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t("prices.faq")}
            </h2>
            <div className="space-y-6">
              <div className="bg-card border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t("prices.faqUpgrade")}
                </h3>
                <p className="text-primary/70">
                  {t("prices.faqUpgradeAnswer")}
                </p>
              </div>
              
              <div className="bg-card border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t("prices.faqPayment")}
                </h3>
                <p className="text-primary/70">
                  {t("prices.faqPaymentAnswer")}
                </p>
              </div>
              
              <div className="bg-card border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t("prices.faqSetup")}
                </h3>
                <p className="text-primary/70">
                  {t("prices.faqSetupAnswer")}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {t("prices.readyTitle")}
            </h2>
            <p className="text-xl text-primary/70 mb-8">
              {t("prices.readySubtitle")}
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground hover:text-black shadow-hero"
              onClick={() => window.open('/appointment', '_blank')}
            >
              {t("prices.bookConsultation")}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};