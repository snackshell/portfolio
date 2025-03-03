import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-terminal-black/80 backdrop-blur-sm border-t border-matrix-green/30 p-4">
      <div className="container mx-auto flex justify-between items-center text-sm text-matrix-green/80 font-mono">
        <div className="flex items-center gap-2">
          Made with <span className="text-matrix-green">💚</span> & <span className="text-matrix-green">☕</span> © 2024 snackshell.work
        </div>
        <div className="flex items-center">
          Updated : Dec 27 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
