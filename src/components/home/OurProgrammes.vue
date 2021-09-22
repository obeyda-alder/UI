<template>
  <section class="home__our-programmes q-pt-lg q-pt-md-xl">
    <!-- Header -->
    <header
      class="home__our-programmes__header overflow-hidden column items-center"
    >
      <p class="home__our-programmes__header__bg-text">
        {{ header.bgText }}
      </p>
      <p class="home__our-programmes__header__label">
        {{ header.label }}
      </p>
      <p
        class="home__our-programmes__header__title text-center"
        v-html="header.title"
      ></p>
    </header>

    <!-- Hayat Programme -->
    <section
      class="home__our-programmes__hayat-programme row q-mt-xl q-mt-md-xl"
      id="lifeProgramme"
    >
      <div
        class="
          home__our-programmes__hayat-programme__text
          col-10 col-md-4
          offset-1
          q-mt-md q-mt-md-xl
        "
      >
        <p class="home__our-programmes__hayat-programme__text__title">
          {{ hayatProgramme.title }}
        </p>
        <p class="home__our-programmes__hayat-programme__text__description">
          {{ hayatProgramme.description }}
        </p>
      </div>
      <div
        class="
          home__our-programmes__hayat-programme__images
          col-11 col-md-6
          q-mt-lg q-mt-md-xs
          row
        "
      >
        <q-img
          :src="hayatProgramme.img1"
          loading="lazy"
          class="home__our-programmes__hayat-programme__images__img1"
        />
      </div>
    </section>

    <!-- Hayat Programme Mahawer -->
    <section
      v-intersection="onHayatProgrammeMahawerIntersection"
      class="home__our-programmes__hayat-programme-mahawer q-mt-lg"
      :class="{ 'bg-visible': isHayatProgrammeMahawerBgImgVisible }"
    >
      <div class="row">
        <p
          class="
            home__our-programmes__hayat-programme-mahawer__title
            col-11
            offset-1
            q-my-xl
          "
        >
          {{ hayatProgrammeMahawer.title }}
        </p>

        <div
          class="
            home__our-programmes__hayat-programme-mahawer__mahawer
            col-12 col-md-9
            offset-md-1
            q-my-lg
            row
            justify-center justify-md-start
          "
        >
          <router-link
            v-for="(mehwar, index) in hayatProgrammeMahawer.mahawer"
            :key="index"
            class="row justify-center justify-md-start"
            :to="{ name: mehwar.link }"
          >
            <q-card
              class="
                home__our-programmes__hayat-programme-mahawer__mahawer__mehwar-card
                bg-white
                q-mr-sm-lg q-mr-none q-mb-lg
                column
                items-center
                justify-center
              "
              flat
            >
              <q-card-section class="q-pa-none">
                <q-img
                  class="
                    home__our-programmes__hayat-programme-mahawer__mahawer__mehwar-card__img
                  "
                  :src="mehwar.img"
                  loading="lazy"
                  width="76px"
                />
              </q-card-section>

              <q-card-section
                class="
                  home__our-programmes__hayat-programme-mahawer__mahawer__mehwar-card__title
                  text-center
                "
              >
                {{ mehwar.title }}
              </q-card-section>
            </q-card>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Yaktashif Programme -->
    <section
      class="home__our-programmes__yaktashif-programme row q-mt-xs q-mt-md-lg"
    >
      <div
        class="
          home__our-programmes__yaktashif-programme__images
          col-11 col-md-6
          offset-1
          q-mt-lg q-mt-md-xs
          row
        "
      >
        <q-img
          :src="yaktashifProgramme.img"
          loading="lazy"
          class="home__our-programmes__yaktashif-programme__images__img1"
        />
      </div>

      <div
        class="
          home__our-programmes__yaktashif-programme__text
          col-10 col-md-4
          offset-1 offset-md-0
          q-mt-xl q-mt-md-xl
        "
      >
        <p class="home__our-programmes__yaktashif-programme__text__title">
          {{ yaktashifProgramme.title }}
        </p>
        <p class="home__our-programmes__yaktashif-programme__text__description">
          {{ yaktashifProgramme.description }}
        </p>

        <q-list dense>
          <q-item
            class="no-padding q-mt-sm"
            v-for="(item, index) in yaktashifProgramme.list"
            :key="index"
          >
            <q-item-section side>
              <q-icon color="orange" name="check" />
            </q-item-section>
            <q-item-section
              class="home__our-programmes__yaktashif-programme__text__list-text"
              >{{ item }}</q-item-section
            >
          </q-item>
        </q-list>
      </div>
    </section>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const $store = useStore();

    const header = computed(() => {
      return $store.state.home.homePage_ourProgrammes.header;
    });
    const hayatProgramme = computed(() => {
      return $store.state.home.homePage_ourProgrammes.hayatProgramme;
    });

    const hayatProgrammeMahawer = computed(() => {
      return $store.state.home.homePage_ourProgrammes.hayatProgrammeMahawer;
    });
    const isHayatProgrammeMahawerBgImgVisible = ref(false);
    const onHayatProgrammeMahawerIntersection = (entry) => {
      if (entry.isIntersecting) {
        isHayatProgrammeMahawerBgImgVisible.value = true;
      }
    };

    const yaktashifProgramme = computed(() => {
      return $store.state.home.homePage_ourProgrammes.yaktashifProgramme;
    });

    return {
      header,
      hayatProgramme,
      hayatProgrammeMahawer,

      isHayatProgrammeMahawerBgImgVisible,
      onHayatProgrammeMahawerIntersection,

      yaktashifProgramme,
    };
  },
};
</script>

