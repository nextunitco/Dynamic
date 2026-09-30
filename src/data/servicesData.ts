import { ServiceItem } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'vehicle-servicing',
    title: 'Vehicle Servicing & Maintenance',
    category: 'servicing',
    shortDesc: 'Comprehensive interim, full, and manufacturer-scheduled servicing using OEM-grade filters and lubricants.',
    iconName: 'Wrench',
    fullDesc: 'Ensure engine longevity and optimal fuel economy with our multi-point servicing schedules. We inspect over 50 mechanical and safety checkpoints, drain and replenish premium synthetic fluids, and install OEM-spec oil, cabin, and fuel filters.',
    features: [
      'Interim Service (6 months / 6,000 miles)',
      'Full Annual Service (12 months / 12,000 miles)',
      'Manufacturer handbook compliance warranty-safe servicing',
      'High-grade synthetic engine oil & filter renewal'
    ],
    recommendedInterval: 'Every 6 to 12 months'
  },
  {
    id: 'tyres-wheel-services',
    title: 'Tyres & Wheel Services',
    category: 'tyres',
    shortDesc: 'Premium, mid-range and budget tyre sales, precision computerized fitting, balancing and mobile installation.',
    iconName: 'Disc',
    fullDesc: 'We stock and fit top-tier tyres across passenger cars, commercial vans, SUVs, electric vehicles, and 4x4 trucks. Our state-of-the-art rim clamps and digital balancers eliminate high-speed steering vibration.',
    features: [
      'Extensive tyre inventory from budget to ultra-high performance',
      'Mobile tyre fitting unit delivered to your office or home',
      'Run-flat, reinforced XL, all-season and summer tyres',
      'Seasonal tyre storage and puncture inspection'
    ]
  },
  {
    id: 'wheel-alignment',
    title: 'Wheel Alignment',
    category: 'tyres',
    shortDesc: 'Laser 4-wheel computerized tracking to eliminate vehicle pulling, steering drift and uneven tyre wear.',
    iconName: 'Compass',
    fullDesc: 'Improper tracking rapidly wears tyre shoulders and drains fuel efficiency. Our high-definition optical 3D alignment sensors calibrate camber, caster, and toe angles strictly to factory tolerances.',
    features: [
      'Front and rear 4-wheel alignment calibration',
      'Correction of steering wheel off-center drift',
      'Maximized tyre lifespan and smooth straight-line tracking',
      'Detailed pre- and post-calibration readout'
    ]
  },
  {
    id: 'wheel-balancing',
    title: 'Wheel Balancing',
    category: 'tyres',
    shortDesc: 'Dynamic computerized wheel balancing eliminating wheel hop and steering shudder at motorway speeds.',
    iconName: 'CircleDot',
    fullDesc: 'Even minor weight discrepancies of 10 grams cause steering flutter and premature suspension wear. We use laser-guided digital dynamic balancers and corrosion-resistant clip/adhesive weights.',
    features: [
      'High-speed digital spin simulation balance',
      'Elimination of steering wheel shudder at 80+ km/h',
      'Even tread wear preservation across all four wheels',
      'Alloy wheel protective mounting hardware'
    ]
  },
  {
    id: 'brake-checks',
    title: 'Brake Checks & Replacement',
    category: 'brakes',
    shortDesc: 'Complete pad, disc, caliper, brake line and boiling-point fluid diagnostics for uncompromising safety.',
    iconName: 'ShieldAlert',
    fullDesc: 'Braking performance is non-negotiable. Our technicians inspect rotor thickness against minimum scrap thickness, inspect hydraulic calipers, evaluate handbrake cable tension, and test brake fluid moisture content.',
    features: [
      'Free initial multi-point brake safety check',
      'High-friction ceramic and metallic brake pad replacement',
      'Brake disc / rotor inspection, resurfacing, or replacement',
      'Brake fluid boiling point test and DOT 4/5.1 pressure bleeding'
    ]
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics',
    category: 'diagnostics',
    shortDesc: 'Advanced OBD2 computer interrogation utilizing Bosch, Launch and Autel dealer-level diagnostic suites.',
    iconName: 'Cpu',
    fullDesc: 'Modern vehicles rely on dozens of interconnected Electronic Control Units (ECUs). When the Check Engine light flashes, our technicians run bi-directional diagnostics to isolate underlying sensor faults rather than guessing.',
    features: [
      'OBD2 live data monitoring and stored fault code interrogation',
      'Bosch, Launch & Autel multi-brand dealer-grade scanners',
      'Electronic handbrake recalibration and service light reset',
      'Headlamp calibration, sensor adaptation and ECU coding'
    ]
  },
  {
    id: 'battery-services',
    title: 'Battery Services',
    category: 'battery',
    shortDesc: 'Digital CCA health testing, alternator output evaluation, premium battery replacement and safe disposal.',
    iconName: 'Zap',
    fullDesc: 'Avoid sudden roadside non-starts. We test Cold Cranking Amps (CCA), internal cell resistance, and charging system voltage under simulated load, installing OEM-grade AGM and EFB batteries with warranty.',
    features: [
      'Digital battery load testing and starter motor draw analysis',
      'Alternator charging voltage diagnostic inspection',
      'Stop-Start AGM, EFB and conventional heavy-duty batteries',
      'Eco-friendly old lead-acid battery recycling and safe disposal'
    ]
  },
  {
    id: 'air-conditioning',
    title: 'Air Conditioning',
    category: 'ac',
    shortDesc: 'Refrigerant recovery, vacuum pressure leak testing, compressor oil replenishment and precision re-gas.',
    iconName: 'Wind',
    fullDesc: 'Keep your cabin icy cool through Lagos heat and traffic. We test climate control pressures, vacuum dry moisture from the condenser, and precisely re-gas using verified R134A or newer R1234YF refrigerants.',
    features: [
      'R134A refrigerant service — ₦18,000 flat transparent rate',
      'R1234YF modern eco-refrigerant service — ₦25,000 flat rate',
      'UV dye vacuum decay leak testing and compressor oil top-up',
      'Antibacterial evaporator treatment to remove musty odours'
    ],
    pricingNote: 'R134A: ₦18,000 · R1234YF: ₦25,000'
  },
  {
    id: 'suspension-shocks',
    title: 'Suspension & Shock Absorbers',
    category: 'suspension',
    shortDesc: 'Bushings, ball joints, control arms, sway bar links, and hydraulic/gas shock absorber renewals.',
    iconName: 'Activity',
    fullDesc: 'Nigeria’s diverse road surfaces put severe demands on dampening systems. We inspect for hydraulic oil leakage, degraded polyurethane bushings, snapped coil springs, and loose tie-rod ends to restore plush handling.',
    features: [
      'Hydraulic and gas shock absorber bounce and rebound testing',
      'Strut mount, sway link and control arm bushing renewal',
      'Restoration of high-speed vehicle stability and braking distance',
      'Complete suspension geometry check before release'
    ]
  },
  {
    id: 'mot-test',
    title: 'MOT Roadworthiness Test',
    category: 'mot',
    shortDesc: 'Official vehicle roadworthiness inspection ensuring full compliance with emissions and road safety laws.',
    iconName: 'FileCheck',
    fullDesc: 'Never risk fines or unsafe motoring. Our certified test bay assesses emissions, brake efficiency balances, tyre tread depth legality, steering play, and chassis integrity for reliable certification.',
    features: [
      'Complete statutory roadworthiness testing checklist',
      'Emissions gas analyzer and braking efficiency verification',
      'Combined Service + MOT cost-saving packages',
      'Automated renewal reminder so your certificate never lapses'
    ]
  },
  {
    id: 'fleet-services',
    title: 'Fleet Services',
    category: 'fleet',
    shortDesc: 'Turnkey vehicle maintenance retainers, automated scheduling, and priority support for corporate organisations.',
    iconName: 'Truck',
    fullDesc: 'Customised automotive management solutions designed for commercial organisations, financial institutions, and business fleets. We provide priority workshop turnaround, 30-day corporate billing, and comprehensive health monitoring.',
    features: [
      'Scheduled preventive maintenance retainers',
      'Itemized corporate billing & monthly statements',
      'Dedicated service bay priority allocation',
      'Mobile tyre maintenance and on-site inspection'
    ]
  }
];

