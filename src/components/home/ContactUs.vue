<template>
  <section
    v-intersection="onContactUsSectionIntersection"
    class="home__contact-us q-mt-xl q-pt-xl row"
    :class="{ 'bg-visible': isContactUsSectionBgImgVisible }"
  >
    <!-- Label and Title -->
    <section class="home__contact-us__text col-11 col-md-5 offset-1">
      <p class="home__contact-us__text__label">{{ data.text.label }}</p>
      <p class="home__contact-us__text__title" v-html="data.text.title"></p>
    </section>

    <!-- Contact form -->
    <section class="home__contact-us__form col-12 col-md-4 offset-md-1 column">
      <ContatcUsForm :data="data.form" />
    </section>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, defineAsyncComponent } from "vue";

export default {
  components: {
    ContatcUsForm: defineAsyncComponent(() =>
      import("components/UI/ContatcUsForm.vue")
    ),
  },
  setup() {
    const $store = useStore();

    const data = computed(() => {
      return $store.state.home.homePage_contactUs;
    });

    const isContactUsSectionBgImgVisible = ref(false);
    const onContactUsSectionIntersection = (entry) => {
      if (entry.isIntersecting) {
        isContactUsSectionBgImgVisible.value = true;
      }
    };

    return {
      data,

      isContactUsSectionBgImgVisible,
      onContactUsSectionIntersection,
    };
  },
};
</script>

<style lang="scss" scoped>
.home__contact-us {
  background-color: #09ab4f;
  padding-bottom: 1rem;
}
.home__contact-us.bg-visible {
  background: url("/images/home/contact-us/Group 6527@2x.png");
  background-repeat: no-repeat;
  background-position: 90%;
  background-size: cover;
  padding-bottom: 1rem;
}
.home__contact-us__text {
  margin-top: 4%;
}
.home__contact-us__text__label {
  font-size: 18px;
  color: white;
}
.home__contact-us__text__title {
  font-size: 33px;
  line-height: 43px;
  color: white;
}
</style>
