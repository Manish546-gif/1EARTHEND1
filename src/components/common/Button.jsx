import React from 'react';

const Button = () => {
  return (
    <button className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white px-8 py-3 rounded-lg transition-colors duration-300 group">
      <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
        Click on me
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
        Click on me
      </span>
    </button>
  );
};

export default Button;