<template>
  <section class="about-us__our-services column items-center">
    <p class="about-us__our-services__label">
      {{ data.label }}
    </p>
    <p class="about-us__our-services__title text-center">{{ data.title }}</p>

    <!-- 4 Items Cards -->
    <section class="about-us__our-services__items row justify-center">
      <div
        class="about-us__our-services__items__item col-11 col-md-5 q-mt-lg row"
        v-for="(item, index) in data.items"
        :key="index"
      >
        <div class="about-us__our-services__items__item__img col-3 col-md-2">
          <q-img loading="lazy" :src="item.img" width="68px" />
        </div>

        <div class="about-us__our-services__items__item__text col-9 q-mt-lg">
          <p class="about-us__our-services__items__item__text__title">
            {{ item.title }}
          </p>
          <p class="about-us__our-services__items__item__text__description">
            {{ item.description }}
          </p>
        </div>
      </div>
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
      return $store.state.aboutUs.ourServices;
    });

    return {
      data,
    };
  },
};
</script>

<style scoped>
.about-us__our-services {
  margin-top: 6rem;
}

.about-us__our-services__label {
  font-size: 18px;
  color: #fd7f09;
}
.about-us__our-services__title {
  font-size: 28px;
  color: #120f2d;
  padding: 0 1rem;
}

.about-us__our-services__items {
  margin-top: 2rem;
}
.about-us__our-services__items__item__text__title {
  font-size: 18px;
}
.about-us__our-services__items__item__text__description {
  font-size: 16px;
  color: #7a848a;
  line-height: 31px;
  font-family: "GE_SS_Two_Light";
}
</style>