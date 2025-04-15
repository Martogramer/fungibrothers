// src/components/ShimmerCard.tsx
import React from "react";
import { Shimmer } from "@/styles/shimmer";

interface ShimmerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  children?: React.ReactNode;
  animationDuration?: string;
  borderRadius?: string;
}

const ShimmerCard: React.FC<ShimmerCardProps> = ({
  title,
  description,
  animationDuration = "2s",
  borderRadius = "1rem", // rounded-xl por defecto
  className = "",
  style,
  children,
  ...props
}) => {
  return (
    <div
      className={`p-6 shadow-lg text-white transition-all hover:scale-[1.02] ${className}`}
      style={{
        ...Shimmer.shimmerAnimation,
        animationDuration,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-300 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default ShimmerCard;
