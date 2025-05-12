import React, { useEffect, useState } from 'react';
import { Workflow, Tags, Activity, Timer } from 'lucide-react';
import type { ApiResponse } from '../types/stats';
import { useLanguage } from '../contexts/LanguageContext';

const StatsCounter: React.FC = () => {
  const [stats, setStats] = useState<ApiResponse['data'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://n8n.atomicflow.net/webhook/af/api/landing/kpis', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': window.location.origin
          },
          mode: 'cors',
          credentials: 'omit',
          signal: AbortSignal.timeout(10000)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const rawData = await response.json();
        
        if (Array.isArray(rawData) && rawData.length > 0) {
          const data = {
            success: true,
            data: {
              totalWorkflows: rawData[0].workflows,
              totalExecutions: rawData[0].executions,
              totalTags: 2,
              uptime: rawData[0].uptime || '99.99%'
            }
          };
          setStats(data.data);
          setError(null);
        } else {
          throw new Error('Invalid response format from the statistics service');
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
        if (err instanceof TypeError && err.message.includes('fetch')) {
          setError(language === 'es' ? 
            'No se pudo conectar al servicio de estadísticas. Por favor, verifica tu conexión e intenta de nuevo.' :
            'Unable to connect to the statistics service. Please check your connection and try again.'
          );
        } else if (err instanceof Error && err.name === 'TimeoutError') {
          setError(language === 'es' ?
            'La solicitud expiró. El servicio podría estar temporalmente no disponible.' :
            'Request timed out. The service might be temporarily unavailable.'
          );
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(language === 'es' ?
            'Ocurrió un error inesperado al cargar las estadísticas.' :
            'An unexpected error occurred while loading statistics.'
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, [language]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px] bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg" role="status" aria-label={language === 'es' ? 'Cargando estadísticas' : 'Loading statistics'}>
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-atomic-blue-200 border-t-atomic-blue"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg">
        <div className="flex flex-col items-center justify-center min-h-[200px] text-error" role="alert">
          <AlertCircle className="w-12 h-12 mb-4" />
          <p className="text-center font-medium mb-6">{error}</p>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                setIsLoading(true);
                setError(null);
                window.location.reload();
              }}
              className="px-6 py-2.5 bg-atomic-blue text-white rounded-lg font-medium transition-all duration-300 hover:bg-atomic-blue-600 hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-atomic-blue-200 focus:ring-offset-2 active:transform active:scale-95"
              aria-label={language === 'es' ? 'Reintentar cargar estadísticas' : 'Retry loading statistics'}
            >
              {language === 'es' ? 'Reintentar' : 'Retry'}
            </button>
            <button 
              onClick={() => window.location.href = '#contact'}
              className="px-6 py-2.5 bg-white border-2 border-atomic-blue text-atomic-blue rounded-lg font-medium transition-all duration-300 hover:bg-atomic-blue-50 hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-atomic-blue-200 focus:ring-offset-2 active:transform active:scale-95"
              aria-label={language === 'es' ? 'Contactar soporte' : 'Contact support'}
            >
              {language === 'es' ? 'Contactar Soporte' : 'Contact Support'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  const statCards = [
    {
      icon: <Workflow className="w-6 h-6 text-atomic-blue" />,
      value: stats.totalWorkflows.toLocaleString(),
      label: language === 'es' ? "Flujos Activos" : "Active Workflows",
      sublabel: language === 'es' ? "Flujos de automatización activos" : "Active automation flows",
      className: "col-span-1"
    },
    {
      icon: <Tags className="w-6 h-6 text-atomic-blue" />,
      value: stats.totalTags.toLocaleString(),
      label: language === 'es' ? "Categorías de Empresa" : "Company Categories",
      sublabel: language === 'es' ? "Categorías de empresa activas" : "Active company categories",
      className: "col-span-1"
    },
    {
      icon: <Activity className="w-6 h-6 text-atomic-blue" />,
      value: stats.totalExecutions.toLocaleString(),
      label: language === 'es' ? "Ejecuciones Totales" : "Total Executions",
      sublabel: language === 'es' ? "Tareas automatizadas completadas" : "Automated tasks completed",
      className: "col-span-1"
    },
    {
      icon: <Timer className="w-6 h-6 text-atomic-blue" />,
      value: stats.uptime,
      label: language === 'es' ? "Tiempo de actividad del sistema" : "System Uptime",
      sublabel: language === 'es' ? "Disponibilidad del sistema" : "System availability",
      className: "col-span-1 md:col-span-3 lg:col-span-2"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {statCards.map((card, index) => (
        <div 
          key={index}
          className={`bg-white dark:bg-dark-card rounded-lg p-4 shadow-lg border border-gray-200 dark:border-dark-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${card.className}`}
        >
          <div className="flex flex-col h-full justify-between">
            <div className="bg-atomic-blue-50 p-2 rounded-lg w-fit">
              {card.icon}
            </div>
            <div className="text-center my-3">
              <span className="text-4xl font-bold text-atomic-blue block mb-1">
                {card.value}
              </span>
              <h3 className="text-base font-semibold text-text-primary dark:text-white">
                {card.label}
              </h3>
            </div>
            <p className="text-sm text-text-secondary dark:text-gray-400 text-center">
              {card.sublabel}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;