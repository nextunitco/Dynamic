import React from 'react';
import { X, CheckCircle2, Calendar, Clock, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-start justify-between bg-neutral-50/50">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-1">
              Service Details
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-700 leading-relaxed">
          <p className="text-base text-neutral-800 leading-relaxed font-normal">
            {service.fullDesc}
          </p>

          {service.recommendedInterval && (
            <div className="flex items-center gap-3 p-3.5 bg-blue-50/60 rounded-xl text-neutral-800 text-xs sm:text-sm font-medium border border-blue-100">
              <Clock className="w-4 h-4 text-blue-900 shrink-0" />
              <span>Recommended Service Interval: <strong>{service.recommendedInterval}</strong></span>
            </div>
          )}

          {service.pricingNote && (
            <div className="flex items-center gap-3 p-3.5 bg-orange-50 text-orange-950 rounded-xl text-xs sm:text-sm font-medium border border-orange-200">
              <Wrench className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Transparent Pricing: <strong>{service.pricingNote}</strong></span>
            </div>
          )}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              Included Operations &amp; Checks
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-neutral-100 bg-neutral-50/80 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 font-medium cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white rounded-lg font-semibold text-sm hover:bg-orange-700 transition-colors shadow-xs cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book This Service</span>
          </button>
        </div>
      </div>
    </div>
  );
};
