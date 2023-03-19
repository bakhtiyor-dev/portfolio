import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Humocommerce",
      category: "Web Application",
      img: "images/humocommerce.png",
      link: "https://humocommerce.com",
      publishDate: "Nov 04, 2022",
      tag: "Web application",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      projectImages: [
        {
          id: uuidv4(),
          title: "image",
          img: "../images/humocommerce.png",
        },
        {
          id: uuidv4(),
          title: "image",
          img: "../images/humocommerce2.png",
        },
        {
          id: uuidv4(),
          title: "image",
          img: "../images/humocommerce3.png",
        },
      ],

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Laravel",
        "Shopify",
        "GraphQL"
      ],

      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Go online without any hassles.\n" +
            "Have your online store, sell your products online and expand your business in 14 days. Humocommerce provides you with a quick, affordable and convenient solution.",
        },
        {
          id: uuidv4(),
          details:
            "Quick solution. More sales. Trouble-free management. \n" +
            "Humocommerce will help you start your online business without too much trouble and obstacles. You do the business and humocommerce makes it grow online",
        },
        {
          id: uuidv4(),
          details:
            "All the necessary solutions for online sales, especially online payments, unlimited categories, SEO, integrations and of course a modern and convenient look. You can trade not only through the website, but also through the mobile application and telegram bot. Humocommerce has everything in one!",
        },
        {
          id: uuidv4(),
          details:
            "Speed is one of the most important factors in business. Humocommerce will launch your online store in a short time, at a minimum price. Most importantly, it will have the same look and functionality as today's modern online stores.",
        },
      ],

    }
  ],
  clientsHeading: "Some of the brands I worked with",

  clients: [
  ],

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
