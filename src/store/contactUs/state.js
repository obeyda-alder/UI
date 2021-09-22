export default function () {
  return {
    /* Contact Us -> Header */
    header: {
      title: "كن على تواصل دائم معنا",
      breadCrumb: [
        { name: "الرئيسية", icon: "home", link: "Home" },
        { name: "تواصل معنا", icon: "call", link: "ContactUs" },
      ],
      activeLinkColor: "yellow-13",
    },

    /* Contact Us -> Form and Map Section */
    section1: {
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
      // map: ``,
    
    },

    /* Contact Us -> Icons Section */
    section2: {
      items: [
        {
          img: "images/contact-us/Group 6566.svg",
          phone: "(787)881-8150",
          mobile: "(950)279-1021",
        },
        {
          img: "images/contact-us/Group 6567.svg",
          location: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
        },
        {
          img: "images/contact-us/Group 6568.svg",
          email1: "anthony.jackson@mail.com",
          email2: "info@mail.com",
        },
      ],
    },
  };
}
