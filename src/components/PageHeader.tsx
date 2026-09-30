import React from 'react';
import { ChevronRight, Home, Camera } from 'lucide-react';
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
    <div className="relative overflow-hidden bg-slate-950 text-white min-h-[340px] sm:min-h-[400px] flex items-center border-b border-slate-800">
      {/* Background Real Company Image with Object Cover - Clearly Visible & High Resolution */}
      <img
        src={image.localPath}
        alt={image.alt}
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src !== image.cdnUrl) {
            target.src = image.cdnUrl;
          }
        }}
        className="absolute inset-0 w-full h-full object-cover object-center scale-100 transition-transform duration-700 hover:scale-105 filter brightness-100 contrast-105"
      />

      {/* Gentle directional scrim: preserves text readability on the left while leaving the photo bright and visible across the center and right */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent sm:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

      {/* Verified Facility Photo Tag */}
      <div className="absolute bottom-4 right-4 sm:right-8 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/15 text-[11px] text-slate-200 shadow-md">
        <Camera className="w-3.5 h-3.5 text-orange-400" />
        <span className="font-medium">Real Facility Photo · Isolo, Lagos</span>
      </div>

      {/* Content Container with semi-transparent glass backing for maximum text clarity */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="max-w-2xl backdrop-blur-[2px] bg-slate-950/40 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 shadow-xl">
          
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
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/30 border border-orange-500/50 rounded-full text-orange-300 text-xs font-semibold uppercase tracking-wider">
              <span>{badge}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-normal">
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
