export const shimmerStyles = {
    base: `
      inline-flex h-12 items-center justify-center
      rounded-md border px-6 font-medium
      transition-colors focus:outline-none
      focus:ring-2 focus:ring-offset-2
    `,
    shimmerAnimation: {
      background: 'linear-gradient(110deg,#000103 45%,#1e2631 55%,#000103)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s linear infinite',
    },
  };

  export const Shimmer = {
    shimmerAnimation: {
      background: "linear-gradient(110deg,#1e3a8a 45%,#3b82f6 55%,#1e3a8a)",
      backgroundSize: "200% 100%",
      animation: "shimmer 2s linear infinite",
    },
  };

  export const NebulaStyle = {
    shimmerAnimation: {
      background: "linear-gradient(110deg,#1e3a8a 45%,#3b82f6 55%,#1e3a8a)",
      backgroundSize: "200% 100%",
      animation: "shimmer 2s linear infinite",
    },
    nebula80s: {
      background: `
        radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.25), transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(0, 255, 255, 0.2), transparent 50%),
        linear-gradient(135deg, #0f0c29, #302b63, #24243e)
      `,
      backgroundBlendMode: "screen",
      boxShadow: "0 0 30px rgba(255, 0, 255, 0.2), 0 0 60px rgba(0, 255, 255, 0.2)",
      backgroundSize: "cover",
      animation: "nebulaMove 20s ease-in-out infinite",
    },
  };