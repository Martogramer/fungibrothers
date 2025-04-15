import Section from "@/components/sections/Section";
import React from "react";

const HeroHomeStore: React.FC = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-2">
        <Section reverse>
          <header className="text-right max-w-md ml-auto">
            <h2 className="text-xl font-display text-gray-300 sm:text-4xl">
              🧠 Hongos: el Internet del bosque
            </h2>
            <p className="font-sans mt-4 max-w-md text-base sm:text-lg text-gray-500">
              El micelio es tan complejo que muchos científicos lo llaman el
              "Internet natural del bosque". A través de él, los árboles pueden
              comunicarse Y compartir nutrientes.
            </p>
          </header>
        </Section>
        <Section>
          <header className=" max-w-md ml-auto text-left">
            <h2 className="text-xl font-display text-gray-300 sm:text-3xl">
              🍄 ¿Qué son los hongos realmente?
            </h2>

            <p className="font-sans mt-4 max-w-md text-base sm:text-lg text-gray-500 ">
              Los hongos no son plantas ni animales. Pertenecen a su propio
              reino biológico el Reino Fungi, y agrupan más de 5 millones de
              especies estimadas, aunque solo unas 150.000 han sido descritas
              oficialmente.
              <br />
            </p>
          </header>
        </Section>
        <Section reverse>
          <header className="text-right max-w-md ml-auto">
            <h2 className="text-xl font-display text-gray-300 sm:text-3xl">
              🔬 Propiedades medicinales
            </h2>

            <p className="font-sans mt-4 max-w-md text-base sm:text-lg text-gray-500 ">
              🧠 Melena de León: estimula el crecimiento neuronal y mejora la
              memoria
              🦠Reishi: modula el sistema inmunológico y reduce el estrés
              ⚡Cordyceps: incrementa la energía y la capacidad respiratoria
              <br />
              <br />
            </p>
          </header>
        </Section>
        <Section >
          <header className="text-left max-w-md ml-auto">
            <h2 className="text-xl font-display text-gray-300 sm:text-3xl">
            🧪 Datos curiosos 
              </h2>

            <p className="font-sans mt-4 max-w-md text-base sm:text-lg text-gray-500 ">
              🍕 El hongo más grande del mundo se encuentra en Oregón, EE.UU., 
              ¡y mide casi 10 km²!
              🌋 Algunos hongos pueden sobrevivir en ambientes
              radiactivos. 
              👽 Los científicos estudian hongos para entender
              cómo podría existir vida en otros planetas.
              <br />
            </p>
          </header>
        </Section>
      </div>
    </div>
  );
};

export default HeroHomeStore;
