import ArticleRenderer from '@/features/details/ArticleRenderer';
import  psilocibina from "@/mocks/psilocibina.json";
import React from 'react'

const Psilocibina: React.FC = () => {
    return <ArticleRenderer article={psilocibina} />;
  };

export default Psilocibina;
