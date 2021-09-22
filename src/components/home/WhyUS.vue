<template>
  <section class="home-page__why-us row q-mt-xl q-py-lg">
    <section class="home-page__why-us__image col-10 col-md-5 offset-1">
      <q-img :src="data.image" loading="lazy" />
    </section>

    <section
      class="home-page__why-us__text col-12 col-md-6 q-px-lg q-mt-xl column"
    >
      <div class="home-page__why-us__text__header column">
        <p class="home-page__why-us__text__header__label">
          {{ data.text.header.label }}
        </p>
        <p
          class="home-page__why-us__text__header__title"
          v-html="data.text.header.title"
        ></p>
      </div>

      <div class="home-page__why-us__text__items row q-mt-lg">
        <div
          class="
            home-page__why-us__text__items__card
            col-12 col-sm-6
            q-pr-sm-xl
            column
            items-center items-sm-start
          "
          v-for="(item, index) in data.text.items"
          :key="index"
        >
          <q-img :src="item.img" loading="lazy" width="65px" />
          <p class="home-page__why-us__text__items__card__title q-mt-sm">
            {{ item.title }}
          </p>
          <p
            class="home-page__why-us__text__items__card__description"
            :class="{ 'text-center': $q.screen.xs }"
          >
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
      return $store.state.home.homePage_whyUs;
    });

    return {
      data,
    };
  },
};
</script>

<style scoped>
.home-page__why-us {
  background-color: #f8f8fc;
}

.home-page__why-us__text__header__label {
  font-size: 18px;
  color: #fd7f09;
}
.home-page__why-us__text__header__title {
  font-size: 33px;
}

.home-page__why-us__text__items__card__title {
  font-size: 16px;
}
.home-page__why-us__text__items__card__description {
  font-size: 14px;
  font-family: "GE_SS_Two_Light";
  color: #565656;
}
</style>
