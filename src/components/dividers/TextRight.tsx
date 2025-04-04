import React from "react";
interface props { 
  text: string;
}
const TextRight: React.FC<props> = ({text}) => {
  return (
    <span className="flex items-center">
      <span className="h-px flex-1 bg-black"></span>
      <span className="shrink-0 px-6">{text}</span>
      <span className="h-px flex-1 bg-black"></span>
    </span>
  );
};

export default TextRight;
