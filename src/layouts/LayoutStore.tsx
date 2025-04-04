import React from "react";
import { Outlet } from "react-router-dom";
import NotificationBar from "@/components/_Customs2024/alerts/NotificationBar";
import Footer from "@/components/footers/Footer";
import {
  Axis3DIcon,
  FileBadge,
  Inspect,
  MessageCircleCodeIcon,
} from "lucide-react";
import SidebarMobileMenu from "@/components/navs/store/Custom2024/SidebarMobileMenuCUSTOM24";

const LayoutStore: React.FC = () => {
  const socialLinks = [
    { href: "#", label: "Facebook", icon: <FileBadge className="h-6 w-6" /> },
    { href: "#", label: "Instagram", icon: <Inspect className="h-6 w-6" /> },
    { href: "#", label: "GitHub", icon: <Axis3DIcon className="h-6 w-6" /> },
    {
      href: "#",
      label: "Reddit",
      icon: <MessageCircleCodeIcon className="h-6 w-6" />,
    },
  ];

  const services = [
    "Smartwatchs",
    "Auriculares",
    "Accesorios",
  ];
  const companyInfo = [
    "Sobre Nosotros",
    "Contactate con el Equipo",
    "Testimoniales",
    "Trabaja con Nosotros",
  ];
  const contactHours = ["Lunes a Viernes: 10am - 5pm", "Sábados: 10am - 3pm"];

  return (
    <div className="">
      <NotificationBar />
      <SidebarMobileMenu />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer
        contactNumber={"CONTACTO"}
        contactHours={contactHours}
        socialLinks={socialLinks}
        services={services}
        companyInfo={companyInfo}
        year={2024}
        companyName="VOLTECH⚡"
      />
    </div>
  );
};

export default LayoutStore;
