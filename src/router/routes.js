const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    redirect: { name: "Home" },
    children: [
      /* Home Page */
      {
        path: "home",
        name: "Home",
        component: () => import("pages/Home.vue"),
      },
      /* About Us Page */
      {
        path: "about-us",
        name: "AboutUs",
        component: () => import("pages/AboutUs.vue"),
      },
      /* Mahawer */
      {
        path: "mehwar/psychology",
        name: "Psychology",
        component: () => import("pages/mahawer/Psychology.vue"),
      },
      {
        path: "mehwar/skills",
        name: "Skills",
        component: () => import("pages/mahawer/Skills"),
      },
      {
        path: "mehwar/religion",
        name: "Religion",
        component: () => import("pages/mahawer/Religion.vue"),
      },
      {
        path: "mehwar/knowledge",
        name: "Knowledge",
        component: () => import("pages/mahawer/Knowledge.vue"),
      },
      {
        path: "mehwar/fitness",
        name: "Fitness",
        component: () => import("pages/mahawer/Fitness.vue"),
      },
      /* Blog Page */
      {
        path: "blog",
        name: "Blog",
        component: () => import("pages/Blog.vue"),
      },
      {
        path: "blog/post/:id",
        name: "BlogPost",
        component: () => import("pages/BlogPost.vue"),
      },
      /* Register Page */
      {
        path: "register",
        name: "Register",
        component: () => import("pages/Register.vue"),
      },
      /* Contact Us Page */
      {
        path: "contact-us",
        name: "ContactUs",
        component: () => import("pages/ContactUs.vue"),
      },
      /* Privacy Policy Page */
      {
        path: "privacy-policy",
        name: "PrivacyPolicy",
        component: () => import("pages/PrivacyPolicy.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
