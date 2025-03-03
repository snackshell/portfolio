import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import BackButton from './BackButton';

const Projects = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  const tapScale = useSpring({ scale: 1, rotateZ: 0 });

  const projects = [
    {
      title: 'Hacker News Telegram Bot',
      description: 'A Telegram bot that delivers curated Hacker News content directly to users, featuring real-time updates and customizable notifications.',
      image: '/hacker-news-bot.png',
      github: 'https://github.com/snackshell/Hacker-News-Bot',
      demo: 'https://t.me/HackersNews_Bot',
      tech: ['Python', 'Telegram API', 'Web Scraping']
    },
    {
      title: 'ConnectSphere',
      description: 'A modern social media platform built with a focus on meaningful connections and user privacy, featuring real-time messaging and content sharing.',
      image: '/ConnectSphere.png',
      github: 'https://github.com/snackshell/ConnectSphere',
      demo: '#',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Telegram ChatGPT Bot',
      description: 'An AI-powered Telegram bot that provides English language learning assistance through ChatGPT integration.',
      image: '/ChatGPT.png',
      github: 'https://github.com/snackshell/ChatGPT-English',
      demo: 'https://t.me/GPT4SparkBot',
      tech: ['Python', 'OpenAI API', 'Telegram Bot API']
    }
  ];

  const handleTap = () => {
    tapScale.start({
      to: async (next) => {
        await next({ scale: 0.95, rotateZ: -5 });
        await next({ scale: 1, rotateZ: 0 });
      },
      config: { duration: 200 },
    });
  };

  return (
    <div className="container mx-auto py-16">
      <div className="flex justify-between items-center px-4 mb-12">
        <h2 className="text-matrix-green text-3xl font-mono">
          {'> Projects_'}
        </h2>
        <BackButton />
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="relative aspect-video mb-4 overflow-hidden rounded">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-terminal-black bg-opacity-30 
                            hover:bg-opacity-0 transition-all duration-300"/>
            </div>
            <h3 className="text-matrix-green text-xl font-mono mb-2">
              {`> ${project.title}`}
            </h3>
            <p className="text-dim-matrix mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-sm text-matrix-green border border-matrix-green px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href={project.demo} className="text-matrix-green hover:underline font-mono">
                {'> Demo'}
              </a>
              <a href={project.github} className="text-matrix-green hover:underline font-mono">
                {'> Code'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
    
