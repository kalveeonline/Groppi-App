import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import BrandingPage from "./pages/BrandingPage";
import SolidFoundationPage from "./pages/SolidFoundationPage";
import WebsiteDevelopmentPage from "./pages/WebsiteDevelopmentPage";
import WebshopCreationPage from "./pages/WebshopCreationPage";
import SeoOptimizationPage from "./pages/SeoOptimizationPage";
import DigitalAdvertisingPage from "./pages/DigitalAdvertisingPage";
import SocialMediaMarketingPage from "./pages/SocialMediaMarketingPage";
import { AppointmentPage } from "./pages/AppointmentPage";
import { PricesPage } from "./pages/PricesPage";
import { BlogPage } from "./pages/BlogPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { JobsPage } from "./pages/JobsPage";
import { FranchisePage } from "./pages/FranchisePage";
import { MyMediaPage } from "./pages/MyMediaPage";
import { ContactPage } from "./pages/ContactPage";
import SiteScanPage from "./pages/SiteScanPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import NotFound from "./pages/NotFound";
import AllServicesPage from "./pages/AllServicesPage";
import RealEstateDemo from "./pages/demos/RealEstateDemo";
import EcommerceDemo from "./pages/demos/EcommerceDemo";
import MedicalIndustryPage from "./pages/industries/MedicalIndustryPage";
import EngineeringIndustryPage from "./pages/industries/EngineeringIndustryPage";
import SalesIndustryPage from "./pages/industries/SalesIndustryPage";
import MarketingIndustryPage from "./pages/industries/MarketingIndustryPage";
import ConstructionIndustryPage from "./pages/industries/ConstructionIndustryPage";
import RealEstateIndustryPage from "./pages/industries/RealEstateIndustryPage";
import EcommerceIndustryPage from "./pages/industries/EcommerceIndustryPage";
import BusinessIndustryPage from "./pages/industries/BusinessIndustryPage";
import ServiceIndustryPage from "./pages/industries/ServiceIndustryPage";
import ExportBusinessIndustryPage from "./pages/industries/ExportBusinessIndustryPage";
import RestaurantDemo from "./pages/demos/RestaurantDemo";
import FitnessDemo from "./pages/demos/FitnessDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<AllServicesPage />} />
            <Route path="/service/:serviceSlug" element={<ServicePage />} />
            <Route path="/branding" element={<BrandingPage />} />
            <Route path="/solid-foundation" element={<SolidFoundationPage />} />
            <Route path="/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="/webshop-creation" element={<WebshopCreationPage />} />
            <Route path="/seo-optimization" element={<SeoOptimizationPage />} />
            <Route path="/digital-advertising" element={<DigitalAdvertisingPage />} />
            <Route path="/social-media-marketing" element={<SocialMediaMarketingPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/my-media" element={<MyMediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/site-scan" element={<SiteScanPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/demo/real-estate" element={<RealEstateDemo />} />
            <Route path="/demo/ecommerce" element={<EcommerceDemo />} />
            <Route path="/demo/restaurant" element={<RestaurantDemo />} />
            <Route path="/demo/fitness" element={<FitnessDemo />} />
            
            {/* Industry Pages */}
            <Route path="/industry/medical" element={<MedicalIndustryPage />} />
            <Route path="/industry/engineering" element={<EngineeringIndustryPage />} />
            <Route path="/industry/sales" element={<SalesIndustryPage />} />
            <Route path="/industry/marketing" element={<MarketingIndustryPage />} />
            <Route path="/industry/construction" element={<ConstructionIndustryPage />} />
            <Route path="/industry/real-estate" element={<RealEstateIndustryPage />} />
            <Route path="/industry/ecommerce" element={<EcommerceIndustryPage />} />
            <Route path="/industry/business" element={<BusinessIndustryPage />} />
            <Route path="/industry/service-industry" element={<ServiceIndustryPage />} />
            <Route path="/industry/export-business" element={<ExportBusinessIndustryPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;