// src/components/ui/button.tsx
import React from "react";

// Tipuri de props pentru buton
interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

// Componenta Button
const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
