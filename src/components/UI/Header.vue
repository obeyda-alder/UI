<template>
  <section
    class="header row justify-center items-center"
    v-intersection="onIntersection"
    :class="{ 'bg-visible': isBgImgVisible }"
  >
    <div class="col-12 column items-center">
      <p class="header__title">{{ header.title }}</p>
      <q-breadcrumbs
        :class="`text-${header.activeLinkColor}`"
        active-color="white"
        align="center"
      >
        <template v-slot:separator>
          <q-icon size="18px" name="chevron_right" color="white" />
        </template>

        <q-breadcrumbs-el
          v-for="(item, index) in header.breadCrumb"
          :key="index"
          :label="item.name"
          :icon="item.icon"
          :to="{ name: item.link }"
        />
      </q-breadcrumbs>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["header"],
  setup() {
    const isBgImgVisible = ref(false);
    const onIntersection = (entry) => {
      if (entry.isIntersecting) {
        isBgImgVisible.value = true;
      }
    };

    return {
      isBgImgVisible,
      onIntersection,
    };
  },
};
</script>

<style scoped>
.header {
  background-color: grey;
  height: 332px;
}
.header.bg-visible {
  background-image: url("/images/about-us/Group 6534@2x.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
}
.header__title {
  font-size: 45px;
  font-family: "GE_SS_Two_Bold";
  color: white;
}
</style>