import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  backgroundUrl: string;
  title: string;
  children?: React.ReactNode;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction: {
    text: string;
    href: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundUrl,
  title,
  primaryAction,
  secondaryAction,
  children
}) => {
  return (
    <section
      className={`relative bg-[url(${backgroundUrl})] bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 to-gray-900/25"></div>

     <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen lg:flex lg:items-center lg:justify-center">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            {title}
          </h1>
          <div className="mt-4">
            {children}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to={primaryAction.href}
              className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              {primaryAction.text}
            </Link>

            <Link
              to={secondaryAction.href}
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              {secondaryAction.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
