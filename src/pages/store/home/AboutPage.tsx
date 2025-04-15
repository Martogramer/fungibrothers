import Section from "@/components/sections/Section";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-2">
        <Section reverse>
          <header className="text-right max-w-md ml-auto">
            <h2 className="text-2xl font-display text-gray-300 sm:text-4xl">
              🌿 Sobre nosotros
            </h2>
            <p className="font-sans mt-4 text-gray-400 text-base sm:text-lg">
              Somos una comunidad de apasionados por el Reino Fungi. Desde el arte
              hasta la ciencia, exploramos el poder invisible de los hongos en nuestras
              vidas. Creemos que el micelio no solo conecta árboles, sino también
              personas.
            </p>
          </header>
        </Section>
        <Section>
          <header className="text-left max-w-md mr-auto">
            <h2 className="text-2xl font-display text-gray-300 sm:text-4xl">
              🍄 Nuestra misión
            </h2>
            <p className="font-sans mt-4 text-gray-400 text-base sm:text-lg">
              Queremos revalorizar el conocimiento ancestral de los hongos y conectarlo
              con la ciencia moderna. Promovemos el bienestar físico, mental y espiritual
              a través de la educación, el arte y la micología aplicada.
            </p>
          </header>
        </Section>
        <Section reverse>
          <header className="text-right max-w-md ml-auto">
            <h2 className="text-2xl font-display text-gray-300 sm:text-4xl">
              💡 Lo que hacemos
            </h2>
            <p className="font-sans mt-4 text-gray-400 text-base sm:text-lg">
              Creamos contenido educativo, colaboramos con proyectos de salud y bienestar,
              diseñamos arte inspirado en el micelio y desarrollamos productos que celebran
              el poder del Reino Fungi.
            </p>
          </header>
        </Section>
        <Section>
          <header className="text-left max-w-md mr-auto">
            <h2 className="text-2xl font-display text-gray-300 sm:text-4xl">
              🤝 Conectemos
            </h2>
            <p className="font-sans mt-4 text-gray-400 text-base sm:text-lg">
              Ya seas micólogo, artista, terapeuta, curioso o cultivador: este espacio es
              para ti. Fungi Brothers es más que un proyecto, es una red viva.
              ¿Te unes al micelio?
            </p>
          </header>
        </Section>
      </div>
    </div>
  );
};

export default AboutUs;
