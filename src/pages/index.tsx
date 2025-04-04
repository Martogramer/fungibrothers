import React from "react";
import HeroSection from "@/components/sections/HeroSectionStore";
import { Model3DViewer } from "@/components/custom/ModeloConManejoDeErrores/Model3D";

/* --- 
  --- Despues del segundo despliegue se deberìa implementar Analytics de Vercel.
 --- */

const Home: React.FC = () => {
  return (
    <>
      <HeroSection
        backgroundUrl=""
        title="VOLTECH⚡"
        primaryAction={{ text: "Ver Productos", href: "/store" }}
        secondaryAction={{ text: "Contacto", href: "https://wa.me/5493492524734" }}
      >
          <Model3DViewer modelPath="models/smartwatch.glb" />
      </HeroSection>
    </>
  );
};

export default Home;
