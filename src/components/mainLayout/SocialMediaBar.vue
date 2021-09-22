<template>
  <q-toolbar class="bg-white justify-end">
    <a
      v-for="(item, index) in socialMediaItems"
      :key="index"
      target="__blank"
      :href="item.link"
      class="q-mx-sm social-media-item"
    >
      <q-img :src="item.img" width="1rem" loading="lazy" />
    </a>
  </q-toolbar>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const $store = useStore();
    const socialMediaItems = computed(() => {
      return $store.state.home.socialMediaItems;
    });

    return {
      socialMediaItems,
    };
  },
};
</script>

<style scoped>
.q-toolbar {
  border-bottom: 2px solid #efefef;
}
.social-media-item {
  transition: 0.1s linear;
}
.social-media-item:hover {
  scale: 1.5;
}
</style>
