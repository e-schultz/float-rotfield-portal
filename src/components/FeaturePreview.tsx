
import React from 'react';
import { cn } from '@/lib/utils';
import TerminalWindow from './TerminalWindow';

interface FeatureProps {
  title: string;
  description: string;
  command?: string;
  output?: string[];
  variant?: 'default' | 'bone-pile' | 'garden' | 'boardwalk' | 'teal';
}

const FeaturePreview = ({ feature }: { feature: FeatureProps }) => {
  return (
    <div className="group">
      <TerminalWindow 
        variant={feature.variant || 'default'} 
        className="h-full transform transition-transform duration-200 group-hover:scale-[1.01]"
        title={feature.command ? `float@bbs:~$ ${feature.command}` : undefined}
      >
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-terminal-text">{feature.title}</h4>
          <p className="text-terminal-text/80 text-sm">
            {feature.description}
          </p>
          
          {feature.output && (
            <div className="mt-4 border-t border-dashed border-muted/30 pt-2">
              {feature.output.map((line, idx) => (
                <div key={idx} className="text-xs text-terminal-text/70">
                  {line}
                </div>
              ))}
            </div>
          )}
        </div>
      </TerminalWindow>
    </div>
  );
};

const FeatureGrid = ({ features }: { features: FeatureProps[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, idx) => (
        <FeaturePreview key={idx} feature={feature} />
      ))}
    </div>
  );
};

export { FeaturePreview, FeatureGrid };