<style scoped>
.home__our-programmes {
  position: relative;
}

/* Header */
.home__our-programmes__header {
  position: relative;
}
.home__our-programmes__header__bg-text {
  font-size: 201px;
  font-family: "GE_SS_Two_Bold";
  color: #f5f6f7;
}
.home__our-programmes__header__label {
  font-size: 18px;
  font-weight: 700;
  color: #fd7f09;
  position: absolute;
  margin-top: 11.5rem;
}
.home__our-programmes__header__title {
  font-size: 33px;
  position: absolute;
  margin-top: 14rem;
}

/* Hayat Programme */
.home__our-programmes__hayat-programme__text__title {
  font-size: 28px;
}
.home__our-programmes__hayat-programme__text__description {
  font-size: 16px;
  font-family: "GE_SS_Two_Light";
  color: #7a848a;
  line-height: 31px;
}
.home__our-programmes__hayat-programme__images {
  position: relative;
}

/* Hayat Programme Mahawer */
.home__our-programmes__hayat-programme-mahawer {
  position: relative;
  background-color: #ebeced;
  /* top: -10rem;
  z-index: -1; */
}
.home__our-programmes__hayat-programme-mahawer.bg-visible {
  position: relative;
  background-image: url("/images/home/our-programmes/Group 6569@2x.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* top: -10rem;
  z-index: -1; */
}
.home__our-programmes__hayat-programme-mahawer__title {
  font-size: 28px;
  color: black;
}
.home__our-programmes__hayat-programme-mahawer__mahawer__mehwar-card {
  border-radius: 22px;
  border: 1px solid #eeeeee;
  width: 255px;
  height: 198px;
  transition: all 0.2s;
}
.home__our-programmes__hayat-programme-mahawer__mahawer__mehwar-card:hover {
  scale: 1.1;
}
.home__our-programmes__hayat-programme-mahawer__mahawer__mehwar-card__title {
  font-size: 18px;
  color: black;
}

/* Yaktashif Programme */
.home__our-programmes__yaktashif-programme__text__title {
  font-size: 28px;
}
.home__our-programmes__yaktashif-programme__text__description {
  font-size: 16px;
  color: #565656;
  font-family: "GE_SS_Two_Light";
  line-height: 31px;
}
.home__our-programmes__yaktashif-programme__text__list-text {
  font-size: 16px;
  color: #565656;
  font-family: "GE_SS_Two_Light";
}
</style>
