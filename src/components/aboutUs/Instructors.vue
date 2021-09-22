<template>
  <section class="about-us__instructors q-mt-xl q-pt-xl column items-center">
    <!-- Header -->
    <header class="about-us__instructors__header column items-center">
      <p class="about-us__instructors__header__label">
        {{ data.label }}
      </p>
      <p
        class="about-us__instructors__header__title text-center q-px-md"
        v-html="data.title"
      ></p>
    </header>

    <!-- Carousel -->
    <q-carousel
      class="about-us__instructors__carousel"
      v-model="startingSlide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="orange"
      padding
      navigation
      :autoplay="4000"
      infinite
    >
      <q-carousel-slide
        v-for="(n, index) in totalNumberOfSlides"
        :key="index"
        :name="n"
        class="column no-wrap items-center"
      >
        <div class="row fit justify-center items-center q-gutter-lg no-wrap">
          <InstructorCard
            class="about-us__instructors__carousel__card col-10 col-sm-5 col-md-3"
            v-for="(instructor, index) in data.instructors.slice(
              getStartingCard(n),
              getEndingCard(n)
            )"
            :key="index"
            :instructor="instructor"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, defineAsyncComponent } from "vue";
import { useQuasar } from "quasar";

export default {
  components: {
    InstructorCard: defineAsyncComponent(() =>
      import("components/UI/InstructorCard.vue")
    ),
  },
  setup() {
    const $store = useStore();
    const $q = useQuasar();

    const data = computed(() => {
      return $store.state.aboutUs.instructors;
    });

    const startingSlide = ref(1);
    const numberOfCardsInEachSlide = computed(() => {
      let numberOfCardsInEachSlide = 0;
      if ($q.screen.lg || $q.screen.gt.lg) numberOfCardsInEachSlide = 5;
      if ($q.screen.md) numberOfCardsInEachSlide = 4;
      if ($q.screen.sm) numberOfCardsInEachSlide = 2;
      if ($q.screen.xs) numberOfCardsInEachSlide = 1;
      return numberOfCardsInEachSlide;
    });
    const totalNumberOfSlides = computed(() => {
      return Math.ceil(
        data.value.instructors.length / numberOfCardsInEachSlide.value
      );
    });

    const getStartingCard = (slide) => {
      return (
        slide * numberOfCardsInEachSlide.value - numberOfCardsInEachSlide.value
      );
    };
    const getEndingCard = (slide) => {
      return slide * numberOfCardsInEachSlide.value;
    };

    return {
      data,

      startingSlide,
      totalNumberOfSlides,
      getStartingCard,
      getEndingCard,
    };
  },
};
</script>

<style lang="scss" scoped>
/* Header */
.about-us__instructors__header__label {
  font-size: 18px;
  color: #fd7f09;
}
.about-us__instructors__header__title {
  font-size: 33px;
}

.about-us__instructors__carousel {
  width: 100%;
  height: 35rem;
}
.about-us__instructors__carousel__card {
  max-width: 280px;
}
</style>