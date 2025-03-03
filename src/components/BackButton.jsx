import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate('/')}
      className="px-6 py-3 border border-matrix-green text-matrix-green 
               hover:bg-matrix-green hover:text-terminal-black transition-all duration-300
               font-mono rounded"
    >
      {'> Back_'}
    </button>
  );
};

export default BackButton; 