import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Search, CheckCircle, AlertCircle, TrendingUp, Smartphone, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface AnalysisResult {
  scores: {
    seo: number;
    design: number;
    performance: number;
    mobile: number;
    content: number;
  };
  strengths: string[];
  improvements: string[];
  recommendations: string[];
  summary: string;
}

const SiteScanPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast({
        title: t('siteScan.error'),
        description: t('siteScan.enterUrl'),
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setAnalysis(null);

    try {
      const { data, error } = await supabase.functions.invoke('site-analysis', {
        body: { url }
      });

      if (error) throw error;

      if (data.error) {
        toast({
          title: t('siteScan.error'),
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      setAnalysis(data.analysis);
      toast({
        title: t('siteScan.success'),
        description: t('siteScan.analysisComplete'),
      });
    } catch (error) {
      console.error('Scan error:', error);
      toast({
        title: t('siteScan.error'),
        description: t('siteScan.analysisFailed'),
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Search className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('siteScan.title')}
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {t('siteScan.description')}
          </p>
        </div>

        {/* Scan Form */}
        <Card className="max-w-3xl mx-auto p-8 mb-12">
          <form onSubmit={handleScan} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t('siteScan.websiteUrl')}
              </label>
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-lg"
                disabled={isAnalyzing}
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary hover:bg-primary-dark"
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>{t('siteScan.analyzing')}</>
              ) : (
                <><Search className="mr-2 h-5 w-5" /> {t('siteScan.scanButton')}</>
              )}
            </Button>
          </form>
        </Card>

        {/* Analysis Results */}
        {analysis && (
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Scores Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { key: 'seo', icon: TrendingUp, label: t('siteScan.seoScore') },
                { key: 'design', icon: FileText, label: t('siteScan.designScore') },
                { key: 'performance', icon: TrendingUp, label: t('siteScan.performanceScore') },
                { key: 'mobile', icon: Smartphone, label: t('siteScan.mobileScore') },
                { key: 'content', icon: FileText, label: t('siteScan.contentScore') }
              ].map(({ key, icon: Icon, label }) => {
                const score = analysis.scores[key as keyof typeof analysis.scores];
                return (
                  <Card key={key} className="p-6 text-center">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="text-sm font-medium text-foreground/70 mb-2">{label}</h3>
                    <div className={`text-4xl font-bold ${getScoreColor(score)} mb-2`}>
                      {score}
                    </div>
                    <Progress value={score} className="h-2" />
                  </Card>
                );
              })}
            </div>

            {/* Strengths */}
            <Card className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h2 className="text-2xl font-bold text-foreground">{t('siteScan.strengths')}</h2>
              </div>
              <ul className="space-y-2">
                {analysis.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-green-500 mt-1">✓</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Improvements */}
            <Card className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-6 w-6 text-yellow-500" />
                <h2 className="text-2xl font-bold text-foreground">{t('siteScan.improvements')}</h2>
              </div>
              <ul className="space-y-2">
                {analysis.improvements.map((improvement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-yellow-500 mt-1">!</span>
                    {improvement}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Recommendations */}
            <Card className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">{t('siteScan.recommendations')}</h2>
              </div>
              <ul className="space-y-2">
                {analysis.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">→</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </Card>

            {/* CTA */}
            <Card className="p-8 text-center bg-gradient-primary">
              <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                {t('siteScan.ctaTitle')}
              </h2>
              <p className="text-primary-foreground/90 mb-6">
                {t('siteScan.ctaDescription')}
              </p>
              <Button 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 hover:text-black"
                onClick={() => window.location.href = '/appointment'}
              >
                {t('siteScan.ctaButton')}
              </Button>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SiteScanPage;
