import React, { useState } from 'react';
import { 
  Sparkles, 
  Gift, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Zap, 
  Coins,
  QrCode,
  UserCheck
} from 'lucide-react';
import { PageId, LoyaltyMember } from '../types';
import { FAQS_DATA } from '../data/faqsData';
import { PageHeader } from '../components/PageHeader';
import { 
  companyImages, 
  LOYALTY_REWARD_PERCENTAGE, 
  LOYALTY_REWARD_DISPLAY_RATE 
} from '../data/companyImages';

interface LoyaltyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const LoyaltyPage: React.FC<LoyaltyPageProps> = ({ onNavigate, onOpenBooking }) => {
  // Interactive Reward Calculator utilizing central configuration
  const [calcSpend, setCalcSpend] = useState<number>(50000);
  const loyaltyEarnRate = LOYALTY_REWARD_PERCENTAGE; // Configurable: 5% default (or 10% when confirmed)
  const calculatedReward = Math.round(calcSpend * loyaltyEarnRate);

  // Join form state
  const [joinForm, setJoinForm] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [newMember, setNewMember] = useState<LoyaltyMember | null>(null);
  const [isJoining, setIsJoining] = useState(false);

  // FAQ accordion state
  const loyaltyFaqs = FAQS_DATA.filter(f => f.category === 'loyalty');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinForm.name.trim() || !joinForm.phone.trim() || !joinForm.email.trim()) {
      return;
    }
    setIsJoining(true);

    setTimeout(() => {
      const member: LoyaltyMember = {
        name: joinForm.name,
        phone: joinForm.phone,
        email: joinForm.email,
        memberId: `DA-VIP-${Math.floor(100000 + Math.random() * 900000)}`,
        tier: 'Gold Member',
        joinedDate: 'Joined Today',
        pointsBalance: 1000 // Welcome bonus
      };
      setNewMember(member);
      setIsJoining(false);
    }, 500);
  };

  const redeemServices = [
    'Wheel Balancing & Alignment',
    'Tyres',
    'Car Servicing',
    'Diagnostics',
    'Oil Changes',
    'Battery Replacement',
    'Accessories & Detailing'
  ];

  const benefits = [
    {
      title: 'Earn on Purchases',
      desc: 'Automatic 5% value back on every naira spent across all workshop repairs and tyre fitments.',
      icon: Coins
    },
    {
      title: 'Redeem Rewards',
      desc: 'Offset your accrued loyalty value against future parts, labour invoices, or oil changes.',
      icon: Gift
    },
    {
      title: 'Exclusive Member Offers',
      desc: 'Seasonal promotions, complimentary multipoint health checks, and promotional tyre discounts.',
      icon: Sparkles
    },
    {
      title: 'Priority Service',
      desc: 'Jump the queue with expedited check-in and dedicated morning diagnostic bays.',
      icon: Zap
    },
    {
      title: 'Birthday Rewards',
      desc: 'Special annual service vouchers and complimentary vehicle conditioning during your birthday month.',
      icon: Award
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-neutral-50">
      
      {/* 1. Header with Real WA0036 Company Image */}
      <PageHeader
        title="Dynamic Auto Loyalty Club"
        subtitle={`Rewarding you for every visit. Earn ${LOYALTY_REWARD_DISPLAY_RATE} value on eligible vehicle servicing, tyres, and mechanical repairs, and redeem your cash credit effortlessly on future invoices.`}
        badge={`Earn ${LOYALTY_REWARD_DISPLAY_RATE} Value Back`}
        image={companyImages.loyalty}
        breadcrumbs={[{ label: 'Loyalty Program' }]}
        onNavigate={onNavigate}
        ctaText="Enroll & Claim ₦1,000 Welcome Bonus"
        onCtaClick={() => {
          const el = document.getElementById('enrollment-form');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Clear Loyalty System Explanation & Examples */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
            Straightforward Math
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            How The Reward System Works
          </h2>
          <p className="text-sm text-neutral-600">
            No complex point conversions. 1 Loyalty Naira equals 1 Naira discount on your invoice.
          </p>
        </div>

        {/* 3 Prominent Example Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Tier A Spend</span>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display tabular-nums">
                ₦10,000
              </span>
              <p className="text-xs text-neutral-500">Routine fluid top-up or puncture service</p>
            </div>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-600 font-medium">Earned Reward:</span>
              <span className="text-lg font-bold text-orange-600 font-display tabular-nums">₦500 Value</span>
            </div>
          </div>

          <div className="bg-orange-50/50 rounded-2xl border-2 border-orange-500/60 p-6 sm:p-8 space-y-4 relative shadow-sm">
            <div className="absolute top-4 right-4 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              Popular
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-700">Tier B Spend</span>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display tabular-nums">
                ₦50,000
              </span>
              <p className="text-xs text-neutral-500">Interim service or single tyre replacement</p>
            </div>
            <div className="pt-4 border-t border-orange-200/60 flex items-center justify-between">
              <span className="text-xs text-neutral-600 font-medium">Earned Reward:</span>
              <span className="text-lg font-bold text-orange-600 font-display tabular-nums">₦2,500 Value</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Tier C Spend</span>
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display tabular-nums">
                ₦120,000
              </span>
              <p className="text-xs text-neutral-500">Full annual servicing &amp; multiple tyre set</p>
            </div>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-600 font-medium">Earned Reward:</span>
              <span className="text-lg font-bold text-orange-600 font-display tabular-nums">₦6,000 Value</span>
            </div>
          </div>

        </div>

        {/* Interactive Spend Calculator */}
        <div className="bg-blue-50/50 p-6 sm:p-8 rounded-2xl border border-blue-100 max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-base font-bold text-neutral-900">
                Calculate Your Loyalty Return
              </h3>
              <p className="text-xs text-neutral-500">Adjust the slider to see your immediate naira benefit</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-neutral-500 block">Your Spend</span>
              <span className="text-lg font-bold text-blue-950 font-display tabular-nums">
                ₦{calcSpend.toLocaleString()}
              </span>
            </div>
          </div>

          <input
            type="range"
            min={5000}
            max={300000}
            step={5000}
            value={calcSpend}
            onChange={(e) => setCalcSpend(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer h-2 bg-neutral-200 rounded-lg"
          />

          <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-blue-100 shadow-2xs">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-orange-600" />
              <span className="text-xs sm:text-sm font-semibold text-neutral-800">Earned Credit for Future Visits:</span>
            </div>
            <span className="text-xl font-bold text-orange-600 font-display tabular-nums">
              ₦{calculatedReward.toLocaleString()}
            </span>
          </div>
        </div>

      </section>

      {/* 3. Member Perks & Redemption Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Perks Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
              Member Privileges
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Exclusive Member Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl border border-neutral-200/90 space-y-3 hover:border-orange-300 hover:shadow-xs transition-all">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-base font-bold text-neutral-900">{b.title}</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Where Rewards Can Be Redeemed */}
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-10 border border-blue-900">
          <div className="max-w-3xl space-y-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 block">
              Redemption Scope
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Services Where Rewards Can Be Redeemed
            </h3>
            <p className="text-xs sm:text-sm text-blue-200/80">
              Apply your loyalty credit against any invoice item during check-out:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {redeemServices.map((service, idx) => (
              <div key={idx} className="p-3 bg-blue-900/60 rounded-lg border border-blue-800/80 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">{service}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 4. Join Now Form & Digital Card Preview */}
      <section id="enrollment-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-md p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
              Quick Enrollment
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Join the Loyalty Program
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Membership is 100% free with no renewal fees. Enroll in under 30 seconds and receive a ₦1,000 welcome credit bonus toward your next workshop visit.
            </p>

            <form onSubmit={handleJoinSubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Olawale Davies"
                  value={joinForm.name}
                  onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Phone Number (for SMS Balance Updates) <span className="text-orange-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0803 123 4567"
                  value={joinForm.phone}
                  onChange={(e) => setJoinForm({ ...joinForm, phone: e.target.value })}
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
                  placeholder="e.g. olawale@example.com"
                  value={joinForm.email}
                  onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                disabled={isJoining}
                className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-xs cursor-pointer disabled:opacity-50"
              >
                {isJoining ? 'Creating Digital Membership...' : 'Join Now & Claim ₦1,000 Credit'}
              </button>
            </form>
          </div>

          {/* Right Column: Digital Member Pass */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-6 border border-blue-900 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-blue-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-orange-600 flex items-center justify-center font-bold text-xs">
                    DA
                  </div>
                  <span className="text-xs font-bold tracking-wide uppercase">Dynamic VIP Club</span>
                </div>
                <span className="text-[11px] bg-orange-600/30 text-orange-300 border border-orange-500/40 px-2 py-0.5 rounded-full font-semibold">
                  {newMember ? newMember.tier : 'Gold Member'}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-blue-200/70">Member Name</span>
                <p className="font-display text-lg font-bold text-white tracking-wide">
                  {newMember ? newMember.name : 'Your Name Here'}
                </p>
                <p className="text-xs text-blue-300 font-mono">
                  {newMember ? newMember.memberId : 'DA-VIP-000000'}
                </p>
              </div>

              <div className="p-4 bg-blue-900/40 rounded-xl border border-blue-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-blue-200 block">Available Balance</span>
                  <span className="font-display text-xl font-bold text-orange-400 tabular-nums">
                    {newMember ? `₦${newMember.pointsBalance.toLocaleString()}` : '₦1,000 Bonus'}
                  </span>
                </div>
                <QrCode className="w-10 h-10 text-blue-300" />
              </div>

              <div className="text-[11px] text-blue-200/70 text-center">
                Show this digital card or state your phone number at check-out in our Isolo centre.
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 block">
            Got Questions?
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {loyaltyFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-neutral-900 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