export const SERVICE_INTERVALS = [
  {
    title: 'Interim Service',
    interval: 'Every 6 months or 6,000 miles',
    suitability: 'High-mileage commuters, city driving in Lagos, ride-hailing and active business vehicles.',
    highlights: [
      'Engine oil drain & premium synthetic refill',
      'OEM oil filter replacement',
      'Visual brake pads & discs thickness check',
      'Tyre pressure, tread depth & wear pattern check',
      'Steering, suspension and fluid level top-ups',
      'Under-bonnet visual inspection & safety check'
    ]
  },
  {
    title: 'Full Service',
    interval: 'Every 12 months or 12,000 miles',
    suitability: 'Annual comprehensive health check recommended for all passenger and fleet vehicles.',
    highlights: [
      'All 35+ checkpoints included in Interim Service',
      'Engine air filter & cabin pollen filter replacement',
      'Comprehensive 4-wheel brake removal & drum/rotor inspection',
      'Spark plug inspection (petrol) or fuel filter renewal (diesel)',
      'Auxiliary drive belt tension & battery health load test',
      'Wheel bearing, driveshaft gaiter & exhaust integrity'
    ]
  },
  {
    title: 'Manufacturer Service',
    interval: 'According to manufacturer schedule',
    suitability: 'Newer vehicles under factory warranty requiring exact logbook procedure compliance.',
    highlights: [
      'Strict adherence to OEM factory service schedules',
      'Genuine or OEM-approved matching parts to protect warranty',
      'Timing belt / water pump interval checks',
      'Transmission, differential and transfer case fluid renewal',
      'Electronic service book update & onboard computer reset'
    ]
  }
];

