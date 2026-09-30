import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { companyImages } from '../data/companyImages';
import { PageId } from '../types';
import { 
  ShieldCheck, 
  Car, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Users, 
  Award,
  Phone,
  Calendar,
  Sparkles
} from 'lucide-react';

interface DriverTrainingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (service?: string) => void;
}

export const DriverTrainingPage: React.FC<DriverTrainingPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-neutral-50">
      
      {/* 1. Dedicated Header with REAL WA0041 Company Image ONLY */}
      <PageHeader
        title="Driver Training & Defensive Road Safety"
        subtitle="Empowering private and corporate fleet drivers with defensive driving techniques, vehicle mechanical awareness, hazard avoidance, and safety compliance in Nigerian driving environments."
        badge="Accredited Safety Curriculum"
        image={companyImages.driverTraining}
        breadcrumbs={[
          { label: 'Services', page: 'services' },
          { label: 'Driver Training & Safety' }
        ]}
        onNavigate={onNavigate}
        ctaText="Enroll Drivers in Next Session"
        onCtaClick={() => onNavigate('contact')}
      />

      {/* 2. Core Curriculum Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
            Automotive Safety Education
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Prevent Collisions Before They Happen
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            90% of vehicular incidents on Nigerian highways stem from avoidable human factors, blind-spot miscalculations, and delayed mechanical reactions. Our specialized hands-on modules combine classroom theory with skid-pad vehicle dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4 hover:border-orange-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Defensive Driving Techniques
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Master the 4-second following rule, space cushions, proactive hazard scanning, high-speed highway merges, and nighttime collision prevention protocols on unlit road stretches.
            </p>
            <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Micro-sleep fatigue mitigation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Heavy downpour aquaplaning control</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Intersection right-of-way defensive timing</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4 hover:border-orange-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Pre-Trip Vehicle Mechanical Check
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Equip drivers to detect failing components before embarking on journeys. Practical drills on tyre pressures, engine fluid leak detection, fan belt tension, and brake pedal sponginess.
            </p>
            <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Daily 7-point visual circle inspection</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Tyre tread wear &amp; sidewall bubble spotting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Coolant boil-over &amp; thermal runaway reaction</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4 hover:border-orange-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Driver Compliance &amp; Regulatory Law
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Complete orientation on Federal Road Safety Corps (FRSC) and LASTMA statutory traffic mandates, vehicle documentation validity, passenger safety, and speed limit compliance.
            </p>
            <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Speed limiter certification knowledge</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Post-incident emergency documentation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Digital certificate of completion</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Important Notice: Roadside Recovery is explicitly "Coming Soon" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 border border-amber-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-5 h-5 text-amber-700" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-full">
                  Service Roadmap
                </span>
                <strong className="text-sm font-bold text-neutral-900">
                  24/7 Roadside Assistance &amp; Recovery Towing
                </strong>
              </div>
              <p className="text-xs text-neutral-700 max-w-2xl leading-relaxed">
                Please note: Our rapid roadside flatbed recovery towing service is currently in final fleet preparation and will be deployed as a <strong>Coming Soon</strong> offering. Currently, all major mechanical repairs and vehicle checkups take place directly inside our Isolo workshop bays.
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <span className="inline-block px-4 py-2 bg-white text-amber-900 font-semibold text-xs rounded-xl border border-amber-300 shadow-2xs">
              Status: Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* 4. Corporate Driver Training Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-neutral-200 pb-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-1">
            Institutional Programs
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Corporate Fleet Driver Onboarding &amp; Refresher Modules
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl font-normal">
            Customised training schedules conducted on-site at your corporate premises or at our Isolo workshop training center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Option A</span>
                <h3 className="font-display text-xl font-bold text-neutral-900">Weekend Refresher Course</h3>
              </div>
              <span className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-medium">1-Day Intensive</span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Designed for working company chauffeurs and fleet operators needing annual defensive certification, road signs review, and vehicle check refresher.
            </p>
            <ul className="space-y-2 text-xs text-neutral-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Classroom presentation with multimedia incident case studies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Hands-on tyre pressure calibration &amp; wheel changing drills</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Individual driver evaluation scorecard provided to management</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-neutral-100">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                Inquire for 1-Day Cohort
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div>
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Option B</span>
                <h3 className="font-display text-xl font-bold text-neutral-900">Comprehensive Fleet Certification</h3>
              </div>
              <span className="text-xs bg-blue-50 text-blue-900 px-3 py-1 rounded-full font-medium">3-Day Masterclass</span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Complete practical training including live road hazard audits, advanced emergency braking distance assessment, and fuel conservation eco-driving methods.
            </p>
            <ul className="space-y-2 text-xs text-neutral-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>In-vehicle accompanying assessment on Lagos arterial routes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Eco-driving habits reducing company fuel expenditures by up to 18%</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Formal certificates recognized by fleet underwriters</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-neutral-100">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer shadow-xs"
              >
                Request Corporate Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-10 border border-blue-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
              Driver Safety Consultations
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Elevate Your Company’s Road Safety Record
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
              Speak with our automotive safety advisors today to schedule a diagnostic evaluation of your corporate drivers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer text-center shadow-xs"
            >
              Contact Training Team
            </button>
            <a
              href="tel:+2349126983699"
              className="px-5 py-3 bg-blue-900/80 hover:bg-blue-900 text-blue-100 font-semibold text-xs sm:text-sm rounded-xl transition-colors text-center border border-blue-800 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>+234 912 698 3699</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
