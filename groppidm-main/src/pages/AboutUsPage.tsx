import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import koenImage from "@/assets/team/koen-van-gorp.jpg";
import lokmanImage from "@/assets/team/lokman-dinc.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutUsPage = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Target,
      title: t('about.values.resultsDriven'),
      description: t('about.values.resultsDrivenDesc')
    },
    {
      icon: Users,
      title: t('about.values.clientCentric'),
      description: t('about.values.clientCentricDesc')
    },
    {
      icon: Award,
      title: t('about.values.excellence'),
      description: t('about.values.excellenceDesc')
    },
    {
      icon: TrendingUp,
      title: t('about.values.innovation'),
      description: t('about.values.innovationDesc')
    }
  ];

  const stats = [
    { number: "158+", label: t('about.stats.happyClients') },
    { number: "34+", label: t('about.stats.websitesLaunched') },
    { number: "29+", label: t('about.stats.activeCampaigns') }
  ];

  const team = [
    {
      name: "Koen van gorp",
      role: t('about.team.koen.role'),
      description: t('about.team.koen.description'),
      image: koenImage
    },
    {
      name: "Lokman Dinç",
      role: t('about.team.lokman.role'),
      description: t('about.team.lokman.description'),
      image: lokmanImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <div className="container px-4 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-primary/70 leading-relaxed">
              {t('about.hero.description')}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-card border-y border-primary/30 py-12 mb-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="container px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              {t('about.story.title')}
            </h2>
            <div className="space-y-4 text-primary/70 text-justify">
              <p>{t('about.story.para1')}</p>
              <p>{t('about.story.para2')}</p>
              <p>{t('about.story.para3')}</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="container px-4 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            {t('about.values.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary text-center mb-3">
                    {value.title}
                  </h3>
                  <p className="text-primary/70 text-center text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="container px-4 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            {t('about.team.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-primary/30 overflow-hidden hover:border-primary transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary/60 text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-primary/70 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* CTA Section */}
        <div className="container px-4">
          <div className="bg-gradient-card border border-primary/30 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-primary/70 mb-8 max-w-2xl mx-auto">
              {t('about.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground hover:text-black shadow-hero"
                onClick={() => window.location.href = '/appointment'}
              >
                {t('about.cta.schedule')}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => window.location.href = '/#services'}
              >
                {t('about.cta.viewWork')}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};