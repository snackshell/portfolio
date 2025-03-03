import React from 'react';
    import { useSpring, animated } from '@react-spring/web';

    const About = () => {
      const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
      });

      return (
        <animated.section style={fadeIn} className="relative z-10 py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-4">
              I'm Adonay Solomon, a 21-year-old AI developer from Ethiopia.
              My passion lies in creating innovative solutions using artificial intelligence.
            </p>
            <h3 className="text-2xl font-semibold mb-4">What drives me?</h3>
            <ul className="list-none text-lg">
              <li className="mb-2">- Crafting AI-powered experiences</li>
              <li className="mb-2">- Pushing the boundaries of technology</li>
              <li>- Bringing Ethiopian innovation to the global tech scene</li>
            </ul>
          </div>
        </animated.section>
      );
    };

    export default About;
