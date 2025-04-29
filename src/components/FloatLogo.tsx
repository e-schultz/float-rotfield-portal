
import React from 'react';
import { cn } from '@/lib/utils';

interface FloatLogoProps {
  className?: string;
  animated?: boolean;
}

const FloatLogo = ({ className = "", animated = true }: FloatLogoProps) => {
  return (
    <pre 
      className={cn(
        "text-magenta font-mono text-base sm:text-lg md:text-xl leading-tight", 
        animated ? "animate-float" : "",
        className
      )}
    >
{`
   ######  ##       #######    ###   ########  
   ##      ##      ##     ##  ## ##     ##     
   ##      ##      ##     ## ##   ##    ##     
   ######  ##      ##     ## ##   ##    ##     
   ##      ##      ##     ## #######    ##     
   ##      ##      ##     ## ##   ##    ##     
   ##      #######  #######  ##   ##    ##     
                  < ⛎ 𐭰 𐌂 >
`}
    </pre>
  );
};

export default FloatLogo;
