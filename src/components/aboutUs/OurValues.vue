<template>
  <section class="about-us__our-values column items-center">
    <p class="about-us__our-values__label">
      {{ data.label }}
    </p>
    <p class="about-us__our-values__title text-center">{{ data.title }}</p>

    <!-- Colored 4 Items Cards -->
    <section class="about-us__our-values__items q-gutter-lg row justify-center">
      <div
        class="about-us__our-values__items__item col-3"
        v-for="(item, index) in data.items"
        :key="index"
      >
        <p class="about-us__our-values__items__item__number">
          0{{ index + 1 }}
        </p>
        <p class="about-us__our-values__items__item__text">{{ item }}</p>
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
      return $store.state.aboutUs.ourValues;
    });

    return {
      data,
    };
  },
};
</script>

<style scoped>
.about-us__our-values {
  margin-top: 5rem;
}

.about-us__our-values__label {
  font-size: 18px;
  color: #fd7f09;
}
.about-us__our-values__title {
  font-size: 28px;
  color: black;
  padding: 0 1rem;
}

.about-us__our-values__items {
  margin-top: 0.3rem;
}
.about-us__our-values__items__item {
  width: 255px;
  height: 125px;
  border-radius: 12px;
  background-color: #F8F8FC;
  padding: 0.5rem 1.5rem;
}
.about-us__our-values__items__item__number {
  font-size: 47px;
  font-family: "Gilroy_Bold";
  margin-bottom: 0;
}
.about-us__our-values__items__item:nth-of-type(1)
  .about-us__our-values__items__item__number {
  color: #f00f16;
}
.about-us__our-values__items__item:nth-of-type(2)
  .about-us__our-values__items__item__number {
  color: #09ab4f;
}
.about-us__our-values__items__item:nth-of-type(3)
  .about-us__our-values__items__item__number {
  color: #fd7f09;
}
.about-us__our-values__items__item:nth-of-type(4)
  .about-us__our-values__items__item__number {
  color: #1e6ee7;
}

.about-us__our-values__items__item__text {
  font-size: 18px;
  color: black;
}

.about-us__our-values__items__item:nth-of-type(1):hover {
  background-color: #f00f16;
}
.about-us__our-values__items__item:nth-of-type(2):hover {
  background-color: #09ab4f;
}
.about-us__our-values__items__item:nth-of-type(3):hover {
  background-color: #fd7f09;
}
.about-us__our-values__items__item:nth-of-type(4):hover {
  background-color: #1e6ee7;
}
.about-us__our-values__items__item:hover
  > .about-us__our-values__items__item__number,
.about-us__our-values__items__item:hover
  > .about-us__our-values__items__item__text {
  color: white;
}
</style>