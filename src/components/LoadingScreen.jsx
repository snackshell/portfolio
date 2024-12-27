import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const loadingText = '> Initializing System...\n> Loading Matrix Protocol...\n> Access Granted_';
  
  const fadeOut = useSpring({
    opacity: isComplete ? 0 : 1,
    transform: isComplete ? 'scale(1.1)' : 'scale(1)',
    config: {
      duration: 800,
      tension: 280,
      friction: 20,
      easing: t => t * (2 - t)
    },
    onRest: () => {
      if (isComplete) {
        setTimeout(onLoadingComplete, 100);
      }
    },
  });

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsComplete(true), 600);
          return 100;
        }
        return prev + 0.8;
      });
    }, 25);

    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex <= loadingText.length) {
        setText(loadingText.slice(0, currentIndex));
        currentIndex++;
      }
    }, 35);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <animated.div 
      style={{
        ...fadeOut,
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0a0f0d',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50
      }}
    >
      <pre className="terminal-text text-xl mb-8 text-matrix-green">
        {text}
      </pre>
      <div className="w-64 h-2 bg-dim-matrix rounded-full overflow-hidden">
        <animated.div 
          className="h-full bg-matrix-green transition-all duration-300"
          style={{ 
            width: `${progress}%`,
            boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
          }}
        />
      </div>
      <div className="text-matrix-green mt-2 font-mono">
        {Math.round(progress)}%
      </div>
    </animated.div>
  );
};

export default LoadingScreen; 