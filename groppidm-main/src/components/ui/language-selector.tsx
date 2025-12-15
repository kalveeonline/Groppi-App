import { Button } from "@/components/ui/button";
import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, SUPPORTED_LANGUAGES } from "@/contexts/LanguageContext";

interface LanguageSelectorProps {
  variant?: "default" | "compact" | "outline";
  className?: string;
}

export const LanguageSelector = ({ variant = "default", className = "" }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage();

  const getButtonVariant = () => {
    switch (variant) {
      case "compact":
        return "ghost";
      case "outline":
        return "outline";
      default:
        return "ghost";
    }
  };

  const getButtonSize = () => {
    return variant === "compact" ? "sm" : "default";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={getButtonVariant()} 
          size={getButtonSize()} 
          className={`gap-2 ${className}`}
        >
          <Globe className="h-4 w-4" />
          {variant === "compact" ? language : `${language}`}
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
  );
};