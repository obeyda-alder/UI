export default function () {
  return {
    /* Blog -> Header */
    header: {
      title: "المدونة",
      breadCrumb: [
        { name: "الرئيسية", icon: "home", link: "Home" },
        { name: "المدونة", icon: "rss_feed", link: "Blog" },
      ],
      activeLinkColor: "lime-13",
    },

    /* Blog -> Posts */
    posts: [
      {
        img: "images/home/blog/post1.jpg",
        time: "03:45 م",
        date: "13, اغسطس 2021",
        title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
        description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد`,
        link: "BlogPost",
      },
      {
        img: "images/home/blog/post2.webp",
        time: "03:45 م",
        date: "13, اغسطس 2021",
        title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
        description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد`,
        link: "BlogPost",
      },
      {
        img: "images/home/blog/post3.jpg",
        time: "03:45 م",
        date: "13, اغسطس 2021",
        title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
        description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد`,
        link: "BlogPost",
      },
      {
        img: "images/home/blog/post1.jpg",
        time: "03:45 م",
        date: "13, اغسطس 2021",
        title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
        description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد`,
        link: "BlogPost",
      },
      {
        img: "images/home/blog/post2.webp",
        time: "03:45 م",
        date: "13, اغسطس 2021",
        title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
        description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد`,
        link: "BlogPost",
      },
      {
        img: "images/home/blog/post3.jpg",
        time: "03:45 م",
        date: "13, اغسطس 2021",
        title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
        description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد`,
        link: "BlogPost",
      },
    ],

    /* Blog -> Categories */
    categories: [
      { name: "رسم", count: "32" },
      { name: "برمجة", count: "38" },
      { name: "تصميم", count: "14" },
      { name: "سياسة", count: "77" },
      { name: "اقتصاد", count: "53" },
      { name: "تاريخ", count: "64" },
    ],
  };
}
