
import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  typingSpeed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterEffect = ({ 
  text, 
  typingSpeed = 50, 
  delay = 0, 
  className = "",
  onComplete 
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Reset when text changes
    setDisplayText('');
    setCurrentIndex(0);
    
    // Start typing after delay
    const delayTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);
    
    return () => clearTimeout(delayTimeout);
  }, [text, delay]);

  useEffect(() => {
    if (!isTyping) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      if (onComplete) onComplete();
    }
  }, [currentIndex, isTyping, onComplete, text, typingSpeed]);

  return (
    <div className={`font-mono ${className}`}>
      {displayText}
      {isTyping && (
        <span className="inline-block animate-cursor-blink ml-1">▋</span>
      )}
    </div>
  );
};

export default TypewriterEffect;
