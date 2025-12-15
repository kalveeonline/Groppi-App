import { CheckCircle, Users, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: CheckCircle,
      title: t('features.title1'),
      description: t('features.desc1')
    },
    {
      icon: Users,
      title: t('features.title2'),
      description: t('features.desc2')
    },
    {
      icon: DollarSign,
      title: t('features.title3'),
      description: t('features.desc3')
    }
  ];
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};