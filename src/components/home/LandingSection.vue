<template>
  <div class="landing-section">
    <q-img loading="lazy" position="80%" height="35rem" :src="bgImg">
      <div class="transparent absolute-full row items-center">
        <div
          class="
            landing-section__text-box
            col-md-4
            offset-md-1
            col-sm-5
            offset-sm-1
          "
        >
          <transition name="fade-title" mode="out-in">
            <div :key="textBoxItems[activeTextBoxItem].title">
              <p
                class="landing-section__text-box__title"
                v-html="textBoxItems[activeTextBoxItem].title"
              ></p>
            </div>
          </transition>

          <transition name="fade-description" mode="out-in">
            <div :key="textBoxItems[activeTextBoxItem].title">
              <p class="landing-section__text-box__description">
                {{ textBoxItems[activeTextBoxItem].description }}
              </p>
            </div>
          </transition>

          <transition name="fade-button" mode="out-in">
            <div :key="textBoxItems[activeTextBoxItem].title">
              <q-btn
                class="landing-section__text-box__button q-mt-md"
                :to="{ name: textBoxItems[activeTextBoxItem].buttonLink }"
                padding="0.8rem 2.5rem"
                outline
                rounded
                color="white"
                :label="textBoxItems[activeTextBoxItem].buttonLabel"
              />
            </div>
          </transition>
        </div>
      </div>
    </q-img>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const $store = useStore();

    const bgImg = computed(() => {
      return $store.state.home.homePage_landingSection.backgroundImg;
    });
    const textBoxItems = computed(() => {
      return $store.state.home.homePage_landingSection.textBoxContent;
    });
    const activeTextBoxItem = computed(() => {
      return $store.state.home.homePage_landingSection.activeTextBoxContent;
    });

    const changeTextBoxItem = () => {
      $store.commit("general/changeLandingSectionText");
    };

    const changeItemTimer = setInterval(() => {
      changeTextBoxItem();
    }, 6000);

    onMounted(() => {
      changeItemTimer;
    });

    onUnmounted(() => {
      clearInterval(changeItemTimer);
    });

    return {
      bgImg,
      textBoxItems,
      activeTextBoxItem,
    };
  },
};
</script>

<style scoped>
.landing-section__text-box__title,
.landing-section__text-box__description,
.landing-section__text-box__learn-more-button {
  color: white;
}
.landing-section__text-box__title {
  font-size: 33px;
}
.landing-section__text-box__description {
  font-size: 16px;
  font-family: "GE_SS_Two_Light";
  line-height: 28px;
}
.landing-section__text-box__button {
  width: 172px;
}
::v-deep(.block) {
  font-size: 16px;
}

/* Animations */

.fade-title-enter-active {
  animation: fadeInDown 1s;
}
.fade-title-leave-active {
  animation: fadeOutUp 1s;
}

.fade-description-enter-active {
  animation: fadeInRight 1s;
}
.fade-description-leave-active {
  animation: fadeOutRight 1s;
}

.fade-button-enter-active {
  animation: fadeInUp 1s;
}
.fade-button-leave-active {
  animation: fadeOutDown 1s;
}
</style>
