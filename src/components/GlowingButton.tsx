
import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

const GlowingButton = ({ 
  children, 
  className = "", 
  variant = 'default',
  ...props 
}: GlowingButtonProps) => {
  const baseClasses = "cyberpunk-button rounded-md";
  
  const variantClasses = {
    default: "border-2 border-magenta",
    outline: "border-2 border-magenta/50 hover:border-magenta"
  };
  
  return (
    <button 
      className={cn(
        baseClasses, 
        variantClasses[variant], 
        className
      )} 
      {...props}
    >
      {children}
    </button>
  );
};

export default GlowingButton;
