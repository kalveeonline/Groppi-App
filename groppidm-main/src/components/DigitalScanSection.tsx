import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const DigitalScanSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                <Search className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('digitalScan.title')}
            </h2>
            
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              {t('digitalScan.description')}
            </p>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-hero hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.location.href = '/site-scan'}
            >
              {t('digitalScan.button')}
            </Button>

            {/* Visual Element */}
            <div className="mt-12">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Mock scan results */}
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                    <span className="text-base font-semibold text-foreground">{t('digitalScan.websiteStatus')}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-green-500 font-semibold">{t('digitalScan.statusActive')}</span>
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                    <span className="text-base font-semibold text-foreground">{t('digitalScan.seoOptimization')}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-yellow-500 font-semibold">{t('digitalScan.statusGood')}</span>
                      <div className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                    <span className="text-base font-semibold text-foreground">{t('digitalScan.onlineVisibility')}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-primary font-semibold">{t('digitalScan.statusExcellent')}</span>
                      <div className="h-3 w-3 rounded-full bg-primary animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                    <span className="text-base font-semibold text-foreground">{t('digitalScan.businessData')}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-green-500 font-semibold">{t('digitalScan.statusVerified')}</span>
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};