<template>
  <div>
    <Head>
      <title>{{ sitename }}: {{ $t("headtitle") }}</title>
    </Head>
    <YouTube :apiKey="YTK" :channelId="YTC" :resultsPerRequest="4"></YouTube>
  </div>
</template>

<script>
import YouTube from "../components/YouTube.vue";
import { Head } from "@vueuse/head";
export default {
  components: {
    YouTube,
    Head,
  },
  data() {
    return {
      YTK: process.env.VUE_APP_YT_KEY,
      YTC: process.env.VUE_APP_CHAN_ID,
    };
  },
  computed: {
    sitename() {
      return this.$store.state.sitename;
    },
  },
  i18n: {
    sharedMessages: {
      tr: {
        headtitle: "Vidyo",
      },
      en: {
        headtitle: "Video",
      },
    },
  },
};
</script>

<style lang="scss"></style>
