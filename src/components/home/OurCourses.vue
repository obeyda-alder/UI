<template>
  <div class="our-courses-section q-pt-xl q-mt-xl">
    <div class="our-courses-section__section-1 column items-center">
      <p class="our-courses-section__section-1__label">
        {{ section1_label }}
      </p>
      <p
        class="our-courses-section__section-1__title text-center"
        v-html="section1_title"
      ></p>
    </div>

    <div class="our-courses-section__section-2">
      <q-carousel
        v-model="startingSlide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="black"
        padding
        :arrows="$q.screen.gt.xs"
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
            <q-card
              v-for="(course, index) in section2_courses.slice(
                getStartingCard(n),
                getEndingCard(n)
              )"
              :key="index"
              class="our-courses-section__section-2__course-card bg-white"
              :class="`bg-${course.cardColor}`"
              flat
            >
              <q-card-section
                class="our-courses-section__section-2__course-card__title"
                :class="`text-${course.titleColor}`"
              >
                {{ course.title }}
              </q-card-section>

              <q-card-section
                class="our-courses-section__section-2__course-card__description"
              >
                {{ course.description }}
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {
    const $store = useStore();
    const $q = useQuasar();

    const section1_label = computed(() => {
      return $store.state.home.homePageOurCoursesSection.section1.label;
    });
    const section1_title = computed(() => {
      return $store.state.home.homePageOurCoursesSection.section1.title;
    });

    const section2_courses = computed(() => {
      return $store.state.home.homePageOurCoursesSection.section2.courses;
    });

    const startingSlide = ref(1);
    const numberOfCardsInEachSlide = computed(() => {
      let numberOfCardsInEachSlide = 0;
      if ($q.screen.gt.lg) numberOfCardsInEachSlide = 4;
      if ($q.screen.md) numberOfCardsInEachSlide = 3;
      if ($q.screen.sm) numberOfCardsInEachSlide = 2;
      if ($q.screen.xs) numberOfCardsInEachSlide = 1;
      return numberOfCardsInEachSlide;
    });
    const totalNumberOfSlides = computed(() => {
      return Math.ceil(
        section2_courses.value.length / numberOfCardsInEachSlide.value
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
      section1_label,
      section1_title,

      section2_courses,
      startingSlide,
      totalNumberOfSlides,
      getStartingCard,
      getEndingCard,
    };
  },
};
</script>

<style scoped>
.our-courses-section__section-1__label {
  font-size: 18px;
  color: #fd7f09;
}
.our-courses-section__section-1__title {
  font-size: 33px;
}

.our-courses-section__section-2__course-card {
  width: 350px;
  border-radius: 20px;
  padding: 1.5rem 1rem;
}
.our-courses-section__section-2__course-card__title {
  font-size: 18px;
  padding-bottom: 0;
}
.our-courses-section__section-2__course-card__description {
  font-size: 14px;
  font-family: "GE_SS_Two_Light";
  color: #565656;
  line-height: 28px;
}
</style>
