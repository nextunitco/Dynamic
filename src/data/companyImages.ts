/**
 * Central Image Configuration & Asset Management
 * All assets originate from the genuine Dynamic Automotive & Tyre Centre library.
 * Structured with primary CDN URLs and local fallback paths for maximum resilience.
 */

export interface ImageAsset {
  id: string;
  cdnUrl: string;
  localPath: string;
  alt: string;
}

export const companyImages = {
  // Slideshow images for Home page hero only (High-Definition 1080p & 1024p)
  homeSlide1: {
    id: 'WA0044',
    cdnUrl: 'https://i.postimg.cc/Y2zHrWmC/IMG-20260928-WA0044.jpg',
    localPath: '/company/WA0044.jpg',
    alt: 'Dynamic Automotive & Tyre Centre modern workshop facility and service bay'
  },
  homeSlide2: {
    id: 'WA0042',
    cdnUrl: 'https://i.postimg.cc/Yq2whC1V/IMG-20260928-WA0042.jpg',
    localPath: '/company/WA0042.jpg',
    alt: 'Dynamic Automotive commercial vehicle and fleet maintenance bay'
  },
  homeSlide3: {
    id: 'WA0043',
    cdnUrl: 'https://i.postimg.cc/y6yH1ZSN/IMG-20260928-WA0043.jpg',
    localPath: '/company/WA0043.jpg',
    alt: 'Dynamic Automotive certified technicians and engineering leadership team'
  },
  homeSlide4: {
    id: 'WA0033',
    cdnUrl: 'https://i.postimg.cc/3xVMSjzL/IMG-20260928-WA0033(1).jpg',
    localPath: '/company/WA0033.jpg',
    alt: 'Precision vehicle mechanical repairs and hydraulic lift inspection'
  },
  homeSlide5: {
    id: 'WA0045',
    cdnUrl: 'https://i.postimg.cc/ZYxSbdyT/IMG-20260928-WA0045.jpg',
    localPath: '/company/WA0045.jpg',
    alt: 'Advanced bi-directional engine diagnostic scanning and computerized troubleshooting'
  },

  // Internal Page Headers (Specific 1-to-1 Mapping)
  about: {
    id: 'WA0043',
    cdnUrl: 'https://i.postimg.cc/y6yH1ZSN/IMG-20260928-WA0043.jpg',
    localPath: '/company/WA0043.jpg',
    alt: 'About Dynamic Automotive & Tyre Centre team and leadership'
  },
  services: {
    id: 'WA0044',
    cdnUrl: 'https://i.postimg.cc/Y2zHrWmC/IMG-20260928-WA0044.jpg',
    localPath: '/company/WA0044.jpg',
    alt: 'Comprehensive automotive engineering and workshop services'
  },
  tyres: {
    id: 'WA0034',
    cdnUrl: 'https://i.postimg.cc/q73P9hdm/IMG-20260928-WA0034.jpg',
    localPath: '/company/WA0034.jpg',
    alt: 'Professional tyre fitting, wheel balancing and mobile fitting services'
  },
  repairs: {
    id: 'WA0033',
    cdnUrl: 'https://i.postimg.cc/3xVMSjzL/IMG-20260928-WA0033(1).jpg',
    localPath: '/company/WA0033.jpg',
    alt: 'Vehicle repairs, routine servicing and mechanical maintenance'
  },
  diagnostics: {
    id: 'WA0045',
    cdnUrl: 'https://i.postimg.cc/ZYxSbdyT/IMG-20260928-WA0045.jpg',
    localPath: '/company/WA0045.jpg',
    alt: 'Electronic vehicle diagnostics and computer system checks'
  },
  driverTraining: {
    id: 'WA0041',
    cdnUrl: 'https://i.postimg.cc/m2ZGtgQw/IMG-20260928-WA0041.jpg',
    localPath: '/company/WA0041.jpg',
    alt: 'Dynamic Automotive driver training and defensive road safety program'
  },
  fleet: {
    id: 'WA0042',
    cdnUrl: 'https://i.postimg.cc/Yq2whC1V/IMG-20260928-WA0042.jpg',
    localPath: '/company/WA0042.jpg',
    alt: 'Corporate fleet maintenance and commercial vehicle support'
  },
  loyalty: {
    id: 'WA0036',
    cdnUrl: 'https://i.postimg.cc/FH75VCCg/IMG-20260928-WA0036.jpg',
    localPath: '/company/WA0036.jpg',
    alt: 'Dynamic Auto loyalty club and customer service reception'
  },
  knowledgeHub: {
    id: 'WA0045',
    cdnUrl: 'https://i.postimg.cc/ZYxSbdyT/IMG-20260928-WA0045.jpg',
    localPath: '/company/WA0045.jpg',
    alt: 'Automotive knowledge hub, tyre technical guides and maintenance education'
  },
  partners: {
    id: 'WA0038',
    cdnUrl: 'https://i.postimg.cc/tCrGPGkg/IMG-20260928-WA0038.jpg',
    localPath: '/company/WA0038.jpg',
    alt: 'Industry partnerships and Bosch certified automotive excellence'
  },
  contact: {
    id: 'WA0039',
    cdnUrl: 'https://i.postimg.cc/TYkvmv9S/IMG-20260928-WA0039.jpg',
    localPath: '/company/WA0039.jpg',
    alt: 'Dynamic Automotive & Tyre Centre workshop entrance in Isolo Lagos'
  },

  // Supporting Workshop Images
  tyreFittingSupporting: {
    id: 'WA0034',
    cdnUrl: 'https://i.postimg.cc/q73P9hdm/IMG-20260928-WA0034.jpg',
    localPath: '/company/WA0034.jpg',
    alt: 'Tyre fitting and laser wheel alignment bay'
  },
  boschPartnership: {
    id: 'WA0037',
    cdnUrl: 'https://i.postimg.cc/bwWXC040/IMG-20260928-WA0037.jpg',
    localPath: '/company/WA0037.jpg',
    alt: 'Technical expertise and Bosch diagnostic equipment partnership'
  },
  teamWorkshop: {
    id: 'WA0040',
    cdnUrl: 'https://i.postimg.cc/BQhfDfgR/IMG-20260928-WA0040.jpg',
    localPath: '/company/WA0040.jpg',
    alt: 'Dynamic Automotive trained technical workshop engineers'
  },
  wheelBalancing: {
    id: 'WA0046',
    cdnUrl: 'https://i.postimg.cc/fWfNz90W/IMG-20260928-WA0046.jpg',
    localPath: '/company/WA0046.jpg',
    alt: 'Digital dynamic wheel balancing and vibration elimination'
  }
};

