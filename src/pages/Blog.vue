<template>
  <q-page>
    <Header :header="data.header" />

    <!-- Blog Body -->
    <section class="blog row">
      <section
        class="blog__categories-section col-12 col-md-3 row justify-center"
      >
        <BlogCategories
          class="blog__categories-section__categories col-11"
          :categories="data.categories"
        />
      </section>

      <!-- Posts Section -->
      <section class="blog__posts-section col-12 col-md-9 row justify-center">
        <BlogCard
          class="
            blog__posts-section__post
            col-10 col-sm-5 col-md-3
            q-mr-none q-mr-sm-lg q-mb-lg
          "
          v-for="(post, index) in data.posts"
          :key="index"
          :post="post"
        />
      </section>

      <!-- Pagination -->
      <section
        class="blog__pagination col-12 col-md-9 offset-md-3 row justify-center"
      >
        <q-pagination
          v-model="currentPage"
          :max="50"
          :max-pages="5"
          direction-links
          color="green-7"
          size="16px"
        />
      </section>
    </section>
  </q-page>
</template>

<script>
import { defineAsyncComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Header: defineAsyncComponent(() => import("../components/UI/Header.vue")),
    BlogCard: defineAsyncComponent(() => import("components/UI/BlogCard.vue")),
    BlogCategories: defineAsyncComponent(() =>
      import("../components/UI/BlogCategories.vue")
    ),
  },
  setup() {
    const $store = useStore();

    /* Data From Vuex Store */
    const data = computed(() => {
      return $store.state.blog;
    });

    /* Pagination */
    const currentPage = ref(1);

    return {
      data,
      currentPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.blog__categories-section {
  margin-bottom: 1.5rem;
}
.blog__categories-section__categories {
  width: 75%;
}

/* Posts Section */
.blog__posts-section__post {
  width: 290px;
  // width: 30%;
}

/* Pagination */
.blog__pagination {
  margin-top: 3rem;
}
</style>