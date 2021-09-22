<template>
  <section class="register row">
    <Header class="col-12" :header="data.header" />

    <!-- Registration Form -->
    <div class="col-12 col-md-8 offset-md-2 q-px-sm q-px-md-none">
      <section class="register__form shadow-5 bg-white">
        <form @submit.prevent="register">
          <!-- Name -->
          <q-input
            class="q-mt-md"
            bg-color="grey-2"
            color="green"
            rounded
            outlined
            :label="data.form.name.placeholder"
            label-color="grey-6"
            v-model="name"
          >
            <template v-slot:prepend>
              <q-icon color="grey-6" :name="data.form.name.icon" />
            </template>
          </q-input>

          <!-- Education Year -->
          <q-input
            class="q-mt-md"
            bg-color="grey-2"
            color="green"
            rounded
            outlined
            :label="data.form.educationYear.placeholder"
            label-color="grey-6"
            v-model="educationYear"
          >
            <template v-slot:prepend>
              <q-icon color="grey-6" :name="data.form.educationYear.icon" />
            </template>
          </q-input>

          <!-- Gender -->
          <p class="q-mt-md q-ml-sm">{{ data.form.gender.label }}</p>
          <q-radio
            class="q-mr-sm q-ml-sm"
            v-model="gender"
            :val="radio"
            :label="radio"
            v-for="(radio, index) in data.form.gender.radios"
            :key="index"
            dense
          />

          <!-- Country -->
          <q-select
            class="q-mt-md"
            v-model="country"
            :options="data.form.country.countries"
            bg-color="grey-2"
            color="green"
            rounded
            outlined
            :label="data.form.country.placeholder"
            label-color="grey-6"
            v-if="!isOtherCountry"
          >
            <template v-slot:prepend>
              <q-icon color="grey-6" :name="data.form.country.icon" />
            </template>
          </q-select>

          <!-- Another Country -->
          <q-input
            class="q-mt-md"
            bg-color="grey-2"
            color="green"
            rounded
            outlined
            :label="data.form.otherCountry.placeholder"
            label-color="grey-6"
            v-if="isOtherCountry"
            v-model="country"
          >
            <template v-slot:prepend>
              <q-icon color="grey-6" :name="data.form.otherCountry.icon" />
            </template>
          </q-input>

          <!-- Other Country ? -->
          <q-checkbox
            class="q-mt-md"
            label="دوله اخري ؟"
            v-model="isOtherCountry"
            @click.stop="country = null"
          />

          <!-- City -->
          <q-input
            class="q-mt-md"
            bg-color="grey-2"
            color="green"
            rounded
            outlined
            :label="data.form.city.placeholder"
            label-color="grey-6"
            v-model="city"
          >
            <template v-slot:prepend>
              <q-icon color="grey-6" :name="data.form.city.icon" />
            </template>
          </q-input>

          <!-- Phone Number -->
          <q-input
            class="q-mt-md"
            bg-color="grey-2"
            color="green"
            rounded
            outlined
            :label="data.form.phoneNumber.placeholder"
            label-color="grey-6"
            v-model="phoneNumber"
          >
            <template v-slot:prepend>
              <q-icon color="grey-6" :name="data.form.phoneNumber.icon" />
            </template>
          </q-input>

          <!-- Whatsapp Number -->
          <q-input
            class="q-mt-md"
            bg-color="grey-2"
            color="green"
            rounded
            outlined
            :label="data.form.whatsappNumber.placeholder"
            label-color="grey-6"
            v-model="whatsappNumber"
          >
            <template v-slot:prepend>
              <q-icon color="grey-6" :name="data.form.whatsappNumber.icon" />
            </template>
          </q-input>

          <!-- Email -->
          <q-input
            class="q-mt-md"
            bg-color="grey-2"
            color="green"
            rounded
            outlined
            :label="data.form.email.placeholder"
            label-color="grey-6"
            v-model="email"
          >
            <template v-slot:prepend>
              <q-icon color="grey-6" :name="data.form.email.icon" />
            </template>
          </q-input>

          <!-- Preferred Programme -->
          <p class="q-mt-md q-ml-sm">{{ data.form.programme.label }}</p>
          <q-radio
            class="q-mr-sm q-ml-sm"
            v-model="programme"
            :val="radio"
            :label="radio"
            v-for="(radio, index) in data.form.programme.radios"
            :key="index"
            dense
          />

          <q-btn
            class="register__form__button q-mt-lg full-width"
            padding="0.8rem 2.5rem"
            outline
            rounded
            color="green"
            label="ارسال"
            type="submit"
          />
        </form>
      </section>
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent, computed, ref, watch, method } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { api } from "boot/axios";

export default {
  components: {
    Header: defineAsyncComponent(() => import("components/UI/Header.vue")),
  },
  setup() {
    const $store = useStore();
    const $q = useQuasar();

    const isOtherCountry = ref(false);

    // getting data from form
    const name = ref("");
    const educationYear = ref("");
    const gender = ref("");
    const country = ref("");
    const city = ref("");
    const phoneNumber = ref("");
    const whatsappNumber = ref("");
    const email = ref("");
    const programme = ref("");

    /* Data From Vuex Store */
    const data = computed(() => {
      return $store.state.register;
    });

    /* Sending Data To Server */
    const register = async () => {
      console.log({
        name: name.value,
        educationYear: educationYear.value,
        gender: gender.value,
        country: country.value,
        city: city.value,
        phoneNumber: phoneNumber.value,
        whatsappNumber: whatsappNumber.value,
        email: email.value,
        programme: programme.value,
      });

      if (name.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: data.value.form.name.errorMessage,
          icon: data.value.form.name.icon,
        });
        return;
      } else if (educationYear.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: data.value.form.educationYear.errorMessage,
          icon: data.value.form.educationYear.icon,
        });
        return;
      } else if (gender.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: data.value.form.gender.errorMessage,
        });
        return;
      } else if (country.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: data.value.form.country.errorMessage,
          icon: data.value.form.country.icon,
        });
        return;
      } else if (city.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: data.value.form.city.errorMessage,
          icon: data.value.form.city.icon,
        });
        return;
      } else if (phoneNumber.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: data.value.form.phoneNumber.errorMessage,
          icon: data.value.form.phoneNumber.icon,
        });
        return;
      } else if (whatsappNumber.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: data.value.form.whatsappNumber.errorMessage,
          icon: data.value.form.whatsappNumber.icon,
        });
        return;
      } else if (email.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: data.value.form.email.errorMessage,
          icon: data.value.form.email.icon,
        });
        return;
      } else if (programme.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: data.value.form.programme.errorMessage,
        });
        return;
      }

      try {
        const res = await api({
          url: "/create-one-registrar",
          method: "POST",
          data: {
            name: name.value,
            educationYear: educationYear.value,
            gender: gender.value,
            country: country.value,
            city: city.value,
            phoneNumber: phoneNumber.value,
            whatsappNumber: whatsappNumber.value,
            email: email.value,
            programme: programme.value,
          },
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    return {
      data,
      name,
      educationYear,
      gender,
      country,
      city,
      phoneNumber,
      whatsappNumber,
      email,
      programme,
      isOtherCountry,
      register,
    };
  },
};
</script>

<style scoped>
.register__form {
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 14px;
  padding: 2rem 2.3rem;
}
</style>
