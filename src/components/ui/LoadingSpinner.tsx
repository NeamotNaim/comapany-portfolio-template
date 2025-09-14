import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '', 
  fullScreen = true 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const spinner = (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-violet-600 ${sizeClasses[size]} ${className}`} />
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          {spinner}
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
