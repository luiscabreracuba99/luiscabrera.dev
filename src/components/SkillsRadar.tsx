'use client';

import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

const skills: Skill[] = [
  { name: 'Next.js', level: 95, color: '#3B82F6' },
  { name: 'React', level: 90, color: '#61DAFB' },
  { name: 'Java', level: 88, color: '#ED8B00' },
  { name: 'Spring Boot', level: 85, color: '#6DB33F' },
  { name: 'TypeScript', level: 92, color: '#3178C6' },
  { name: 'PostgreSQL', level: 80, color: '#336791' },
  { name: 'AWS', level: 75, color: '#FF9900' },
  { name: 'Docker', level: 82, color: '#2496ED' },
];

export function SkillsRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background circles
    for (let i = 1; i <= 5; i++) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI);
      ctx.stroke();
    }

    // Draw axis lines
    const numSkills = skills.length;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < numSkills; i++) {
      const angle = (i * 2 * Math.PI) / numSkills - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // Draw skill polygon
    ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    skills.forEach((skill, i) => {
      const angle = (i * 2 * Math.PI) / numSkills - Math.PI / 2;
      const skillRadius = (radius * skill.level) / 100;
      const x = centerX + Math.cos(angle) * skillRadius;
      const y = centerY + Math.sin(angle) * skillRadius;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw skill points
    skills.forEach((skill, i) => {
      const angle = (i * 2 * Math.PI) / numSkills - Math.PI / 2;
      const skillRadius = (radius * skill.level) / 100;
      const x = centerX + Math.cos(angle) * skillRadius;
      const y = centerY + Math.sin(angle) * skillRadius;
      
      // Skill point
      ctx.fillStyle = skill.color;
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, 2 * Math.PI);
      ctx.fill();
      
      // Skill name
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      
      const labelRadius = radius + 20;
      const labelX = centerX + Math.cos(angle) * labelRadius;
      const labelY = centerY + Math.sin(angle) * labelRadius;
      
      ctx.fillText(skill.name, labelX, labelY);
    });

    // Draw center point
    ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
    ctx.fill();

  }, []);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">Skills Radar</h3>
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="max-w-full h-auto"
        />
      </div>
      
      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 gap-2 text-xs">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: skill.color }}
            />
            <span className="text-white/80">{skill.name}</span>
            <span className="text-white/60 ml-auto">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
