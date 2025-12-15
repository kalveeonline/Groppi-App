import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Utensils, Clock, MapPin, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const RestaurantDemo = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const menuItems = [
    {
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      nameKey: "demos.restaurant.menu.item1.name",
      descKey: "demos.restaurant.menu.item1.desc",
      price: "€18"
    },
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
      nameKey: "demos.restaurant.menu.item2.name",
      descKey: "demos.restaurant.menu.item2.desc",
      price: "€16"
    },
    {
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
      nameKey: "demos.restaurant.menu.item3.name",
      descKey: "demos.restaurant.menu.item3.desc",
      price: "€12"
    }
  ];

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
            <Utensils className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('demos.restaurant.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('demos.restaurant.subtitle')}
          </p>
        </div>

        {/* Restaurant Info */}
        <div className="bg-gradient-card rounded-xl p-8 shadow-card mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">{t('demos.restaurant.openingHours')}</p>
                <p className="text-sm text-muted-foreground">Mon-Sun: 11:00 - 23:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">{t('demos.restaurant.location')}</p>
                <p className="text-sm text-muted-foreground">Main Street 123, Antwerp</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">{t('demos.restaurant.reservations')}</p>
                <p className="text-sm text-muted-foreground">+32 3 123 45 67</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t('demos.restaurant.ourMenu')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={t(item.nameKey)}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {t(item.nameKey)}
                  </h3>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t(item.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
            <Phone className="mr-2 h-5 w-5" />
            {t('demos.restaurant.makeReservation')}
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RestaurantDemo;