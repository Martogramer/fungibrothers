import React from "react";

interface Props {
  children: React.ReactNode;
}

const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="text-primary-foreground min-h-screen"
      style={{
        background: "radial-gradient(circle at bottom left, #1e293b 0%, #0f172a 40%, #000000 100%)",
      }}
    >
      {children}
    </div>
  );
};

export default LayoutMain;
