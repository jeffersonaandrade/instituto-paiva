import React, { useEffect, useState } from 'react';

const MobileOptimizations = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth <= 768;
      const landscape = window.innerWidth > window.innerHeight;
      
      setIsMobile(mobile);
      setIsLandscape(landscape);

      // Ajustar altura do viewport para mobile
      if (mobile) {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }

      // Otimizar animações para dispositivos móveis
      if (mobile) {
        // Reduzir número de partículas em mobile
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
          if (index > 20) { // Manter apenas 20 partículas em mobile
            particle.style.display = 'none';
          }
        });

        // Simplificar animações orbitais em mobile
        const orbitalElements = document.querySelectorAll('[style*="rotate"]');
        orbitalElements.forEach(element => {
          element.style.animationDuration = '30s'; // Mais lento para economizar bateria
        });
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  useEffect(() => {
    // Adicionar classes CSS específicas para mobile
    if (isMobile) {
      document.body.classList.add('mobile-device');
    } else {
      document.body.classList.remove('mobile-device');
    }

    if (isLandscape && isMobile) {
      document.body.classList.add('mobile-landscape');
    } else {
      document.body.classList.remove('mobile-landscape');
    }
  }, [isMobile, isLandscape]);

  // Componente invisível - apenas para otimizações
  return null;
};

export default MobileOptimizations;

