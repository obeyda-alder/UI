<template>
  <q-card class="blog-card column overflow-hidden">
    <!-- Card Img -->
    <q-img
      class="blog-card__img"
      :src="serverUrl + blogPost.imgPath"
      :ratio="2 / 1.1"
    />

    <!-- Card Time and date -->
    <q-card-section class="blog-card__time-and-date row items-center q-py-xs">
      <q-icon class="q-mr-xs" name="schedule" size="14px" color="white" />
      <span class="blog-card__time-and-date__time"
        >{{ blogPost.creationTime }} -
      </span>
      <span class="blog-card__time-and-date__date">{{
        blogPost.creationDate
      }}</span>
    </q-card-section>

    <!-- Card Title -->
    <q-card-section class="blog-card__title" v-html="blogPost.title">
    </q-card-section>

    <!-- Card Description -->
    <q-card-section class="blog-card__description q-pt-none">
      {{ blogPost.description.substr(0, 180) }}
    </q-card-section>

    <!-- Card Link to the Blog Post -->
    <q-card-section class="blog-card__link q-pt-none q-mb-md">
      <router-link :to="{ name: 'BlogPost', params: { id: blogPost.id } }">
        <span class="q-mr-sm">اعرف المزيد</span>
        <q-icon name="west" />
      </router-link>
    </q-card-section>
  </q-card>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: ["blogPost"],
  setup() {
    const $store = useStore();
    const serverUrl = computed(() => {
      return $store.state.home.serverUrl;
    });

    return {
      serverUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-card {
  border-radius: 14px;
}
.blog-card:hover {
  box-shadow: $shadow-6;
}
.blog-card:hover > .blog-card__img {
  scale: 1.1;
}
.blog-card__img {
  transition: 0.1s linear;
}
.blog-card__time-and-date {
  background-color: #09ab4f;
  height: 33px;
}
.blog-card__time-and-date__time,
.blog-card__time-and-date__date {
  font-size: 12px;
  color: white;
}
.blog-card__title {
  font-size: 16px;
}
.blog-card__description {
  font-size: 12px;
  font-family: "GE_SS_Two_Light";
  line-height: 20px;
  color: #565656;
}
.blog-card__link {
  font-size: 15px;
  font-family: "GE_SS_Two_Light";
}
.blog-card__link a {
  color: #09ab4f;
  text-decoration: none;
}
</style>
