<template>
  <section class="contact-us-form shadow-5 bg-white">
    <p class="contact-us-form__title" v-html="data.title"></p>

    <form @submit.prevent="sendMessage">
      <q-input
        class="contact-us-form__name q-mt-md"
        bg-color="grey-2"
        color="green"
        rounded
        outlined
        :label="data.name.placeholder"
        label-color="grey-6"
        v-model="name"
        maxlength="50"
      >
        <template v-slot:prepend>
          <q-icon color="grey-6" :name="data.name.icon" />
        </template>
      </q-input>

      <q-input
        class="contact-us-form__email q-mt-md"
        bg-color="grey-2"
        color="green"
        rounded
        outlined
        :label="data.email.placeholder"
        label-color="grey-6"
        v-model="email"
        maxlength="50"
      >
        <template v-slot:prepend>
          <q-icon color="grey-6" :name="data.email.icon" />
        </template>
      </q-input>

      <q-input
        class="contact-us-form__message q-mt-md"
        bg-color="grey-2"
        color="green"
        rounded
        outlined
        :label="data.message.placeholder"
        label-color="grey-6"
        type="textarea"
        rows="10"
        input-style="resize: none"
        v-model="message"
        maxlength="3000"
      >
        <template v-slot:prepend>
          <q-icon color="grey-6" :name="data.message.icon" />
        </template>
      </q-input>

      <q-btn
        class="contact-us-form__button q-mt-md full-width"
        padding="0.8rem 2.5rem"
        outline
        rounded
        color="green"
        label="ارسال"
        type="submit"
      />
    </form>
  </section>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { api } from "boot/axios";

export default {
  props: ["data"],
  setup() {
    const $q = useQuasar();

    const name = ref("");
    const email = ref("");
    const message = ref("");

    const sendMessage = async () => {
      if (name.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: "ادخل الاسم",
          icon: "account_circle",
        });
        return;
      } else if (email.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: "ادخل البريد الالكتروني",
          icon: "email",
        });
        return;
      } else if (message.value.trim() === "") {
        $q.notify({
          type: "warning",
          position: "top",
          message: "ادخل الرساله",
          icon: "chat",
        });
        return;
      }
      try {
        const res = await api({
          url: "/create-one-contact-us",
          method: "POST",
          data: {
            name: name.value,
            email: email.value,
            message: message.value,
          },
        });

        if (
          res.data.Status === 0 &&
          res.data.Message === "Validation Error: Please Enter a valid Email"
        ) {
          $q.notify({
            type: "negative",
            position: "top",
            message: "بريد إلكتروني خاطئ",
            icon: "email",
          });
        } else if (
          res.data.Status === 1 &&
          res.data.Message === "Contact Us Created"
        ) {
          $q.notify({
            type: "positive",
            position: "top",
            message: "تم ارسال رسالتك بنجاح",
          });
        }
      } catch (err) {
        $q.notify({
          type: "negative",
          position: "top",
          message: "حدث خطأ ما ، حاول لاحقًا",
        });
      }
    };

    return {
      name,
      email,
      message,
      sendMessage,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-us-form {
  border-radius: 14px;
  padding: 2rem 2.3rem;
  margin-top: 1%;
}
.contact-us-form__title {
  font-size: 16px;
  color: black;
}
</style>
