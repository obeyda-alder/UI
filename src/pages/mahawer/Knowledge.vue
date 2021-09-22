<template>
  <q-page>
    <Mehwar2 :data="data" />
  </q-page>
</template>

<script>
import { defineAsyncComponent, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Mehwar2: defineAsyncComponent(() => import("components/UI/Mehwar2.vue")),
  },
  setup() {
    const $store = useStore();

    /* Data From Vuex Store */
    const data = computed(() => {
      return $store.state.knowledge;
    });

    return {
      data,
    };
  },
};
</script>