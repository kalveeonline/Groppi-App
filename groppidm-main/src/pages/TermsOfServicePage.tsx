import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText } from "lucide-react";

export const TermsOfServicePage = () => {
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
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('terms.title')}
            </h1>
            <p className="text-xl text-foreground/80">
              {t('terms.lastUpdated')}: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('terms.intro.title')}</h2>
              <p className="text-foreground/80">
                {t('terms.intro.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('terms.services.title')}</h2>
              <p className="text-foreground/80 mb-4">
                {t('terms.services.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>{t('terms.services.item1')}</li>
                <li>{t('terms.services.item2')}</li>
                <li>{t('terms.services.item3')}</li>
                <li>{t('terms.services.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('terms.payment.title')}</h2>
              <p className="text-foreground/80 mb-4">
                {t('terms.payment.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>{t('terms.payment.item1')}</li>
                <li>{t('terms.payment.item2')}</li>
                <li>{t('terms.payment.item3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('terms.intellectual.title')}</h2>
              <p className="text-foreground/80">
                {t('terms.intellectual.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('terms.liability.title')}</h2>
              <p className="text-foreground/80">
                {t('terms.liability.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('terms.termination.title')}</h2>
              <p className="text-foreground/80 mb-4">
                {t('terms.termination.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>{t('terms.termination.item1')}</li>
                <li>{t('terms.termination.item2')}</li>
                <li>{t('terms.termination.item3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('terms.changes.title')}</h2>
              <p className="text-foreground/80">
                {t('terms.changes.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('terms.contact.title')}</h2>
              <p className="text-foreground/80">
                {t('terms.contact.content')}
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

export default TermsOfServicePage;
