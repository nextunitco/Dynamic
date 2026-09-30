import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageSquare,
  Navigation
} from 'lucide-react';
import { PageId } from '../types';

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

  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
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
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-blue-950 text-white py-16 sm:py-20 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 block">
              Direct Workshop Communication
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Contact Dynamic Auto &amp; Tyre Centre
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              Have an urgent question about your vehicle, need a custom fleet quotation, or wish to arrange mobile tyre fitting? We’re here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Information Cards & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-4 shadow-xs">
              <h2 className="font-display text-lg font-bold text-neutral-900 border-b border-neutral-100 pb-3">
                Workshop Headquarters
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-semibold mb-0.5">Address</strong>
                    <p className="text-neutral-600 leading-relaxed">
                      Oyemat House, 45 Alhaja Kudirat Adenekan Road, Isolo, Lagos.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-neutral-900 font-semibold mb-0.5">Telephone &amp; WhatsApp</strong>
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
                    <strong className="block text-neutral-900 font-semibold mb-0.5">Email Inquiries</strong>
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
                    <strong className="block text-neutral-900 font-semibold mb-0.5">Operating Hours</strong>
                    <p className="text-neutral-600 leading-relaxed">
                      Monday &ndash; Friday: 8:00 AM &ndash; 6:00 PM<br />
                      Saturday: 8:30 AM &ndash; 5:00 PM<br />
                      Sunday: Closed (Mobile Emergency On-Demand)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct CTAs */}
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

            {/* Social Channels */}
            <div className="bg-neutral-100 rounded-xl p-5 border border-neutral-200 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 block">
                Connect on Social Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 hover:text-orange-600 hover:border-orange-300 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 hover:text-orange-600 hover:border-orange-300 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 hover:text-orange-600 hover:border-orange-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-700" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-xs space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
                  Send A Message
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">
                  How Can We Help You?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500">
                  Fill in your details below and a service advisor will get back to you promptly.
                </p>
              </div>

              {isSent ? (
                <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-emerald-900">
                    Message Successfully Sent!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-sm mx-auto">
                    Thank you for reaching out to Dynamic Auto &amp; Tyre Centre. One of our service managers will contact you within working hours.
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
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
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
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0812 345 6789"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your inquiry, vehicle symptoms, or corporate fleet requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
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

      {/* 3. Google Maps Styled Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs">
          
          <div className="p-6 border-b border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block mb-0.5">
                Location &amp; Access
              </span>
              <h3 className="font-display text-lg font-bold text-neutral-900">
                Oyemat House, Alhaja Kudirat Adenekan Rd, Isolo
              </h3>
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

          {/* Interactive map representation container */}
          <div className="relative w-full h-80 sm:h-96 bg-neutral-100 overflow-hidden">
            <iframe
              title="Dynamic Auto & Tyre Centre Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.3150!3d6.5276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e727918a0a9%3A0x6b64d0a7a3727cb!2sIsolo%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Overlay Workshop Pin Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-neutral-200 shadow-md flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-xs">
                DA
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-neutral-900 block">
                  Dynamic Auto &amp; Tyre Centre
                </span>
                <span className="text-[11px] text-neutral-500 block">
                  Oyemat House, 45 Alhaja Kudirat Adenekan Rd, Isolo
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
