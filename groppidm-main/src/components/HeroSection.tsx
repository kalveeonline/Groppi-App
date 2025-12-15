import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/ui/language-selector";
import websiteDiagram from "@/assets/website-diagram.png";
export const HeroSection = () => {
  const {
    t
  } = useLanguage();
  return <section className="relative bg-gradient-hero py-16 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10"></div>
      
      <div className="container relative px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            {/* Trust Indicators */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-3 w-3 rounded-full bg-primary mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{t('hero.trustIndicators.oneStop')}</h3>
                  <p className="text-sm text-muted-foreground">{t('hero.trustIndicators.oneStopDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-3 w-3 rounded-full bg-primary mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{t('hero.trustIndicators.budget')}</h3>
                  <p className="text-sm text-muted-foreground">{t('hero.trustIndicators.budgetDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-3 w-3 rounded-full bg-primary mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{t('hero.trustIndicators.reports')}</h3>
                  <p className="text-sm text-muted-foreground">{t('hero.trustIndicators.reportsDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-full bg-gradient-card p-3 md:p-4 shadow-hero w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto aspect-square mx-auto">
              <img 
                src={websiteDiagram} 
                alt="Website Digital Marketing Ecosystem" 
                className="w-full h-full object-cover rounded-full"
                fetchPriority="high"
                decoding="async"
                width={600}
                height={600}
              />
              
              {/* Rotating container for floating elements */}
              <div className="absolute inset-0 animate-spin-slow">
                {/* Floating elements - scaled for mobile */}
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 h-8 w-8 md:h-16 md:w-16 rounded-full bg-primary/20 blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 h-10 w-10 md:h-20 md:w-20 rounded-full bg-primary/10 blur-2xl"></div>
                <div className="absolute -top-4 md:-top-8 left-1/2 transform -translate-x-1/2 h-6 w-6 md:h-12 md:w-12 rounded-full bg-primary/15 blur-lg"></div>
                <div className="absolute bottom-0 right-4 md:right-8 h-8 w-8 md:h-14 md:w-14 rounded-full bg-primary/25 blur-xl"></div>
                <div className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 h-6 w-6 md:h-10 md:w-10 rounded-full bg-primary/20 blur-md"></div>
                <div className="absolute top-1/4 right-0 h-4 w-4 md:h-8 md:w-8 rounded-full bg-primary/30 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};