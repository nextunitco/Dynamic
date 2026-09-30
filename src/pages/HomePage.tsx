import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Disc, 
  ShieldAlert, 
  Cpu, 
  Zap, 
  Wind, 
  Activity, 
  FileCheck, 
  Truck,
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Users, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Phone,
  Calendar,
  Building2,
  Handshake,
  BookOpen,
  ChevronLeft
} from 'lucide-react';
import { PageId, ServiceItem, KnowledgeArticle } from '../types';
import { SERVICES_LIST } from '../data/servicesData';
import { KNOWLEDGE_ARTICLES } from '../data/knowledgeData';
import { 
  companyImages, 
  partnerAssets, 
  corporateClientAssets,
  LOYALTY_REWARD_DISPLAY_RATE 
} from '../data/companyImages';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectArticle: (article: KnowledgeArticle) => void;
  onOpenBooking: (prefillService?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectService,
  onSelectArticle,
  onOpenBooking
}) => {
  // Slideshow state for Home Hero only (Images: WA0044, WA0042, WA0043, WA0033, WA0045)
  const slides = [
    {
      image: companyImages.homeSlide1,
      caption: 'State-of-the-Art Workshop Facility in Isolo, Lagos'
    },
    {
      image: companyImages.homeSlide2,
      caption: 'Commercial Fleet Maintenance & Utility Vehicle Bays'
    },
    {
      image: companyImages.homeSlide3,
      caption: 'Certified Automotive Engineers & Technical Leadership'
    },
    {
      image: companyImages.homeSlide4,
      caption: 'Precision Mechanical Repairs & Multi-Point Servicing'
    },
    {
      image: companyImages.homeSlide5,
      caption: 'Advanced Bi-Directional ECU Diagnostics & Sensor Calibration'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto crossfade every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Helper to map icon names to Lucide icons
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-5 h-5 text-orange-600" />;
      case 'Disc': return <Disc className="w-5 h-5 text-orange-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-orange-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-orange-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-orange-600" />;
      case 'Wind': return <Wind className="w-5 h-5 text-orange-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-orange-600" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-orange-600" />;
      case 'Truck': return <Truck className="w-5 h-5 text-orange-600" />;
      default: return <Wrench className="w-5 h-5 text-orange-600" />;
    }
  };

  // Preview Knowledge articles (4 cards)
  const previewArticles = KNOWLEDGE_ARTICLES.slice(0, 4);

  // Selected knowledge categories for preview
  const knowledgeCategories = [
    { title: 'Engine & Lubrication', count: 'Oil viscosity, filter intervals & coolant care' },
    { title: 'Braking Systems', count: 'Pad friction wear, brake rotors & hydraulic safety' },
    { title: 'Tyres & Wheel Alignment', count: 'Tread depth, camber tracking & high-speed balance' },
    { title: 'Electrical & Diagnostics', count: 'OBD2 live sensor scans, alternators & AGM batteries' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-neutral-50">
      
      {/* 1. HERO SECTION: FULL-WIDTH SLIDESHOW (ONLY HOME PAGE) */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] flex items-center border-b border-slate-800">
        
        {/* Smooth Crossfade Slides */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image.cdnUrl}
              alt={slide.image.alt}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== window.location.origin + slide.image.localPath) {
                  target.src = slide.image.localPath;
                }
              }}
              className="w-full h-full object-cover object-center scale-100"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            {/* Dark Transparent Overlays ensuring maximum readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
            <div className="absolute inset-0 bg-slate-950/30 mix-blend-multiply" />
          </div>
        ))}

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-600/25 border border-orange-500/40 rounded-full text-xs font-semibold text-orange-300">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>RC No: 3332447 · Established in 2021 · Isolo, Lagos</span>
            </div>

            {/* Required Hero Heading & Text */}
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 block">
                Dynamic Automotive &amp; Tyre Centre
              </span>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Professional Automotive Care You Can Trust
              </h1>
              <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl pt-1">
                Expert vehicle servicing, tyres, diagnostics, maintenance and automotive solutions. Serving individual vehicle owners and commercial fleet operators across Lagos.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold rounded-xl text-sm sm:text-base shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Service</span>
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 font-semibold rounded-xl text-sm sm:text-base transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Active Slide Caption Badge */}
            <div className="pt-4 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>{slides[currentSlide].caption}</span>
            </div>

          </div>
        </div>

        {/* Slide Controls & Indicators */}
        <div className="absolute z-20 bottom-6 right-6 sm:right-10 flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === i ? 'w-8 bg-orange-500' : 'w-2 bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* 2. SERVICES PREVIEW: CLEAN CARDS FOR 9 SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Workshop Disciplines
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Our Core Automotive Services
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              From interval oil changes and precision tyre fitting to dealer-level diagnostics with Bosch and Autel platforms.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer self-start sm:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 9 Clean Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.slice(0, 9).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {renderServiceIcon(service.iconName)}
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal mt-2 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-5 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-neutral-900 hover:text-orange-600 flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="text-xs font-semibold text-orange-600 hover:underline cursor-pointer"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE DYNAMIC AUTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-neutral-200/90 p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
                Engineering Integrity
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                Why Drivers &amp; Fleet Managers Choose Dynamic Auto
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Founded in 2021, Dynamic Automotive &amp; Tyre Centre combines European workshop engineering standards with deep knowledge of Nigerian road environments and traffic conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Professional Automotive Service</h4>
                  <p className="text-[11px] text-neutral-500">Rigorous 50-point inspection before any vehicle is handed back.</p>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Trained Technical Staff</h4>
                  <p className="text-[11px] text-neutral-500">Certified technicians continuously trained on modern vehicle ECUs.</p>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-3">
                <Truck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Fleet Service Capability</h4>
                  <p className="text-[11px] text-neutral-500">Turnkey fleet retainers with dedicated bays for corporate clients.</p>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Customer-Focused Service</h4>
                  <p className="text-[11px] text-neutral-500">Transparent quotes, digital invoicing and 5% loyalty reward credits.</p>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Modern Diagnostic Approach</h4>
                  <p className="text-[11px] text-neutral-500">Bosch &amp; Autel bi-directional live data scanning without guesswork.</p>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Reliable Automotive Solutions</h4>
                  <p className="text-[11px] text-neutral-500">Genuine OEM-grade replacement parts and guaranteed workmanship.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Supporting Real Image WA0040 (Technical Expertise) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
              <img
                src={companyImages.teamWorkshop.cdnUrl}
                alt={companyImages.teamWorkshop.alt}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + companyImages.teamWorkshop.localPath) {
                    target.src = companyImages.teamWorkshop.localPath;
                  }
                }}
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">Technical Standards</span>
                  <p className="text-sm font-semibold text-slate-100">Certified Diagnostic Engineers at Isolo Workshop</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FLEET SERVICES: USING REAL WA0042 IMAGE (Explicit Requirement) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white border border-slate-800 shadow-xl">
          
          {/* Background Real Image WA0042 */}
          <img
            src={companyImages.fleet.cdnUrl}
            alt="Dynamic Automotive fleet maintenance bay with commercial vans"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== window.location.origin + companyImages.fleet.localPath) {
                target.src = companyImages.fleet.localPath;
              }
            }}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/50 border border-blue-700/50 rounded-full text-xs font-semibold text-blue-200">
              <Truck className="w-3.5 h-3.5 text-orange-400" />
              <span>Commercial &amp; Corporate Vehicle Operations</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Enterprise Fleet Maintenance &amp; Retainer Support
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Dynamic Automotive &amp; Tyre Centre provides comprehensive automotive support for businesses, banks, and vehicle fleets across Lagos. From scheduled interval inspections to priority tyre management and 30-day corporate billing terms, we keep your business in motion.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Dedicated bay priority</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Consolidated monthly invoicing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Mobile fleet tyre dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Digital service histories</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('fleet')}
                className="px-7 py-3 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-xs cursor-pointer text-center"
              >
                Talk to Our Fleet Team
              </button>
              <button
                onClick={() => onNavigate('partners')}
                className="px-6 py-3 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer text-center"
              >
                View Corporate Retainers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOYALTY PROGRAM PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-neutral-200/90 p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
              Dynamic Auto Loyalty Club
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Earn {LOYALTY_REWARD_DISPLAY_RATE} Credit on Every Automotive Service
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              Automotive care should be an investment that rewards you. When you service your vehicle or fit tyres with us, you automatically accumulate loyalty credits applicable towards future maintenance, AC gas refills, and wheel alignments.
            </p>
            
            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-xs text-neutral-500 block">Spend ₦10k</span>
                <span className="text-sm font-bold text-orange-600 font-display">Earn ₦500</span>
              </div>
              <div className="p-3 bg-orange-50/60 rounded-xl border border-orange-200">
                <span className="text-xs text-neutral-600 block font-medium">Spend ₦50k</span>
                <span className="text-sm font-bold text-orange-600 font-display">Earn ₦2,500</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-xs text-neutral-500 block">Spend ₦120k</span>
                <span className="text-sm font-bold text-orange-600 font-display">Earn ₦6,000</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('loyalty')}
                className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>View Loyalty Programme</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
              <img
                src={companyImages.loyalty.cdnUrl}
                alt="Dynamic Automotive customer service reception"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + companyImages.loyalty.localPath) {
                    target.src = companyImages.loyalty.localPath;
                  }
                }}
                className="w-full h-64 sm:h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">Customer Lounge</span>
                  <p className="text-xs font-medium text-slate-200">VIP service intake &amp; member benefits desk</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. KNOWLEDGE HUB PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Vehicle Engineering Education
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Knowledge Hub &amp; Maintenance Guides
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              Empowering motorists with practical preventive maintenance advice, symptom troubleshooting, and technical guides.
            </p>
          </div>
          <button
            onClick={() => onNavigate('knowledge')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer self-start sm:self-auto"
          >
            <span>Explore Knowledge Hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Preview Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {knowledgeCategories.map((cat, i) => (
            <div
              key={i}
              onClick={() => onNavigate('knowledge')}
              className="bg-white p-5 rounded-2xl border border-neutral-200/90 hover:border-orange-300 hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <BookOpen className="w-4 h-4 text-orange-600 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase font-bold text-neutral-400 font-mono">0{i + 1}</span>
              </div>
              <h3 className="font-display text-sm font-bold text-neutral-900 group-hover:text-orange-600 transition-colors">
                {cat.title}
              </h3>
              <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                {cat.count}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Featured Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {previewArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between hover:border-orange-300 hover:shadow-xs transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="font-semibold text-orange-600">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="font-display text-base font-bold text-neutral-900 hover:text-orange-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal line-clamp-2">
                  {article.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-4 flex items-center justify-between">
                <button
                  onClick={() => onSelectArticle(article)}
                  className="text-xs font-semibold text-neutral-900 hover:text-orange-600 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PARTNERS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <Handshake className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                Industry Alliances
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Our Strategic Partners
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              Technical, regulatory and underwriting partnerships that power our dealer-level vehicle services.
            </p>
          </div>
          <button
            onClick={() => onNavigate('partners')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer self-start sm:self-auto"
          >
            <span>View Our Partners</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Clean Logo Cards: object-fit: contain, no distortion */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partnerAssets.map((partner) => (
            <div
              key={partner.id}
              onClick={() => onNavigate('partners')}
              className="bg-white rounded-xl border border-neutral-200/90 p-4 flex flex-col items-center justify-center text-center hover:border-orange-300 hover:shadow-sm transition-all cursor-pointer group h-36"
            >
              <div className="h-16 w-full flex items-center justify-center p-2 mb-2">
                <img
                  src={partner.cdnUrl}
                  alt={`${partner.name} logo`}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + partner.localPath) {
                      target.src = partner.localPath;
                    }
                  }}
                  className="max-h-full max-w-full object-contain filter group-hover:brightness-105 transition-all"
                  loading="lazy"
                />
              </div>
              <span className="text-[11px] font-bold text-neutral-800 group-hover:text-orange-600 transition-colors line-clamp-1">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CORPORATE CLIENTS SECTION (Cleanly Separated) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-neutral-200 pb-5">
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Corporate Retainers
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Our Corporate Clients
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-normal mt-1 max-w-2xl">
            Established financial institutions, consumer goods companies, and underwriting groups that entrust their vehicle maintenance to Dynamic Automotive &amp; Tyre Centre.
          </p>
        </div>

        {/* Clean Corporate Logo Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {corporateClientAssets.map((client) => (
            <div
              key={client.id}
              onClick={() => onNavigate('partners')}
              className="bg-white rounded-xl border border-neutral-200/90 p-4 flex flex-col items-center justify-center text-center hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer group h-36"
            >
              <div className="h-16 w-full flex items-center justify-center p-2 mb-2">
                <img
                  src={client.cdnUrl}
                  alt={`${client.name} corporate logo`}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + client.localPath) {
                      target.src = client.localPath;
                    }
                  }}
                  className="max-h-full max-w-full object-contain filter group-hover:brightness-105 transition-all"
                  loading="lazy"
                />
              </div>
              <span className="text-[11px] font-bold text-neutral-800 group-hover:text-blue-900 transition-colors line-clamp-1">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FINAL CTA SECTION (Exact Requirements) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-12 border border-blue-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
              Isolo Workshop · Open Monday to Saturday
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Need professional automotive care?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed font-normal">
              Schedule your scheduled servicing, precision wheel alignment, brake inspection, or dealer-grade computer diagnostic check today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenBooking()}
              className="px-7 py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xs cursor-pointer text-center"
            >
              Book a Service
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-blue-900/80 hover:bg-blue-900 text-white border border-blue-800 font-semibold text-xs sm:text-sm rounded-xl transition-all cursor-pointer text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
