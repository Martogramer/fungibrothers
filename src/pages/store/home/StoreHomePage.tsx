import React from "react";
import { NavLink } from "react-router-dom";

interface DeveloperCardProps {
  imageSrc: string;
  title: string;
  description: string;
  to: string;
  category: string;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({
  imageSrc,
  title,
  description,
  to,
  category,
}) => (
  <NavLink to={to} className="group relative block bg-black">
    <img
      alt={title}
      src={imageSrc}
      className="absolute aspect-square inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-50"
    />

    <div className="relative p-4 sm:p-6 lg:p-4">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
        {category}
      </p>

      <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

      <div className="mt-32 sm:mt-48 lg:mt-64">
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  </NavLink>
);

const DeveloperCardVariant: React.FC<DeveloperCardProps> = ({
  imageSrc,
  title,
  description,
  category,
  to,
}) => (
  <NavLink to={to} className="group relative block bg-black">
    <img
      alt={title}
      src={imageSrc}
      className="absolute aspect-square inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-50"
    />

    <div className="relative p-4 sm:p-9 lg:p-8">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
        {category}
      </p>

      <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

      <div className="mt-32 sm:mt-48 lg:mt-64">
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  </NavLink>
);

const StoreHomePage: React.FC = () => {
  const BannersLinks = [
    {
      imageSrc:
        "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720209841/4_zwgayo.jpg?_s=public-apps",
      category: "accesorios",
      title: "Smartwatchs",
      to: "#",
      description:
        "🕒  Descubre la última tecnología para llevar en tu muñeca. Dispositivos inteligentes diseñados para adaptarse a tu estilo de vida.",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720209801/5_jxzdsx.jpg?_s=public-apps",
        category: "indumentaria",
        title: "Branding en remeras",
        to: "#",
        description:
          "👚  Remeras oversize, una fusión perfecta de estilo y comodidad. Ideal para cualquier ocasión.",
      },
      {
        imageSrc:
        "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720210698/3_ao69jg.jpg?_s=public-apps",
      category: "accesorios",
      title: "Auriculares inalámbricos",
      to: "#",
      description:
      " 🎧 Sumérgete en un mundo de música sin límites con nuestros auriculares inalámbricos.",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720209801/1_pkqwr9.jpg?_s=public-apps",
      category: "Tecnología",
      title: "Combos perfectos",
      to: "#",
      description:
        "👕 Añade un toque de estilo relajado a tu guardarropa con nuestros buzos oversize.",
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-2">
        <ul className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {BannersLinks.slice(0, 2).map((dev, index) => (
            <li key={index}>
              <DeveloperCard {...dev} />
            </li>
          ))}
          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-1 lg:row-start-1">
            <DeveloperCardVariant {...BannersLinks[2]} />
          </li>
          <li className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-2">
            <DeveloperCardVariant {...BannersLinks[3]} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StoreHomePage;
