<template>
  <div class="about-us-section row q-pt-xl q-mt-lg">
    <div class="about-us-section__video col-12 col-md-6 row justify-center">
      <iframe
        v-if="videoDisplayed"
        width="95%"
        height="400px"
        :src="videoLink"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
        autoplay
      ></iframe>
      <q-img
        @click="displayVideo"
        v-if="!videoDisplayed"
        :src="img"
        loading="lazy"
        class="cursor-pointer"
      />
    </div>

    <div
      class="
        about-us-section__text
        col-10 col-md-5
        offset-1 offset-md-0
        column
        justify-center
        q-mt-xl q-mt-md-none q-px-none q-px-md-lg
      "
    >
      <p class="about-us-section__text__label">{{ label }}</p>
      <p class="about-us-section__text__title" v-html="title"></p>
      <p class="about-us-section__text__description">{{ description }}</p>
      <q-btn
        class="q-mt-md about-us-section__text__button"
        :to="{ name: buttonLink }"
        padding="0.8rem 2.5rem"
        outline
        rounded
        color="green"
        :label="buttonLabel"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const $store = useStore();

    const videoLink = computed(() => {
      return $store.state.home.homePageAboutUsSection.videoLink;
    });
    const videoDisplayed = computed(() => {
      return $store.state.home.homePageAboutUsSection.videoDisplayed;
    });
    const img = computed(() => {
      return $store.state.home.homePageAboutUsSection.img;
    });
    const label = computed(() => {
      return $store.state.home.homePageAboutUsSection.label;
    });
    const title = computed(() => {
      return $store.state.home.homePageAboutUsSection.title;
    });
    const description = computed(() => {
      return $store.state.home.homePageAboutUsSection.description;
    });
    const buttonLabel = computed(() => {
      return $store.state.home.homePageAboutUsSection.buttonLabel;
    });
    const buttonLink = computed(() => {
      return $store.state.home.homePageAboutUsSection.buttonLink;
    });

    const displayVideo = () => {
      $store.commit("general/displayVideo");
    };

    return {
      videoLink,
      videoDisplayed,
      img,
      label,
      title,
      description,
      buttonLabel,
      buttonLink,
      displayVideo,
    };
  },
};
</script>

<style scoped>
.about-us-section__text__label {
  font-size: 18px;
  color: #fd7f09;
}
.about-us-section__text__title {
  font-size: 33px;
}
.about-us-section__text__description {
  font-size: 14px;
  font-family: "GE_SS_Two_Light";
  color: #565656;
  line-height: 28px;
}
.about-us-section__text__button {
  width: 172px;
}
::v-deep(.block) {
  font-size: 16px;
}
</style>
