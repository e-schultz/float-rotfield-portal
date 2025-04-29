
import React, { useState, useEffect } from 'react';
import TypewriterEffect from './TypewriterEffect';

interface CommandProps {
  command: string;
  output: string | string[];
  typingSpeed?: number;
  delay?: number;
}

const Terminal = ({ commands }: { commands: CommandProps[] }) => {
  const [displayedCommands, setDisplayedCommands] = useState<number>(0);
  
  const renderOutput = (output: string | string[]) => {
    if (Array.isArray(output)) {
      return output.map((line, i) => <div key={i} className="text-terminal-text">{line}</div>);
    }
    return <div className="text-terminal-text">{output}</div>;
  };
  
  useEffect(() => {
    if (displayedCommands < commands.length) {
      const timer = setTimeout(() => {
        setDisplayedCommands(prev => prev + 1);
      }, commands[displayedCommands].delay || 0);
      
      return () => clearTimeout(timer);
    }
  }, [commands, displayedCommands]);
  
  return (
    <div className="font-mono text-sm sm:text-base">
      {commands.slice(0, displayedCommands).map((cmd, idx) => (
        <div key={idx} className="mb-3">
          <div className="flex">
            <span className="text-green mr-2">float@bbs:~$</span>
            <TypewriterEffect 
              text={cmd.command} 
              typingSpeed={cmd.typingSpeed || 30}
              delay={0}
            />
          </div>
          <div className="mt-1 pl-4">
            {renderOutput(cmd.output)}
          </div>
        </div>
      ))}
      
      {displayedCommands < commands.length && (
        <div className="flex">
          <span className="text-green mr-2">float@bbs:~$</span>
          <TypewriterEffect 
            text={commands[displayedCommands].command} 
            typingSpeed={commands[displayedCommands].typingSpeed || 30}
            delay={commands[displayedCommands].delay || 0}
            onComplete={() => setDisplayedCommands(prev => prev + 1)}
          />
        </div>
      )}
    </div>
  );
};

export default Terminal;
