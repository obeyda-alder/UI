<template>
  <router-view />
</template>
<script>
import { useMeta } from "quasar";

const metaData = {
  title: "Edit Akademy",
  // titleTemplate: (title) => `${title} - Home`,

  // meta tags
  meta: {
    description: { name: "description", content: "Page 1" },
    keywords: { name: "keywords", content: "Edit website" },
    equiv: {
      "http-equiv": "Content-Type",
      content: "text/html; charset=UTF-8",
    },
  },
};

export default {
  setup() {
    useMeta(metaData);
  },
};
</script>
