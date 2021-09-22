<template>
  <q-page>
    <Header :header="data.header" />

    <section class="mehwar row">
      <!-- Text and Picture Section -->
      <section class="mehwar__section-1 col-12 row items-center">
        <section
          class="
            mehwar__section-1__text
            col-12 col-md-4
            offset-md-1
            q-px-md q-px-md-none
          "
        >
          <p class="mehwar__section-1__text__title">
            {{ data.section1.title }}
          </p>
          <p
            class="mehwar__section-1__text__label"
            :class="`text-${data.section1.labelColor}`"
          >
            {{ data.section1.label }}
          </p>
          <p
            class="mehwar__section-1__text__description q-pr-md-lg"
            v-html="data.section1.description"
          ></p>
        </section>
        <section
          class="
            mehwar__section-1__img
            col-12 col-md-6
            q-px-sm q-px-md-none q-pl-md-xl
          "
        >
          <q-img loading="lazy" :src="data.section1.img" />
        </section>
      </section>

      <!-- Frames and Goals Section -->
      <section class="mehwar__section-2 col-12 col-md-10 offset-md-1">
        <div
          class="mehwar__section-2__titles row items-center q-px-md q-py-md"
          :class="`text-${data.section2.titleColor}`"
        >
          <p class="col-3 q-ma-none">الإطار العام</p>
          <p class="col-9 q-ma-none q-pl-md">الأهداف العامة</p>
        </div>
        <div
          class="mehwar__section-2__items row items-center q-px-md q-py-md"
          :class="{ 'bg-grey-2': index % 2 === 0 }"
          v-for="(item, index) in data.section2.items"
          :key="index"
        >
          <p class="mehwar__section-2__items__title col-3 q-ma-none">
            {{ item.title }}
          </p>
          <div class="mehwar__section-2__items__descriptions col-9 row">
            <p
              class="
                mehwar__section-2__items__descriptions__description
                q-ma-none q-pl-md q-mt-md q-mt-sm-xs
                col-12 col-md-6
              "
              v-for="(description, index) in item.descriptions"
              :key="index"
            >
              <q-icon
                :color="`${data.section2.descriptionColor}`"
                name="check"
                size="18px"
              />

              {{ description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Icons Section -->
      <section class="mehwar__section-3 col-12 row justify-center">
        <IconAndTitleCard
          class="
            mehwar__section-3__card
            col-12 col-md-4
            q-mx-sm-lg q-my-md
            shadow-5
          "
          v-for="(item, index) in data.section3.items"
          :key="index"
          :data="item"
        />
      </section>
    </section>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  props: ["data"],
  components: {
    Header: defineAsyncComponent(() => import("components/UI/Header.vue")),
    IconAndTitleCard: defineAsyncComponent(() =>
      import("components/UI/IconAndTitleCard.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
.mehwar__section-1,
.mehwar__section-2,
.mehwar__section-3 {
  margin-top: 4rem;
}

.mehwar__section-1__text__title {
  font-size: 40px;
}
.mehwar__section-1__text__label {
  font-size: 32px;
  font-family: "GE_SS_Two_Bold";
}
.mehwar__section-1__text__description {
  font-size: 16px;
  color: #7a848a;
  line-height: 31px;
}

.mehwar__section-2 {
  margin-top: 3rem;
}
.mehwar__section-2__titles {
  font-size: 16px;
}
.mehwar__section-2__items__title {
  font-size: 18px;
}
.mehwar__section-2__items__descriptions__description {
  font-size: 16px;
  color: #7a848a;
  font-family: "GE_SS_Two_Light";
}

.mehwar__section-3 {
  background-color: #f8f8fc;
  padding: 4rem 0;
}
.mehwar__section-3__card {
  max-width: 350px;
  height: 95px;
}
</style>