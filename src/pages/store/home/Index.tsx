import React from "react";
import StoreHomePage from "./StoreHomePage";
import ImageContainer from "@/components/_Customs2024/LazyImage";
import DetailUse from "@/features/filters/DetailUse";
import HeroHomeStore from "@/features/heros/HeroHomeStore";

const Index: React.FC = () => {
  return (
    <>
      <ImageContainer />
      <HeroHomeStore />
      <DetailUse />
      <StoreHomePage />
    </>
  );
};

export default Index;
