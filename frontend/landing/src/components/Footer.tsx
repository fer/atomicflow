import React from 'react';
import { Atom } from 'lucide-react';
import { siteConfig } from '../config/site';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Atom className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl">
              <span className="font-light">atomic</span><strong>flow</strong>
            </span>
          </div>
          
          <div className="flex space-x-6">
            {Object.entries(siteConfig.social).map(([platform, url]) => (
              platform === 'github' ? (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={`Visit our ${platform} page`}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              ) : (
                <span 
                  key={platform}
                  className="text-gray-300 hover:text-white transition-colors cursor-not-allowed"
                  aria-label={`${platform} page coming soon`}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {platform === 'telegram' && (
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    )}
                    {platform === 'twitter' && (
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    )}
                    {platform === 'discord' && (
                      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
                    )}
                    {platform === 'youtube' && (
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    )}
                  </svg>
                </span>
              )
            ))}
          </div>
        </div>
        
        <div className="hidden grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-gray-800">
          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 cursor-not-allowed">Sobre nosotros</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Nuestro equipo</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Carreras</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Prensa</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 cursor-not-allowed">Automatización de procesos</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Integración de sistemas</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Consultoría</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Soporte técnico</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 cursor-not-allowed">Blog</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Guías</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Webinars</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Casos de éxito</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 cursor-not-allowed">Política de privacidad</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Términos de uso</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">GDPR</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Cookies</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center">
            <span className="text-gray-400 text-sm mr-2">Hecho con</span>
            <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-400 text-sm ml-2">en <a href="https://es.wikipedia.org/wiki/Extremadura" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Extremadura</a>, <a href="https://es.wikipedia.org/wiki/Espa%C3%B1a" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">España</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;