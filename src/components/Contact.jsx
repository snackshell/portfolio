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
    
    // Redirect to Spaceship WHOIS contact form
    window.open('https://www.spaceship.com/domains/whois/contact/?d=snackshell.work', '_blank');
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto py-16">
      <div className="flex justify-between items-center px-4 mb-12">
        <h2 className="text-terminal-green text-3xl font-jetbrains animate-matrix-glow">
          {'> Contact_Me'}
        </h2>
        <BackButton />
      </div>
      <animated.div style={formAnimation} className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="space-y-4 text-terminal-green font-jetbrains mb-8">
            <h3 className="text-xl mb-4">{'> Social_Links'}</h3>
            <div className="space-y-2">
              <a 
                href="https://t.me/snackshell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-terminal-green transition-colors"
              >
                <span>{'> Telegram:'}</span>
                <span className="text-terminal-dim">@snackshell</span>
              </a>
              <a 
                href="https://discord.gg/BBsMbb2K"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-terminal-green transition-colors"
              >
                <span>{'> Discord:'}</span>
                <span className="text-terminal-dim">snackshell</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="terminal-container shadow-glow">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-terminal-green font-jetbrains mb-2">
                    {'> Name_'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="terminal-input w-full"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-terminal-green font-jetbrains mb-2">
                    {'> Email_'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="terminal-input w-full"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-terminal-green font-jetbrains mb-2">
                    {'> Message_'}
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    className="terminal-input w-full"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-transparent border-2 border-terminal-green 
                           text-terminal-green font-jetbrains hover:bg-terminal-dim 
                           transition-all duration-300 animate-pulse-glow rounded-md"
                >
                  {'> Send_Message'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </animated.div>
    </div>
  );
};

export default Contact;
