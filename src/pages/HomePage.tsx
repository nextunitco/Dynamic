import React from 'react';
import { 
  Wrench, 
  Disc, 
  Compass, 
  CircleDot, 
  ShieldAlert, 
  Cpu, 
  Zap, 
  Wind, 
  Activity, 
  FileCheck, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Truck, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  PhoneCall,
  Calendar
} from 'lucide-react';
import { PageId, ServiceItem, KnowledgeArticle } from '../types';
import { SERVICES_LIST } from '../data/servicesData';
import { KNOWLEDGE_ARTICLES } from '../data/knowledgeData';

// Image asset
import heroImage from '../assets/images/hero_workshop_service_1790777208087.jpg';
import tyreImage from '../assets/images/tyre_service_bay_1790777308990.jpg';

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
  // Helper to map icon names to Lucide icons
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-5 h-5 text-orange-600" />;
      case 'Disc': return <Disc className="w-5 h-5 text-orange-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-orange-600" />;
      case 'CircleDot': return <CircleDot className="w-5 h-5 text-orange-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-orange-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-orange-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-orange-600" />;
      case 'Wind': return <Wind className="w-5 h-5 text-orange-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-orange-600" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-orange-600" />;
      default: return <Wrench className="w-5 h-5 text-orange-600" />;
    }
  };

  // 6 preview knowledge articles
  const previewArticles = KNOWLEDGE_ARTICLES.slice(0, 6);

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200/80 rounded-full text-xs font-semibold text-blue-900">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>Operating in Isolo, Lagos Since 2021</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-950 leading-[1.12] text-balance">
                Reliable Automotive Care. Wherever You Need It.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Professional vehicle servicing, tyres, diagnostics and maintenance from trusted automotive specialists.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold rounded-xl text-base shadow-sm transition-all cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Service</span>
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-50 active:bg-slate-100 text-blue-950 font-semibold border border-blue-200 rounded-xl text-base transition-colors cursor-pointer whitespace-nowrap shadow-2xs"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-orange-600" />
                </button>
              </div>

              {/* Fast trust metrics */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-4 text-left">
                <div>
                  <span className="block font-display text-xl sm:text-2xl font-bold text-blue-950 tabular-nums">
                    2021
                  </span>
                  <span className="text-xs text-slate-500">Established In Lagos</span>
                </div>
                <div>
                  <span className="block font-display text-xl sm:text-2xl font-bold text-blue-950 tabular-nums">
                    100%
                  </span>
                  <span className="text-xs text-slate-500">OEM Matching Parts</span>
                </div>
                <div>
                  <span className="block font-display text-xl sm:text-2xl font-bold text-orange-600 tabular-nums">
                    Launch &amp; Autel
                  </span>
                  <span className="text-xs text-slate-500">Dealer Diagnostics</span>
                </div>
              </div>

            </div>

            {/* Right Media Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-16/11 lg:aspect-4/3">
                <img
                  src={heroImage}
                  alt="Dynamic Auto & Tyre Centre state of the art workshop in Lagos"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Floating workshop verification card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-blue-950">
                        Multi-Bay Precision Workshop
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Oyemat House, Isolo · Full Diagnostic Suites
                      </p>
                    </div>
                  </div>
                  <a
                    href="tel:+2349126983699"
                    className="p-2 bg-blue-950 text-white hover:bg-orange-600 rounded-lg transition-colors shrink-0"
                    aria-label="Call workshop"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. TRUST / VALUE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-blue-950 text-white rounded-2xl shadow-sm border border-blue-900">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-900 text-orange-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">Expert Technicians</h4>
              <p className="text-xs text-blue-200 leading-normal">
                Trained and certified automotive specialists with multi-brand expertise.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-900 text-orange-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">Quality Parts</h4>
              <p className="text-xs text-blue-200 leading-normal">
                Genuine and OEM-compliant parts maintaining vehicle factory warranties.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-900 text-orange-400 flex items-center justify-center">
                <Disc className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">Tyres for All Vehicles</h4>
              <p className="text-xs text-blue-200 leading-normal">
                Passenger, SUV, EV, hybrid and commercial tyre ranges in all grades.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-900 text-orange-400 flex items-center justify-center">
                <Truck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">Mobile Tyre Fitting</h4>
              <p className="text-xs text-blue-200 leading-normal">
                Fully equipped service van dispatched directly to your home or office.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-900 text-orange-400 flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">Fleet Services</h4>
              <p className="text-xs text-blue-200 leading-normal">
                Custom maintenance plans, scheduled servicing and priority bays for fleets.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-900 text-orange-400 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">Customer-Focused</h4>
              <p className="text-xs text-blue-200 leading-normal">
                Transparent quotes, digital reports, comfortable waiting lounge and Wi-Fi.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-2">
              Complete Automotive Solutions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 tracking-tight">
              Our Comprehensive Services
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-950 hover:text-orange-600 transition-colors group cursor-pointer self-start md:self-end"
          >
            <span>View All Service Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-500" />
          </button>
        </div>

        {/* 10 Services in clean responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  {renderServiceIcon(service.iconName)}
                </div>
                <h3 className="font-display text-lg font-bold text-blue-950 mb-2 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-slate-700 hover:text-blue-950 flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </button>

                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE DYNAMIC AUTO */}
      <section className="bg-blue-50/50 py-16 sm:py-20 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
                Operating Since 2021
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 tracking-tight leading-tight">
                Why Drivers &amp; Fleet Managers Choose Dynamic Auto
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Dynamic Auto &amp; Tyre Centre launched with a straightforward mission: to raise the standard of fast-fit automotive maintenance in Lagos through trained technicians, upfront transparency, and genuine modern equipment.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-semibold text-blue-950 block">Quality Service &amp; Factory Specifications</strong>
                    <span className="text-xs text-slate-600">Every task strictly follows automaker torque parameters and fluid viscosities.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-semibold text-blue-950 block">Trained &amp; Certified Technicians</strong>
                    <span className="text-xs text-slate-600">Continuous technical training on modern European, Japanese, American and EV systems.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-semibold text-blue-950 block">Convenient Location &amp; Extended Opening Hours</strong>
                    <span className="text-xs text-slate-600">Located at Oyemat House, Isolo with early drop-offs and weekend opening.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-semibold text-blue-950 block">Dedicated Fleet Maintenance Programs</strong>
                    <span className="text-xs text-slate-600">Preventive maintenance regimens that cut downtime and total cost of ownership.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-semibold text-blue-950 block">Customer-Service Technology</strong>
                    <span className="text-xs text-slate-600">Digital diagnostics logs, SMS reminders, and instant digital loyalty rewards.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <span>Learn More About Our Story</span>
                  <ArrowRight className="w-4 h-4 text-orange-400" />
                </button>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-slate-200 aspect-4/3">
                <img
                  src={tyreImage}
                  alt="Dynamic Auto high-precision tyre bay and alignment station"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-semibold text-orange-400 block mb-1">Workshop Capability</span>
                    <p className="text-sm font-medium">Computerized high-speed balancing and 3D laser alignment bays</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. LOYALTY PROGRAM PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-blue-950 text-white p-8 sm:p-12 lg:p-14 border border-blue-900">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 text-orange-300 border border-orange-400/30 rounded-full text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Customer Loyalty Program</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Every Visit Comes With Rewards.
              </h2>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
                Customers earn loyalty value directly from their workshop spending. Accumulate balance with every oil service, tyre purchase or mechanical repair, and redeem it effortlessly on future visits.
              </p>

              {/* Sample spending rewards */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-blue-900/70 rounded-xl border border-blue-800">
                  <span className="text-xs text-blue-200 block">Spend ₦10,000</span>
                  <span className="text-base font-bold text-orange-400 font-display tabular-nums">Earn ₦500 Value</span>
                </div>
                <div className="p-3 bg-blue-900/70 rounded-xl border border-blue-800">
                  <span className="text-xs text-blue-200 block">Spend ₦50,000</span>
                  <span className="text-base font-bold text-orange-400 font-display tabular-nums">Earn ₦2,500 Value</span>
                </div>
                <div className="p-3 bg-blue-900/70 rounded-xl border border-blue-800">
                  <span className="text-xs text-blue-200 block">Spend ₦120,000</span>
                  <span className="text-base font-bold text-orange-400 font-display tabular-nums">Earn ₦6,000 Value</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('loyalty')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold text-sm rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  <span>Join the Loyalty Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-blue-900/80 p-6 rounded-xl border border-blue-800 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                Redeem Rewards On:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-blue-100">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Wheel Balancing &amp; 3D Laser Alignment</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Tyre Purchases &amp; Mobile Fitting</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Full &amp; Interim Car Servicing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Computer OBD2 Diagnostics &amp; ECU Scans</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Oil &amp; Filter Replacements</span>
                </li>
              </ul>
              <div className="pt-2 text-xs text-blue-300 border-t border-blue-800">
                <span>Free to join · Instant digital card · No hidden fees</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. KNOWLEDGE HUB PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-2">
              Automotive Education &amp; Diagnostics
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 tracking-tight">
              Know More About Your Car
            </h2>
          </div>
          <button
            onClick={() => onNavigate('knowledge')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-950 hover:text-orange-600 transition-colors group cursor-pointer self-start md:self-end"
          >
            <span>Visit Knowledge Hub</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-500" />
          </button>
        </div>

        {/* 6 Preview Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-orange-600">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-display text-base font-bold text-blue-950 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3 mb-4">
                  {article.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectArticle(article)}
                  className="text-xs font-semibold text-blue-950 hover:text-orange-600 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Guide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-400 font-medium">Verified by Techs</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white rounded-2xl p-8 sm:p-14 text-center border border-blue-900 shadow-xl space-y-6">
          
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 block">
            Isolo, Lagos Specialist Centre
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
            Keep Your Vehicle Safe, Reliable and Road-Ready.
          </h2>

          <p className="text-sm sm:text-base text-blue-200 max-w-xl mx-auto leading-relaxed font-normal">
            Whether you require an urgent computerized wheel alignment, annual interim servicing, diagnostic scan, or fresh tyres fitted at your doorstep, our team is ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Service</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-base rounded-xl border border-white/20 transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
