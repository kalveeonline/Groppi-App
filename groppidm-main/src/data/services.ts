import { Monitor, ShoppingCart, Search, RefreshCw, MousePointer, Share2, Target, FileText, User, CheckCircle, Star, MessageSquare } from "lucide-react";

export interface ServiceItem {
  name: string;
  slug: string;
  icon: any;
  description: string;
  category: string;
  content: {
    NL: {
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      features: string[];
      process: string[];
    };
    EN: {
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      features: string[];
      process: string[];
    };
    FR: {
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      features: string[];
      process: string[];
    };
    [key: string]: {
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      features: string[];
      process: string[];
    };
  };
}

export const serviceCategories = [
  {
    title: "BEING ONLINE",
    items: [
      {
        name: "Your own corporate identity",
        slug: "corporate-identity",
        icon: User,
        description: "Stand out with a unique corporate identity",
        category: "being-online",
        content: {
          NL: {
            title: "Jouw Eigen Bedrijfsidentiteit",
            subtitle: "Val op met een unieke corporate identity",
            description: "Een sterke bedrijfsidentiteit is de basis van je merk. Wij helpen je een consistente en herkenbare uitstraling te creëren die jouw bedrijf onderscheidt van de concurrentie.",
            benefits: [
              "Professionele uitstraling die vertrouwen wekt",
              "Herkenbare branding over alle kanalen",
              "Consistente communicatie naar klanten",
              "Verhoogde merkwaarde en klantloyaliteit"
            ],
            features: [
              "Logo ontwerp en branding",
              "Huisstijl ontwikkeling",
              "Kleurpalet en typografie",
              "Merkrichtlijnen en brandbook"
            ],
            process: [
              "Intake gesprek en merkanalyse",
              "Conceptontwikkeling en schetsen",
              "Design uitwerking en feedback",
              "Finalisatie en leverling brandbook"
            ]
          },
          EN: {
            title: "Your Own Corporate Identity",
            subtitle: "Stand out with a unique corporate identity",
            description: "A strong corporate identity is the foundation of your brand. We help you create a consistent and recognizable image that sets your business apart from the competition.",
            benefits: [
              "Professional appearance that builds trust",
              "Recognizable branding across all channels",
              "Consistent communication to customers",
              "Increased brand value and customer loyalty"
            ],
            features: [
              "Logo design and branding",
              "Visual identity development",
              "Color palette and typography",
              "Brand guidelines and brandbook"
            ],
            process: [
              "Intake interview and brand analysis",
              "Concept development and sketches",
              "Design elaboration and feedback",
              "Finalization and brandbook delivery"
            ]
          },
          FR: {
            title: "Votre Propre Identité d'Entreprise",
            subtitle: "Démarquez-vous avec une identité corporate unique",
            description: "Une identité d'entreprise forte est la base de votre marque. Nous vous aidons à créer une image cohérente et reconnaissable qui distingue votre entreprise de la concurrence.",
            benefits: [
              "Apparence professionnelle qui inspire confiance",
              "Branding reconnaissable sur tous les canaux",
              "Communication cohérente vers les clients",
              "Valeur de marque et fidélité client accrues"
            ],
            features: [
              "Conception de logo et branding",
              "Développement d'identité visuelle",
              "Palette de couleurs et typographie",
              "Directives de marque et brandbook"
            ],
            process: [
              "Entretien d'admission et analyse de marque",
              "Développement de concept et esquisses",
              "Élaboration du design et feedback",
              "Finalisation et livraison du brandbook"
            ]
          },
          PL: {
            title: "Twoja Własna Tożsamość Korporacyjna",
            subtitle: "Wyróżnij się unikalną tożsamością korporacyjną",
            description: "Silna tożsamość korporacyjna jest fundamentem Twojej marki. Pomagamy stworzyć spójny i rozpoznawalny wizerunek, który wyróżni Twój biznes na tle konkurencji.",
            benefits: [
              "Profesjonalny wygląd budujący zaufanie",
              "Rozpoznawalny branding we wszystkich kanałach",
              "Spójna komunikacja z klientami",
              "Zwiększona wartość marki i lojalność klientów"
            ],
            features: [
              "Projektowanie logo i branding",
              "Rozwój tożsamości wizualnej",
              "Paleta kolorów i typografia",
              "Wytyczne marki i brandbook"
            ],
            process: [
              "Wywiad wstępny i analiza marki",
              "Rozwój koncepcji i szkice",
              "Opracowanie projektu i feedback",
              "Finalizacja i dostawa brandbooka"
            ]
          },
          RU: {
            title: "Ваш Собственный Корпоративный Стиль",
            subtitle: "Выделитесь уникальным корпоративным стилем",
            description: "Сильный корпоративный стиль - основа вашего бренда. Мы помогаем создать последовательный и узнаваемый образ, который выделит ваш бизнес среди конкурентов.",
            benefits: [
              "Профессиональный вид, вызывающий доверие",
              "Узнаваемый брендинг во всех каналах",
              "Последовательная коммуникация с клиентами",
              "Повышенная ценность бренда и лояльность клиентов"
            ],
            features: [
              "Дизайн логотипа и брендинг",
              "Разработка визуальной идентичности",
              "Цветовая палитра и типографика",
              "Руководство по бренду и брендбук"
            ],
            process: [
              "Вводное интервью и анализ бренда",
              "Разработка концепции и эскизы",
              "Проработка дизайна и обратная связь",
              "Финализация и доставка брендбука"
            ]
          },
          DE: {
            title: "Ihre Eigene Corporate Identity",
            subtitle: "Heben Sie sich mit einer einzigartigen Corporate Identity ab",
            description: "Eine starke Corporate Identity ist das Fundament Ihrer Marke. Wir helfen Ihnen, ein konsistentes und erkennbares Image zu schaffen, das Ihr Unternehmen von der Konkurrenz abhebt.",
            benefits: [
              "Professionelles Erscheinungsbild, das Vertrauen schafft",
              "Erkennbares Branding über alle Kanäle",
              "Konsistente Kommunikation mit Kunden",
              "Erhöhter Markenwert und Kundentreue"
            ],
            features: [
              "Logodesign und Branding",
              "Entwicklung der visuellen Identität",
              "Farbpalette und Typografie",
              "Markenrichtlinien und Brandbook"
            ],
            process: [
              "Aufnahmegespräch und Markenanalyse",
              "Konzeptentwicklung und Skizzen",
              "Designausarbeitung und Feedback",
              "Finalisierung und Brandbook-Lieferung"
            ]
          },
          ES: {
            title: "Tu Propia Identidad Corporativa",
            subtitle: "Destaca con una identidad corporativa única",
            description: "Una identidad corporativa fuerte es la base de tu marca. Te ayudamos a crear una imagen consistente y reconocible que distinga tu negocio de la competencia.",
            benefits: [
              "Apariencia profesional que genera confianza",
              "Branding reconocible en todos los canales",
              "Comunicación consistente con los clientes",
              "Mayor valor de marca y lealtad del cliente"
            ],
            features: [
              "Diseño de logo y branding",
              "Desarrollo de identidad visual",
              "Paleta de colores y tipografía",
              "Directrices de marca y brandbook"
            ],
            process: [
              "Entrevista inicial y análisis de marca",
              "Desarrollo de concepto y bocetos",
              "Elaboración del diseño y feedback",
              "Finalización y entrega del brandbook"
            ]
          },
          IT: {
            title: "La Tua Identità Aziendale",
            subtitle: "Distinguiti con un'identità aziendale unica",
            description: "Una forte identità aziendale è la base del tuo brand. Ti aiutiamo a creare un'immagine coerente e riconoscibile che distingue la tua azienda dalla concorrenza.",
            benefits: [
              "Aspetto professionale che genera fiducia",
              "Branding riconoscibile su tutti i canali",
              "Comunicazione coerente con i clienti",
              "Maggiore valore del brand e fedeltà dei clienti"
            ],
            features: [
              "Design del logo e branding",
              "Sviluppo dell'identità visiva",
              "Palette colori e tipografia",
              "Linee guida del brand e brandbook"
            ],
            process: [
              "Colloquio iniziale e analisi del brand",
              "Sviluppo del concept e bozze",
              "Elaborazione del design e feedback",
              "Finalizzazione e consegna del brandbook"
            ]
          },
          UK: {
            title: "Ваш Власний Корпоративний Стиль",
            subtitle: "Виділіться унікальним корпоративним стилем",
            description: "Сильний корпоративний стиль - основа вашого бренду. Ми допомагаємо створити послідовний і впізнаваний образ, який виділить ваш бізнес серед конкурентів.",
            benefits: [
              "Професійний вигляд, що викликає довіру",
              "Впізнаваний брендинг у всіх каналах",
              "Послідовна комунікація з клієнтами",
              "Підвищена цінність бренду та лояльність клієнтів"
            ],
            features: [
              "Дизайн логотипу та брендинг",
              "Розробка візуальної ідентичності",
              "Кольорова палітра та типографіка",
              "Керівництво по бренду та брендбук"
            ],
            process: [
              "Вступне інтерв'ю та аналіз бренду",
              "Розробка концепції та ескізи",
              "Опрацювання дизайну та зворотний зв'язок",
              "Фіналізація та доставка брендбука"
            ]
          },
          TR: {
            title: "Kendi Kurumsal Kimliğiniz",
            subtitle: "Benzersiz bir kurumsal kimlikle öne çıkın",
            description: "Güçlü bir kurumsal kimlik, markanızın temelidir. İşletmenizi rekabetten ayıran tutarlı ve tanınabilir bir imaj oluşturmanıza yardımcı oluyoruz.",
            benefits: [
              "Güven oluşturan profesyonel görünüm",
              "Tüm kanallarda tanınabilir marka",
              "Müşterilerle tutarlı iletişim",
              "Artan marka değeri ve müşteri sadakati"
            ],
            features: [
              "Logo tasarımı ve marka oluşturma",
              "Görsel kimlik geliştirme",
              "Renk paleti ve tipografi",
              "Marka yönergeleri ve brandbook"
            ],
            process: [
              "Giriş görüşmesi ve marka analizi",
              "Konsept geliştirme ve eskizler",
              "Tasarım detaylandırma ve geri bildirim",
              "Sonlandırma ve brandbook teslimi"
            ]
          },
          SV: {
            title: "Din Egen Företagsidentitet",
            subtitle: "Sticka ut med en unik företagsidentitet",
            description: "En stark företagsidentitet är grunden för ditt varumärke. Vi hjälper dig att skapa en konsekvent och igenkännbar image som skiljer ditt företag från konkurrenterna.",
            benefits: [
              "Professionellt utseende som bygger förtroende",
              "Igenkännbar varumärkesprofilering över alla kanaler",
              "Konsekvent kommunikation med kunder",
              "Ökat varumärkesvärde och kundlojalitet"
            ],
            features: [
              "Logotypdesign och varumärkesprofilering",
              "Utveckling av visuell identitet",
              "Färgpalett och typografi",
              "Varumärkesriktlinjer och brandbook"
            ],
            process: [
              "Inledande intervju och varumärkesanalys",
              "Konceptutveckling och skisser",
              "Designutarbetning och feedback",
              "Slutförande och brandbook-leverans"
            ]
          },
          ZH: {
            title: "您的企业形象",
            subtitle: "以独特的企业形象脱颖而出",
            description: "强大的企业形象是您品牌的基础。我们帮助您创建一致且易于识别的形象，使您的企业在竞争中脱颖而出。",
            benefits: [
              "建立信任的专业外观",
              "在所有渠道上可识别的品牌",
              "与客户的一致沟通",
              "提升品牌价值和客户忠诚度"
            ],
            features: [
              "标志设计和品牌建设",
              "视觉识别开发",
              "调色板和排版",
              "品牌指南和品牌手册"
            ],
            process: [
              "初始访谈和品牌分析",
              "概念开发和草图",
              "设计细化和反馈",
              "最终确定和品牌手册交付"
            ]
          },
          FI: {
            title: "Oma Yritysilmeesi",
            subtitle: "Erotu ainutlaatuisella yritysilmeellä",
            description: "Vahva yritysilme on brändisi perusta. Autamme sinua luomaan johdonmukaisen ja tunnistettavan kuvan, joka erottaa yrityksesi kilpailijoista.",
            benefits: [
              "Luottamusta herättävä ammattimainen ulkoasu",
              "Tunnistettava brändi kaikissa kanavissa",
              "Johdonmukainen viestintä asiakkaille",
              "Kasvanut brändin arvo ja asiakasuskollisuus"
            ],
            features: [
              "Logosuunnittelu ja brändäys",
              "Visuaalisen identiteetin kehittäminen",
              "Väripaletti ja typografia",
              "Brändiohjeet ja brandbook"
            ],
            process: [
              "Aloitushaastattelu ja brändianalyysi",
              "Konseptin kehittäminen ja luonnokset",
              "Suunnittelun viimeistely ja palaute",
              "Viimeistely ja brandbookin toimitus"
            ]
          },
          AR: {
            title: "هويتك المؤسسية الخاصة",
            subtitle: "تميز بهوية مؤسسية فريدة",
            description: "الهوية المؤسسية القوية هي أساس علامتك التجارية. نساعدك في إنشاء صورة متسقة ومميزة تميز عملك عن المنافسين.",
            benefits: [
              "مظهر احترافي يبني الثقة",
              "علامة تجارية معروفة عبر جميع القنوات",
              "تواصل متسق مع العملاء",
              "زيادة قيمة العلامة التجارية وولاء العملاء"
            ],
            features: [
              "تصميم الشعار والعلامة التجارية",
              "تطوير الهوية البصرية",
              "لوحة الألوان والطباعة",
              "إرشادات العلامة التجارية وكتاب العلامة التجارية"
            ],
            process: [
              "مقابلة أولية وتحليل العلامة التجارية",
              "تطوير المفهوم والرسومات",
              "تفصيل التصميم والملاحظات",
              "الإنهاء وتسليم كتاب العلامة التجارية"
            ]
          },
          DA: {
            title: "Din Egen Virksomhedsidentitet",
            subtitle: "Skil dig ud med en unik virksomhedsidentitet",
            description: "En stærk virksomhedsidentitet er fundamentet for dit brand. Vi hjælper dig med at skabe et konsistent og genkendeligt image, der adskiller din virksomhed fra konkurrenterne.",
            benefits: [
              "Professionelt udseende der skaber tillid",
              "Genkendelig branding på tværs af alle kanaler",
              "Konsistent kommunikation med kunder",
              "Øget brandværdi og kundeloyalitet"
            ],
            features: [
              "Logodesign og branding",
              "Udvikling af visuel identitet",
              "Farvepalet og typografi",
              "Brandretningslinjer og brandbook"
            ],
            process: [
              "Indledende interview og brandanalyse",
              "Konceptudvikling og skitser",
              "Designudarbejdelse og feedback",
              "Færdiggørelse og brandbook-levering"
            ]
          },
          NO: {
            title: "Din Egen Bedriftsidentitet",
            subtitle: "Skill deg ut med en unik bedriftsidentitet",
            description: "En sterk bedriftsidentitet er grunnlaget for merkevaren din. Vi hjelper deg med å skape et konsistent og gjenkjennelig image som skiller bedriften din fra konkurrentene.",
            benefits: [
              "Profesjonelt utseende som bygger tillit",
              "Gjenkjennelig merkevarebygging på tvers av alle kanaler",
              "Konsistent kommunikasjon med kunder",
              "Økt merkeverdi og kundelojalitet"
            ],
            features: [
              "Logodesign og merkevarebygging",
              "Utvikling av visuell identitet",
              "Fargepalett og typografi",
              "Merkevareretningslinjer og brandbook"
            ],
            process: [
              "Innledende intervju og merkevareanalyse",
              "Konseptutvikling og skisser",
              "Designutarbeidelse og tilbakemelding",
              "Ferdigstillelse og brandbook-levering"
            ]
          }
        }
      },
      {
        name: "Website",
        slug: "website",
        icon: Monitor,
        description: "The online center of your business",
        category: "being-online",
        content: {
          NL: {
            title: "Professionele Website",
            subtitle: "Het online centrum van je bedrijf",
            description: "Een professionele website is essentieel in de digitale wereld van vandaag. Wij ontwerpen en ontwikkelen websites die niet alleen mooi zijn, maar ook optimaal presteren en converteren.",
            benefits: [
              "24/7 online aanwezigheid voor je bedrijf",
              "Verhoogde geloofwaardigheid en professionaliteit",
              "Betere vindbaarheid in zoekmachines",
              "Meer leads en conversies"
            ],
            features: [
              "Responsive design voor alle apparaten",
              "SEO-geoptimaliseerde content",
              "Snelle laadtijden en veiligheid",
              "Content Management System (CMS)"
            ],
            process: [
              "Strategische planning en wireframing",
              "Visueel ontwerp en user experience",
              "Ontwikkeling en content creatie",
              "Testing, lancering en onderhoud"
            ]
          },
          FR: {
            title: "Site Web Professionnel",
            subtitle: "Le centre en ligne de votre entreprise",
            description: "Un site web professionnel est essentiel dans le monde numérique d'aujourd'hui. Nous concevons et développons des sites web qui sont non seulement beaux, mais qui performent et convertissent de manière optimale.",
            benefits: [
              "Présence en ligne 24/7 pour votre entreprise",
              "Crédibilité et professionnalisme accrus",
              "Meilleure visibilité dans les moteurs de recherche",
              "Plus de leads et de conversions"
            ],
            features: [
              "Design responsive pour tous les appareils",
              "Contenu optimisé pour le SEO",
              "Temps de chargement rapides et sécurité",
              "Système de gestion de contenu (CMS)"
            ],
            process: [
              "Planification stratégique et wireframing",
              "Conception visuelle et expérience utilisateur",
              "Développement et création de contenu",
              "Tests, lancement et maintenance"
            ]
          },
          EN: {
            title: "Professional Website",
            subtitle: "The online center of your business",
            description: "A professional website is essential in today's digital world. We design and develop websites that are not only beautiful, but also perform optimally and convert effectively.",
            benefits: [
              "24/7 online presence for your business",
              "Increased credibility and professionalism",
              "Better visibility in search engines",
              "More leads and conversions"
            ],
            features: [
              "Responsive design for all devices",
              "SEO-optimized content",
              "Fast loading times and security",
              "Content Management System (CMS)"
            ],
            process: [
              "Strategic planning and wireframing",
              "Visual design and user experience",
              "Development and content creation",
              "Testing, launch and maintenance"
            ]
          },
          PL: {
            title: "Profesjonalna Strona Internetowa",
            subtitle: "Centrum online Twojej firmy",
            description: "Profesjonalna strona internetowa jest niezbędna w dzisiejszym cyfrowym świecie. Projektujemy i rozwijamy strony, które są nie tylko piękne, ale także optymalnie działają i skutecznie konwertują.",
            benefits: [
              "Obecność online 24/7 dla Twojej firmy",
              "Zwiększona wiarygodność i profesjonalizm",
              "Lepsza widoczność w wyszukiwarkach",
              "Więcej leadów i konwersji"
            ],
            features: [
              "Responsywny design na wszystkie urządzenia",
              "Treści zoptymalizowane pod SEO",
              "Szybkie czasy ładowania i bezpieczeństwo",
              "System zarządzania treścią (CMS)"
            ],
            process: [
              "Strategiczne planowanie i wireframing",
              "Projekt wizualny i doświadczenie użytkownika",
              "Rozwój i tworzenie treści",
              "Testowanie, uruchomienie i utrzymanie"
            ]
          },
          RU: {
            title: "Профессиональный Веб-сайт",
            subtitle: "Онлайн-центр вашего бизнеса",
            description: "Профессиональный веб-сайт необходим в современном цифровом мире. Мы разрабатываем и создаем веб-сайты, которые не только красивы, но и оптимально работают и эффективно конвертируют.",
            benefits: [
              "Онлайн-присутствие 24/7 для вашего бизнеса",
              "Повышенная надежность и профессионализм",
              "Лучшая видимость в поисковых системах",
              "Больше лидов и конверсий"
            ],
            features: [
              "Адаптивный дизайн для всех устройств",
              "SEO-оптимизированный контент",
              "Быстрая загрузка и безопасность",
              "Система управления контентом (CMS)"
            ],
            process: [
              "Стратегическое планирование и wireframing",
              "Визуальный дизайн и пользовательский опыт",
              "Разработка и создание контента",
              "Тестирование, запуск и поддержка"
            ]
          },
          DE: {
            title: "Professionelle Website",
            subtitle: "Das Online-Zentrum Ihres Unternehmens",
            description: "Eine professionelle Website ist in der heutigen digitalen Welt unerlässlich. Wir entwerfen und entwickeln Websites, die nicht nur schön sind, sondern auch optimal funktionieren und effektiv konvertieren.",
            benefits: [
              "24/7 Online-Präsenz für Ihr Unternehmen",
              "Erhöhte Glaubwürdigkeit und Professionalität",
              "Bessere Sichtbarkeit in Suchmaschinen",
              "Mehr Leads und Konversionen"
            ],
            features: [
              "Responsives Design für alle Geräte",
              "SEO-optimierte Inhalte",
              "Schnelle Ladezeiten und Sicherheit",
              "Content-Management-System (CMS)"
            ],
            process: [
              "Strategische Planung und Wireframing",
              "Visuelles Design und Benutzererfahrung",
              "Entwicklung und Content-Erstellung",
              "Testing, Launch und Wartung"
            ]
          },
          ES: {
            title: "Sitio Web Profesional",
            subtitle: "El centro online de tu negocio",
            description: "Un sitio web profesional es esencial en el mundo digital de hoy. Diseñamos y desarrollamos sitios web que no solo son hermosos, sino que también funcionan de manera óptima y convierten efectivamente.",
            benefits: [
              "Presencia online 24/7 para tu negocio",
              "Mayor credibilidad y profesionalismo",
              "Mejor visibilidad en motores de búsqueda",
              "Más leads y conversiones"
            ],
            features: [
              "Diseño responsivo para todos los dispositivos",
              "Contenido optimizado para SEO",
              "Tiempos de carga rápidos y seguridad",
              "Sistema de gestión de contenido (CMS)"
            ],
            process: [
              "Planificación estratégica y wireframing",
              "Diseño visual y experiencia de usuario",
              "Desarrollo y creación de contenido",
              "Pruebas, lanzamiento y mantenimiento"
            ]
          },
          IT: {
            title: "Sito Web Professionale",
            subtitle: "Il centro online della tua attività",
            description: "Un sito web professionale è essenziale nel mondo digitale di oggi. Progettiamo e sviluppiamo siti web che non sono solo belli, ma funzionano in modo ottimale e convertono efficacemente.",
            benefits: [
              "Presenza online 24/7 per la tua attività",
              "Maggiore credibilità e professionalità",
              "Migliore visibilità nei motori di ricerca",
              "Più lead e conversioni"
            ],
            features: [
              "Design responsivo per tutti i dispositivi",
              "Contenuti ottimizzati per SEO",
              "Tempi di caricamento rapidi e sicurezza",
              "Sistema di gestione dei contenuti (CMS)"
            ],
            process: [
              "Pianificazione strategica e wireframing",
              "Design visivo ed esperienza utente",
              "Sviluppo e creazione di contenuti",
              "Test, lancio e manutenzione"
            ]
          },
          UK: {
            title: "Професійний Веб-сайт",
            subtitle: "Онлайн-центр вашого бізнесу",
            description: "Професійний веб-сайт необхідний у сучасному цифровому світі. Ми розробляємо та створюємо веб-сайти, які не тільки красиві, але й оптимально працюють та ефективно конвертують.",
            benefits: [
              "Онлайн-присутність 24/7 для вашого бізнесу",
              "Підвищена надійність та професіоналізм",
              "Краща видимість у пошукових системах",
              "Більше лідів та конверсій"
            ],
            features: [
              "Адаптивний дизайн для всіх пристроїв",
              "SEO-оптимізований контент",
              "Швидке завантаження та безпека",
              "Система управління контентом (CMS)"
            ],
            process: [
              "Стратегічне планування та wireframing",
              "Візуальний дизайн та користувацький досвід",
              "Розробка та створення контенту",
              "Тестування, запуск та підтримка"
            ]
          },
          TR: {
            title: "Profesyonel Web Sitesi",
            subtitle: "İşletmenizin online merkezi",
            description: "Profesyonel bir web sitesi günümüzün dijital dünyasında zorunludur. Sadece güzel değil, aynı zamanda optimal performans gösteren ve etkili bir şekilde dönüştüren web siteleri tasarlıyor ve geliştiriyoruz.",
            benefits: [
              "İşletmeniz için 7/24 online varlık",
              "Artan güvenilirlik ve profesyonellik",
              "Arama motorlarında daha iyi görünürlük",
              "Daha fazla potansiyel müşteri ve dönüşüm"
            ],
            features: [
              "Tüm cihazlar için duyarlı tasarım",
              "SEO optimize edilmiş içerik",
              "Hızlı yükleme süreleri ve güvenlik",
              "İçerik Yönetim Sistemi (CMS)"
            ],
            process: [
              "Stratejik planlama ve wireframing",
              "Görsel tasarım ve kullanıcı deneyimi",
              "Geliştirme ve içerik oluşturma",
              "Test, lansman ve bakım"
            ]
          },
          SV: {
            title: "Professionell Webbplats",
            subtitle: "Ditt företags online-centrum",
            description: "En professionell webbplats är nödvändig i dagens digitala värld. Vi designar och utvecklar webbplatser som inte bara är vackra, utan också presterar optimalt och konverterar effektivt.",
            benefits: [
              "Online-närvaro 24/7 för ditt företag",
              "Ökad trovärdighet och professionalism",
              "Bättre synlighet i sökmotorer",
              "Fler leads och konverteringar"
            ],
            features: [
              "Responsiv design för alla enheter",
              "SEO-optimerat innehåll",
              "Snabba laddtider och säkerhet",
              "Innehållshanteringssystem (CMS)"
            ],
            process: [
              "Strategisk planering och wireframing",
              "Visuell design och användarupplevelse",
              "Utveckling och innehållsskapande",
              "Testning, lansering och underhåll"
            ]
          },
          ZH: {
            title: "专业网站",
            subtitle: "您企业的在线中心",
            description: "在当今数字世界中，专业网站至关重要。我们设计和开发的网站不仅美观，而且性能优异，转化效果显著。",
            benefits: [
              "为您的企业提供24/7在线服务",
              "提高可信度和专业性",
              "在搜索引擎中获得更好的可见性",
              "更多潜在客户和转化"
            ],
            features: [
              "适用于所有设备的响应式设计",
              "SEO优化内容",
              "快速加载时间和安全性",
              "内容管理系统（CMS）"
            ],
            process: [
              "战略规划和线框图",
              "视觉设计和用户体验",
              "开发和内容创建",
              "测试、发布和维护"
            ]
          },
          FI: {
            title: "Ammattimainen Verkkosivusto",
            subtitle: "Yrityksesi online-keskus",
            description: "Ammattimainen verkkosivusto on välttämätön nykypäivän digitaalisessa maailmassa. Suunnittelemme ja kehitämme verkkosivustoja, jotka ovat paitsi kauniita, myös toimivat optimaalisesti ja konvertoivat tehokkaasti.",
            benefits: [
              "24/7 online-läsnäolo yrityksellesi",
              "Lisääntynyt uskottavuus ja ammattimaisuus",
              "Parempi näkyvyys hakukoneissa",
              "Enemmän liidejä ja konversioita"
            ],
            features: [
              "Responsiivinen design kaikille laitteille",
              "SEO-optimoitu sisältö",
              "Nopeat latausajat ja turvallisuus",
              "Sisällönhallintajärjestelmä (CMS)"
            ],
            process: [
              "Strateginen suunnittelu ja wireframing",
              "Visuaalinen suunnittelu ja käyttäjäkokemus",
              "Kehitys ja sisällöntuotanto",
              "Testaus, julkaisu ja ylläpito"
            ]
          },
          AR: {
            title: "موقع ويب احترافي",
            subtitle: "المركز الإلكتروني لعملك",
            description: "موقع الويب الاحترافي ضروري في عالم اليوم الرقمي. نحن نصمم ونطور مواقع ويب ليست جميلة فحسب، بل تعمل بشكل مثالي وتحول بفعالية.",
            benefits: [
              "تواجد إلكتروني على مدار الساعة لعملك",
              "زيادة المصداقية والاحترافية",
              "رؤية أفضل في محركات البحث",
              "المزيد من العملاء المحتملين والتحويلات"
            ],
            features: [
              "تصميم متجاوب لجميع الأجهزة",
              "محتوى محسّن لمحركات البحث",
              "أوقات تحميل سريعة وأمان",
              "نظام إدارة المحتوى (CMS)"
            ],
            process: [
              "التخطيط الاستراتيجي والرسم التخطيطي",
              "التصميم المرئي وتجربة المستخدم",
              "التطوير وإنشاء المحتوى",
              "الاختبار والإطلاق والصيانة"
            ]
          },
          DA: {
            title: "Professionel Hjemmeside",
            subtitle: "Din virksomheds online-centrum",
            description: "En professionel hjemmeside er essentiel i dagens digitale verden. Vi designer og udvikler hjemmesider, der ikke kun er smukke, men også yder optimalt og konverterer effektivt.",
            benefits: [
              "Online tilstedeværelse 24/7 for din virksomhed",
              "Øget troværdighed og professionalisme",
              "Bedre synlighed i søgemaskiner",
              "Flere leads og konverteringer"
            ],
            features: [
              "Responsivt design til alle enheder",
              "SEO-optimeret indhold",
              "Hurtige indlæsningstider og sikkerhed",
              "Indholdsstyringssystem (CMS)"
            ],
            process: [
              "Strategisk planlægning og wireframing",
              "Visuelt design og brugeroplevelse",
              "Udvikling og indholdsoprettelse",
              "Test, lancering og vedligeholdelse"
            ]
          },
          NO: {
            title: "Profesjonell Nettside",
            subtitle: "Bedriftens online-senter",
            description: "En profesjonell nettside er essensiell i dagens digitale verden. Vi designer og utvikler nettsider som ikke bare er vakre, men også yter optimalt og konverterer effektivt.",
            benefits: [
              "Online-tilstedeværelse 24/7 for din bedrift",
              "Økt troverdighet og profesjonalitet",
              "Bedre synlighet i søkemotorer",
              "Flere leads og konverteringer"
            ],
            features: [
              "Responsiv design for alle enheter",
              "SEO-optimalisert innhold",
              "Raske lastetider og sikkerhet",
              "Innholdsstyringssystem (CMS)"
            ],
            process: [
              "Strategisk planlegging og wireframing",
              "Visuell design og brukeropplevelse",
              "Utvikling og innholdsskaping",
              "Testing, lansering og vedlikehold"
            ]
          }
        }
      },
      {
        name: "Webshop",
        slug: "webshop",
        icon: ShoppingCart,
        description: "24/7 online sales",
        category: "being-online",
        content: {
          NL: {
            title: "E-commerce Webshop",
            subtitle: "24/7 online verkopen",
            description: "Een professionele webshop opent deuren naar nieuwe klanten en verhoogt je omzet. Wij ontwikkelen gebruiksvriendelijke webshops die converteren en je producten of diensten optimaal presenteren.",
            benefits: [
              "Verkopen zonder tijdsbeperkingen",
              "Uitbreiding van je klantenbereik",
              "Automatisering van verkoopprocessen",
              "Integratie met betaal- en verzendmethoden"
            ],
            features: [
              "Gebruiksvriendelijke productcatalogus",
              "Veilige betalingsverwerking",
              "Voorraad- en orderbeheer",
              "Mobile-first responsive design"
            ],
            process: [
              "E-commerce strategie en planning",
              "Design en user experience optimalisatie",
              "Ontwikkeling en integraties",
              "Testing, training en go-live"
            ]
          },
          FR: {
            title: "Boutique en Ligne E-commerce",
            subtitle: "Ventes en ligne 24/7",
            description: "Une boutique en ligne professionnelle ouvre les portes à de nouveaux clients et augmente votre chiffre d'affaires. Nous développons des boutiques conviviales qui convertissent et présentent vos produits ou services de manière optimale.",
            benefits: [
              "Ventes sans restrictions horaires",
              "Extension de votre portée client",
              "Automatisation des processus de vente",
              "Intégration avec les méthodes de paiement et d'expédition"
            ],
            features: [
              "Catalogue de produits convivial",
              "Traitement sécurisé des paiements",
              "Gestion des stocks et des commandes",
              "Design responsive mobile-first"
            ],
            process: [
              "Stratégie et planification e-commerce",
              "Design et optimisation de l'expérience utilisateur",
              "Développement et intégrations",
              "Tests, formation et mise en ligne"
            ]
          },
          EN: {
            title: "E-commerce Webshop",
            subtitle: "24/7 online sales",
            description: "A professional webshop opens doors to new customers and increases your revenue. We develop user-friendly webshops that convert and optimally present your products or services.",
            benefits: [
              "Sales without time restrictions",
              "Expansion of your customer reach",
              "Automation of sales processes",
              "Integration with payment and shipping methods"
            ],
            features: [
              "User-friendly product catalog",
              "Secure payment processing",
              "Inventory and order management",
              "Mobile-first responsive design"
            ],
            process: [
              "E-commerce strategy and planning",
              "Design and user experience optimization",
              "Development and integrations",
              "Testing, training and go-live"
            ]
          },
          PL: {
            title: "Sklep Internetowy E-commerce",
            subtitle: "Sprzedaż online 24/7",
            description: "Profesjonalny sklep internetowy otwiera drzwi do nowych klientów i zwiększa Twoje przychody. Rozwijamy przyjazne dla użytkownika sklepy, które konwertują i optymalnie prezentują Twoje produkty lub usługi.",
            benefits: [
              "Sprzedaż bez ograniczeń czasowych",
              "Rozszerzenie zasięgu klientów",
              "Automatyzacja procesów sprzedażowych",
              "Integracja z metodami płatności i wysyłki"
            ],
            features: [
              "Przyjazny katalog produktów",
              "Bezpieczne przetwarzanie płatności",
              "Zarządzanie zapasami i zamówieniami",
              "Responsywny design mobile-first"
            ],
            process: [
              "Strategia i planowanie e-commerce",
              "Design i optymalizacja doświadczenia użytkownika",
              "Rozwój i integracje",
              "Testowanie, szkolenie i uruchomienie"
            ]
          },
          RU: {
            title: "Интернет-магазин E-commerce",
            subtitle: "Онлайн-продажи 24/7",
            description: "Профессиональный интернет-магазин открывает двери к новым клиентам и увеличивает ваш доход. Мы разрабатываем удобные интернет-магазины, которые конвертируют и оптимально представляют ваши продукты или услуги.",
            benefits: [
              "Продажи без временных ограничений",
              "Расширение охвата клиентов",
              "Автоматизация процессов продаж",
              "Интеграция с платежными и доставочными методами"
            ],
            features: [
              "Удобный каталог продуктов",
              "Безопасная обработка платежей",
              "Управление запасами и заказами",
              "Адаптивный дизайн mobile-first"
            ],
            process: [
              "Стратегия и планирование e-commerce",
              "Дизайн и оптимизация пользовательского опыта",
              "Разработка и интеграции",
              "Тестирование, обучение и запуск"
            ]
          },
          DE: {
            title: "E-Commerce Webshop",
            subtitle: "24/7 Online-Verkauf",
            description: "Ein professioneller Webshop öffnet Türen zu neuen Kunden und erhöht Ihren Umsatz. Wir entwickeln benutzerfreundliche Webshops, die konvertieren und Ihre Produkte oder Dienstleistungen optimal präsentieren.",
            benefits: [
              "Verkauf ohne zeitliche Einschränkungen",
              "Erweiterung Ihrer Kundenreichweite",
              "Automatisierung von Verkaufsprozessen",
              "Integration mit Zahlungs- und Versandmethoden"
            ],
            features: [
              "Benutzerfreundlicher Produktkatalog",
              "Sichere Zahlungsabwicklung",
              "Bestands- und Auftragsverwaltung",
              "Mobile-first responsives Design"
            ],
            process: [
              "E-Commerce-Strategie und Planung",
              "Design und User-Experience-Optimierung",
              "Entwicklung und Integrationen",
              "Testing, Schulung und Go-live"
            ]
          },
          ES: {
            title: "Tienda Online E-commerce",
            subtitle: "Ventas online 24/7",
            description: "Una tienda online profesional abre puertas a nuevos clientes y aumenta tus ingresos. Desarrollamos tiendas online fáciles de usar que convierten y presentan tus productos o servicios de manera óptima.",
            benefits: [
              "Ventas sin restricciones horarias",
              "Expansión de tu alcance de clientes",
              "Automatización de procesos de venta",
              "Integración con métodos de pago y envío"
            ],
            features: [
              "Catálogo de productos fácil de usar",
              "Procesamiento seguro de pagos",
              "Gestión de inventario y pedidos",
              "Diseño responsivo mobile-first"
            ],
            process: [
              "Estrategia y planificación de e-commerce",
              "Diseño y optimización de experiencia de usuario",
              "Desarrollo e integraciones",
              "Pruebas, formación y lanzamiento"
            ]
          },
          IT: {
            title: "E-commerce Webshop",
            subtitle: "Vendite online 24/7",
            description: "Un webshop professionale apre le porte a nuovi clienti e aumenta i tuoi ricavi. Sviluppiamo webshop user-friendly che convertono e presentano in modo ottimale i tuoi prodotti o servizi.",
            benefits: [
              "Vendite senza restrizioni orarie",
              "Espansione della portata dei clienti",
              "Automazione dei processi di vendita",
              "Integrazione con metodi di pagamento e spedizione"
            ],
            features: [
              "Catalogo prodotti user-friendly",
              "Elaborazione sicura dei pagamenti",
              "Gestione inventario e ordini",
              "Design responsivo mobile-first"
            ],
            process: [
              "Strategia e pianificazione e-commerce",
              "Design e ottimizzazione dell'esperienza utente",
              "Sviluppo e integrazioni",
              "Test, formazione e go-live"
            ]
          },
          UK: {
            title: "Інтернет-магазин E-commerce",
            subtitle: "Онлайн-продажі 24/7",
            description: "Професійний інтернет-магазин відкриває двері до нових клієнтів та збільшує ваш дохід. Ми розробляємо зручні інтернет-магазини, які конвертують та оптимально представляють ваші продукти або послуги.",
            benefits: [
              "Продажі без часових обмежень",
              "Розширення охоплення клієнтів",
              "Автоматизація процесів продажу",
              "Інтеграція з платіжними та доставочними методами"
            ],
            features: [
              "Зручний каталог продуктів",
              "Безпечна обробка платежів",
              "Управління запасами та замовленнями",
              "Адаптивний дизайн mobile-first"
            ],
            process: [
              "Стратегія та планування e-commerce",
              "Дизайн та оптимізація користувацького досвіду",
              "Розробка та інтеграції",
              "Тестування, навчання та запуск"
            ]
          },
          TR: {
            title: "E-ticaret Web Mağazası",
            subtitle: "7/24 online satış",
            description: "Profesyonel bir web mağazası yeni müşterilere kapı açar ve gelirinizi artırır. Dönüştüren ve ürünlerinizi veya hizmetlerinizi optimal şekilde sunan kullanıcı dostu web mağazaları geliştiriyoruz.",
            benefits: [
              "Zaman kısıtlaması olmadan satış",
              "Müşteri erişiminizin genişletilmesi",
              "Satış süreçlerinin otomasyonu",
              "Ödeme ve kargo yöntemleriyle entegrasyon"
            ],
            features: [
              "Kullanıcı dostu ürün kataloğu",
              "Güvenli ödeme işleme",
              "Envanter ve sipariş yönetimi",
              "Mobile-first duyarlı tasarım"
            ],
            process: [
              "E-ticaret stratejisi ve planlama",
              "Tasarım ve kullanıcı deneyimi optimizasyonu",
              "Geliştirme ve entegrasyonlar",
              "Test, eğitim ve lansman"
            ]
          },
          SV: {
            title: "E-handels Webshop",
            subtitle: "Online-försäljning 24/7",
            description: "En professionell webshop öppnar dörrar till nya kunder och ökar dina intäkter. Vi utvecklar användarvänliga webshoppar som konverterar och optimalt presenterar dina produkter eller tjänster.",
            benefits: [
              "Försäljning utan tidsbegränsningar",
              "Utökning av din kundräckvidd",
              "Automatisering av försäljningsprocesser",
              "Integration med betalnings- och leveransmetoder"
            ],
            features: [
              "Användarvänlig produktkatalog",
              "Säker betalningshantering",
              "Lager- och orderhantering",
              "Mobile-first responsiv design"
            ],
            process: [
              "E-handelsstrategi och planering",
              "Design och användarupplevelsesoptimering",
              "Utveckling och integrationer",
              "Testning, utbildning och go-live"
            ]
          },
          ZH: {
            title: "电子商务网店",
            subtitle: "24/7在线销售",
            description: "专业的网店为新客户打开大门，增加您的收入。我们开发用户友好的网店，转化率高并最佳展示您的产品或服务。",
            benefits: [
              "无时间限制的销售",
              "扩大客户覆盖范围",
              "销售流程自动化",
              "与支付和配送方式集成"
            ],
            features: [
              "用户友好的产品目录",
              "安全的支付处理",
              "库存和订单管理",
              "移动优先响应式设计"
            ],
            process: [
              "电子商务战略和规划",
              "设计和用户体验优化",
              "开发和集成",
              "测试、培训和上线"
            ]
          },
          FI: {
            title: "Verkkokauppa",
            subtitle: "24/7 online-myynti",
            description: "Ammattimainen verkkokauppa avaa ovia uusille asiakkaille ja kasvattaa liikevaihtoasi. Kehitämme käyttäjäystävällisiä verkkokauppoja, jotka konvertoivat ja esittelevät tuotteitasi tai palveluitasi optimaalisesti.",
            benefits: [
              "Myynti ilman aikarajoituksia",
              "Asiakasulottuvuuden laajentaminen",
              "Myyntiprosessien automatisointi",
              "Integraatio maksu- ja toimitusmenetelmiin"
            ],
            features: [
              "Käyttäjäystävällinen tuotekatalogi",
              "Turvallinen maksunkäsittely",
              "Varastonhallinta ja tilaustenhallinta",
              "Mobile-first responsiivinen design"
            ],
            process: [
              "Verkkokauppastrategia ja suunnittelu",
              "Design ja käyttökokemuksen optimointi",
              "Kehitys ja integraatiot",
              "Testaus, koulutus ja julkaisu"
            ]
          },
          AR: {
            title: "متجر إلكتروني للتجارة الإلكترونية",
            subtitle: "مبيعات عبر الإنترنت على مدار الساعة",
            description: "يفتح المتجر الإلكتروني الاحترافي أبوابًا لعملاء جدد ويزيد من إيراداتك. نطور متاجر إلكترونية سهلة الاستخدام تحول وتعرض منتجاتك أو خدماتك بشكل مثالي.",
            benefits: [
              "مبيعات بدون قيود زمنية",
              "توسيع نطاق وصولك للعملاء",
              "أتمتة عمليات البيع",
              "التكامل مع طرق الدفع والشحن"
            ],
            features: [
              "كتالوج منتجات سهل الاستخدام",
              "معالجة دفع آمنة",
              "إدارة المخزون والطلبات",
              "تصميم متجاوب يعطي الأولوية للهاتف"
            ],
            process: [
              "استراتيجية وتخطيط التجارة الإلكترونية",
              "التصميم وتحسين تجربة المستخدم",
              "التطوير والتكاملات",
              "الاختبار والتدريب والإطلاق"
            ]
          },
          DA: {
            title: "E-handels Webshop",
            subtitle: "Online-salg 24/7",
            description: "En professionel webshop åbner døre til nye kunder og øger din omsætning. Vi udvikler brugervenlige webshops, der konverterer og optimalt præsenterer dine produkter eller tjenester.",
            benefits: [
              "Salg uden tidsbegrænsninger",
              "Udvidelse af din kundereach",
              "Automatisering af salgsprocesser",
              "Integration med betalings- og forsendelsesmetoder"
            ],
            features: [
              "Brugervenligt produktkatalog",
              "Sikker betalingsbehandling",
              "Lager- og ordrehåndtering",
              "Mobile-first responsivt design"
            ],
            process: [
              "E-handelsstrategi og planlægning",
              "Design og brugeroplevelsesoptimering",
              "Udvikling og integrationer",
              "Test, træning og go-live"
            ]
          },
          NO: {
            title: "E-handels Nettbutikk",
            subtitle: "Online-salg 24/7",
            description: "En profesjonell nettbutikk åpner dører til nye kunder og øker inntektene dine. Vi utvikler brukervennlige nettbutikker som konverterer og optimalt presenterer produktene eller tjenestene dine.",
            benefits: [
              "Salg uten tidsbegrensninger",
              "Utvidelse av kundereach",
              "Automatisering av salgsprosesser",
              "Integrasjon med betalings- og leveringsmetoder"
            ],
            features: [
              "Brukervennlig produktkatalog",
              "Sikker betalingsbehandling",
              "Lager- og ordrehåndtering",
              "Mobile-first responsiv design"
            ],
            process: [
              "E-handelsstrategi og planlegging",
              "Design og brukeropplevelsesoptimalisering",
              "Utvikling og integrasjoner",
              "Testing, opplæring og lansering"
            ]
          }
        }
      },
      {
        name: "Webcheck",
        slug: "webcheck",
        icon: CheckCircle,
        description: "Complete website health analysis",
        category: "being-online",
        content: {
          NL: {
            title: "Webcheck - Website Analyse",
            subtitle: "Complete gezondheidscheck voor je website",
            description: "Onze uitgebreide webcheck analyseert elk aspect van je website - van technische prestaties tot SEO en gebruikerservaring. Ontvang een gedetailleerd rapport met concrete verbeterpunten.",
            benefits: [
              "Ontdek verborgen problemen op je website",
              "Verbeter laadsnelheid en prestaties",
              "Identificeer SEO kansen",
              "Optimaliseer gebruikerservaring"
            ],
            features: [
              "Technische audit en analyse",
              "SEO en content beoordeling",
              "Snelheid en prestatie meting",
              "Uitgebreid rapport met aanbevelingen"
            ],
            process: [
              "Website URL invoeren",
              "Geautomatiseerde analyse",
              "Resultaten verwerking",
              "Rapport met actiepunten ontvangen"
            ]
          },
          EN: {
            title: "Webcheck - Website Analysis",
            subtitle: "Complete health check for your website",
            description: "Our comprehensive webcheck analyzes every aspect of your website - from technical performance to SEO and user experience. Receive a detailed report with concrete improvement points.",
            benefits: [
              "Discover hidden problems on your website",
              "Improve loading speed and performance",
              "Identify SEO opportunities",
              "Optimize user experience"
            ],
            features: [
              "Technical audit and analysis",
              "SEO and content assessment",
              "Speed and performance measurement",
              "Comprehensive report with recommendations"
            ],
            process: [
              "Enter website URL",
              "Automated analysis",
              "Results processing",
              "Receive report with action points"
            ]
          },
          FR: {
            title: "Webcheck - Analyse de Site Web",
            subtitle: "Bilan de santé complet pour votre site web",
            description: "Notre webcheck complet analyse chaque aspect de votre site web - des performances techniques au SEO et à l'expérience utilisateur. Recevez un rapport détaillé avec des points d'amélioration concrets.",
            benefits: [
              "Découvrez les problèmes cachés sur votre site",
              "Améliorez la vitesse de chargement et les performances",
              "Identifiez les opportunités SEO",
              "Optimisez l'expérience utilisateur"
            ],
            features: [
              "Audit technique et analyse",
              "Évaluation SEO et contenu",
              "Mesure de vitesse et performance",
              "Rapport complet avec recommandations"
            ],
            process: [
              "Entrer l'URL du site web",
              "Analyse automatisée",
              "Traitement des résultats",
              "Recevoir le rapport avec points d'action"
            ]
          },
          PL: {
            title: "Webcheck - Analiza Strony",
            subtitle: "Kompleksowy przegląd Twojej strony internetowej",
            description: "Nasz kompleksowy webcheck analizuje każdy aspekt Twojej strony - od wydajności technicznej po SEO i doświadczenie użytkownika. Otrzymaj szczegółowy raport z konkretnymi punktami do poprawy.",
            benefits: [
              "Odkryj ukryte problemy na swojej stronie",
              "Popraw szybkość ładowania i wydajność",
              "Zidentyfikuj możliwości SEO",
              "Zoptymalizuj doświadczenie użytkownika"
            ],
            features: [
              "Audyt techniczny i analiza",
              "Ocena SEO i treści",
              "Pomiar szybkości i wydajności",
              "Kompleksowy raport z rekomendacjami"
            ],
            process: [
              "Wprowadź URL strony",
              "Zautomatyzowana analiza",
              "Przetwarzanie wyników",
              "Otrzymaj raport z punktami działania"
            ]
          },
          RU: {
            title: "Webcheck - Анализ Сайта",
            subtitle: "Полная проверка здоровья вашего сайта",
            description: "Наш комплексный webcheck анализирует каждый аспект вашего сайта - от технической производительности до SEO и пользовательского опыта. Получите детальный отчет с конкретными рекомендациями.",
            benefits: [
              "Обнаружьте скрытые проблемы на сайте",
              "Улучшите скорость загрузки и производительность",
              "Определите SEO возможности",
              "Оптимизируйте пользовательский опыт"
            ],
            features: [
              "Технический аудит и анализ",
              "Оценка SEO и контента",
              "Измерение скорости и производительности",
              "Комплексный отчет с рекомендациями"
            ],
            process: [
              "Введите URL сайта",
              "Автоматизированный анализ",
              "Обработка результатов",
              "Получите отчет с действиями"
            ]
          },
          DE: {
            title: "Webcheck - Website-Analyse",
            subtitle: "Vollständiger Gesundheitscheck für Ihre Website",
            description: "Unser umfassender Webcheck analysiert jeden Aspekt Ihrer Website - von der technischen Leistung über SEO bis zur Benutzererfahrung. Erhalten Sie einen detaillierten Bericht mit konkreten Verbesserungspunkten.",
            benefits: [
              "Entdecken Sie versteckte Probleme auf Ihrer Website",
              "Verbessern Sie Ladegeschwindigkeit und Leistung",
              "Identifizieren Sie SEO-Chancen",
              "Optimieren Sie die Benutzererfahrung"
            ],
            features: [
              "Technisches Audit und Analyse",
              "SEO- und Inhaltsbewertung",
              "Geschwindigkeits- und Leistungsmessung",
              "Umfassender Bericht mit Empfehlungen"
            ],
            process: [
              "Website-URL eingeben",
              "Automatisierte Analyse",
              "Ergebnisverarbeitung",
              "Bericht mit Aktionspunkten erhalten"
            ]
          },
          ES: {
            title: "Webcheck - Análisis de Sitio Web",
            subtitle: "Revisión completa de salud para tu sitio web",
            description: "Nuestro webcheck integral analiza cada aspecto de tu sitio web - desde el rendimiento técnico hasta SEO y experiencia de usuario. Recibe un informe detallado con puntos de mejora concretos.",
            benefits: [
              "Descubre problemas ocultos en tu sitio web",
              "Mejora la velocidad de carga y rendimiento",
              "Identifica oportunidades SEO",
              "Optimiza la experiencia de usuario"
            ],
            features: [
              "Auditoría técnica y análisis",
              "Evaluación SEO y contenido",
              "Medición de velocidad y rendimiento",
              "Informe completo con recomendaciones"
            ],
            process: [
              "Ingresar URL del sitio web",
              "Análisis automatizado",
              "Procesamiento de resultados",
              "Recibir informe con puntos de acción"
            ]
          },
          IT: {
            title: "Webcheck - Analisi del Sito Web",
            subtitle: "Controllo completo della salute del tuo sito web",
            description: "Il nostro webcheck completo analizza ogni aspetto del tuo sito web - dalle prestazioni tecniche al SEO e all'esperienza utente. Ricevi un rapporto dettagliato con punti di miglioramento concreti.",
            benefits: [
              "Scopri problemi nascosti sul tuo sito web",
              "Migliora la velocità di caricamento e le prestazioni",
              "Identifica opportunità SEO",
              "Ottimizza l'esperienza utente"
            ],
            features: [
              "Audit tecnico e analisi",
              "Valutazione SEO e contenuti",
              "Misurazione velocità e prestazioni",
              "Rapporto completo con raccomandazioni"
            ],
            process: [
              "Inserire URL del sito web",
              "Analisi automatizzata",
              "Elaborazione risultati",
              "Ricevere rapporto con azioni"
            ]
          },
          UK: {
            title: "Webcheck - Аналіз Сайту",
            subtitle: "Повна перевірка здоров'я вашого сайту",
            description: "Наш комплексний webcheck аналізує кожен аспект вашого сайту - від технічної продуктивності до SEO та користувацького досвіду. Отримайте детальний звіт з конкретними рекомендаціями.",
            benefits: [
              "Виявіть приховані проблеми на сайті",
              "Покращіть швидкість завантаження та продуктивність",
              "Визначте SEO можливості",
              "Оптимізуйте користувацький досвід"
            ],
            features: [
              "Технічний аудит та аналіз",
              "Оцінка SEO та контенту",
              "Вимірювання швидкості та продуктивності",
              "Комплексний звіт з рекомендаціями"
            ],
            process: [
              "Введіть URL сайту",
              "Автоматизований аналіз",
              "Обробка результатів",
              "Отримайте звіт з діями"
            ]
          },
          TR: {
            title: "Webcheck - Web Sitesi Analizi",
            subtitle: "Web siteniz için kapsamlı sağlık kontrolü",
            description: "Kapsamlı webcheck'imiz web sitenizin her yönünü analiz eder - teknik performanstan SEO ve kullanıcı deneyimine. Somut iyileştirme noktaları içeren detaylı bir rapor alın.",
            benefits: [
              "Web sitenizdeki gizli sorunları keşfedin",
              "Yükleme hızını ve performansı iyileştirin",
              "SEO fırsatlarını belirleyin",
              "Kullanıcı deneyimini optimize edin"
            ],
            features: [
              "Teknik denetim ve analiz",
              "SEO ve içerik değerlendirmesi",
              "Hız ve performans ölçümü",
              "Öneriler içeren kapsamlı rapor"
            ],
            process: [
              "Web sitesi URL'sini girin",
              "Otomatik analiz",
              "Sonuç işleme",
              "Eylem noktaları içeren rapor alın"
            ]
          },
          SV: {
            title: "Webcheck - Webbplatsanalys",
            subtitle: "Fullständig hälsokontroll för din webbplats",
            description: "Vår omfattande webcheck analyserar varje aspekt av din webbplats - från teknisk prestanda till SEO och användarupplevelse. Få en detaljerad rapport med konkreta förbättringspunkter.",
            benefits: [
              "Upptäck dolda problem på din webbplats",
              "Förbättra laddningshastighet och prestanda",
              "Identifiera SEO-möjligheter",
              "Optimera användarupplevelsen"
            ],
            features: [
              "Teknisk revision och analys",
              "SEO- och innehållsbedömning",
              "Hastighets- och prestandamätning",
              "Omfattande rapport med rekommendationer"
            ],
            process: [
              "Ange webbplatsens URL",
              "Automatiserad analys",
              "Resultatbearbetning",
              "Få rapport med åtgärdspunkter"
            ]
          },
          ZH: {
            title: "Webcheck - 网站分析",
            subtitle: "为您的网站进行全面健康检查",
            description: "我们全面的网站检查分析您网站的各个方面 - 从技术性能到SEO和用户体验。获取详细报告，包含具体改进建议。",
            benefits: [
              "发现网站上的隐藏问题",
              "提高加载速度和性能",
              "识别SEO机会",
              "优化用户体验"
            ],
            features: [
              "技术审计和分析",
              "SEO和内容评估",
              "速度和性能测量",
              "包含建议的综合报告"
            ],
            process: [
              "输入网站URL",
              "自动化分析",
              "结果处理",
              "收到包含行动要点的报告"
            ]
          },
          FI: {
            title: "Webcheck - Verkkosivuanalyysi",
            subtitle: "Täydellinen terveystarkastus verkkosivustollesi",
            description: "Kattava webcheck analysoi verkkosivustosi jokaisen osan - teknisestä suorituskyvystä SEO:hon ja käyttökokemukseen. Saat yksityiskohtaisen raportin konkreettisilla parannusehdotuksilla.",
            benefits: [
              "Löydä piilotetut ongelmat verkkosivustoltasi",
              "Paranna latausnopeutta ja suorituskykyä",
              "Tunnista SEO-mahdollisuudet",
              "Optimoi käyttökokemus"
            ],
            features: [
              "Tekninen tarkastus ja analyysi",
              "SEO- ja sisältöarviointi",
              "Nopeuden ja suorituskyvyn mittaus",
              "Kattava raportti suosituksilla"
            ],
            process: [
              "Syötä verkkosivuston URL",
              "Automatisoitu analyysi",
              "Tulosten käsittely",
              "Vastaanota raportti toimenpiteillä"
            ]
          },
          AR: {
            title: "Webcheck - تحليل الموقع",
            subtitle: "فحص صحي شامل لموقعك الإلكتروني",
            description: "يحلل فحص الويب الشامل لدينا كل جانب من جوانب موقعك - من الأداء التقني إلى تحسين محركات البحث وتجربة المستخدم. احصل على تقرير مفصل مع نقاط تحسين محددة.",
            benefits: [
              "اكتشف المشاكل الخفية على موقعك",
              "حسّن سرعة التحميل والأداء",
              "حدد فرص تحسين محركات البحث",
              "حسّن تجربة المستخدم"
            ],
            features: [
              "تدقيق وتحليل تقني",
              "تقييم SEO والمحتوى",
              "قياس السرعة والأداء",
              "تقرير شامل مع التوصيات"
            ],
            process: [
              "أدخل عنوان URL للموقع",
              "تحليل آلي",
              "معالجة النتائج",
              "استلام التقرير مع نقاط العمل"
            ]
          },
          DA: {
            title: "Webcheck - Hjemmesideanalyse",
            subtitle: "Komplet sundhedstjek for din hjemmeside",
            description: "Vores omfattende webcheck analyserer alle aspekter af din hjemmeside - fra teknisk ydeevne til SEO og brugeroplevelse. Modtag en detaljeret rapport med konkrete forbedringspunkter.",
            benefits: [
              "Opdag skjulte problemer på din hjemmeside",
              "Forbedre indlæsningshastighed og ydeevne",
              "Identificer SEO-muligheder",
              "Optimér brugeroplevelsen"
            ],
            features: [
              "Teknisk revision og analyse",
              "SEO- og indholdsvurdering",
              "Hastigheds- og ydeevnemåling",
              "Omfattende rapport med anbefalinger"
            ],
            process: [
              "Indtast hjemmesidens URL",
              "Automatiseret analyse",
              "Resultatbehandling",
              "Modtag rapport med handlingspunkter"
            ]
          },
          NO: {
            title: "Webcheck - Nettstedsanalyse",
            subtitle: "Komplett helsesjekk for nettsiden din",
            description: "Vår omfattende webcheck analyserer alle aspekter av nettsiden din - fra teknisk ytelse til SEO og brukeropplevelse. Motta en detaljert rapport med konkrete forbedringspunkter.",
            benefits: [
              "Oppdag skjulte problemer på nettsiden din",
              "Forbedre lastehastighet og ytelse",
              "Identifiser SEO-muligheter",
              "Optimaliser brukeropplevelsen"
            ],
            features: [
              "Teknisk revisjon og analyse",
              "SEO- og innholdsvurdering",
              "Hastighets- og ytelsesmåling",
              "Omfattende rapport med anbefalinger"
            ],
            process: [
              "Skriv inn nettsidens URL",
              "Automatisert analyse",
              "Resultatbehandling",
              "Motta rapport med handlingspunkter"
            ]
          }
        }
      },
      {
        name: "Social Post Pro",
        slug: "social-post-pro",
        icon: Share2,
        description: "Professional social media content",
        category: "being-online",
        content: {
          NL: {
            title: "Social Post Pro",
            subtitle: "Professionele social media content voor je bedrijf",
            description: "Met Social Post Pro krijg je professioneel ontworpen social media posts die je merk versterken. We creëren consistente, aantrekkelijke content die je doelgroep aanspreekt.",
            benefits: [
              "Professioneel ontworpen posts",
              "Consistente merkcommunicatie",
              "Tijdsbesparing op content creatie",
              "Verhoogde betrokkenheid op social media"
            ],
            features: [
              "Custom post ontwerp",
              "Content planning en kalender",
              "Multi-platform optimalisatie",
              "Brand-consistente templates"
            ],
            process: [
              "Intake en merkanalyse",
              "Template en stijl ontwikkeling",
              "Content creatie en planning",
              "Publicatie en rapportage"
            ]
          },
          EN: {
            title: "Social Post Pro",
            subtitle: "Professional social media content for your business",
            description: "With Social Post Pro you get professionally designed social media posts that strengthen your brand. We create consistent, attractive content that appeals to your target audience.",
            benefits: [
              "Professionally designed posts",
              "Consistent brand communication",
              "Time savings on content creation",
              "Increased social media engagement"
            ],
            features: [
              "Custom post design",
              "Content planning and calendar",
              "Multi-platform optimization",
              "Brand-consistent templates"
            ],
            process: [
              "Intake and brand analysis",
              "Template and style development",
              "Content creation and planning",
              "Publication and reporting"
            ]
          },
          FR: {
            title: "Social Post Pro",
            subtitle: "Contenu professionnel pour les réseaux sociaux",
            description: "Avec Social Post Pro, vous obtenez des publications professionnelles qui renforcent votre marque. Nous créons un contenu cohérent et attrayant qui attire votre public cible.",
            benefits: [
              "Publications professionnellement conçues",
              "Communication de marque cohérente",
              "Gain de temps sur la création de contenu",
              "Engagement accru sur les réseaux sociaux"
            ],
            features: [
              "Design de publication personnalisé",
              "Planification et calendrier de contenu",
              "Optimisation multi-plateforme",
              "Modèles cohérents avec la marque"
            ],
            process: [
              "Admission et analyse de marque",
              "Développement de modèles et style",
              "Création et planification de contenu",
              "Publication et rapports"
            ]
          },
          PL: {
            title: "Social Post Pro",
            subtitle: "Profesjonalne treści w mediach społecznościowych",
            description: "Z Social Post Pro otrzymujesz profesjonalnie zaprojektowane posty, które wzmacniają Twoją markę. Tworzymy spójne, atrakcyjne treści, które przemawiają do Twojej grupy docelowej.",
            benefits: [
              "Profesjonalnie zaprojektowane posty",
              "Spójna komunikacja marki",
              "Oszczędność czasu na tworzeniu treści",
              "Zwiększone zaangażowanie w mediach społecznościowych"
            ],
            features: [
              "Niestandardowy projekt postów",
              "Planowanie i kalendarz treści",
              "Optymalizacja na wiele platform",
              "Szablony spójne z marką"
            ],
            process: [
              "Przyjęcie i analiza marki",
              "Rozwój szablonów i stylu",
              "Tworzenie i planowanie treści",
              "Publikacja i raportowanie"
            ]
          },
          RU: {
            title: "Social Post Pro",
            subtitle: "Профессиональный контент для социальных сетей",
            description: "С Social Post Pro вы получаете профессионально разработанные посты, которые усиливают ваш бренд. Мы создаем последовательный, привлекательный контент для вашей целевой аудитории.",
            benefits: [
              "Профессионально разработанные посты",
              "Последовательная коммуникация бренда",
              "Экономия времени на создание контента",
              "Повышенная вовлеченность в социальных сетях"
            ],
            features: [
              "Индивидуальный дизайн постов",
              "Планирование контента и календарь",
              "Оптимизация для разных платформ",
              "Шаблоны в стиле бренда"
            ],
            process: [
              "Прием и анализ бренда",
              "Разработка шаблонов и стиля",
              "Создание и планирование контента",
              "Публикация и отчетность"
            ]
          },
          DE: {
            title: "Social Post Pro",
            subtitle: "Professioneller Social-Media-Inhalt für Ihr Unternehmen",
            description: "Mit Social Post Pro erhalten Sie professionell gestaltete Social-Media-Posts, die Ihre Marke stärken. Wir erstellen konsistenten, attraktiven Inhalt, der Ihre Zielgruppe anspricht.",
            benefits: [
              "Professionell gestaltete Posts",
              "Konsistente Markenkommunikation",
              "Zeitersparnis bei der Content-Erstellung",
              "Erhöhtes Social-Media-Engagement"
            ],
            features: [
              "Individuelles Post-Design",
              "Content-Planung und Kalender",
              "Multi-Plattform-Optimierung",
              "Marken-konsistente Vorlagen"
            ],
            process: [
              "Aufnahme und Markenanalyse",
              "Vorlagen- und Stilentwicklung",
              "Content-Erstellung und Planung",
              "Veröffentlichung und Berichterstattung"
            ]
          },
          ES: {
            title: "Social Post Pro",
            subtitle: "Contenido profesional para redes sociales",
            description: "Con Social Post Pro obtienes publicaciones profesionalmente diseñadas que fortalecen tu marca. Creamos contenido consistente y atractivo que atrae a tu público objetivo.",
            benefits: [
              "Publicaciones diseñadas profesionalmente",
              "Comunicación de marca consistente",
              "Ahorro de tiempo en creación de contenido",
              "Mayor engagement en redes sociales"
            ],
            features: [
              "Diseño de publicaciones personalizado",
              "Planificación y calendario de contenido",
              "Optimización multiplataforma",
              "Plantillas consistentes con la marca"
            ],
            process: [
              "Admisión y análisis de marca",
              "Desarrollo de plantillas y estilo",
              "Creación y planificación de contenido",
              "Publicación y reportes"
            ]
          },
          IT: {
            title: "Social Post Pro",
            subtitle: "Contenuti professionali per i social media",
            description: "Con Social Post Pro ottieni post professionalmente progettati che rafforzano il tuo brand. Creiamo contenuti coerenti e attraenti che parlano al tuo pubblico target.",
            benefits: [
              "Post progettati professionalmente",
              "Comunicazione di brand coerente",
              "Risparmio di tempo nella creazione di contenuti",
              "Maggiore engagement sui social media"
            ],
            features: [
              "Design di post personalizzato",
              "Pianificazione e calendario contenuti",
              "Ottimizzazione multi-piattaforma",
              "Template coerenti con il brand"
            ],
            process: [
              "Intake e analisi del brand",
              "Sviluppo di template e stile",
              "Creazione e pianificazione contenuti",
              "Pubblicazione e reportistica"
            ]
          },
          UK: {
            title: "Social Post Pro",
            subtitle: "Професійний контент для соціальних мереж",
            description: "З Social Post Pro ви отримуєте професійно розроблені пости, які посилюють ваш бренд. Ми створюємо послідовний, привабливий контент для вашої цільової аудиторії.",
            benefits: [
              "Професійно розроблені пости",
              "Послідовна комунікація бренду",
              "Економія часу на створення контенту",
              "Підвищена залученість у соціальних мережах"
            ],
            features: [
              "Індивідуальний дизайн постів",
              "Планування контенту та календар",
              "Оптимізація для різних платформ",
              "Шаблони у стилі бренду"
            ],
            process: [
              "Прийом та аналіз бренду",
              "Розробка шаблонів та стилю",
              "Створення та планування контенту",
              "Публікація та звітність"
            ]
          },
          TR: {
            title: "Social Post Pro",
            subtitle: "İşletmeniz için profesyonel sosyal medya içeriği",
            description: "Social Post Pro ile markanızı güçlendiren profesyonelce tasarlanmış sosyal medya gönderileri alırsınız. Hedef kitlenizi etkileyen tutarlı, çekici içerik oluşturuyoruz.",
            benefits: [
              "Profesyonelce tasarlanmış gönderiler",
              "Tutarlı marka iletişimi",
              "İçerik oluşturmada zaman tasarrufu",
              "Artan sosyal medya etkileşimi"
            ],
            features: [
              "Özel gönderi tasarımı",
              "İçerik planlaması ve takvim",
              "Çok platformlu optimizasyon",
              "Marka tutarlı şablonlar"
            ],
            process: [
              "Kabul ve marka analizi",
              "Şablon ve stil geliştirme",
              "İçerik oluşturma ve planlama",
              "Yayınlama ve raporlama"
            ]
          },
          SV: {
            title: "Social Post Pro",
            subtitle: "Professionellt socialt medieinnehåll för ditt företag",
            description: "Med Social Post Pro får du professionellt designade sociala medieinlägg som stärker ditt varumärke. Vi skapar konsekvent, attraktivt innehåll som tilltalar din målgrupp.",
            benefits: [
              "Professionellt designade inlägg",
              "Konsekvent varumärkeskommunikation",
              "Tidsbesparing på innehållsskapande",
              "Ökat engagemang på sociala medier"
            ],
            features: [
              "Anpassad inläggsdesign",
              "Innehållsplanering och kalender",
              "Multi-plattformsoptimering",
              "Varumärkeskonsistenta mallar"
            ],
            process: [
              "Intake och varumärkesanalys",
              "Mall- och stilutveckling",
              "Innehållsskapande och planering",
              "Publicering och rapportering"
            ]
          },
          ZH: {
            title: "Social Post Pro",
            subtitle: "为您的企业提供专业社交媒体内容",
            description: "通过Social Post Pro，您将获得专业设计的社交媒体帖子，增强您的品牌形象。我们创建一致、有吸引力的内容，吸引您的目标受众。",
            benefits: [
              "专业设计的帖子",
              "一致的品牌沟通",
              "节省内容创作时间",
              "提高社交媒体参与度"
            ],
            features: [
              "定制帖子设计",
              "内容规划和日历",
              "多平台优化",
              "品牌一致的模板"
            ],
            process: [
              "接收和品牌分析",
              "模板和风格开发",
              "内容创作和规划",
              "发布和报告"
            ]
          },
          FI: {
            title: "Social Post Pro",
            subtitle: "Ammattimainen sosiaalisen median sisältö yrityksellesi",
            description: "Social Post Pro:lla saat ammattimaisesti suunniteltuja sosiaalisen median julkaisuja, jotka vahvistavat brändiäsi. Luomme johdonmukaista, houkuttelevaa sisältöä kohdeyleisöllesi.",
            benefits: [
              "Ammattimaisesti suunnitellut julkaisut",
              "Johdonmukainen brändiviestintä",
              "Ajansäästö sisällöntuotannossa",
              "Lisääntynyt sitoutuminen sosiaalisessa mediassa"
            ],
            features: [
              "Räätälöity julkaisusuunnittelu",
              "Sisältösuunnittelu ja kalenteri",
              "Monialustaoptimointi",
              "Brändin mukaiset mallit"
            ],
            process: [
              "Vastaanotto ja brändianalyysi",
              "Mallien ja tyylin kehittäminen",
              "Sisällöntuotanto ja suunnittelu",
              "Julkaisu ja raportointi"
            ]
          },
          AR: {
            title: "Social Post Pro",
            subtitle: "محتوى احترافي لوسائل التواصل الاجتماعي لعملك",
            description: "مع Social Post Pro تحصل على منشورات مصممة احترافياً تعزز علامتك التجارية. نقوم بإنشاء محتوى متسق وجذاب يتحدث إلى جمهورك المستهدف.",
            benefits: [
              "منشورات مصممة احترافياً",
              "تواصل متسق للعلامة التجارية",
              "توفير الوقت في إنشاء المحتوى",
              "زيادة التفاعل على وسائل التواصل الاجتماعي"
            ],
            features: [
              "تصميم منشورات مخصص",
              "تخطيط المحتوى والتقويم",
              "تحسين متعدد المنصات",
              "قوالب متوافقة مع العلامة التجارية"
            ],
            process: [
              "استقبال وتحليل العلامة التجارية",
              "تطوير القوالب والأسلوب",
              "إنشاء وتخطيط المحتوى",
              "النشر والتقارير"
            ]
          },
          DA: {
            title: "Social Post Pro",
            subtitle: "Professionelt indhold til sociale medier for din virksomhed",
            description: "Med Social Post Pro får du professionelt designede opslag på sociale medier, der styrker dit brand. Vi skaber konsistent, attraktivt indhold, der taler til din målgruppe.",
            benefits: [
              "Professionelt designede opslag",
              "Konsistent brand-kommunikation",
              "Tidsbesparelse på indholdsskabelse",
              "Øget engagement på sociale medier"
            ],
            features: [
              "Tilpasset opslag-design",
              "Indholdsplanlægning og kalender",
              "Multi-platform optimering",
              "Brand-konsistente skabeloner"
            ],
            process: [
              "Intake og brand-analyse",
              "Skabelon- og stiludvikling",
              "Indholdsskabelse og planlægning",
              "Publicering og rapportering"
            ]
          },
          NO: {
            title: "Social Post Pro",
            subtitle: "Profesjonelt innhold for sosiale medier for din bedrift",
            description: "Med Social Post Pro får du profesjonelt designede innlegg på sosiale medier som styrker merkevaren din. Vi skaper konsistent, attraktivt innhold som treffer målgruppen din.",
            benefits: [
              "Profesjonelt designede innlegg",
              "Konsistent merkekommunikasjon",
              "Tidsbesparelse på innholdsskaping",
              "Økt engasjement på sosiale medier"
            ],
            features: [
              "Tilpasset innleggsdesign",
              "Innholdsplanlegging og kalender",
              "Multi-plattform optimalisering",
              "Merkekonsistente maler"
            ],
            process: [
              "Inntak og merkevareanalyse",
              "Mal- og stilutvikling",
              "Innholdsskaping og planlegging",
              "Publisering og rapportering"
            ]
          }
        }
      },
      {
        name: "NetSync",
        slug: "netsync",
        icon: RefreshCw,
        description: "Sync your business info everywhere",
        category: "being-online",
        content: {
          NL: {
            title: "NetSync - Bedrijfsinformatie Synchronisatie",
            subtitle: "Houd je bedrijfsgegevens overal up-to-date",
            description: "NetSync zorgt ervoor dat je bedrijfsinformatie consistent is op alle online platforms - van Google tot social media en branchegidsen. Eén wijziging, overal bijgewerkt.",
            benefits: [
              "Consistente bedrijfsinformatie overal",
              "Bespaar tijd op handmatige updates",
              "Verbeter lokale SEO rankings",
              "Vermijd verwarrende klantinformatie"
            ],
            features: [
              "Multi-platform synchronisatie",
              "Automatische updates",
              "Lokale SEO optimalisatie",
              "Monitoring en rapportage"
            ],
            process: [
              "Audit van huidige online aanwezigheid",
              "Bedrijfsgegevens verzamelen en verifiëren",
              "Implementatie op alle platforms",
              "Doorlopende synchronisatie en monitoring"
            ]
          },
          EN: {
            title: "NetSync - Business Info Synchronization",
            subtitle: "Keep your business information up-to-date everywhere",
            description: "NetSync ensures your business information is consistent across all online platforms - from Google to social media and industry directories. One change, updated everywhere.",
            benefits: [
              "Consistent business information everywhere",
              "Save time on manual updates",
              "Improve local SEO rankings",
              "Avoid confusing customer information"
            ],
            features: [
              "Multi-platform synchronization",
              "Automatic updates",
              "Local SEO optimization",
              "Monitoring and reporting"
            ],
            process: [
              "Audit of current online presence",
              "Collect and verify business data",
              "Implementation across all platforms",
              "Ongoing synchronization and monitoring"
            ]
          },
          FR: {
            title: "NetSync - Synchronisation des Informations",
            subtitle: "Gardez vos informations d'entreprise à jour partout",
            description: "NetSync garantit que vos informations sont cohérentes sur toutes les plateformes en ligne - de Google aux réseaux sociaux et annuaires. Une modification, mise à jour partout.",
            benefits: [
              "Informations d'entreprise cohérentes partout",
              "Gagnez du temps sur les mises à jour manuelles",
              "Améliorez le classement SEO local",
              "Évitez les informations client confuses"
            ],
            features: [
              "Synchronisation multi-plateforme",
              "Mises à jour automatiques",
              "Optimisation SEO local",
              "Surveillance et rapports"
            ],
            process: [
              "Audit de la présence en ligne actuelle",
              "Collecter et vérifier les données d'entreprise",
              "Implémentation sur toutes les plateformes",
              "Synchronisation et surveillance continues"
            ]
          },
          PL: {
            title: "NetSync - Synchronizacja Informacji Firmowych",
            subtitle: "Aktualizuj informacje o firmie wszędzie",
            description: "NetSync zapewnia spójność informacji o firmie na wszystkich platformach - od Google po media społecznościowe i katalogi. Jedna zmiana, aktualizacja wszędzie.",
            benefits: [
              "Spójne informacje o firmie wszędzie",
              "Oszczędność czasu na ręcznych aktualizacjach",
              "Poprawa lokalnych rankingów SEO",
              "Unikaj mylących informacji dla klientów"
            ],
            features: [
              "Synchronizacja na wielu platformach",
              "Automatyczne aktualizacje",
              "Lokalna optymalizacja SEO",
              "Monitoring i raportowanie"
            ],
            process: [
              "Audyt obecności online",
              "Zbieranie i weryfikacja danych firmowych",
              "Wdrożenie na wszystkich platformach",
              "Ciągła synchronizacja i monitoring"
            ]
          },
          RU: {
            title: "NetSync - Синхронизация Бизнес-Информации",
            subtitle: "Поддерживайте актуальность информации везде",
            description: "NetSync обеспечивает согласованность бизнес-информации на всех онлайн-платформах - от Google до социальных сетей и каталогов. Одно изменение, обновление везде.",
            benefits: [
              "Согласованная информация о бизнесе везде",
              "Экономия времени на ручных обновлениях",
              "Улучшение локального SEO",
              "Избегайте путаницы в информации для клиентов"
            ],
            features: [
              "Мультиплатформенная синхронизация",
              "Автоматические обновления",
              "Локальная SEO оптимизация",
              "Мониторинг и отчетность"
            ],
            process: [
              "Аудит текущего онлайн-присутствия",
              "Сбор и проверка бизнес-данных",
              "Внедрение на всех платформах",
              "Постоянная синхронизация и мониторинг"
            ]
          },
          DE: {
            title: "NetSync - Geschäftsinformationen Synchronisation",
            subtitle: "Halten Sie Ihre Geschäftsinformationen überall aktuell",
            description: "NetSync stellt sicher, dass Ihre Geschäftsinformationen auf allen Online-Plattformen konsistent sind - von Google bis zu sozialen Medien und Branchenverzeichnissen. Eine Änderung, überall aktualisiert.",
            benefits: [
              "Konsistente Geschäftsinformationen überall",
              "Sparen Sie Zeit bei manuellen Updates",
              "Verbessern Sie lokale SEO-Rankings",
              "Vermeiden Sie verwirrende Kundeninformationen"
            ],
            features: [
              "Multi-Plattform-Synchronisation",
              "Automatische Updates",
              "Lokale SEO-Optimierung",
              "Überwachung und Berichterstattung"
            ],
            process: [
              "Audit der aktuellen Online-Präsenz",
              "Geschäftsdaten sammeln und verifizieren",
              "Implementierung auf allen Plattformen",
              "Laufende Synchronisation und Überwachung"
            ]
          },
          ES: {
            title: "NetSync - Sincronización de Información Empresarial",
            subtitle: "Mantén tu información empresarial actualizada en todas partes",
            description: "NetSync asegura que tu información empresarial sea consistente en todas las plataformas en línea - desde Google hasta redes sociales y directorios. Un cambio, actualizado en todas partes.",
            benefits: [
              "Información empresarial consistente en todas partes",
              "Ahorra tiempo en actualizaciones manuales",
              "Mejora el ranking SEO local",
              "Evita información confusa para clientes"
            ],
            features: [
              "Sincronización multiplataforma",
              "Actualizaciones automáticas",
              "Optimización SEO local",
              "Monitoreo y reportes"
            ],
            process: [
              "Auditoría de presencia online actual",
              "Recopilar y verificar datos empresariales",
              "Implementación en todas las plataformas",
              "Sincronización y monitoreo continuo"
            ]
          },
          IT: {
            title: "NetSync - Sincronizzazione Informazioni Aziendali",
            subtitle: "Mantieni le tue informazioni aziendali aggiornate ovunque",
            description: "NetSync garantisce che le tue informazioni aziendali siano coerenti su tutte le piattaforme online - da Google ai social media e directory. Una modifica, aggiornamento ovunque.",
            benefits: [
              "Informazioni aziendali coerenti ovunque",
              "Risparmia tempo sugli aggiornamenti manuali",
              "Migliora il ranking SEO locale",
              "Evita informazioni confuse per i clienti"
            ],
            features: [
              "Sincronizzazione multi-piattaforma",
              "Aggiornamenti automatici",
              "Ottimizzazione SEO locale",
              "Monitoraggio e reportistica"
            ],
            process: [
              "Audit della presenza online attuale",
              "Raccolta e verifica dati aziendali",
              "Implementazione su tutte le piattaforme",
              "Sincronizzazione e monitoraggio continuo"
            ]
          },
          UK: {
            title: "NetSync - Синхронізація Бізнес-Інформації",
            subtitle: "Підтримуйте актуальність інформації скрізь",
            description: "NetSync забезпечує узгодженість бізнес-інформації на всіх онлайн-платформах - від Google до соціальних мереж і каталогів. Одна зміна, оновлення скрізь.",
            benefits: [
              "Узгоджена інформація про бізнес скрізь",
              "Економія часу на ручних оновленнях",
              "Покращення локального SEO",
              "Уникайте плутанини в інформації для клієнтів"
            ],
            features: [
              "Мультиплатформна синхронізація",
              "Автоматичні оновлення",
              "Локальна SEO оптимізація",
              "Моніторинг та звітність"
            ],
            process: [
              "Аудит поточної онлайн-присутності",
              "Збір та перевірка бізнес-даних",
              "Впровадження на всіх платформах",
              "Постійна синхронізація та моніторинг"
            ]
          },
          TR: {
            title: "NetSync - İşletme Bilgisi Senkronizasyonu",
            subtitle: "İşletme bilgilerinizi her yerde güncel tutun",
            description: "NetSync, işletme bilgilerinizin tüm çevrimiçi platformlarda tutarlı olmasını sağlar - Google'dan sosyal medyaya ve sektör rehberlerine. Bir değişiklik, her yerde güncellenir.",
            benefits: [
              "Her yerde tutarlı işletme bilgisi",
              "Manuel güncellemelerde zaman tasarrufu",
              "Yerel SEO sıralamalarını iyileştirin",
              "Kafa karıştırıcı müşteri bilgilerinden kaçının"
            ],
            features: [
              "Çok platformlu senkronizasyon",
              "Otomatik güncellemeler",
              "Yerel SEO optimizasyonu",
              "İzleme ve raporlama"
            ],
            process: [
              "Mevcut çevrimiçi varlık denetimi",
              "İşletme verilerini toplama ve doğrulama",
              "Tüm platformlarda uygulama",
              "Sürekli senkronizasyon ve izleme"
            ]
          },
          SV: {
            title: "NetSync - Synkronisering av Företagsinformation",
            subtitle: "Håll din företagsinformation uppdaterad överallt",
            description: "NetSync säkerställer att din företagsinformation är konsekvent på alla online-plattformar - från Google till sociala medier och branschkataloger. En ändring, uppdaterad överallt.",
            benefits: [
              "Konsekvent företagsinformation överallt",
              "Spara tid på manuella uppdateringar",
              "Förbättra lokala SEO-rankningar",
              "Undvik förvirrande kundinformation"
            ],
            features: [
              "Multi-plattforms synkronisering",
              "Automatiska uppdateringar",
              "Lokal SEO-optimering",
              "Övervakning och rapportering"
            ],
            process: [
              "Granskning av nuvarande online-närvaro",
              "Samla och verifiera företagsdata",
              "Implementering på alla plattformar",
              "Löpande synkronisering och övervakning"
            ]
          },
          ZH: {
            title: "NetSync - 企业信息同步",
            subtitle: "让您的企业信息随处保持最新",
            description: "NetSync确保您的企业信息在所有在线平台上保持一致 - 从Google到社交媒体和行业目录。一次更改，处处更新。",
            benefits: [
              "企业信息随处一致",
              "节省手动更新时间",
              "提升本地SEO排名",
              "避免客户信息混乱"
            ],
            features: [
              "多平台同步",
              "自动更新",
              "本地SEO优化",
              "监控和报告"
            ],
            process: [
              "当前在线存在审计",
              "收集和验证企业数据",
              "在所有平台上实施",
              "持续同步和监控"
            ]
          },
          FI: {
            title: "NetSync - Yritystietojen Synkronointi",
            subtitle: "Pidä yritystietosi ajan tasalla kaikkialla",
            description: "NetSync varmistaa, että yritystietosi ovat johdonmukaiset kaikilla verkkoalustoilla - Googlesta sosiaaliseen mediaan ja toimialaluetteloihin. Yksi muutos, päivitetty kaikkialla.",
            benefits: [
              "Johdonmukaiset yritystiedot kaikkialla",
              "Säästä aikaa manuaalisissa päivityksissä",
              "Paranna paikallisia SEO-sijoituksia",
              "Vältä hämmentävää asiakastietoa"
            ],
            features: [
              "Monialustasynkronointi",
              "Automaattiset päivitykset",
              "Paikallinen SEO-optimointi",
              "Seuranta ja raportointi"
            ],
            process: [
              "Nykyisen verkkoläsnäolon tarkastus",
              "Yritystietojen kerääminen ja tarkistaminen",
              "Käyttöönotto kaikilla alustoilla",
              "Jatkuva synkronointi ja seuranta"
            ]
          },
          AR: {
            title: "NetSync - مزامنة معلومات الأعمال",
            subtitle: "حافظ على تحديث معلومات عملك في كل مكان",
            description: "يضمن NetSync أن تكون معلومات عملك متسقة عبر جميع المنصات عبر الإنترنت - من Google إلى وسائل التواصل الاجتماعي والأدلة. تغيير واحد، تحديث في كل مكان.",
            benefits: [
              "معلومات أعمال متسقة في كل مكان",
              "وفر الوقت على التحديثات اليدوية",
              "حسّن تصنيفات SEO المحلية",
              "تجنب معلومات العملاء المربكة"
            ],
            features: [
              "مزامنة متعددة المنصات",
              "تحديثات تلقائية",
              "تحسين SEO المحلي",
              "المراقبة والتقارير"
            ],
            process: [
              "تدقيق التواجد الحالي عبر الإنترنت",
              "جمع والتحقق من بيانات الأعمال",
              "التنفيذ عبر جميع المنصات",
              "المزامنة والمراقبة المستمرة"
            ]
          },
          DA: {
            title: "NetSync - Synkronisering af Virksomhedsinfo",
            subtitle: "Hold dine virksomhedsoplysninger opdateret overalt",
            description: "NetSync sikrer, at dine virksomhedsoplysninger er konsistente på alle online platforme - fra Google til sociale medier og brancheguider. Én ændring, opdateret overalt.",
            benefits: [
              "Konsistent virksomhedsinformation overalt",
              "Spar tid på manuelle opdateringer",
              "Forbedre lokale SEO-placeringer",
              "Undgå forvirrende kundeinformation"
            ],
            features: [
              "Multi-platform synkronisering",
              "Automatiske opdateringer",
              "Lokal SEO-optimering",
              "Overvågning og rapportering"
            ],
            process: [
              "Revision af nuværende online tilstedeværelse",
              "Indsamle og verificere virksomhedsdata",
              "Implementering på alle platforme",
              "Løbende synkronisering og overvågning"
            ]
          },
          NO: {
            title: "NetSync - Synkronisering av Bedriftsinformasjon",
            subtitle: "Hold bedriftsinformasjonen din oppdatert overalt",
            description: "NetSync sikrer at bedriftsinformasjonen din er konsistent på alle nettplattformer - fra Google til sosiale medier og bransjekataloger. Én endring, oppdatert overalt.",
            benefits: [
              "Konsistent bedriftsinformasjon overalt",
              "Spar tid på manuelle oppdateringer",
              "Forbedre lokale SEO-rangeringer",
              "Unngå forvirrende kundeinformasjon"
            ],
            features: [
              "Multi-plattform synkronisering",
              "Automatiske oppdateringer",
              "Lokal SEO-optimalisering",
              "Overvåking og rapportering"
            ],
            process: [
              "Revisjon av nåværende online tilstedeværelse",
              "Samle og verifisere bedriftsdata",
              "Implementering på alle plattformer",
              "Løpende synkronisering og overvåking"
            ]
          }
        }
      },
      {
        name: "Site",
        slug: "site",
        icon: Monitor,
        description: "Simple and effective landing page",
        category: "being-online",
        content: {
          NL: {
            title: "Site - Eenvoudige Landingspagina",
            subtitle: "Een effectieve online aanwezigheid zonder gedoe",
            description: "Niet elk bedrijf heeft een uitgebreide website nodig. Met Site krijg je een professionele landingspagina die al je belangrijkste bedrijfsinformatie bundelt op één plek.",
            benefits: [
              "Snelle lancering van je online aanwezigheid",
              "Alle belangrijke info op één plek",
              "Mobiel-vriendelijk en snel",
              "Kosteneffectief voor startende ondernemers"
            ],
            features: [
              "Professioneel ontwerp",
              "Contactformulier integratie",
              "Responsief voor alle apparaten",
              "Basis SEO optimalisatie"
            ],
            process: [
              "Intake en contentverzameling",
              "Ontwerp en lay-out",
              "Bouw en optimalisatie",
              "Lancering en training"
            ]
          },
          EN: {
            title: "Site - Simple Landing Page",
            subtitle: "An effective online presence without the hassle",
            description: "Not every business needs an extensive website. With Site, you get a professional landing page that bundles all your key business information in one place.",
            benefits: [
              "Quick launch of your online presence",
              "All important info in one place",
              "Mobile-friendly and fast",
              "Cost-effective for starting entrepreneurs"
            ],
            features: [
              "Professional design",
              "Contact form integration",
              "Responsive for all devices",
              "Basic SEO optimization"
            ],
            process: [
              "Intake and content collection",
              "Design and layout",
              "Build and optimization",
              "Launch and training"
            ]
          },
          FR: {
            title: "Site - Page d'Atterrissage Simple",
            subtitle: "Une présence en ligne efficace sans tracas",
            description: "Chaque entreprise n'a pas besoin d'un site web complet. Avec Site, vous obtenez une page professionnelle qui regroupe toutes vos informations clés en un seul endroit.",
            benefits: [
              "Lancement rapide de votre présence en ligne",
              "Toutes les infos importantes en un seul endroit",
              "Adapté aux mobiles et rapide",
              "Rentable pour les entrepreneurs débutants"
            ],
            features: [
              "Design professionnel",
              "Intégration de formulaire de contact",
              "Responsive pour tous les appareils",
              "Optimisation SEO de base"
            ],
            process: [
              "Admission et collecte de contenu",
              "Design et mise en page",
              "Construction et optimisation",
              "Lancement et formation"
            ]
          },
          PL: {
            title: "Site - Prosta Strona Docelowa",
            subtitle: "Skuteczna obecność online bez komplikacji",
            description: "Nie każda firma potrzebuje rozbudowanej strony internetowej. Dzięki Site otrzymasz profesjonalną stronę docelową, która zbiera wszystkie kluczowe informacje o firmie w jednym miejscu.",
            benefits: [
              "Szybkie uruchomienie obecności online",
              "Wszystkie ważne informacje w jednym miejscu",
              "Przyjazny dla urządzeń mobilnych i szybki",
              "Opłacalny dla początkujących przedsiębiorców"
            ],
            features: [
              "Profesjonalny design",
              "Integracja formularza kontaktowego",
              "Responsywność na wszystkich urządzeniach",
              "Podstawowa optymalizacja SEO"
            ],
            process: [
              "Przyjęcie i zbieranie treści",
              "Projekt i układ",
              "Budowa i optymalizacja",
              "Uruchomienie i szkolenie"
            ]
          },
          RU: {
            title: "Site - Простая Целевая Страница",
            subtitle: "Эффективное онлайн-присутствие без хлопот",
            description: "Не каждому бизнесу нужен обширный веб-сайт. С Site вы получаете профессиональную целевую страницу, которая объединяет всю ключевую бизнес-информацию в одном месте.",
            benefits: [
              "Быстрый запуск онлайн-присутствия",
              "Вся важная информация в одном месте",
              "Мобильный и быстрый",
              "Экономичный для начинающих предпринимателей"
            ],
            features: [
              "Профессиональный дизайн",
              "Интеграция контактной формы",
              "Адаптивность для всех устройств",
              "Базовая SEO оптимизация"
            ],
            process: [
              "Прием и сбор контента",
              "Дизайн и макет",
              "Сборка и оптимизация",
              "Запуск и обучение"
            ]
          },
          DE: {
            title: "Site - Einfache Landingpage",
            subtitle: "Eine effektive Online-Präsenz ohne Aufwand",
            description: "Nicht jedes Unternehmen braucht eine umfangreiche Website. Mit Site erhalten Sie eine professionelle Landingpage, die alle wichtigen Geschäftsinformationen an einem Ort bündelt.",
            benefits: [
              "Schneller Start Ihrer Online-Präsenz",
              "Alle wichtigen Infos an einem Ort",
              "Mobilfreundlich und schnell",
              "Kostengünstig für Gründer"
            ],
            features: [
              "Professionelles Design",
              "Kontaktformular-Integration",
              "Responsiv für alle Geräte",
              "Grundlegende SEO-Optimierung"
            ],
            process: [
              "Aufnahme und Inhaltssammlung",
              "Design und Layout",
              "Erstellung und Optimierung",
              "Launch und Schulung"
            ]
          },
          ES: {
            title: "Site - Página de Aterrizaje Simple",
            subtitle: "Una presencia online efectiva sin complicaciones",
            description: "No toda empresa necesita un sitio web extenso. Con Site, obtienes una página de aterrizaje profesional que reúne toda tu información empresarial clave en un solo lugar.",
            benefits: [
              "Lanzamiento rápido de tu presencia online",
              "Toda la información importante en un lugar",
              "Compatible con móviles y rápido",
              "Económico para emprendedores"
            ],
            features: [
              "Diseño profesional",
              "Integración de formulario de contacto",
              "Responsive para todos los dispositivos",
              "Optimización SEO básica"
            ],
            process: [
              "Admisión y recopilación de contenido",
              "Diseño y maquetación",
              "Construcción y optimización",
              "Lanzamiento y capacitación"
            ]
          },
          IT: {
            title: "Site - Landing Page Semplice",
            subtitle: "Una presenza online efficace senza complicazioni",
            description: "Non tutte le aziende hanno bisogno di un sito web esteso. Con Site, ottieni una landing page professionale che raccoglie tutte le informazioni chiave in un unico posto.",
            benefits: [
              "Lancio rapido della presenza online",
              "Tutte le info importanti in un posto",
              "Mobile-friendly e veloce",
              "Conveniente per imprenditori agli inizi"
            ],
            features: [
              "Design professionale",
              "Integrazione modulo contatto",
              "Responsive per tutti i dispositivi",
              "Ottimizzazione SEO di base"
            ],
            process: [
              "Intake e raccolta contenuti",
              "Design e layout",
              "Costruzione e ottimizzazione",
              "Lancio e formazione"
            ]
          },
          UK: {
            title: "Site - Проста Цільова Сторінка",
            subtitle: "Ефективна онлайн-присутність без клопоту",
            description: "Не кожному бізнесу потрібен великий веб-сайт. З Site ви отримуєте професійну цільову сторінку, яка об'єднує всю ключову бізнес-інформацію в одному місці.",
            benefits: [
              "Швидкий запуск онлайн-присутності",
              "Вся важлива інформація в одному місці",
              "Мобільний та швидкий",
              "Економічний для початківців"
            ],
            features: [
              "Професійний дизайн",
              "Інтеграція контактної форми",
              "Адаптивність для всіх пристроїв",
              "Базова SEO оптимізація"
            ],
            process: [
              "Прийом та збір контенту",
              "Дизайн та макет",
              "Збірка та оптимізація",
              "Запуск та навчання"
            ]
          },
          TR: {
            title: "Site - Basit Açılış Sayfası",
            subtitle: "Zahmetsiz etkili bir çevrimiçi varlık",
            description: "Her işletmenin kapsamlı bir web sitesine ihtiyacı yoktur. Site ile tüm önemli işletme bilgilerinizi tek bir yerde toplayan profesyonel bir açılış sayfası alırsınız.",
            benefits: [
              "Çevrimiçi varlığınızı hızlı başlatma",
              "Tüm önemli bilgiler tek yerde",
              "Mobil uyumlu ve hızlı",
              "Girişimciler için uygun maliyetli"
            ],
            features: [
              "Profesyonel tasarım",
              "İletişim formu entegrasyonu",
              "Tüm cihazlara uyumlu",
              "Temel SEO optimizasyonu"
            ],
            process: [
              "Kabul ve içerik toplama",
              "Tasarım ve düzen",
              "Yapım ve optimizasyon",
              "Lansman ve eğitim"
            ]
          },
          SV: {
            title: "Site - Enkel Landningssida",
            subtitle: "En effektiv online-närvaro utan krångel",
            description: "Inte varje företag behöver en omfattande webbplats. Med Site får du en professionell landningssida som samlar all viktig företagsinformation på ett ställe.",
            benefits: [
              "Snabb lansering av din online-närvaro",
              "All viktig info på ett ställe",
              "Mobilvänlig och snabb",
              "Kostnadseffektiv för nystartade företag"
            ],
            features: [
              "Professionell design",
              "Kontaktformulärintegration",
              "Responsiv för alla enheter",
              "Grundläggande SEO-optimering"
            ],
            process: [
              "Intake och innehållsinsamling",
              "Design och layout",
              "Byggnad och optimering",
              "Lansering och utbildning"
            ]
          },
          ZH: {
            title: "Site - 简单落地页",
            subtitle: "轻松高效的在线展示",
            description: "并非每个企业都需要复杂的网站。通过Site，您将获得一个专业的落地页，将所有关键业务信息汇集在一个地方。",
            benefits: [
              "快速启动您的在线展示",
              "所有重要信息集中一处",
              "移动友好且快速",
              "对初创企业经济实惠"
            ],
            features: [
              "专业设计",
              "联系表单集成",
              "适配所有设备",
              "基础SEO优化"
            ],
            process: [
              "接收和内容收集",
              "设计和布局",
              "构建和优化",
              "上线和培训"
            ]
          },
          FI: {
            title: "Site - Yksinkertainen Laskeutumissivu",
            subtitle: "Tehokas verkkonäkyvyys vaivattomasti",
            description: "Jokainen yritys ei tarvitse laajaa verkkosivustoa. Site tarjoaa ammattimaisen laskeutumissivun, joka kokoaa kaikki tärkeät yritystiedot yhteen paikkaan.",
            benefits: [
              "Nopea verkkonäkyvyyden käynnistys",
              "Kaikki tärkeät tiedot yhdessä paikassa",
              "Mobiiliystävällinen ja nopea",
              "Kustannustehokas aloittaville yrittäjille"
            ],
            features: [
              "Ammattimainen suunnittelu",
              "Yhteydenottolomakkeen integrointi",
              "Responsiivinen kaikille laitteille",
              "Perus SEO-optimointi"
            ],
            process: [
              "Vastaanotto ja sisällönkeruu",
              "Suunnittelu ja asettelu",
              "Rakennus ja optimointi",
              "Julkaisu ja koulutus"
            ]
          },
          AR: {
            title: "Site - صفحة هبوط بسيطة",
            subtitle: "تواجد فعال على الإنترنت بدون متاعب",
            description: "ليس كل عمل يحتاج إلى موقع ويب شامل. مع Site، تحصل على صفحة هبوط احترافية تجمع جميع معلومات عملك الرئيسية في مكان واحد.",
            benefits: [
              "إطلاق سريع لتواجدك على الإنترنت",
              "جميع المعلومات المهمة في مكان واحد",
              "متوافق مع الجوال وسريع",
              "فعال من حيث التكلفة للمبتدئين"
            ],
            features: [
              "تصميم احترافي",
              "تكامل نموذج الاتصال",
              "متجاوب لجميع الأجهزة",
              "تحسين SEO أساسي"
            ],
            process: [
              "الاستقبال وجمع المحتوى",
              "التصميم والتخطيط",
              "البناء والتحسين",
              "الإطلاق والتدريب"
            ]
          },
          DA: {
            title: "Site - Simpel Landingsside",
            subtitle: "En effektiv online tilstedeværelse uden besvær",
            description: "Ikke alle virksomheder har brug for en omfattende hjemmeside. Med Site får du en professionel landingsside, der samler alle vigtige virksomhedsoplysninger ét sted.",
            benefits: [
              "Hurtig lancering af din online tilstedeværelse",
              "Alle vigtige oplysninger ét sted",
              "Mobilvenlig og hurtig",
              "Omkostningseffektiv for nye iværksættere"
            ],
            features: [
              "Professionelt design",
              "Kontaktformular integration",
              "Responsiv for alle enheder",
              "Grundlæggende SEO-optimering"
            ],
            process: [
              "Intake og indholdsindsamling",
              "Design og layout",
              "Opbygning og optimering",
              "Lancering og træning"
            ]
          },
          NO: {
            title: "Site - Enkel Landingsside",
            subtitle: "En effektiv online tilstedeværelse uten bry",
            description: "Ikke alle bedrifter trenger et omfattende nettsted. Med Site får du en profesjonell landingsside som samler all viktig bedriftsinformasjon på ett sted.",
            benefits: [
              "Rask lansering av din online tilstedeværelse",
              "All viktig info på ett sted",
              "Mobilvennlig og rask",
              "Kostnadseffektiv for nye gründere"
            ],
            features: [
              "Profesjonell design",
              "Kontaktskjema integrasjon",
              "Responsiv for alle enheter",
              "Grunnleggende SEO-optimalisering"
            ],
            process: [
              "Inntak og innholdsinnsamling",
              "Design og layout",
              "Bygging og optimalisering",
              "Lansering og opplæring"
            ]
          }
        }
      }
    ]
  },
  {
    title: "TO BE FOUND",
    items: [
      {
        name: "SEO",
        slug: "seo",
        icon: Search,
        description: "For a website that is easy to find",
        category: "to-be-found",
        content: {
          NL: {
            title: "Zoekmachine Optimalisatie (SEO)",
            subtitle: "Voor een website die makkelijk te vinden is",
            description: "SEO zorgt ervoor dat jouw website hoger scoort in Google en andere zoekmachines. Door strategische optimalisaties trekken we meer organisch verkeer naar je website en verhogen we je online zichtbaarheid.",
            benefits: [
              "Hogere positie in zoekresultaten",
              "Meer organisch website verkeer",
              "Verhoogde online zichtbaarheid", 
              "Betere ROI dan betaalde advertenties"
            ],
            features: [
              "Keyword research en strategie",
              "On-page en technische optimalisatie",
              "Content optimalisatie en creatie",
              "Link building en authority opbouw"
            ],
            process: [
              "SEO audit en concurrentieanalyse",
              "Keyword strategie ontwikkeling",
              "Implementatie van optimalisaties",
              "Monitoring en rapportage"
            ]
          },
          FR: {
            title: "Optimisation des Moteurs de Recherche (SEO)",
            subtitle: "Pour un site web facile à trouver",
            description: "Le SEO garantit que votre site web obtient un meilleur classement sur Google et d'autres moteurs de recherche. Grâce à des optimisations stratégiques, nous attirons plus de trafic organique vers votre site web et augmentons votre visibilité en ligne.",
            benefits: [
              "Position plus élevée dans les résultats de recherche",
              "Plus de trafic organique sur le site web",
              "Visibilité en ligne accrue",
              "Meilleur ROI que la publicité payante"
            ],
            features: [
              "Recherche de mots-clés et stratégie",
              "Optimisation on-page et technique",
              "Optimisation et création de contenu",
              "Link building et développement d'autorité"
            ],
            process: [
              "Audit SEO et analyse concurrentielle",
              "Développement de stratégie de mots-clés",
              "Implémentation des optimisations",
              "Monitoring et reporting"
            ]
          },
          EN: {
            title: "Search Engine Optimization (SEO)",
            subtitle: "For a website that is easy to find",
            description: "SEO ensures that your website ranks higher on Google and other search engines. Through strategic optimizations, we attract more organic traffic to your website and increase your online visibility.",
            benefits: [
              "Higher position in search results",
              "More organic website traffic",
              "Increased online visibility",
              "Better ROI than paid advertising"
            ],
            features: [
              "Keyword research and strategy",
              "On-page and technical optimization",
              "Content optimization and creation",
              "Link building and authority development"
            ],
            process: [
              "SEO audit and competitive analysis",
              "Keyword strategy development",
              "Implementation of optimizations",
              "Monitoring and reporting"
            ]
          },
          PL: {
            title: "Optymalizacja dla Wyszukiwarek (SEO)",
            subtitle: "Dla strony łatwej do znalezienia",
            description: "SEO zapewnia, że Twoja strona zajmuje wyższe pozycje w Google i innych wyszukiwarkach. Poprzez strategiczne optymalizacje przyciągamy więcej organicznego ruchu na Twoją stronę i zwiększamy Twoją widoczność online.",
            benefits: [
              "Wyższa pozycja w wynikach wyszukiwania",
              "Więcej organicznego ruchu na stronie",
              "Zwiększona widoczność online",
              "Lepszy ROI niż płatne reklamy"
            ],
            features: [
              "Badanie słów kluczowych i strategia",
              "Optymalizacja on-page i techniczna",
              "Optymalizacja i tworzenie treści",
              "Link building i budowanie autorytetu"
            ],
            process: [
              "Audyt SEO i analiza konkurencji",
              "Rozwój strategii słów kluczowych",
              "Wdrożenie optymalizacji",
              "Monitoring i raportowanie"
            ]
          },
          RU: {
            title: "Поисковая Оптимизация (SEO)",
            subtitle: "Для сайта, который легко найти",
            description: "SEO обеспечивает более высокий рейтинг вашего сайта в Google и других поисковых системах. Благодаря стратегическим оптимизациям мы привлекаем больше органического трафика на ваш сайт и увеличиваем вашу онлайн-видимость.",
            benefits: [
              "Более высокая позиция в результатах поиска",
              "Больше органического трафика на сайт",
              "Повышенная онлайн-видимость",
              "Лучший ROI, чем у платной рекламы"
            ],
            features: [
              "Исследование ключевых слов и стратегия",
              "On-page и техническая оптимизация",
              "Оптимизация и создание контента",
              "Link building и развитие авторитета"
            ],
            process: [
              "SEO-аудит и анализ конкурентов",
              "Разработка стратегии ключевых слов",
              "Внедрение оптимизаций",
              "Мониторинг и отчетность"
            ]
          },
          DE: {
            title: "Suchmaschinenoptimierung (SEO)",
            subtitle: "Für eine leicht auffindbare Website",
            description: "SEO sorgt dafür, dass Ihre Website bei Google und anderen Suchmaschinen höher rankt. Durch strategische Optimierungen ziehen wir mehr organischen Traffic auf Ihre Website und erhöhen Ihre Online-Sichtbarkeit.",
            benefits: [
              "Höhere Position in den Suchergebnissen",
              "Mehr organischer Website-Traffic",
              "Erhöhte Online-Sichtbarkeit",
              "Besserer ROI als bezahlte Werbung"
            ],
            features: [
              "Keyword-Recherche und Strategie",
              "On-Page und technische Optimierung",
              "Content-Optimierung und -Erstellung",
              "Linkbuilding und Autoritätsaufbau"
            ],
            process: [
              "SEO-Audit und Wettbewerbsanalyse",
              "Keyword-Strategieentwicklung",
              "Implementierung von Optimierungen",
              "Monitoring und Reporting"
            ]
          },
          ES: {
            title: "Optimización de Motores de Búsqueda (SEO)",
            subtitle: "Para un sitio web fácil de encontrar",
            description: "El SEO garantiza que tu sitio web se posicione más alto en Google y otros motores de búsqueda. A través de optimizaciones estratégicas, atraemos más tráfico orgánico a tu sitio web y aumentamos tu visibilidad online.",
            benefits: [
              "Mayor posición en resultados de búsqueda",
              "Más tráfico orgánico al sitio web",
              "Mayor visibilidad online",
              "Mejor ROI que la publicidad pagada"
            ],
            features: [
              "Investigación de palabras clave y estrategia",
              "Optimización on-page y técnica",
              "Optimización y creación de contenido",
              "Link building y desarrollo de autoridad"
            ],
            process: [
              "Auditoría SEO y análisis competitivo",
              "Desarrollo de estrategia de palabras clave",
              "Implementación de optimizaciones",
              "Monitoreo y reportes"
            ]
          },
          IT: {
            title: "Ottimizzazione per i Motori di Ricerca (SEO)",
            subtitle: "Per un sito web facile da trovare",
            description: "Il SEO garantisce che il tuo sito web si posizioni più in alto su Google e altri motori di ricerca. Attraverso ottimizzazioni strategiche, attiriamo più traffico organico al tuo sito web e aumentiamo la tua visibilità online.",
            benefits: [
              "Posizione più alta nei risultati di ricerca",
              "Più traffico organico al sito web",
              "Maggiore visibilità online",
              "Migliore ROI rispetto alla pubblicità a pagamento"
            ],
            features: [
              "Ricerca di parole chiave e strategia",
              "Ottimizzazione on-page e tecnica",
              "Ottimizzazione e creazione di contenuti",
              "Link building e sviluppo dell'autorità"
            ],
            process: [
              "Audit SEO e analisi competitiva",
              "Sviluppo della strategia delle parole chiave",
              "Implementazione delle ottimizzazioni",
              "Monitoraggio e reporting"
            ]
          },
          UK: {
            title: "Пошукова Оптимізація (SEO)",
            subtitle: "Для сайту, який легко знайти",
            description: "SEO забезпечує вищий рейтинг вашого сайту в Google та інших пошукових системах. Завдяки стратегічним оптимізаціям ми залучаємо більше органічного трафіку на ваш сайт та підвищуємо вашу онлайн-видимість.",
            benefits: [
              "Вища позиція в результатах пошуку",
              "Більше органічного трафіку на сайт",
              "Підвищена онлайн-видимість",
              "Кращий ROI, ніж у платної реклами"
            ],
            features: [
              "Дослідження ключових слів та стратегія",
              "On-page та технічна оптимізація",
              "Оптимізація та створення контенту",
              "Link building та розвиток авторитету"
            ],
            process: [
              "SEO-аудит та аналіз конкурентів",
              "Розробка стратегії ключових слів",
              "Впровадження оптимізацій",
              "Моніторинг та звітність"
            ]
          },
          TR: {
            title: "Arama Motoru Optimizasyonu (SEO)",
            subtitle: "Kolay bulunabilen bir web sitesi için",
            description: "SEO, web sitenizin Google ve diğer arama motorlarında daha üst sıralarda yer almasını sağlar. Stratejik optimizasyonlar aracılığıyla web sitenize daha fazla organik trafik çekiyor ve online görünürlüğünüzü artırıyoruz.",
            benefits: [
              "Arama sonuçlarında daha yüksek pozisyon",
              "Daha fazla organik web sitesi trafiği",
              "Artan online görünürlük",
              "Ücretli reklamlardan daha iyi ROI"
            ],
            features: [
              "Anahtar kelime araştırması ve strateji",
              "On-page ve teknik optimizasyon",
              "İçerik optimizasyonu ve oluşturma",
              "Link building ve otorite geliştirme"
            ],
            process: [
              "SEO denetimi ve rekabet analizi",
              "Anahtar kelime stratejisi geliştirme",
              "Optimizasyonların uygulanması",
              "İzleme ve raporlama"
            ]
          },
          SV: {
            title: "Sökmotoroptimering (SEO)",
            subtitle: "För en webbplats som är lätt att hitta",
            description: "SEO säkerställer att din webbplats rankas högre på Google och andra sökmotorer. Genom strategiska optimeringar attraherar vi mer organisk trafik till din webbplats och ökar din online-synlighet.",
            benefits: [
              "Högre position i sökresultat",
              "Mer organisk webbplatstrafik",
              "Ökad online-synlighet",
              "Bättre ROI än betald annonsering"
            ],
            features: [
              "Sökordsforskning och strategi",
              "On-page och teknisk optimering",
              "Innehållsoptimering och skapande",
              "Länkbyggande och auktoritetsutveckling"
            ],
            process: [
              "SEO-revision och konkurrensanalys",
              "Utveckling av sökordsstrategi",
              "Implementering av optimeringar",
              "Övervakning och rapportering"
            ]
          },
          ZH: {
            title: "搜索引擎优化（SEO）",
            subtitle: "让您的网站易于被找到",
            description: "SEO确保您的网站在Google和其他搜索引擎中排名更高。通过战略性优化，我们为您的网站吸引更多有机流量并提高您的在线可见度。",
            benefits: [
              "在搜索结果中获得更高位置",
              "更多的有机网站流量",
              "提高在线可见度",
              "比付费广告更好的投资回报率"
            ],
            features: [
              "关键词研究和策略",
              "页面和技术优化",
              "内容优化和创建",
              "链接建设和权威发展"
            ],
            process: [
              "SEO审计和竞争分析",
              "关键词策略开发",
              "实施优化",
              "监控和报告"
            ]
          },
          FI: {
            title: "Hakukoneoptimointi (SEO)",
            subtitle: "Helposti löydettävä verkkosivusto",
            description: "SEO varmistaa, että verkkosivustosi sijoittuu korkeammalle Googlessa ja muissa hakukoneissa. Strategisten optimointien avulla houkuttelemme enemmän orgaanista liikennettä verkkosivustollesi ja lisäämme online-näkyvyyttäsi.",
            benefits: [
              "Korkeampi sijoitus hakutuloksissa",
              "Enemmän orgaanista verkkosivustoliikennettä",
              "Lisääntynyt online-näkyvyys",
              "Parempi ROI kuin maksetulla mainonnalla"
            ],
            features: [
              "Avainsanatutkimus ja strategia",
              "On-page ja tekninen optimointi",
              "Sisällön optimointi ja luominen",
              "Linkkien rakentaminen ja auktoriteetin kehittäminen"
            ],
            process: [
              "SEO-auditointi ja kilpailija-analyysi",
              "Avainsanastrategian kehittäminen",
              "Optimointien toteutus",
              "Seuranta ja raportointi"
            ]
          },
          AR: {
            title: "تحسين محركات البحث (SEO)",
            subtitle: "لموقع ويب يسهل العثور عليه",
            description: "يضمن SEO أن يحتل موقعك الإلكتروني مرتبة أعلى في جوجل ومحركات البحث الأخرى. من خلال التحسينات الاستراتيجية، نجذب المزيد من الزيارات العضوية إلى موقعك ونزيد من ظهورك عبر الإنترنت.",
            benefits: [
              "موضع أعلى في نتائج البحث",
              "المزيد من الزيارات العضوية للموقع",
              "زيادة الظهور عبر الإنترنت",
              "عائد استثمار أفضل من الإعلانات المدفوعة"
            ],
            features: [
              "بحث الكلمات الرئيسية والاستراتيجية",
              "التحسين على الصفحة والتقني",
              "تحسين وإنشاء المحتوى",
              "بناء الروابط وتطوير السلطة"
            ],
            process: [
              "تدقيق SEO وتحليل المنافسين",
              "تطوير استراتيجية الكلمات الرئيسية",
              "تنفيذ التحسينات",
              "المراقبة والتقارير"
            ]
          },
          DA: {
            title: "Søgemaskineoptimering (SEO)",
            subtitle: "For en hjemmeside der er nem at finde",
            description: "SEO sikrer, at din hjemmeside rangerer højere på Google og andre søgemaskiner. Gennem strategiske optimeringer tiltrækker vi mere organisk trafik til din hjemmeside og øger din online synlighed.",
            benefits: [
              "Højere position i søgeresultater",
              "Mere organisk hjemmesidetrafik",
              "Øget online synlighed",
              "Bedre ROI end betalt annoncering"
            ],
            features: [
              "Søgeordsresearch og strategi",
              "On-page og teknisk optimering",
              "Indholdsoptimering og -oprettelse",
              "Linkbuilding og autoritetsudvikling"
            ],
            process: [
              "SEO-revision og konkurrenceanalyse",
              "Udvikling af søgeordsstrategi",
              "Implementering af optimeringer",
              "Overvågning og rapportering"
            ]
          },
          NO: {
            title: "Søkemotoroptimalisering (SEO)",
            subtitle: "For en nettside som er lett å finne",
            description: "SEO sikrer at nettsiden din rangerer høyere på Google og andre søkemotorer. Gjennom strategiske optimaliseringer tiltrekker vi mer organisk trafikk til nettsiden din og øker din online synlighet.",
            benefits: [
              "Høyere posisjon i søkeresultater",
              "Mer organisk nettsidetrafikk",
              "Økt online synlighet",
              "Bedre ROI enn betalt annonsering"
            ],
            features: [
              "Søkeordsanalyse og strategi",
              "On-page og teknisk optimalisering",
              "Innholdsoptimalisering og -skaping",
              "Linkbygging og autoritetsutvikling"
            ],
            process: [
              "SEO-revisjon og konkurrentanalyse",
              "Utvikling av søkeordsstrategi",
              "Implementering av optimaliseringer",
              "Overvåking og rapportering"
            ]
          }
        }
      },
      {
        name: "SEA",
        slug: "sea",
        icon: MousePointer,
        description: "Search Engine Advertising",
        category: "to-be-found",
        content: {
          NL: { title: "SEA - Zoekmachine Adverteren", subtitle: "Direct zichtbaar in Google zoekresultaten", description: "Met SEA advertenties verschijn je direct bovenaan Google. Betaal alleen voor klikken en bereik klanten die actief zoeken naar jouw producten of diensten.", benefits: ["Direct zichtbaar in Google", "Betaal alleen voor klikken", "Meetbare resultaten", "Flexibel budget beheer"], features: ["Google Ads campagnes", "Zoekwoord targeting", "Conversie tracking", "A/B testing advertenties"], process: ["Zoekwoordenonderzoek", "Campagne opzet", "Advertentie creatie", "Optimalisatie en rapportage"] },
          EN: { title: "SEA - Search Engine Advertising", subtitle: "Instantly visible in Google search results", description: "With SEA ads you appear directly at the top of Google. Pay only for clicks and reach customers actively searching for your products or services.", benefits: ["Instantly visible on Google", "Pay only for clicks", "Measurable results", "Flexible budget management"], features: ["Google Ads campaigns", "Keyword targeting", "Conversion tracking", "A/B testing ads"], process: ["Keyword research", "Campaign setup", "Ad creation", "Optimization and reporting"] },
          FR: { title: "SEA - Publicité sur Moteurs de Recherche", subtitle: "Visibilité instantanée dans les résultats Google", description: "Avec les annonces SEA, vous apparaissez directement en haut de Google. Payez uniquement pour les clics et atteignez les clients qui recherchent activement vos produits.", benefits: ["Visibilité instantanée sur Google", "Paiement uniquement au clic", "Résultats mesurables", "Gestion flexible du budget"], features: ["Campagnes Google Ads", "Ciblage par mots-clés", "Suivi des conversions", "Tests A/B des annonces"], process: ["Recherche de mots-clés", "Configuration de campagne", "Création d'annonces", "Optimisation et rapports"] },
          PL: { title: "SEA - Reklama w Wyszukiwarkach", subtitle: "Natychmiast widoczny w wynikach Google", description: "Dzięki reklamom SEA pojawisz się od razu na szczycie Google. Płać tylko za kliknięcia i docieraj do klientów aktywnie szukających Twoich produktów.", benefits: ["Natychmiastowa widoczność w Google", "Płać tylko za kliknięcia", "Mierzalne wyniki", "Elastyczne zarządzanie budżetem"], features: ["Kampanie Google Ads", "Targetowanie słów kluczowych", "Śledzenie konwersji", "Testy A/B reklam"], process: ["Badanie słów kluczowych", "Konfiguracja kampanii", "Tworzenie reklam", "Optymalizacja i raportowanie"] },
          RU: { title: "SEA - Поисковая Реклама", subtitle: "Мгновенная видимость в результатах Google", description: "С рекламой SEA вы появляетесь прямо в топе Google. Платите только за клики и достигайте клиентов, активно ищущих ваши продукты.", benefits: ["Мгновенная видимость в Google", "Оплата только за клики", "Измеримые результаты", "Гибкое управление бюджетом"], features: ["Кампании Google Ads", "Таргетинг по ключевым словам", "Отслеживание конверсий", "A/B тестирование рекламы"], process: ["Исследование ключевых слов", "Настройка кампании", "Создание рекламы", "Оптимизация и отчетность"] },
          DE: { title: "SEA - Suchmaschinenwerbung", subtitle: "Sofort sichtbar in Google Suchergebnissen", description: "Mit SEA-Anzeigen erscheinen Sie direkt oben bei Google. Zahlen Sie nur für Klicks und erreichen Sie Kunden, die aktiv nach Ihren Produkten suchen.", benefits: ["Sofort sichtbar bei Google", "Zahlen nur für Klicks", "Messbare Ergebnisse", "Flexibles Budgetmanagement"], features: ["Google Ads Kampagnen", "Keyword-Targeting", "Conversion-Tracking", "A/B-Testing von Anzeigen"], process: ["Keyword-Recherche", "Kampagnen-Setup", "Anzeigenerstellung", "Optimierung und Reporting"] },
          ES: { title: "SEA - Publicidad en Buscadores", subtitle: "Visibilidad instantánea en resultados de Google", description: "Con anuncios SEA apareces directamente arriba en Google. Paga solo por clics y alcanza clientes que buscan activamente tus productos.", benefits: ["Visibilidad instantánea en Google", "Paga solo por clics", "Resultados medibles", "Gestión flexible del presupuesto"], features: ["Campañas de Google Ads", "Segmentación por palabras clave", "Seguimiento de conversiones", "Pruebas A/B de anuncios"], process: ["Investigación de palabras clave", "Configuración de campaña", "Creación de anuncios", "Optimización y reportes"] },
          IT: { title: "SEA - Pubblicità sui Motori di Ricerca", subtitle: "Visibilità istantanea nei risultati Google", description: "Con gli annunci SEA appari direttamente in cima a Google. Paga solo per i clic e raggiungi clienti che cercano attivamente i tuoi prodotti.", benefits: ["Visibilità istantanea su Google", "Paga solo per i clic", "Risultati misurabili", "Gestione flessibile del budget"], features: ["Campagne Google Ads", "Targeting per parole chiave", "Monitoraggio conversioni", "Test A/B degli annunci"], process: ["Ricerca parole chiave", "Setup campagna", "Creazione annunci", "Ottimizzazione e reportistica"] },
          UK: { title: "SEA - Пошукова Реклама", subtitle: "Миттєва видимість у результатах Google", description: "З рекламою SEA ви з'являєтесь прямо в топі Google. Платіть лише за кліки та досягайте клієнтів, які активно шукають ваші продукти.", benefits: ["Миттєва видимість у Google", "Оплата лише за кліки", "Вимірювані результати", "Гнучке управління бюджетом"], features: ["Кампанії Google Ads", "Таргетинг за ключовими словами", "Відстеження конверсій", "A/B тестування реклами"], process: ["Дослідження ключових слів", "Налаштування кампанії", "Створення реклами", "Оптимізація та звітність"] },
          TR: { title: "SEA - Arama Motoru Reklamcılığı", subtitle: "Google arama sonuçlarında anında görünürlük", description: "SEA reklamlarıyla Google'da hemen en üstte görünürsünüz. Yalnızca tıklamalar için ödeme yapın ve ürünlerinizi aktif olarak arayan müşterilere ulaşın.", benefits: ["Google'da anında görünürlük", "Sadece tıklamalar için ödeme", "Ölçülebilir sonuçlar", "Esnek bütçe yönetimi"], features: ["Google Ads kampanyaları", "Anahtar kelime hedefleme", "Dönüşüm izleme", "A/B reklam testi"], process: ["Anahtar kelime araştırması", "Kampanya kurulumu", "Reklam oluşturma", "Optimizasyon ve raporlama"] },
          SV: { title: "SEA - Sökmotorannonsering", subtitle: "Omedelbart synlig i Google sökresultat", description: "Med SEA-annonser visas du direkt högst upp på Google. Betala endast för klick och nå kunder som aktivt söker efter dina produkter.", benefits: ["Omedelbart synlig på Google", "Betala endast för klick", "Mätbara resultat", "Flexibel budgethantering"], features: ["Google Ads-kampanjer", "Sökordsriktning", "Konverteringsspårning", "A/B-testning av annonser"], process: ["Sökordsforskning", "Kampanjuppsättning", "Annonsskapande", "Optimering och rapportering"] },
          ZH: { title: "SEA - 搜索引擎广告", subtitle: "在Google搜索结果中即时可见", description: "通过SEA广告，您可以直接出现在Google顶部。只为点击付费，触达积极搜索您产品的客户。", benefits: ["在Google上即时可见", "只为点击付费", "可衡量的结果", "灵活的预算管理"], features: ["Google Ads广告活动", "关键词定位", "转化跟踪", "A/B广告测试"], process: ["关键词研究", "广告活动设置", "广告创建", "优化和报告"] },
          FI: { title: "SEA - Hakukonemainonta", subtitle: "Näy heti Googlen hakutuloksissa", description: "SEA-mainoksilla näyt heti Googlen kärjessä. Maksa vain klikkauksista ja tavoita asiakkaat, jotka aktiivisesti etsivät tuotteitasi.", benefits: ["Näy heti Googlessa", "Maksa vain klikkauksista", "Mitattavat tulokset", "Joustava budjetin hallinta"], features: ["Google Ads -kampanjat", "Avainsanakohdentaminen", "Konversioseuranta", "A/B-mainostestaus"], process: ["Avainsanatutkimus", "Kampanjan asetus", "Mainosten luominen", "Optimointi ja raportointi"] },
          AR: { title: "SEA - إعلانات محركات البحث", subtitle: "ظهور فوري في نتائج بحث Google", description: "مع إعلانات SEA تظهر مباشرة في أعلى Google. ادفع فقط مقابل النقرات وتواصل مع العملاء الذين يبحثون بنشاط عن منتجاتك.", benefits: ["ظهور فوري على Google", "ادفع فقط مقابل النقرات", "نتائج قابلة للقياس", "إدارة ميزانية مرنة"], features: ["حملات Google Ads", "استهداف الكلمات الرئيسية", "تتبع التحويلات", "اختبار A/B للإعلانات"], process: ["بحث الكلمات الرئيسية", "إعداد الحملة", "إنشاء الإعلانات", "التحسين والتقارير"] },
          DA: { title: "SEA - Søgemaskineannoncering", subtitle: "Øjeblikkeligt synlig i Google søgeresultater", description: "Med SEA-annoncer vises du direkte øverst på Google. Betal kun for klik og nå kunder, der aktivt søger efter dine produkter.", benefits: ["Øjeblikkeligt synlig på Google", "Betal kun for klik", "Målbare resultater", "Fleksibel budgetstyring"], features: ["Google Ads kampagner", "Søgeordsmålretning", "Konverteringssporing", "A/B-test af annoncer"], process: ["Søgeordsresearch", "Kampagneopsætning", "Annonceoprettelse", "Optimering og rapportering"] },
          NO: { title: "SEA - Søkemotorannonsering", subtitle: "Umiddelbart synlig i Google søkeresultater", description: "Med SEA-annonser vises du direkte øverst på Google. Betal kun for klikk og nå kunder som aktivt søker etter produktene dine.", benefits: ["Umiddelbart synlig på Google", "Betal kun for klikk", "Målbare resultater", "Fleksibel budsjettstyring"], features: ["Google Ads kampanjer", "Søkeordsmålretting", "Konverteringssporing", "A/B-testing av annonser"], process: ["Søkeordsanalyse", "Kampanjeoppsett", "Annonseopprettelse", "Optimalisering og rapportering"] }
        }
      },
      {
        name: "Goudengids",
        slug: "goudengids",
        icon: FileText,
        description: "Be found in the Golden Pages",
        category: "to-be-found",
        content: {
          NL: { title: "Goudengids Vermelding", subtitle: "Word gevonden in de Gouden Gids", description: "Een vermelding in de Goudengids verhoogt je lokale zichtbaarheid. Wij zorgen voor een complete en geoptimaliseerde vermelding die klanten naar je bedrijf leidt.", benefits: ["Verhoogde lokale zichtbaarheid", "Vertrouwde branchegids", "Complete bedrijfspresentatie", "Direct contact met potentiële klanten"], features: ["Geoptimaliseerde vermelding", "Bedrijfsfoto's en logo", "Contactinformatie beheer", "Review integratie"], process: ["Bedrijfsgegevens verzamelen", "Vermelding aanmaken/optimaliseren", "Visuele content toevoegen", "Monitoring en updates"] },
          EN: { title: "Golden Pages Listing", subtitle: "Be found in the Golden Pages", description: "A listing in the Golden Pages increases your local visibility. We ensure a complete and optimized listing that drives customers to your business.", benefits: ["Increased local visibility", "Trusted business directory", "Complete business presentation", "Direct contact with potential customers"], features: ["Optimized listing", "Business photos and logo", "Contact information management", "Review integration"], process: ["Collect business data", "Create/optimize listing", "Add visual content", "Monitoring and updates"] },
          FR: { title: "Inscription Pages d'Or", subtitle: "Soyez trouvé dans les Pages d'Or", description: "Une inscription dans les Pages d'Or augmente votre visibilité locale. Nous assurons une inscription complète et optimisée qui dirige les clients vers votre entreprise.", benefits: ["Visibilité locale accrue", "Annuaire d'entreprises de confiance", "Présentation complète de l'entreprise", "Contact direct avec clients potentiels"], features: ["Inscription optimisée", "Photos et logo d'entreprise", "Gestion des coordonnées", "Intégration des avis"], process: ["Collecter les données d'entreprise", "Créer/optimiser l'inscription", "Ajouter du contenu visuel", "Surveillance et mises à jour"] },
          PL: { title: "Wpis w Złotych Stronach", subtitle: "Bądź znaleziony w Złotych Stronach", description: "Wpis w Złotych Stronach zwiększa Twoją lokalną widoczność. Zapewniamy kompletny i zoptymalizowany wpis, który przyciąga klientów do Twojej firmy.", benefits: ["Zwiększona lokalna widoczność", "Zaufany katalog firm", "Kompletna prezentacja firmy", "Bezpośredni kontakt z potencjalnymi klientami"], features: ["Zoptymalizowany wpis", "Zdjęcia firmy i logo", "Zarządzanie danymi kontaktowymi", "Integracja opinii"], process: ["Zbieranie danych firmowych", "Tworzenie/optymalizacja wpisu", "Dodawanie treści wizualnych", "Monitoring i aktualizacje"] },
          RU: { title: "Размещение в Золотых Страницах", subtitle: "Будьте найдены в Золотых Страницах", description: "Размещение в Золотых Страницах повышает вашу локальную видимость. Мы обеспечиваем полное и оптимизированное размещение, которое приводит клиентов к вашему бизнесу.", benefits: ["Повышенная локальная видимость", "Надежный бизнес-каталог", "Полная презентация бизнеса", "Прямой контакт с потенциальными клиентами"], features: ["Оптимизированное размещение", "Фотографии и логотип компании", "Управление контактной информацией", "Интеграция отзывов"], process: ["Сбор данных о бизнесе", "Создание/оптимизация размещения", "Добавление визуального контента", "Мониторинг и обновления"] },
          DE: { title: "Gelbe Seiten Eintrag", subtitle: "Werden Sie in den Gelben Seiten gefunden", description: "Ein Eintrag in den Gelben Seiten erhöht Ihre lokale Sichtbarkeit. Wir sorgen für einen vollständigen und optimierten Eintrag, der Kunden zu Ihrem Unternehmen führt.", benefits: ["Erhöhte lokale Sichtbarkeit", "Vertrauenswürdiges Branchenverzeichnis", "Vollständige Unternehmenspräsentation", "Direkter Kontakt mit potenziellen Kunden"], features: ["Optimierter Eintrag", "Unternehmensfotos und Logo", "Kontaktdatenverwaltung", "Bewertungsintegration"], process: ["Unternehmensdaten sammeln", "Eintrag erstellen/optimieren", "Visuellen Inhalt hinzufügen", "Überwachung und Updates"] },
          ES: { title: "Registro en Páginas Amarillas", subtitle: "Sé encontrado en las Páginas Amarillas", description: "Un registro en las Páginas Amarillas aumenta tu visibilidad local. Aseguramos un registro completo y optimizado que dirige clientes a tu negocio.", benefits: ["Mayor visibilidad local", "Directorio empresarial confiable", "Presentación completa del negocio", "Contacto directo con clientes potenciales"], features: ["Registro optimizado", "Fotos y logo de empresa", "Gestión de información de contacto", "Integración de reseñas"], process: ["Recopilar datos empresariales", "Crear/optimizar registro", "Agregar contenido visual", "Monitoreo y actualizaciones"] },
          IT: { title: "Inserzione Pagine Gialle", subtitle: "Fatti trovare nelle Pagine Gialle", description: "Un'inserzione nelle Pagine Gialle aumenta la tua visibilità locale. Garantiamo un'inserzione completa e ottimizzata che porta clienti alla tua attività.", benefits: ["Maggiore visibilità locale", "Directory aziendale affidabile", "Presentazione aziendale completa", "Contatto diretto con potenziali clienti"], features: ["Inserzione ottimizzata", "Foto e logo aziendali", "Gestione informazioni di contatto", "Integrazione recensioni"], process: ["Raccolta dati aziendali", "Creazione/ottimizzazione inserzione", "Aggiunta contenuti visivi", "Monitoraggio e aggiornamenti"] },
          UK: { title: "Розміщення у Золотих Сторінках", subtitle: "Будьте знайдені у Золотих Сторінках", description: "Розміщення у Золотих Сторінках підвищує вашу локальну видимість. Ми забезпечуємо повне та оптимізоване розміщення, яке приводить клієнтів до вашого бізнесу.", benefits: ["Підвищена локальна видимість", "Надійний бізнес-каталог", "Повна презентація бізнесу", "Прямий контакт з потенційними клієнтами"], features: ["Оптимізоване розміщення", "Фотографії та логотип компанії", "Управління контактною інформацією", "Інтеграція відгуків"], process: ["Збір даних про бізнес", "Створення/оптимізація розміщення", "Додавання візуального контенту", "Моніторинг та оновлення"] },
          TR: { title: "Altın Sayfalar Kaydı", subtitle: "Altın Sayfalarda bulunun", description: "Altın Sayfalarda bir kayıt yerel görünürlüğünüzü artırır. İşletmenize müşteri çeken eksiksiz ve optimize edilmiş bir kayıt sağlıyoruz.", benefits: ["Artan yerel görünürlük", "Güvenilir iş rehberi", "Eksiksiz iş sunumu", "Potansiyel müşterilerle doğrudan iletişim"], features: ["Optimize edilmiş kayıt", "İşletme fotoğrafları ve logo", "İletişim bilgisi yönetimi", "Yorum entegrasyonu"], process: ["İşletme verilerini toplama", "Kayıt oluşturma/optimize etme", "Görsel içerik ekleme", "İzleme ve güncellemeler"] },
          SV: { title: "Gula Sidorna Listning", subtitle: "Bli hittad i Gula Sidorna", description: "En listning i Gula Sidorna ökar din lokala synlighet. Vi säkerställer en komplett och optimerad listning som driver kunder till ditt företag.", benefits: ["Ökad lokal synlighet", "Pålitlig företagskatalog", "Komplett företagspresentation", "Direktkontakt med potentiella kunder"], features: ["Optimerad listning", "Företagsfoton och logotyp", "Kontaktinformationshantering", "Recensionsintegration"], process: ["Samla företagsdata", "Skapa/optimera listning", "Lägg till visuellt innehåll", "Övervakning och uppdateringar"] },
          ZH: { title: "黄页登记", subtitle: "在黄页中被找到", description: "在黄页中登记可提高您的本地可见度。我们确保完整和优化的登记，将客户引导到您的企业。", benefits: ["提高本地可见度", "值得信赖的企业目录", "完整的企业展示", "与潜在客户直接联系"], features: ["优化的登记", "企业照片和标志", "联系信息管理", "评论整合"], process: ["收集企业数据", "创建/优化登记", "添加视觉内容", "监控和更新"] },
          FI: { title: "Keltaisten Sivujen Listaus", subtitle: "Löydy Keltaisilta Sivuilta", description: "Listaus Keltaisilla Sivuilla lisää paikallista näkyvyyttäsi. Varmistamme täydellisen ja optimoidun listauksen, joka ohjaa asiakkaita yritykseesi.", benefits: ["Lisääntynyt paikallinen näkyvyys", "Luotettava yritysluettelo", "Täydellinen yritysesittely", "Suora yhteys potentiaalisiin asiakkaisiin"], features: ["Optimoitu listaus", "Yrityksen kuvat ja logo", "Yhteystietojen hallinta", "Arvostelunintegraatio"], process: ["Yritystietojen kerääminen", "Listauksen luominen/optimointi", "Visuaalisen sisällön lisääminen", "Seuranta ja päivitykset"] },
          AR: { title: "تسجيل الصفحات الذهبية", subtitle: "اعثر عليك في الصفحات الذهبية", description: "التسجيل في الصفحات الذهبية يزيد من ظهورك المحلي. نضمن تسجيلاً كاملاً ومحسناً يجذب العملاء إلى عملك.", benefits: ["زيادة الظهور المحلي", "دليل أعمال موثوق", "عرض كامل للأعمال", "اتصال مباشر مع العملاء المحتملين"], features: ["تسجيل محسن", "صور وشعار الشركة", "إدارة معلومات الاتصال", "تكامل المراجعات"], process: ["جمع بيانات الأعمال", "إنشاء/تحسين التسجيل", "إضافة محتوى مرئي", "المراقبة والتحديثات"] },
          DA: { title: "De Gule Sider Opslag", subtitle: "Bliv fundet i De Gule Sider", description: "Et opslag i De Gule Sider øger din lokale synlighed. Vi sikrer et komplet og optimeret opslag, der leder kunder til din virksomhed.", benefits: ["Øget lokal synlighed", "Pålidelig virksomhedskatalog", "Komplet virksomhedspræsentation", "Direkte kontakt med potentielle kunder"], features: ["Optimeret opslag", "Virksomhedsbilleder og logo", "Kontaktoplysningshåndtering", "Anmeldelsesintegration"], process: ["Indsamle virksomhedsdata", "Oprette/optimere opslag", "Tilføje visuelt indhold", "Overvågning og opdateringer"] },
          NO: { title: "Gule Sider Oppføring", subtitle: "Bli funnet i Gule Sider", description: "En oppføring i Gule Sider øker din lokale synlighet. Vi sikrer en komplett og optimalisert oppføring som leder kunder til bedriften din.", benefits: ["Økt lokal synlighet", "Pålitelig bedriftskatalog", "Komplett bedriftspresentasjon", "Direkte kontakt med potensielle kunder"], features: ["Optimalisert oppføring", "Bedriftsbilder og logo", "Kontaktinformasjonshåndtering", "Anmeldelsesintegrasjon"], process: ["Samle bedriftsdata", "Opprette/optimalisere oppføring", "Legge til visuelt innhold", "Overvåking og oppdateringer"] }
        }
      },
      {
        name: "NetSync Found",
        slug: "netsync-found",
        icon: RefreshCw,
        description: "Sync business info for better findability",
        category: "to-be-found",
        content: {
          NL: { title: "NetSync Found - Vindbaarheid Boost", subtitle: "Synchroniseer je bedrijfsinfo voor betere vindbaarheid", description: "NetSync Found richt zich specifiek op het verbeteren van je vindbaarheid. Door consistente bedrijfsinformatie over alle zoekplatforms scoor je hoger in lokale zoekresultaten.", benefits: ["Hogere lokale zoekresultaten", "Consistente NAP-gegevens", "Verbeterde Google Maps positie", "Meer organisch verkeer"], features: ["Multi-platform synchronisatie", "NAP consistentie optimalisatie", "Lokale citaties opbouw", "Vindbaarheidsrapportage"], process: ["Audit huidige vindbaarheid", "Gegevens harmonisatie", "Platform distributie", "Doorlopende monitoring"] },
          EN: { title: "NetSync Found - Findability Boost", subtitle: "Sync your business info for better findability", description: "NetSync Found focuses specifically on improving your findability. By maintaining consistent business information across all search platforms, you rank higher in local search results.", benefits: ["Higher local search results", "Consistent NAP data", "Improved Google Maps position", "More organic traffic"], features: ["Multi-platform synchronization", "NAP consistency optimization", "Local citations building", "Findability reporting"], process: ["Audit current findability", "Data harmonization", "Platform distribution", "Ongoing monitoring"] },
          FR: { title: "NetSync Found - Boost de Visibilité", subtitle: "Synchronisez vos infos pour une meilleure trouvabilité", description: "NetSync Found se concentre spécifiquement sur l'amélioration de votre trouvabilité. En maintenant des informations cohérentes sur toutes les plateformes, vous êtes mieux classé dans les résultats locaux.", benefits: ["Meilleurs résultats de recherche locaux", "Données NAP cohérentes", "Position améliorée sur Google Maps", "Plus de trafic organique"], features: ["Synchronisation multi-plateforme", "Optimisation de la cohérence NAP", "Construction de citations locales", "Rapports de trouvabilité"], process: ["Audit de la trouvabilité actuelle", "Harmonisation des données", "Distribution sur les plateformes", "Surveillance continue"] },
          PL: { title: "NetSync Found - Zwiększona Widoczność", subtitle: "Synchronizuj informacje dla lepszej widoczności", description: "NetSync Found koncentruje się na poprawie Twojej widoczności w wyszukiwaniu. Utrzymując spójne informacje na wszystkich platformach, zajmujesz wyższe pozycje w lokalnych wynikach.", benefits: ["Wyższe lokalne wyniki wyszukiwania", "Spójne dane NAP", "Lepsza pozycja w Mapach Google", "Więcej ruchu organicznego"], features: ["Synchronizacja na wielu platformach", "Optymalizacja spójności NAP", "Budowanie lokalnych cytowań", "Raportowanie widoczności"], process: ["Audyt obecnej widoczności", "Harmonizacja danych", "Dystrybucja na platformy", "Ciągły monitoring"] },
          RU: { title: "NetSync Found - Улучшение Поиска", subtitle: "Синхронизируйте информацию для лучшей находимости", description: "NetSync Found фокусируется на улучшении вашей находимости. Поддерживая согласованную информацию на всех платформах, вы занимаете более высокие позиции в локальном поиске.", benefits: ["Более высокие локальные результаты поиска", "Согласованные данные NAP", "Улучшенная позиция в Google Maps", "Больше органического трафика"], features: ["Мультиплатформенная синхронизация", "Оптимизация согласованности NAP", "Построение локальных цитирований", "Отчетность по находимости"], process: ["Аудит текущей находимости", "Гармонизация данных", "Распространение по платформам", "Постоянный мониторинг"] },
          DE: { title: "NetSync Found - Auffindbarkeits-Boost", subtitle: "Synchronisieren Sie Ihre Infos für bessere Auffindbarkeit", description: "NetSync Found konzentriert sich auf die Verbesserung Ihrer Auffindbarkeit. Durch konsistente Informationen auf allen Plattformen ranken Sie höher in lokalen Suchergebnissen.", benefits: ["Höhere lokale Suchergebnisse", "Konsistente NAP-Daten", "Verbesserte Google Maps Position", "Mehr organischer Traffic"], features: ["Multi-Plattform-Synchronisation", "NAP-Konsistenz-Optimierung", "Lokaler Zitationsaufbau", "Auffindbarkeits-Reporting"], process: ["Audit aktueller Auffindbarkeit", "Datenharmonisierung", "Plattformverteilung", "Laufende Überwachung"] },
          ES: { title: "NetSync Found - Impulso de Visibilidad", subtitle: "Sincroniza tu info para mejor encontrabilidad", description: "NetSync Found se enfoca en mejorar tu encontrabilidad. Al mantener información consistente en todas las plataformas, clasificas más alto en resultados de búsqueda local.", benefits: ["Mejores resultados de búsqueda local", "Datos NAP consistentes", "Mejor posición en Google Maps", "Más tráfico orgánico"], features: ["Sincronización multiplataforma", "Optimización de consistencia NAP", "Construcción de citas locales", "Reportes de encontrabilidad"], process: ["Auditoría de encontrabilidad actual", "Armonización de datos", "Distribución en plataformas", "Monitoreo continuo"] },
          IT: { title: "NetSync Found - Boost di Trovabilità", subtitle: "Sincronizza le tue info per migliore trovabilità", description: "NetSync Found si concentra sul miglioramento della tua trovabilità. Mantenendo informazioni coerenti su tutte le piattaforme, ti posizioni più in alto nei risultati di ricerca locali.", benefits: ["Migliori risultati di ricerca locali", "Dati NAP coerenti", "Posizione migliorata su Google Maps", "Più traffico organico"], features: ["Sincronizzazione multi-piattaforma", "Ottimizzazione coerenza NAP", "Costruzione citazioni locali", "Reportistica trovabilità"], process: ["Audit trovabilità attuale", "Armonizzazione dati", "Distribuzione piattaforme", "Monitoraggio continuo"] },
          UK: { title: "NetSync Found - Покращення Знаходимості", subtitle: "Синхронізуйте інформацію для кращої знаходимості", description: "NetSync Found фокусується на покращенні вашої знаходимості. Підтримуючи узгоджену інформацію на всіх платформах, ви займаєте вищі позиції в локальному пошуку.", benefits: ["Вищі локальні результати пошуку", "Узгоджені дані NAP", "Покращена позиція в Google Maps", "Більше органічного трафіку"], features: ["Мультиплатформна синхронізація", "Оптимізація узгодженості NAP", "Побудова локальних цитувань", "Звітність по знаходимості"], process: ["Аудит поточної знаходимості", "Гармонізація даних", "Розповсюдження по платформах", "Постійний моніторинг"] },
          TR: { title: "NetSync Found - Bulunabilirlik Artışı", subtitle: "Daha iyi bulunabilirlik için bilgilerinizi senkronize edin", description: "NetSync Found, bulunabilirliğinizi geliştirmeye odaklanır. Tüm platformlarda tutarlı bilgi sağlayarak yerel arama sonuçlarında daha üst sıralarda yer alırsınız.", benefits: ["Daha yüksek yerel arama sonuçları", "Tutarlı NAP verileri", "İyileştirilmiş Google Haritalar konumu", "Daha fazla organik trafik"], features: ["Çok platformlu senkronizasyon", "NAP tutarlılığı optimizasyonu", "Yerel alıntı oluşturma", "Bulunabilirlik raporlaması"], process: ["Mevcut bulunabilirlik denetimi", "Veri harmonizasyonu", "Platform dağıtımı", "Sürekli izleme"] },
          SV: { title: "NetSync Found - Hittbarhetshöjning", subtitle: "Synkronisera din info för bättre hittbarhet", description: "NetSync Found fokuserar på att förbättra din hittbarhet. Genom att upprätthålla konsekvent information på alla plattformar rankas du högre i lokala sökresultat.", benefits: ["Högre lokala sökresultat", "Konsekvent NAP-data", "Förbättrad Google Maps position", "Mer organisk trafik"], features: ["Multi-plattformssynkronisering", "NAP-konsistensoptimering", "Lokal citeringsbyggande", "Hittbarhetsrapportering"], process: ["Granskning av nuvarande hittbarhet", "Dataharmonisering", "Plattformsdistribution", "Löpande övervakning"] },
          ZH: { title: "NetSync Found - 可查找性提升", subtitle: "同步您的信息以提高可查找性", description: "NetSync Found专注于提高您的可查找性。通过在所有平台保持一致的信息，您在本地搜索结果中排名更高。", benefits: ["更高的本地搜索结果", "一致的NAP数据", "改善的Google地图位置", "更多有机流量"], features: ["多平台同步", "NAP一致性优化", "本地引用建设", "可查找性报告"], process: ["当前可查找性审计", "数据协调", "平台分发", "持续监控"] },
          FI: { title: "NetSync Found - Löydettävyyden Parantaminen", subtitle: "Synkronoi tietosi parempaa löydettävyyttä varten", description: "NetSync Found keskittyy löydettävyytesi parantamiseen. Ylläpitämällä johdonmukaisia tietoja kaikilla alustoilla sijoitut korkeammalle paikallisissa hakutuloksissa.", benefits: ["Korkeammat paikalliset hakutulokset", "Johdonmukaiset NAP-tiedot", "Parannettu Google Maps -sijainti", "Enemmän orgaanista liikennettä"], features: ["Monialustasynkronointi", "NAP-johdonmukaisuuden optimointi", "Paikallisten viittausten rakentaminen", "Löydettävyysraportointi"], process: ["Nykyisen löydettävyyden tarkastus", "Tietojen harmonisointi", "Alustajakelu", "Jatkuva seuranta"] },
          AR: { title: "NetSync Found - تعزيز قابلية البحث", subtitle: "مزامنة معلوماتك لإمكانية بحث أفضل", description: "يركز NetSync Found على تحسين قابلية العثور عليك. من خلال الحفاظ على معلومات متسقة عبر جميع المنصات، تحصل على ترتيب أعلى في نتائج البحث المحلية.", benefits: ["نتائج بحث محلية أعلى", "بيانات NAP متسقة", "موقع محسن على خرائط Google", "المزيد من الزيارات العضوية"], features: ["مزامنة متعددة المنصات", "تحسين اتساق NAP", "بناء الاستشهادات المحلية", "تقارير قابلية البحث"], process: ["تدقيق قابلية البحث الحالية", "تنسيق البيانات", "توزيع المنصات", "مراقبة مستمرة"] },
          DA: { title: "NetSync Found - Findbarheds-Boost", subtitle: "Synkroniser din info for bedre findbarhed", description: "NetSync Found fokuserer på at forbedre din findbarhed. Ved at opretholde konsistent information på alle platforme rangerer du højere i lokale søgeresultater.", benefits: ["Højere lokale søgeresultater", "Konsistent NAP-data", "Forbedret Google Maps position", "Mere organisk trafik"], features: ["Multi-platform synkronisering", "NAP-konsistens optimering", "Lokal citationsopbygning", "Findbarheds-rapportering"], process: ["Audit af nuværende findbarhed", "Dataharmonisering", "Platformdistribution", "Løbende overvågning"] },
          NO: { title: "NetSync Found - Finnbarhetsforbedring", subtitle: "Synkroniser info for bedre finnbarhet", description: "NetSync Found fokuserer på å forbedre finnbarheten din. Ved å opprettholde konsistent informasjon på alle plattformer rangerer du høyere i lokale søkeresultater.", benefits: ["Høyere lokale søkeresultater", "Konsistent NAP-data", "Forbedret Google Maps posisjon", "Mer organisk trafikk"], features: ["Multi-plattform synkronisering", "NAP-konsistens optimalisering", "Lokal siteringsbygging", "Finnbarhetsrapportering"], process: ["Revisjon av nåværende finnbarhet", "Dataharmonisering", "Plattformdistribusjon", "Løpende overvåking"] }
        }
      }
    ]
  },
  {
    title: "TO STAND OUT",
    items: [
      {
        name: "Advertising Goudengids",
        slug: "advertising-goudengids",
        icon: Target,
        description: "Advertise in the Golden Pages",
        category: "to-stand-out",
        content: {
          NL: { title: "Adverteren in Goudengids", subtitle: "Val op tussen de concurrentie", description: "Met advertenties in de Goudengids bereik je klanten die actief op zoek zijn naar jouw diensten. Val op met prominente plaatsing en verhoogde zichtbaarheid.", benefits: ["Prominente plaatsing in zoekresultaten", "Bereik klanten met koopintentie", "Concurrentievoordeel in je branche", "Meetbare resultaten en leads"], features: ["Premium advertentieplaatsing", "Uitgebreide bedrijfspresentatie", "Lead tracking en rapportage", "Call-to-action optimalisatie"], process: ["Doelgroep en doelen bepalen", "Advertentiepakket selecteren", "Campagne opzetten", "Resultaten monitoren en optimaliseren"] },
          EN: { title: "Advertising in Golden Pages", subtitle: "Stand out from the competition", description: "With Golden Pages advertising you reach customers actively looking for your services. Stand out with prominent placement and increased visibility.", benefits: ["Prominent placement in search results", "Reach customers with buying intent", "Competitive advantage in your industry", "Measurable results and leads"], features: ["Premium ad placement", "Extended business presentation", "Lead tracking and reporting", "Call-to-action optimization"], process: ["Define target audience and goals", "Select advertising package", "Set up campaign", "Monitor and optimize results"] },
          FR: { title: "Publicité dans les Pages d'Or", subtitle: "Démarquez-vous de la concurrence", description: "Avec la publicité Pages d'Or, vous atteignez des clients qui recherchent activement vos services. Démarquez-vous avec un placement proéminent et une visibilité accrue.", benefits: ["Placement proéminent dans les résultats", "Atteignez des clients avec intention d'achat", "Avantage concurrentiel dans votre secteur", "Résultats et leads mesurables"], features: ["Placement publicitaire premium", "Présentation d'entreprise étendue", "Suivi et rapport des leads", "Optimisation des appels à l'action"], process: ["Définir public cible et objectifs", "Sélectionner le forfait publicitaire", "Configurer la campagne", "Surveiller et optimiser les résultats"] },
          PL: { title: "Reklama w Złotych Stronach", subtitle: "Wyróżnij się na tle konkurencji", description: "Dzięki reklamie w Złotych Stronach docierasz do klientów aktywnie szukających Twoich usług. Wyróżnij się prominentnym umieszczeniem i zwiększoną widocznością.", benefits: ["Prominentne umieszczenie w wynikach", "Dotarcie do klientów z zamiarem zakupu", "Przewaga konkurencyjna w branży", "Mierzalne wyniki i leady"], features: ["Premium umieszczenie reklam", "Rozszerzona prezentacja firmy", "Śledzenie leadów i raportowanie", "Optymalizacja wezwań do działania"], process: ["Określenie grupy docelowej i celów", "Wybór pakietu reklamowego", "Konfiguracja kampanii", "Monitoring i optymalizacja wyników"] },
          RU: { title: "Реклама в Золотых Страницах", subtitle: "Выделитесь среди конкурентов", description: "С рекламой в Золотых Страницах вы достигаете клиентов, активно ищущих ваши услуги. Выделяйтесь с заметным размещением и повышенной видимостью.", benefits: ["Заметное размещение в результатах", "Достижение клиентов с намерением покупки", "Конкурентное преимущество в отрасли", "Измеримые результаты и лиды"], features: ["Премиум размещение рекламы", "Расширенная презентация бизнеса", "Отслеживание лидов и отчетность", "Оптимизация призывов к действию"], process: ["Определение целевой аудитории и целей", "Выбор рекламного пакета", "Настройка кампании", "Мониторинг и оптимизация результатов"] },
          DE: { title: "Werbung in Gelben Seiten", subtitle: "Heben Sie sich von der Konkurrenz ab", description: "Mit Gelbe Seiten Werbung erreichen Sie Kunden, die aktiv nach Ihren Dienstleistungen suchen. Heben Sie sich mit prominenter Platzierung und erhöhter Sichtbarkeit ab.", benefits: ["Prominente Platzierung in Suchergebnissen", "Erreichen Sie Kunden mit Kaufabsicht", "Wettbewerbsvorteil in Ihrer Branche", "Messbare Ergebnisse und Leads"], features: ["Premium-Anzeigenplatzierung", "Erweiterte Unternehmenspräsentation", "Lead-Tracking und Reporting", "Call-to-Action-Optimierung"], process: ["Zielgruppe und Ziele definieren", "Werbepaket auswählen", "Kampagne einrichten", "Ergebnisse überwachen und optimieren"] },
          ES: { title: "Publicidad en Páginas Amarillas", subtitle: "Destaca de la competencia", description: "Con publicidad en Páginas Amarillas llegas a clientes que buscan activamente tus servicios. Destaca con ubicación prominente y mayor visibilidad.", benefits: ["Ubicación prominente en resultados", "Llega a clientes con intención de compra", "Ventaja competitiva en tu industria", "Resultados y leads medibles"], features: ["Ubicación publicitaria premium", "Presentación empresarial extendida", "Seguimiento y reportes de leads", "Optimización de llamadas a la acción"], process: ["Definir audiencia objetivo y metas", "Seleccionar paquete publicitario", "Configurar campaña", "Monitorear y optimizar resultados"] },
          IT: { title: "Pubblicità nelle Pagine Gialle", subtitle: "Distinguiti dalla concorrenza", description: "Con la pubblicità nelle Pagine Gialle raggiungi clienti che cercano attivamente i tuoi servizi. Distinguiti con posizionamento prominente e maggiore visibilità.", benefits: ["Posizionamento prominente nei risultati", "Raggiungi clienti con intenzione d'acquisto", "Vantaggio competitivo nel tuo settore", "Risultati e lead misurabili"], features: ["Posizionamento annunci premium", "Presentazione aziendale estesa", "Tracciamento lead e reportistica", "Ottimizzazione call-to-action"], process: ["Definire pubblico target e obiettivi", "Selezionare pacchetto pubblicitario", "Configurare campagna", "Monitorare e ottimizzare risultati"] },
          UK: { title: "Реклама в Золотих Сторінках", subtitle: "Виділіться серед конкурентів", description: "З рекламою в Золотих Сторінках ви досягаєте клієнтів, які активно шукають ваші послуги. Виділяйтесь з помітним розміщенням і підвищеною видимістю.", benefits: ["Помітне розміщення в результатах", "Досягнення клієнтів з наміром покупки", "Конкурентна перевага в галузі", "Вимірювані результати та ліди"], features: ["Преміум розміщення реклами", "Розширена презентація бізнесу", "Відстеження лідів та звітність", "Оптимізація закликів до дії"], process: ["Визначення цільової аудиторії та цілей", "Вибір рекламного пакету", "Налаштування кампанії", "Моніторинг та оптимізація результатів"] },
          TR: { title: "Altın Sayfalarda Reklam", subtitle: "Rekabetten sıyrılın", description: "Altın Sayfalar reklamı ile hizmetlerinizi aktif olarak arayan müşterilere ulaşırsınız. Belirgin yerleşim ve artan görünürlükle öne çıkın.", benefits: ["Arama sonuçlarında belirgin yerleşim", "Satın alma niyetli müşterilere ulaşma", "Sektörünüzde rekabet avantajı", "Ölçülebilir sonuçlar ve potansiyel müşteriler"], features: ["Premium reklam yerleşimi", "Genişletilmiş işletme sunumu", "Lead izleme ve raporlama", "Eylem çağrısı optimizasyonu"], process: ["Hedef kitle ve hedefleri belirleme", "Reklam paketini seçme", "Kampanya kurma", "Sonuçları izleme ve optimize etme"] },
          SV: { title: "Annonsering i Gula Sidorna", subtitle: "Stick ut från konkurrenterna", description: "Med Gula Sidorna-annonsering når du kunder som aktivt söker dina tjänster. Stick ut med framträdande placering och ökad synlighet.", benefits: ["Framträdande placering i sökresultat", "Nå kunder med köpintention", "Konkurrensfördel i din bransch", "Mätbara resultat och leads"], features: ["Premium annonsplacering", "Utökad företagspresentation", "Lead-spårning och rapportering", "Call-to-action-optimering"], process: ["Definiera målgrupp och mål", "Välj annonspaket", "Konfigurera kampanj", "Övervaka och optimera resultat"] },
          ZH: { title: "黄页广告", subtitle: "从竞争中脱颖而出", description: "通过黄页广告，您可以接触到积极寻找您服务的客户。以显著位置和更高可见度脱颖而出。", benefits: ["在搜索结果中显著位置", "接触有购买意向的客户", "行业竞争优势", "可衡量的结果和潜在客户"], features: ["高级广告位置", "扩展业务展示", "潜在客户跟踪和报告", "行动号召优化"], process: ["定义目标受众和目标", "选择广告套餐", "设置广告活动", "监控和优化结果"] },
          FI: { title: "Mainonta Keltaisilla Sivuilla", subtitle: "Erotu kilpailijoista", description: "Keltaisten Sivujen mainonnalla tavoitat asiakkaat, jotka aktiivisesti etsivät palveluitasi. Erotu näkyvällä sijoittelulla ja lisääntyneellä näkyvyydellä.", benefits: ["Näkyvä sijoittelu hakutuloksissa", "Tavoita ostovalmiit asiakkaat", "Kilpailuetu toimialallasi", "Mitattavat tulokset ja liidit"], features: ["Premium mainossijoittelu", "Laajennettu yritysesittely", "Liidien seuranta ja raportointi", "Toimintakutsun optimointi"], process: ["Määritä kohderyhmä ja tavoitteet", "Valitse mainospaketti", "Perusta kampanja", "Seuraa ja optimoi tuloksia"] },
          AR: { title: "الإعلان في الصفحات الذهبية", subtitle: "تميز عن المنافسة", description: "مع إعلانات الصفحات الذهبية تصل إلى العملاء الذين يبحثون بنشاط عن خدماتك. تميز بموضع بارز ورؤية متزايدة.", benefits: ["موضع بارز في نتائج البحث", "الوصول للعملاء ذوي نية الشراء", "ميزة تنافسية في مجالك", "نتائج وعملاء محتملين قابلين للقياس"], features: ["موضع إعلان مميز", "عرض أعمال موسع", "تتبع العملاء المحتملين والتقارير", "تحسين الدعوة للعمل"], process: ["تحديد الجمهور المستهدف والأهداف", "اختيار حزمة الإعلان", "إعداد الحملة", "مراقبة وتحسين النتائج"] },
          DA: { title: "Annoncering i De Gule Sider", subtitle: "Skil dig ud fra konkurrenterne", description: "Med De Gule Sider annoncering når du kunder, der aktivt søger dine ydelser. Skil dig ud med fremtrædende placering og øget synlighed.", benefits: ["Fremtrædende placering i søgeresultater", "Nå kunder med købsintention", "Konkurrencefordel i din branche", "Målbare resultater og leads"], features: ["Premium annonceplacering", "Udvidet virksomhedspræsentation", "Lead-sporing og rapportering", "Call-to-action optimering"], process: ["Definer målgruppe og mål", "Vælg annoncepakke", "Opsæt kampagne", "Overvåg og optimer resultater"] },
          NO: { title: "Annonsering i Gule Sider", subtitle: "Skill deg ut fra konkurrentene", description: "Med Gule Sider-annonsering når du kunder som aktivt søker dine tjenester. Skill deg ut med fremtredende plassering og økt synlighet.", benefits: ["Fremtredende plassering i søkeresultater", "Nå kunder med kjøpsintensjon", "Konkurransefordel i din bransje", "Målbare resultater og leads"], features: ["Premium annonseplassering", "Utvidet bedriftspresentasjon", "Lead-sporing og rapportering", "Call-to-action optimalisering"], process: ["Definer målgruppe og mål", "Velg annonsepakke", "Sett opp kampanje", "Overvåk og optimaliser resultater"] }
        }
      },
      {
        name: "Social Media Ads",
        slug: "social-media-ads",
        icon: Share2,
        description: "Targeted advertising on social media",
        category: "to-stand-out",
        content: {
          NL: { title: "Social Media Advertenties", subtitle: "Gerichte advertenties op social media", description: "Bereik je ideale klanten op Facebook, Instagram en LinkedIn met gerichte advertentiecampagnes. Nauwkeurige targeting voor maximaal rendement.", benefits: ["Nauwkeurige doelgroep targeting", "Visueel aantrekkelijke advertenties", "Schaalbare campagnes", "Real-time resultaten meten"], features: ["Facebook & Instagram Ads", "LinkedIn Advertenties", "Remarketing campagnes", "Lookalike audiences"], process: ["Doelgroep analyse", "Advertentie strategie", "Campagne lancering", "Optimalisatie en schalen"] },
          EN: { title: "Social Media Advertising", subtitle: "Targeted advertising on social media", description: "Reach your ideal customers on Facebook, Instagram and LinkedIn with targeted ad campaigns. Precise targeting for maximum return.", benefits: ["Precise audience targeting", "Visually appealing ads", "Scalable campaigns", "Real-time results measurement"], features: ["Facebook & Instagram Ads", "LinkedIn Advertising", "Remarketing campaigns", "Lookalike audiences"], process: ["Audience analysis", "Ad strategy", "Campaign launch", "Optimization and scaling"] },
          FR: { title: "Publicité sur les Réseaux Sociaux", subtitle: "Publicité ciblée sur les réseaux sociaux", description: "Atteignez vos clients idéaux sur Facebook, Instagram et LinkedIn avec des campagnes publicitaires ciblées. Ciblage précis pour un rendement maximum.", benefits: ["Ciblage d'audience précis", "Annonces visuellement attrayantes", "Campagnes évolutives", "Mesure des résultats en temps réel"], features: ["Publicités Facebook & Instagram", "Publicité LinkedIn", "Campagnes de remarketing", "Audiences similaires"], process: ["Analyse d'audience", "Stratégie publicitaire", "Lancement de campagne", "Optimisation et mise à l'échelle"] },
          PL: { title: "Reklamy w Mediach Społecznościowych", subtitle: "Targetowane reklamy w social media", description: "Docieraj do idealnych klientów na Facebooku, Instagramie i LinkedIn z targetowanymi kampaniami reklamowymi. Precyzyjne targetowanie dla maksymalnego zwrotu.", benefits: ["Precyzyjne targetowanie odbiorców", "Wizualnie atrakcyjne reklamy", "Skalowalne kampanie", "Pomiar wyników w czasie rzeczywistym"], features: ["Reklamy Facebook & Instagram", "Reklamy LinkedIn", "Kampanie remarketingowe", "Lookalike audiences"], process: ["Analiza odbiorców", "Strategia reklamowa", "Uruchomienie kampanii", "Optymalizacja i skalowanie"] },
          RU: { title: "Реклама в Социальных Сетях", subtitle: "Таргетированная реклама в соцсетях", description: "Достигайте идеальных клиентов на Facebook, Instagram и LinkedIn с таргетированными рекламными кампаниями. Точный таргетинг для максимальной отдачи.", benefits: ["Точный таргетинг аудитории", "Визуально привлекательная реклама", "Масштабируемые кампании", "Измерение результатов в реальном времени"], features: ["Реклама Facebook & Instagram", "Реклама LinkedIn", "Ремаркетинг кампании", "Похожие аудитории"], process: ["Анализ аудитории", "Рекламная стратегия", "Запуск кампании", "Оптимизация и масштабирование"] },
          DE: { title: "Social Media Werbung", subtitle: "Gezielte Werbung auf Social Media", description: "Erreichen Sie Ihre idealen Kunden auf Facebook, Instagram und LinkedIn mit gezielten Werbekampagnen. Präzises Targeting für maximale Rendite.", benefits: ["Präzises Zielgruppen-Targeting", "Visuell ansprechende Anzeigen", "Skalierbare Kampagnen", "Echtzeit-Ergebnismessung"], features: ["Facebook & Instagram Ads", "LinkedIn Werbung", "Remarketing-Kampagnen", "Lookalike Audiences"], process: ["Zielgruppenanalyse", "Anzeigenstrategie", "Kampagnenstart", "Optimierung und Skalierung"] },
          ES: { title: "Publicidad en Redes Sociales", subtitle: "Publicidad dirigida en redes sociales", description: "Llega a tus clientes ideales en Facebook, Instagram y LinkedIn con campañas publicitarias dirigidas. Segmentación precisa para máximo retorno.", benefits: ["Segmentación precisa de audiencia", "Anuncios visualmente atractivos", "Campañas escalables", "Medición de resultados en tiempo real"], features: ["Anuncios de Facebook e Instagram", "Publicidad en LinkedIn", "Campañas de remarketing", "Audiencias similares"], process: ["Análisis de audiencia", "Estrategia publicitaria", "Lanzamiento de campaña", "Optimización y escalado"] },
          IT: { title: "Pubblicità sui Social Media", subtitle: "Pubblicità mirata sui social media", description: "Raggiungi i tuoi clienti ideali su Facebook, Instagram e LinkedIn con campagne pubblicitarie mirate. Targeting preciso per massimo rendimento.", benefits: ["Targeting preciso del pubblico", "Annunci visivamente accattivanti", "Campagne scalabili", "Misurazione risultati in tempo reale"], features: ["Annunci Facebook e Instagram", "Pubblicità LinkedIn", "Campagne di remarketing", "Pubblici simili"], process: ["Analisi del pubblico", "Strategia pubblicitaria", "Lancio campagna", "Ottimizzazione e scalabilità"] },
          UK: { title: "Реклама в Соціальних Мережах", subtitle: "Таргетована реклама в соцмережах", description: "Досягайте ідеальних клієнтів на Facebook, Instagram та LinkedIn з таргетованими рекламними кампаніями. Точний таргетинг для максимальної віддачі.", benefits: ["Точний таргетинг аудиторії", "Візуально привабливі оголошення", "Масштабовані кампанії", "Вимірювання результатів у реальному часі"], features: ["Реклама Facebook & Instagram", "Реклама LinkedIn", "Ремаркетинг кампанії", "Схожі аудиторії"], process: ["Аналіз аудиторії", "Рекламна стратегія", "Запуск кампанії", "Оптимізація та масштабування"] },
          TR: { title: "Sosyal Medya Reklamları", subtitle: "Sosyal medyada hedefli reklamcılık", description: "Facebook, Instagram ve LinkedIn'de hedefli reklam kampanyalarıyla ideal müşterilerinize ulaşın. Maksimum getiri için hassas hedefleme.", benefits: ["Hassas hedef kitle hedefleme", "Görsel olarak çekici reklamlar", "Ölçeklenebilir kampanyalar", "Gerçek zamanlı sonuç ölçümü"], features: ["Facebook ve Instagram Reklamları", "LinkedIn Reklamları", "Yeniden pazarlama kampanyaları", "Benzer hedef kitleler"], process: ["Hedef kitle analizi", "Reklam stratejisi", "Kampanya lansmanı", "Optimizasyon ve ölçeklendirme"] },
          SV: { title: "Sociala Medier Annonsering", subtitle: "Riktad annonsering på sociala medier", description: "Nå dina ideala kunder på Facebook, Instagram och LinkedIn med riktade annonskampanjer. Exakt målgruppsinriktning för maximal avkastning.", benefits: ["Exakt målgruppsinriktning", "Visuellt tilltalande annonser", "Skalbara kampanjer", "Realtidsmätning av resultat"], features: ["Facebook & Instagram Ads", "LinkedIn-annonsering", "Remarketingkampanjer", "Lookalike-målgrupper"], process: ["Målgruppsanalys", "Annonsstrategi", "Kampanjlansering", "Optimering och skalning"] },
          ZH: { title: "社交媒体广告", subtitle: "社交媒体上的定向广告", description: "通过定向广告活动在Facebook、Instagram和LinkedIn上接触理想客户。精准定位以获得最大回报。", benefits: ["精准受众定位", "视觉吸引力广告", "可扩展的广告活动", "实时结果测量"], features: ["Facebook和Instagram广告", "LinkedIn广告", "再营销活动", "相似受众"], process: ["受众分析", "广告策略", "活动启动", "优化和扩展"] },
          FI: { title: "Sosiaalisen Median Mainonta", subtitle: "Kohdennettu mainonta sosiaalisessa mediassa", description: "Tavoita ihanneasiakkaasi Facebookissa, Instagramissa ja LinkedInissä kohdennetuilla mainoskampanjoilla. Tarkka kohdentaminen maksimaalista tuottoa varten.", benefits: ["Tarkka yleisön kohdentaminen", "Visuaalisesti houkuttelevat mainokset", "Skaalautuvat kampanjat", "Reaaliaikainen tulosten mittaus"], features: ["Facebook & Instagram -mainokset", "LinkedIn-mainonta", "Uudelleenmarkkinointikampanjat", "Samankaltaiset yleisöt"], process: ["Yleisöanalyysi", "Mainosstrategia", "Kampanjan lanseeraus", "Optimointi ja skaalaus"] },
          AR: { title: "إعلانات وسائل التواصل الاجتماعي", subtitle: "إعلانات موجهة على وسائل التواصل الاجتماعي", description: "تواصل مع عملائك المثاليين على Facebook وInstagram وLinkedIn من خلال حملات إعلانية موجهة. استهداف دقيق لأقصى عائد.", benefits: ["استهداف دقيق للجمهور", "إعلانات جذابة بصرياً", "حملات قابلة للتوسع", "قياس النتائج في الوقت الفعلي"], features: ["إعلانات Facebook وInstagram", "إعلانات LinkedIn", "حملات إعادة التسويق", "جماهير مشابهة"], process: ["تحليل الجمهور", "استراتيجية الإعلان", "إطلاق الحملة", "التحسين والتوسع"] },
          DA: { title: "Sociale Medier Annoncering", subtitle: "Målrettet annoncering på sociale medier", description: "Nå dine ideelle kunder på Facebook, Instagram og LinkedIn med målrettede annoncekampagner. Præcis målretning for maksimalt afkast.", benefits: ["Præcis målgruppemålretning", "Visuelt tiltalende annoncer", "Skalerbare kampagner", "Realtidsmåling af resultater"], features: ["Facebook & Instagram Ads", "LinkedIn Annoncering", "Remarketing kampagner", "Lookalike audiences"], process: ["Målgruppeanalyse", "Annoncestrategi", "Kampagnelancering", "Optimering og skalering"] },
          NO: { title: "Sosiale Medier Annonsering", subtitle: "Målrettet annonsering på sosiale medier", description: "Nå dine ideelle kunder på Facebook, Instagram og LinkedIn med målrettede annonsekampanjer. Presis målretting for maksimal avkastning.", benefits: ["Presis målgruppemålretting", "Visuelt tiltalende annonser", "Skalerbare kampanjer", "Sanntidsmåling av resultater"], features: ["Facebook & Instagram Ads", "LinkedIn Annonsering", "Remarketing kampanjer", "Lookalike audiences"], process: ["Målgruppeanalyse", "Annonsestrategi", "Kampanjelansering", "Optimalisering og skalering"] }
        }
      },
      {
        name: "Omni Advertising",
        slug: "omni-advertising",
        icon: Target,
        description: "Advertising across all channels",
        category: "to-stand-out",
        content: {
          NL: { title: "Omni Advertising", subtitle: "Adverteren over alle kanalen", description: "Omni Advertising combineert Google, social media en display advertenties voor een consistente merkervaring over alle touchpoints. Bereik je doelgroep waar ze ook zijn.", benefits: ["Consistente merkervaring", "Maximaal bereik over alle kanalen", "Geïntegreerde campagne strategie", "Hogere totale ROI"], features: ["Cross-channel campagnes", "Unified messaging", "Attribution tracking", "Budget optimalisatie"], process: ["Multichannel strategie ontwikkeling", "Campagne opzet per kanaal", "Geïntegreerde lancering", "Cross-channel optimalisatie"] },
          EN: { title: "Omni Advertising", subtitle: "Advertising across all channels", description: "Omni Advertising combines Google, social media and display ads for a consistent brand experience across all touchpoints. Reach your audience wherever they are.", benefits: ["Consistent brand experience", "Maximum reach across all channels", "Integrated campaign strategy", "Higher total ROI"], features: ["Cross-channel campaigns", "Unified messaging", "Attribution tracking", "Budget optimization"], process: ["Multichannel strategy development", "Campaign setup per channel", "Integrated launch", "Cross-channel optimization"] },
          FR: { title: "Omni Advertising", subtitle: "Publicité sur tous les canaux", description: "Omni Advertising combine Google, réseaux sociaux et display pour une expérience de marque cohérente sur tous les points de contact. Atteignez votre audience où qu'elle soit.", benefits: ["Expérience de marque cohérente", "Portée maximale sur tous les canaux", "Stratégie de campagne intégrée", "ROI total plus élevé"], features: ["Campagnes cross-canal", "Message unifié", "Suivi d'attribution", "Optimisation du budget"], process: ["Développement stratégie multicanal", "Configuration campagne par canal", "Lancement intégré", "Optimisation cross-canal"] },
          PL: { title: "Omni Advertising", subtitle: "Reklama we wszystkich kanałach", description: "Omni Advertising łączy Google, media społecznościowe i display dla spójnego doświadczenia marki we wszystkich punktach kontaktu. Docieraj do odbiorców gdziekolwiek są.", benefits: ["Spójne doświadczenie marki", "Maksymalny zasięg we wszystkich kanałach", "Zintegrowana strategia kampanii", "Wyższy całkowity ROI"], features: ["Kampanie cross-channel", "Jednolity przekaz", "Śledzenie atrybucji", "Optymalizacja budżetu"], process: ["Rozwój strategii wielokanałowej", "Konfiguracja kampanii per kanał", "Zintegrowane uruchomienie", "Optymalizacja cross-channel"] },
          RU: { title: "Omni Advertising", subtitle: "Реклама по всем каналам", description: "Omni Advertising объединяет Google, социальные сети и дисплейную рекламу для последовательного опыта бренда во всех точках контакта. Достигайте аудитории где бы они ни были.", benefits: ["Последовательный опыт бренда", "Максимальный охват по всем каналам", "Интегрированная стратегия кампании", "Более высокий общий ROI"], features: ["Кросс-канальные кампании", "Единое сообщение", "Отслеживание атрибуции", "Оптимизация бюджета"], process: ["Разработка мультиканальной стратегии", "Настройка кампании по каналам", "Интегрированный запуск", "Кросс-канальная оптимизация"] },
          DE: { title: "Omni Advertising", subtitle: "Werbung über alle Kanäle", description: "Omni Advertising kombiniert Google, Social Media und Display-Anzeigen für ein konsistentes Markenerlebnis über alle Touchpoints. Erreichen Sie Ihre Zielgruppe wo auch immer sie ist.", benefits: ["Konsistentes Markenerlebnis", "Maximale Reichweite über alle Kanäle", "Integrierte Kampagnenstrategie", "Höherer Gesamt-ROI"], features: ["Cross-Channel-Kampagnen", "Einheitliche Botschaft", "Attributions-Tracking", "Budgetoptimierung"], process: ["Multichannel-Strategieentwicklung", "Kampagnen-Setup pro Kanal", "Integrierter Launch", "Cross-Channel-Optimierung"] },
          ES: { title: "Omni Advertising", subtitle: "Publicidad en todos los canales", description: "Omni Advertising combina Google, redes sociales y display para una experiencia de marca consistente en todos los puntos de contacto. Llega a tu audiencia donde quiera que esté.", benefits: ["Experiencia de marca consistente", "Alcance máximo en todos los canales", "Estrategia de campaña integrada", "Mayor ROI total"], features: ["Campañas cross-channel", "Mensaje unificado", "Seguimiento de atribución", "Optimización de presupuesto"], process: ["Desarrollo de estrategia multicanal", "Configuración de campaña por canal", "Lanzamiento integrado", "Optimización cross-channel"] },
          IT: { title: "Omni Advertising", subtitle: "Pubblicità su tutti i canali", description: "Omni Advertising combina Google, social media e display per un'esperienza di brand coerente su tutti i touchpoint. Raggiungi il tuo pubblico ovunque si trovi.", benefits: ["Esperienza di brand coerente", "Massima portata su tutti i canali", "Strategia di campagna integrata", "ROI totale più alto"], features: ["Campagne cross-channel", "Messaggi unificati", "Tracciamento attribuzione", "Ottimizzazione budget"], process: ["Sviluppo strategia multicanale", "Setup campagna per canale", "Lancio integrato", "Ottimizzazione cross-channel"] },
          UK: { title: "Omni Advertising", subtitle: "Реклама по всіх каналах", description: "Omni Advertising поєднує Google, соціальні мережі та дисплейну рекламу для послідовного досвіду бренду у всіх точках контакту. Досягайте аудиторії де б вони не були.", benefits: ["Послідовний досвід бренду", "Максимальне охоплення по всіх каналах", "Інтегрована стратегія кампанії", "Вищий загальний ROI"], features: ["Крос-канальні кампанії", "Єдине повідомлення", "Відстеження атрибуції", "Оптимізація бюджету"], process: ["Розробка мультиканальної стратегії", "Налаштування кампанії по каналах", "Інтегрований запуск", "Крос-канальна оптимізація"] },
          TR: { title: "Omni Advertising", subtitle: "Tüm kanallarda reklamcılık", description: "Omni Advertising, tüm temas noktalarında tutarlı bir marka deneyimi için Google, sosyal medya ve display reklamlarını birleştirir. Hedef kitlenize nerede olurlarsa olsunlar ulaşın.", benefits: ["Tutarlı marka deneyimi", "Tüm kanallarda maksimum erişim", "Entegre kampanya stratejisi", "Daha yüksek toplam ROI"], features: ["Çapraz kanal kampanyaları", "Birleşik mesajlaşma", "Atıf izleme", "Bütçe optimizasyonu"], process: ["Çok kanallı strateji geliştirme", "Kanal başına kampanya kurulumu", "Entegre lansman", "Çapraz kanal optimizasyonu"] },
          SV: { title: "Omni Advertising", subtitle: "Annonsering över alla kanaler", description: "Omni Advertising kombinerar Google, sociala medier och displayannonser för en konsekvent varumärkesupplevelse över alla kontaktpunkter. Nå din målgrupp var de än är.", benefits: ["Konsekvent varumärkesupplevelse", "Maximal räckvidd över alla kanaler", "Integrerad kampanjstrategi", "Högre total ROI"], features: ["Kanalovergripande kampanjer", "Enhetligt budskap", "Attributionsspårning", "Budgetoptimering"], process: ["Utveckling av multikanalstrategi", "Kampanjuppsättning per kanal", "Integrerad lansering", "Kanalovergripande optimering"] },
          ZH: { title: "全渠道广告", subtitle: "跨所有渠道的广告", description: "全渠道广告结合Google、社交媒体和展示广告，在所有接触点提供一致的品牌体验。无论受众在哪里都能触达他们。", benefits: ["一致的品牌体验", "所有渠道最大覆盖", "整合的广告活动策略", "更高的总体ROI"], features: ["跨渠道活动", "统一信息", "归因跟踪", "预算优化"], process: ["多渠道策略开发", "每个渠道的活动设置", "整合启动", "跨渠道优化"] },
          FI: { title: "Omni Advertising", subtitle: "Mainonta kaikissa kanavissa", description: "Omni Advertising yhdistää Googlen, sosiaalisen median ja display-mainokset yhtenäiseksi brändikokemukseksi kaikissa kosketuspisteissä. Tavoita yleisösi missä tahansa he ovat.", benefits: ["Yhtenäinen brändikokemus", "Maksimaalinen kattavuus kaikissa kanavissa", "Integroitu kampanjastrategia", "Korkeampi kokonais-ROI"], features: ["Kanavien väliset kampanjat", "Yhtenäinen viestintä", "Attribuution seuranta", "Budjetin optimointi"], process: ["Monikanavastrategian kehittäminen", "Kampanjan asetus kanavittain", "Integroitu lanseeraus", "Kanavien välinen optimointi"] },
          AR: { title: "Omni Advertising", subtitle: "الإعلان عبر جميع القنوات", description: "يجمع Omni Advertising بين Google ووسائل التواصل الاجتماعي وإعلانات العرض لتجربة علامة تجارية متسقة عبر جميع نقاط الاتصال. تواصل مع جمهورك أينما كانوا.", benefits: ["تجربة علامة تجارية متسقة", "أقصى وصول عبر جميع القنوات", "استراتيجية حملة متكاملة", "عائد استثمار إجمالي أعلى"], features: ["حملات عبر القنوات", "رسائل موحدة", "تتبع الإسناد", "تحسين الميزانية"], process: ["تطوير استراتيجية متعددة القنوات", "إعداد الحملة لكل قناة", "إطلاق متكامل", "تحسين عبر القنوات"] },
          DA: { title: "Omni Advertising", subtitle: "Annoncering på tværs af alle kanaler", description: "Omni Advertising kombinerer Google, sociale medier og display-annoncer for en konsistent brandoplevelse på tværs af alle touchpoints. Nå din målgruppe uanset hvor de er.", benefits: ["Konsistent brandoplevelse", "Maksimal rækkevidde på tværs af alle kanaler", "Integreret kampagnestrategi", "Højere samlet ROI"], features: ["Tværkanalkampagner", "Ensartet budskab", "Attributionssporing", "Budgetoptimering"], process: ["Multikanalstrategiudvikling", "Kampagneopsætning pr. kanal", "Integreret lancering", "Tværkanaloptimering"] },
          NO: { title: "Omni Advertising", subtitle: "Annonsering på tvers av alle kanaler", description: "Omni Advertising kombinerer Google, sosiale medier og display-annonser for en konsistent merkevareopplevelse på tvers av alle touchpoints. Nå målgruppen din uansett hvor de er.", benefits: ["Konsistent merkevareopplevelse", "Maksimal rekkevidde på tvers av alle kanaler", "Integrert kampanjestrategi", "Høyere total ROI"], features: ["Tverrkanalskampanjer", "Enhetlig budskap", "Attribusjonssporing", "Budsjettoptimalisering"], process: ["Multikanalstrategiutvikling", "Kampanjeoppsett per kanal", "Integrert lansering", "Tverrkanaloptimalisering"] }
        }
      },
      {
        name: "Omni Customization",
        slug: "omni-customization",
        icon: Star,
        description: "Customized multi-channel marketing",
        category: "to-stand-out",
        content: {
          NL: { title: "Omni Customization", subtitle: "Op maat gemaakte multichannel marketing", description: "Omni Customization biedt volledig gepersonaliseerde marketingcampagnes afgestemd op jouw unieke bedrijfsdoelen. Van strategie tot uitvoering, alles op maat.", benefits: ["100% aangepast aan jouw doelen", "Flexibele campagne aanpak", "Persoonlijke begeleiding", "Maximale resultaten"], features: ["Maatwerk strategie", "Custom campagnes", "Dedicated accountmanager", "Flexibele kanaal mix"], process: ["Strategische consultatie", "Maatwerk plan ontwikkeling", "Gefaseerde implementatie", "Continue optimalisatie"] },
          EN: { title: "Omni Customization", subtitle: "Customized multi-channel marketing", description: "Omni Customization offers fully personalized marketing campaigns tailored to your unique business goals. From strategy to execution, everything custom-made.", benefits: ["100% customized to your goals", "Flexible campaign approach", "Personal guidance", "Maximum results"], features: ["Custom strategy", "Custom campaigns", "Dedicated account manager", "Flexible channel mix"], process: ["Strategic consultation", "Custom plan development", "Phased implementation", "Continuous optimization"] },
          FR: { title: "Omni Customization", subtitle: "Marketing multicanal personnalisé", description: "Omni Customization offre des campagnes marketing entièrement personnalisées adaptées à vos objectifs uniques. De la stratégie à l'exécution, tout sur mesure.", benefits: ["100% personnalisé à vos objectifs", "Approche de campagne flexible", "Accompagnement personnel", "Résultats maximaux"], features: ["Stratégie sur mesure", "Campagnes personnalisées", "Gestionnaire de compte dédié", "Mix de canaux flexible"], process: ["Consultation stratégique", "Développement de plan personnalisé", "Implémentation par phases", "Optimisation continue"] },
          PL: { title: "Omni Customization", subtitle: "Spersonalizowany marketing wielokanałowy", description: "Omni Customization oferuje w pełni spersonalizowane kampanie marketingowe dostosowane do Twoich unikalnych celów biznesowych. Od strategii po realizację, wszystko na miarę.", benefits: ["100% dostosowane do Twoich celów", "Elastyczne podejście do kampanii", "Osobiste wsparcie", "Maksymalne wyniki"], features: ["Strategia na miarę", "Niestandardowe kampanie", "Dedykowany opiekun klienta", "Elastyczny mix kanałów"], process: ["Konsultacja strategiczna", "Rozwój niestandardowego planu", "Fazowa implementacja", "Ciągła optymalizacja"] },
          RU: { title: "Omni Customization", subtitle: "Индивидуальный мультиканальный маркетинг", description: "Omni Customization предлагает полностью персонализированные маркетинговые кампании, адаптированные к вашим уникальным бизнес-целям. От стратегии до исполнения, всё на заказ.", benefits: ["100% настроено под ваши цели", "Гибкий подход к кампаниям", "Персональное сопровождение", "Максимальные результаты"], features: ["Индивидуальная стратегия", "Кастомные кампании", "Выделенный аккаунт-менеджер", "Гибкий микс каналов"], process: ["Стратегическая консультация", "Разработка индивидуального плана", "Поэтапная реализация", "Постоянная оптимизация"] },
          DE: { title: "Omni Customization", subtitle: "Maßgeschneidertes Multichannel-Marketing", description: "Omni Customization bietet vollständig personalisierte Marketingkampagnen, die auf Ihre einzigartigen Geschäftsziele zugeschnitten sind. Von der Strategie bis zur Umsetzung, alles maßgeschneidert.", benefits: ["100% an Ihre Ziele angepasst", "Flexibler Kampagnenansatz", "Persönliche Betreuung", "Maximale Ergebnisse"], features: ["Maßgeschneiderte Strategie", "Individuelle Kampagnen", "Dedizierter Account Manager", "Flexibler Kanalmix"], process: ["Strategische Beratung", "Individuelle Planentwicklung", "Phasenweise Implementierung", "Kontinuierliche Optimierung"] },
          ES: { title: "Omni Customization", subtitle: "Marketing multicanal personalizado", description: "Omni Customization ofrece campañas de marketing completamente personalizadas adaptadas a tus objetivos de negocio únicos. Desde estrategia hasta ejecución, todo a medida.", benefits: ["100% personalizado a tus objetivos", "Enfoque de campaña flexible", "Orientación personal", "Resultados máximos"], features: ["Estrategia a medida", "Campañas personalizadas", "Gestor de cuenta dedicado", "Mix de canales flexible"], process: ["Consulta estratégica", "Desarrollo de plan personalizado", "Implementación por fases", "Optimización continua"] },
          IT: { title: "Omni Customization", subtitle: "Marketing multicanale personalizzato", description: "Omni Customization offre campagne marketing completamente personalizzate su misura per i tuoi obiettivi aziendali unici. Dalla strategia all'esecuzione, tutto su misura.", benefits: ["100% personalizzato ai tuoi obiettivi", "Approccio flessibile alle campagne", "Guida personale", "Risultati massimi"], features: ["Strategia su misura", "Campagne personalizzate", "Account manager dedicato", "Mix di canali flessibile"], process: ["Consultazione strategica", "Sviluppo piano personalizzato", "Implementazione graduale", "Ottimizzazione continua"] },
          UK: { title: "Omni Customization", subtitle: "Індивідуальний мультиканальний маркетинг", description: "Omni Customization пропонує повністю персоналізовані маркетингові кампанії, адаптовані до ваших унікальних бізнес-цілей. Від стратегії до виконання, все на замовлення.", benefits: ["100% налаштовано під ваші цілі", "Гнучкий підхід до кампаній", "Персональний супровід", "Максимальні результати"], features: ["Індивідуальна стратегія", "Кастомні кампанії", "Виділений акаунт-менеджер", "Гнучкий мікс каналів"], process: ["Стратегічна консультація", "Розробка індивідуального плану", "Поетапна реалізація", "Постійна оптимізація"] },
          TR: { title: "Omni Customization", subtitle: "Özelleştirilmiş çok kanallı pazarlama", description: "Omni Customization, benzersiz iş hedeflerinize göre uyarlanmış tamamen kişiselleştirilmiş pazarlama kampanyaları sunar. Stratejiden uygulamaya, her şey özel yapım.", benefits: ["Hedeflerinize %100 özelleştirilmiş", "Esnek kampanya yaklaşımı", "Kişisel rehberlik", "Maksimum sonuçlar"], features: ["Özel strateji", "Özel kampanyalar", "Özel hesap yöneticisi", "Esnek kanal karışımı"], process: ["Stratejik danışmanlık", "Özel plan geliştirme", "Aşamalı uygulama", "Sürekli optimizasyon"] },
          SV: { title: "Omni Customization", subtitle: "Anpassad multikanalmarknadsföring", description: "Omni Customization erbjuder helt personaliserade marknadsföringskampanjer skräddarsydda för dina unika affärsmål. Från strategi till genomförande, allt skräddarsytt.", benefits: ["100% anpassat till dina mål", "Flexibel kampanjmetod", "Personlig vägledning", "Maximala resultat"], features: ["Skräddarsydd strategi", "Anpassade kampanjer", "Dedikerad kontoansvarig", "Flexibel kanalmix"], process: ["Strategisk konsultation", "Utveckling av anpassad plan", "Fasad implementering", "Kontinuerlig optimering"] },
          ZH: { title: "Omni定制", subtitle: "定制多渠道营销", description: "Omni定制提供完全个性化的营销活动，根据您独特的业务目标量身定制。从战略到执行，一切定制。", benefits: ["100%根据您的目标定制", "灵活的活动方法", "个人指导", "最大成果"], features: ["定制策略", "定制活动", "专属客户经理", "灵活的渠道组合"], process: ["战略咨询", "定制计划开发", "分阶段实施", "持续优化"] },
          FI: { title: "Omni Customization", subtitle: "Räätälöity monikanavamarkkinointi", description: "Omni Customization tarjoaa täysin personoituja markkinointikampanjoita, jotka on räätälöity ainutlaatuisiin liiketoimintatavoitteisiisi. Strategiasta toteutukseen, kaikki mittatilaustyönä.", benefits: ["100% räätälöity tavoitteisiisi", "Joustava kampanjalähestymistapa", "Henkilökohtainen ohjaus", "Maksimaaliset tulokset"], features: ["Räätälöity strategia", "Räätälöidyt kampanjat", "Oma asiakasvastaava", "Joustava kanavamix"], process: ["Strateginen konsultointi", "Räätälöidyn suunnitelman kehittäminen", "Vaiheittainen toteutus", "Jatkuva optimointi"] },
          AR: { title: "Omni Customization", subtitle: "تسويق متعدد القنوات مخصص", description: "يقدم Omni Customization حملات تسويقية مخصصة بالكامل ومصممة خصيصاً لأهداف عملك الفريدة. من الاستراتيجية إلى التنفيذ، كل شيء مصنوع حسب الطلب.", benefits: ["مخصص 100% لأهدافك", "نهج حملة مرن", "إرشاد شخصي", "أقصى نتائج"], features: ["استراتيجية مخصصة", "حملات مخصصة", "مدير حساب مخصص", "مزيج قنوات مرن"], process: ["استشارة استراتيجية", "تطوير خطة مخصصة", "تنفيذ مرحلي", "تحسين مستمر"] },
          DA: { title: "Omni Customization", subtitle: "Tilpasset multikanalmarkedsføring", description: "Omni Customization tilbyder fuldt personaliserede marketingkampagner skræddersyet til dine unikke forretningsmål. Fra strategi til udførelse, alt skræddersyet.", benefits: ["100% tilpasset dine mål", "Fleksibel kampagnetilgang", "Personlig vejledning", "Maksimale resultater"], features: ["Skræddersyet strategi", "Tilpassede kampagner", "Dedikeret kontaktperson", "Fleksibelt kanalmix"], process: ["Strategisk konsultation", "Udvikling af tilpasset plan", "Fasebaseret implementering", "Løbende optimering"] },
          NO: { title: "Omni Customization", subtitle: "Tilpasset multikanalmarkedsføring", description: "Omni Customization tilbyr fullt personaliserte markedsføringskampanjer skreddersydd til dine unike forretningsmål. Fra strategi til gjennomføring, alt skreddersydd.", benefits: ["100% tilpasset dine mål", "Fleksibel kampanjetilnærming", "Personlig veiledning", "Maksimale resultater"], features: ["Skreddersydd strategi", "Tilpassede kampanjer", "Dedikert kontaktperson", "Fleksibel kanalmiks"], process: ["Strategisk konsultasjon", "Utvikling av tilpasset plan", "Fasebasert implementering", "Kontinuerlig optimalisering"] }
        }
      }
    ]
  },
  {
    title: "SATISFIED CUSTOMERS",
    items: [
      {
        name: "Customer Site",
        slug: "customer-site",
        icon: Monitor,
        description: "Customer portal for better service",
        category: "satisfied-customers",
        content: {
          NL: { title: "Klantportaal", subtitle: "Beter klantcontact via een eigen portaal", description: "Een klantportaal verbetert de communicatie met je klanten. Bied self-service opties, deel documenten en versterk de klantrelatie via een professioneel online platform.", benefits: ["Verbeterde klantcommunicatie", "24/7 self-service voor klanten", "Gestroomlijnde documentdeling", "Verhoogde klanttevredenheid"], features: ["Persoonlijk klantdashboard", "Document management", "Communicatie tools", "Beveiligde toegang"], process: ["Behoefteanalyse", "Portaal ontwerp", "Ontwikkeling en integratie", "Training en lancering"] },
          EN: { title: "Customer Portal", subtitle: "Better customer contact through your own portal", description: "A customer portal improves communication with your customers. Offer self-service options, share documents and strengthen customer relationships through a professional online platform.", benefits: ["Improved customer communication", "24/7 self-service for customers", "Streamlined document sharing", "Increased customer satisfaction"], features: ["Personal customer dashboard", "Document management", "Communication tools", "Secure access"], process: ["Needs analysis", "Portal design", "Development and integration", "Training and launch"] },
          FR: { title: "Portail Client", subtitle: "Meilleur contact client via votre propre portail", description: "Un portail client améliore la communication avec vos clients. Offrez des options self-service, partagez des documents et renforcez les relations client via une plateforme en ligne professionnelle.", benefits: ["Communication client améliorée", "Self-service 24/7 pour les clients", "Partage de documents simplifié", "Satisfaction client accrue"], features: ["Tableau de bord client personnel", "Gestion de documents", "Outils de communication", "Accès sécurisé"], process: ["Analyse des besoins", "Conception du portail", "Développement et intégration", "Formation et lancement"] },
          PL: { title: "Portal Klienta", subtitle: "Lepszy kontakt z klientem przez własny portal", description: "Portal klienta poprawia komunikację z klientami. Oferuj opcje samoobsługi, udostępniaj dokumenty i wzmacniaj relacje z klientami przez profesjonalną platformę online.", benefits: ["Ulepszona komunikacja z klientami", "Samoobsługa 24/7 dla klientów", "Usprawnione udostępnianie dokumentów", "Zwiększona satysfakcja klientów"], features: ["Osobisty panel klienta", "Zarządzanie dokumentami", "Narzędzia komunikacji", "Bezpieczny dostęp"], process: ["Analiza potrzeb", "Projekt portalu", "Rozwój i integracja", "Szkolenie i uruchomienie"] },
          RU: { title: "Клиентский Портал", subtitle: "Лучший контакт с клиентами через собственный портал", description: "Клиентский портал улучшает коммуникацию с клиентами. Предлагайте опции самообслуживания, делитесь документами и укрепляйте отношения через профессиональную онлайн-платформу.", benefits: ["Улучшенная коммуникация с клиентами", "Самообслуживание 24/7", "Упрощенный обмен документами", "Повышенная удовлетворенность клиентов"], features: ["Личный кабинет клиента", "Управление документами", "Инструменты коммуникации", "Безопасный доступ"], process: ["Анализ потребностей", "Дизайн портала", "Разработка и интеграция", "Обучение и запуск"] },
          DE: { title: "Kundenportal", subtitle: "Besserer Kundenkontakt über Ihr eigenes Portal", description: "Ein Kundenportal verbessert die Kommunikation mit Ihren Kunden. Bieten Sie Self-Service-Optionen, teilen Sie Dokumente und stärken Sie Kundenbeziehungen über eine professionelle Online-Plattform.", benefits: ["Verbesserte Kundenkommunikation", "24/7 Self-Service für Kunden", "Optimierter Dokumentenaustausch", "Erhöhte Kundenzufriedenheit"], features: ["Persönliches Kunden-Dashboard", "Dokumentenmanagement", "Kommunikationstools", "Sicherer Zugang"], process: ["Bedarfsanalyse", "Portal-Design", "Entwicklung und Integration", "Schulung und Launch"] },
          ES: { title: "Portal de Clientes", subtitle: "Mejor contacto con clientes a través de tu portal", description: "Un portal de clientes mejora la comunicación con tus clientes. Ofrece opciones de autoservicio, comparte documentos y fortalece relaciones a través de una plataforma profesional.", benefits: ["Comunicación con clientes mejorada", "Autoservicio 24/7 para clientes", "Compartición de documentos optimizada", "Mayor satisfacción del cliente"], features: ["Panel personal del cliente", "Gestión de documentos", "Herramientas de comunicación", "Acceso seguro"], process: ["Análisis de necesidades", "Diseño del portal", "Desarrollo e integración", "Capacitación y lanzamiento"] },
          IT: { title: "Portale Clienti", subtitle: "Migliore contatto clienti attraverso il tuo portale", description: "Un portale clienti migliora la comunicazione con i tuoi clienti. Offri opzioni self-service, condividi documenti e rafforza le relazioni attraverso una piattaforma professionale.", benefits: ["Comunicazione clienti migliorata", "Self-service 24/7 per i clienti", "Condivisione documenti semplificata", "Maggiore soddisfazione del cliente"], features: ["Dashboard cliente personale", "Gestione documenti", "Strumenti di comunicazione", "Accesso sicuro"], process: ["Analisi delle esigenze", "Design del portale", "Sviluppo e integrazione", "Formazione e lancio"] },
          UK: { title: "Клієнтський Портал", subtitle: "Кращий контакт з клієнтами через власний портал", description: "Клієнтський портал покращує комунікацію з клієнтами. Пропонуйте опції самообслуговування, діліться документами та зміцнюйте відносини через професійну онлайн-платформу.", benefits: ["Покращена комунікація з клієнтами", "Самообслуговування 24/7", "Спрощений обмін документами", "Підвищена задоволеність клієнтів"], features: ["Особистий кабінет клієнта", "Управління документами", "Інструменти комунікації", "Безпечний доступ"], process: ["Аналіз потреб", "Дизайн порталу", "Розробка та інтеграція", "Навчання та запуск"] },
          TR: { title: "Müşteri Portalı", subtitle: "Kendi portalınız üzerinden daha iyi müşteri iletişimi", description: "Müşteri portalı müşterilerinizle iletişimi geliştirir. Self-servis seçenekleri sunun, belgeleri paylaşın ve profesyonel bir çevrimiçi platform aracılığıyla ilişkileri güçlendirin.", benefits: ["Geliştirilmiş müşteri iletişimi", "Müşteriler için 7/24 self-servis", "Kolaylaştırılmış belge paylaşımı", "Artan müşteri memnuniyeti"], features: ["Kişisel müşteri paneli", "Belge yönetimi", "İletişim araçları", "Güvenli erişim"], process: ["İhtiyaç analizi", "Portal tasarımı", "Geliştirme ve entegrasyon", "Eğitim ve lansman"] },
          SV: { title: "Kundportal", subtitle: "Bättre kundkontakt via din egen portal", description: "En kundportal förbättrar kommunikationen med dina kunder. Erbjud självbetjäningsalternativ, dela dokument och stärk kundrelationer genom en professionell online-plattform.", benefits: ["Förbättrad kundkommunikation", "Självbetjäning dygnet runt", "Effektiviserad dokumentdelning", "Ökad kundnöjdhet"], features: ["Personlig kundpanel", "Dokumenthantering", "Kommunikationsverktyg", "Säker åtkomst"], process: ["Behovsanalys", "Portaldesign", "Utveckling och integration", "Utbildning och lansering"] },
          ZH: { title: "客户门户", subtitle: "通过您自己的门户更好地联系客户", description: "客户门户改善与客户的沟通。提供自助服务选项，共享文档，通过专业在线平台加强客户关系。", benefits: ["改善客户沟通", "全天候客户自助服务", "简化文档共享", "提高客户满意度"], features: ["个人客户仪表板", "文档管理", "沟通工具", "安全访问"], process: ["需求分析", "门户设计", "开发和集成", "培训和启动"] },
          FI: { title: "Asiakasportaali", subtitle: "Parempi asiakaskontakti oman portaalin kautta", description: "Asiakasportaali parantaa viestintää asiakkaidesi kanssa. Tarjoa itsepalveluvaihtoehtoja, jaa dokumentteja ja vahvista asiakassuhteita ammattimaisen verkkoalustan kautta.", benefits: ["Parantunut asiakasviestintä", "24/7 itsepalvelu asiakkaille", "Tehostettu dokumenttien jakaminen", "Lisääntynyt asiakastyytyväisyys"], features: ["Henkilökohtainen asiakaspaneeli", "Dokumenttien hallinta", "Viestintätyökalut", "Turvallinen pääsy"], process: ["Tarveanalyysi", "Portaalin suunnittelu", "Kehitys ja integrointi", "Koulutus ja lanseeraus"] },
          AR: { title: "بوابة العملاء", subtitle: "تواصل أفضل مع العملاء عبر بوابتك الخاصة", description: "تحسن بوابة العملاء التواصل مع عملائك. قدم خيارات الخدمة الذاتية وشارك المستندات وعزز العلاقات عبر منصة احترافية عبر الإنترنت.", benefits: ["تحسين التواصل مع العملاء", "خدمة ذاتية على مدار الساعة", "مشاركة مستندات مبسطة", "زيادة رضا العملاء"], features: ["لوحة تحكم شخصية للعميل", "إدارة المستندات", "أدوات التواصل", "وصول آمن"], process: ["تحليل الاحتياجات", "تصميم البوابة", "التطوير والتكامل", "التدريب والإطلاق"] },
          DA: { title: "Kundeportal", subtitle: "Bedre kundekontakt via din egen portal", description: "En kundeportal forbedrer kommunikationen med dine kunder. Tilbyd selvbetjeningsmuligheder, del dokumenter og styrk kunderelationer via en professionel online platform.", benefits: ["Forbedret kundekommunikation", "24/7 selvbetjening for kunder", "Strømlinet dokumentdeling", "Øget kundetilfredshed"], features: ["Personligt kunde-dashboard", "Dokumenthåndtering", "Kommunikationsværktøjer", "Sikker adgang"], process: ["Behovsanalyse", "Portaldesign", "Udvikling og integration", "Træning og lancering"] },
          NO: { title: "Kundeportal", subtitle: "Bedre kundekontakt via din egen portal", description: "En kundeportal forbedrer kommunikasjonen med kundene dine. Tilby selvbetjeningsalternativer, del dokumenter og styrk kunderelasjoner via en profesjonell nettplattform.", benefits: ["Forbedret kundekommunikasjon", "24/7 selvbetjening for kunder", "Effektivisert dokumentdeling", "Økt kundetilfredshet"], features: ["Personlig kundepanel", "Dokumenthåndtering", "Kommunikasjonsverktøy", "Sikker tilgang"], process: ["Behovsanalyse", "Portaldesign", "Utvikling og integrasjon", "Opplæring og lansering"] }
        }
      },
      {
        name: "Review Cards",
        slug: "review-cards",
        icon: MessageSquare,
        description: "Collect and showcase customer reviews",
        category: "satisfied-customers",
        content: {
          NL: { title: "Review Kaarten", subtitle: "Verzamel en toon klantbeoordelingen", description: "Review Kaarten maken het makkelijk om klantbeoordelingen te verzamelen. Verstuur fysieke of digitale kaarten die klanten direct naar je Google Reviews pagina leiden.", benefits: ["Eenvoudig reviews verzamelen", "Verhoog Google rating", "Bouw vertrouwen op", "Verbeter online reputatie"], features: ["NFC review kaarten", "QR code integratie", "Directe Google Reviews link", "Tracking en analytics"], process: ["Review strategie bepalen", "Kaarten ontwerpen", "Kaarten produceren", "Implementatie en follow-up"] },
          EN: { title: "Review Cards", subtitle: "Collect and showcase customer reviews", description: "Review Cards make it easy to collect customer reviews. Send physical or digital cards that direct customers straight to your Google Reviews page.", benefits: ["Easy review collection", "Increase Google rating", "Build trust", "Improve online reputation"], features: ["NFC review cards", "QR code integration", "Direct Google Reviews link", "Tracking and analytics"], process: ["Define review strategy", "Design cards", "Produce cards", "Implementation and follow-up"] },
          FR: { title: "Cartes d'Avis", subtitle: "Collectez et affichez les avis clients", description: "Les Cartes d'Avis facilitent la collecte d'avis clients. Envoyez des cartes physiques ou numériques qui dirigent les clients vers votre page Google Reviews.", benefits: ["Collecte d'avis facile", "Augmentez la note Google", "Construisez la confiance", "Améliorez la réputation en ligne"], features: ["Cartes NFC d'avis", "Intégration de code QR", "Lien direct Google Reviews", "Suivi et analytics"], process: ["Définir la stratégie d'avis", "Concevoir les cartes", "Produire les cartes", "Implémentation et suivi"] },
          PL: { title: "Karty Opinii", subtitle: "Zbieraj i prezentuj opinie klientów", description: "Karty Opinii ułatwiają zbieranie opinii klientów. Wysyłaj fizyczne lub cyfrowe karty, które kierują klientów bezpośrednio na Twoją stronę Google Reviews.", benefits: ["Łatwe zbieranie opinii", "Zwiększ ocenę Google", "Buduj zaufanie", "Popraw reputację online"], features: ["Karty NFC do opinii", "Integracja kodu QR", "Bezpośredni link do Google Reviews", "Śledzenie i analityka"], process: ["Określ strategię opinii", "Zaprojektuj karty", "Wyprodukuj karty", "Wdrożenie i follow-up"] },
          RU: { title: "Карточки Отзывов", subtitle: "Собирайте и демонстрируйте отзывы клиентов", description: "Карточки Отзывов упрощают сбор отзывов клиентов. Отправляйте физические или цифровые карточки, которые направляют клиентов прямо на вашу страницу Google Reviews.", benefits: ["Простой сбор отзывов", "Повысьте рейтинг Google", "Постройте доверие", "Улучшите онлайн-репутацию"], features: ["NFC карточки отзывов", "Интеграция QR-кода", "Прямая ссылка на Google Reviews", "Отслеживание и аналитика"], process: ["Определите стратегию отзывов", "Разработайте карточки", "Произведите карточки", "Внедрение и follow-up"] },
          DE: { title: "Bewertungskarten", subtitle: "Sammeln und präsentieren Sie Kundenbewertungen", description: "Bewertungskarten erleichtern das Sammeln von Kundenbewertungen. Senden Sie physische oder digitale Karten, die Kunden direkt zu Ihrer Google Reviews Seite leiten.", benefits: ["Einfaches Sammeln von Bewertungen", "Google-Bewertung erhöhen", "Vertrauen aufbauen", "Online-Reputation verbessern"], features: ["NFC Bewertungskarten", "QR-Code-Integration", "Direkter Google Reviews Link", "Tracking und Analytics"], process: ["Bewertungsstrategie definieren", "Karten designen", "Karten produzieren", "Implementierung und Follow-up"] },
          ES: { title: "Tarjetas de Reseñas", subtitle: "Recopila y muestra reseñas de clientes", description: "Las Tarjetas de Reseñas facilitan la recopilación de reseñas. Envía tarjetas físicas o digitales que dirigen a los clientes directamente a tu página de Google Reviews.", benefits: ["Recopilación fácil de reseñas", "Aumenta la calificación de Google", "Construye confianza", "Mejora la reputación online"], features: ["Tarjetas NFC de reseñas", "Integración de código QR", "Enlace directo a Google Reviews", "Seguimiento y analytics"], process: ["Definir estrategia de reseñas", "Diseñar tarjetas", "Producir tarjetas", "Implementación y seguimiento"] },
          IT: { title: "Carte Recensioni", subtitle: "Raccogli e mostra le recensioni dei clienti", description: "Le Carte Recensioni facilitano la raccolta di recensioni clienti. Invia carte fisiche o digitali che indirizzano i clienti direttamente alla tua pagina Google Reviews.", benefits: ["Raccolta recensioni facile", "Aumenta la valutazione Google", "Costruisci fiducia", "Migliora la reputazione online"], features: ["Carte NFC per recensioni", "Integrazione codice QR", "Link diretto Google Reviews", "Tracciamento e analytics"], process: ["Definire strategia recensioni", "Progettare le carte", "Produrre le carte", "Implementazione e follow-up"] },
          UK: { title: "Картки Відгуків", subtitle: "Збирайте та демонструйте відгуки клієнтів", description: "Картки Відгуків спрощують збір відгуків клієнтів. Надсилайте фізичні або цифрові картки, які направляють клієнтів прямо на вашу сторінку Google Reviews.", benefits: ["Простий збір відгуків", "Підвищіть рейтинг Google", "Побудуйте довіру", "Покращіть онлайн-репутацію"], features: ["NFC картки відгуків", "Інтеграція QR-коду", "Пряме посилання на Google Reviews", "Відстеження та аналітика"], process: ["Визначте стратегію відгуків", "Розробіть картки", "Виготовіть картки", "Впровадження та follow-up"] },
          TR: { title: "Yorum Kartları", subtitle: "Müşteri yorumlarını toplayın ve sergileyin", description: "Yorum Kartları müşteri yorumlarını toplamayı kolaylaştırır. Müşterileri doğrudan Google Yorumlar sayfanıza yönlendiren fiziksel veya dijital kartlar gönderin.", benefits: ["Kolay yorum toplama", "Google puanını artırın", "Güven oluşturun", "Çevrimiçi itibarı iyileştirin"], features: ["NFC yorum kartları", "QR kod entegrasyonu", "Doğrudan Google Yorumlar linki", "İzleme ve analitik"], process: ["Yorum stratejisi belirleme", "Kartları tasarlama", "Kartları üretme", "Uygulama ve takip"] },
          SV: { title: "Recensionskort", subtitle: "Samla in och visa kundrecensioner", description: "Recensionskort gör det enkelt att samla in kundrecensioner. Skicka fysiska eller digitala kort som leder kunder direkt till din Google Reviews-sida.", benefits: ["Enkel insamling av recensioner", "Öka Google-betyget", "Bygg förtroende", "Förbättra online-rykte"], features: ["NFC recensionskort", "QR-kodsintegration", "Direktlänk till Google Reviews", "Spårning och analys"], process: ["Definiera recensionsstrategi", "Designa kort", "Producera kort", "Implementering och uppföljning"] },
          ZH: { title: "评论卡", subtitle: "收集和展示客户评论", description: "评论卡使收集客户评论变得简单。发送实体或数字卡片，直接引导客户到您的Google评论页面。", benefits: ["轻松收集评论", "提高Google评分", "建立信任", "改善在线声誉"], features: ["NFC评论卡", "二维码集成", "直接Google评论链接", "跟踪和分析"], process: ["确定评论策略", "设计卡片", "生产卡片", "实施和跟进"] },
          FI: { title: "Arvostelukorttit", subtitle: "Kerää ja näytä asiakasarvioita", description: "Arvostelukorttit helpottavat asiakasarvostelujen keräämistä. Lähetä fyysisiä tai digitaalisia kortteja, jotka ohjaavat asiakkaat suoraan Google Reviews -sivullesi.", benefits: ["Helppo arvostelujen kerääminen", "Nosta Google-arvosanaa", "Rakenna luottamusta", "Paranna verkkomainetta"], features: ["NFC arvostelukorttit", "QR-koodin integrointi", "Suora linkki Google Reviewsiin", "Seuranta ja analytiikka"], process: ["Määritä arvostelustrategia", "Suunnittele kortit", "Tuota kortit", "Toteutus ja seuranta"] },
          AR: { title: "بطاقات المراجعات", subtitle: "اجمع واعرض تقييمات العملاء", description: "بطاقات المراجعات تسهل جمع تقييمات العملاء. أرسل بطاقات فعلية أو رقمية توجه العملاء مباشرة إلى صفحة Google Reviews الخاصة بك.", benefits: ["جمع سهل للتقييمات", "رفع تقييم Google", "بناء الثقة", "تحسين السمعة عبر الإنترنت"], features: ["بطاقات NFC للمراجعات", "تكامل رمز QR", "رابط مباشر لـ Google Reviews", "التتبع والتحليلات"], process: ["تحديد استراتيجية المراجعات", "تصميم البطاقات", "إنتاج البطاقات", "التنفيذ والمتابعة"] },
          DA: { title: "Anmeldelseskort", subtitle: "Indsaml og vis kundeanmeldelser", description: "Anmeldelseskort gør det nemt at indsamle kundeanmeldelser. Send fysiske eller digitale kort, der leder kunder direkte til din Google Reviews side.", benefits: ["Nem indsamling af anmeldelser", "Forøg Google-bedømmelse", "Byg tillid", "Forbedre online omdømme"], features: ["NFC anmeldelseskort", "QR-kode integration", "Direkte Google Reviews link", "Sporing og analytics"], process: ["Definer anmeldelsesstrategi", "Design kort", "Producér kort", "Implementering og opfølgning"] },
          NO: { title: "Anmeldelseskort", subtitle: "Samle inn og vis kundeanmeldelser", description: "Anmeldelseskort gjør det enkelt å samle inn kundeanmeldelser. Send fysiske eller digitale kort som leder kunder direkte til din Google Reviews-side.", benefits: ["Enkel innsamling av anmeldelser", "Øk Google-vurdering", "Bygg tillit", "Forbedre online omdømme"], features: ["NFC anmeldelseskort", "QR-kode integrasjon", "Direkte Google Reviews lenke", "Sporing og analyse"], process: ["Definer anmeldelsesstrategi", "Design kort", "Produser kort", "Implementering og oppfølging"] }
        }
      }
    ]
  }
];

// Add more service categories and items here
export const allServices: ServiceItem[] = serviceCategories.flatMap(category => category.items);