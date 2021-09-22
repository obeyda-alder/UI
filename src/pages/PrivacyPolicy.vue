<template>
  <!-- Provacy Policy Page -->
  <section class="privacy-policy row">
    <!-- Header -->
    <header
      class="privacy-policy__header col-12 column justify-center"
      v-intersection="onIntersection"
      :class="{ 'bg-visible': isBgImgVisible }"
    >
      <div class="privacy-policy__header__text-box">
        <p class="privacy-policy__header__text-box__title">
          {{ data.header.title }}
        </p>
        <p
          class="privacy-policy__header__text-box__description"
          v-html="data.header.description"
        ></p>
      </div>
    </header>

    <section class="privacy-policy__section col-10 offset-1 q-pt-lg">
      <p class="privacy-policy__section__title">{{ data.section1.title }}</p>
      <p
        class="privacy-policy__section__description"
        v-html="data.section1.description"
      ></p>
    </section>

    <section class="privacy-policy__section col-10 offset-1">
      <p class="privacy-policy__section__title">{{ data.section2.title }}</p>
      <p
        class="privacy-policy__section__description"
        v-html="data.section2.description"
      ></p>
    </section>

    <section class="privacy-policy__section col-10 offset-1">
      <p class="privacy-policy__section__title">{{ data.section3.title }}</p>
      <p
        class="privacy-policy__section__description"
        v-html="data.section3.description"
      ></p>
    </section>

    <section class="privacy-policy__section col-10 offset-1 q-pb-lg">
      <p class="privacy-policy__section__title">{{ data.section4.title }}</p>
      <p
        class="privacy-policy__section__description"
        v-html="data.section4.description"
      ></p>
    </section>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const $store = useStore();

    /* Data From Vuex Store */
    const data = computed(() => {
      return $store.state.privacyPolicy;
    });

    const isBgImgVisible = ref(false);
    const onIntersection = (entry) => {
      if (entry.isIntersecting) {
        isBgImgVisible.value = true;
      }
    };

    return {
      data,

      isBgImgVisible,
      onIntersection,
    };
  },
};
</script>

<style scoped>
.privacy-policy__header {
  background-color: #e8f0fd;
  height: 456px;
}
.privacy-policy__header.bg-visible {
  background-image: url("/images/privacy-policy/Group 6546.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20%;
}
.privacy-policy__header__text-box {
  margin-left: 6%;
}
.privacy-policy__header__text-box__title {
  font-size: 24px;
}
.privacy-policy__header__text-box__description {
  font-size: 14px;
  color: #565656;
  line-height: 21px;
}

.privacy-policy__section {
  margin: 2rem 0;
}
.privacy-policy__section__title {
  font-size: 18px;
}
.privacy-policy__section__description {
  font-size: 16px;
  color: #7a848a;
  line-height: 31px;
}
</style>