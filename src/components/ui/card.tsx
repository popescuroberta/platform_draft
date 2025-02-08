// src/components/ui/card.tsx

import React from "react";

// Component pentru card
export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      {children}
    </div>
  );
};

// Component pentru conținutul cardului
export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};
