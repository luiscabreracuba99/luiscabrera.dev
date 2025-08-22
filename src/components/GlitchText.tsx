'use client';

import { useState, useEffect, useCallback } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: number;
}

export function GlitchText({ text, className = '', glitchIntensity = 0.1 }: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';

  const triggerGlitch = useCallback(() => {
    if (Math.random() < glitchIntensity) {
      setIsGlitching(true);
      
      // Random glitch effect
      const glitchDuration = 100 + Math.random() * 200;
      
      setTimeout(() => {
        setIsGlitching(false);
      }, glitchDuration);
    }
  }, [glitchIntensity]);

  useEffect(() => {
    const interval = setInterval(triggerGlitch, 2000);
    return () => clearInterval(interval);
  }, [glitchIntensity, triggerGlitch]);

  useEffect(() => {
    if (isGlitching) {
      const glitchText = text.split('').map(char => 
        char === ' ' ? ' ' : glitchChars[Math.floor(Math.random() * glitchChars.length)]
      ).join('');
      
      setGlitchedText(glitchText);
      
      const restoreInterval = setInterval(() => {
        setGlitchedText(text);
      }, 50);
      
      return () => clearInterval(restoreInterval);
    }
  }, [isGlitching, text]);

  return (
    <div className={`relative ${className}`}>
      {/* Main text */}
      <span className="relative z-10">
        {glitchedText}
      </span>
      
      {/* Glitch layers */}
      {isGlitching && (
        <>
          <span 
            className="absolute inset-0 text-red-400 opacity-80 z-0 animate-pulse"
            style={{ 
              transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`,
              animationDuration: '0.1s'
            }}
          >
            {glitchedText}
          </span>
          <span 
            className="absolute inset-0 text-blue-400 opacity-60 z-0"
            style={{ 
              transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`,
            }}
          >
            {glitchedText}
          </span>
        </>
      )}
    </div>
  );
}
