<template>
  <footer class="footer column items-center">
    <!-- Logo -->
    <section class="footer__logo q-mt-xl">
      <q-img :src="data.logo" width="160px" loading="lazy" />
    </section>

    <!-- Contact Info such as phones, location and emails -->
    <section class="footer__contacts q-mt-xl row">
      <!-- Phones -->
      <div
        class="
          footer__contacts__phones
          col-12 col-md-4
          column
          items-center
          q-px-lg q-py-md
          justify-center
        "
      >
        <p class="footer__contacts__phones__title">
          {{ data.contacts.phones.title }}
        </p>
        <div class="footer__contacts__phones__phone-1">
          <span class="q-pr-sm">{{ data.contacts.phones.phone1.title }}</span>
          <span>{{ data.contacts.phones.phone1.number }}</span>
        </div>
        <div class="footer__contacts__phones__phone-1">
          <span class="q-pr-sm">{{ data.contacts.phones.phone2.title }}</span>
          <span>{{ data.contacts.phones.phone2.number }}</span>
        </div>
      </div>
      <!-- Location -->
      <div
        class="
          footer__contacts__location
          col-12 col-md-4
          column
          items-center
          q-px-lg q-py-md
          justify-center
        "
      >
        <p class="footer__contacts__location__title">
          {{ data.contacts.location.title }}
        </p>
        <p class="footer__contacts__location__description text-center">
          {{ data.contacts.location.description }}
        </p>
      </div>
      <!-- Emails -->
      <div
        class="
          footer__contacts__emails
          col-12 col-md-4
          column
          items-center
          q-px-lg q-py-md
          justify-center
        "
      >
        <p class="footer__contacts__emails__title">
          {{ data.contacts.emails.title }}
        </p>
        <span class="footer__contacts__emails__email-1">
          {{ data.contacts.emails.email1 }}
        </span>
        <span class="footer__contacts__emails__email-2">
          {{ data.contacts.emails.email2 }}
        </span>
      </div>
    </section>

    <!-- Navigation Links -->
    <section class="footer__navs q-mt-xl q-mb-lg row justify-center">
      <router-link
        class="footer__navs__nav q-px-sm"
        v-for="(nav, index) in data.navs"
        :key="index"
        :to="{ name: nav.link }"
      >
        {{ nav.name }}
      </router-link>
    </section>
  </footer>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const $store = useStore();

    const data = computed(() => {
      return $store.state.home.footer;
    });

    return {
      data,
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #120f2d;
}

.footer__contacts__phones,
.footer__contacts__emails {
  background-color: #0b0726;
}
.footer__contacts__location {
  background-color: #09071b;
}
.footer__contacts__phones__title,
.footer__contacts__location__title,
.footer__contacts__emails__title {
  font-size: 18px;
  color: #09ab4f;
}
.footer__contacts__phones__phone-1,
.footer__contacts__phones__phone-2,
.footer__contacts__location__description,
.footer__contacts__emails__email-1,
.footer__contacts__emails__email-2 {
  font-size: 16px;
  color: white;
  font-family: "GE_SS_Two_Light";
  line-height: 30px;
}

.footer__navs__nav {
  color: white;
  text-decoration: none;
  border-right: 1px solid white;
}
.footer__navs__nav:nth-of-type(6) {
  border: none;
}
.footer__navs__nav:hover {
  color: #09ab4f;
}
</style>
