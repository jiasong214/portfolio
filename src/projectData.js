import spotify_thumbnail from 'assets/thumbnail/spotify_thumbnail.png';
import spotify_img1 from 'assets/screenshot/spotify1.png';
import spotify_img2 from 'assets/screenshot/spotify2.png';
import spotify_img3 from 'assets/screenshot/spotify3.png';

import violinStore_thumbnail from 'assets/thumbnail/violin-store-thumbnail2.png';
import violinStore_1 from "assets/screenshot/violin-store1.png";
import violinStore_2 from "assets/screenshot/violin-store2.png";
import violinStore_3 from "assets/screenshot/violin-store3.png";
import violinStore_mobile1 from 'assets/screenshot/violin-store_mobile1.png';
import violinStore_mobile2 from 'assets/screenshot/violin-store_mobile2.png';
import violinStore_mobile3 from 'assets/screenshot/violin-store_mobile3.png';
import violinStore_video1 from 'assets/screenshot/violin-store_video.mp4';


import javascript from 'assets/stack_icon/javascript.png';
import sass from 'assets/stack_icon/sass.png';
import materialUI from 'assets/stack_icon/materialUI.png';
import react from 'assets/stack_icon/react.png';
import redux from 'assets/stack_icon/redux.png';
import reduxSaga from 'assets/stack_icon/redux-saga.png';
import node from 'assets/stack_icon/node.png';
import mysql from 'assets/stack_icon/mysql.png';

import test from 'assets/mock-up.jpeg';

