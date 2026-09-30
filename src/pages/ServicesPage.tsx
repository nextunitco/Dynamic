import React, { useState } from 'react';
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
  CheckCircle2, 
  Calendar,
  AlertTriangle,
  Info,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building2,
  Phone
} from 'lucide-react';
import { PageId, ServiceItem } from '../types';
import { PageHeader } from '../components/PageHeader';
import { 
  SERVICES_LIST, 
  SERVICE_INTERVALS, 
  TYRE_VEHICLE_TYPES, 
  TYRE_CATEGORIES, 
  BRAKE_WARNING_SIGNS, 
  BATTERY_WARNING_SIGNS, 
  SUSPENSION_WARNING_SIGNS, 
  AIR_CON_PRICING 
} from '../data/servicesData';
import { 
  companyImages, 
  corporateClientAssets 
} from '../data/companyImages';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (prefillService?: string) => void;
}

type ServiceTab = 
  | 'all' 
  | 'maintenance' 
  | 'tyres' 
  | 'brakes' 
  | 'diagnostics' 
  | 'battery' 
  | 'ac' 
  | 'suspension' 
  | 'mot'
  | 'fleet';

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectService,
  onOpenBooking
}) => {
  const [activeTab, setActiveTab] = useState<ServiceTab>('all');

  const filterTabs: { id: ServiceTab; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'maintenance', label: 'Repairs & Servicing' },
    { id: 'tyres', label: 'Tyres & Wheels' },
    { id: 'brakes', label: 'Brake Systems' },
    { id: 'diagnostics', label: 'Diagnostics' },
    { id: 'battery', label: 'Battery Services' },
    { id: 'ac', label: 'Air Conditioning' },
    { id: 'suspension', label: 'Suspension & Shocks' },
    { id: 'mot', label: 'MOT Roadworthiness' },
    { id: 'fleet', label: 'Fleet Services' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-neutral-50">
      
      {/* 1. Header with Real WA0044 Company Image */}
      <PageHeader
        title="Comprehensive Automotive Engineering & Workshop Services"
        subtitle="Organized into specialized workshop disciplines. From routine interval oil flushes and laser tyre fitting to dealer-level computerized diagnostics with Bosch and Autel platforms."
        badge="Multi-Bay Workshop · Isolo, Lagos"
        image={companyImages.services}
        breadcrumbs={[{ label: 'Services' }]}
        onNavigate={onNavigate}
        ctaText="Book a Service Appointment"
        onCtaClick={() => onOpenBooking()}
      />

      {/* Filter Tabs Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-3 rounded-2xl border border-neutral-200/90 shadow-2xs flex items-center gap-2 overflow-x-auto scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-orange-600 text-white font-semibold shadow-xs'
                  : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. SECTION: VEHICLE REPAIRS & MAINTENANCE (Using Real WA0033 Image) */}
      {(activeTab === 'all' || activeTab === 'maintenance') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="border-b border-neutral-200 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-1">
              Category 01
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Vehicle Repairs &amp; Scheduled Maintenance
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl font-normal">
              Routine maintenance includes Engine Oil &amp; Filter Change, Vehicle Diagnostics, Mechanical &amp; Engine Repairs, Electrical Services, Suspension &amp; Shock Absorbers, Brake Services, Battery Services, and Air Conditioning.
            </p>
          </div>

          {/* Section Hero Card with WA0033 */}
          <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">
                Preventive Servicing &amp; Mechanical Longevity
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Scheduled servicing prevents premature cylinder bore scoring, bearing wear, and cooling failure. We adhere strictly to OEM fluid viscosities (synthetic 0W-20, 5W-30, 5W-40) and genuine OEM filters.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>50-point mechanical safety checklist</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Synthetic oil &amp; filter flush</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Coolant &amp; brake fluid boil-point check</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Digital onboard service interval reset</span>
                </div>
              </div>
              <div className="pt-3">
                <button
                  onClick={() => onOpenBooking('Vehicle Servicing')}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Vehicle Service</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
                <img
                  src={companyImages.repairs.localPath}
                  alt={companyImages.repairs.alt}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== companyImages.repairs.cdnUrl) {
                      target.src = companyImages.repairs.cdnUrl;
                    }
                  }}
                  className="w-full h-80 sm:h-96 object-cover filter brightness-100 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">Service Bay</span>
                    <p className="text-xs font-medium text-slate-200">Hydraulic lift inspection &amp; powertrain maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interval Comparison Cards */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Service Interval Breakdown &amp; Comparison
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICE_INTERVALS.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="border-b border-neutral-100 pb-4">
                      <span className="text-xs font-semibold uppercase text-orange-600 tracking-wider">
                        {item.title}
                      </span>
                      <h4 className="font-display text-xl font-bold text-neutral-900 mt-1">
                        {item.interval}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                        {item.suitability}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                        Key Operations:
                      </h5>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 mt-6">
                    <button
                      onClick={() => onOpenBooking(item.title)}
                      className="w-full py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book {item.title}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      )}

      {/* 3. SECTION: TYRES & WHEEL SERVICES (Using Real WA0035, WA0034, WA0046 Images) */}
      {(activeTab === 'all' || activeTab === 'tyres') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="border-b border-neutral-200 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-1">
              Category 02
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Tyres &amp; Wheel Services
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl font-normal">
              Complete tyre supply, digital laser mounting, wheel balancing, 4-wheel computerized alignment, mobile tyre fitting, and tyre safety audits.
            </p>
          </div>

          {/* Section Hero Card with WA0035 */}
          <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">
                Precision Tyre Fitting &amp; High-Speed Wheel Balancing
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Proper tyre mounting and balancing protects expensive suspension components, eliminates high-speed steering vibration, and optimizes braking performance on wet roads. We stock certified brand-new tyre inventory across all passenger and commercial sizes.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Computerized wheel balancing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Laser 4-wheel alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Mobile tyre fitting dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Tread depth &amp; safety inspection</span>
                </div>
              </div>
              <div className="pt-3">
                <button
                  onClick={() => onOpenBooking('Tyres & Wheels')}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <Disc className="w-4 h-4" />
                  <span>Book Tyre Service</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
                <img
                  src={companyImages.tyres.localPath}
                  alt={companyImages.tyres.alt}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== companyImages.tyres.cdnUrl) {
                      target.src = companyImages.tyres.cdnUrl;
                    }
                  }}
                  className="w-full h-80 sm:h-96 object-cover filter brightness-100 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">Tyre Bay</span>
                    <p className="text-xs font-medium text-slate-200">State-of-the-art rim clamp &amp; pneumatic fitting station</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle compatibility bar */}
          <div className="p-5 bg-blue-50/60 rounded-xl border border-blue-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-900 block mb-2">
              Tyres Fitted &amp; Serviced For All Vehicle Classes:
            </span>
            <div className="flex flex-wrap gap-2">
              {TYRE_VEHICLE_TYPES.map((type, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-white text-neutral-800 text-xs font-medium rounded-md border border-blue-200 shadow-2xs"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* 8 Tyre Categories Grid */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Tyre Categories In Stock
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TYRE_CATEGORIES.map((cat, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-neutral-200/90 hover:border-orange-300 hover:shadow-xs transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <Disc className="w-4 h-4 text-orange-600" />
                    <h4 className="font-display text-sm font-bold text-neutral-900">{cat.name}</h4>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Workshop Image WA0046 (Wheel Balancing) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase text-orange-600 tracking-wider">
                Precision Wheel Balancing &amp; 3D Laser Alignment
              </span>
              <h4 className="font-display text-xl font-bold text-neutral-900">
                Eliminate Steering Shudder &amp; Premature Shoulder Wear
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Even a minor 10g weight imbalance across wheel rims generates rhythmic shudder at 80 km/h and destroys steering rack seals. Our dynamic spin balancers restore glass-smooth highway stability.
              </p>
              <button
                onClick={() => onOpenBooking('Wheel Alignment & Tyres')}
                className="mt-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Book Alignment &amp; Balancing
              </button>
            </div>
            <div className="rounded-xl overflow-hidden border border-neutral-200 h-72 sm:h-80 shadow-xs">
              <img
                src={companyImages.wheelBalancing.localPath}
                alt={companyImages.wheelBalancing.alt}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== companyImages.wheelBalancing.cdnUrl) {
                    target.src = companyImages.wheelBalancing.cdnUrl;
                  }
                }}
                className="w-full h-full object-cover filter brightness-100 contrast-105"
                loading="lazy"
              />
            </div>
          </div>

        </section>
      )}

      {/* 4. SECTION: BRAKE SERVICES */}
      {(activeTab === 'all' || activeTab === 'brakes') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="border-b border-neutral-200 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-1">
              Category 03
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Brake Checks, Pads, Discs &amp; Hydraulics
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl font-normal">
              Your first line of active defence. Comprehensive brake pad friction evaluation, rotor thickness measurement, boiling-point fluid diagnostics, and ABS caliper rebuilds.
            </p>
          </div>

          <div className="bg-orange-50/50 border border-orange-200/70 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-neutral-900">
                  Critical Brake Warning Signs: Never Delay an Inspection
                </h3>
                <p className="text-xs text-neutral-600">
                  If your vehicle exhibits any of the following symptoms, schedule a brake check immediately.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BRAKE_WARNING_SIGNS.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-orange-100 shadow-2xs">
                  <h4 className="text-xs font-bold text-neutral-900 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                    <span>{item.sign}</span>
                  </h4>
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-orange-200/50">
              <span className="text-xs text-neutral-700 font-medium">
                Complimentary 15-minute visual brake inspection available at our Isolo workshop.
              </span>
              <button
                onClick={() => onOpenBooking('Brake Check')}
                className="w-full sm:w-auto px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs"
              >
                Book a Brake Check
              </button>
            </div>
          </div>

        </section>
      )}

      {/* 5. SECTION: DIAGNOSTICS (Using Real WA0045 Image) */}
      {(activeTab === 'all' || activeTab === 'diagnostics') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="border-b border-neutral-200 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-1">
              Category 04
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Vehicle Computer Diagnostics &amp; ECU Analysis
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl font-normal">
              Dealer-grade OBD2 bi-directional scanning, live sensor graphing, ECU fault code tracing, and electronic sensor recalibration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-xs">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">
                Pin-Point Troubleshooting Without Part-Swapping Guesswork
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                Modern automobiles have between 20 and 80 interconnected computer control modules. Guesswork repairs lead to expensive unnecessary part swaps. At Dynamic Automotive &amp; Tyre Centre, our certified diagnostic technicians isolate electrical and sensor anomalies with pin-point accuracy using updated Bosch, Autel, and Launch suites.
              </p>

              <div className="space-y-2 pt-1 text-xs text-neutral-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>OBD2 Diagnostics &amp; Live Data:</strong> Real-time fuel trim, oxygen sensor, manifold pressure and boost graphs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Engine Warning Lights &amp; ECU Fault Codes:</strong> Powertrain, transmission and CAN-bus communication error tracing.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Brake System &amp; ABS Faults:</strong> Wheel speed sensors, yaw rate sensors, and electronic stability control faults.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Service Light Resets &amp; Electronic Handbrakes:</strong> Service interval reset and rear electronic parking brake calibration.</span>
                </div>
              </div>

              <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200 text-xs text-blue-900">
                <strong>Equipment in use:</strong> Bosch Master Diagnostic System, Autel MaxiSys Pro, and Launch X-431 bi-directional scan tools.
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('Diagnostics')}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
                >
                  <Cpu className="w-4 h-4" />
                  <span>Book Diagnostics</span>
                </button>
              </div>
            </div>

            {/* Diagnostic Photo WA0045 */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
                <img
                  src={companyImages.diagnostics.localPath}
                  alt={companyImages.diagnostics.alt}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== companyImages.diagnostics.cdnUrl) {
                      target.src = companyImages.diagnostics.cdnUrl;
                    }
                  }}
                  className="w-full h-80 sm:h-96 object-cover filter brightness-100 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">Diagnostic Suite</span>
                    <p className="text-xs font-medium text-slate-200">Electronic system interrogation &amp; live sensor graphing</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
      )}

      {/* 6. SECTION: MOT ROADWORTHINESS TEST */}
      {(activeTab === 'all' || activeTab === 'mot') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="border-b border-neutral-200 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-1">
              Category 05
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              MOT Roadworthiness Test
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl font-normal">
              Statutory inspection of vehicular roadworthiness, emissions compliance, braking balance, and chassis integrity.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
            
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-display text-xl font-bold text-neutral-900">
                Ensure Your Vehicle Is Legally Certified &amp; Mechanically Roadworthy
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Maintaining a valid roadworthiness certificate provides peace of mind that critical mechanical systems, steering link play, emissions thresholds, and lighting circuits are functioning properly to statutory standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Check when your vehicle's MOT is due</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Comprehensive road safety test bay</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Combine MOT with Interim or Full Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Avoid statutory fines and vehicle impoundment</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('MOT Roadworthiness Test')}
                  className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
                >
                  <FileCheck className="w-4 h-4 text-orange-400" />
                  <span>Book a Roadworthiness Test</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-orange-50/60 p-6 rounded-xl border border-orange-200/80 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
                Combine &amp; Save
              </span>
              <h4 className="text-sm font-bold text-neutral-900">Service + MOT Package</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Book your Full Annual Service alongside your MOT inspection in one single workshop visit for maximum convenience and cost savings.
              </p>
            </div>

          </div>

        </section>
      )}

      {/* 7. SECTION: BATTERY SERVICES */}
      {(activeTab === 'all' || activeTab === 'battery') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="border-b border-neutral-200 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-1">
              Category 06
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Battery Health Checks &amp; Replacement
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl font-normal">
              Digital Cold Cranking Amp testing, alternator output evaluation, precision terminal cleaning, and environmentally safe recycling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 space-y-4 shadow-xs">
              <h3 className="font-display text-base font-bold text-neutral-900">
                Complete Battery Service Scope:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Battery Health Checks:</strong> Digital conductance load testing measuring actual CCA against battery rating.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Battery Replacement:</strong> High-amperage AGM, EFB and maintenance-free heavy-duty battery stock.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Battery Fitting:</strong> Memory saver power backup to preserve radio codes, seat memory, and clock calibrations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Old Battery Disposal:</strong> Environmentally responsible hazardous lead-acid recycling.</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('Battery Services')}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Book Battery Service</span>
                </button>
              </div>
            </div>

            <div className="bg-blue-50/40 p-6 sm:p-8 rounded-2xl border border-blue-100 space-y-4">
              <h3 className="font-display text-base font-bold text-neutral-900">
                Common Battery Warning Signs:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BATTERY_WARNING_SIGNS.map((b, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-lg border border-neutral-200">
                    <span className="text-xs font-bold text-neutral-900 block mb-1">
                      {b.sign}
                    </span>
                    <span className="text-[11px] text-neutral-600 leading-normal">
                      {b.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>
      )}

      {/* 8. SECTION: AIR CONDITIONING */}
      {(activeTab === 'all' || activeTab === 'ac') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="border-b border-neutral-200 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-1">
              Category 07
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Air Conditioning Re-Gas &amp; Servicing
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl font-normal">
              Restore icy cabin cooling with precision vacuum drying, leak testing, compressor lubricating oil replenishment, and certified refrigerant charging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AIR_CON_PRICING.map((ac, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-neutral-200/90 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                    <div>
                      <span className="text-xs font-semibold uppercase text-orange-600 tracking-wider">
                        Refrigerant Service
                      </span>
                      <h3 className="font-display text-2xl font-bold text-neutral-900">
                        {ac.type}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-2xl sm:text-3xl font-bold text-blue-950 tabular-nums">
                        {ac.price}
                      </span>
                      <span className="text-[11px] text-neutral-500 block">Flat Transparent Rate</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {ac.desc}
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                    {ac.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-neutral-100 mt-6">
                  <button
                    onClick={() => onOpenBooking(`Air Conditioning (${ac.type})`)}
                    className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-xs inline-flex items-center justify-center gap-2"
                  >
                    <Wind className="w-4 h-4" />
                    <span>Book AC Service ({ac.type})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-orange-50/70 rounded-xl border border-orange-200 text-xs text-neutral-900 flex items-start gap-3">
            <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block font-semibold text-orange-950">Important Refrigerant Specifications:</strong>
              <p>
                R134A and R1234YF are chemically distinct refrigerants engineered for specific compressor seals and expansion valves; they <strong>cannot be interchanged</strong>. Our automated climate equipment identifies the exact system type before servicing. Please note that <strong>R744 (CO2) vehicles are currently not supported</strong>.
              </p>
            </div>
          </div>

        </section>
      )}

      {/* 9. SECTION: SUSPENSION & SHOCK ABSORBERS */}
      {(activeTab === 'all' || activeTab === 'suspension') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="border-b border-neutral-200 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-1">
              Category 08
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Suspension &amp; Shock Absorbers
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl font-normal">
              Protect your chassis, preserve tyre life, and restore responsive handling over potholes with expert strut renewals and suspension alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-neutral-900">
                Comprehensive Suspension Inspections &amp; Repairs
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Potholes and speed bumps in Lagos place extreme continuous load on hydraulic shock absorbers, coil springs, stabilizer links, and polyurethane control arm bushings.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Hydraulic shock absorber bounce and rebound testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Strut replacement and coil spring renewal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Ball joint, tie-rod and sway bar bushing replacements</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('Suspension & Shock Absorbers')}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
                >
                  <Activity className="w-4 h-4" />
                  <span>Book Suspension Service</span>
                </button>
              </div>
            </div>

            <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-950">
                Common Suspension Symptoms:
              </h4>
              <div className="space-y-2">
                {SUSPENSION_WARNING_SIGNS.map((s, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-neutral-200">
                    <strong className="text-xs font-semibold text-neutral-900 block">{s.sign}</strong>
                    <span className="text-[11px] text-neutral-600">{s.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>
      )}

      {/* 10. SECTION: FLEET SERVICES (Using Real WA0042 Image) */}
      {(activeTab === 'all' || activeTab === 'fleet') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="border-b border-neutral-200 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-1">
              Category 09
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Corporate Fleet Services &amp; Commercial Maintenance
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl font-normal">
              Bespoke automotive maintenance contracts for companies, banks, utility operators, and institutional vehicle fleets.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-xs font-semibold border border-blue-100">
                <Truck className="w-3.5 h-3.5 text-orange-600" />
                <span>Enterprise SLA &amp; Fleet Management</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">
                Turnkey Maintenance for Commercial Fleets
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Avoid operational bottlenecks and costly unexpected roadside breakdowns. We provide priority bay scheduling, monthly consolidate billing, OEM replacement parts, and dedicated customer account managers.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>30-day corporate billing terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Dedicated commercial vehicle bays</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Mobile fleet tyre replacement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Automated service interval logging</span>
                </div>
              </div>
              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('fleet')}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Talk to Our Fleet Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Request Rate Card
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
                <img
                  src={companyImages.fleet.localPath}
                  alt={companyImages.fleet.alt}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== companyImages.fleet.cdnUrl) {
                      target.src = companyImages.fleet.cdnUrl;
                    }
                  }}
                  className="w-full h-80 sm:h-96 object-cover filter brightness-100 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">Fleet Bay</span>
                    <p className="text-xs font-medium text-slate-200">Commercial vans &amp; enterprise utility fleet maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Clients Logo Strip */}
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block">
              Trusted by Leading Corporate Fleets:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {corporateClientAssets.map((client) => (
                <div
                  key={client.id}
                  className="p-3 bg-white rounded-xl border border-neutral-200 flex items-center justify-center text-center shadow-2xs h-20"
                >
                  <img
                    src={client.cdnUrl}
                    alt={client.name}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== window.location.origin + client.localPath) {
                        target.src = client.localPath;
                      }
                    }}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

        </section>
      )}

      {/* Global Booking Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-900 shadow-sm">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Ready to Book Your Service?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/80 mt-1">
              Select your preferred date, workshop arrival time, or mobile tyre fitting location.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            Schedule Service Now
          </button>
        </div>
      </section>

    </div>
  );
};
