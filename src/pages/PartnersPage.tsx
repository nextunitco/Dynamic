import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { companyImages, partnerAssets, corporateClientAssets } from '../data/companyImages';
import { PageId } from '../types';
import { Handshake, Building2, ShieldCheck, Award, ArrowRight, Phone } from 'lucide-react';

interface PartnersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-neutral-50">
      
      {/* 1. Header with Real WA0038 Company Image */}
      <PageHeader
        title="Our Strategic Partners & Corporate Network"
        subtitle="Collaborating with global automotive leaders, accredited safety organisations, and premier financial institutions to elevate automotive service standards across Nigeria."
        badge="Accredited Industry Alliances"
        image={companyImages.partners}
        breadcrumbs={[{ label: 'Partners & Clients' }]}
        onNavigate={onNavigate}
        ctaText="Inquire About Corporate Fleet Partnership"
        onCtaClick={() => onNavigate('contact')}
      />

      {/* 2. Trusted Partnerships Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-neutral-200/90 p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
              Trusted Partnerships
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Engineering Reliability Built on Genuine Alliances
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              At Dynamic Automotive &amp; Tyre Centre, our operations are backed by established automotive manufacturers, regulatory agencies, and institutional insurers. Through our technical alignment with Bosch, we ensure dealer-standard diagnostic protocols and OEM-specification parts for every vehicle entering our service bays.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">OEM Equipment</h4>
                  <p className="text-[11px] text-neutral-500">Bosch certified testing &amp; diagnostics</p>
                </div>
              </div>
              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-2.5">
                <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Safety Standards</h4>
                  <p className="text-[11px] text-neutral-500">IRAP roadworthiness protocols</p>
                </div>
              </div>
              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-2.5">
                <Building2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Corporate Backing</h4>
                  <p className="text-[11px] text-neutral-500">Seamless insurance claim repairs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
              <img
                src={companyImages.boschPartnership.cdnUrl}
                alt="Dynamic Automotive Bosch technical equipment partnership"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + companyImages.boschPartnership.localPath) {
                    target.src = companyImages.boschPartnership.localPath;
                  }
                }}
                className="w-full h-64 sm:h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <span className="text-[11px] font-semibold text-orange-400 uppercase tracking-wider block">Workshop Facility</span>
                  <p className="text-xs font-medium text-slate-200">Bosch automated testing bays &amp; diagnostic workstations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section: PARTNERS (Clean distinction from corporate clients) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-neutral-200 pb-5">
          <div className="flex items-center gap-2 mb-1">
            <Handshake className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Technical &amp; Institutional Alliances
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Our Industry Partners
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl font-normal">
            Strategic collaborations ensuring cutting-edge vehicle diagnostics, insurance underwriting convenience, OEM parts supply, and computerized roadworthiness validation.
          </p>
        </div>

        {/* Clean Logo Cards with object-fit: contain, no distortion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerAssets.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <div>
                {/* Logo Display Container */}
                <div className="h-28 sm:h-32 w-full rounded-xl bg-white border border-neutral-100 flex items-center justify-center p-4 mb-4 group-hover:bg-neutral-50/50 transition-colors">
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

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2 py-0.5 rounded-full">
                      Strategic Partner
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">Ref: {partner.id}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {partner.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-4 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 font-medium">Verified Partner</span>
                <span className="text-xs font-semibold text-orange-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Section: CORPORATE CLIENTS (Explicitly separated from partners) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-neutral-200 pb-5">
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Fleet Maintenance &amp; Retainerships
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Our Corporate Clients
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl font-normal">
            Organizations and institutional fleets that depend on Dynamic Automotive &amp; Tyre Centre for scheduled preventative maintenance, priority tyre support, and computerized breakdown care.
          </p>
        </div>

        {/* Clean Logo Cards with object-fit: contain, no distortion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporateClientAssets.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div>
                {/* Logo Display Container */}
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
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Corporate Retainer
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">Ref: {client.id}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-900 group-hover:text-blue-900 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {client.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-4 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 font-medium">Fleet Retainer</span>
                <button
                  onClick={() => onNavigate('fleet')}
                  className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Fleet details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Corporate CTA Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-10 border border-blue-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
              Institutional Retainers &amp; SLA Support
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Manage a Commercial Vehicle Fleet in Lagos?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
              We offer bespoke fleet maintenance contracts, automated digital service tracking, 30-day corporate billing terms, and rapid mobile tyre dispatch.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigate('fleet')}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer text-center shadow-xs"
            >
              Talk to Our Fleet Team
            </button>
            <a
              href="tel:+2349126983699"
              className="px-5 py-3 bg-blue-900/80 hover:bg-blue-900 text-blue-100 font-semibold text-xs sm:text-sm rounded-xl transition-colors text-center border border-blue-800 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call Fleet Desk</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
