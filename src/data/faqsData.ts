export interface FAQItem {
  question: string;
  answer: string;
  category: 'loyalty' | 'general' | 'fleet';
}

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'How do I earn rewards in the Dynamic Auto Loyalty Program?',
    answer: 'Every time you service your vehicle, purchase tyres, or carry out repairs at Dynamic Auto & Tyre Centre, 5% of your total spend is automatically credited to your loyalty balance. For example, ₦10,000 spent earns ₦500 value, ₦50,000 earns ₦2,500, and ₦120,000 earns ₦6,000 value.',
    category: 'loyalty'
  },
  {
    question: 'What services can I redeem my loyalty value on?',
    answer: 'You can redeem your accumulated loyalty value on any of our workshop services including Wheel Balancing & Alignment, Tyres, Car Servicing, Diagnostics, Oil Changes, Battery Replacement, and Accessories & Detailing.',
    category: 'loyalty'
  },
  {
    question: 'Does my loyalty balance expire?',
    answer: 'Your earned loyalty value remains active for 18 months from your last qualifying service visit. Any visit within this window automatically extends your full balance.',
    category: 'loyalty'
  },
  {
    question: 'Is there a physical membership card or is it digital?',
    answer: 'Your membership is completely digital linked to your mobile phone number and vehicle registration. You will receive an instant digital member pass and SMS balance summary upon registration and every visit.',
    category: 'loyalty'
  },
  {
    question: 'Where is Dynamic Auto & Tyre Centre located in Lagos?',
    answer: 'We are conveniently located at Oyemat House, 45 Alhaja Kudirat Adenekan Road, Isolo, Lagos. We feature multi-bay precision service pits, dedicated tyre fitting bays, and customer reception with Wi-Fi and workspace.',
    category: 'general'
  },
  {
    question: 'Do you offer mobile tyre fitting services?',
    answer: 'Yes! Our custom-equipped Mobile Tyre Fitting van can attend to your vehicle at your residence, office, or commercial depot across Lagos, equipped with computerized wheel balancing and bead breakers.',
    category: 'general'
  },
  {
    question: 'What is the difference between R134A and R1234YF air conditioning gas?',
    answer: 'R134A is standard on vehicles manufactured up to ~2017 (charged at ₦18,000), while R1234YF is a modern eco-friendly refrigerant required by newer European and international vehicles (charged at ₦25,000). They operate under different port geometries and chemical compositions and cannot be interchanged. Please note R744 systems are currently not supported.',
    category: 'general'
  },
  {
    question: 'What fleet services do you provide for corporate companies?',
    answer: 'Dynamic Auto manages corporate vehicle fleets of all sizes with centralized billing, dedicated account managers, priority workshop booking, scheduled preventative maintenance, extended operating hours, and comprehensive vehicle health reporting.',
    category: 'fleet'
  }
];
