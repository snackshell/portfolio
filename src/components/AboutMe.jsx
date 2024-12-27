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
              Hi, I'm Adonay! I'm 21 years old and a self-taught programmer with a big passion for Artificial Intelligence and Machine Learning. I love AI... it fascinates me every single day. My journey into this field hasn't been easy, but the challenges I've faced have only made me more determined and given me a clear sense of purpose.
            </p>
            
            <p className="text-[#50fa7b] leading-relaxed text-sm">
              I was born and raised in Tigray, Ethiopia. Growing up, I didn't have much exposure to formal computer science. When I reached grade 12, life threw some big obstacles my way. The COVID-19 pandemic hit, followed by local conflicts, and schools were shut down for nearly four years. It felt like my future was slipping away.
            </p>
            
            <p className="text-[#50fa7b] leading-relaxed text-sm">
              But instead of giving up, I focused on what I could control. I started teaching myself how to code and got really curious about how technology could change lives. Learning on my own wasn't easy, especially with limited resources, but every small win felt like a huge step forward.
            </p>
            
            <p className="text-[#50fa7b] leading-relaxed text-sm">
              What started as curiosity has now turned into my mission. I want to build a career in AI and ML to help close the technology gap, especially in regions like mine. I believe AI has incredible potential to improve healthcare, agriculture, and education in underserved communities, and I want to be part of the team making that happen.
            </p>
            
            <p className="text-[#50fa7b] leading-relaxed text-sm">
              Over the past few years, I've stayed committed to learning and growing, even when the road was tough. Every project I finish and every line of code I write brings me closer to my goal. This journey has taught me resilience, adaptability, and the importance of staying focused on my dreams.
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
