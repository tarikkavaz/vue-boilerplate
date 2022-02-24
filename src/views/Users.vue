<template>
  <div>
    <Modal
      v-if="modalTriggers.openModal"
      :ToggleModal="() => ToggleModal('openModal')"
    >
      <template v-slot:icon>
        <img class="w-10 h-10" :src="user.image" alt />
      </template>
      <template v-slot:title>
        <span>{{ user.name }}</span>
        <p>
          <span class="px-2 py-1 text-xs bg-gray-100 rounded-md">{{
            user.email
          }}</span>
        </p>
      </template>
      <template v-slot:content>
        <p class="text-sm text-gray-500">{{ user.department }}</p>
      </template>
      <template v-slot:button></template>
    </Modal>
    <div class="bg-white">
      <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="mb-6 text-2xl font-extrabold tracking-tight text-gray-900">
          {{ $t("nav.users") }}
        </h2>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
              <div
                class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Role
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="user in users" :key="user.id" :user="user.id">
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-10 h-10 rounded-full"
                              :src="user.image"
                              alt
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              {{ user.name }}
                            </div>
                            <div class="text-sm text-gray-500">
                              {{ user.email }}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          {{ user.title }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ user.department }}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                          >Active</span
                        >
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        {{ user.role }}
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                      >
                        <button
                          @click="
                            () => {
                              ToggleModal('openModal');
                              setUser(user);
                            }
                          "
                          class="inline-flex items-center justify-center px-2 py-1 ml-4 text-base font-medium text-white bg-indigo-400 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700 hover:text-white"
                        >
                          {{ $t("nav.info") }}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
  methods: {
    setUser(user) {
      this.user = user;
    },
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    sitename() {
      return this.$store.state.sitename;
    },
  },
};
</script>
<style lang=""></style>
