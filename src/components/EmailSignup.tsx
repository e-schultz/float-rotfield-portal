
import React, { useState } from 'react';
import GlowingButton from './GlowingButton';
import { toast } from '@/components/ui/use-toast';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    if (email && validateEmail(email)) {
      toast({
        title: "Success",
        description: `${email} added to waitlist. Welcome to the Rotfield.`,
        className: "bg-terminal-bg border-magenta text-terminal-text",
      });
      setEmail('');
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
        className: "bg-terminal-bg border-crimson text-terminal-text",
      });
    }
  };
  
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="cyberpunk-input flex-grow"
          aria-label="Email address"
        />
        <GlowingButton type="submit" className="whitespace-nowrap">
          Join Waitlist
        </GlowingButton>
      </div>
    </form>
  );
};

export default EmailSignup;
