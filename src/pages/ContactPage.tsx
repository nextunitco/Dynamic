import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  Navigation,
  Calendar,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { companyImages } from '../data/companyImages';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      return;
    }
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 500);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-neutral-50">
      
      {/* 1. Header with Real WA0039 Company Image */}
      <PageHeader
        title="Contact Dynamic Automotive & Tyre Centre"
        subtitle="RC No: 3332447 · Oyemat House, 45 Kudirat Adenekan Rd, Isolo, Lagos. Opposite Bokku Mart, Canoe Bus/Stop. Speak directly with our master technicians or schedule a visit."
        badge="Direct Workshop Communication"
        image={companyImages.contact}
        breadcrumbs={[{ label: 'Contact' }]}
        onNavigate={onNavigate}
        ctaText="Book a Service Appointment"
        onCtaClick={onOpenBooking}
      />

      {/* 2. Contact Information Cards & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="border-b border-neutral-100 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
                  Official Registered Workshop
                </span>
                <h2 className="font-display text-xl font-bold text-neutral-900 mt-1">
                  Dynamic Automotive &amp; Tyre Centre
                </h2>
                <span className="text-xs text-neutral-500 font-mono">RC No: 3332447</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-semibold mb-0.5">Physical Workshop Address:</strong>
                    <p className="text-neutral-600 leading-relaxed">
                      Oyemat House, 45 Kudirat Adenekan Rd, Isolo, Lagos.<br />
                      <span className="text-neutral-500 font-medium">(Opposite Bokku Mart, Canoe Bus/Stop)</span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-semibold mb-0.5">Telephone Inquiries:</strong>
                    <a
                      href="tel:+2349126983699"
                      className="text-orange-600 font-semibold hover:underline tabular-nums"
                    >
                      +234 912 698 3699
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-semibold mb-0.5">Email Desk:</strong>
                    <a
                      href="mailto:Info@dynamic.com.ng"
                      className="text-neutral-800 hover:text-orange-600 font-medium transition-colors"
                    >
                      Info@dynamic.com.ng
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-semibold mb-0.5">Workshop Operating Hours:</strong>
                    <p className="text-neutral-600 leading-normal">
                      Monday – Saturday: <span className="font-semibold text-neutral-800">8:00 AM – 6:00 PM</span><br />
                      Sunday: <span className="text-neutral-500">Closed (Emergency fleet dispatch only)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Call / Email buttons */}
              <div className="pt-3 border-t border-neutral-100 grid grid-cols-2 gap-2">
                <a
                  href="tel:+2349126983699"
                  className="py-2.5 px-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Directly</span>
                </a>
                <a
                  href="mailto:Info@dynamic.com.ng"
                  className="py-2.5 px-3 bg-blue-950 hover:bg-blue-900 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Team</span>
                </a>
              </div>
            </div>

            {/* Quick Booking CTA Card */}
            <div className="bg-blue-950 text-white p-6 rounded-2xl border border-blue-900 shadow-xs space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                Online Reservation
              </span>
              <h3 className="font-display text-base font-bold text-white">
                Prefer to book a specific date &amp; arrival slot?
              </h3>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                Use our interactive booking form to reserve early morning drop-off or arrange mobile tyre fitting.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Open Booking Form</span>
              </button>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-xs space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
                  Send A Direct Message
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">
                  How Can Our Automotive Engineers Help You?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">
                  Please provide your vehicle details or corporate inquiry. We respond within 2 working hours.
                </p>
              </div>

              {isSent ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-emerald-900">
                    Message Successfully Dispatched!
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Dynamic Automotive &amp; Tyre Centre. A service advisor from our Isolo workshop will review your request and get in touch promptly.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-4 px-5 py-2 bg-blue-950 text-white text-xs font-semibold rounded-lg hover:bg-blue-900 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Your Full Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Samuel Okafor"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. samuel@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0812 345 6789"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Message / Vehicle Symptoms <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your inquiry, vehicle symptoms (e.g. steering vibration, check engine light), or corporate fleet requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto px-8 py-3 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSending ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. Location & Workshop Section (Using Real WA0039 Image) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs">
          
          <div className="p-6 border-b border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-0.5">
                Workshop Location &amp; Physical Access
              </span>
              <h3 className="font-display text-lg font-bold text-neutral-900">
                Oyemat House, 45 Kudirat Adenekan Rd, Isolo, Lagos
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Opposite Bokku Mart, Canoe Bus/Stop
              </p>
            </div>
            
            <a
              href="https://maps.google.com/?q=Oyemat+House+45+Alhaja+Kudirat+Adenekan+Road+Isolo+Lagos"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-orange-400" />
              <span>Get Directions in Google Maps</span>
            </a>
          </div>

          {/* Real Workshop Photo WA0039 & Map Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-72 sm:h-96 bg-neutral-900 overflow-hidden">
              <img
                src={companyImages.contact.localPath}
                alt={companyImages.contact.alt}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== companyImages.contact.cdnUrl) {
                    target.src = companyImages.contact.cdnUrl;
                  }
                }}
                className="w-full h-full object-cover filter brightness-100 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">Workshop Exterior</span>
                  <p className="text-sm font-semibold text-slate-100">Dynamic Auto &amp; Tyre Centre Isolo Facility Entrance</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-72 sm:h-96 bg-neutral-100 overflow-hidden">
              <iframe
                title="Dynamic Auto & Tyre Centre Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.3150!3d6.5276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e727918a0a9%3A0x6b64d0a7a3727cb!2sIsolo%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
