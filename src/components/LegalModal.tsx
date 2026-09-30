import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    terms: {
      title: 'Terms & Conditions',
      date: 'Effective Date: January 2026',
      sections: [
        {
          heading: '1. Service Scope & Authorizations',
          text: 'Dynamic Auto & Tyre Centre provides vehicle servicing, computerized diagnostics, tyre installation, wheel balancing, alignment, air conditioning re-gas, and preventive maintenance at our Isolo workshop and via mobile units. By booking or commissioning service work, customers authorize technicians to operate and road-test the vehicle within normal limits.'
        },
        {
          heading: '2. Estimates & Component Replacements',
          text: 'Initial quotes are based on initial visual and diagnostic assessments. Should secondary internal mechanical defects be identified, technician supervisors will notify the client and obtain verbal or written authorization before procuring supplemental replacement parts.'
        },
        {
          heading: '3. Parts & Labor Warranty',
          text: 'Qualifying replacement components carry the manufacturer warranty. Workmanship warranty applies to installations carried out under standard operating conditions.'
        },
        {
          heading: '4. Vehicle Collection & Payment Terms',
          text: 'All invoiced servicing and tyre installation charges must be settled prior to vehicle release, payable via electronic transfer, debit card, or approved corporate fleet credit lines.'
        }
      ]
    },
    privacy: {
      title: 'Privacy Policy',
      date: 'Effective Date: January 2026',
      sections: [
        {
          heading: '1. Information We Collect',
          text: 'We collect customer contact credentials (full name, phone number, email address) alongside vehicle specifications (registration number, make, model, chassis/VIN, service history logs) necessary to conduct diagnostics, log warranty files, and manage loyalty points.'
        },
        {
          heading: '2. Purpose of Data Processing',
          text: 'Your information is used strictly to process service bookings, generate digital inspection reports, administer loyalty balances, dispatch service interval reminders, and provide customer support.'
        },
        {
          heading: '3. Data Security & Third Parties',
          text: 'We do not sell, rent, or trade customer information to third-party marketing firms. Customer data is stored securely in encrypted systems accessible solely to authorized workshop staff.'
        }
      ]
    },
    disclaimer: {
      title: 'Automotive Disclaimer',
      date: 'Effective Date: January 2026',
      sections: [
        {
          heading: '1. Pre-Existing Vehicle Defects',
          text: 'Dynamic Auto & Tyre Centre conducts an intake walkaround and diagnostic scan. The company is not liable for latent pre-existing mechanical fatigue, brittle aged plastics, or internal electrical malfunctions not caused by technician handling.'
        },
        {
          heading: '2. Educational Knowledge Hub',
          text: 'Articles published in our Knowledge Hub are provided for educational and preventive consumer awareness. Technical diagnosis must always be confirmed on-site by certified technicians using professional diagnostic equipment.'
        },
        {
          heading: '3. Manufacturer Specifications',
          text: 'All service intervals and lubricant specifications adhere to manufacturer guidance wherever provided.'
        }
      ]
    }
  };

  const activeContent = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-neutral-100 flex items-start justify-between bg-neutral-50/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-neutral-900">
                {activeContent.title}
              </h3>
              <span className="text-xs text-neutral-500">{activeContent.date}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          {activeContent.sections.map((section, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="font-semibold text-neutral-900">{section.heading}</h4>
              <p className="text-neutral-600 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-neutral-100 bg-neutral-50/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-950 text-white rounded-lg text-xs font-semibold hover:bg-blue-900 cursor-pointer"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
