import React from 'react';
import { X, Clock, AlertTriangle, CheckCircle, BookOpen } from 'lucide-react';
import { KnowledgeArticle } from '../types';

interface ArticleModalProps {
  article: KnowledgeArticle | null;
  onClose: () => void;
  onBookService: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onBookService
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-start justify-between bg-neutral-50/50">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
              <span className="font-semibold text-orange-600">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-neutral-400" />
                {article.readTime}
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
              {article.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer shrink-0 ml-4"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-700 leading-relaxed">
          
          {/* Article paragraphs */}
          <div className="space-y-4 text-neutral-800 text-sm sm:text-base leading-relaxed">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key Takeaway Box */}
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 block mb-0.5">
                Key Automotive Takeaway
              </span>
              <p className="text-xs sm:text-sm text-emerald-900 font-medium">
                {article.keyTakeaway}
              </p>
            </div>
          </div>

          {/* Warning Symptoms if any */}
          {article.warningSymptoms && article.warningSymptoms.length > 0 && (
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200/60">
              <div className="flex items-center gap-2 mb-2 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Symptoms to Watch Out For:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-amber-900">
                {article.warningSymptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-neutral-100 bg-neutral-50/80 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 font-medium cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookService();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white rounded-lg font-semibold text-sm hover:bg-orange-700 transition-colors shadow-xs cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-white" />
            <span>Schedule Workshop Inspection</span>
          </button>
        </div>
      </div>
    </div>
  );
};
