import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  BarChart, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  Share2,
  Calendar,
  FileText,
  Download
} from "lucide-react";

export const MyMediaPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('myMedia.loginToast.title'),
      description: t('myMedia.loginToast.description'),
    });
  };

  const stats = [
    {
      icon: Users,
      label: t('myMedia.stats.totalVisitors'),
      value: "12,543",
      change: "+12.5%",
      color: "text-blue-500"
    },
    {
      icon: Eye,
      label: t('myMedia.stats.pageViews'),
      value: "45,231",
      change: "+8.2%",
      color: "text-green-500"
    },
    {
      icon: MousePointer,
      label: t('myMedia.stats.clickRate'),
      value: "3.42%",
      change: "+2.1%",
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      label: t('myMedia.stats.conversionRate'),
      value: "2.8%",
      change: "+5.3%",
      color: "text-orange-500"
    }
  ];

  const recentReports = [
    { title: t('myMedia.reports.report1'), date: t('myMedia.reports.date1'), size: "2.4 MB" },
    { title: t('myMedia.reports.report2'), date: t('myMedia.reports.date2'), size: "1.8 MB" },
    { title: t('myMedia.reports.report3'), date: t('myMedia.reports.date3'), size: "3.1 MB" },
    { title: t('myMedia.reports.report4'), date: t('myMedia.reports.date4'), size: "1.2 MB" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <div className="container px-4 mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-hero">
              <BarChart className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {t('myMedia.title')}
            </h1>
            <p className="text-xl text-primary/70 leading-relaxed">
              {t('myMedia.description')}
            </p>
          </div>
        </div>

        {/* Login Section */}
        <div className="container px-4 mb-16">
          <div className="max-w-md mx-auto">
            <Card className="shadow-elegant border-primary/30 bg-card">
              <CardHeader className="border-b border-primary/20">
                <CardTitle className="text-2xl text-primary">{t('myMedia.login.title')}</CardTitle>
                <CardDescription className="text-primary/60">
                  {t('myMedia.login.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary">{t('myMedia.login.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      className="bg-input border-primary/30 text-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-primary">{t('myMedia.login.password')}</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      placeholder="••••••••"
                      className="bg-input border-primary/30 text-primary focus:border-primary"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-hero text-primary-foreground shadow-elegant transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    {t('myMedia.login.button')}
                  </Button>
                </form>
                <div className="mt-4 text-center">
                  <Button 
                    variant="link" 
                    className="text-primary hover:text-primary-dark"
                    onClick={() => window.location.href = '/appointment'}
                  >
                    {t('myMedia.login.contact')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Demo Stats Preview */}
        <div className="container px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t('myMedia.demo.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                    <p className="text-primary/70 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="container px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t('myMedia.reports.title')}
            </h2>
            <Card className="bg-card border-primary/30">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {recentReports.map((report, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors border border-primary/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">{report.title}</h4>
                          <p className="text-sm text-primary/60">{report.date} • {report.size}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => toast({
                          title: t('myMedia.demoMode.title'),
                          description: t('myMedia.demoMode.description')
                        })}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {t('myMedia.reports.download')}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Preview */}
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t('myMedia.features.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary">{t('myMedia.features.calendar')}</CardTitle>
                  <CardDescription className="text-primary/70">
                    {t('myMedia.features.calendarDesc')}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Share2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary">{t('myMedia.features.socialInsights')}</CardTitle>
                  <CardDescription className="text-primary/70">
                    {t('myMedia.features.socialInsightsDesc')}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary">{t('myMedia.features.analytics')}</CardTitle>
                  <CardDescription className="text-primary/70">
                    {t('myMedia.features.analyticsDesc')}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="container px-4 mt-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-primary/30 text-center">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('myMedia.cta.title')}
                </h2>
                <p className="text-primary/70 mb-8 max-w-2xl mx-auto">
                  {t('myMedia.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-primary-foreground hover:text-black shadow-hero"
                    onClick={() => window.location.href = '/appointment'}
                  >
                    {t('myMedia.cta.button')}
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open('tel:+32494311119', '_self')}
                  >
                    {t('contact.callNow')}
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