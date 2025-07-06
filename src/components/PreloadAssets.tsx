import React, { useEffect } from 'react';

const PreloadAssets: React.FC = () => {
  useEffect(() => {
    // Create preload links for Spline scenes
    const splineScenes = [
      'https://prod.spline.design/U8YKOCnGNejolkau/scene.splinecode',
      'https://prod.spline.design/0EiB919XJ-ARI0LW/scene.splinecode'
    ];

    splineScenes.forEach(sceneUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'fetch';
      link.href = sceneUrl;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      document.querySelectorAll('link[rel="preload"]').forEach(link => {
        if (splineScenes.includes(link.getAttribute('href') || '')) {
          link.remove();
        }
      });
    };
  }, []);

  return null;
};

export default PreloadAssets; 