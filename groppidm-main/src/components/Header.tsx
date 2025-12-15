import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe, Monitor, ShoppingCart, Search, RefreshCw, MousePointer, Share2, Target, FileText, User, CheckCircle, Star, MessageSquare, Facebook, Linkedin, Twitter, Instagram, Youtube, Music, Stethoscope, Wrench, TrendingUp, Megaphone, HardHat, Home, Package, Briefcase, Users, Plane } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useLanguage, SUPPORTED_LANGUAGES } from "@/contexts/LanguageContext";
import groppiLogo from "@/assets/groppi-logo-new.png";
import groppiLogoCircle from "@/assets/groppi-logo-circle.png";
import groppiTextLogo from "@/assets/groppi-text-logo.jpg";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const serviceCategories = [
    {
      title: t('header.categories.beingOnline'),
      items: [
        { name: t('header.services.corporateIdentity'), slug: "corporate-identity", icon: User, description: t('header.services.corporateIdentityDesc') },
        { name: t('header.services.website'), slug: "website", icon: Monitor, description: t('header.services.websiteDesc') },
        { name: t('header.services.webshop'), slug: "webshop", icon: ShoppingCart, description: t('header.services.webshopDesc') },
        { name: t('header.services.webcheck'), slug: "webcheck", icon: CheckCircle, description: t('header.services.webcheckDesc') },
        { name: t('header.services.socialPostPro'), slug: "social-post-pro", icon: Share2, description: t('header.services.socialPostProDesc') },
        { name: t('header.services.netsync'), slug: "netsync", icon: RefreshCw, description: t('header.services.netsyncDesc') },
        { name: t('header.services.site'), slug: "site", icon: Monitor, description: t('header.services.siteDesc') }
      ]
    },
    {
      title: t('header.categories.toBeFound'), 
      items: [
        { name: t('header.services.seo'), slug: "seo", icon: Search, description: t('header.services.seoDesc') },
        { name: t('header.services.sea'), slug: "sea", icon: MousePointer, description: t('header.services.seaDesc') },
        { name: t('header.services.goudengids'), slug: "goudengids", icon: FileText, description: t('header.services.goudengidsDesc') },
        { name: t('header.services.netsyncFound'), slug: "netsync-found", icon: RefreshCw, description: t('header.services.netsyncFoundDesc') }
      ]
    },
    {
      title: t('header.categories.toStandOut'),
      items: [
        { name: t('header.services.advertisingGoudengids'), slug: "advertising-goudengids", icon: Target, description: t('header.services.advertisingGoudengidsDesc') },
        { name: t('header.services.socialMediaAds'), slug: "social-media-ads", icon: Share2, description: t('header.services.socialMediaAdsDesc') },
        { name: t('header.services.omniAdvertising'), slug: "omni-advertising", icon: Target, description: t('header.services.omniAdvertisingDesc') },
        { name: t('header.services.omniCustomization'), slug: "omni-customization", icon: Star, description: t('header.services.omniCustomizationDesc') }
      ]
    },
    {
      title: t('header.categories.satisfiedCustomers'),
      items: [
        { name: t('header.services.customerSite'), slug: "customer-site", icon: Monitor, description: t('header.services.customerSiteDesc') },
        { name: t('header.services.reviewCards'), slug: "review-cards", icon: MessageSquare, description: t('header.services.reviewCardsDesc') }
      ]
    }
  ];

  const industries = [
    { name: t('industries.medical'), slug: "medical", icon: Stethoscope, color: "hsl(var(--industry-medical))" },
    { name: t('industries.engineering'), slug: "engineering", icon: Wrench, color: "hsl(var(--industry-engineering))" },
    { name: t('industries.sales'), slug: "sales", icon: TrendingUp, color: "hsl(var(--industry-sales))" },
    { name: t('industries.marketing'), slug: "marketing", icon: Megaphone, color: "hsl(var(--industry-marketing))" },
    { name: t('industries.construction'), slug: "construction", icon: HardHat, color: "hsl(var(--industry-construction))" },
    { name: t('industries.realEstate'), slug: "real-estate", icon: Home, color: "hsl(var(--industry-real-estate))" },
    { name: t('industries.ecommerce'), slug: "ecommerce", icon: Package, color: "hsl(var(--industry-ecommerce))" },
    { name: t('industries.business'), slug: "business", icon: Briefcase, color: "hsl(var(--industry-business))" },
    { name: t('industries.serviceIndustry'), slug: "service-industry", icon: Users, color: "hsl(var(--industry-service))" },
    { name: t('industries.exportBusiness'), slug: "export-business", icon: Plane, color: "hsl(var(--industry-export))" }
  ];

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b border-primary/30 shadow-lg shadow-primary/10">
      {/* Row 1: Company Name with Social Media, My Media, Contact, Language */}
      <div className="border-b border-primary/20">
        <div className="container flex h-14 items-center justify-between px-4">
          {/* Company Name */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <img 
              src={groppiLogoCircle} 
              alt="GROPPI Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain group-hover:scale-105 transition-all duration-300"
            />
            <div className="flex flex-col justify-center">
              <img 
                src={groppiTextLogo} 
                alt="GROPPI" 
                className="h-8 md:h-10 w-full object-contain mt-1"
              />
              <span className="text-[10px] md:text-xs text-primary/70 mt-0 whitespace-nowrap">Digital Marketing Bureau</span>
            </div>
          </Link>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Media Icons with Brand Colors - Before Language Selector */}
            <div className="flex items-center gap-1 pr-3 border-r border-primary/30">
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-light gap-1 text-sm">
                  <Globe className="h-4 w-4" />
                  {language}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border border-primary/40 shadow-lg z-[100]">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className="cursor-pointer hover:bg-primary text-primary hover:text-black transition-colors"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-primary hover:text-primary-light text-sm"
              asChild
            >
              <Link to="/my-media">{t('nav.myMedia')}</Link>
            </Button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/30"
              asChild
            >
              <Link to="/contact">{t('nav.contact')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Row 2: Main Navigation Menu */}
      <div className="hidden md:block relative">
        {/* Decorative 45-degree diagonal line from bottom left */}
        <div className="absolute left-0 bottom-0 w-32 h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[200%] h-[2px] bg-gradient-to-r from-primary via-primary-light to-transparent rotate-45 origin-bottom-left shadow-glow"></div>
        </div>
        
        
        <div className="container px-4 relative z-10">
          <nav className="flex items-center justify-center space-x-8 h-14">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-base font-semibold text-primary hover:text-primary-light transition-colors gap-1">
                  {t('nav.services')}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[800px] bg-card border border-primary/40 shadow-lg p-6 z-[100]">
                <div className="grid grid-cols-4 gap-6">
                  {serviceCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-3">
                      <DropdownMenuLabel className="text-primary font-bold text-xs uppercase tracking-wide">
                        {category.title}
                      </DropdownMenuLabel>
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <Link to={`/service/${item.slug}`} key={itemIndex}>
                            <DropdownMenuItem 
                              className="cursor-pointer hover:bg-primary p-3 rounded-lg transition-colors group"
                            >
                              <div className="flex items-start gap-3">
                                <item.icon className="h-5 w-5 text-primary group-hover:text-black mt-0.5 flex-shrink-0 transition-colors" />
                                <div className="space-y-1">
                                  <div className="font-medium text-sm text-primary group-hover:text-black transition-colors">{item.name}</div>
                                  <div className="text-xs text-primary/70 group-hover:text-black/80 transition-colors">{item.description}</div>
                                </div>
                              </div>
                            </DropdownMenuItem>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/prices" className="text-base font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.prices')}
            </Link>
            <Link to="/blog" className="text-base font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.blog')}
            </Link>
            <Link to="/about" className="text-base font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.aboutUs')}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-base font-semibold text-primary hover:text-primary-light transition-colors gap-1">
                  {t('nav.industrySupport')}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[300px] bg-card border border-primary/40 shadow-lg p-4 z-[100]">
                <div className="space-y-2">
                  {industries.map((industry, index) => (
                    <Link to={`/industry/${industry.slug}`} key={index}>
                      <DropdownMenuItem 
                        className="cursor-pointer hover:bg-primary p-3 rounded-lg transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <industry.icon className="h-5 w-5 flex-shrink-0 text-primary group-hover:text-black transition-colors" />
                          <div className="font-medium text-sm text-primary group-hover:text-black transition-colors">{industry.name}</div>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/franchise" className="text-base font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.franchise')}
            </Link>
            <Link to="/jobs" className="text-base font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.jobs')}
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-primary/30 bg-background">
          <div className="container px-4 py-4 space-y-3">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2 pb-3 border-b border-primary/20">
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
            
            <a href="#services" className="block text-sm font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.services')}
            </a>
            <Link to="/prices" className="block text-sm font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.prices')}
            </Link>
            <Link to="/blog" className="block text-sm font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.blog')}
            </Link>
            <Link to="/about" className="block text-sm font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.aboutUs')}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="justify-start text-primary gap-2 w-full">
                  {t('nav.industrySupport')}
                  <ChevronDown className="h-3 w-3 ml-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[280px] bg-popover border border-primary/40 shadow-md z-[100]">
                <div className="space-y-1">
                  {industries.map((industry, index) => (
                    <Link to={`/industry/${industry.slug}`} key={index}>
                      <DropdownMenuItem className="cursor-pointer hover:bg-primary/20 transition-colors">
                        <industry.icon className="h-4 w-4 mr-2" style={{ color: industry.color }} />
                        <span style={{ color: industry.color }}>{industry.name}</span>
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/franchise" className="block text-sm font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.franchise')}
            </Link>
            <Link to="/jobs" className="block text-sm font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.jobs')}
            </Link>
            <div className="flex flex-col gap-2 pt-3 border-t border-primary/20">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="justify-start text-primary gap-2">
                    <Globe className="h-4 w-4" />
                    {language}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-popover border border-primary/40 shadow-md z-[100]">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className="cursor-pointer hover:bg-primary/20 text-primary hover:text-primary-light transition-colors"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start text-primary"
                asChild
              >
                <Link to="/my-media">{t('nav.myMedia')}</Link>
              </Button>
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-lg shadow-primary/30"
                asChild
              >
                <Link to="/contact">{t('nav.contact')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};