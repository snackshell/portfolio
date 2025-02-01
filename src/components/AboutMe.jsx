import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import BackButton from './BackButton';

const AboutMe = () => {
  const [typedText, setTypedText] = useState('');
  const thankYouMessage = "Thanks so much for stopping by and taking the time to learn a bit about me!";
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    config: { tension: 280, friction: 20 }
  });

  useEffect(() => {
    if (inView) {
      let currentIndex = 0;
      let isDeleting = false;
      let timeoutId;
      
      const typeText = () => {
        if (!isDeleting) {
          if (currentIndex <= thankYouMessage.length) {
            setTypedText(thankYouMessage.slice(0, currentIndex));
            currentIndex++;
            timeoutId = setTimeout(typeText, 50);
          } else {
            isDeleting = true;
            timeoutId = setTimeout(typeText, 5000); // Pause for 5 seconds before deleting
          }
        } else {
          if (currentIndex > 0) {
            setTypedText(thankYouMessage.slice(0, currentIndex));
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
    }
  }, [inView]);

  return (
    <div className="min-h-screen bg-terminal-black text-matrix-green p-4 pb-24">
      <BackButton />
      <animated.div
        ref={ref}
        style={animation}
        className="container mx-auto mt-8 px-4 max-w-3xl"
      >
        <div className="border-2 border-matrix-green bg-terminal-black/30 rounded-lg p-5 backdrop-blur-sm">
          <h2 className="text-matrix-green text-xl font-mono mb-4 border-b-2 border-matrix-green pb-2">{'> About_Me'}</h2>
          <div className="max-w-2xl mx-auto space-y-3 prose prose-invert">
            <p className="text-[#50fa7b] leading-relaxed text-sm">
              Hey, I'm Adonay. I'm a 21 year old self-taught programmer with a deep passion for Artificial Intelligence and Machine Learning. Every day I feel fascinated by AI since studying this field has established both my determination and my sense of purpose.
            </p>
            
            <p className="text-[#50fa7b] leading-relaxed text-sm">
              Born and raised in Ethiopia, I had limited exposure to formal computer science education. Despite challenges, I taught myself to code and became captivated by how technology can transform lives. Every small achievement fueled my curiosity and drive.
            </p>
            
            <p className="text-[#50fa7b] leading-relaxed text-sm">
              My present goal is to establish an AI and ML career because I want to close technological disparities particularly within neglected geographical areas. AI possesses the capability to transform technology, healthcare and agriculture and education and I intend to participate in this transformative change process.
            </p>
            
            <p className="text-[#50fa7b] leading-relaxed text-sm">
              Learning on my own hasn’t always been easy, but every project I finish and every line of code I write feels like a step closer to my dreams. This journey has taught me so much—how to adapt, stay resilient, and keep my eyes on what really matters.
            </p>
            
            <div className="border-t-2 border-matrix-green pt-3 mt-4">
              <p className="text-matrix-green font-mono text-sm">
                {typedText}<span className="animate-pulse"> _</span>
              </p>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default AboutMe;
