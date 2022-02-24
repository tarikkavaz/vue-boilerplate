<template>
  <div>
    <Head>
      <title>{{ sitename }}: {{ $t("headtitle") }}</title>
    </Head>
    <Modal
      v-if="modalTriggers.openModal"
      :ToggleModal="() => ToggleModal('openModal')"
    >
      <template v-slot:icon>
        <img class="w-10 h-10" :src="product.image" alt />
      </template>
      <template v-slot:title>
        <span>{{ product.title }}</span>
        <p>
          <span class="px-2 py-1 text-xs bg-gray-100 rounded-md">{{
            product.category
          }}</span>
        </p>
      </template>
      <template v-slot:content>
        <p class="text-sm text-gray-500">{{ product.description }}</p>
      </template>
      <template v-slot:button></template>
    </Modal>

    <div class="bg-white">
      <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
          {{ $t("nav.products") }}
        </h2>

        <div
          class="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <div
            v-for="product in products"
            :key="product.id"
            class="relative group"
          >
            <div
              class="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none lg:h-80"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="object-cover object-center w-full h-full lg:h-full lg:w-full"
              />
            </div>
            <div class="flex justify-between mt-4">
              <div>
                <h3 class="text-sm text-gray-700">
                  <div>
                    {{ product.title }}
                    <p class="text-sm text-gray-500">
                      {{ product.description }}
                    </p>
                  </div>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.category }}</p>
                <localized-link
                  class="inline-flex items-center justify-center px-2 py-1 text-base font-medium text-white bg-orange-400 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-orange-700 hover:text-white"
                  :to="{
                    name: 'ProductDetail',
                    params: { id: product.id },
                  }"
                  >{{ $t("nav.detail") }}</localized-link
                >

                <button
                  @click="
                    () => {
                      ToggleModal('openModal');
                      setProduct(product);
                    }
                  "
                  class="inline-flex items-center justify-center px-2 py-1 ml-4 text-base font-medium text-white bg-indigo-300 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700 hover:text-white"
                >
                  {{ $t("nav.info") }}
                </button>
              </div>
              <p class="text-sm font-medium text-gray-900">
                {{ product.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Head } from "@vueuse/head";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
import { DialogTitle } from "@headlessui/vue";
import { ExclamationIcon } from "@heroicons/vue/outline";
export default {
  components: {
    DialogTitle,
    ExclamationIcon,
    Modal,
    Head,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    sitename() {
      return this.$store.state.sitename;
    },
  },
  methods: {
    setProduct(product) {
      this.product = product;
    },
  },
  created() {
    // console.log(this.$store.state.products)
  },
  i18n: {
    sharedMessages: {
      tr: {
        headtitle: "Ürünler",
      },
      en: {
        headtitle: "Products",
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
