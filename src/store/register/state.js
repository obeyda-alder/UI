export default function () {
  return {
    /* Register -> Header */
    header: {
      title: "سجل الان",
      breadCrumb: [
        { name: "الرئيسية", icon: "home", link: "Home" },
        { name: "سجل الان", icon: "call", link: "Register" },
      ],
      activeLinkColor: "light-green-13",
    },

    /* Register -> Form */
    form: {
      name: {
        placeholder: "الاسم",
        icon: "badge",
        errorMessage: "ادخال الاسم",
      },
      educationYear: {
        placeholder: "السنه الدراسيه",
        icon: "school",
        errorMessage: "ادخال السنه الدراسيه",
      },
      gender: {
        label: "الجنس:",
        errorMessage: "ادخال جنسك",
        radios: ["ذكر", "انثي"],
      },
      country: {
        placeholder: "الدوله",
        icon: "flag",
        errorMessage: "ادخال الدوله",
        countries: [
          "المملكه العربية السعودية",
          "الإمارات العربيه المتحده",
          "قطر",
          "الكويت",
          "سلطنه عمان",
          "البحرين",
          "العراق",
          "مصر‎",
          "تركيا‎",
          "فرنسا",
          "المانيا",
          "ايطاليا",
          "اسبانيا",
          "انجلترا",
          "السويد",
          "هولندا",
          "النمسا",
          "امريكا و كندا",
          "الأردن",
          "لبنان",
          "المغرب",
          "الجزائر",
          "تونس",
          "السودان",
          "لبنان",
        ],
      },
      otherCountry: {
        placeholder: "الدوله",
        icon: "flag",
        errorMessage: "ادخال الدوله",
      },
      city: {
        placeholder: "المدينه",
        icon: "location_city",
        errorMessage: "ادخال المدينه",
      },
      phoneNumber: {
        placeholder: "رقم للتواصل",
        icon: "call",
        errorMessage: "ادخال رقم للتواصل",
      },
      whatsappNumber: {
        placeholder: "رقم واتساب",
        icon: "phone_iphone",
        errorMessage: "ادخال رقم واتساب",
      },
      email: {
        placeholder: "البريد الالكتروني",
        icon: "email",
        errorMessage: "ادخال البريد الالكتروني",
      },
      programme: {
        label: "البرنامج المهتم به:",
        errorMessage: "ادخال البرنامج",
        radios: ["تمكين", "حياه"],
      },
    },
  };
}
