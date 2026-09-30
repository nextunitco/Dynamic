import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, ShieldCheck, Wrench, Disc, Truck, Users } from 'lucide-react';
import { companyImages } from '../data/companyImages';

interface GalleryItem {
  id: string;
  title: string;
  category: 'bays' | 'tyres' | 'diagnostics' | 'fleet' | 'team';
  categoryLabel: string;
  description: string;
  image: {
    cdnUrl: string;
    localPath: string;
    alt: string;
  };
}

export const FacilityGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'WA0033',
      title: 'Heavy-Duty Multi-Bay Mechanical Workshop',
      category: 'bays',
      categoryLabel: 'Mechanical Bays',
      description: 'Multi-bay hydraulic vehicle lifts configured for precision engine diagnostics, suspension overhaul, and powertrain maintenance.',
      image: companyImages.repairs
    },
    {
      id: 'WA0034',
      title: 'Precision Tyre Mounting & Digital Balancing Bay',
      category: 'tyres',
      categoryLabel: 'Tyres & Wheels',
      description: 'Pneumatic bead-breaking and run-flat tyre mounting equipment with laser rim-runout balancing.',
      image: companyImages.tyres
    },
    {
      id: 'WA0035',
      title: 'Mobile Rapid Tyre Service Van & Alignment Unit',
      category: 'tyres',
      categoryLabel: 'Tyres & Wheels',
      description: 'Fully equipped mobile response unit providing on-site corporate fleet and roadside tyre replacement across Lagos.',
      image: companyImages.wheelBalancing
    },
    {
      id: 'WA0042',
      title: 'Commercial Fleet Maintenance Facility',
      category: 'fleet',
      categoryLabel: 'Fleet Operations',
      description: 'Dedicated bays engineered for commercial transport vans, bank cash-in-transit units, and corporate utility vehicles.',
      image: companyImages.fleet
    },
    {
      id: 'WA0046',
      title: 'Advanced Bi-Directional ECU Diagnostic Bay',
      category: 'diagnostics',
      categoryLabel: 'Diagnostics',
      description: 'Factory-grade scanner workstations communicating with onboard CAN-bus ECUs, ABS modules, and sensor arrays.',
      image: companyImages.diagnostics
    },
    {
      id: 'WA0040',
      title: 'Certified Engineering Team & Technical Lead',
      category: 'team',
      categoryLabel: 'Our Technicians',
      description: 'Experienced master automotive engineers undergoing continuous diagnostic training on modern European, Japanese, and American platforms.',
      image: companyImages.teamWorkshop
    },
    {
      id: 'WA0036',
      title: 'Customer Service Reception & Lounge',
      category: 'team',
      categoryLabel: 'Customer Desk',
      description: 'Air-conditioned customer waiting area with real-time job-card updates, transparent estimates, and service intake advisors.',
      image: companyImages.loyalty
    },
    {
      id: 'WA0045',
      title: 'Dynamic Road Force & Wheel Balancing Bay',
      category: 'tyres',
      categoryLabel: 'Tyres & Wheels',
      description: 'High-speed wheel balancing eliminating highway steering vibrations, irregular tread cupping, and chassis wear.',
      image: companyImages.homeSlide5
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const currentIndex = selectedPhoto 
    ? galleryItems.findIndex(i => i.id === selectedPhoto.id) 
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0) {
      const nextIndex = (currentIndex + 1) % galleryItems.length;
      setSelectedPhoto(galleryItems[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (currentIndex >= 0) {
      const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      setSelectedPhoto(galleryItems[prevIndex]);
    }
  };

  return (
    <section className="space-y-8">
      {/* Header with Title & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-neutral-200 pb-5">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-orange-700">
            <Camera className="w-3.5 h-3.5" />
            <span>Genuine Photography</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Inside Our Isolo Workshop &amp; Tyre Centre
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-normal">
            Take a visual tour of our modern engineering bays, computerized diagnostic scanners, wheel balancing machinery, and customer reception desk.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {[
            { id: 'all', label: 'All Areas' },
            { id: 'bays', label: 'Mechanical' },
            { id: 'tyres', label: 'Tyres & Wheels' },
            { id: 'diagnostics', label: 'Diagnostics' },
            { id: 'fleet', label: 'Fleet' },
            { id: 'team', label: 'Team & Lounge' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === tab.id
                  ? 'bg-blue-950 text-white shadow-xs'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Photo Grid - Crystal Clear, High-Visibility Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group relative rounded-2xl overflow-hidden bg-white border border-neutral-200/90 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Image Container - Crisp and fully visible */}
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-900">
              <img
                src={item.image.localPath}
                alt={item.image.alt}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== item.image.cdnUrl) {
                    target.src = item.image.cdnUrl;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-100 contrast-105"
                loading="lazy"
              />
              
              {/* Category pill on top of image */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-950/80 text-white backdrop-blur-xs border border-white/10">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 text-white text-xs font-semibold rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge Photo</span>
                </span>
              </div>
            </div>

            {/* Caption & Details below the photo */}
            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-sm font-bold text-neutral-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 font-normal line-clamp-2 mt-1">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1 text-slate-500 font-medium">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Isolo Workshop
                </span>
                <span className="font-mono text-[10px] text-orange-600 font-semibold group-hover:underline">
                  Click to view full photo
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for High-Resolution Photo Inspection */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top modal bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-orange-600/30 border border-orange-500/50 text-orange-300">
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 className="font-display text-sm sm:text-base font-bold text-white line-clamp-1">
                  {selectedPhoto.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Resolution Picture View */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] sm:min-h-[460px] overflow-hidden">
              <img
                src={selectedPhoto.image.localPath}
                alt={selectedPhoto.image.alt}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== selectedPhoto.image.cdnUrl) {
                    target.src = selectedPhoto.image.cdnUrl;
                  }
                }}
                className="max-h-[65vh] w-auto max-w-full object-contain filter brightness-105"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Details Bar */}
            <div className="p-4 sm:p-5 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <p className="text-slate-300 max-w-2xl font-normal leading-relaxed">
                {selectedPhoto.description}
              </p>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-slate-400">
                  {currentIndex + 1} of {galleryItems.length}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-mono text-[11px]">
                  Oyemat House, Isolo, Lagos
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
