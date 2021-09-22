export default function () {
  return {
    /* Knowledge Mehwar -> Header */
    header: {
      title: "المحور الفكري",
      breadCrumb: [
        { name: "الرئيسية", icon: "home", link: "Home" },
        { name: "مشروع حياه", icon: "local_florist", link: "Knowledge" },
        { name: "المحور الفكري", icon: "emoji_objects", link: "Knowledge" },
      ],
      activeLinkColor: "green-13",
    },

    /* Knowledge Mehwar -> Section 1 */
    section1: {
      title: "المحور الفكري",
      label: "فكرة",
      labelColor: "green-7",
      description: `على صفحة السوشيال ميديا ستمر عليك حتما عشرات الأفكار الرائعة والملهمة وكذلك مئات الأفكار الخبيثة والمسمومة فضلا عن الاف الأفكار التافهة بعد أن صارت التفاهة صناعة مع فكرة سنتدرب معا كيف نميز هذه من تلك ونعرف كيف نشأت تلك الأفكار ونبحث عن متى بدأت الحكاية"`,
      img: "images/mahawer/climbing-helping-team-work-success-concept@2x.png",
    },

    /* Knowledge Mehwar -> Section 2 */
    section2: {
      titleColor: "green-7",
      descriptionColor: "green-7",
      items: [
        {
          title: "الوعي بحركة التاريخ",
          descriptions: [
            "دراسة السيرة النبوية وعصر الخلفاء الراشدين",
            "إدراك عظمة ما قدمته الحضارة الإسلامية للعالم",
            "دراسة النكبات الكبرى وأسباب النهوض ( الحروب الصليبية / التتار )",
            "الإلمام بالأزمات الكبرى التي تحياها الأمة",
          ],
        },
        {
          title: "الوعي بحقيقة الأفكار المختلفة",
          descriptions: [
            "إدراك خطورة عالم الأفكار",
            "القدرة على تفكيك المصطلحات المختلفة العلمانية - الرأسماية - الاشتراكية - الشيوعية ... إلخ",
            "الوعي بخطورة صناعة التفاهة",
          ],
        },
        {
          title: "العلوم الانسانية",
          descriptions: [
            "الإلمام بمداخل أهم العلوم الإنسانية علم النفس - علم الاجتماع * علوم السياسة - علم الاقتصاد",
          ],
        },
      ],
    },

    /* Knowledge Mehwar -> Section 3 */
    section3: {
      items: [
        {
          img: "images/mahawer/Group 6550.svg",
          title: "مواد مرئية",
        },
        {
          img: "images/mahawer/Group 6555.svg",
          title: "مواد مقروءة",
        },
        {
          img: "images/mahawer/Group 6560.svg",
          title: "ورش عمل",
        },
        {
          img: "images/mahawer/Group 6561.svg",
          title: "محاضرات بث مباشر",
        },
        {
          img: "images/mahawer/Group 6562.svg",
          title: "مشاريع بحثية",
        },
      ],
    },
  };
}
