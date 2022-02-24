<template>
  <div class="youtube-widget">
    <div class="p-6 rounded-md bg-slate-100">
      <div class="grid grid-cols-8">
        <img :src="channelAvatar" alt="" class="col-span-1 rounded-full" />
        <div class="col-span-7">
          <h2 class="text-lg font-bold">
            {{ channelTitle }}
          </h2>
          <div class="text-sm">
            {{ subscribersCount }} {{ $t("video.subscribersCountText") }}
          </div>
          <a
            :href="
              'http://www.youtube.com/channel/' +
              channelId +
              '?sub_confirmation=1'
            "
            class="inline-block px-4 py-2 mt-4 text-white bg-red-600 rounded-md hover:bg-red-900"
            >{{ $t("video.subscribeBtnText") }}</a
          >
        </div>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-2 p-6 bg-slate-200">
      <iframe
        v-for="video in videos"
        :key="video.id.videoId"
        :src="'https://www.youtube.com/embed/' + video.id.videoId"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-auto h-full"
      ></iframe>
    </div>
    <hr />
    <button
      v-if="totalVideosCount > videos.length"
      class="inline-block px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-900"
      @click="loadMore"
      :disabled="isSending"
    >
      {{ $t("video.loadMoreBtnText") }}
    </button>
  </div>
</template>

<script>
import {
  getChannelTitleAndAvatar,
  getSubscribersCount,
  getVideos,
  loadMoreVideos,
} from "../services/youtube";

export default {
  props: {
    apiKey: {
      type: String,
      required: true,
    },
    channelId: {
      type: String,
      required: true,
    },
    resultsPerRequest: {
      type: Number,
      required: false,
      default: 1,
    },
    subscribersCountText: {
      type: String,
      required: false,
      default: "subscribers",
    },
    subscribeBtnText: {
      type: String,
      required: false,
      default: "Subscribe",
    },
    loadMoreBtnText: {
      type: String,
      required: false,
      default: "Load more",
    },
  },
  data() {
    return {
      subscribersCount: null,
      channelAvatar: "",
      channelTitle: "",
      videos: [],
      totalVideosCount: null,
      nextPageToken: null,
      isSending: false,
    };
  },
  methods: {
    async getChannelTitleAndAvatar() {
      this.isSending = true;

      try {
        const response = await getChannelTitleAndAvatar(
          this.channelId,
          this.apiKey
        );

        this.channelAvatar =
          response["items"][0].snippet.thumbnails.default.url;
        this.channelTitle = response["items"][0].snippet.localized.title;
      } catch (error) {
        console.log(error);
      } finally {
        this.isSending = false;
      }
    },
    async getSubscribersCount() {
      this.isSending = true;

      try {
        const response = await getSubscribersCount(this.channelId, this.apiKey);

        this.subscribersCount = response["items"][0].statistics.subscriberCount;
        this.totalVideosCount = response["items"][0].statistics.videoCount;
      } catch (error) {
        console.log(error);
      } finally {
        this.isSending = false;
      }
    },
    async getVideos() {
      this.isSending = true;

      try {
        const response = await getVideos(
          this.channelId,
          this.apiKey,
          this.resultsPerRequest
        );

        this.videos = response.items;
        this.nextPageToken = response.nextPageToken;
      } catch (error) {
        console.log(error);
      } finally {
        this.isSending = false;
      }
    },
    async loadMore() {
      this.isSending = true;

      try {
        const response = await loadMoreVideos(
          this.channelId,
          this.apiKey,
          this.resultsPerRequest,
          this.nextPageToken
        );

        this.videos = [...this.videos, ...response.items];
        this.nextPageToken = response.nextPageToken;
      } catch (error) {
        console.log(error);
      } finally {
        this.isSending = false;
      }
    },
  },
  mounted() {
    this.getChannelTitleAndAvatar();
    this.getSubscribersCount();
    this.getVideos();
  },
};
</script>
