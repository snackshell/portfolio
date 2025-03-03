import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const navigate = useNavigate();
  
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillsAnimation = useSpring({
    opacity: skillsInView ? 1 : 0,
    transform: skillsInView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 280, friction: 20 }
  });

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="relative z-10 flex flex-col min-h-screen pb-16">
      <div className="px-4 space-y-8 flex-1 flex flex-col justify-center items-center">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron text-terminal-green animate-matrix-glow tracking-wider">
            SnackShell
          </h1>
          <p className="text-xl md:text-2xl text-terminal-green font-jetbrains opacity-80">
            AI/ML Developer
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button 
            onClick={() => handleNavigation('/projects')}
            className="px-6 py-3 bg-transparent border-2 border-terminal-green text-terminal-green 
                     font-jetbrains hover:bg-terminal-dim transition-all duration-300
                     animate-pulse-glow rounded-md"
          >
            {'> View_Projects'}
          </button>

          <button 
            onClick={() => handleNavigation('/about')}
            className="px-6 py-3 bg-transparent border-2 border-terminal-green text-terminal-green 
                     font-jetbrains hover:bg-terminal-dim transition-all duration-300
                     animate-pulse-glow rounded-md"
          >
            {'> About_Me'}
          </button>

          <button 
            onClick={() => handleNavigation('/contact')}
            className="px-6 py-3 bg-transparent border-2 border-terminal-green text-terminal-green 
                     font-jetbrains hover:bg-terminal-dim transition-all duration-300
                     animate-pulse-glow rounded-md"
          >
            {'> Contact_Me'}
          </button>
        </div>
      </div>
      
      <animated.div 
        ref={skillsRef}
        style={skillsAnimation}
        className="mt-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-terminal-green text-2xl font-jetbrains mb-8">{'> Skills_'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="terminal-container shadow-glow">
              <h3 className="text-terminal-green font-jetbrains mb-3">{'> AI/ML'}</h3>
              <ul className="text-terminal-green space-y-1 font-jetbrains text-sm">
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Neural Networks</li>
              </ul>
            </div>
            <div className="terminal-container shadow-glow">
              <h3 className="text-terminal-green font-jetbrains mb-3">{'> Languages'}</h3>
              <ul className="text-terminal-green space-y-1 font-jetbrains text-sm">
                <li>Python</li>
                <li>JavaScript</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="terminal-container shadow-glow">
              <h3 className="text-terminal-green font-jetbrains mb-3">{'> Tools'}</h3>
              <ul className="text-terminal-green space-y-1 font-jetbrains text-sm">
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default Hero;
