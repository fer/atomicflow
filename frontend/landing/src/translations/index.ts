import { type } from "os";

export type Translations = typeof translations.es;

export const translations = {
  es: {
    nav: {
      solutions: 'Soluciones',
      methodology: 'Metodología', 
      pricing: 'Precios',
      additionalServices: 'Servicios',
      faq: 'FAQ',
      contact: 'Contacto'
    },
    hero: {
      title: 'Construimos una máquina de beneficios que funciona sola',
      subtitle: 'Automatizamos tus operaciones para que tu negocio trabaje para ti, no tú para tu negocio.',
      cta: {
        primary: 'Evaluar',
        secondary: 'Ver más'
      },
      benefits: {
        title: 'Tu negocio, automatizado',
        subtitle: 'Más eficiencia, menos costes',
        list: [
          'Reduce costes operativos hasta en un 40%',
          'Incrementa la satisfacción del cliente',
          'Recupera tiempo para enfocarte en crecer',
          'Escalabilidad sin aumentar personal'
        ],
        optimization: 'Sistema optimizado continuamente'
      }
    },
    services: {
      title: 'Compara y decide',
      subtitle: 'Nuestra solución frente a otras alternativas',
      atomicflow: {
        subtitle: 'La solución inteligente',
        features: [
          'Implementación en 2-4 semanas',
          'Soporte 24/7',
          'Escalabilidad automática',
          'Sin costes ocultos'
        ]
      },
      others: {
        title: 'Otras soluciones',
        subtitle: 'Métodos tradicionales',
        features: [
          '3+ meses de implementación',
          'Soporte limitado',
          'Escalabilidad manual',
          'Costes imprevistos'
        ]
      },
      cta: 'Solicita tu evaluación gratuita'
    },
    process: {
      title: 'Metodología probada',
      subtitle: 'Un proceso sistemático diseñado para maximizar resultados con mínima interrupción',
      steps: [
        {
          title: 'Calificación',
          description: 'Análisis exhaustivo de procesos y oportunidades de automatización',
          duration: '1-2 semanas',
          details: [
            'Evaluación detallada de procesos actuales',
            'Identificación de cuellos de botella',
            'Análisis de costes operativos',
            'Mapeo de flujos de trabajo',
            'Priorización de oportunidades'
          ],
          metrics: [
            { label: 'Procesos analizados', value: '100%' },
            { label: 'Ahorro potencial identificado', value: '25-40%' },
            { label: 'Tiempo de ROI estimado', value: '3-6 meses' }
          ]
        },
        {
          title: 'Construcción',
          description: 'Desarrollo e implementación de soluciones automatizadas',
          duration: '2-4 semanas',
          details: [
            'Diseño de arquitectura de automatización',
            'Desarrollo de flujos personalizados',
            'Integración con sistemas existentes',
            'Pruebas exhaustivas y validación',
            'Capacitación del equipo'
          ],
          metrics: [
            { label: 'Tasa de éxito', value: '99.9%' },
            { label: 'Reducción de errores', value: '98%' },
            { label: 'Velocidad de proceso', value: '10x' }
          ]
        },
        {
          title: 'Optimización',
          description: 'Monitorización continua y mejora del rendimiento',
          duration: 'Continuo',
          details: [
            'Monitorización en tiempo real',
            'Análisis de métricas de rendimiento',
            'Ajustes y optimizaciones',
            'Escalabilidad automática',
            'Mantenimiento preventivo'
          ],
          metrics: [
            { label: 'Disponibilidad', value: '99.99%' },
            { label: 'Mejora continua', value: '15%/mes' },
            { label: 'Satisfacción cliente', value: '98%' }
          ]
        }
      ],
      cta: 'Inicia tu proceso'
    },
    pricing: {
      title: 'Precios transparentes y flexibles',
      subtitle: 'Paga solo por lo que uses. Sin costes ocultos ni sorpresas.',
      billing: {
        monthly: 'Mensual',
        annual: 'Anual (-20%)'
      },
      tiers: {
        starter: {
          name: 'Starter',
          executions: '0-1,000',
          features: [
            'Configuración básica de flujos',
            'Documentación básica',
            'Soporte por email',
            'Retención de datos: 30 días',
            'Actualizaciones automáticas'
          ]
        },
        growth: {
          name: 'Growth',
          executions: '1,001-5,000',
          features: [
            'Todo lo de Starter más:',
            'Modificaciones mensuales',
            'Soporte prioritario',
            'Retención de datos: 60 días',
            'Análisis de rendimiento'
          ]
        },
        business: {
          name: 'Business',
          executions: '5,001-10,000',
          features: [
            'Todo lo de Growth más:',
            'Desarrollo personalizado',
            'Soporte 24/7',
            'Retención de datos: 90 días',
            'Consultoría dedicada'
          ]
        }
      }
    },
    additionalServices: {
      title: 'Servicios adicionales',
      subtitle: 'Complementa tu automatización con servicios especializados diseñados para maximizar el valor de tu inversión',
      categories: {
        support: {
          title: 'Soporte y mantenimiento',
          services: {
            flowModification: {
              name: 'Modificaciones de flujos',
              description: 'Ajustes y mejoras en tus flujos automatizados existentes',
              price: '75€/hora',
              features: [
                'Optimización de procesos existentes',
                'Implementación de nuevas funcionalidades',
                'Actualización de lógica de negocio',
                'Pruebas y validación de cambios'
              ]
            },
            nodeDevelopment: {
              name: 'Desarrollo de nodos',
              description: 'Creación de componentes personalizados para tus necesidades específicas',
              price: '500€/nodo',
              features: [
                'Diseño de arquitectura personalizada',
                'Desarrollo y pruebas unitarias',
                'Documentación detallada',
                'Soporte post-implementación'
              ]
            },
            prioritySupport: {
              name: 'Soporte prioritario',
              description: 'Atención preferente y tiempos de respuesta garantizados',
              price: '299€/mes',
              features: [
                'Tiempo de respuesta < 2 horas',
                'Soporte 24/7',
                'Canal de comunicación dedicado',
                'Monitorización proactiva'
              ]
            }
          }
        }
      }
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Resolvemos tus dudas sobre cómo la automatización puede transformar tu negocio',
      questions: [
        {
          question: "¿Qué tipos de negocios pueden beneficiarse de la automatización?",
          answer: "Prácticamente cualquier negocio con procesos repetitivos puede beneficiarse. Esto incluye empresas de comercio electrónico, servicios profesionales, manufactura, gestión inmobiliaria, servicios financieros, y muchos más. Si tu equipo dedica tiempo a tareas repetitivas, hay oportunidades para automatizar."
        },
        {
          question: "¿Cuánto tiempo lleva implementar una automatización?",
          answer: "El tiempo de implementación varía según la complejidad del proceso, pero generalmente seguimos estos plazos: procesos simples (2-4 semanas), procesos medianos (4-6 semanas), procesos complejos (6-8 semanas). Durante la evaluación inicial, te proporcionaremos un cronograma detallado."
        },
        {
          question: "¿Qué nivel de soporte técnico proporcionáis?",
          answer: "Ofrecemos soporte técnico 24/7 para todos nuestros clientes. Esto incluye resolución de incidencias, ajustes de configuración, y consultas generales. Los tiempos de respuesta varían según el plan: Premium (1 hora), Estándar (4 horas), Básico (24 horas)."
        },
        {
          question: "¿Qué sucede si necesito modificar un proceso automatizado?",
          answer: "Nuestro equipo puede realizar modificaciones en cualquier momento. Los cambios menores suelen implementarse en 24-48 horas, mientras que las modificaciones más significativas pueden requerir una evaluación previa. Los planes Growth y Business incluyen modificaciones mensuales sin coste adicional."
        },
        {
          question: "¿Cómo garantizáis la seguridad de los datos?",
          answer: "Implementamos múltiples capas de seguridad: encriptación de datos en reposo y en tránsito, autenticación de dos factores, auditorías regulares de seguridad, copias de seguridad automatizadas, y cumplimiento con GDPR y otras regulaciones relevantes."
        },
        {
          question: "¿Qué tipo de retorno de inversión (ROI) puedo esperar?",
          answer: "El ROI típico oscila entre 3-6 meses, con ahorros que pueden alcanzar el 40% en costes operativos. Factores clave incluyen reducción de errores, mayor velocidad de procesamiento, y liberación de recursos humanos para tareas de mayor valor."
        },
        {
          question: "¿Cómo se integra con mis sistemas actuales?",
          answer: "Nos integramos con la mayoría de sistemas empresariales comunes mediante APIs y conectores estándar. Para sistemas legacy o personalizados, desarrollamos conectores específicos. Durante la fase de evaluación, analizamos todas las integraciones necesarias."
        },
        {
          question: "¿Qué pasa si hay una interrupción del servicio?",
          answer: "Mantenemos una disponibilidad del 99.99% con sistemas redundantes y monitorización 24/7. En caso de incidencias, nuestro equipo de soporte responde según los SLAs establecidos, con planes de contingencia y recuperación automática para minimizar cualquier impacto."
        },
        {
          question: "¿Ofrecéis formación para nuestro equipo?",
          answer: "Sí, proporcionamos formación completa durante la implementación y documentación detallada. Además, ofrecemos sesiones de formación adicionales para nuevos empleados o cuando se implementan nuevas funcionalidades."
        },
        {
          question: "¿Cómo se maneja la escalabilidad?",
          answer: "Nuestra plataforma está diseñada para escalar automáticamente según tus necesidades. Puedes aumentar o disminuir el volumen de procesamiento sin interrupciones, y solo pagas por lo que usas."
        }
      ],
      cta: {
        text: "¿No encuentras la respuesta que buscas? Contacta con nosotros directamente.",
        button: "Contactar ahora"
      }
    },
    contact: {
      title: 'Contacta con nosotros',
      subtitle: 'Estamos listos para ayudarte a transformar tu negocio mediante la automatización',
      form: {
        name: {
          label: 'Nombre',
          placeholder: 'Tu nombre'
        },
        email: {
          label: 'Correo electrónico',
          placeholder: 'tu@email.com'
        },
        package: {
          label: 'Paquete de interés',
          placeholder: 'Selecciona un paquete',
          executions: 'ejecuciones/mes'
        },
        message: {
          label: 'Mensaje',
          placeholder: 'Cuéntanos sobre tu negocio y qué procesos te gustaría automatizar...'
        },
        additionalServices: {
          label: 'Servicios adicionales de interés',
          hours: 'horas',
          months: 'meses',
          sessions: 'sesiones',
          quantity: 'cantidad'
        },
        summary: {
          title: 'Resumen de precios',
          executions: 'ejecuciones',
          total: 'Total',
          annualSavings: 'Ahorro anual'
        },
        submit: 'Enviar mensaje',
        submitting: 'Enviando...',
        success: '¡Mensaje enviado con éxito!',
        response: 'Te contestaremos en menos de 24 horas laborables.',
        errors: {
          name: 'El nombre es obligatorio',
          email: 'El correo electrónico es obligatorio',
          emailInvalid: 'El correo electrónico no es válido',
          package: 'Selecciona un paquete',
          message: 'El mensaje es obligatorio'
        }
      }
    }
  },
  en: {
    nav: {
      solutions: 'Solutions',
      methodology: 'Methodology',
      pricing: 'Pricing',
      additionalServices: 'Services',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      title: 'We build a profit machine that works on its own',
      subtitle: 'We automate your operations so your business works for you, not you for your business.',
      cta: {
        primary: 'Evaluate',
        secondary: 'Learn More'
      },
      benefits: {
        title: 'Your business, automated',
        subtitle: 'More efficiency, less costs',
        list: [
          'Reduce operating costs by up to 40%',
          'Increase customer satisfaction',
          'Get time back to focus on growth',
          'Scalability without increasing staff'
        ],
        optimization: 'Continuously optimized system'
      }
    },
    services: {
      title: 'Compare and decide',
      subtitle: 'Our solution versus other alternatives',
      atomicflow: {
        subtitle: 'The intelligent solution',
        features: [
          'Implementation in 2-4 weeks',
          'Support 24/7',
          'Automatic scalability',
          'No hidden costs'
        ]
      },
      others: {
        title: 'Other solutions',
        subtitle: 'Traditional methods',
        features: [
          '3+ months implementation',
          'Limited support',
          'Manual scalability',
          'Unexpected costs'
        ]
      },
      cta: 'Request your free evaluation'
    },
    process: {
      title: 'Proven methodology',
      subtitle: 'A systematic process designed to maximize results with minimal disruption',
      steps: [
        {
          title: 'Qualification',
          description: 'Comprehensive analysis of processes and automation opportunities',
          duration: '1-2 weeks',
          details: [
            'Detailed evaluation of current processes',
            'Identification of bottlenecks',
            'Operating cost analysis',
            'Workflow mapping',
            'Opportunity prioritization'
          ],
          metrics: [
            { label: 'Processes analyzed', value: '100%' },
            { label: 'Potential savings identified', value: '25-40%' },
            { label: 'Estimated ROI time', value: '3-6 months' }
          ]
        },
        {
          title: 'Construction',
          description: 'Development and implementation of automated solutions',
          duration: '2-4 weeks',
          details: [
            'Automation architecture design',
            'Custom flow development',
            'Integration with existing systems',
            'Comprehensive testing and validation',
            'Team training'
          ],
          metrics: [
            { label: 'Success rate', value: '99.9%' },
            { label: 'Error reduction', value: '98%' },
            { label: 'Process speed', value: '10x' }
          ]
        },
        {
          title: 'Optimization',
          description: 'Continuous monitoring and performance improvement',
          duration: 'Ongoing',
          details: [
            'Real-time monitoring',
            'Performance metrics analysis',
            'Adjustments and optimizations',
            'Automatic scalability',
            'Preventive maintenance'
          ],
          metrics: [
            { label: 'Availability', value: '99.99%' },
            { label: 'Continuous improvement', value: '15%/month' },
            { label: 'Customer satisfaction', value: '98%' }
          ]
        }
      ],
      cta: 'Start your process'
    },
    pricing: {
      title: 'Transparent and flexible pricing',
      subtitle: 'Pay only for what you use. No hidden costs or surprises.',
      billing: {
        monthly: 'Monthly',
        annual: 'Annual (-20%)'
      },
      tiers: {
        starter: {
          name: 'Starter',
          executions: '0-1,000',
          features: [
            'Basic flow configuration',
            'Basic documentation',
            'Email support',
            'Data retention: 30 days',
            'Automatic updates'
          ]
        },
        growth: {
          name: 'Growth',
          executions: '1,001-5,000',
          features: [
            'Everything in Starter plus:',
            'Monthly modifications',
            'Priority support',
            'Data retention: 60 days',
            'Performance analysis'
          ]
        },
        business: {
          name: 'Business',
          executions: '5,001-10,000',
          features: [
            'Everything in Growth plus:',
            'Custom development',
            'Support 24/7',
            'Data retention: 90 days',
            'Dedicated consulting'
          ]
        }
      }
    },
    additionalServices: {
      title: 'Additional Services',
      subtitle: 'Complement your automation with specialized services designed to maximize the value of your investment',
      categories: {
        support: {
          title: 'Support and maintenance',
          services: {
            flowModification: {
              name: 'Flow modifications',
              description: 'Adjustments and improvements to your existing automated flows',
              price: '75€/hour',
              features: [
                'Optimization of existing processes',
                'Implementation of new functionalities',
                'Business logic updates',
                'Testing and change validation'
              ]
            },
            nodeDevelopment: {
              name: 'Node development',
              description: 'Creation of custom components for your specific needs',
              price: '500€/node',
              features: [
                'Custom architecture design',
                'Development and unit testing',
                'Detailed documentation',
                'Post-implementation support'
              ]
            },
            prioritySupport: {
              name: 'Priority support',
              description: 'Preferential attention and guaranteed response times',
              price: '299€/month',
              features: [
                'Response time < 2 hours',
                'Support 24/7',
                'Dedicated communication channel',
                'Proactive monitoring'
              ]
            }
          }
        }
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'We answer your questions about how automation can transform your business',
      questions: [
        {
          question: "What types of businesses can benefit from automation?",
          answer: "Virtually any business with repetitive processes can benefit. This includes e-commerce companies, professional services, manufacturing, real estate management, financial services, and many more. If your team spends time on repetitive tasks, there are opportunities to automate."
        },
        {
          question: "How long does it take to implement automation?",
          answer: "Implementation time varies depending on process complexity, but we generally follow these timeframes: simple processes (2-4 weeks), medium processes (4-6 weeks), complex processes (6-8 weeks). During the initial evaluation, we'll provide you with a detailed timeline."
        },
        {
          question: "What level of technical support do you provide?",
          answer: "We offer 24/7 technical support for all our clients. This includes incident resolution, configuration adjustments, and general inquiries. Response times vary by plan: Premium (1 hour), Standard (4 hours), Basic (24 hours)."
        },
        {
          question: "What happens if I need to modify an automated process?",
          answer: "Our team can make modifications at any time. Minor changes are usually implemented within 24-48 hours, while more significant modifications may require prior evaluation. Growth and Business plans include monthly modifications at no additional cost."
        },
        {
          question: "How do you ensure data security?",
          answer: "We implement multiple security layers: data encryption at rest and in transit, two-factor authentication, regular security audits, automated backups, and compliance with GDPR and other relevant regulations."
        },
        {
          question: "What kind of return on investment (ROI) can I expect?",
          answer: "Typical ROI ranges from 3-6 months, with savings that can reach 40% in operational costs. Key factors include error reduction, increased processing speed, and freeing up human resources for higher-value tasks."
        },
        {
          question: "How does it integrate with my current systems?",
          answer: "We integrate with most common business systems through APIs and standard connectors. For legacy or custom systems, we develop specific connectors. During the evaluation phase, we analyze all necessary integrations."
        },
        {
          question: "What happens if there's a service interruption?",
          answer: "We maintain 99.99% availability with redundant systems and 24/7 monitoring. In case of incidents, our support team responds according to established SLAs, with contingency plans and automatic recovery to minimize any impact."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes, we provide comprehensive training during implementation and detailed documentation. Additionally, we offer additional training sessions for new employees or when new features are implemented."
        },
        {
          question: "How is scalability handled?",
          answer: "Our platform is designed to scale automatically according to your needs. You can increase or decrease processing volume without interruptions, and you only pay for what you use."
        }
      ],
      cta: {
        text: "Can't find the answer you're looking for? Contact us directly.",
        button: "Contact Now"
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: "We're ready to help you transform your business through automation",
      form: {
        name: {
          label: 'Name',
          placeholder: 'Your name'
        },
        email: {
          label: 'Email',
          placeholder: 'you@email.com'
        },
        package: {
          label: 'Package of interest',
          placeholder: 'Select a package',
          executions: 'executions/month'
        },
        message: {
          label: 'Message',
          placeholder: 'Tell us about your business and what processes you would like to automate...'
        },
        additionalServices: {
          label: 'Additional services of interest',
          hours: 'hours',
          months: 'months',
          sessions: 'sessions',
          quantity: 'quantity'
        },
        summary: {
          title: 'Price summary',
          executions: 'executions',
          total: 'Total',
          annualSavings: 'Annual savings'
        },
        submit: 'Send message',
        submitting: 'Sending...',
        success: 'Message sent successfully!',
        response: "We'll respond within 24 business hours.",
        errors: {
          name: 'Name is required',
          email: 'Email is require',
          emailInvalid: 'Email is invalid',
          package: 'Please select a package',
          message: 'Message is required'
        }
      }
    }
  }
};