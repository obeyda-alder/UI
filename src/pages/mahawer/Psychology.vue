<template>
  <q-page>
    <Mehwar1 :data="data" />
  </q-page>
</template>

<script>
import { defineAsyncComponent, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Mehwar1: defineAsyncComponent(() => import("components/UI/Mehwar1.vue")),
  },
  setup() {
    const $store = useStore();

    /* Data From Vuex Store */
    const data = computed(() => {
      return $store.state.psychology;
    });

    return {
      data,
    };
  },
};
</script>