/**
 * Real Partner & Corporate Client Assets
 * Supplied files WA0011 through WA0020
 */
export interface PartnerAsset {
  id: string;
  name: string;
  category: 'partner' | 'corporate';
  description?: string;
  cdnUrl: string;
  localPath: string;
}

export const partnerAssets: PartnerAsset[] = [
  {
    id: 'WA0011',
    name: 'Ibile Microfinance Bank',
    category: 'partner',
    description: 'Premier financial and enterprise vehicle financing partner in Lagos State.',
    cdnUrl: 'https://i.postimg.cc/JsKs7sCV/IMG-20260930-WA0011.jpg',
    localPath: '/partners/WA0011.jpg'
  },
  {
    id: 'WA0012',
    name: 'Capital Express Insurance',
    category: 'partner',
    description: 'Leading motor and life underwriting insurance group in Nigeria.',
    cdnUrl: 'https://i.postimg.cc/RWGWCWxz/IMG-20260930-WA0012.jpg',
    localPath: '/partners/WA0012.jpg'
  },
  {
    id: 'WA0013',
    name: 'Bosch Automotive',
    category: 'partner',
    description: 'Global benchmark for electronic diagnostics, sensors and genuine vehicle spare parts.',
    cdnUrl: 'https://i.postimg.cc/zypyDyYY/IMG-20260930-WA0013.jpg',
    localPath: '/partners/WA0013.jpg'
  },
  {
    id: 'WA0014',
    name: 'IRAP',
    category: 'partner',
    description: 'International Road Assessment Programme and vehicle road safety infrastructure standards.',
    cdnUrl: 'https://i.postimg.cc/sMKMfMCy/IMG-20260930-WA0014.jpg',
    localPath: '/partners/WA0014.jpg'
  },
  {
    id: 'WA0015',
    name: 'Cepsa',
    category: 'partner',
    description: 'High-performance synthetic engine lubricants, transmission fluids and chemical treatments.',
    cdnUrl: 'https://i.postimg.cc/nXTXVXf8/IMG-20260930-WA0015.jpg',
    localPath: '/partners/WA0015.jpg'
  },
  {
    id: 'WA0016',
    name: 'AutoReg',
    category: 'partner',
    description: 'Motor vehicle licensing, computerized roadworthiness and statutory documentation network.',
    cdnUrl: 'https://i.postimg.cc/qhcsLkCJ/IMG-20260930-WA0016.jpg',
    localPath: '/partners/WA0016.jpg'
  }
];

export const corporateClientAssets: PartnerAsset[] = [
  {
    id: 'WA0017',
    name: 'Ibile Microfinance Bank',
    category: 'corporate',
    description: 'Executive and operational fleet vehicle maintenance contract.',
    cdnUrl: 'https://i.postimg.cc/LYktTHZm/IMG-20260930-WA0017.jpg',
    localPath: '/partners/WA0017.jpg'
  },
  {
    id: 'WA0018',
    name: 'Grooming Centre',
    category: 'corporate',
    description: 'Nationwide institutional microfinance organisation fleet management.',
    cdnUrl: 'https://i.postimg.cc/k6NQcntM/IMG-20260930-WA0018.jpg',
    localPath: '/partners/WA0018.jpg'
  },
  {
    id: 'WA0019',
    name: 'Chivita Group',
    category: 'corporate',
    description: 'Leading beverage conglomerate logistics and corporate support vehicles.',
    cdnUrl: 'https://i.postimg.cc/bD0xTz2z/IMG-20260930-WA0019.jpg',
    localPath: '/partners/WA0019.jpg'
  },
  {
    id: 'WA0020',
    name: 'Sunlay Insurance',
    category: 'corporate',
    description: 'Corporate claims inspection and official corporate vehicles.',
    cdnUrl: 'https://i.postimg.cc/LYktTHZ8/IMG-20260930-WA0020.jpg',
    localPath: '/partners/WA0020.jpg'
  },
  {
    id: 'WA0015b',
    name: 'Oakland & Johnson',
    category: 'corporate',
    description: 'Corporate communications and commercial vehicle servicing.',
    cdnUrl: 'https://i.postimg.cc/nXTXVXf8/IMG-20260930-WA0015.jpg',
    localPath: '/partners/WA0015.jpg'
  }
];

/**
 * Central Loyalty Program Configuration
 * In the supplied company material:
 * Text stated 10% but examples calculated 5% (₦10,000 -> ₦500; ₦50,000 -> ₦2,500; ₦120,000 -> ₦6,000).
 * Configured centrally here so administrators can toggle between 5% and 10% easily without touching UI components.
 */
export const LOYALTY_REWARD_PERCENTAGE = 0.05; // 5% default based on numerical calculations
export const LOYALTY_REWARD_DISPLAY_RATE = '5%';
