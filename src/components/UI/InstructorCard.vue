<template>
  <q-card class="instructor-card column items-center">
    <!-- Instructor Img -->
    <q-img class="instructor-card__img" :src="instructor.img" :ratio="5 / 6" />

    <!-- Instructor Name -->
    <q-card-section class="instructor-card__name">
      {{ instructor.name }}
    </q-card-section>

    <!-- Instructor Profession -->
    <q-card-section class="instructor-card__profession q-pt-none">
      {{ instructor.profession }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["instructor"],
};
</script>

<style lang="scss" scoped>
.instructor-card {
  border-radius: 14px;
  // width: 255px;
  transition: 0.1s linear;
}
.instructor-card:hover {
  box-shadow: $shadow-6;
  scale: 1.05;
}
.instructor-card__name {
  font-size: 16px;
}
.instructor-card__profession {
  font-size: 16px;
  font-family: "GE_SS_Two_Light";
  color: #fd7f09;
}
</style>