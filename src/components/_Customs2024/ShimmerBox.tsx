// src/components/ShimmerBox.tsx
import React from "react";
import { shimmerStyles } from "@/styles/shimmer";

interface ShimmerBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animationDuration?: string;
  borderRadius?: string;
}

const ShimmerBox: React.FC<ShimmerBoxProps> = ({
  children,
  animationDuration = "2s",
  borderRadius = "0.75rem", // default rounded-lg
  style,
  className,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        ...shimmerStyles.shimmerAnimation,
        animationDuration,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ShimmerBox;
