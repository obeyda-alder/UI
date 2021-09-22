<template>
  <section class="about-us__our-goals row">
    <!-- Text Section -->
    <section
      class="
        about-us__our-goals__text
        col-10 col-md-5
        offset-1
        column
        q-mt-md q-pl-md-md
      "
    >
      <p class="about-us__our-goals__text__label">
        {{ data.text.label }}
      </p>
      <p class="about-us__our-goals__text__title" v-html="data.text.title"></p>
      <q-list class=".about-us__our-goals__text__list" dense>
        <q-item
          class="about-us__our-goals__text__list__item no-padding q-mt-sm"
          v-for="(item, index) in data.text.list"
          :key="index"
        >
          <q-item-section
            class="about-us__our-goals__text__list__item__number"
            side
          >
            0{{ index + 1 }}
          </q-item-section>
          <q-item-section class="about-us__our-goals__text__list__item__text">{{
            item
          }}</q-item-section>
        </q-item>
      </q-list>
    </section>

    <!-- Image Section -->
    <section
      class="about-us__our-goals__img col-12 col-md-6 row justify-center"
    >
      <q-img :src="data.img" loading="lazy" />
    </section>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const $store = useStore();

    const data = computed(() => {
      return $store.state.aboutUs.ourGoals;
    });

    return {
      data,
    };
  },
};
</script>

<style scoped>
.about-us__our-goals {
  margin-top: 5rem;
}

.about-us__our-goals__text__label {
  font-size: 18px;
  color: #fd7f09;
}
.about-us__our-goals__text__title {
  font-size: 28px;
  color: black;
  font-family: "GE_SS_Two_Bold";
}
.about-us__our-goals__text__list__item__number {
  font-size: 20px;
  color: #1e6ee7;
  font-family: "Gilroy_Bold";
}
.about-us__our-goals__text__list__item__text {
  font-size: 18px;
  font-family: "GE_SS_Two_Light";
}
</style>