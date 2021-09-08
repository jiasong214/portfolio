import spotify_img1 from './assets/spotify_screenshot1.png';
import spotify_img2 from './assets/spotify_screenshot2.png';

import violinStore_img1 from './assets/violin-store_mobile1.png';
import violinStore_img2 from './assets/violin-store_mobile2.png';
import violinStore_img3 from './assets/violin-store_mobile3.png';
import violinStore_video1 from './assets/violin-store_video.mp4';

import test from './assets/mock-up.jpeg';

const works = [
  {
    id: "planner",
    title: "Planner",
    thumbnail: test,
    casestudy: "/casestudy/planner",
    tech: "Node.js, React, Redux-Saga, Meterial UI",
    demo: "jiasong214.github.io/planner-client",
    github: "github.com/jiasong214/planner-client",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis labore asperiores iusto. Etaque maxime eveniet cumque omnis. Aspernatur dicta nobis rem.",
    screenshot: [
      [
        {img: spotify_img1}
      ],
      [
        {img: spotify_img2}
      ],
    ],
    text: [
      {
        title: "About",
        para: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed facere porro rem deserunt minus accusantium eum unde vitae excepturi, hic fuga! Voluptate quo similique, tempore nesciunt dolorem error hic.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed facere porro rem deserunt minus accusantium eum unde vitae excepturi, hic fuga! Voluptate quo similique, tempore nesciunt dolorem error hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at eum officia, optio deleniti provident fugiat sint nostrum nulla et harum molestias itaque sapiente expedita! Error consequatur consequuntur at placeat!"
        ]
      },
      {
        title: "Problem",
        para: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed facere porro rem deserunt minus accusantium eum unde vitae excepturi, hic fuga! Voluptate quo similique, tempore nesciunt dolorem error hic.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed facere porro rem deserunt minus accusantium eum unde vitae excepturi, hic fuga! Voluptate quo similique, tempore nesciunt dolorem error hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at eum officia, optio deleniti provident fugiat sint nostrum nulla et harum molestias itaque sapiente expedita! Error consequatur consequuntur at placeat!"
        ]
      }
    ]
  },
  {
    id: "blog",
    title: "Blog",
    thumbnail: test,
    casestudy: "/casestudy/blog",
    tech: "Node.js, React, Sass",
    demo: "jiasong214.github.io/blog-client",
    github: "github.com/jiasong214/blog-client",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis labore asperiores iusto. Etaque maxime eveniet cumque omnis. Aspernatur dicta nobis rem.",
    screenshot: [
      [
        {img: violinStore_img1},
        {img: violinStore_img2},
        {img: violinStore_img3},
      ],
      [
        {video: violinStore_video1}
      ],
    ],
    text: [
      {
        title: "About",
        para: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed facere porro rem deserunt minus accusantium eum unde vitae excepturi, hic fuga! Voluptate quo similique, tempore nesciunt dolorem error hic.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed facere porro rem deserunt minus accusantium eum unde vitae excepturi, hic fuga! Voluptate quo similique, tempore nesciunt dolorem error hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at eum officia, optio deleniti provident fugiat sint nostrum nulla et harum molestias itaque sapiente expedita! Error consequatur consequuntur at placeat!"
        ]
      }
    ]
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    thumbnail: test,
    casestudy: "/casestudy/violin-store",
    tech: "",
    demo: "jiasong214.github.io/music-app",
    github: "github.com/jiasong214/music-app",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis labore asperiores iusto. Etaque maxime eveniet cumque omnis. Aspernatur dicta nobis rem.",
    screenshot: [
      [
        {img: spotify_img1}
      ],
      [
        {img: spotify_img2}
      ],
    ],
    text: [
      {
        title: "About",
        para: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed facere porro rem deserunt minus accusantium eum unde vitae excepturi, hic fuga! Voluptate quo similique, tempore nesciunt dolorem error hic.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed facere porro rem deserunt minus accusantium eum unde vitae excepturi, hic fuga! Voluptate quo similique, tempore nesciunt dolorem error hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at eum officia, optio deleniti provident fugiat sint nostrum nulla et harum molestias itaque sapiente expedita! Error consequatur consequuntur at placeat!"
        ]
      }
    ]
  },
  {
    id: "violin-store",
    title: "Violin Store",
    thumbnail: test,
    casestudy: "/casestudy/violin-store",
    tech: "ES6, Sass",
    demo: "jiasong214.github.io/violin-store",
    github: "github.com/jiasong214/violin-store",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis labore asperiores iusto. Etaque maxime eveniet cumque omnis. Aspernatur dicta nobis rem.",
    screenshot: [
      [
        {img: violinStore_img1},
        {img: violinStore_img2},
        {img: violinStore_img3},
      ],
      [
        {video: violinStore_video1}
      ],
    ],
    text: [
      {
        title: "About",
        para: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed facere porro rem deserunt minus accusantium eum unde vitae excepturi, hic fuga! Voluptate quo similique, tempore nesciunt dolorem error hic.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed facere porro rem deserunt minus accusantium eum unde vitae excepturi, hic fuga! Voluptate quo similique, tempore nesciunt dolorem error hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at eum officia, optio deleniti provident fugiat sint nostrum nulla et harum molestias itaque sapiente expedita! Error consequatur consequuntur at placeat!"
        ]
      }
    ]
  },
]

export default works;