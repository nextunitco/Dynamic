import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  Users, 
  Sparkles, 
  Clock, 
  Truck, 
  CheckCircle, 
  ArrowRight, 
  Building2, 
  FileText,
  Phone
} from 'lucide-react';
import { PageId } from '../types';

import fleetImage from '../assets/images/fleet_mobile_van_1790777346146.jpg';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  const values = [
    {
      title: 'Quality',
      desc: 'We never compromise on components or fluid grades, installing strictly genuine or OEM-spec parts that match factory tolerances.',
      icon: Award
    },
    {
      title: 'Reliability',
      desc: 'Accurate timelines, guaranteed workmanship, and dependable vehicles returned in optimal roadworthy condition every single visit.',
      icon: ShieldCheck
    },
    {
      title: 'Customer Service',
      desc: 'Clear communication without technical jargon, upfront estimates with zero surprise billing, and respectful transparent advice.',
      icon: Users
    },
    {
      title: 'Professionalism',
      desc: 'Certified master technicians, clean uniform presentation, modern tooling, and an orderly workshop that respects your investment.',
      icon: Target
    },
    {
      title: 'Safety',
      desc: 'Your safety on Nigerian expressways is our first imperative. Every vehicle passes rigorous safety inspections before handover.',
      icon: CheckCircle
    },
    {
      title: 'Continuous Improvement',
      desc: 'Ongoing training on emerging hybrid, electric vehicle, and computer multiplex architectures to stay ahead of automotive engineering.',
      icon: Sparkles
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-blue-950 text-white py-16 sm:py-20 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 block">
              About Dynamic Auto &amp; Tyre Centre
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Raising Standards in Automotive Servicing &amp; Fast-Fit Maintenance.
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              Founded in 2021 in Isolo, Lagos, Dynamic Auto &amp; Tyre Centre combines skilled engineering, diagnostic technology, and genuine customer care to keep personal and commercial vehicles moving safely.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
              Our Story
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 tracking-tight leading-tight">
              A Modern Workshop Built on Trust &amp; Engineering Precision
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Dynamic Auto &amp; Tyre Centre launched in 2021 and is focused on raising service standards in the fast-fit automotive industry. Frustrated by the prevalence of guess-work mechanics, substandard fluids, and unpredictable billing in the local automotive market, we designed an automotive centre built on European-standard diagnostic procedures and genuine customer integrity.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              From day one, our strategic focus has been centered across six foundational pillars:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                <strong className="text-sm font-semibold text-blue-950 block mb-1">Vehicle Maintenance</strong>
                <span className="text-xs text-slate-600">Full, interim and warranty-safe scheduled servicing.</span>
              </div>
              <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                <strong className="text-sm font-semibold text-blue-950 block mb-1">Tyre Services</strong>
                <span className="text-xs text-slate-600">Precision laser alignment, balancing, and premium fitment.</span>
              </div>
              <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                <strong className="text-sm font-semibold text-blue-950 block mb-1">Fleet Services</strong>
                <span className="text-xs text-slate-600">Proactive corporate maintenance minimizing business downtime.</span>
              </div>
              <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                <strong className="text-sm font-semibold text-blue-950 block mb-1">Customer Service</strong>
                <span className="text-xs text-slate-600">Transparent advisory, detailed breakdowns, and comfort lounge.</span>
              </div>
              <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                <strong className="text-sm font-semibold text-blue-950 block mb-1">Technology</strong>
                <span className="text-xs text-slate-600">Bosch, Autel and Launch digital diagnostic platforms.</span>
              </div>
              <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                <strong className="text-sm font-semibold text-blue-950 block mb-1">Skilled Technicians</strong>
                <span className="text-xs text-slate-600">Regular training across modern Asian, European, and American platforms.</span>
              </div>
            </div>
          </div>

          {/* Right Fleet / Facility imagery */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 aspect-16/10">
              <img
                src={fleetImage}
                alt="Dynamic Auto & Tyre Centre mobile fleet maintenance service"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                    Workshop &amp; On-Site Support
                  </span>
                  <p className="text-sm font-medium">
                    Fully equipped mobile units serving executive and commercial clients across Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Our Mission */}
      <section className="bg-blue-50/40 py-16 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="w-12 h-12 rounded-xl bg-orange-600 text-white mx-auto flex items-center justify-center shadow-xs">
            <Target className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
            Our Mission
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-blue-950 tracking-tight leading-tight">
            "To provide reliable, convenient and professional automotive services that give drivers and businesses complete confidence on every journey."
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            We are dedicated to eliminating roadside breakdowns through rigorous preventive checks, using verifiable data rather than speculation, and treating every client's vehicle with uncompromising technical care.
          </p>
        </div>
      </section>

      {/* 4. Our Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
            Core Principles
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 tracking-tight">
            Our Values
          </h2>
          <p className="text-sm text-slate-600">
            The guiding ethics behind every bolt tightened, sensor calibrated, and customer advised.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div 
                key={i} 
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-blue-950">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Fleet Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-12 lg:p-14 border border-blue-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 text-orange-300 border border-orange-400/30 rounded-full text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>B2B &amp; Corporate Solutions</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Corporate Fleet Maintenance &amp; Servicing
              </h2>

              <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
                Dynamic Auto &amp; Tyre Centre provides bespoke automotive services tailored for businesses, corporate transport departments, logistics companies, and corporate vehicle fleets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-blue-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Convenient locations in Isolo, Lagos</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Extended opening hours for rapid turnaround</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Trained multi-brand technicians</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Mobile tyre fitting direct to corporate depots</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Customer relationship management (CRM) &amp; logs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Dedicated corporate billing &amp; credit facilities</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold text-sm rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Fleet Enquiries</span>
                </button>

                <a
                  href="tel:+2349126983699"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl border border-blue-800 transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Call Fleet Desk: +234 912 698 3699</span>
                </a>
              </div>

            </div>

            <div className="lg:col-span-5 bg-blue-900/80 p-6 rounded-xl border border-blue-800 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                Fleet Service Highlights
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                We assign a designated fleet coordinator to track inspection cycles, schedule preventive maintenance during off-peak hours, and provide full digital vehicle health passports.
              </p>
              <div className="pt-2 border-t border-blue-800 space-y-2 text-xs text-blue-300">
                <div className="flex justify-between">
                  <span>Average Fleet Turnaround</span>
                  <span className="text-white font-semibold">Under 4 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency Mobile Unit Response</span>
                  <span className="text-white font-semibold">Lagos Mainland &amp; Island</span>
                </div>
                <div className="flex justify-between">
                  <span>Warranty on Fleet Parts</span>
                  <span className="text-white font-semibold">100% Guaranteed</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
