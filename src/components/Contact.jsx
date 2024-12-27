import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import BackButton from './BackButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 20 }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container mx-auto py-16">
      <div className="flex justify-between items-center px-4 mb-12">
        <h2 className="text-matrix-green text-3xl font-mono">
          {'> Contact_Me'}
        </h2>
        <BackButton />
      </div>
      <animated.div style={formAnimation} className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="space-y-4 text-matrix-green font-mono mb-8">
            <h3 className="text-xl mb-4">{'> Social_Links'}</h3>
            <div className="space-y-2">
              <a 
                href="https://t.me/snackshell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-bright-matrix transition-colors"
              >
                <span>{'> Telegram:'}</span>
                <span className="text-dim-matrix">@snackshell</span>
              </a>
              <a 
                href="https://discord.gg/BBsMbb2K"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-bright-matrix transition-colors"
              >
                <span>{'> Discord:'}</span>
                <span className="text-dim-matrix">aduzvirgo</span>
              </a>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-matrix-green font-mono mb-2">
                {'> Name_'}
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-terminal-black border border-dim-matrix text-matrix-green 
                         p-3 rounded-md focus:border-matrix-green focus:outline-none 
                         transition-colors duration-300 font-mono"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-matrix-green font-mono mb-2">
                {'> Email_'}
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-terminal-black border border-dim-matrix text-matrix-green 
                         p-3 rounded-md focus:border-matrix-green focus:outline-none 
                         transition-colors duration-300 font-mono"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-matrix-green font-mono mb-2">
                {'> Message_'}
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-terminal-black border border-dim-matrix text-matrix-green 
                         p-3 rounded-md focus:border-matrix-green focus:outline-none 
                         transition-colors duration-300 font-mono"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-dim-matrix text-matrix-green border border-matrix-green 
                       hover:bg-matrix-green hover:text-terminal-black font-mono
                       transition-all duration-300 py-3 rounded-md"
            >
              {'> Send_Message'}
            </button>
          </div>
        </form>
      </animated.div>
    </div>
  );
};

export default Contact;
