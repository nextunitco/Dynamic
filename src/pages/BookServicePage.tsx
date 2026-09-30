import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Car, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  ArrowLeft,
  CalendarCheck,
  AlertCircle
} from 'lucide-react';
import { BookingFormData, PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { companyImages } from '../data/companyImages';

interface BookServicePageProps {
  initialService?: string;
  onNavigate: (page: PageId) => void;
}

export const BookServicePage: React.FC<BookServicePageProps> = ({
  initialService = '',
  onNavigate
}) => {
  const serviceOptions = [
    'Vehicle Servicing',
    'Vehicle Repairs',
    'Tyres & Wheels',
    'Brake Service',
    'MOT',
    'Diagnostics',
    'Battery',
    'Air Conditioning',
    'Suspension',
    'Fleet Services',
    'Other'
  ];

  const vehicleTypes = [
    'Car / Sedan',
    'SUV / Crossover',
    'Commercial Van',
    '4x4 / Pickup Truck',
    'Electric Vehicle (EV)',
    'Hybrid Vehicle',
    'Commercial Fleet Vehicle'
  ];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleReg: '',
    vehicleType: 'Car / Sedan',
    serviceRequired: initialService || 'Vehicle Service',
    preferredDate: '',
    preferredTime: '09:00 AM',
    additionalMessage: ''
  });

  const [submittedBooking, setSubmittedBooking] = useState<{
    data: BookingFormData;
    reference: string;
    submittedAt: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please provide your full name, phone number, and email.');
      return;
    }

    if (!formData.preferredDate) {
      setErrorMsg('Please select your preferred appointment date.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean network request / backend persistence
    setTimeout(() => {
      const reference = `DA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const submission = {
        data: { ...formData },
        reference,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      // Save to localStorage for demo persistence
      try {
        const stored = JSON.parse(localStorage.getItem('dynamic_auto_bookings') || '[]');
        stored.push(submission);
        localStorage.setItem('dynamic_auto_bookings', JSON.stringify(stored));
      } catch (err) {
        console.error('Storage error:', err);
      }

      setSubmittedBooking(submission);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleReg: '',
      vehicleType: 'Car / Sedan',
      serviceRequired: 'Vehicle Service',
      preferredDate: '',
      preferredTime: '09:00 AM',
      additionalMessage: ''
    });
  };

  // 1. CONFIRMATION SCREEN
  if (submittedBooking) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden">
          
          <div className="bg-emerald-600 p-8 text-white text-center space-y-3">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100 block">
              Appointment Scheduled
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Service Booking Confirmed!
            </h2>
            <p className="text-xs sm:text-sm text-emerald-50 max-w-md mx-auto">
              Your service request has been logged. Our service advisor will call or SMS you to confirm final check-in details.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-200 gap-2">
              <div>
                <span className="text-xs text-neutral-500 block">Booking Reference Number</span>
                <span className="font-display text-xl font-bold text-neutral-900 tracking-wider">
                  {submittedBooking.reference}
                </span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs text-neutral-500 block">Status</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Confirmed &amp; Reserved
                </span>
              </div>
            </div>

            {/* Appointment Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl border border-neutral-200 space-y-1">
                <span className="text-neutral-500 text-xs font-medium block">Customer Information</span>
                <strong className="text-neutral-900 block">{submittedBooking.data.fullName}</strong>
                <span className="text-neutral-600 block">{submittedBooking.data.phone}</span>
                <span className="text-neutral-600 block">{submittedBooking.data.email}</span>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 space-y-1">
                <span className="text-neutral-500 text-xs font-medium block">Vehicle Spec</span>
                <strong className="text-neutral-900 block">
                  {submittedBooking.data.vehicleMake} {submittedBooking.data.vehicleModel}
                </strong>
                <span className="text-neutral-600 block">
                  Reg: {submittedBooking.data.vehicleReg || 'Unspecified'} ({submittedBooking.data.vehicleType})
                </span>
                <span className="text-neutral-600 block">
                  Requested: <strong>{submittedBooking.data.serviceRequired}</strong>
                </span>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 space-y-1 sm:col-span-2">
                <span className="text-neutral-500 text-xs font-medium block">Date &amp; Arrival Slot</span>
                <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                  <Calendar className="w-4 h-4 text-orange-600" />
                  <span>{submittedBooking.data.preferredDate}</span>
                  <span aria-hidden="true">·</span>
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span>{submittedBooking.data.preferredTime}</span>
                </div>
                <div className="flex items-start gap-1.5 text-xs text-neutral-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span>Oyemat House, 45 Alhaja Kudirat Adenekan Road, Isolo, Lagos.</span>
                </div>
              </div>

              {submittedBooking.data.additionalMessage && (
                <div className="p-4 rounded-xl border border-neutral-200 sm:col-span-2 space-y-1">
                  <span className="text-neutral-500 text-xs font-medium block">Client Notes</span>
                  <p className="text-neutral-700 italic">"{submittedBooking.data.additionalMessage}"</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 border border-neutral-300 text-neutral-700 rounded-lg text-xs font-medium hover:bg-neutral-50 cursor-pointer"
              >
                Book Another Service
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-950 text-white rounded-lg text-xs font-semibold hover:bg-blue-900 cursor-pointer shadow-xs"
              >
                Return to Home
              </button>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // 2. MAIN BOOKING FORM
  return (
    <div className="space-y-12 sm:space-y-16 pb-20 bg-neutral-50">
      
      {/* 1. Header with Real WA0033 Company Image */}
      <PageHeader
        title="Book an Automotive Service"
        subtitle="Select your vehicle service, preferred date, and workshop arrival slot. Our engineering team will prepare your bay, diagnostic equipment, and genuine OEM parts prior to your arrival."
        badge="Online Workshop Reservation"
        image={companyImages.repairs}
        breadcrumbs={[{ label: 'Book a Service' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title & Introduction */}
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
            Schedule An Appointment
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Reserve Your Workshop Slot
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
            Please fill out your vehicle specifications and required service. You can pay securely upon physical inspection and job completion at our Isolo workshop.
          </p>
        </div>

      {errorMsg && (
        <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl text-xs sm:text-sm text-orange-800 flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-orange-600 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-10 space-y-8">
        
        {/* SECTION A: CONTACT DETAILS */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-neutral-100 pb-2">
            <User className="w-4 h-4 text-orange-600" />
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-neutral-900">
              1. Customer Details
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Full Name <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="e.g. Babatunde Adeleke"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Phone Number <span className="text-orange-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. 0802 345 6789"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Email Address <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="e.g. name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* SECTION B: VEHICLE SPECIFICATIONS */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-neutral-100 pb-2">
            <Car className="w-4 h-4 text-orange-600" />
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-neutral-900">
              2. Vehicle Information
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Vehicle Make <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                name="vehicleMake"
                required
                placeholder="e.g. Toyota, Mercedes, Honda"
                value={formData.vehicleMake}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Vehicle Model <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                name="vehicleModel"
                required
                placeholder="e.g. Camry, GLE 450, Accord"
                value={formData.vehicleModel}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Vehicle Registration
              </label>
              <input
                type="text"
                name="vehicleReg"
                placeholder="e.g. LAG-489-AA"
                value={formData.vehicleReg}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Vehicle Type
              </label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              >
                {vehicleTypes.map((type, i) => (
                  <option key={i} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* SECTION C: SERVICE REQUIRED & SCHEDULE */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-neutral-100 pb-2">
            <CalendarCheck className="w-4 h-4 text-orange-600" />
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-neutral-900">
              3. Service &amp; Schedule
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Service dropdown matching prompt requirements */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Service Required <span className="text-orange-500">*</span>
              </label>
              <select
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              >
                {serviceOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Preferred Date <span className="text-orange-500">*</span>
              </label>
              <input
                type="date"
                name="preferredDate"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Preferred Time
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              >
                <option value="08:30 AM">08:30 AM (Early Drop-off)</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:30 PM">03:30 PM</option>
                <option value="05:00 PM">05:00 PM</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Additional Message or Specific Issues Noticed
            </label>
            <textarea
              name="additionalMessage"
              rows={3}
              placeholder="e.g. Steering vibrates at 90 km/h, check engine light illuminated on Monday, need air conditioning re-gas."
              value={formData.additionalMessage}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Submit Bar */}
        <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>No upfront payment required. Pay upon completion after inspection.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold text-sm rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Confirming Reservation...</span>
            ) : (
              <>
                <Calendar className="w-4 h-4" />
                <span>Book a Service</span>
              </>
            )}
          </button>
        </div>

      </form>

      </div>
    </div>
  );
};