const works = [
  {
    id: "planner",
    title: "Planner",
    thumbnail: test,
    project: "/project/planner",
    stack: "Node.js | React | Redux-Saga | Material UI",
    stackIcon: [
      react,
      redux,
      reduxSaga,
      materialUI,
      node,
      mysql,
    ],
    demo: "https://jiasong214.github.io/planner-client",
    github: "https://github.com/jiasong214/planner-client",
    summary: "Personal planner to help with my busy schedule, built with Express.js, mySQL, React, Redux, and SASS",
    screenshot: {
      mobile: [

      ],
      pc: [
        spotify_img1,
        spotify_img2,
        spotify_img3
      ]
    },
    text: [
      {
        title: "About",
        para: [
          "Planner is a personal scheduler web-app in which users can sign-in and start managing their schedules. They can do things like creating to-dos with information such as date, priority, and project, as well as create their own projects in order to categorize their to-dos.",
          "Planner will present the user with what they need to do according to the date and projects."
        ]
      },
      {
        title: "Project Purpose and Outcome",
        para: [
          "I had long needed a scheduling app to help organize my busy week and competing schedules. I am a person that likes to be on top of things and well organized. I looked around for an app that would best suit my needs and decided to build one instead, serving as an excellent learning opportunity.",
          "Throughout the creation of this project I faced many challenges and gained a wealth of valuable skills and knowledge. I developed a solid understanding of how to create a backend using Express.js and mySQL as the database, using JWT tokens for authentication, as well as React, Redux, Redux-Saga, and material-UI in the front end. As a result, Planner is now a web-app that has become a part of my daily routine, and I have plans to develop new features such as team inter-connectivity, and I would like to implement it using typescript."
        ]
      },
      {
        title: "Web stack",
        para: [
          "The back-end is built using Express.js and mySQL. In the database, I created two tables, one for users and one for to-dos, and joined them using user Id as the primary key. As a result, when a user logs in, the user can see all the to-dos they have created. As for the login system, I used JWT authentication.",
          "The front-end I implemented using React. I used Redux to manage states, and used Redux-Saga to handle API calls. For the styling, I made teh decision to use material-UI."
        ]
      }
    ]
  },
  {
    id: "blog",
    title: "Blog",
    thumbnail: test,
    project: "/project/blog",
    stack: "Node.js | React | Sass",
    stackIcon: [
      node,
      mysql,
      react
    ],
    demo: "https://jiasong214.github.io/blog-client",
    github: "https://github.com/jiasong214/blog-client",
    summary: "Personal developer blog page in which I detail, through blog posts, the process of building the page, as well as the difficulties I faced and how I overcame them.",
    screenshot: {
      mobile: [

      ],
      pc: [
        spotify_img1,
        spotify_img2,
        spotify_img3
      ]
    },
    text: [
      {
        title: "About",
        para: [
          "This is a personal blog website that I can login and write posts. I can write or edit a post with a markdown text-editor, and readers can write comments. When users visit the blog page, posts are loaded using infinite scroll.",

        ]
      },
      {
        title: "Project Purpose and Outcome",
        para: [
          "This is is the first full-stack website that I created. I wanted to gain a deeper understanding of web flows, and more generally about the client-server interaction, and REST APIs. Therefore, I decided to build a simple blog website, with which I could document, through blog posts, the entire process of building the website, detailing the problems faced, how I overcame them, the decisions I made and why I made them, etc.",

          "Upon completion, I have gained valuable insight into the client-server model, and how to implement a full-stack website using a javascript stack. I am currently still documenting the entire process through blog posts, which I can use for self reflection, and I hope can be insightful for future readers."
        ]
      },
      {
        title: "Web Stack",
        para: [
          "The back-end is built using Express.js and mySQL as the database. In order to write better, more manageable code, I adopted an MVC pattern.",
          "The Front-end is built using React. To create the markdown editor for writing posts, I used the react-markdown library, and for posting comments I used the library github-?. I decided to host the server on Heroku."
        ]
      },
    ]
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    thumbnail: spotify_thumbnail,
    project: "/project/spotify-clone",
    stack: "React | Redux | Redux-thunk | Sass",
    stackIcon: [
      react,
      redux
    ],
    demo: "https://jiasong214.github.io/spotify-clone",
    github: "https://github.com/jiasong214/spotify-clone",
    summary: "Spotify clone app, with authentication, playlist, and song playing functionality. Developed using React.",
    screenshot: {
      mobile: [

      ],
      pc: [
        spotify_img1,
        spotify_img2,
        spotify_img3
      ]
    },
    text: [
      {
        title: "About",
        para: [
          "Spotify clone is a spotify-like web page that is built using the  spotify API. With this website, users can log-in and use the webpage just like the real Spotify app. They can check their playlist, like songs or albums, and play songs for 30 sec (limitation set by Spotify API)."
        ]
      },
      {
        title: "Project Purpose and Outcome",
        para: [
          "I built this project with the purpose of improving my React skills, and in particular, to learn about state management using Redux, as well as further solidifying my ability to use REST APIs.",
          "Throughout the process I built on my abilities to use REST APIs, as well as gaining a deep understanding of state management using Redux. At first using the Spotify API was difficult, however after reading the official documentation I was able to grasp how to use it, and as a bonus I learnt about JWT tokens and their use."
        ]
      },
      {
        title: "Web Stack",
        para: [
          "I built the site using React, with Redux for state management. In the redux store, I manage the global state which is contains the user and song play state, in order to not have to pass states all the way down to the last child.",
          "For data fetching I used the Spotify API."
        ]
      }
    ]
  },
  {
    id: "violin-store",
    title: "Violin Store",
    thumbnail: violinStore_thumbnail,
    project: "/project/violin-store",
    stack: "ES6 | Sass",
    stackIcon: [
      javascript,
      sass
    ],
    demo: "https://jiasong214.github.io/violin-store",
    github: "https://github.com/jiasong214/violin-store",
    summary: "Responsive interactive web app inspired by Apple's page design. Build with vanilla javascript, and SASS.",
    screenshot: {
      mobile: [
        violinStore_mobile1,
        violinStore_mobile2,
        violinStore_mobile3,
      ],
      pc: [
        violinStore_1,
        violinStore_2,
        violinStore_3,
      ]
    },
    text: [
      {
        // title: "About",
        para: [
          "The Violin store is a vanilla javascript website whose main focus is interactive animations. I built this page after being inspired by Apple's product page. Basically, I calculated the position and ratio of every object requiring animation depending on the section's scroll height, and animated accordingly as the user scrolls. Additionally, I implemented a shopping cart function so the user can add a violin to the cart.",
        ]
      },
      {
        title: "Project Purpose and Outcome",
        para: [
          "I have always loved the design and functionality of Apple's product pages, so I decided to take it upon myself to learn how to create such beautiful websites. With that in mind, I started this project with the goal of improving my front-end design, and javascript skills. I knew that I could make it entirely using external javascript libraries. However before using those, I wanted to understand exactly how to do it with vanilla javascript.",
          
          "Throughout the process of making this project, I developed a solid understanding of how to create pixel perfect, smooth animations using javascript, SVGs, and mathematical calculations. "
        ]
      },
      {
        title: "Web stack",
        para: [
          "Since the purpose of the project was to not use any external javascript libraries for animations, I used vanilla javascript and sass. In the future, I will endeavour to recreate the website using external javascript libraries, in order to learn how to use them.",


          // "that i can divide with each animate section, and calculate scroll percentage in each section when scroll event is call. So I made a object to store all animated objects information like start/end point and translation pixel?. And i made a function that will calculate scroll percentage in each section, and with that objects move depend on information in store object. I also used HTML Canvas and some SVG to implement smooth animation. And for shopping cart, i used local storage to remember? visited customer. "
        ]
      }
    ]
  },
]

export default works;