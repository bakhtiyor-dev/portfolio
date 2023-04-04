import {v4 as uuidv4} from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Humocommerce",
      category: "Web Application",
      img: "images/humocommerce/humocommerce1.jpg",
      link: "https://humocommerce.com",
      tag: "Web application",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      projectImages: [
        {
          id: uuidv4(),
          title: "image",
          img: "../images/humocommerce/humocommerce1.jpg",
        },
        {
          id: uuidv4(),
          title: "image",
          img: "../images/humocommerce/humocommerce2.jpg",
        },
        {
          id: uuidv4(),
          title: "image",
          img: "../images/humocommerce/humocommerce3.jpg",
        },
      ],

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "PHP",
        "Laravel",
        "Shopify",
        "GraphQL",
        "MySQL",
        "Redis",
        "DigitalOcean",
        "Telegram Bot API"
      ],

      projectDetails: [
        {
          id: uuidv4(),
          details:
            "HumoCommerce is a leading e-commerce company that provides businesses with powerful tools for creating and managing online stores. ",
        },

        {
          id: uuidv4(),
          details:
            "",
        },
      ],

    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "YOKI",
      category: "Mobile Application",
      img: "images/yoki/yoki1.jpg",
      link: "https://play.google.com/store/apps/details?id=com.akademnashr.yoki&pli=1",
      publishDate: "Nov 04, 2022",
      tag: "Mobile application",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      projectImages: [
        {
          id: uuidv4(),
          title: "image",
          img: "../images/yoki/yoki1.jpg",
        },
        {
          id: uuidv4(),
          title: "image",
          img: "../images/yoki/yoki2.jpg",
        },
        {
          id: uuidv4(),
          title: "image",
          img: "../images/yoki/yoki3.jpg",
        },
      ],

      technologies: [
        "Dart",
        "Flutter",
        "PHP",
        "Laravel",
        "REST API",
        "MySql",
        "Redis",
        "TDD"
      ],

      projectDetails: [
        {
          id: uuidv4(),
          details:
            "YOKI - the first society of readers in Uzbekistan",
        }
      ],

    },

    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8ctcda",
      title: "YOKI",
      category: "Mobile Application",
      img: "images/yoki/yoki1.jpg",
      link: "",
      publishDate: "Nov 04, 2022",
      tag: "Mobile application",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      projectImages: [
        {
          id: uuidv4(),
          title: "image",
          img: "../images/yoki/yoki1.jpg",
        },
        {
          id: uuidv4(),
          title: "image",
          img: "../images/yoki/yoki2.jpg",
        },
        {
          id: uuidv4(),
          title: "image",
          img: "../images/yoki/yoki3.jpg",
        },
      ],

      technologies: [
        "Dart",
        "Flutter",
        "PHP",
        "Laravel",
        "REST API",
        "MySql",
        "Redis",
        "TDD"
      ],

      projectDetails: [
        {
          id: uuidv4(),
          details:
            "YOKI - the first society of readers in Uzbekistan",
        }
      ],

    }
  ],

  clientsHeading: "Some of the brands I worked with",

  clients: [],

  aboutMe: [
    {
      id: uuidv4(),
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    },
    {
      id: uuidv4(),
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    },
  ],

  copyrightDate: new Date().getFullYear(),

  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/bakhtiyor-dev",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/bakhdev",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://linkedin.com/in/bakhtiyor-dev",
    }
  ],

  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },

    {
      id: uuidv4(),
      value: "web",
      name: "Web Site",
    }
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
