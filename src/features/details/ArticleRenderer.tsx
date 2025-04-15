import React from "react";

type ContentBlock = {
  paragraph?: string;
  title?: string;
  image?: string;
  video?: {
    url: string;
    title: string;
  };
  caption?: string;
  quote?: string;
  list?: string[];
  link?: {
    text: string;
    url: string;
  };
};

type Article = {
  title: string;
  author: string;
  publishDate: string;
  tags: string[];
  mainImage: string;
  content: ContentBlock[];
};

type Props = {
  article: Article;
};

const ArticleRenderer: React.FC<Props> = ({ article }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 prose prose-neutral dark:prose-invert">
      {/* Title & Metadata */}
      <h1 className="text-green-200">{article.title}</h1>
      <p className="text-sm text-gray-300">
        Por {article.author} —{" "}
        {new Date(article.publishDate).toLocaleDateString()}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2 mb-6">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Main Image */}
      <img
        src={article.mainImage}
        alt="Main visual"
        className="w-full rounded-xl shadow mb-6"
      />

      {/* Content Blocks */}
      {article.content.map((block, index) => (
        <div key={index} className="mb-8">
          {block.title && (
            <h2 className="text-xl text-gray-300 font-semibold">
              {block.title}
            </h2>
          )}
          {block.paragraph && (
            <p className="text-gray-500">{block.paragraph}</p>
          )}
          {block.image && (
            <figure>
              <img
                src={block.image}
                alt={block.caption || "Ilustración"}
                className="rounded-lg shadow"
              />
              {block.caption && (
                <figcaption className="text-sm text-gray-500 mt-2">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          )}
          {block.quote && (
            <blockquote className="border-l-4 border-green-300 pl-4 italic text-gray-300 dark:text-gray-300">
              {block.quote}
            </blockquote>
          )}
          {block.list && (
            <ul className="list-disc text-gray-300 list-inside mt-2">
              {block.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {block.link && (
            <a
              href={block.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-green-600 dark:text-green-400 underline"
            >
              🔗 {block.link.text}
            </a>
          )}

          {block.video && (
            <div key={block.video.title} className="my-6 aspect-video">
              <iframe
                src={
                  block.video.url.includes("youtube.com/watch")
                    ? block.video.url.replace("watch?v=", "embed/")
                    : block.video.url
                }
                title={`video-${block.video.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleRenderer;