export const TYRE_VEHICLE_TYPES = [
  'Cars & Sedans',
  'Commercial Vans',
  'SUVs & Crossovers',
  'Electric Vehicles (EV)',
  'Hybrid Vehicles',
  '4x4 & Off-Road',
  'Light Commercial Fleets'
];

export const TYRE_CATEGORIES = [
  { name: 'Budget', desc: 'Reliable, road-safe tyres engineered for everyday city commuting with cost savings.' },
  { name: 'Mid-Range', desc: 'Optimal balance of tread longevity, wet-weather grip and low rolling noise.' },
  { name: 'Premium', desc: 'Leading global tier-1 brands (Michelin, Pirelli, Continental, Goodyear, Bridgestone).' },
  { name: 'Run-Flat', desc: 'Reinforced sidewalls allowing you to drive safely up to 80 km at reduced speeds post-puncture.' },
  { name: 'Reinforced (XL)', desc: 'Extra load ratings designed for heavy payloads, SUVs and commercial vans.' },
  { name: 'Summer', desc: 'Optimized high-temperature rubber compound delivering peak dry and torrential wet braking.' },
  { name: 'Winter', desc: 'Specialized siping and soft compounds for cold climates and freezing conditions.' },
  { name: 'All-Season', desc: 'Versatile hybrid compound delivering confident all-year traction and stability.' }
];

export const BRAKE_WARNING_SIGNS = [
  { sign: 'Grinding Noise', detail: 'Metal-on-metal friction indicating brake pads have completely worn down to the backing plate.' },
  { sign: 'High-Pitched Squealing', detail: 'Acoustic wear sensors warning that pad friction material has dropped below 3mm.' },
  { sign: 'Pulsating Brake Pedal', detail: 'Warped brake discs/rotors causing rhythmic vibration during high-speed deceleration.' },
  { sign: 'Vehicle Pulling to One Side', detail: 'Sticking hydraulic caliper piston or uneven hydraulic pressure across axles.' },
  { sign: 'Spongy or Soft Pedal', detail: 'Air bubbles in the brake lines, boiling fluid breakdown, or internal master cylinder bypass.' },
  { sign: 'Brake Warning Light On', detail: 'Low brake fluid reservoir level, handbrake switch fault, or electronic wear sensor triggered.' },
  { sign: 'High Handbrake Lever', detail: 'Over-stretched handbrake cables or excessively worn rear brake shoe linings.' },
  { sign: 'Old Discoloured Brake Fluid', detail: 'Hygroscopic fluid has absorbed atmospheric moisture, dangerously lowering boiling point.' }
];

export const BATTERY_WARNING_SIGNS = [
  { sign: 'Slow Engine Cranking', detail: 'Starter motor turns sluggishly when turning the key or pushing the start button.' },
  { sign: 'Clicking Sound on Ignition', detail: 'Starter solenoid clicks rapidly due to insufficient voltage from discharged cells.' },
  { sign: 'Dimming Headlights & Interior', detail: 'Electrical system starves for power while waiting at traffic idle.' },
  { sign: 'Weak Electrical Performance', detail: 'Power windows roll up slowly and onboard multimedia screens reboot unexpectedly.' }
];

export const SUSPENSION_WARNING_SIGNS = [
  { sign: 'Uneven Tyre Wear', detail: 'Feathered or cupped tread patterns caused by tyres bouncing without proper damping.' },
  { sign: 'Rough, Jarring Ride', detail: 'Feeling every minor pothole or road imperfection directly through the chassis.' },
  { sign: 'Reduced Handling & Body Roll', detail: 'Excessive leaning in corners, nose-diving under braking, or rear squatting on acceleration.' },
  { sign: 'Knocking or Clunking Over Bumps', detail: 'Worn stabilizer drop links, collapsed strut top mounts, or worn ball joints.' }
];

export const AIR_CON_PRICING = [
  {
    type: 'R134A Gas',
    price: '₦18,000',
    desc: 'Standard refrigerant for most vehicles built before 2017. Reliable cooling and system balance.',
    features: ['Vacuum decay leak check', 'Compressor oil top-up', 'PAG oil lubrication', 'Cabin vent temperature test']
  },
  {
    type: 'R1234YF Gas',
    price: '₦25,000',
    desc: 'Modern eco-friendly low-GWP refrigerant required by newer European and international vehicles.',
    features: ['Specialized R1234YF recovery', 'Precision mass dispensing', 'Synthetic POE/PAG oil injection', 'High-pressure sensor diagnostics']
  }
];
