import { Users, Monitor, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const StatsSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Users,
      number: "158+",
      label: t('stats.happyClients')
    },
    {
      icon: Monitor,
      number: "34+",
      label: t('stats.websitesOnline')
    },
    {
      icon: Target,
      number: "29+",
      label: t('stats.liveCampaigns')
    }
  ];
  return (
    <section className="py-16 bg-background/30">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};