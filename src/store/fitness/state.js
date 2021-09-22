export default function () {
  return {
    /* Fitness Mehwar -> Header */
    header: {
      title: "المحور الفكري",
      breadCrumb: [
        { name: "الرئيسية", icon: "home", link: "Home" },
        { name: "مشروع حياه", icon: "local_florist", link: "Fitness" },
        { name: "المحور البدني", icon: "sports_handball", link: "Fitness" },
      ],
      activeLinkColor: "teal-13",
    },

    /* Fitness Mehwar -> Section 1 */
    section1: {
      title: "المحور البدني",
      label: "خير وأحب",
      labelColor: "teal-7",
      description: `ذلك الجسد الذي وهبك الله الله إياه يستحق أن نحافظ عليه مع خير وأحب سنتعرف على عالم مختلف من العناية بذواتنا ونتنافس في الاستمتاع بالرياضة وتقوية أجسادنا ف " المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف "`,
      img: "images/mahawer/climbing-helping-team-work-success-concept@2x.png",
    },

    /* Fitness Mehwar -> Section 2 */
    section2: {
      titleColor: "teal-7",
      descriptionColor: "teal-7",
      items: [
        {
          title: "الجانب الرياضي",
          descriptions: ["ممارس الرياضة كعادة يومية ثابتة"],
        },
        {
          title: "الجانب الصحي",
          descriptions: [
            "الوعي بأهمية الأطعمة الصحية",
            "الوعي بالتغيرات المصاحبة للمرحلة العمرية",
            "الوعي بخطورة الأطعمة الجاهزة Junk food",
          ],
        },
        {
          title: "النمو البدني",
          descriptions: ["الوعي بالتغيرات المصاحبة للمرحلة العمرية"],
        },
      ],
    },

    /* Fitness Mehwar -> Section 3 */
    section3: {
      items: [
        {
          img: "images/mahawer/Group 6563.svg",
          title: "لقاءات بث مباشر",
        },
        {
          img: "images/mahawer/Group 6564.svg",
          title: "تحدي رياضي",
        },
        {
          img: "images/mahawer/Group 6565.svg",
          title: "تحدي صحي",
        },
      ],
    },
  };
}
