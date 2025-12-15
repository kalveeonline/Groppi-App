import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, TrendingUp, Users, Award, Target, Briefcase, MapPin, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const FranchisePage = () => {
  const { t } = useLanguage();
  const benefits = [
    {
      icon: Award,
      title: t('franchise.why.proven'),
      description: t('franchise.why.provenDesc')
    },
    {
      icon: Users,
      title: t('franchise.why.training'),
      description: t('franchise.why.trainingDesc')
    },
    {
      icon: Target,
      title: t('franchise.why.support'),
      description: t('franchise.why.supportDesc')
    },
    {
      icon: TrendingUp,
      title: t('franchise.why.development'),
      description: t('franchise.why.developmentDesc')
    }
  ];


  const support = [
    t('franchise.support.item1'),
    t('franchise.support.item2'),
    t('franchise.support.item3'),
    t('franchise.support.item4'),
    t('franchise.support.item5'),
    t('franchise.support.item6'),
    t('franchise.support.item7'),
    t('franchise.support.item8')
  ];

  const requirements = [
    t('franchise.candidate.req1'),
    t('franchise.candidate.req2'),
    t('franchise.candidate.req3'),
    t('franchise.candidate.req4'),
    t('franchise.candidate.req5'),
    t('franchise.candidate.req6'),
    t('franchise.candidate.req7'),
    t('franchise.candidate.req8')
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <div className="container px-4 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {t('franchise.hero.title')}
            </h1>
            <p className="text-xl text-primary/70 leading-relaxed mb-8">
              {t('franchise.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-black hover:text-black shadow-hero"
                onClick={() => window.location.href = '/appointment'}
              >
                {t('franchise.hero.button')}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black"
                onClick={() => window.open('tel:+32494311119', '_self')}
              >
                {t('franchise.hero.call')}
              </Button>
            </div>
          </div>
        </div>

        {/* Why GROPPI Section */}
        <div className="bg-card/30 py-16 mb-16">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              {t('franchise.why.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                  <CardContent className="pt-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                    <p className="text-primary/70 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Information */}
        <div className="container px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t('franchise.investment.title')}
            </h2>
            <Card className="bg-gradient-card border-primary/30">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <DollarSign className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {t('franchise.investment.contact')}
                </h3>
                <p className="text-primary/70 mb-8 max-w-2xl mx-auto">
                  {t('franchise.investment.contactDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-black hover:text-black shadow-hero"
                    onClick={() => window.location.href = '/appointment'}
                  >
                    {t('franchise.investment.schedule')}
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-black"
                    onClick={() => window.open('tel:+32494311119', '_self')}
                  >
                    {t('franchise.investment.call')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support & Training */}
        <div className="bg-card/30 py-16 mb-16">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                {t('franchise.support.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{t('franchise.support.subtitle')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {support.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-primary/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{t('franchise.candidate.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {requirements.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-primary/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>



        {/* Process */}
        <div className="container px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              {t('franchise.process.title')}
            </h2>
            <div className="space-y-6">
              {[
                { step: 1, title: t('franchise.process.step1'), desc: t('franchise.process.step1Desc') },
                { step: 2, title: t('franchise.process.step2'), desc: t('franchise.process.step2Desc') },
                { step: 3, title: t('franchise.process.step3'), desc: t('franchise.process.step3Desc') },
                { step: 4, title: t('franchise.process.step4'), desc: t('franchise.process.step4Desc') },
                { step: 5, title: t('franchise.process.step5'), desc: t('franchise.process.step5Desc') },
                { step: 6, title: t('franchise.process.step6'), desc: t('franchise.process.step6Desc') },
                { step: 7, title: t('franchise.process.step7'), desc: t('franchise.process.step7Desc') },
                { step: 8, title: t('franchise.process.step8'), desc: t('franchise.process.step8Desc') }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-card border border-primary/30 rounded-lg hover:border-primary transition-all">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-primary/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-primary/30 text-center">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('franchise.cta.title')}
                </h2>
                <p className="text-primary/70 mb-8 max-w-2xl mx-auto">
                  {t('franchise.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-black hover:text-black shadow-hero"
                    onClick={() => window.location.href = '/appointment'}
                  >
                    {t('franchise.cta.schedule')}
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-black"
                    onClick={() => window.open('mailto:franchise@groppi.be', '_self')}
                  >
                    Email: franchise@groppi.be
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};