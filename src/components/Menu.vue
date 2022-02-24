<template>
  <Popover open="true" class="relative z-10 px-4 bg-white md:px-0">
    <div class="mx-auto max-w-7xl">
      <div
        class="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <localized-link to="/">
            <span class="sr-only">Boilerplate</span>
            <img
              class="w-auto h-8 sm:h-14"
              :src="`/assets/logo-` + $i18n.locale + `.png`"
              alt
            />
          </localized-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="w-6 h-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
              ]"
            >
              <span>{{ $t("nav.solution") }}</span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <PopoverPanel
                class="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
              >
                <div
                  class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  <div
                    class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8"
                  >
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 w-6 h-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    class="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                  >
                    <div
                      v-for="item in callsToAction"
                      :key="item.name"
                      class="flow-root"
                    >
                      <a
                        :href="item.href"
                        class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                      >
                        <component
                          :is="item.icon"
                          class="flex-shrink-0 w-6 h-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <localized-link
            to="/"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >{{ $t("nav.home") }}</localized-link
          >

          <localized-link
            to="/about"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >{{ $t("nav.about") }}</localized-link
          >
          <localized-link
            to="/products"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >{{ $t("nav.products") }}</localized-link
          >
          <localized-link
            to="/users"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >{{ $t("nav.users") }}</localized-link
          >
          <localized-link
            to="/video"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            >{{ $t("nav.video") }}</localized-link
          >

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
              ]"
            >
              <span>
                <a href="#">{{ $t("nav.more") }}</a>
              </span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <PopoverPanel
                class="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
              >
                <div
                  class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  <div
                    class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8"
                  >
                    <div class="block">
                      <language-switcher
                        v-slot="{ links }"
                        class="h-8"
                        active-class="the-lang-active"
                      >
                        <router-link
                          :to="link.url"
                          v-for="link in links"
                          :key="link.langIndex"
                          class="router-link"
                          :class="link.activeClass"
                          exact-active-class="router-link-exact-active"
                        >
                          <img
                            :src="`/assets/flag_${link.langIndex}.svg`"
                            alt="{{ link.langName }}"
                            class="inline-block w-8 h-8 mr-2"
                          />
                          <span class="mr-6">{{ link.langName }}</span>
                        </router-link>
                      </language-switcher>
                    </div>

                    <a
                      v-for="item in resources"
                      :key="item.name"
                      :href="item.href"
                      class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 w-6 h-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3
                        class="text-sm font-medium tracking-wide text-gray-500 uppercase"
                      >
                        Recent Posts
                      </h3>
                      <ul class="mt-4 space-y-4">
                        <li
                          v-for="post in recentPosts"
                          :key="post.id"
                          class="text-base truncate"
                        >
                          <a
                            :href="post.href"
                            class="font-medium text-gray-900 hover:text-gray-700"
                            >{{ post.name }}</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-sm">
                      <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        View all posts
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>

        <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <a
            href="#"
            class="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
            >{{ $t("nav.signin") }}</a
          >
          <a
            href="#"
            class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
            >{{ $t("nav.signup") }}</a
          >
          <language-switcher v-slot="{ links }">
            <router-link
              :to="link.url"
              v-for="link in links"
              :key="link.langIndex"
              :class="link.activeClass"
              exact-active-class
              class="ml-4 text-base font-medium text-indigo-500 hover:text-indigo-900"
            >
              <img
                :src="`/assets/flag_${link.langIndex}.svg`"
                alt="{{ link.langName }}"
                class="inline-block w-8 h-8 ml-4"
              />
            </router-link>
          </language-switcher>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
      >
        <div
          class="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="w-auto h-8"
                  :src="`/assets/logo-` + $i18n.locale + `.png`"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="w-6 h-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">{{
                    item.name
                  }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
            <div class="block">
              <language-switcher v-slot="{ links }" url="#">
                <a :href="link.url" v-for="link in links" :key="link.langIndex">
                  <img
                    :src="`/assets/flag_${link.langIndex}.svg`"
                    alt="{{ link.langName }}"
                    class="inline-block w-8 h-8 mr-2"
                  />
                  <span class="mr-6">{{ link.langName }}</span>
                </a>
              </language-switcher>
            </div>
            <div class="block">
              <language-switcher v-slot="{ links }" url="#">
                <a
                  :href="link.url"
                  v-for="link in links"
                  :key="link.langIndex"
                  :class="link.activeClass"
                >
                  <img
                    :src="`/assets/flag_${link.langIndex}.svg`"
                    alt="{{ link.langName }}"
                    class="inline-block w-8 h-8 mr-2"
                  />
                </a>
              </language-switcher>
            </div>
          </div>
          <div class="px-5 py-6 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <localized-link
                to="/"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
                >{{ $t("nav.home") }}</localized-link
              >
              <localized-link
                to="/about"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
                >{{ $t("nav.about") }}</localized-link
              >
              <localized-link
                to="/products"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
                >{{ $t("nav.products") }}</localized-link
              >
            </div>
            <div>
              <a
                href="#"
                class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                >Sign up</a
              >

              <p class="mt-6 text-base font-medium text-center text-gray-500">
                Existing customer?
                {{ " " }}
                <a href="#" class="text-indigo-600 hover:text-indigo-500"
                  >Sign in</a
                >
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
      callsToAction,
      resources,
      recentPosts,
    };
  },
};
</script>

<style>
.router-active-language {
  display: none;
}
</style>
