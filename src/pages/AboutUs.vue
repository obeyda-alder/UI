<template>
  <q-page>
    <Header :header="data.header" />
    <OurMessage />
    <NonProfitOrg />
    <WhatMakesUsSpecial />
    <OurGoals />
    <OurVision />
    <OurValues />
    <OurServices />
    <Instructors />
    <ContactUs />
  </q-page>
</template>

<script>
import { defineAsyncComponent, computed } from "vue";
import { useStore } from "vuex";
import ContactUs from "../components/home/ContactUs.vue";
export default {
  components: {
    Header: defineAsyncComponent(() => import("../components/UI/Header.vue")),
    OurMessage: defineAsyncComponent(() =>
      import("../components/aboutUs/OurMessage.vue")
    ),
    NonProfitOrg: defineAsyncComponent(() =>
      import("../components/aboutUs/NonProfitOrg.vue")
    ),
    WhatMakesUsSpecial: defineAsyncComponent(() =>
      import("../components/aboutUs/WhatMakesUsSpecial.vue")
    ),
    OurGoals: defineAsyncComponent(() =>
      import("../components/aboutUs/OurGoals.vue")
    ),
    OurVision: defineAsyncComponent(() =>
      import("../components/aboutUs/OurVision.vue")
    ),
    OurValues: defineAsyncComponent(() =>
      import("../components/aboutUs/OurValues.vue")
    ),
    OurServices: defineAsyncComponent(() =>
      import("../components/aboutUs/OurServices.vue")
    ),
    Instructors: defineAsyncComponent(() =>
      import("../components/aboutUs/Instructors.vue")
    ),
    ContactUs: defineAsyncComponent(() =>
      import("../components/home/ContactUs.vue")
    ),
  },
  setup() {
    const $store = useStore();

    /* Data From Vuex Store */
    const data = computed(() => {
      return $store.state.aboutUs;
    });

    return {
      data,
    };
  },
};
</script>