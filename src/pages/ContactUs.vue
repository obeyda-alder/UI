<template>
  <section class="contact-us">
    <Header :header="data.header" />

    <!-- Contact Form and Map -->
    <section class="contact-us__section-1 row">
      <!-- Contact Form -->
      <section
        class="
          contact-us__section-1__contact-form
          col-12 col-md-4
          q-pl-md q-pl-md-xl q-pr-md
        "
      >
        <ContatcUsForm :data="data.section1.form" />
      </section>

      <!-- Map -->
      <section
        class="
          contact-us__section-1__map
          col-12 col-md-8
          q-px-none q-pl-md-md q-pr-md-xl q-mt-lg q-mt-md-none
        "
      >
        <iframe
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=G%C3%BCne%C5%9Fli,%20Fevzi%20%C3%87akmak%20Cd.%20No:72-74,%2034212%20Ba%C4%9Fc%C4%B1lar/%C4%B0stanbul%20Istanbul+(Erdem%20Hospital)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
        <a style="visibility: hidden" href="https://add-map.com/"
          >add a google map to my website</a
        >
      </section>
    </section>

    <!-- Icons Section -->
    <section class="contact-us__section-2 col-12 row justify-center">
      <!-- Card 1 (Phone and Mobile) -->
      <div
        class="
          contact-us__section-2__card-1
          col-12 col-md-4
          q-mx-sm-lg q-my-md
          shadow-5
          row
          items-center
        "
      >
        <q-img
          :src="data.section2.items[0].img"
          loading="lazy"
          class="contact-us__section-2__card-1__img col-3"
          width="54px"
        />
        <div class="col-9">
          <p class="contact-us__section-2__card-1__phone">
            هاتف الأكاديمية:
            {{ data.section2.items[0].phone }}
          </p>
          <p class="contact-us__section-2__card-1__mobile">
            الموبايل:
            {{ data.section2.items[0].mobile }}
          </p>
        </div>
      </div>

      <!-- Card 2 (Location) -->
      <div
        class="
          contact-us__section-2__card-2
          col-12 col-md-4
          q-mx-sm-lg q-my-md
          shadow-5
          row
          items-center
        "
      >
        <q-img
          :src="data.section2.items[1].img"
          loading="lazy"
          class="contact-us__section-2__card-2__img col-3"
          width="54px"
        />
        <div class="col-9">
          <p class="contact-us__section-2__card-2__location">
            {{ data.section2.items[1].location }}
          </p>
        </div>
      </div>

      <!-- Card 3 (Emails) -->
      <div
        class="
          contact-us__section-2__card-3
          col-12 col-md-4
          q-mx-sm-lg q-my-md
          shadow-5
          row
          items-center
        "
      >
        <q-img
          :src="data.section2.items[2].img"
          loading="lazy"
          class="contact-us__section-2__card-3__img col-3"
          width="54px"
        />
        <div class="col-9">
          <p class="contact-us__section-2__card-3__email-1">
            {{ data.section2.items[2].email1 }}
          </p>
          <p class="contact-us__section-2__card-3__email-2">
            {{ data.section2.items[2].email2 }}
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { defineAsyncComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Header: defineAsyncComponent(() => import("components/UI/Header.vue")),
    ContatcUsForm: defineAsyncComponent(() =>
      import("components/UI/ContatcUsForm.vue")
    ),
  },
  setup() {
    const $store = useStore();

    /* Data From Vuex Store */
    const data = computed(() => {
      return $store.state.contactUs;
    });

    return {
      data,
    };
  },
};
</script>

<style scoped>
.contact-us__section-1 {
  margin-top: 3rem;
}
.contact-us__section-1__map {
  height: 34.3rem;
}
iframe {
  border-radius: 7px;
}

.contact-us__section-2 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.contact-us__section-2__card-1,
.contact-us__section-2__card-2,
.contact-us__section-2__card-3 {
  background-color: white;
  border-radius: 9px;
  max-width: 350px;
  height: 95px;
}
.contact-us__section-2__card-1__img,
.contact-us__section-2__card-2__img,
.contact-us__section-2__card-3__img {
  margin-left: 1.2rem;
}
.contact-us__section-2__card-1__phone,
.contact-us__section-2__card-1__mobile,
.contact-us__section-2__card-2__location {
  font-size: 16px;
  margin-bottom: 0;
  margin-left: 1rem;
  font-family: "GE_SS_Two_Light";
}
.contact-us__section-2__card-3__email-1,
.contact-us__section-2__card-3__email-2 {
  font-size: 16px;
  margin-bottom: 0;
  margin-left: 1rem;
}
</style>