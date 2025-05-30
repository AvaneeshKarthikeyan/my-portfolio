"use client";

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

const ParticlesBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadParticles = async () => {
      try {
        // Load particles.js from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.async = true;
        script.onload = () => {
          if (typeof window.particlesJS !== 'undefined') {
            window.particlesJS('tsparticles', {
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: '#ffffff'
                },
                shape: {
                  type: 'circle'
                },
                opacity: {
                  value: 0.5,
                  random: false
                },
                size: {
                  value: 3,
                  random: true
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: '#ffffff',
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: 'none',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false
                }
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: true,
                    mode: 'repulse'
                  },
                  onclick: {
                    enable: true,
                    mode: 'push'
                  },
                  resize: true
                }
              },
              retina_detect: true
            });
            setIsLoaded(true);
          }
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading particles:', error);
      }
    };

    loadParticles();

    return () => {
      const script = document.querySelector('script[src*="particles.js"]');
      if (script) {
        document.head.removeChild(script);
      }
      setIsLoaded(false);
    };
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <div
      id="tsparticles"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'transparent'
      }}
    />
  );
};

export default ParticlesBackground; 