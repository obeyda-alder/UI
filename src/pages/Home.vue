<template>
  <q-page>
    <LandingSection />
    <AboutUs />
    <OurProgrammes />
    <OurCourses />
    <WhyUS />
    <Blog />
    <Instructors />
    <ContactUs />
  </q-page>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    LandingSection: defineAsyncComponent(() =>
      import("../components/home/LandingSection.vue")
    ),
    AboutUs: defineAsyncComponent(() =>
      import("../components/home/AboutUs.vue")
    ),
    OurProgrammes: defineAsyncComponent(() =>
      import("../components/home/OurProgrammes.vue")
    ),
    OurCourses: defineAsyncComponent(() =>
      import("../components/home/OurCourses.vue")
    ),
    WhyUS: defineAsyncComponent(() => import("../components/home/WhyUS.vue")),
    Blog: defineAsyncComponent(() => import("../components/home/Blog.vue")),
    Instructors: defineAsyncComponent(() =>
      import("../components/home/Instructors.vue")
    ),
    ContactUs: defineAsyncComponent(() =>
      import("../components/home/ContactUs.vue")
    ),
  },
  setup() {},
};
</script>