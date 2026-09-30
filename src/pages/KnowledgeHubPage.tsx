import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  AlertCircle, 
  CheckCircle2, 
  Filter,
  Sparkles
} from 'lucide-react';
import { PageId, KnowledgeArticle } from '../types';
import { KNOWLEDGE_CATEGORIES, KNOWLEDGE_ARTICLES } from '../data/knowledgeData';
import { PageHeader } from '../components/PageHeader';
import { companyImages } from '../data/companyImages';

interface KnowledgeHubPageProps {
  onNavigate: (page: PageId) => void;
  onSelectArticle: (article: KnowledgeArticle) => void;
  onOpenBooking: (prefillService?: string) => void;
}

export const KnowledgeHubPage: React.FC<KnowledgeHubPageProps> = ({
  onNavigate,
  onSelectArticle,
  onOpenBooking
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Filter logic
  const filteredArticles = useMemo(() => {
    return KNOWLEDGE_ARTICLES.filter((article) => {
      const matchesCategory = 
        selectedCategory === 'All Categories' || article.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        query === '' ||
        article.title.toLowerCase().includes(query) ||
        article.shortDesc.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.content.some(p => p.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 bg-neutral-50">
      
      {/* 1. Header with Real WA0046 Company Image */}
      <PageHeader
        title="Automotive Knowledge Hub & Guides"
        subtitle="An educational technical resource designed to help car owners understand vehicle systems, recognize critical acoustic and electronic warning symptoms, and practice smart preventive maintenance."
        badge="14 Technical Disciplines"
        image={companyImages.knowledgeHub}
        breadcrumbs={[{ label: 'Knowledge Hub' }]}
        onNavigate={onNavigate}
        ctaText="Book Diagnostic Scan"
        onCtaClick={() => onOpenBooking('Diagnostics')}
      />

      {/* Search Input Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200/90 shadow-md max-w-3xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What do you want to learn about your car? (e.g. brakes, oil viscosity, vibrations...)"
              className="w-full pl-12 pr-16 py-3 bg-neutral-50 text-neutral-900 placeholder:text-neutral-500 text-sm rounded-xl border border-neutral-200 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-neutral-800 font-medium cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. Interactive Category Filter Scroll */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-orange-600" />
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
            Browse by 14 Automotive Categories:
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {KNOWLEDGE_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-orange-600 text-white font-semibold shadow-xs'
                    : 'bg-white text-neutral-700 hover:bg-orange-50/50 hover:text-orange-950 border border-neutral-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-neutral-500">
          <span>
            Showing <strong>{filteredArticles.length}</strong> automotive resource {filteredArticles.length === 1 ? 'article' : 'articles'}
          </span>
          {selectedCategory !== 'All Categories' && (
            <button
              onClick={() => setSelectedCategory('All Categories')}
              className="text-orange-600 hover:underline cursor-pointer"
            >
              Reset Category
            </button>
          )}
        </div>

        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-neutral-200 space-y-3">
            <AlertCircle className="w-8 h-8 text-neutral-400 mx-auto" />
            <h3 className="font-display text-base font-bold text-neutral-900">
              No matching automotive guides found
            </h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              Try adjusting your search query or selecting a different category from above.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
              }}
              className="px-4 py-2 bg-blue-950 text-white rounded-lg text-xs font-semibold hover:bg-blue-900"
            >
              View All Guides
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between hover:border-orange-300 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                    <span className="font-semibold text-orange-600">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-4 line-clamp-3">
                    {article.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenBooking()}
                    className="text-[11px] font-medium text-neutral-400 hover:text-orange-600 cursor-pointer"
                  >
                    Book Diagnostic
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

      </section>

      {/* 4. Bottom Diagnostic Advisory Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-10 border border-blue-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="font-display text-xl font-bold text-white">
              Noticed an Unusual Acoustic Symptom or Warning Light?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/80 max-w-xl">
              Don’t guess with complex vehicle computer networks. Bring your vehicle to our Isolo workshop for a bi-directional scan with Bosch and Autel platforms.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Diagnostics')}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            Book OBD2 Diagnostic Scan
          </button>
        </div>
      </section>

    </div>
  );
};
