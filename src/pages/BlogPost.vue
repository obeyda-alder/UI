<template>
  <!-- BlogPost Page -->
  <q-page>
    <Header :header="data.header" />

    <!-- Body -->
    <section class="blog-post row">
      <!-- Categories -->
      <section
        class="blog__categories-section col-12 col-md-3 row justify-center"
      >
        <BlogCategories
          class="blog__categories-section__categories col-11"
          :categories="data.categories"
        />
      </section>

      <!-- Post -->
      <section
        class="
          blog-post__post
          col-12 col-md-9
          q-mt-lg q-mt-md-none q-px-md q-px-md-none
          row
        "
      >
        <!-- Post Title -->
        <p class="blog-post__post__title col-12">{{ data.post.title }}</p>
        <!-- Post Time and Date -->
        <div class="blog-post__post__time-and-date col-12 row items-center">
          <q-icon class="q-mr-xs" name="schedule" size="16px" color="black" />
          <span class="blog-post__post__time-and-date__time"
            >{{ data.post.time }} -
          </span>
          <span class="blog-post__post__time-and-date__date">
            {{ data.post.date }}
          </span>
        </div>
        <!-- Post Img -->
        <q-img
          class="blog-post__post__img col-12 col-md-11 q-mt-md"
          loading="lazy"
          :src="data.post.img"
          :ratio="3 / 1.3"
        />
        <!-- Post Description -->
        <p
          class="blog-post__post__description col-12 col-md-11"
          v-html="data.post.description"
        ></p>
      </section>

      <!-- Tags Bar -->
      <section
        class="
          blog-post__tags-bar
          col-12 col-md-9
          offset-none offset-md-3
          q-mt-sm q-py-md q-px-md q-px-md-none
          row
        "
      >
        <div class="blog-post__tags-bar__tags">
          <q-icon
            class="q-mr-md"
            name="local_offer"
            size="17px"
            color="black"
          />
          <span
            class="blog-post__tags-bar__tags__tag q-mr-md"
            v-for="(tag, index) in data.tags"
            :key="index"
            >{{ tag }}</span
          >
        </div>
      </section>

      <!-- Related Articles Section -->
      <section
        class="
          blog-post__related-articles
          col-12 col-md-9
          offset-none offset-md-3
          q-mt-md q-pt-md q-px-md q-px-md-none
          row
          justify-center justify-md-start
        "
      >
        <div class="col-12">
          <p class="blog-post__related-articles__title">مدونات ذات صلة</p>
        </div>
        <BlogCard
          class="
            blog-post__related-articles__post
            col-10 col-sm-5 col-md-3
            q-mr-md-lg q-mb-lg
          "
          v-for="(post, index) in data.relatedPosts"
          :key="index"
          :post="post"
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
    BlogCategories: defineAsyncComponent(() =>
      import("../components/UI/BlogCategories.vue")
    ),
    BlogCard: defineAsyncComponent(() =>
      import("../components/UI/BlogCard.vue")
    ),
  },
  setup() {
    const $store = useStore();

    const data = computed(() => {
      return $store.state.blogPost;
    });

    return {
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-post {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.blog__categories-section__categories {
  width: 75%;
}

/* Post Section */
.blog-post__post__title {
  font-size: 24px;
}
.blog-post__post__time-and-date {
  font-size: 12px;
}
.blog-post__post__img {
  border-radius: 15px;
}
.blog-post__post__description {
  font-size: 16px;
  color: #7a848a;
  line-height: 31px;
  margin-top: 2.5rem;
}

.blog-post__tags-bar {
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
}
.blog-post__tags-bar__tags__tag {
  font-size: 16px;
  font-family: "GE_SS_Two_Light";
}

.blog-post__related-articles__title {
  font-size: 18px;
}
</style>
