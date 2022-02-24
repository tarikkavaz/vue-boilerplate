<template>
  <div>
    <Head>
      <title>{{ sitename }}: {{ $t("headtitle") }}</title>
    </Head>
    <div class="relative overflow-hidden bg-white">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 font sm:text-6xl"
            >
              {{ $t("home.hello") }}
            </h1>
            <p class="mt-4 text-xl text-gray-500">
              Vue3 + Vite + Vue Language Router + Tailwind CSS 3
            </p>
          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div
                aria-hidden="true"
                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div
                  class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                >
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div
                      class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                    >
                      <div
                        class="h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100"
                      >
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt
                          class="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div class="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt
                          class="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                    <div
                      class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                    >
                      <div class="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt
                          class="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div class="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt
                          class="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div class="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt
                          class="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                    <div
                      class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                    >
                      <div class="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt
                          class="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div class="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt
                          class="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                @click="() => ToggleModal('openModal')"
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
              >
                {{ $t("modal.open") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-if="modalTriggers.openModal"
      :ToggleModal="() => ToggleModal('openModal')"
    >
      <template v-slot:icon>
        <div
          class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
        >
          <CheckIcon class="w-6 h-6 text-green-600" aria-hidden="true" />
        </div>
      </template>
      <template v-slot:title>{{ $t("headtitle") }}</template>
      <template v-slot:content>
        <p class="text-sm text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          nesciunt magni, voluptates aliquam, doloremque repudiandae tempora
          assumenda dicta, sequi ab maiores odit! Itaque voluptates nemo ipsam
          eius. Et, beatae voluptas.
        </p>
      </template>
      <template v-slot:button>
        <button
          type="button"
          class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        >
          OK
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import { ref } from "vue";
import { Head } from "@vueuse/head";
import Modal from "@/components/Modal.vue";
import { DialogTitle } from "@headlessui/vue";
import { ExclamationIcon } from "@heroicons/vue/outline";
import { CheckIcon } from "@heroicons/vue/outline";
export default {
  name: "Home",
  components: {
    Modal,
    DialogTitle,
    CheckIcon,
    ExclamationIcon,
    Head,
  },
  computed: {
    sitename() {
      return this.$store.state.sitename;
    },
  },
  i18n: {
    sharedMessages: {
      tr: {
        headtitle: "Anasayfa",
      },
      en: {
        headtitle: "Homepage",
      },
    },
  },
  setup() {
    const modalTriggers = ref({
      openModal: false,
    });
    const ToggleModal = (trigger) => {
      modalTriggers.value[trigger] = !modalTriggers.value[trigger];
    };

    return {
      Modal,
      modalTriggers,
      ToggleModal,
    };
  },
};
</script>
