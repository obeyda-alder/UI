<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal>
      <SocialMediaBar />
      <ToolBar />
    </q-header>

    <Drawer />

    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useQuasar } from "quasar";

export default {
  components: {
    SocialMediaBar: defineAsyncComponent(() =>
      import("../components/mainLayout/SocialMediaBar.vue")
    ),
    ToolBar: defineAsyncComponent(() =>
      import("../components/mainLayout/ToolBar.vue")
    ),
    Drawer: defineAsyncComponent(() =>
      import("../components/mainLayout/Drawer.vue")
    ),
    Footer: defineAsyncComponent(() =>
      import("../components/mainLayout/Footer.vue")
    ),
  },
  setup() {
    const $q = useQuasar();
    $q.notify({
      type: "warning",
      icon: "engineering",
      position: "top",
      message: "يرجي الإنتباه إلي ان الموقع تحت الصيانه الان",
    });
  },
};
</script>
