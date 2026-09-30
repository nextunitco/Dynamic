import { KnowledgeArticle } from '../types';

export const KNOWLEDGE_CATEGORIES = [
  'All Categories',
  'Engine & Powertrain',
  'Transmission Systems',
  'Tyres & Wheels',
  'Suspension & Steering',
  'Braking System',
  'Electrical System',
  'Cooling System',
  'Fuel System',
  'Exhaust System',
  'Car Fluids & Lubricants',
  'Bodywork & Paint',
  'Diagnostics',
  'Batteries & Starting Systems',
  'Preventive Maintenance'
];

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: 'tyre-tread-depth-safety',
    title: 'Understanding Tyre Tread Depth, Wear Bars and Wet Grip Limits',
    category: 'Tyres & Wheels',
    readTime: '4 min read',
    shortDesc: 'Why driving on tyres below 3mm drastically extends stopping distances on wet roads and how to read tyre wear patterns.',
    content: [
      'Tyre tread is not just for grip on dry asphalt; its primary engineering purpose is to channel standing water away from the contact patch. At 80 km/h, a standard tyre evacuates up to 30 litres of water per second through its grooves.',
      'While the absolute statutory minimum tread depth is 1.6mm across the central three-quarters of the tyre, independent safety testing demonstrates that wet braking performance degrades rapidly once tread drops below 3.0mm. Stopping distances in heavy rain can stretch by over two car lengths.',
      'Check for uneven shoulder wear, which signals misaligned tracking, or center wear, which indicates chronic over-inflation. Never ignore exposed steel cords or sidewall bulges.'
    ],
    keyTakeaway: 'Replace tyres before they drop below 3mm tread depth to preserve emergency stopping ability on wet highways.',
    warningSymptoms: ['Vibration at speed', 'Hydroplaning over standing puddles', 'Visible bald shoulder patches']
  },
  {
    id: 'brake-system-warning-signs',
    title: 'Braking Hydraulics & Wear: Recognizing Early Warning Signals',
    category: 'Braking System',
    readTime: '5 min read',
    shortDesc: 'From hygroscopic fluid degradation to glazed brake pads: how modern braking systems behave when maintenance is overdue.',
    content: [
      'A vehicle braking system converts kinetic energy into thermal energy via friction between brake pads and cast-iron or carbon-ceramic discs. When pads wear thin, the steel backing plate contacts the rotor, generating a severe metallic grinding noise and causing irreversible rotor gouging.',
      'Brake fluid is hygroscopic, meaning it absorbs moisture from atmospheric humidity over time. Even a 3% water saturation drops the fluid boiling point from 260°C to below 160°C. In stop-and-go Lagos traffic or during sudden emergency stops, water boils into compressible steam bubbles, resulting in complete pedal sink and zero braking pressure.',
      'Have brake fluid boiling points measured annually and change fluids every 24 months regardless of vehicle mileage.'
    ],
    keyTakeaway: 'Flush brake fluid every 2 years and inspect pad thickness every 6,000 miles to prevent sudden hydraulic vapor lock.',
    warningSymptoms: ['Sinking brake pedal', 'Squealing acoustic wear sensors', 'Vehicle pulling under braking']
  },
  {
    id: 'engine-oil-viscosity-breakdown',
    title: 'Engine Oil Breakdown & Thermal Viscosity: The Lifeblood of Your Engine',
    category: 'Engine & Powertrain',
    readTime: '6 min read',
    shortDesc: 'Why modern turbocharged engines demand exact synthetic viscosity specs and how overdue oil sludge damages variable valve timing.',
    content: [
      'Engine oil provides an ultra-thin hydro-dynamic film separating high-speed rotating crankshaft journals, connecting rod bearings, and camshaft lobes. As oil ages, heat cycles and blow-by fuel dilute its synthetic additive package, depleting anti-wear zinc and detergents.',
      'Modern engines equipped with Variable Valve Timing (VVT) rely on oil pressure solenoids to advance or retard cam sprockets in fractions of a second. Sludge build-up from delayed oil services clogs micro-screens, triggering timing errors, sluggish acceleration, and engine check lights.',
      'Always adhere to manufacturer oil grade ratings (e.g. 0W-20, 5W-30) rather than thick, generic mineral oils that starve upper valve trains during initial morning cold starts.'
    ],
    keyTakeaway: 'Synthetic oil must be changed on schedule; using heavier incorrect oil grades damages variable timing systems.',
    warningSymptoms: ['Ticking lifters on cold start', 'Dark gritty oil on dipstick', 'Sluggish throttle response']
  },
  {
    id: 'battery-cca-and-alternator-balance',
    title: 'Batteries & Starting: Cold Cranking Amps vs. Charging System Health',
    category: 'Batteries & Starting Systems',
    readTime: '4 min read',
    shortDesc: 'How extreme under-bonnet heat accelerates battery internal cell breakdown and how to test alternator voltage regulation.',
    content: [
      'While drivers often fear cold weather, high ambient temperatures are the actual silent killer of 12V lead-acid and AGM batteries. Ambient heat accelerates electrolyte evaporation and grid corrosion within internal plate packs.',
      'When your battery drops below 12.4 volts (roughly 75% charge state), sulfation crystals form on the lead plates, irreversibly reducing Cold Cranking Amps (CCA). When cranking, the voltage should never drop below 9.6V under load.',
      'At idle, a healthy vehicle alternator should deliver between 13.8V and 14.5V with air conditioning and headlamps turned on. Voltage below 13.2V indicates worn alternator brushes or slipping serpentine belts.'
    ],
    keyTakeaway: 'Test battery voltage and cranking draw twice a year; heat degrades batteries faster than winter frost.',
    warningSymptoms: ['Sluggish cranking in the morning', 'Dashboard warning lights flickering', 'Faint clicking when key turns']
  },
  {
    id: 'diagnostics-obd2-fault-codes',
    title: 'Demystifying OBD2 Fault Codes and ECU Sensor Networks',
    category: 'Diagnostics',
    readTime: '5 min read',
    shortDesc: 'Why clearing an engine code does not fix the underlying mechanical issue and how freeze-frame sensor data works.',
    content: [
      'When the Check Engine light illuminates, the vehicle powertrain control module (PCM) has detected a parameter operating outside factory calibration limits. The computer stores a Diagnostic Trouble Code (DTC) along with freeze-frame telemetry of engine RPM, coolant temperature, and fuel trim values at the precise second the fault triggered.',
      'Clearing codes with a handheld phone scanner without repairing the underlying fault only resets the monitors to "Not Ready." Within a few drive cycles, the ECU will detect the anomaly again and re-illuminate the warning light.',
      'Professional bi-directional diagnostic scanners like Bosch and Launch allow certified technicians to manually actuate relays, test fuel injectors, and verify live sensor graphing in real time.'
    ],
    keyTakeaway: 'Never simply clear fault codes; use live freeze-frame sensor data to diagnose root electrical or vacuum causes.',
    warningSymptoms: ['Engine light illuminated or flashing', 'Limp mode limiting vehicle speed', 'Sudden fuel consumption surge']
  },
  {
    id: 'preventive-maintenance-checklist',
    title: 'The Preventive Maintenance Protocol: How to Reach 300,000 Kilometers',
    category: 'Preventive Maintenance',
    readTime: '5 min read',
    shortDesc: 'The essential routine inspections that prevent costly catastrophic breakdowns and preserve resale value.',
    content: [
      'Cars don’t suddenly break down; components give subtle warnings through acoustic changes, subtle vibrations, and microscopic fluid seepage weeks before catastrophic mechanical failure.',
      'A strict preventive schedule entails weekly tyre pressure checks (when cold), monthly inspection of brake fluid and coolant levels, and biannual chassis checks for torn rubber suspension boots and CV joint gaiters.',
      'Catching a torn ₦15,000 rubber CV boot early prevents sand and road grime from destroying a ₦250,000 complete driveshaft assembly.'
    ],
    keyTakeaway: 'Routine inspection and early replacement of wearable rubber components saves hundreds of thousands in major repairs.',
    warningSymptoms: ['Oily spray around wheel inner rims', 'Slow drop in radiator reservoir level', 'Unusual squeaks over speed bumps']
  },
  {
    id: 'automatic-transmission-fluid-care',
    title: 'Automatic Transmission Fluid: The Truth About "Lifetime" Fluids',
    category: 'Transmission Systems',
    readTime: '5 min read',
    shortDesc: 'Why automated gearboxes fail prematurely when transmission fluid is neglected and how torque converters suffer.',
    content: [
      'Automotive manufacturers frequently market modern gearboxes as having "lifetime transmission fluid." In engineering reality, this refers only to the factory warranty period, not the full lifespan of your automobile.',
      'Automatic Transmission Fluid (ATF) performs dual duties: it serves as hydraulic fluid transferring torque, and as lubricant for planetary gear sets, clutch packs, and valve bodies. High temperatures degrade friction modifiers, causing hard shifting, slipping, and torque converter shudder.',
      'We recommend drain-and-refill fluid services every 60,000 to 80,000 km using exact OEM-specified synthetic ATF to protect expensive solenoid bodies.'
    ],
    keyTakeaway: 'No fluid lasts forever; service automatic and CVT transmissions every 60,000 to 80,000 km.',
    warningSymptoms: ['Harsh gear engagement', 'Delayed reverse gear response', 'RPM surge during acceleration']
  },
  {
    id: 'suspension-shocks-and-handling',
    title: 'Suspension Geometry: How Damaged Shocks Increase Stopping Distances',
    category: 'Suspension & Steering',
    readTime: '4 min read',
    shortDesc: 'The critical connection between shock absorber dampening, tyre road contact, and ABS safety response.',
    content: [
      'Shock absorbers and struts don’t support the vehicle’s weight—springs do that. The shock absorber’s sole duty is to control spring bounce and ensure tyre tread maintains continuous contact with the pavement.',
      'A worn shock absorber allows the tyre to bounce microscopically off the tarmac. When you hit the brakes over an imperfect surface, the Anti-lock Braking System (ABS) pulses frantically because the airborne tyre has zero traction, extending emergency braking distances by up to 20%.',
      'Inspect strut bodies for oily wetness, which indicates the high-pressure piston seal has ruptured and hydraulic damping fluid is lost.'
    ],
    keyTakeaway: 'Worn dampers compromise braking distance and cause unpredictable vehicle roll in evasive maneuvers.',
    warningSymptoms: ['Nose dive under heavy braking', 'Excessive bounce over road dips', 'Oil dripping down strut tube']
  },
  {
    id: 'cooling-system-radiator-care',
    title: 'Cooling Systems & Electrolysis: Preventing Warped Cylinder Heads',
    category: 'Cooling System',
    readTime: '4 min read',
    shortDesc: 'Why tap water corrodes aluminum engine blocks and why correct coolant-to-distilled-water ratios are mandatory.',
    content: [
      'Pouring plain tap water into modern automobile radiators is a recipe for engine destruction. Tap water contains dissolved minerals, chlorine, and salts that cause rapid galvanic corrosion between aluminum cylinder heads, copper heater cores, and cast-iron components.',
      'Proper ethylene glycol or organic acid technology (OAT) coolant provides anti-corrosive inhibitors, raises the boiling point under 1.1 bar pressure to over 125°C, and lubricates the mechanical water pump impeller shaft seal.',
      'Never open a hot pressurized radiator expansion cap, and ensure your thermostat is replaced every 5 years to prevent sudden thermal lock.'
    ],
    keyTakeaway: 'Always use proper 50/50 prediluted coolant; never use tap water in modern engine radiators.',
    warningSymptoms: ['Temperature gauge climbing in traffic', 'Sweet smell inside cabin from vents', 'Crusty white/green residue around hose clamps']
  },
  {
    id: 'fuel-system-injector-contamination',
    title: 'Fuel Delivery & Direct Injection: Combatting Carbon & Moisture',
    category: 'Fuel System',
    readTime: '4 min read',
    shortDesc: 'How gasoline direct injection (GDI) engines accumulate intake valve carbon deposits and how clean fuel filters protect high-pressure pumps.',
    content: [
      'In traditional port fuel injection, gasoline was sprayed over the intake valves, naturally washing away oil vapors coming from the PCV system. In modern Gasoline Direct Injection (GDI) engines, fuel is injected straight into the combustion chamber at pressures exceeding 2,000 PSI.',
      'As a consequence, intake valves no longer receive a fuel wash and build up thick baked-on carbon crusts that choke airflow and cause hesitation on acceleration.',
      'Keep fuel tank levels above one-quarter capacity to ensure the in-tank electric pump stays submerged and cooled by fuel, avoiding cavitation from sediment at the bottom of the tank.'
    ],
    keyTakeaway: 'Maintain fuel filters, keep tanks above 1/4 full to cool pumps, and consider intake decarb servicing every 50,000 km.',
    warningSymptoms: ['Engine hesitation when passing', 'Rough idle on cold mornings', 'Misfire codes on acceleration']
  },
  {
    id: 'exhaust-catalytic-converter-health',
    title: 'Exhaust Systems, Oxygen Sensors & Catalytic Converter Longevity',
    category: 'Exhaust System',
    readTime: '4 min read',
    shortDesc: 'Why engine misfires destroy expensive catalytic converters in minutes and how upstream O2 sensors monitor air-fuel balance.',
    content: [
      'The catalytic converter contains ceramic honeycomb monoliths coated with precious platinum, palladium, and rhodium. It converts toxic carbon monoxide, unburnt hydrocarbons, and nitrogen oxides into harmless carbon dioxide, nitrogen, and water vapor.',
      'If your engine develops a misfire (from a bad ignition coil or spark plug) and you continue driving with a flashing Check Engine light, raw unburnt fuel dumps directly into the red-hot exhaust stream. Fuel ignites inside the catalyst core, melting the ceramic substrate within minutes into a solid clogged lump.',
      'Replace spark plugs promptly and address misfires immediately to protect your vehicle’s most valuable emissions component.'
    ],
    keyTakeaway: 'If the Check Engine light flashes, pull over immediately; driving with an engine misfire melts catalytic converters.',
    warningSymptoms: ['Flashing Check Engine light', 'Rotten egg or sulfur smell from exhaust', 'Loss of engine power at high RPM']
  },
  {
    id: 'car-fluids-and-lubricants-guide',
    title: 'The Complete Automotive Fluid Spectrum: What Every Driver Must Check',
    category: 'Car Fluids & Lubricants',
    readTime: '5 min read',
    shortDesc: 'Power steering fluids, differential gear oils, transfer case lubricants, and windshield washer formulations explained.',
    content: [
      'Your vehicle is a complex hydraulic and mechanical assembly running on up to seven distinct fluid circuits: motor oil, transmission fluid, brake fluid, engine coolant, power steering fluid, differential hypoid gear oil, and air conditioning refrigerant.',
      'Each fluid requires exact chemical formulation. Mixing hydraulic power steering fluid into a brake reservoir will swell and destroy every rubber seal in the master cylinder and calipers within 48 hours.',
      'Inspect fluid color, transparency, and level at every major refuel. Milky engine oil indicates a blown head gasket; dark, burnt transmission fluid signals severe internal clutch slip.'
    ],
    keyTakeaway: 'Never cross-contaminate fluids. Match manufacturer bottle standards (e.g. DOT 4, GL-5, ATF-WS) precisely.',
    warningSymptoms: ['Burning oil odor in cabin', 'Whining noise when turning steering wheel', 'Oily puddles on your driveway']
  },
  {
    id: 'bodywork-chassis-rust-prevention',
    title: 'Chassis Preservation & Corrosion Protection in Coastal Environments',
    category: 'Bodywork & Paint',
    readTime: '4 min read',
    shortDesc: 'How humidity, coastal salt air, and road grit attack undercarriages and how protective coatings preserve structural integrity.',
    content: [
      'In humid and coastal metropolitan climates like Lagos, airborne sea salt and heavy monsoon rainwater lodge into boxed chassis frame rails, rocker panels, and floorpan seams.',
      'When mud and dirt cake onto suspension subframes, they act as permanent sponges holding trapped moisture against painted sheet metal, initiating rapid oxidation and structural rust.',
      'Regular undercarriage pressure washing removes corrosive grime. Apply clear wax or rubberized undercoating to preserve chassis rails and prevent costly structural MOT failure.'
    ],
    keyTakeaway: 'Wash vehicle undercarriages regularly after heavy wet season driving to prevent hidden chassis subframe rust.',
    warningSymptoms: ['Bubbling paint above wheel arches', 'Flaking orange rust on suspension links', 'Stuck or seized chassis bolts']
  },
  {
    id: 'preventing-overheating-in-lagos-traffic',
    title: 'Traffic & Thermal Load: Protecting Your Engine in Lagos Gridlock',
    category: 'Cooling System',
    readTime: '5 min read',
    shortDesc: 'How crawling at 5 km/h with the air conditioner on full blast stresses your electric cooling fan and alternator.',
    content: [
      'When cruising on an open expressway, natural airflow through the radiator grill removes massive amounts of engine heat. In stationary traffic, that airflow drops to zero, and the vehicle depends 100% on its auxiliary electric radiator cooling fan.',
      'With the air conditioning compressor engaged, the A/C condenser in front of the radiator radiates intense supplementary heat. If the dual-speed radiator fan resistor or motor is weak, coolant temperature rapidly spikes past 105°C.',
      'Have your electric cooling fan speeds, fan relay, and thermostat evaluated before the peak of the dry season to prevent roadside boil-overs.'
    ],
    keyTakeaway: 'Test dual-speed cooling fan motors regularly; stationary traffic with air conditioning places maximal stress on cooling fans.',
    warningSymptoms: ['A/C blowing warm while idling in traffic', 'Temperature needle creeping above midpoint', 'Coolant bubbling into reservoir']
  }
];
