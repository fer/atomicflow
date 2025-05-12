import React, { useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  date: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana García",
    role: "CEO",
    company: "TechStart",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "2024-02-15",
    content: "La automatización implementada por Terrabot ha transformado completamente nuestras operaciones. Hemos reducido los tiempos de proceso en un 60% y eliminado prácticamente todos los errores manuales."
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Director de Operaciones",
    company: "LogisTech",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "2024-02-10",
    content: "El ROI fue evidente en menos de 3 meses. La capacidad de escalar nuestros procesos sin aumentar el personal ha sido fundamental para nuestro crecimiento."
  },
  {
    id: 3,
    name: "Laura Martínez",
    role: "Directora Financiera",
    company: "FinanceFlow",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "2024-02-05",
    content: "La precisión y velocidad de los procesos automatizados han mejorado significativamente nuestra eficiencia financiera. El soporte 24/7 nos da total tranquilidad."
  },
  {
    id: 4,
    name: "Miguel Sánchez",
    role: "CTO",
    company: "DataFlow",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "2024-01-28",
    content: "La integración fue impecable y el tiempo de implementación superó nuestras expectativas. Los flujos automatizados funcionan perfectamente desde el primer día."
  },
  {
    id: 5,
    name: "Isabel López",
    role: "Gerente de Ventas",
    company: "SalesForce Pro",
    image: "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "2024-01-20",
    content: "Nuestro equipo de ventas ahora puede dedicar más tiempo a las relaciones con los clientes gracias a la automatización de tareas administrativas."
  },
  {
    id: 6,
    name: "David Fernández",
    role: "Director de Marketing",
    company: "MarketPro",
    image: "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "2024-01-15",
    content: "La automatización de nuestras campañas de marketing ha mejorado significativamente nuestro ROI. El sistema es increíblemente flexible y fácil de ajustar."
  },
  {
    id: 7,
    name: "Elena Torres",
    role: "Gerente de RRHH",
    company: "TalentHub",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "2024-01-10",
    content: "La automatización de nuestros procesos de reclutamiento ha reducido el tiempo de contratación en un 40%. Una inversión que realmente vale la pena."
  },
  {
    id: 8,
    name: "Pablo Ruiz",
    role: "Director de Proyectos",
    company: "ProjectFlow",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "2024-01-05",
    content: "La transparencia y eficiencia que hemos ganado con la automatización son invaluables. Nuestros proyectos ahora se entregan consistentemente a tiempo."
  }
];

const Testimonials: React.FC = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        swiperRef.current?.slidePrev();
      } else if (e.key === 'ArrowRight') {
        swiperRef.current?.slideNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="hidden py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Historias reales de empresas que han transformado sus operaciones con nuestra ayuda
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg border border-gray-100 dark:border-dark-border h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} en {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 flex-grow">
                    "{testimonial.content}"
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    {new Date(testimonial.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-dark-card p-2 rounded-full shadow-lg border border-gray-200 dark:border-dark-border z-10 hover:bg-gray-50 dark:hover:bg-dark-border/10 transition-colors hidden lg:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-dark-card p-2 rounded-full shadow-lg border border-gray-200 dark:border-dark-border z-10 hover:bg-gray-50 dark:hover:bg-dark-border/10 transition-colors hidden lg:block"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;