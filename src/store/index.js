import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import home from "./home";
import aboutUs from "./aboutUs";
import blog from "./blog";
import blogPost from "./blogPost";
import privacyPolicy from "./privacyPolicy";
import psychology from "./psychology";
import skills from "./skills";
import religion from "./religion";
import knowledge from "./knowledge";
import fitness from "./fitness";
import register from "./register";
import contactUs from "./contactUs";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      home,
      aboutUs,
      blog,
      blogPost,
      privacyPolicy,
      psychology,
      skills,
      religion,
      knowledge,
      fitness,
      register,
      contactUs,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
