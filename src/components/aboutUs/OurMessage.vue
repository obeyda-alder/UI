<template>
  <section class="about-us__our-message row">
    <!-- Text Section -->
    <section
      class="
        about-us__our-message__text
        col-10 col-md-4
        offset-1
        column
        justify-center
      "
    >
      <p class="about-us__our-message__text__label">
        {{ data.text.label }}
      </p>
      <p class="about-us__our-message__text__title">
        {{ data.text.title }}
      </p>
      <p class="about-us__our-message__text__description">
        {{ data.text.description }}
      </p>
    </section>

    <!-- Image Section -->
    <section
      class="
        about-us__our-message__images
        col-12 col-md-5
        offset-md-1
        q-mt-lg q-mt-md-none q-px-sm q-mx-md-none
        row
      "
    >
      <q-img
        :src="data.img"
        loading="lazy"
        class="about-us__our-message__images__img1"
      />
    </section>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const $store = useStore();

    const data = computed(() => {
      return $store.state.aboutUs.ourMessage;
    });

    return {
      data,
    };
  },
};
</script>

<style scoped>
.about-us__our-message {
  margin-top: 5rem;
}
.about-us__our-message__text__label {
  font-size: 18px;
  color: #fd7f09;
}
.about-us__our-message__text__title {
  font-size: 28px;
}
.about-us__our-message__text__description {
  font-size: 16px;
  line-height: 31px;
  color: #7a848a;
  font-family: "GE_SS_Two_Light";
}
</style>