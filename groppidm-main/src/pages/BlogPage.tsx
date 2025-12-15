import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export const BlogPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(t('blog.category.all'));
  const [email, setEmail] = useState("");

  const blogPosts = [
    {
      title: t('blog.posts.post1.title'),
      excerpt: t('blog.posts.post1.excerpt'),
      category: t('blog.category.seo'),
      date: t('blog.posts.post1.date'),
      readTime: t('blog.posts.post1.readTime'),
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop"
    },
    {
      title: t('blog.posts.post2.title'),
      excerpt: t('blog.posts.post2.excerpt'),
      category: t('blog.category.socialMedia'),
      date: t('blog.posts.post2.date'),
      readTime: t('blog.posts.post2.readTime'),
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop"
    },
    {
      title: t('blog.posts.post3.title'),
      excerpt: t('blog.posts.post3.excerpt'),
      category: t('blog.category.webDesign'),
      date: t('blog.posts.post3.date'),
      readTime: t('blog.posts.post3.readTime'),
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop"
    },
    {
      title: t('blog.posts.post4.title'),
      excerpt: t('blog.posts.post4.excerpt'),
      category: t('blog.category.digitalAds'),
      date: t('blog.posts.post4.date'),
      readTime: t('blog.posts.post4.readTime'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    },
    {
      title: t('blog.posts.post5.title'),
      excerpt: t('blog.posts.post5.excerpt'),
      category: t('blog.category.ecommerce'),
      date: t('blog.posts.post5.date'),
      readTime: t('blog.posts.post5.readTime'),
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop"
    },
    {
      title: t('blog.posts.post6.title'),
      excerpt: t('blog.posts.post6.excerpt'),
      category: t('blog.category.contentMarketing'),
      date: t('blog.posts.post6.date'),
      readTime: t('blog.posts.post6.readTime'),
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop"
    }
  ];

  const categories = [t('blog.category.all'), t('blog.category.seo'), t('blog.category.socialMedia'), t('blog.category.webDesign'), t('blog.category.digitalAds'), t('blog.category.ecommerce'), t('blog.category.contentMarketing')];

  const filteredPosts = selectedCategory === t('blog.category.all')
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleReadMore = (post: typeof blogPosts[0]) => {
    toast.info(`${t('blog.opening')}: ${post.title}`, {
      description: t('blog.comingSoon')
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error(t('blog.enterEmail'));
      return;
    }
    if (!email.includes("@")) {
      toast.error(t('blog.invalidEmail'));
      return;
    }
    toast.success(t('blog.subscribeSuccess'), {
      description: t('blog.subscribeSuccessDesc')
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              {t('blog.hero.title')}
            </h1>
            <p className="text-xl text-primary/70 max-w-3xl mx-auto">
              {t('blog.hero.description')}
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category
                  ? "bg-primary hover:bg-primary-dark" 
                  : "border-primary/30 text-primary hover:bg-primary/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <Card className="mb-12 overflow-hidden border-primary/30 bg-card hover:border-primary transition-all duration-300 cursor-pointer">
              <div className="grid md:grid-cols-2 gap-0" onClick={() => handleReadMore(filteredPosts[0])}>
                <div 
                  className="h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${filteredPosts[0].image})` }}
                />
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {t('blog.featured')}
                    </span>
                    <span className="text-primary/70 text-sm">{filteredPosts[0].category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-primary/70 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-primary/60 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {filteredPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {filteredPosts[0].readTime}
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary-dark w-fit">
                    {t('blog.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <Card 
                key={index}
                onClick={() => handleReadMore(post)}
                className="overflow-hidden border-primary/30 bg-card hover:border-primary hover:shadow-glow transition-all duration-300 group cursor-pointer"
              >
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-primary/70">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-primary/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-primary/70">
                {t('blog.noResults')}
              </p>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="mt-16 bg-card border border-primary/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {t('blog.newsletter.title')}
            </h2>
            <p className="text-primary/70 mb-6 max-w-2xl mx-auto">
              {t('blog.newsletter.description')}
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1 px-4 py-2 bg-background border border-primary/30 rounded-lg text-primary placeholder:text-primary/50 focus:outline-none focus:border-primary"
              />
              <Button type="submit" className="bg-primary hover:bg-primary-dark">
                {t('blog.newsletter.subscribe')}
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};