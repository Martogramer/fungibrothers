/* // src/pages/HomeLayout.tsx
import React from "react";
import Section from "@/components/sections/Section";
import { Button } from "@/components/ui/button";

const BlogSection: React.FC = () => {
  return (
    <main className="bg-gray-950 text-white">
      <Section image="/images/hero.jpg">
        
      </Section>

      <Section image="/images/services.jpg" reverse>
        <h2 className="text-3xl font-semibold mb-4 text-slate-100">Nuestros Servicios</h2>
        <ul className="list-disc pl-6 text-slate-400 space-y-2">
          <li>Desarrollo Web y Mobile</li>
          <li>Backends con microservicios</li>
          <li>Automatización DevOps</li>
        </ul>
      </Section>

      <Section image="/images/collaborators.jpg">
        <h2 className="text-3xl font-semibold mb-4 text-slate-100">Colaboradores y Comunidad</h2>
        <p className="text-slate-400 mb-6">
          Invitamos a devs, diseñadores y creadores a ser parte del proyecto. Comparte, aprende y colabora.
        </p>
        <Button variant="secondary">Únete al Discord</Button>
      </Section>

      <Section image="/images/contact.jpg" reverse>
        <h2 className="text-3xl font-semibold mb-4 text-slate-100">Contáctanos</h2>
        <p className="text-slate-400">
          ¿Tienes una idea en mente? Conversemos y hagámosla realidad.
        </p>
      </Section>
    </main>
  );
};

export default BlogSection;
 */