export const siteConfig = {
  name: 'atomicflow',
  domain: 'atomicflow.net',
  logo: {
    icon: 'Atom',
    color: 'text-atomic-blue',
  },
  contact: {
    email: 'connect@atomicflow.net',
    phone: '(+34) 927 123 456',
    location: 'Cáceres, Extremadura',
  },
  social: {
    telegram: '#',
    twitter: '#',
    discord: '#',
    github: 'https://github.com/atomicflow',
  },
  cta: {
    primary: 'Empezar ya',
    secondary: 'Explorar soluciones',
  },
  meta: {
    title: 'atomicflow | Soluciones de Automatización Empresarial',
    description: 'Transformando empresas mediante soluciones de automatización inteligente. Optimizando procesos, un flujo a la vez.',
    keywords: 'automatización, IA, transformación digital, optimización, procesos empresariales',
  },
  tagline: 'Transforming businesses, one flow at a time',
} as const;

export type SiteConfig = typeof siteConfig;