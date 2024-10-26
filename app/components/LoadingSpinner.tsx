import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-sm z-50">
      <img src="/om1.png" alt="Loading..." className="w-22 h-22 animate-spin" />
    </div>
  );
};

export default LoadingSpinner;