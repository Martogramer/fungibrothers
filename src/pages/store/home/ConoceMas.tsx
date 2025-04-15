import React from "react";
import  reinofungi from "@/mocks/reinofungi.json"; // o directamente pasarlo como prop
import ArticleRenderer from "@/features/details/ArticleRenderer";

const ArticlePage: React.FC = () => {
    return <ArticleRenderer article={reinofungi} />;
  };

export default ArticlePage;
