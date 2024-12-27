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

  return (
    <div ref={ref} className="container mx-auto px-4 py-16">
      <h2 className="text-matrix-green text-3xl font-mono mb-12">
        {'> Skills_'}
      </h2>
      <div className="grid gap-6 max-w-3xl mx-auto">
        {trail.map((props, index) => (
          <animated.div
            key={skills[index].name}
            style={props}
            className="skill-card"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-matrix-green font-mono">
                {`> ${skills[index].name}`}
              </span>
              <span className="text-dim-matrix font-mono">
                {`${skills[index].level}%`}
              </span>
            </div>
            <div className="h-2 bg-terminal-black rounded-full overflow-hidden">
              <animated.div
                style={{
                  width: inView ? `${skills[index].level}%` : '0%',
                  transition: 'width 1s ease-out'
                }}
                className="h-full bg-matrix-green"
              />
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
