import { useState, useEffect } from 'react';

// Custom hook for the typing effect in the hero section
export const useTypewriter = (text, speed = 50, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const startTyping = () => {
      timeout = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(timeout);
          setIsComplete(true);
        }
      }, speed);
    };

    if (delay > 0) {
      setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      clearInterval(timeout);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
};
