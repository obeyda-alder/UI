<template>
  <div class="icon-and-title-card row items-center">
    <q-img
      :src="data.img"
      loading="lazy"
      class="icon-and-title-card__img"
      width="54px"
    />
    <p class="icon-and-title-card__title">
      {{ data.title }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["data"],
  setup() {},
};
</script>

<style scoped>
.icon-and-title-card {
  background-color: white;
  border-radius: 9px;
}
.icon-and-title-card__img {
  margin-left: 1.2rem;
}
.icon-and-title-card__title {
  font-size: 18px;
  margin-bottom: 0;
  margin-left: 1rem;
}
</style>