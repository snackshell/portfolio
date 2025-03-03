import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const loadingText = '> System Ready\n> Welcome_';
  
  const fadeOut = useSpring({
    opacity: isComplete ? 0 : 1,
    config: {
      duration: 500,
      tension: 280,
      friction: 20
    },
    onRest: () => {
      if (isComplete) {
        setTimeout(onLoadingComplete, 50);
      }
    },
  });

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsComplete(true), 300);
          return 100;
        }
        return prev + 2; // Faster progress increment
      });
    }, 20);

    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex <= loadingText.length) {
        setText(loadingText.slice(0, currentIndex));
        currentIndex++;
      }
    }, 25); // Faster text typing

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <animated.div style={fadeOut} className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-black">
      <div className="w-80 text-center">
        <pre className="mb-4 font-jetbrains text-terminal-green whitespace-pre-line animate-matrix-glow">
          {text}
        </pre>
        <div className="h-1 w-full bg-terminal-dim rounded-full overflow-hidden">
          <div
            className="h-full bg-terminal-green transition-all duration-100 animate-pulse-glow"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-terminal-green font-jetbrains text-sm">
          {Math.round(progress)}%
        </p>
      </div>
    </animated.div>
  );
};

export default LoadingScreen;