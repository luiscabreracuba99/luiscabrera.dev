'use client';

import { useState, useEffect, useRef } from 'react';

interface Command {
  command: string;
  output: string;
  delay?: number;
}

const commands: Command[] = [
  { command: 'whoami', output: 'luiscabrera@portfolio:~$ whoami\nLuis Cabrera' },
  { command: 'pwd', output: 'luiscabrera@portfolio:~$ pwd\n/home/luiscabrera/portfolio' },
  { command: 'ls -la', output: 'luiscabrera@portfolio:~$ ls -la\ntotal 48\ndrwxr-xr-x  2 luiscabrera luiscabrera 4096 Jan 15 10:30 .\ndrwxr-xr-x  3 luiscabrera luiscabrera 4096 Jan 15 10:30 ..\n-rw-r--r--  1 luiscabrera luiscabrera  234 Jan 15 10:30 about.md\n-rw-r--r--  1 luiscabrera luiscabrera  567 Jan 15 10:30 skills.md\n-rw-r--r--  1 luiscabrera luiscabrera  789 Jan 15 10:30 projects.md' },
  { command: 'cat skills.md', output: 'luiscabrera@portfolio:~$ cat skills.md\nFrontend: Next.js, React, TypeScript\nBackend: Java, Spring Boot, Hibernate\nDatabase: PostgreSQL, MySQL\nDevOps: AWS, Docker, Git, CI/CD' },
  { command: 'git status', output: 'luiscabrera@portfolio:~$ git status\nOn branch main\nYour branch is up to date with &apos;origin/main&apos;.\n\nChanges not staged for commit:\n  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)\n  (use &quot;git restore &lt;file&gt;...&quot; to discard changes in working directory)\n\tmodified:   portfolio.tsx\n\nno changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)' },
  { command: 'npm run dev', output: 'luiscabrera@portfolio:~$ npm run dev\n\n> portfolio@0.1.0 dev\n> next dev\n\n▲ Next.js 15.5.0\n- Local:        http://localhost:3000\n- Network:      http://192.168.1.163:3000\n✓ Ready in 1.2s' },
];

export function InteractiveTerminal() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) return;

    const command = commands[currentCommandIndex];
    setIsTyping(true);

    // Type the command
    let charIndex = 0;
    const typeCommand = setInterval(() => {
      if (charIndex <= command.command.length) {
        setDisplayedText(prev => prev + command.command[charIndex] || '');
        charIndex++;
      } else {
        clearInterval(typeCommand);
        
        // Wait a bit, then show output
        setTimeout(() => {
          setDisplayedText(prev => prev + '\n' + command.output);
          setIsTyping(false);
          
          // Move to next command after delay
          setTimeout(() => {
            setCurrentCommandIndex(prev => prev + 1);
            setDisplayedText(prev => prev + '\n\nluiscabrera@portfolio:~$ ');
          }, 1000);
        }, 500);
      }
    }, 100);

    return () => clearInterval(typeCommand);
  }, [currentCommandIndex]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedText]);

  return (
    <div className="bg-black/90 backdrop-blur-sm rounded-2xl border border-green-500/30 p-6 font-mono text-sm overflow-hidden">
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-green-400 ml-2">Terminal - Portfolio</span>
      </div>
      
      <div 
        ref={terminalRef}
        className="h-64 overflow-y-auto text-green-400 whitespace-pre-wrap"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <span>luiscabrera@portfolio:~$ </span>
        {displayedText}
        {isTyping && <span className="animate-pulse">|</span>}
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        Type &apos;help&apos; for available commands • Press &apos;Enter&apos; to continue
      </div>
    </div>
  );
}
