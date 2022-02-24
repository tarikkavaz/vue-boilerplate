<template>
  <div>
    <Head>
      <title>{{ sitename }}: {{ $t("headtitle") }}</title>
    </Head>
    <div class="grid grid-cols-2 about">
      <div class="md:col-span-1">
        <p>{{ $t("about.example") }}</p>
        <p class="mt-10">
          <button
            @click="() => ToggleModal('openModal')"
            class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
          >
            {{ $t("modal.open") }}
          </button>
        </p>
        <Tabs />
        <Modal
          v-if="modalTriggers.openModal"
          :ToggleModal="() => ToggleModal('openModal')"
        >
          <template v-slot:icon>
            <div
              class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
            >
              <ExclamationIcon
                class="w-6 h-6 text-red-600"
                aria-hidden="true"
              />
            </div>
          </template>
          <template v-slot:title>Deactivate account</template>
          <template v-slot:content>
            <p class="text-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              nesciunt magni, voluptates aliquam, doloremque repudiandae tempora
              assumenda dicta, sequi ab maiores odit! Itaque voluptates nemo
              ipsam eius. Et, beatae voluptas.
            </p>
          </template>
          <template v-slot:button>
            <button
              type="button"
              class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Deactivate
            </button>
          </template>
        </Modal>
      </div>
      <div class="md:col-span-1">
        <i class="fa-solid fa-address-card"></i>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M318.4 304.5c-3.531 9.344-12.47 15.52-22.45 15.52h-105l45.15 94.82c9.496 19.94 1.031 43.8-18.91 53.31c-19.95 9.504-43.82 1.035-53.32-18.91L117.3 351.3l-75 88.25c-4.641 5.469-11.37 8.453-18.28 8.453c-2.781 0-5.578-.4844-8.281-1.469C6.281 443.1 0 434.1 0 423.1V56.02c0-9.438 5.531-18.03 14.12-21.91C22.75 30.26 32.83 31.77 39.87 37.99l271.1 240C319.4 284.6 321.1 295.1 318.4 304.5z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Head } from "@vueuse/head";
import Modal from "@/components/Modal.vue";
import Tabs from "@/components/Tabs.vue";
import { DialogTitle } from "@headlessui/vue";
import { ExclamationIcon } from "@heroicons/vue/outline";
export default {
  components: {
    DialogTitle,
    ExclamationIcon,
    Modal,
    Tabs,
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
        headtitle: "Hakkımızda",
      },
      en: {
        headtitle: "About",
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
