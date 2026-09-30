import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { companyImages, corporateClientAssets } from '../data/companyImages';
import { PageId } from '../types';
import { 
  Building2, 
  Truck, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Wrench, 
  ArrowRight, 
  Phone,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

interface FleetPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (service?: string) => void;
}

export const FleetPage: React.FC<FleetPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-neutral-50">
      
      {/* 1. Header with Real WA0042 Company Image */}
      <PageHeader
        title="Corporate Fleet Maintenance & Automotive Retainers"
        subtitle="Turnkey vehicular management solutions engineered for corporate enterprises, logistics operators, banks, and institutions across Lagos. Minimize downtime and stabilize lifecycle operating costs."
        badge="Enterprise Fleet Management"
        image={companyImages.fleet}
        breadcrumbs={[
          { label: 'Services', page: 'services' },
          { label: 'Fleet Services' }
        ]}
        onNavigate={onNavigate}
        ctaText="Talk to Our Fleet Team"
        onCtaClick={() => onNavigate('contact')}
      />

      {/* 2. Key Pillars for Fleet Operations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
            Business Operations Focus
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Designed for Zero Unexpected Fleet Downtime
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            Whether your organization manages five executive pool cars or fifty operational utility vans, our Isolo facility provides dedicated service bays, computerized service histories, and priority technician assignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4 hover:border-orange-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Scheduled Preventive Maintenance
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Systematic mileage-based interval servicing, genuine filter changes, multi-grade oil flushes, and comprehensive 50-point safety audits before minor component wear causes roadside failure.
            </p>
            <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Automated SMS and email service interval alerts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Priority rapid drop-off &amp; fast turnaround times</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Corporate Account Billing &amp; Invoicing
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Transparent, itemized monthly billing with transparent labor rates and corporate discounts. Eliminates cash disbursement vulnerabilities for company drivers.
            </p>
            <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Approved purchase order &amp; SLA billing terms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Comprehensive digital vehicle expense reports</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4 hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Priority Tyre &amp; Wheel Retainers
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Bulk tyre inventory reserved specifically for your fleet vehicle classes. Computerized high-speed balancing and precision 3D wheel alignment to double tire tread lifespan.
            </p>
            <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Mobile tyre fitting on-site at your depot</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Guaranteed brand-new certified tyre stock</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2.5 Dedicated Showcase: Fleet Facility & Utility Bays (WA0042) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900">
              <Truck className="w-3.5 h-3.5 text-orange-600" />
              <span>Real Facility Operations · Isolo, Lagos</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              High-Capacity Service Bays Engineered for Commercial Transport
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              Our workshop is configured with high-clearance bays and heavy-duty hydraulic lifts capable of handling multi-ton delivery vans, armored security transport, and executive corporate fleets simultaneously.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-700 font-medium">Turnaround speed guaranteed by binding SLA terms</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-700 font-medium">Priority parts stocking for your exact vehicle models</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-80 sm:h-96 lg:h-full min-h-[340px] relative bg-neutral-900 overflow-hidden">
            <img
              src={companyImages.fleet.localPath}
              alt="Dynamic Automotive fleet maintenance bay with commercial vans"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== companyImages.fleet.cdnUrl) {
                  target.src = companyImages.fleet.cdnUrl;
                }
              }}
              className="w-full h-full object-cover object-center filter brightness-100 contrast-105 hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">Real Workshop Asset</span>
                <p className="text-xs font-semibold text-slate-100">Commercial Fleet Maintenance Bays at Isolo Workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Corporate Clients Display (Explicit Requirement) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-neutral-200 pb-5">
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Enterprise Track Record
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Trusted by Established Organisations
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl font-normal">
            Organizations that rely on Dynamic Automotive &amp; Tyre Centre for consistent fleet readiness, roadworthiness compliance, and scheduled interval repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporateClientAssets.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="h-28 sm:h-32 w-full rounded-xl bg-white border border-neutral-100 flex items-center justify-center p-4 mb-4 group-hover:bg-neutral-50/50 transition-colors">
                  <img
                    src={client.cdnUrl}
                    alt={`${client.name} corporate client logo`}
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

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Active Fleet Retainer
                  </span>
                  <h3 className="font-display text-lg font-bold text-neutral-900 group-hover:text-blue-900 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {client.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-4 flex items-center justify-between text-xs text-neutral-500">
                <span>Verified Fleet Client</span>
                <span className="font-semibold text-blue-600">Enterprise SLA</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Fleet Consultation Form / CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-12 border border-blue-900 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
              Direct Corporate Engagement
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Ready to Streamline Your Organisation’s Fleet Maintenance?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
              Schedule a technical inspection of your vehicles or request our corporate retainer rate card. Our Senior Fleet Manager will prepare a customized proposal tailored to your operational routes.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-blue-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                Dedicated Account Executive
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                Guaranteed Response SLA
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                Digital Monthly Invoicing
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold text-sm rounded-xl transition-all shadow-xs cursor-pointer text-center"
            >
              Talk to Our Fleet Team
            </button>
            <button
              onClick={() => onOpenBooking('Fleet Services')}
              className="px-8 py-3.5 bg-white text-blue-950 hover:bg-blue-50 font-semibold text-sm rounded-xl transition-all cursor-pointer text-center"
            >
              Schedule Fleet Inspection
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
