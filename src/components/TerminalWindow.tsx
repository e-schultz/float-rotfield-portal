
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
  variant?: 'default' | 'bone-pile' | 'garden' | 'boardwalk' | 'teal';
}

const TerminalWindow = ({ 
  children, 
  title = "float@bbs:~$", 
  className = "", 
  variant = 'default' 
}: TerminalWindowProps) => {
  const variantClasses: Record<string, string> = {
    'default': 'terminal-window',
    'bone-pile': 'terminal-window bone-pile-terminal',
    'garden': 'terminal-window garden-terminal',
    'boardwalk': 'terminal-window boardwalk-terminal',
    'teal': 'terminal-window teal-terminal',
  };
  
  return (
    <div className={cn(variantClasses[variant], className)}>
      <div className="terminal-header">
        <div className="terminal-circle bg-red-500"></div>
        <div className="terminal-circle bg-yellow-500"></div>
        <div className="terminal-circle bg-green-500"></div>
        <div className="ml-2 text-xs text-terminal-text opacity-80">{title}</div>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
