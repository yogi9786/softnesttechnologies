export const COMPANY = {
  name: 'The Softnest Technologies',
  email: 'thesoftnesttechnologies@gmail.com',
  phone: '+91 7624 866 645',
  phoneRaw: '+917624866645',
  whatsapp: '+91 7624 866 645',
  whatsappRaw: '917624866645',
  formspreeEndpoint: 'https://formspree.io/f/mqpqwvzo',
  /**
   * Calendly Booking URL (single source of truth).
   * Replace the empty string with your actual Calendly scheduling link
   * (for example: "https://calendly.com/your-handle/30min") to activate
   * the live Calendly popup & inline scheduler automatically.
   */
  calendlyUrl: '',
} as const;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Our Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Industries', path: '/industries' },
  { label: 'Our Process', path: '/process' },
  { label: 'Contact Us', path: '/contact' },
] as const;

export const SERVICES = [
  {
    id: 'b2b-lead-generation',
    title: 'B2B Lead Generation',
    description:
      'Targeted lead generation strategies that connect you with decision-makers in your ideal customer profile.',
    icon: 'Target',
  },
  {
    id: 'it-saas-lead-generation',
    title: 'IT & SaaS Lead Generation',
    description:
      'Specialized lead generation for IT companies and SaaS platforms to accelerate your sales pipeline.',
    icon: 'Monitor',
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description:
      'High-converting email campaigns designed to nurture prospects and drive meaningful engagement.',
    icon: 'Mail',
  },
  {
    id: 'linkedin-prospecting',
    title: 'LinkedIn Prospecting',
    description:
      'Strategic LinkedIn outreach to build relationships with qualified prospects in your target market.',
    icon: 'UserPlus',
  },
  {
    id: 'appointment-setting',
    title: 'Appointment Setting',
    description:
      'Qualified appointment setting services that fill your calendar with high-value sales meetings.',
    icon: 'CalendarCheck',
  },
  {
    id: 'data-research',
    title: 'Data Research',
    description:
      'Comprehensive data research and enrichment services to build accurate, verified prospect databases.',
    icon: 'Database',
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Understand Requirements',
    description:
      'We begin by understanding your business goals, target market, and ideal customer profile.',
  },
  {
    step: 2,
    title: 'Identify Target Audience',
    description:
      'We define and segment your target audience based on industry, role, company size, and geography.',
  },
  {
    step: 3,
    title: 'Research Prospects',
    description:
      'Our team conducts thorough research to identify and compile high-quality prospect lists.',
  },
  {
    step: 4,
    title: 'Verify Lead Information',
    description:
      'Every lead is verified for accuracy — email validation, phone verification, and data enrichment.',
  },
  {
    step: 5,
    title: 'Deliver Qualified Leads',
    description:
      'We deliver a curated list of qualified leads ready for your sales team to engage.',
  },
] as const;

export const INDUSTRIES = [
  {
    id: 'it-services',
    title: 'IT Services',
    description:
      'Helping IT service providers connect with businesses seeking technology solutions and managed services.',
    icon: 'Server',
  },
  {
    id: 'saas-companies',
    title: 'SaaS Companies',
    description:
      'Driving qualified leads for SaaS companies looking to scale their customer acquisition efforts.',
    icon: 'Cloud',
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description:
      'Connecting software development firms with enterprises seeking custom development solutions.',
    icon: 'Code',
  },
  {
    id: 'technology-startups',
    title: 'Technology Startups',
    description:
      'Supporting technology startups with scalable lead generation strategies tailored for growth.',
    icon: 'Rocket',
  },
  {
    id: 'digital-agencies',
    title: 'Digital Agencies',
    description:
      'Empowering digital agencies with consistent lead flow and new business opportunities.',
    icon: 'Globe',
  },
] as const;

export const VALUES = [
  {
    title: 'Quality First',
    description: 'We prioritize accuracy and relevance in every lead we deliver.',
    icon: 'Shield',
  },
  {
    title: 'Transparency',
    description: 'Clear communication and honest reporting at every stage of our process.',
    icon: 'Eye',
  },
  {
    title: 'Results-Driven',
    description: 'Our strategies are designed to deliver measurable business outcomes.',
    icon: 'TrendingUp',
  },
  {
    title: 'Client-Centric',
    description: 'We adapt our approach to align with your unique business needs and goals.',
    icon: 'Users',
  },
] as const;
