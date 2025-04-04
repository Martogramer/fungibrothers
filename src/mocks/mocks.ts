// src/mocks/mocks.ts
interface Product {
  id: number;
  name: string;
  category: string;
  tags?: string[];
  price: number;
  imageUrl?: string[];
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  tags: string[];
  imageUrl?: string;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "M20 Ovni - BT WIRELESS",
    imageUrl:[
      "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720622439/damax_cf9zcd.jpg?_s=public-apps",
    ],
    category: "Auriculares",
    price: 1999.99,
  },
  {
    id: 2,
    name: "T900 Pro Max",
    imageUrl:[ "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720620632/w26-removebg-preview_n5h2kc.jpg?_s=public-apps",
      "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720620616/t900-pro-max-serie8-removebg-preview_h2znvz.jpg?_s=public-apps",
    ],
    category: "SmartWatchs",
    price: 19999,
  },
  {
    id: 3,
    name: "Watch 8 Ultra",
    imageUrl:[ "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720620658/watch8ultra_jkfwof.jpg?_s=public-apps",],
    category: "SmartWatchs",
    price: 23600,
  },
  {
    id: 4,
    name: "C1 PLUS Curvo",
    imageUrl:[ "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720620703/C1PLUSCURVO-removebg-preview_wuooyw.jpg?_s=public-apps",],
    category: "SmartWatchs",
    price: 14000,
  },
  {
    id: 5,
    name: "M90",
    imageUrl:[ 
      "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720620729/m90pa-removebg-preview_hy8kw9.jpg?_s=public-apps",],
    category: "Auriculares",
    price: 17000,
  },
  {
    id: 6,
    name: "M36 DAMIX V5.2",
    imageUrl:[ 
      "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720620757/m36-_yqdisf.jpg?_s=public-apps",],
    category: "Auriculares",
    price: 17000,
  },
  {
    id: 7,
    name: "116 PLUS",
    imageUrl:[ 
      "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1721083389/116_plus_icf3w2.jpg?_s=public-apps",
      "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1721083397/116_PLUS_APPS_ib9el0.jpg?_s=public-apps",
      "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1721083403/116_PLUS_2_a4fg20.jpg?_s=public-apps",
    ],
    category: "SmartWatchs",
    price: 17000,
  },
  {
    id: 8,
    name: "M19 BT Wireless",
    imageUrl:[ 
      "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1721086415/m19-_gboycs.jpg?_s=public-apps",
      "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1721086455/m19_ug2uug.jpg?_s=public-apps",
    ],
    category: "Auriculares",
    price: 15000,
  },
  /* {
    id: ,
    name: "",
    imageUrl:[ "",],
    category: "",
    price: ,
  }, */
];

export const mockBlogPosts: BlogPost[] = [
  /* {
    id: 1,
    title: "10 Tips for Productive Remote Work",
    content:
      "Working from home can be challenging, but with these tips, you can boost your productivity...",
    tags: ["Remote Work", "Productivity"],
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence",
    content:
      "AI is rapidly evolving. In this post, we explore the potential future applications and implications...",
    tags: ["Technology", "AI"],
  }, */
];
