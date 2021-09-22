<template>
  <section
    class="about-us__non-profit-org row"
    v-intersection="onIntersection"
    :class="{ 'bg-visible': isBgImgVisible }"
  >
    <!-- Text Section -->
    <section
      class="
        about-us__non-profit-org__text
        col-10 col-md-4
        offset-1
        column
        justify-center
      "
    >
      <p class="about-us__non-profit-org__text__title">
        {{ data.text.title }}
      </p>
      <p class="about-us__non-profit-org__text__description">
        {{ data.text.description }}
      </p>
    </section>

    <!-- Items Section -->
    <section
      class="
        about-us__non-profit-org__items
        col-12 col-md-7
        q-mt-lg q-mt-md-none q-px-sm q-mx-md-none
        row
        q-gutter-lg
      "
    >
      <IconAndTitleCard
        class="about-us__non-profit-org__items__card"
        v-for="(item, index) in data.items"
        :key="index"
        :data="item"
      />
    </section>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, defineAsyncComponent } from "vue";
export default {
  components: {
    IconAndTitleCard: defineAsyncComponent(() =>
      import("components/UI/IconAndTitleCard.vue")
    ),
  },
  setup() {
    const $store = useStore();

    const data = computed(() => {
      return $store.state.aboutUs.nonProfitOrg;
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
.about-us__non-profit-org {
  margin-top: 5rem;
  padding-top: 3rem;
  padding-bottom: 4rem;
}
.about-us__non-profit-org.bg-visible {
  background-image: url("/images/about-us/Group 6535.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
}
.about-us__non-profit-org__text__label {
  font-size: 18px;
  color: #fd7f09;
}
.about-us__non-profit-org__text__title {
  font-size: 35px;
  color: white;
}
.about-us__non-profit-org__text__description {
  font-size: 16px;
  line-height: 31px;
  color: white;
  font-family: "GE_SS_Two_Light";
}

.about-us__non-profit-org__items {
  padding-left: 2rem;
}
.about-us__non-profit-org__items__card {
  width: 302px;
  height: 109px;
}
</style>