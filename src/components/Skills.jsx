import { useInView } from 'react-intersection-observer';
import { animated, useTrail } from '@react-spring/web';

const skills = [
  { name: 'Machine Learning', level: 90 },
  { name: 'Deep Learning', level: 85 },
  { name: 'Python', level: 95 },
  { name: 'TensorFlow', level: 88 },
  { name: 'PyTorch', level: 82 },
  { name: 'Computer Vision', level: 87 }
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const trail = useTrail(skills.length, {
    from: { opacity: 0, x: -20 },
    to: { opacity: inView ? 1 : 0, x: inView ? 0 : -20 },
    config: { tension: 300, friction: 20 }
  });

  const handleMouseMove = (e, cardElement) => {
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardElement.style.setProperty('--mouse-x', `${x}px`);
    cardElement.style.setProperty('--mouse-y', `${y}px`);
    
    const afterElement = cardElement.querySelector('.skill-glow');
    if (afterElement) {
      afterElement.style.opacity = '1';
      afterElement.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  const handleMouseLeave = (cardElement) => {
    const afterElement = cardElement.querySelector('.skill-glow');
    if (afterElement) {
      afterElement.style.opacity = '0';
    }
  };

  return (
    <div ref={ref} className="container mx-auto px-4 py-16">
      <h2 className="text-terminal-green text-3xl font-jetbrains mb-12">
        {'> Skills_'}
      </h2>
      <div className="grid gap-6 max-w-3xl mx-auto">
        {trail.map((props, index) => (
          <animated.div
            key={skills[index].name}
            style={props}
            className="skill-card group"
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <div className="absolute inset-0 bg-terminal-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-terminal-green font-jetbrains">
                  {`> ${skills[index].name}`}
                </span>
                <span className="text-terminal-dim font-jetbrains">
                  {`${skills[index].level}%`}
                </span>
              </div>
              <div className="h-2 bg-terminal-black rounded-full overflow-hidden">
                <animated.div
                  style={{
                    width: inView ? `${skills[index].level}%` : '0%',
                    transition: 'width 1s ease-out'
                  }}
                  className="h-full bg-terminal-green"
                />
              </div>
            </div>
            <div className="skill-glow absolute w-[100px] h-[100px] bg-[radial-gradient(circle,rgba(0,255,65,0.15)_0%,transparent_70%)] rounded-full pointer-events-none opacity-0 transition-opacity duration-200" />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
