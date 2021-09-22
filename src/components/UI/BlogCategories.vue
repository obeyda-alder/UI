<template>
  <section
    class="blog-categories items-center items-md-start column q-mt-xs-lg"
  >
    <p class="blog-categories__title">الأقسام الرئيسية</p>
    <div class="blog-categories__items column">
      <div
        class="blog-categories__items__item row justify-between items-center"
        v-for="(category, index) in categories"
        :key="index"
      >
        <p class="blog-categories__items__item__name">{{ category.name }}</p>
        <p class="blog-categories__items__item__count">{{ category.count }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["categories"],
};
</script>

<style scoped>
.blog-categories__title {
  font-size: 18px;
  width: 100%;
}
.blog-categories__items {
  margin-top: 0.5rem;
  width: 100%;
}
.blog-categories__items__item {
  border: 1px solid #d4d4d4;
  border-radius: 9px;
  /* width: 220px; */
  width: 100%;
  height: 53px;
  padding: 0 1rem;
  margin-top: 0.6rem;
}
.blog-categories__items__item__name,
.blog-categories__items__item__count {
  margin-bottom: 0;
}
.blog-categories__items__item__name {
  color: #6f6f6f;
  font-size: 14px;
}
.blog-categories__items__item__count {
  font-size: 16px;
  color: white;
  background-color: #fd7f09;
  padding: 0.1rem 0.3rem;
  border-radius: 5px;
}
</style>