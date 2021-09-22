<template>
  <q-toolbar class="bg-white">
    <router-link :to="{ name: 'Home' }">
      <q-img src="images/Mask Group 4@2x.png" width="160px" loading="lazy" />
    </router-link>

    <q-space />

    <q-tabs
      class="text-black content-end gt-sm"
      indicator-color="red"
      active-color="red"
      stretch
    >
      <q-route-tab
        :to="{ name: navLinks[0].link }"
        :label="navLinks[0].title"
      />
      <q-route-tab
        :to="{ name: navLinks[1].link }"
        :label="navLinks[1].title"
      />

      <q-btn-dropdown stretch flat :label="navLinks[2].title">
        <q-list>
          <q-btn-dropdown
            v-for="(subItem, index) in navLinks[2].subItems"
            :key="index"
            stretch
            flat
            :label="subItem.title"
            auto-close
          >
            <q-list>
              <q-item
                v-for="(subItem, index) in subItem.subItems"
                :key="index"
                clickable
                :to="{ name: subItem.link }"
                active-class="text-red"
              >
                <q-item-section>{{ subItem.title }}</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-list>
      </q-btn-dropdown>

      <q-route-tab
        :to="{ name: navLinks[3].link }"
        :label="navLinks[3].title"
      />
      <q-route-tab
        :to="{ name: navLinks[4].link }"
        :label="navLinks[4].title"
      />
      <q-route-tab
        :to="{ name: navLinks[5].link }"
        :label="navLinks[5].title"
      />
    </q-tabs>

    <q-btn
      class="lt-md"
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="toggleDrawer"
      color="black"
    />
  </q-toolbar>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const $store = useStore();
    const navLinks = computed(() => {
      return $store.state.home.navLinks;
    });

    const toggleDrawer = () => {
      $store.commit("general/toggleDrawer");
    };
    return {
      navLinks,
      toggleDrawer,
    };
  },
};
</script>

<style scoped>
::v-deep(.q-tab__label),
::v-deep(.block),
.q-item__section {
  font-weight: 700;
}
</style>
