import React, { useRef, useState } from 'react';

interface ServiceCard3DProps {
  children: React.ReactNode;
  className?: string;
  rotateDepth?: number;
  translateDepth?: number;
}

const ServiceCard3D: React.FC<ServiceCard3DProps> = ({
  children,
  className = '',
  rotateDepth = 15,
  translateDepth = 10,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / rect.height) * rotateDepth;
    const rotateY = (mouseX / rect.width) * -rotateDepth;
    const translateX = (mouseX / rect.width) * translateDepth;
    const translateY = (mouseY / rect.height) * translateDepth;
    
    // Calculate glare position
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) scale(1.05)`
    );
    setGlarePosition({ x: glareX, y: glareY });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) scale(1)');
    setGlarePosition({ x: 50, y: 50 });
    setIsHovered(false);
  };

  return (
    <div className={`transform-gpu transition-all duration-300 ${className}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative transform-gpu transition-all duration-300 ease-out"
        style={{
          transform,
          transformStyle: 'preserve-3d',
          boxShadow: isHovered 
            ? 'rgba(0, 0, 0, 0.1) 0px 20px 40px 0px, rgba(0, 0, 0, 0.15) 0px 10px 20px 0px'
            : 'rgba(0, 0, 0, 0.05) 0px 5px 15px 0px',
        }}
      >
        {children}
        
        {/* Glare Effect */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0) 60%)`,
            opacity: isHovered ? 0.8 : 0,
            mixBlendMode: 'overlay',
          }}
        />
      </div>
    </div>
  );
};

export default ServiceCard3D;
