import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { companyImages } from '../data/companyImages';
import { PageId } from '../types';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  Users, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Wrench,
  Sparkles,
  Phone
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  const values = [
    {
      title: 'Professionalism',
      desc: 'Uniformed, factory-trained technicians adhering strictly to engineering guidelines, torque specifications, and ethical automotive business practices.',
      icon: Target
    },
    {
      title: 'Reliability',
      desc: 'Accurate turnaround timelines, guaranteed parts integrity, and dependable vehicles returned in optimal roadworthy condition after every service visit.',
      icon: ShieldCheck
    },
    {
      title: 'Customer Service',
      desc: 'Clear communication without technical jargon, upfront estimates with zero unexpected billing surprises, and respectful, transparent consultation.',
      icon: Users
    },
    {
      title: 'Technical Expertise',
      desc: 'Advanced computerized diagnostics with Bosch and Autel platforms, continuous technician training on modern CAN-bus architectures, and precision tooling.',
      icon: Wrench
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-neutral-50">
      
      {/* 1. Header with Real WA0043 Company Image */}
      <PageHeader
        title="About Dynamic Automotive & Tyre Centre"
        subtitle="Established in 2021 in Isolo, Lagos. Delivering honest, dealer-standard automotive servicing, tyres, diagnostics and commercial fleet retainers you can depend on."
        badge="RC No: 3332447 · Established in 2021"
        image={companyImages.about}
        breadcrumbs={[{ label: 'About Us' }]}
        onNavigate={onNavigate}
        ctaText="Book a Workshop Inspection"
        onCtaClick={onOpenBooking}
      />

      {/* 2. Our Story Section (Using Real Supporting Image WA0043 & WA0040) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-neutral-200/90 p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
              Our Story &amp; Heritage
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
              Raising the Benchmark for Automotive Care in Lagos
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              <p>
                Dynamic Automotive &amp; Tyre Centre (RC No: 3332447) was established in 2021 with a clear mandate: to eliminate the ambiguity, guesswork, and unreliable parts that too frequently characterize automotive repairs in Nigeria.
              </p>
              <p>
                Operating from our multi-bay engineering workshop on Kudirat Adenekan Road in Isolo, Lagos (Opposite Bokku Mart, Canoe Bus/Stop), our facility was purposefully configured to bridge the gap between expensive franchise dealerships and informal roadside mechanic bays.
              </p>
              <p>
                Over the past several years, we have grown from a local fast-fit center into a trusted automotive partner for individual vehicle owners, executive car enthusiasts, and leading corporate fleets including banks, insurance institutions, and consumer goods manufacturers.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-neutral-100">
              <div className="space-y-1">
                <span className="font-display text-2xl font-bold text-orange-600 tabular-nums">2021</span>
                <span className="text-xs text-neutral-500 block">Year Established</span>
              </div>
              <div className="space-y-1">
                <span className="font-display text-2xl font-bold text-blue-900 tabular-nums">50+</span>
                <span className="text-xs text-neutral-500 block">Safety Checkpoints</span>
              </div>
              <div className="space-y-1">
                <span className="font-display text-2xl font-bold text-emerald-700 tabular-nums">100%</span>
                <span className="text-xs text-neutral-500 block">Verified OEM Parts</span>
              </div>
            </div>
          </div>

          {/* Supporting Image: WA0040 (Workshop & Technical Expertise) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
              <img
                src={companyImages.teamWorkshop.cdnUrl}
                alt="Dynamic Automotive technical team and workshop engineering"
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
                  <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">Engineering Culture</span>
                  <p className="text-xs font-semibold text-slate-100">Certified Diagnostic Technicians &amp; Mechanical Specialists</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Mission & Strategic Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-neutral-200/90 p-8 sm:p-10 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-neutral-900">
              Our Mission
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              To deliver dependable, transparent, and technically superior automotive services that enhance vehicle safety, preserve asset resale values, and minimize operational downtime for everyday drivers and enterprise fleets across Nigeria.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 p-8 sm:p-10 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-neutral-900">
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              To be West Africa’s most trusted automotive engineering and tyre center, renowned for diagnostic accuracy, customer-first transparency, and institutional fleet excellence.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Values (Professionalism, Reliability, Customer Service, Technical Expertise) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
            Our Guiding Principles
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            The Pillars of Our Workshop Culture
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-normal">
            Every technician and customer service representative at Dynamic Auto is held to these core ethical commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-neutral-200/90 space-y-3 hover:border-orange-300 hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 text-orange-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-neutral-900">{val.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Customer-Focused Approach & Fleet Capability Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-12 border border-blue-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
              Corporate Retainers &amp; Customer Care
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Looking for Reliable Fleet Support or Scheduled Servicing?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed font-normal">
              From our digital 5% loyalty cashback to dedicated commercial vehicle bays, we tailor our service to the exact needs of your household or company fleet.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigate('fleet')}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer text-center shadow-xs"
            >
              Explore Fleet Services
            </button>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-blue-900/80 hover:bg-blue-900 text-white border border-blue-800 font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer text-center"
            >
              Book Service Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
