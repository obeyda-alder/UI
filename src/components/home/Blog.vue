<template>
  <section class="home__blog q-mt-xl q-pt-xl column items-center">
    <!-- Header -->
    <header class="home__blog__header column items-center">
      <p class="home__blog__header__label">
        {{ data.header.label }}
      </p>
      <p
        class="home__blog__header__title text-center"
        v-html="data.header.title"
      ></p>
    </header>

    <!-- Posts -->
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
      height="30rem"
    >
      <q-carousel-slide
        v-for="(n, index) in totalNumberOfSlides"
        :key="index"
        :name="n"
        class="column no-wrap items-center"
      >
        <div class="row fit justify-center items-center q-gutter-lg no-wrap">
          <BlogCard
            class="col-10 col-sm-5 col-md-3"
            v-for="(blogPost, index) in blogPosts.slice(
              getStartingCard(n),
              getEndingCard(n)
            )"
            :key="index"
            :blogPost="blogPost"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Button with a link to the Blog -->
    <q-btn
      class="home__blog__button q-mt-md"
      :to="{ name: data.link }"
      padding="0.8rem 2.5rem"
      outline
      rounded
      color="green"
      label="اعرف المزيد"
    />
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, defineAsyncComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { api } from "boot/axios";
export default {
  components: {
    BlogCard: defineAsyncComponent(() => import("components/UI/BlogCard.vue")),
  },
  setup() {
    const $store = useStore();
    const $q = useQuasar();

    const data = computed(() => {
      return $store.state.home.homePage_blog;
    });
    const blogPosts = ref([]);

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
      return Math.ceil(blogPosts.value.length / numberOfCardsInEachSlide.value);
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
      blogPosts,

      startingSlide,
      totalNumberOfSlides,
      getStartingCard,
      getEndingCard,
    };
  },

  mounted() {
    const getSomeLatestBlogPosts = async () => {
      const res = await api({
        url: "/get-some-latest-blog-posts/0/9",
        method: "GET",
      });
      this.blogPosts = res.data.SomeLatestBlogPosts;
    };
    getSomeLatestBlogPosts();
  },
};
</script>

<style lang="scss" scoped>
/* Header */
.home__blog__header__label {
  font-size: 18px;
  color: #fd7f09;
}
.home__blog__header__title {
  font-size: 33px;
}

.home__blog__button {
  width: 172px;
}
::v-deep(.block) {
  color: #09ab4f;
}
</style>
