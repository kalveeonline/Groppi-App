import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Briefcase, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const JobsPage = () => {
  const { t } = useLanguage();
  const jobListings = [
    {
      title: t('jobs.job1.title'),
      department: t('jobs.job1.department'),
      location: t('jobs.job1.location'),
      type: t('jobs.job1.type'),
      description: t('jobs.job1.description'),
      requirements: [
        t('jobs.job1.req1'),
        t('jobs.job1.req2'),
        t('jobs.job1.req3'),
        t('jobs.job1.req4'),
        t('jobs.job1.req5')
      ]
    },
    {
      title: t('jobs.job2.title'),
      department: t('jobs.job2.department'),
      location: t('jobs.job2.location'),
      type: t('jobs.job2.type'),
      description: t('jobs.job2.description'),
      requirements: [
        t('jobs.job2.req1'),
        t('jobs.job2.req2'),
        t('jobs.job2.req3'),
        t('jobs.job2.req4'),
        t('jobs.job2.req5')
      ]
    },
    {
      title: t('jobs.job3.title'),
      department: t('jobs.job3.department'),
      location: t('jobs.job3.location'),
      type: t('jobs.job3.type'),
      description: t('jobs.job3.description'),
      requirements: [
        t('jobs.job3.req1'),
        t('jobs.job3.req2'),
        t('jobs.job3.req3'),
        t('jobs.job3.req4'),
        t('jobs.job3.req5')
      ]
    },
    {
      title: t('jobs.job4.title'),
      department: t('jobs.job4.department'),
      location: t('jobs.job4.location'),
      type: t('jobs.job4.type'),
      description: t('jobs.job4.description'),
      requirements: [
        t('jobs.job4.req1'),
        t('jobs.job4.req2'),
        t('jobs.job4.req3'),
        t('jobs.job4.req4'),
        t('jobs.job4.req5')
      ]
    },
    {
      title: t('jobs.job5.title'),
      department: t('jobs.job5.department'),
      location: t('jobs.job5.location'),
      type: t('jobs.job5.type'),
      description: t('jobs.job5.description'),
      requirements: [
        t('jobs.job5.req1'),
        t('jobs.job5.req2'),
        t('jobs.job5.req3'),
        t('jobs.job5.req4'),
        t('jobs.job5.req5')
      ]
    },
    {
      title: t('jobs.job6.title'),
      department: t('jobs.job6.department'),
      location: t('jobs.job6.location'),
      type: t('jobs.job6.type'),
      description: t('jobs.job6.description'),
      requirements: [
        t('jobs.job6.req1'),
        t('jobs.job6.req2'),
        t('jobs.job6.req3'),
        t('jobs.job6.req4'),
        t('jobs.job6.req5')
      ]
    }
  ];

  const benefits = [
    t('jobs.benefit1'),
    t('jobs.benefit2'),
    t('jobs.benefit3'),
    t('jobs.benefit4'),
    t('jobs.benefit5'),
    t('jobs.benefit6'),
    t('jobs.benefit7'),
    t('jobs.benefit8')
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              {t('jobs.hero.title')}
            </h1>
            <p className="text-xl text-primary/70 max-w-3xl mx-auto">
              {t('jobs.hero.description')}
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t('jobs.whyWork.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {t('jobs.whyWork.growth')}
                  </h3>
                  <p className="text-primary/70">
                    {t('jobs.whyWork.growthDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {t('jobs.whyWork.balance')}
                  </h3>
                  <p className="text-primary/70">
                    {t('jobs.whyWork.balanceDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {t('jobs.whyWork.diverse')}
                  </h3>
                  <p className="text-primary/70">
                    {t('jobs.whyWork.diverseDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {t('jobs.whyWork.culture')}
                  </h3>
                  <p className="text-primary/70">
                    {t('jobs.whyWork.cultureDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Job Listings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t('jobs.openPositions')}
            </h2>
            <div className="space-y-6">
              {jobListings.map((job, index) => (
                <Card key={index} className="bg-card border-primary/30 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-primary mb-2">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-primary/70">
                          {job.description}
                        </CardDescription>
                      </div>
                      <Button 
                        className="bg-primary hover:bg-primary-dark shrink-0"
                        onClick={() => window.open(`mailto:info@groppi.be?subject=Application for ${job.title}&body=Dear GROPPI team,%0D%0A%0D%0AI would like to apply for the position of ${job.title}.%0D%0A%0D%0AKind regards`, '_self')}
                      >
                        {t('jobs.applyNow')}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-primary/70">
                        <Briefcase className="h-4 w-4" />
                        <span className="text-sm">{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary/70">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary/70">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">{t('jobs.requirements')}</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-primary/70 text-sm">
                            <span className="text-primary mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-card border border-primary/30 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t('jobs.benefits.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 p-4 bg-background/50 rounded-lg"
                >
                  <span className="text-primary text-lg">✓</span>
                  <span className="text-primary/80 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t('jobs.process.title')}
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t('jobs.process.step1')}</h3>
                  <p className="text-primary/70">
                    {t('jobs.process.step1Desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t('jobs.process.step2')}</h3>
                  <p className="text-primary/70">
                    {t('jobs.process.step2Desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t('jobs.process.step3')}</h3>
                  <p className="text-primary/70">
                    {t('jobs.process.step3Desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t('jobs.process.step4')}</h3>
                  <p className="text-primary/70">
                    {t('jobs.process.step4Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-card border border-primary/30 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {t('jobs.cta.title')}
            </h2>
            <p className="text-xl text-primary/70 mb-8">
              {t('jobs.cta.description')}
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-hero"
              onClick={() => window.open('mailto:info@groppi.be?subject=Spontaneous Application&body=Dear GROPPI team,%0D%0A%0D%0AI would like to submit a spontaneous application for a position at your company.%0D%0A%0D%0AKind regards', '_self')}
            >
              {t('jobs.cta.button')}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};