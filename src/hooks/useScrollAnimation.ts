import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Enhanced intersection observer with multiple thresholds
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            // Add staggered animation for child elements
            const children = entry.target.querySelectorAll('.stagger-child');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('stagger-in');
              }, index * 100);
            });

            // Add parallax effect for parallax elements
            const parallaxElements = entry.target.querySelectorAll('.parallax-element');
            parallaxElements.forEach((element) => {
              element.classList.add('parallax-active');
            });
          }
        });
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7],
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    // OPTIMIZED scroll-based parallax with requestAnimationFrame and debouncing
    const handleScroll = () => {
      // Cancel previous RAF if it exists
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth 60fps animations
      rafRef.current = requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const delta = scrolled - lastScrollY.current;
        
        // Only update if scroll delta is significant (reduces unnecessary calculations)
        if (Math.abs(delta) > 1) {
          // REMOVED blur effects during scrolling for better performance
          const parallaxElements = document.querySelectorAll('.parallax-bg');
          
          parallaxElements.forEach((element) => {
            const rate = scrolled * -0.3; // Reduced intensity for smoother performance
            (element as HTMLElement).style.transform = `translateY(${rate}px) translateZ(0)`;
          });

          // Floating elements parallax - REDUCED intensity
          const floatingElements = document.querySelectorAll('.floating-parallax');
          floatingElements.forEach((element, index) => {
            const rate = scrolled * (0.1 + index * 0.05); // Reduced from 0.2 + index * 0.1
            (element as HTMLElement).style.transform = `translateY(${rate}px) translateZ(0)`;
          });

          lastScrollY.current = scrolled;
        }
      });
    };

    // DEBOUNCED scroll handler (150-200ms as requested)
    const debouncedScrollHandler = () => {
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set new timeout for 150ms debouncing
      scrollTimeoutRef.current = setTimeout(() => {
        handleScroll();
      }, 150);

      // Also call immediately for responsive feel
      handleScroll();
    };

    // OPTIMIZED mouse-following particles with reduced frequency
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // REDUCED frequency - only update every 3rd mouse move
      if (Math.random() > 0.66) {
        // Update mouse-following particles with requestAnimationFrame
        requestAnimationFrame(() => {
          const mouseParticles = document.querySelectorAll('.mouse-particle');
          mouseParticles.forEach((particle, index) => {
            const delay = index * 30; // Reduced from 50
            setTimeout(() => {
              (particle as HTMLElement).style.transform = 
                `translate(${clientX + (Math.random() - 0.5) * 100}px, ${clientY + (Math.random() - 0.5) * 100}px) translateZ(0)`;
            }, delay);
          });
        });
      }
    };

    // Add event listeners with passive option for better performance
    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Add touch event optimizations for mobile
    const handleTouchStart = () => {
      // Disable any ongoing animations during touch
      document.body.style.pointerEvents = 'none';
    };

    const handleTouchEnd = () => {
      // Re-enable animations after touch
      setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
      }, 100);
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('scroll', debouncedScrollHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return observerRef;
};