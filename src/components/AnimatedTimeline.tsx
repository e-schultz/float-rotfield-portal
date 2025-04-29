
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  title: string;
  phase: string;
  date: string;
  status: 'planned' | 'current' | 'completed';
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
}

const AnimatedTimeline = ({ items }: AnimatedTimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-magenta/30"></div>
      
      {/* Timeline items */}
      <div className="space-y-10 ml-4">
        {items.map((item, index) => (
          <div key={index} className="relative pl-8">
            {/* Node */}
            <div className={cn(
              "absolute left-0 w-8 h-8 rounded-full border-2 flex items-center justify-center -translate-x-1/2",
              item.status === 'current' 
                ? "bg-magenta border-magenta animate-pulse-glow" 
                : item.status === 'completed'
                  ? "bg-magenta/20 border-magenta"
                  : "bg-transparent border-magenta/50"
            )}>
              <span className="text-xs font-bold">{index + 1}</span>
            </div>
            
            {/* Content */}
            <div className="bg-terminal-bg/50 p-4 rounded-md border border-magenta/30">
              <div className="text-magenta font-bold mb-1">{item.phase}</div>
              <h4 className="font-semibold text-terminal-text mb-2">{item.title}</h4>
              <div className="text-terminal-text/70 text-sm">{item.date}</div>
              
              {item.status === 'current' && (
                <div className="mt-2 inline-block bg-magenta/20 text-magenta text-xs py-1 px-2 rounded">
                  Current Phase
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTimeline;
