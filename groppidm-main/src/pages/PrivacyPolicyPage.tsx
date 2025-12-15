import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield } from "lucide-react";

export const PrivacyPolicyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-xl text-foreground/80">
              {t('privacy.lastUpdated')}: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.intro.title')}</h2>
              <p className="text-foreground/80">
                {t('privacy.intro.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.dataCollection.title')}</h2>
              <p className="text-foreground/80 mb-4">
                {t('privacy.dataCollection.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>{t('privacy.dataCollection.item1')}</li>
                <li>{t('privacy.dataCollection.item2')}</li>
                <li>{t('privacy.dataCollection.item3')}</li>
                <li>{t('privacy.dataCollection.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.dataUsage.title')}</h2>
              <p className="text-foreground/80 mb-4">
                {t('privacy.dataUsage.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>{t('privacy.dataUsage.item1')}</li>
                <li>{t('privacy.dataUsage.item2')}</li>
                <li>{t('privacy.dataUsage.item3')}</li>
                <li>{t('privacy.dataUsage.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.dataProtection.title')}</h2>
              <p className="text-foreground/80">
                {t('privacy.dataProtection.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.cookies.title')}</h2>
              <p className="text-foreground/80">
                {t('privacy.cookies.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.rights.title')}</h2>
              <p className="text-foreground/80 mb-4">
                {t('privacy.rights.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>{t('privacy.rights.item1')}</li>
                <li>{t('privacy.rights.item2')}</li>
                <li>{t('privacy.rights.item3')}</li>
                <li>{t('privacy.rights.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('privacy.contact.title')}</h2>
              <p className="text-foreground/80">
                {t('privacy.contact.content')}
              </p>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-foreground font-semibold">GROPPI Digital Marketing Bureau</p>
                <p className="text-foreground/80">Email: info@groppi.be</p>
                <p className="text-foreground/80">Tel: +32 (0) 49 43 1111 9</p>
                <p className="text-foreground/80">Het Steeke 5A, 2330 Merksplas, Belgium</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
