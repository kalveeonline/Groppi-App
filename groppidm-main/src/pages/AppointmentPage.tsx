
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar, User, MapPin, Phone, MessageSquare, Clock, Mail, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  address: z.string().trim().max(500, "Address must be less than 500 characters").optional(),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters").regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, "Invalid phone number format"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters").optional().or(z.literal('')),
  requirement: z.string().trim().min(1, "Requirement is required").max(1000, "Requirement must be less than 1000 characters"),
  contactTime: z.string().optional()
});

export const AppointmentPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    requirement: '',
    contactTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data with zod
    try {
      const validatedData = appointmentSchema.parse(formData);
      
      // Here you would typically send the validated data to your backend
      toast({
        title: t('appointment.success'),
        description: t('appointment.successMessage'),
      });
      
      // Reset form
      setFormData({
        name: '',
        address: '',
        phone: '',
        email: '',
        requirement: '',
        contactTime: ''
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = (error as any).errors[0];
        toast({
          title: t('appointment.error'),
          description: firstError.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: t('appointment.error'),
          description: t('appointment.errorMessage'),
          variant: "destructive",
        });
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <div className="container px-4 mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-hero">
              <Calendar className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {t('appointment.title')}
            </h1>
            <p className="text-xl text-primary/70 leading-relaxed">
              {t('appointment.description')}
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="container px-4 mb-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-primary/30 text-center hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{t('appointment.freeConsultation')}</h3>
                <p className="text-primary/70 text-sm">{t('appointment.freeConsultationDesc')}</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/30 text-center hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{t('appointment.quickResponse')}</h3>
                <p className="text-primary/70 text-sm">{t('appointment.quickResponseDesc')}</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/30 text-center hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{t('appointment.personalizedStrategy')}</h3>
                <p className="text-primary/70 text-sm">{t('appointment.personalizedStrategyDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">

          {/* Appointment Form */}
          <Card className="shadow-elegant border-primary/30 bg-card hover:border-primary transition-all duration-300">
            <CardHeader className="border-b border-primary/20">
              <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                <MessageSquare className="w-6 h-6 text-primary" />
                {t('appointment.formTitle')}
              </CardTitle>
              <CardDescription className="text-primary/60">
                {t('appointment.formDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-primary">
                    <User className="w-4 h-4 text-primary" />
                    {t('appointment.name')}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder={t('appointment.namePlaceholder')}
                    className="bg-input border-primary/30 text-primary focus:border-primary"
                    required
                  />
                </div>

                {/* Address Field */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2 text-primary">
                    <MapPin className="w-4 h-4 text-primary" />
                    {t('appointment.address')}
                  </Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder={t('appointment.addressPlaceholder')}
                    className="bg-input border-primary/30 text-primary focus:border-primary"
                    rows={3}
                  />
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-primary">
                      <Phone className="w-4 h-4 text-primary" />
                      {t('appointment.phone')}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={t('appointment.phonePlaceholder')}
                      className="bg-input border-primary/30 text-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-primary">
                      <Mail className="w-4 h-4 text-primary" />
                      {t('appointment.email')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={t('appointment.emailPlaceholder')}
                      className="bg-input border-primary/30 text-primary focus:border-primary"
                    />
                  </div>
                </div>

                {/* Requirement Field */}
                <div className="space-y-2">
                  <Label htmlFor="requirement" className="flex items-center gap-2 text-primary">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    {t('appointment.requirement')}
                  </Label>
                  <Textarea
                    id="requirement"
                    value={formData.requirement}
                    onChange={(e) => handleInputChange('requirement', e.target.value)}
                    placeholder={t('appointment.requirementPlaceholder')}
                    className="bg-input border-primary/30 text-primary focus:border-primary"
                    rows={4}
                    required
                  />
                </div>

                {/* Contact Time */}
                <div className="space-y-2">
                  <Label htmlFor="contactTime" className="flex items-center gap-2 text-primary">
                    <Clock className="w-4 h-4 text-primary" />
                    {t('appointment.contactTime')}
                  </Label>
                  <Select value={formData.contactTime} onValueChange={(value) => handleInputChange('contactTime', value)}>
                    <SelectTrigger className="bg-input border-primary/30 text-primary focus:border-primary">
                      <SelectValue placeholder={t('appointment.contactTimePlaceholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-primary/30">
                      <SelectItem value="morning">{t('appointment.morning')}</SelectItem>
                      <SelectItem value="afternoon">{t('appointment.afternoon')}</SelectItem>
                      <SelectItem value="evening">{t('appointment.evening')}</SelectItem>
                      <SelectItem value="anytime">{t('appointment.anytime')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-hero text-primary-foreground shadow-elegant transition-all duration-300 hover:scale-105 font-semibold"
                  size="lg"
                >
                  {t('appointment.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-12">
            <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {t('appointment.preferDirect')}
                  </h3>
                  <p className="text-primary/70 mb-6 max-w-xl mx-auto">
                    {t('appointment.contactInfo')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.open('https://wa.me/32494311119', '_blank')}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      {t('appointment.whatsapp')}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.location.href = 'tel:+32494311119'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {t('appointment.call')}
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-primary/20">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-primary/70">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>+32 494 31 11 19</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>info@groppi.be</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Het Steeke 5A, 2330 Merksplas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
