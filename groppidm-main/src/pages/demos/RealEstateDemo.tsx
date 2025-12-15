import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, MapPin, Bed, Bath, Square, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const RealEstateDemo = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const properties = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      titleKey: "demos.realEstate.property1.title",
      locationKey: "demos.realEstate.property1.location",
      price: "€650,000",
      beds: 4,
      baths: 3,
      sqm: 250
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      titleKey: "demos.realEstate.property2.title",
      locationKey: "demos.realEstate.property2.location",
      price: "€450,000",
      beds: 3,
      baths: 2,
      sqm: 180
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      titleKey: "demos.realEstate.property3.title",
      locationKey: "demos.realEstate.property3.location",
      price: "€380,000",
      beds: 3,
      baths: 2,
      sqm: 200
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
            <Home className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('demos.realEstate.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('demos.realEstate.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div key={index} className="bg-gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={t(property.titleKey)}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t(property.titleKey)}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{t(property.locationKey)}</span>
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    <span>{property.sqm}m²</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-border/30 pt-4">
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    {t('demos.realEstate.viewDetails')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RealEstateDemo;