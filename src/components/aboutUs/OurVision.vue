<template>
  <section
    class="about-us__our-vision column items-center justify-center"
    v-intersection="onIntersection"
    :class="{ 'bg-visible': isBgImgVisible }"
  >
    <p class="about-us__our-vision__label">
      {{ data.label }}
    </p>
    <p class="about-us__our-vision__title text-center">{{ data.title }}</p>
    <p class="about-us__our-vision__description text-center">
      {{ data.description }}
    </p>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const $store = useStore();

    const data = computed(() => {
      return $store.state.aboutUs.ourVision;
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
.about-us__our-vision {
  margin-top: 5rem;
  background-color: #120f2d;
  height: 370px;
}
.about-us__our-vision.bg-visible {
  background-image: url("/images/about-us/Group 6541@2x.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 75%;
}

.about-us__our-vision__label {
  font-size: 18px;
  color: #fd7f09;
}
.about-us__our-vision__title {
  font-size: 28px;
  color: white;
}
.about-us__our-vision__description {
  font-size: 16px;
  color: white;
  font-family: "GE_SS_Two_Light";
}
</style>