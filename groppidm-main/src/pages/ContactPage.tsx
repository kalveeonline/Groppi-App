import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  Building2
} from "lucide-react";

export const ContactPage = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      title: t('contact.phone'),
      detail: "+32 494 31 11 19",
      action: () => window.open('tel:+32494311119', '_self'),
      buttonText: t('contact.callNow')
    },
    {
      icon: Phone,
      title: t('contact.gsm'),
      detail: "+32 (0) 1463 5005",
      action: () => window.open('tel:+3214635005', '_self'),
      buttonText: t('contact.callNow')
    },
    {
      icon: MessageSquare,
      title: t('contact.whatsapp'),
      detail: t('contact.whatsappDesc'),
      action: () => window.open('https://wa.me/32494311119', '_blank'),
      buttonText: t('contact.openWhatsApp')
    },
    {
      icon: Mail,
      title: t('contact.email'),
      detail: "info@groppi.be",
      action: () => window.open('mailto:info@groppi.be', '_self'),
      buttonText: t('contact.sendEmail')
    },
    {
      icon: Send,
      title: t('contact.bookAppointment'),
      detail: t('contact.bookAppointmentDesc'),
      action: () => window.location.href = '/appointment',
      buttonText: t('contact.bookNow')
    }
  ];

  const offices = [
    {
      city: t('contact.antwerp'),
      type: t('contact.mainOffice'),
      icon: Building2
    },
    {
      city: t('contact.brussels'),
      type: t('contact.branchOffice'),
      icon: Building2
    },
    {
      city: t('contact.ghent'),
      type: t('contact.regionalOffice'),
      icon: Building2
    }
  ];

  const businessHours = [
    { day: t('contact.mondayFriday'), hours: t('contact.hours.weekday') },
    { day: t('contact.saturday'), hours: t('contact.hours.saturday') },
    { day: t('contact.sunday'), hours: t('contact.closed') }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <div className="container px-4 mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-primary/70 leading-relaxed">
              {t('contact.hero.description')}
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="container px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-hero cursor-pointer group"
                  onClick={method.action}
                >
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
                        <method.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{method.title}</h3>
                    <p className="text-primary/70 text-sm mb-4">{method.detail}</p>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {method.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="bg-card/30 py-16 mb-16">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                {t('contact.ourLocations')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {offices.map((office, index) => (
                  <Card key={index} className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                    <CardContent className="pt-8 pb-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <office.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{office.city}</h3>
                      <p className="text-primary/70">{office.type}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours & Address */}
        <div className="container px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Business Hours */}
              <Card className="bg-gradient-card border-primary/30">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{t('contact.businessHours')}</h3>
                  </div>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                        <span className="text-primary font-semibold">{schedule.day}</span>
                        <span className="text-primary/70">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Main Address */}
              <Card className="bg-gradient-card border-primary/30">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{t('contact.headOffice')}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-background/50 rounded-lg">
                      <p className="text-primary font-semibold mb-2">GROPPI Digital Marketing Bureau</p>
                      <p className="text-primary/70">Het Steeke 5A</p>
                      <p className="text-primary/70">2330 Merksplas</p>
                      <p className="text-primary/70">Belgium</p>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                      onClick={() => window.open('https://maps.google.com/?q=Het+Steeke+5A+2330+Merksplas', '_blank')}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      {t('contact.openInMaps')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t('contact.quickQuestions')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6 pb-6">
                  <h4 className="text-lg font-bold text-primary mb-2">{t('contact.responseTime')}</h4>
                  <p className="text-primary/70 text-sm">
                    {t('contact.responseTimeDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6 pb-6">
                  <h4 className="text-lg font-bold text-primary mb-2">{t('contact.freeConsultation')}</h4>
                  <p className="text-primary/70 text-sm">
                    {t('contact.freeConsultationDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6 pb-6">
                  <h4 className="text-lg font-bold text-primary mb-2">{t('contact.emergencySupport')}</h4>
                  <p className="text-primary/70 text-sm">
                    {t('contact.emergencySupportDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6 pb-6">
                  <h4 className="text-lg font-bold text-primary mb-2">{t('contact.meetingOptions')}</h4>
                  <p className="text-primary/70 text-sm">
                    {t('contact.meetingOptionsDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-primary/30 text-center">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('contact.cta.title')}
                </h2>
                <p className="text-primary/70 mb-8 max-w-2xl mx-auto">
                  {t('contact.cta.description')}
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-hero text-primary-foreground hover:text-black shadow-elegant transition-all duration-300 hover:scale-105 font-semibold"
                  onClick={() => window.location.href = '/appointment'}
                >
                  {t('contact.cta.button')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};