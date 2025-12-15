import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SocialChannel {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const socialChannels: SocialChannel[] = [
  { id: "facebook", name: "Facebook", icon: "📘", color: "bg-blue-600" },
  { id: "instagram", name: "Instagram", icon: "📷", color: "bg-gradient-to-br from-purple-600 to-pink-500" },
  { id: "linkedin", name: "LinkedIn", icon: "💼", color: "bg-blue-700" },
  { id: "twitter", name: "X (Twitter)", icon: "🐦", color: "bg-black" },
  { id: "google", name: "Google Business", icon: "🔍", color: "bg-red-600" },
  { id: "pinterest", name: "Pinterest", icon: "📌", color: "bg-red-500" },
  { id: "tiktok", name: "TikTok", icon: "🎵", color: "bg-black" },
  { id: "youtube", name: "YouTube", icon: "▶️", color: "bg-red-600" },
];

const postFrequencies = [
  { value: 2, label: "calculator.postsPerMonth", basePrice: 99, count: 2 },
  { value: 4, label: "calculator.postsPerWeek", basePrice: 149, count: 1 },
  { value: 8, label: "calculator.postsPerWeek", basePrice: 249, count: 2 },
  { value: 12, label: "calculator.postsPerWeek", basePrice: 349, count: 3 },
  { value: 16, label: "calculator.postsPerWeek", basePrice: 449, count: 4 },
  { value: 20, label: "calculator.postsPerWeek", basePrice: 549, count: 5 },
];

const campaignBudgets = [
  { value: 0, label: "calculator.noCampaigns", price: 0 },
  { value: 100, label: "€100/maand", price: 100 },
  { value: 250, label: "€250/maand", price: 250 },
  { value: 500, label: "€500/maand", price: 500 },
  { value: 1000, label: "€1000/maand", price: 1000 },
];

export const PricingCalculator = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [postFrequency, setPostFrequency] = useState(postFrequencies[0]);
  const [campaignBudget, setCampaignBudget] = useState(campaignBudgets[0]);
  const [partnerCode, setPartnerCode] = useState("");

  const steps = [
    { number: 1, title: t("calculator.step1") },
    { number: 2, title: t("calculator.step2") },
    { number: 3, title: t("calculator.step3") },
    { number: 4, title: t("calculator.step4") },
  ];

  const toggleChannel = (channelId: string) => {
    setSelectedChannels((prev) =>
      prev.includes(channelId)
        ? prev.filter((id) => id !== channelId)
        : [...prev, channelId]
    );
  };

  const calculateTotal = () => {
    const channelCost = selectedChannels.length * 25;
    const frequencyCost = postFrequency.basePrice;
    const campaignCost = campaignBudget.price;
    return channelCost + frequencyCost + campaignCost;
  };

  const totalPrice = calculateTotal();

  return (
    <div className="bg-gradient-to-b from-background to-secondary/10 py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t("calculator.title")}
          </h2>
          <p className="text-xl text-primary/70 max-w-3xl mx-auto">
            {t("calculator.subtitle")}
          </p>
        </div>

        {/* Step Progress */}
        <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    currentStep >= step.number
                      ? "border-primary bg-primary text-primary-foreground shadow-glow"
                      : "border-primary/30 bg-background text-primary/50"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-xs font-semibold">Step</div>
                    <div className="text-2xl font-bold">{step.number}</div>
                  </div>
                </div>
                <p className="text-sm font-medium text-primary mt-2 text-center max-w-[100px]">
                  {step.title}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 h-1 mx-2 transition-all duration-300 ${
                    currentStep > step.number ? "bg-primary" : "bg-primary/30"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Selections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Social Media Channels */}
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {t("calculator.channels")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {socialChannels.map((channel) => (
                    <button
                      key={channel.id}
                      onClick={() => toggleChannel(channel.id)}
                      className={`relative p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                        selectedChannels.includes(channel.id)
                          ? "border-primary bg-primary/10 shadow-glow"
                          : "border-primary/30 bg-background"
                      }`}
                    >
                      {selectedChannels.includes(channel.id) && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                      <div className="text-4xl mb-2">{channel.icon}</div>
                      <div className="text-sm font-medium text-primary">
                        {channel.name}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Post Frequency */}
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {t("calculator.frequency")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {postFrequencies.map((frequency) => (
                    <button
                      key={frequency.value}
                      onClick={() => setPostFrequency(frequency)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                        postFrequency.value === frequency.value
                          ? "border-primary bg-primary/10 shadow-glow"
                          : "border-primary/30 bg-background"
                      }`}
                    >
                      <div className="text-3xl font-bold text-primary mb-1">
                        {frequency.count}
                      </div>
                      <div className="text-sm text-primary/70">
                        {frequency.count} {t(frequency.label)}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Campaign Budget */}
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {t("calculator.campaigns")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {campaignBudgets.map((budget) => (
                    <button
                      key={budget.value}
                      onClick={() => setCampaignBudget(budget)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                        campaignBudget.value === budget.value
                          ? "border-primary bg-primary/10 shadow-glow"
                          : "border-primary/30 bg-background"
                      }`}
                    >
                      <div className="text-lg font-bold text-primary">
                        {budget.value === 0 ? t(budget.label) : budget.label}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Price Summary */}
          <div className="lg:col-span-1">
            <Card className="border-primary sticky top-4 shadow-glow">
              <CardHeader>
                <CardTitle className="text-center text-primary">
                  {t("calculator.startAmount")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    €{totalPrice}
                  </div>
                  <div className="text-primary/70">{t("calculator.perMonth")}</div>
                  <div className="text-sm text-primary/50 mt-2">{t("calculator.exclVat")}</div>
                </div>

                <div className="space-y-3 pt-4 border-t border-primary/30">
                  <div className="flex justify-between text-sm">
                    <span className="text-primary/70">{t("calculator.socialChannels")}</span>
                    <span className="font-medium text-primary">
                      {selectedChannels.length} × €25
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary/70">{t("calculator.postFrequency")}</span>
                    <span className="font-medium text-primary">
                      €{postFrequency.basePrice}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary/70">{t("calculator.campaignBudget")}</span>
                    <span className="font-medium text-primary">
                      €{campaignBudget.price}
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground hover:text-black shadow-hero"
                  size="lg"
                  onClick={() => window.open('/appointment', '_blank')}
                >
                  {t("calculator.startNow")}
                </Button>

                <p className="text-xs text-center text-primary/60">
                  {t("calculator.pauseAnytime")}
                </p>

                {/* Partner Code */}
                <div className="pt-4 border-t border-primary/30">
                  <Label htmlFor="partner-code" className="text-primary/70 text-sm">
                    {t("calculator.partnerCode")}
                  </Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      id="partner-code"
                      value={partnerCode}
                      onChange={(e) => setPartnerCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1"
                    />
                    <Button variant="outline" size="sm">
                      {t("calculator.apply")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
