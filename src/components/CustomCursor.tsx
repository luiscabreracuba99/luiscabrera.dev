'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if it's desktop
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth > 768 && !('ontouchstart' in window));
    };
    
    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detectar elementos interactivos
    const handleMouseEnterInteractive = () => setCursorVariant('hover');
    const handleMouseLeaveInteractive = () => setCursorVariant('default');

    // Agregar listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-hover');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('resize', checkIfDesktop);
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);

  const cursorVariants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      border: '2px solid rgba(59, 130, 246, 0.8)',
      borderRadius: '50%',
    },
    hover: {
      height: 48,
      width: 48,
      backgroundColor: 'rgba(147, 51, 234, 0.2)',
      border: '2px solid rgba(147, 51, 234, 0.9)',
      borderRadius: '50%',
    }
  };

  if (!isVisible || !isDesktop) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - cursorVariants[cursorVariant as keyof typeof cursorVariants].width / 2,
          top: mousePosition.y - cursorVariants[cursorVariant as keyof typeof cursorVariants].height / 2,
          ...cursorVariants[cursorVariant as keyof typeof cursorVariants],
        }}
      />
      
      {/* Trailing dot */}
      <div
        className="fixed pointer-events-none z-[9998] w-1 h-1 bg-blue-400 rounded-full transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
          transitionDelay: '50ms',
        }}
      />
      
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9997] border border-blue-400/20 rounded-full transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          width: 48,
          height: 48,
          transitionDelay: '100ms',
        }}
      />
    </>
  );
}
