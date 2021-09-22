<template>
  <section class="login-section">
    <div class="login-section__login-box">
      <q-input
        autofocus
        type="text"
        color="indigo-10"
        v-model="username"
        label="Username"
      >
        <template v-slot:prepend>
          <q-icon color="indigo-10" name="account_circle" />
        </template>
      </q-input>

      <q-input
        class="q-mt-md"
        type="password"
        color="indigo-10"
        v-model="password"
        label="Password"
      >
        <template v-slot:prepend>
          <q-icon color="indigo-10" name="lock" />
        </template>
      </q-input>

      <q-btn
        @click="submit"
        class="q-mt-lg"
        color="indigo-10"
        text-color="white"
        label="Login"
      />
    </div>
  </section>
</template>

<script>
import { ref, inject } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
export default {
  setup() {
    const $store = useStore();

    const $q = useQuasar();

    const router = useRouter();

    const username = ref("");
    const password = ref("");

    const submit = () => {
      axios({
        url: `${$store.state.home.apiUrl}/api/login`,
        method: "POST",
        data: {
          username: username.value,
          password: password.value,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      })
        .then((res) => {
          if (
            res.data.status === 0 &&
            res.data.message === "Failed: Please Enter the Username!"
          ) {
            $q.notify({
              type: "negative",
              message: "Please Enter the Username",
            });
          } else if (
            res.data.status === 0 &&
            res.data.message ===
              "Failed: The Username you entered does not exist!"
          ) {
            $q.notify({
              type: "negative",
              message: "Invalid Username",
            });
          } else if (
            res.data.status === 0 &&
            res.data.message === "Failed: Please Enter the Password!"
          ) {
            $q.notify({
              type: "negative",
              message: "Please Enter the Password",
            });
          } else if (
            res.data.status === 0 &&
            res.data.message ===
              "Failed: The Password you entered is incorrect!"
          ) {
            $q.notify({
              type: "negative",
              message: "Invalid Password",
            });
          } else if (
            res.data.status === 1 &&
            (res.data.message === "OK: Logged in successfully!" ||
              res.data.message === "OK: You are already logged in!")
          ) {
            console.log(res.data.jwtToken);
            localStorage.setItem("jwtToken", res.data.jwtToken);
            router.push({ name: "Admin" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return {
      router,

      username,
      password,
      submit,
    };
  },
  mounted() {
    // axios({
    //   url: `${this.serverUrl}/api/is-auth`,
    //   method: "GET",
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("jwt"),
    //   },
    // })
    //   .then((res) => {
    //     if (res.data.result === 0) {
    //       this.router.push({ name: "Login" });
    //     } else if (res.data.result === 1) {
    //       this.router.push({ name: "Admin" });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

<style scoped>
.login-section {
  height: 83vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-section__login-box {
  border: 2px solid #001344;
  border-radius: 5px;
  width: 30rem;
  height: 14.5rem;
  padding: 1rem 2rem;
  margin: 0 1rem;
}
</style>
