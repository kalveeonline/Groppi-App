import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dumbbell, Users, Calendar, Award, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const FitnessDemo = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const programs = [
    {
      icon: Dumbbell,
      nameKey: 'demos.fitness.strengthTraining',
      descKey: 'demos.fitness.strengthDesc',
      duration: '12',
      levelKey: 'demos.fitness.allLevels'
    },
    {
      icon: Users,
      nameKey: 'demos.fitness.groupClasses',
      descKey: 'demos.fitness.groupDesc',
      duration: 'ongoing',
      levelKey: 'demos.fitness.beginnerAdvanced'
    },
    {
      icon: Award,
      nameKey: 'demos.fitness.personalTraining',
      descKey: 'demos.fitness.personalDesc',
      duration: 'flexible',
      levelKey: 'demos.fitness.allLevels'
    }
  ];

  const trainers = [
    {
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
      nameKey: "demos.fitness.trainer1.name",
      specialtyKey: "demos.fitness.trainer1.specialty",
      experience: "8"
    },
    {
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800",
      nameKey: "demos.fitness.trainer2.name",
      specialtyKey: "demos.fitness.trainer2.specialty",
      experience: "6"
    },
    {
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800",
      nameKey: "demos.fitness.trainer3.name",
      specialtyKey: "demos.fitness.trainer3.specialty",
      experience: "10"
    }
  ];

  const getDuration = (duration: string) => {
    if (duration === 'ongoing') return t('demos.fitness.ongoing');
    if (duration === 'flexible') return t('demos.fitness.flexible');
    return `${duration} ${t('demos.fitness.weeks')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('demos.backToHome')}
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <Dumbbell className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('demos.fitness.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('demos.fitness.subtitle')}
          </p>
        </div>

        {/* Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t('demos.fitness.ourPrograms')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  <program.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(program.nameKey)}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t(program.descKey)}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{getDuration(program.duration)}</span>
                  </div>
                  <div>
                    <span>{t(program.levelKey)}</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                  {t('demos.fitness.learnMore')}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Trainers */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t('demos.fitness.meetTrainers')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={t(trainer.nameKey)}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(trainer.nameKey)}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-2">
                    {t(trainer.specialtyKey)}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {trainer.experience} {t('demos.fitness.experience')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
            <Calendar className="mr-2 h-5 w-5" />
            {t('demos.fitness.bookTrial')}
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FitnessDemo;