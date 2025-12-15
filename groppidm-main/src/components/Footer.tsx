
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Music } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/ui/language-selector";
import { Link } from "react-router-dom";
import groppiLogoCircle from "@/assets/groppi-logo-circle.png";
import groppiTextLogo from "@/assets/groppi-text-logo.jpg";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export const Footer = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailSchema = z.object({
    email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" })
  });

  const handleSubscribe = async () => {
    if (isSubmitting) return;
    
    try {
      // Validate email
      emailSchema.parse({ email });
      
      setIsSubmitting(true);
      
      // Insert into database
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: email.trim().toLowerCase() }]);
      
      if (error) {
        // Check if email already exists
        if (error.code === '23505') {
          toast({
            title: t('footer.alreadySubscribed'),
            variant: "default"
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: t('footer.subscribeSuccess'),
          variant: "default"
        });
        setEmail(""); // Clear input on success
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: (error as any).errors[0].message,
          variant: "destructive"
        });
      } else {
        console.error("Newsletter subscription error:", error);
        toast({
          title: t('footer.subscribeError'),
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <footer className="bg-background text-foreground border-t border-primary/30">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
              <img 
                src={groppiLogoCircle} 
                alt="GROPPI Logo" 
                className="h-12 w-12 object-contain group-hover:scale-105 transition-all duration-300"
              />
              <div className="flex flex-col justify-center">
                <img 
                  src={groppiTextLogo} 
                  alt="GROPPI" 
                  className="h-10 w-full object-contain mt-1"
                />
                <span className="text-xs text-primary/70 mt-0 whitespace-nowrap">Digital Marketing Bureau</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('footer.companyDescription')}
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://www.facebook.com/profile.php?id=61582782063217" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6 text-[hsl(var(--facebook))] group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://x.com/Groppimarketing" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-[hsl(var(--twitter))] group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://www.instagram.com/groppimarketingbureau/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-[hsl(var(--instagram))] group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://www.linkedin.com/company/groppi-marketing" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-[hsl(var(--linkedin))] group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://www.youtube.com/@GroppiMarketing" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-6 w-6 text-[hsl(var(--youtube))] group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://www.tiktok.com/@groppimarketingbureau?lang=nl-NL" target="_blank" rel="noopener noreferrer">
                  <Music className="h-6 w-6 text-[hsl(var(--tiktok))] group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">{t('footer.services')}</h3>
            <div className="space-y-2 text-sm">
              <Link 
                to="/website-development"
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {t('footer.websiteDevelopment')}
              </Link>
              <Link 
                to="/webshop-creation"
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {t('footer.webshopCreation')}
              </Link>
              <Link 
                to="/seo-optimization"
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {t('footer.seoOptimization')}
              </Link>
              <Link 
                to="/digital-advertising"
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {t('footer.digitalAdvertising')}
              </Link>
              <Link 
                to="/social-media-marketing"
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {t('footer.socialMediaMarketing')}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">{t('footer.contact')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">MOB: +32 494 311 119</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">GSM: 01463 5005</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@groppi.be" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@groppi.be
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Het Steeke 5A, 2330 Merksplas
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">{t('footer.newsletter')}</h3>
            <p className="text-muted-foreground text-sm">
              {t('footer.newsletterDescription')}
            </p>
            <div className="space-y-2">
              <Input 
                type="email"
                placeholder={t('footer.emailPlaceholder')} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                disabled={isSubmitting}
                className="bg-background/50 border-border/30 text-foreground placeholder:text-muted-foreground/70"
              />
              <Button 
                onClick={handleSubscribe}
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
              >
                {isSubmitting ? t('footer.subscribing') || 'Subscribing...' : t('footer.subscribe')}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} GROPPI Digital Marketing Bureau. {t('footer.allRightsReserved')}
          </div>
          <div className="flex items-center gap-6">
            <LanguageSelector variant="compact" className="text-muted-foreground hover:text-foreground" />
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
