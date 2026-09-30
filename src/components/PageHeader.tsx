import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageId } from '../types';
import { ImageAsset } from '../data/companyImages';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  image: ImageAsset;
  breadcrumbs: { label: string; page?: PageId }[];
  onNavigate: (page: PageId) => void;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  image,
  breadcrumbs,
  onNavigate,
  ctaText,
  onCtaClick
}) => {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white min-h-[300px] sm:min-h-[360px] flex items-center border-b border-slate-800">
      {/* Background Real Company Image with Object Cover */}
      <img
        src={image.cdnUrl}
        alt={image.alt}
        onError={(e) => {
          // Fallback to local downloaded asset if remote ever fails
          const target = e.currentTarget;
          if (target.src !== window.location.origin + image.localPath) {
            target.src = image.localPath;
          }
        }}
        className="absolute inset-0 w-full h-full object-cover object-center scale-100 transition-transform duration-700 hover:scale-105"
      />

      {/* Dark Transparent Overlays ensuring maximum legibility while displaying genuine workshop environment */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/70" />
      <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="max-w-3xl space-y-4">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-300 font-medium tracking-wide">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1 hover:text-orange-400 transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                {crumb.page ? (
                  <button
                    onClick={() => onNavigate(crumb.page!)}
                    className="hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className="text-orange-400 font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/25 border border-orange-500/40 rounded-full text-orange-300 text-xs font-semibold uppercase tracking-wider">
              <span>{badge}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
            {subtitle}
          </p>

          {/* Optional Direct Header CTA */}
          {ctaText && onCtaClick && (
            <div className="pt-2">
              <button
                onClick={onCtaClick}
                className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow-sm cursor-pointer inline-flex items-center gap-2"
              >
                <span>{ctaText}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
