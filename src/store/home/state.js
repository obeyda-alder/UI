export default function () {
  return {
    /* Global */
    serverUrl: "http://localhost:3000",

    /* Main Layout -> Social Media Bar */
    socialMediaItems: [
      {
        link: "https://wa.me/+447488867758",
        img: "images/socialMedia/iconmonstr-whatsapp-1.svg",
      },
      {
        link: "https://www.linkedin.com/in/heba-editakademy-53b61820a/",
        img: "images/socialMedia/iconmonstr-linkedin-1.svg",
      },
      {
        link: "https://www.instagram.com/editakademy7/",
        img: "images/socialMedia/iconmonstr-instagram-11.svg",
      },
      {
        link: "https://twitter.com/EditAkademy",
        img: "images/socialMedia/iconmonstr-twitter-1.svg",
      },
      {
        link: "https://www.facebook.com/Edit-Akademy-106914538143778",
        img: "images/socialMedia/iconmonstr-facebook-1.svg",
      },
    ],

    /* Main Layout -> Drawer */
    isDrawerOpen: false,

    navLinks: [
      {
        title: "الصفحه الرئيسيه",
        icon: "home",
        link: "Home",
      },
      {
        title: "من نحن",
        icon: "help",
        link: "AboutUs",
      },
      {
        title: "برامجنا",
        icon: "menu_book",
        subItems: [
          {
            title: "حياه",
            icon: "local_florist",
            subItems: [
              {
                title: "المحور النفسي",
                icon: "psychology",
                link: "Psychology",
              },
              {
                title: "المحور المهاري",
                icon: "construction",
                link: "Skills",
              },
              {
                title: "المحور التعبدي",
                icon: "self_improvement",
                link: "Religion",
              },
              {
                title: "المحور المعرفي",
                icon: "emoji_objects",
                link: "Knowledge",
              },
              {
                title: "المحور البدني",
                icon: "sports_handball",
                link: "Fitness",
              },
            ],
          },
          {
            title: "يكتشف",
            icon: "search",
            subItems: [
              {
                title: "المحور النفسي",
                icon: "psychology",
                link: "Psychology",
              },
              {
                title: "المحور المهاري",
                icon: "construction",
                link: "Skills",
              },
            ],
          },
        ],
      },
      {
        title: "سجل الان",
        icon: "app_registration",
        link: "Register",
      },
      {
        title: "المدونه",
        icon: "article",
        link: "Blog",
      },
      {
        title: "اتصل بنا",
        icon: "call",
        link: "ContactUs",
      },
    ],

    /* Home Page -> Landing Section */
    homePage_landingSection: {
      backgroundImg: "images/home/landing-section/Group 6528@2x.png",
      textBoxContent: [
        {
          title: `لاننا كلنا نستحق<br />تعليما افضل`,
          description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق`,
          buttonLink: "AboutUs",
          buttonLabel: "اعرف المزيد",
        },
        {
          title: `برنامج حياه`,
          description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق`,
          buttonLink: "Psychology",
          buttonLabel: "اعرف المزيد",
        },
        {
          title: `برنامج يكتشف`,
          description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق`,
          buttonLink: "Psychology",
          buttonLabel: "اعرف المزيد",
        },
      ],
      activeTextBoxContent: 0,
    },

    /* Home Page -> AboutUs */
    homePageAboutUsSection: {
      videoLink: "https://www.youtube.com/embed/fc9ueCRqvkI?&autoplay=1",
      videoDisplayed: false,
      img: "images/home/about-us/Group 6529@2x.png",
      label: "من نحن",
      title: "لاننا كلنا نستحق<br />تعليما افضل",
      description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`,
      buttonLabel: "اعرف المزيد",
      buttonLink: "AboutUs",
    },

    /* Home Page -> OurProgrammes */
    homePage_ourProgrammes: {
      header: {
        bgText: "برامجنا",
        label: "برامجنا",
        title: "لاننا كلنا نستحق<br />تعليما افضل",
      },
      hayatProgramme: {
        title: "برنامج حياة",
        description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا`,
        img1: "images/home/our-programmes/Group 6518@2x.png",
      },
      hayatProgrammeMahawer: {
        bgImg: "images/home/our-programmes/Group 6569@2x.png",
        title: "محاور برنامج حياة",
        mahawer: [
          {
            name: "psychology",
            title: "نفسي",
            img: "images/home/our-programmes/Group 6520.svg",
            hoverImg: "images/home/our-programmes/section3-img2.png",
            link: "Psychology",
          },
          {
            name: "skills",
            title: "مهاري",
            img: "images/home/our-programmes/Group 6520.svg",
            hoverImg: "images/home/our-programmes/section3-img3.png",
            link: "Skills",
          },
          {
            name: "religion",
            title: "تعبدي",
            img: "images/home/our-programmes/Group 6521.svg",
            hoverImg: "images/home/our-programmes/section3-img4.png",
            link: "Religion",
          },
          {
            name: "knowledge",
            title: "معرفي",
            img: "images/home/our-programmes/Group 6426.svg",
            hoverImg: "images/home/our-programmes/section3-img5.png",
            link: "Knowledge",
          },
          {
            name: "fitness",
            title: "بدني",
            img: "images/home/our-programmes/Group 6425.svg",
            hoverImg: "images/home/our-programmes/section3-img6.png",
            link: "Fitness",
          },
        ],
      },
      yaktashifProgramme: {
        img: "images/home/our-programmes/Group 6519@2x.png",
        title: "برنامج يكتشف",
        description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`,
        list: [
          "يتركز البرنامج في المحور النفسي و المهاري",
          "يركز علي التعرف علي الذات و امتلاك نفسيه صلبه",
          "يتدرب المشارك علي اختيار التخصص وفق منهجيه علميه",
          "يتكون من 36 ساعه تدريبه و 12 ساعه Life Coaching",
          "مده البرنامج 3 اشهر",
        ],
      },
    },

    /* Home Page -> OurCourses */
    homePageOurCoursesSection: {
      section1: {
        label: "دوراتنا",
        title: "لاننا كلنا نستحق<br />تعليما افضل",
      },
      section2: {
        courses: [
          {
            cardColor: "red-2",
            titleColor: "red-14",
            title: "جرافيك",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص`,
          },
          {
            cardColor: "orange-2",
            titleColor: "orange-14",
            title: "برمجه",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص`,
          },
          {
            cardColor: "green-2",
            titleColor: "green-14",
            title: "لغات",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص`,
          },
          {
            cardColor: "yellow-2",
            titleColor: "yellow-14",
            title: "تسلق جبال",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص`,
          },
          {
            cardColor: "indigo-2",
            titleColor: "indigo-14",
            title: "طبخ",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص`,
          },
          {
            cardColor: "pink-2",
            titleColor: "pink-14",
            title: "القنص",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص`,
          },
          {
            cardColor: "purple-2",
            titleColor: "purple-14",
            title: "سباحه",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص`,
          },
          {
            cardColor: "cyan-2",
            titleColor: "cyan-14",
            title: "عدو",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص`,
          },
        ],
      },
    },

    /* Home Page -> WhyUs */
    homePage_whyUs: {
      image:
        "images/home/why-us/female-muslim-speaker-giving-presentation-hall-workshop-audience-hall-high-angle-view-participants-audience@2x.png",
      text: {
        header: {
          label: "لماذا اكاديمية edit",
          title: "لاننا كلنا نستحق<br />تعليما افضل",
        },
        items: [
          {
            img: "images/home/why-us/Group 6522.svg",
            title: "مدربين علي اعلي مستوي",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد`,
          },
          {
            img: "images/home/why-us/Group 6523.svg",
            title: "اختبارات لقياس قدرات الطالب",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد`,
          },
          {
            img: "images/home/why-us/Group 6524.svg",
            title: "مناهج علميه",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد`,
          },
          {
            img: "images/home/why-us/Group 6525.svg",
            title: "شهادات اجتياز",
            description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد`,
          },
        ],
      },
    },

    /* Home Page -> Blog */
    homePage_blog: {
      header: {
        label: "المدونة",
        title: "لاننا كلنا نستحق<br />تعليما افضل",
      },
      posts: [
        {
          img: "images/home/blog/post1.jpg",
          time: "03:45 م",
          date: "13, اغسطس 2021",
          title: "هذا النص هو مثال لنص يمكن أن<br />يستبدل في نفس المساحة",
          description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`,
          link: "BlogPost",
        },
        {
          img: "images/home/blog/post2.webp",
          time: "03:45 م",
          date: "13, اغسطس 2021",
          title: "هذا النص هو مثال لنص يمكن أن<br />يستبدل في نفس المساحة",
          description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`,
          link: "BlogPost",
        },
        {
          img: "images/home/blog/post3.jpg",
          time: "03:45 م",
          date: "13, اغسطس 2021",
          title: "هذا النص هو مثال لنص يمكن أن<br />يستبدل في نفس المساحة",
          description: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`,
          link: "BlogPost",
        },
      ],
      link: "Blog",
    },

    /* Home Page -> Instructors */
    homePage_instructors: {
      header: {
        label: "عن المدربين",
        title: "تعرف على مدربينا عن قرب",
      },
      instructors: [
        {
          img: "images/home/instructors/alexandra-lammerink-q7d7VPKwN54-unsplash-3@2x.png",
          name: "اسم المدرب",
          profession: "مجال التخصص",
          link: "",
        },
        {
          img: "images/home/instructors/alexandra-lammerink-q7d7VPKwN54-unsplash-2@2x.png",
          name: "اسم المدرب",
          profession: "مجال التخصص",
          link: "",
        },
        {
          img: "images/home/instructors/alexandra-lammerink-q7d7VPKwN54-unsplash-1@2x.png",
          name: "اسم المدرب",
          profession: "مجال التخصص",
          link: "",
        },
        {
          img: "images/home/instructors/alexandra-lammerink-q7d7VPKwN54-unsplash@2x.png",
          name: "اسم المدرب",
          profession: "مجال التخصص",
          link: "",
        },
        {
          img: "images/home/instructors/alexandra-lammerink-q7d7VPKwN54-unsplash-3@2x.png",
          name: "اسم المدرب",
          profession: "مجال التخصص",
          link: "",
        },
        {
          img: "images/home/instructors/alexandra-lammerink-q7d7VPKwN54-unsplash-2@2x.png",
          name: "اسم المدرب",
          profession: "مجال التخصص",
          link: "",
        },
        {
          img: "images/home/instructors/alexandra-lammerink-q7d7VPKwN54-unsplash-1@2x.png",
          name: "اسم المدرب",
          profession: "مجال التخصص",
          link: "",
        },
        {
          img: "images/home/instructors/alexandra-lammerink-q7d7VPKwN54-unsplash@2x.png",
          name: "اسم المدرب",
          profession: "مجال التخصص",
          link: "",
        },
      ],
      link: "Blog",
    },

    /* Home Page -> Contact Us */
    homePage_contactUs: {
      // bgImg: "images/home/contact-us/Group 6527@2x.png",
      text: {
        label: "تواصل معنا",
        title: "احصل على دورات<br/>وكورسات في الكثير من<br/>المجالات المختلفة",
      },
      form: {
        title: `يسعدنا استقبال رسائلكم واستفسراتكم`,
        name: {
          icon: "account_circle",
          placeholder: "الاسم بالكامل",
        },
        email: {
          icon: "email",
          placeholder: "البريد الالكتروني",
        },
        message: {
          icon: "chat",
          placeholder: "الرسالة",
        },
      },
    },

    /* Footer */
    footer: {
      logo: "images/Group 6422@2x.png",
      contacts: {
        phones: {
          title: "تواصل معنا",
          phone1: {
            title: "هاتف الأكاديمية:",
            number: "(787)881-8150",
          },
          phone2: {
            title: "الموبايل:",
            number: "(950)279-1021",
          },
        },
        location: {
          title: "يسعدنا إستقبالكم في",
          description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
        },
        emails: {
          title: "راسلونا على",
          email1: "anthony.jackson@mail.com",
          email2: "info@mail.com",
        },
      },
      navs: [
        { name: "الصفحة رئيسية", link: "Home" },
        { name: "من نحن", link: "AboutUs" },
        { name: "سجل الأن", link: "Register" },
        { name: "المدونة", link: "Blog" },
        { name: "سياسة الخصوصية", link: "PrivacyPolicy" },
        { name: "إتصل بنا", link: "ContactUs" },
      ],
    },

    /* End */
  };
}
