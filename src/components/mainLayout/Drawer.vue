<template>
  <q-drawer v-model="isDrawerOpen" overlay class="bg-grey-1">
    <q-list>
      <q-item @click="toggleDrawer" clickable v-ripple>
        <q-item-section class="content-center">
          <q-icon name="close" size="2rem" />
        </q-item-section>
      </q-item>

      <q-item
        :to="{ name: navLinks[0].link }"
        clickable
        :active="navLinks[0].link === currentRoute"
        active-class="text-green"
      >
        <q-item-section avatar>
          <q-icon :name="navLinks[0].icon" />
        </q-item-section>

        <q-item-section>{{ navLinks[0].title }}</q-item-section>
      </q-item>

      <q-item
        :to="{ name: navLinks[1].link }"
        clickable
        :active="navLinks[1].link === currentRoute"
        active-class="text-green"
      >
        <q-item-section avatar>
          <q-icon :name="navLinks[1].icon" />
        </q-item-section>

        <q-item-section>{{ navLinks[1].title }}</q-item-section>
      </q-item>

      <q-expansion-item :icon="navLinks[2].icon" :label="navLinks[2].title">
        <q-expansion-item
          v-for="(subItems, index) in navLinks[2].subItems"
          :key="index"
          :icon="subItems.icon"
          :label="subItems.title"
          :header-inset-level="0.5"
          :content-inset-level="1"
        >
          <q-item
            v-for="(subItem, index) in subItems.subItems"
            :key="index"
            :to="{ name: subItem.link }"
            clickable
            :active="subItem.link === currentRoute"
            active-class="text-green"
          >
            <q-item-section avatar>
              <q-icon :name="subItem.icon" />
            </q-item-section>

            <q-item-section>{{ subItem.title }}</q-item-section>
          </q-item>
        </q-expansion-item>
      </q-expansion-item>

      <q-item
        :to="{ name: navLinks[3].link }"
        clickable
        :active="navLinks[3].link === currentRoute"
        active-class="text-green"
      >
        <q-item-section avatar>
          <q-icon :name="navLinks[3].icon" />
        </q-item-section>

        <q-item-section>{{ navLinks[3].title }}</q-item-section>
      </q-item>

      <q-item
        :to="{ name: navLinks[4].link }"
        clickable
        :active="navLinks[4].link === currentRoute"
        active-class="text-green"
      >
        <q-item-section avatar>
          <q-icon :name="navLinks[4].icon" />
        </q-item-section>

        <q-item-section>{{ navLinks[4].title }}</q-item-section>
      </q-item>

      <q-item
        :to="{ name: navLinks[5].link }"
        clickable
        :active="navLinks[5].link === currentRoute"
        active-class="text-green"
      >
        <q-item-section avatar>
          <q-icon :name="navLinks[5].icon" />
        </q-item-section>

        <q-item-section>{{ navLinks[5].title }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const $store = useStore();

    const navLinks = computed(() => {
      return $store.state.home.navLinks;
    });
    const isDrawerOpen = computed({
      get: () => $store.state.home.isDrawerOpen,
      set: (isDrawerOpen) => {
        $store.commit("general/toggleDrawer", isDrawerOpen);
      },
    });

    const toggleDrawer = () => {
      $store.commit("general/toggleDrawer");
    };

    const router = useRouter();
    const currentRoute = ref(router.currentRoute.value.name);

    return {
      navLinks,
      isDrawerOpen,
      toggleDrawer,
      currentRoute,
    };
  },
};
</script>

<style scoped>
.q-item,
.q-expansion-item {
  font-weight: 700;
}
</style>
