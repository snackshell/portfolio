import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const fullText = '> Hello World.\n> I am Snackshell\n> AI/ML Developer';
  
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillsAnimation = useSpring({
    opacity: skillsInView ? 1 : 0,
    transform: skillsInView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 280, friction: 20 }
  });

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;
    
    const typeText = () => {
      if (!isDeleting) {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
          timeoutId = setTimeout(typeText, 50);
        } else {
          isDeleting = true;
          timeoutId = setTimeout(typeText, 5000); // Pause for 5 seconds before deleting
        }
      } else {
        if (currentIndex > 0) {
          setText(fullText.slice(0, currentIndex));
          currentIndex--;
          timeoutId = setTimeout(typeText, 30);
        } else {
          isDeleting = false;
          timeoutId = setTimeout(typeText, 5000); // Pause for 5 seconds before typing again
        }
      }
    };

    typeText();
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="relative z-10 flex flex-col min-h-screen pb-16">
      <div className="px-4 space-y-8 flex-1 flex flex-col justify-center items-center">
        <pre className="terminal-text text-xl md:text-3xl font-mono text-matrix-green mb-12">
          {text} 
          <span className="animate-pulse"> _</span>
        </pre>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button 
            onClick={() => handleNavigation('/projects')}
            className="px-6 py-3 bg-dim-matrix text-matrix-green border border-matrix-green 
                     hover:bg-matrix-green hover:text-terminal-black transition-all duration-300
                     font-mono rounded"
          >
            {'> View_Projects'}
          </button>
          <button 
            onClick={() => handleNavigation('/about')}
            className="px-6 py-3 bg-dim-matrix text-matrix-green border border-matrix-green 
                     hover:bg-matrix-green hover:text-terminal-black transition-all duration-300
                     font-mono rounded"
          >
            {'> About_Me'}
          </button>
          <button 
            onClick={() => handleNavigation('/contact')}
            className="px-6 py-3 border border-matrix-green text-matrix-green 
                     hover:bg-matrix-green hover:text-terminal-black transition-all duration-300
                     font-mono rounded"
          >
            {'> Contact_Me'}
          </button>
        </div>
      </div>
      
      <animated.div 
        ref={skillsRef}
        style={skillsAnimation}
        className="mt-16 mb-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-matrix-green text-2xl font-mono mb-8">{'> Skills_'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="skill-card">
              <h3 className="text-matrix-green font-mono mb-4">{'> AI/ML'}</h3>
              <ul className="text-dim-matrix space-y-2">
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Neural Networks</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3 className="text-matrix-green font-mono mb-4">{'> Languages'}</h3>
              <ul className="text-dim-matrix space-y-2">
                <li>Python</li>
                <li>JavaScript</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3 className="text-matrix-green font-mono mb-4">{'> Tools'}</h3>
              <ul className="text-dim-matrix space-y-2">
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
