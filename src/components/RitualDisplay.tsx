
import React, { useState } from 'react';
import TerminalWindow from './TerminalWindow';
import { cn } from '@/lib/utils';

interface RitualProps {
  command: string;
  name: string;
  description: string;
  color?: string;
  variant?: 'default' | 'bone-pile' | 'garden' | 'boardwalk' | 'teal';
}

const RitualDisplay = ({ rituals }: { rituals: RitualProps[] }) => {
  const [activeRitual, setActiveRitual] = useState<number>(0);
  
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-magenta text-2xl font-bold mb-4">Ritual Workflows</h3>
        <div className="space-y-2">
          {rituals.map((ritual, idx) => (
            <button
              key={idx}
              onClick={() => setActiveRitual(idx)}
              className={cn(
                "w-full text-left p-3 border rounded-md transition-all",
                activeRitual === idx 
                  ? "bg-terminal-bg border-magenta" 
                  : "bg-transparent border-muted/20 hover:border-muted/50"
              )}
            >
              <code className={activeRitual === idx ? "text-magenta" : "text-terminal-text/70"}>
                {ritual.command}
              </code>
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-full">
        <TerminalWindow 
          variant={rituals[activeRitual].variant} 
          title={`float@bbs:~$ ${rituals[activeRitual].command}`}
        >
          <div className="space-y-4 p-2">
            <h4 className="text-xl font-bold">{rituals[activeRitual].name}</h4>
            <p className="text-terminal-text opacity-90">
              {rituals[activeRitual].description}
            </p>
            <div className="mt-4 py-2 border-t border-dashed border-muted/30 text-terminal-text/70 text-sm">
              <code>Process completed. Type 'help' for more commands.</code>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};

export default RitualDisplay;
