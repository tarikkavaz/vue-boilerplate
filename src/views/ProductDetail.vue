<template>
  <div>
    <Head>
      <title>
        {{ sitename }}: {{ $t("headtitle") }}: {{ product.title }}
        {{ product.description }}
      </title>
    </Head>
    <div class="grid grid-cols-4">
      <div class="col-span-1">
        <div class="hidden">
          <sidebar-menu :menu="menu" :collapsed="true" />
        </div>
      </div>
      <div class="col-span-3">
        <h2 class="mb-6 text-2xl font-medium leading-6 text-gray-900">
          {{ product.title }}
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <div
            class="w-1/2 p-2 overflow-hidden aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="object-cover object-center w-full h-full rounded-md lg:h-full lg:w-full"
            />
          </div>
          <div>
            <h3 class="text-xs text-gray-700 line-clamp-3">
              {{ $t("product.description") }}: {{ product.description }}
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              {{ $t("product.category") }}: {{ product.category }}
            </p>
            <p class="text-sm font-medium text-gray-900">
              {{ $t("product.price") }}: {{ product.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Head } from "@vueuse/head";
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import { MenuIcon, ChevronRightIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Head,
    SidebarMenu,
  },
  data() {
    return {
      menu: [
        {
          header: "Side Navigation",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: `${this.$t("nav.home")}`,
          icon: {
            element: MenuIcon, //Heroicon
          },
        },
        {
          title: `${this.$t("nav.more")}`,
          icon: {
            element: ChevronRightIcon,
          },
          child: [
            {
              href: "/products",
              title: `${this.$t("nav.products")}`,
              icon: "fa-solid fa-bag-shopping", //Font Awesome
            },
            {
              href: "/users",
              title: `${this.$t("nav.users")}`,
              icon: "fa fa-user",
              badge: {
                text: "new",
                class: "vsm--badge_default",
              },
            },
          ],
        },
      ],
    };
  },
  computed: {
    product() {
      return (
        this.$store.state.products.find(
          (prod) => prod.id == this.$route.params.id
        ) || {}
      );
    },
    sitename() {
      return this.$store.state.sitename;
    },
  },
  i18n: {
    sharedMessages: {
      tr: {
        headtitle: "Ürün",
      },
      en: {
        headtitle: "Product",
      },
    },
  },
};
</script>
<style lang="scss">
$base-bg: #4f46e6;
@import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
.v-sidebar-menu {
  background-color: #ff9900;
}
.v-sidebar-menu.vsm_expanded {
}
.v-sidebar-menu.vsm_collapsed {
}
.v-sidebar-menu.vsm_rtl {
}
.v-sidebar-menu .vsm--item {
}
.v-sidebar-menu .vsm--link {
}
.v-sidebar-menu .vsm--link_active {
}
.v-sidebar-menu .vsm--link_open {
}
.v-sidebar-menu .vsm--link_mobile {
}
.v-sidebar-menu .vsm--link_level-[n] {
}
.v-sidebar-menu .vsm--link_disabled {
}
.v-sidebar-menu .vsm--title {
}
.v-sidebar-menu .vsm--icon {
}
.v-sidebar-menu .vsm--arrow {
}
.v-sidebar-menu .vsm--arrow_open {
}
.v-sidebar-menu .vsm--badge {
}
.v-sidebar-menu .vsm--badge_default {
}
.v-sidebar-menu .vsm--header {
}
.v-sidebar-menu .vsm--dropdown {
}
.v-sidebar-menu .vsm--mobile-bg {
}
.v-sidebar-menu .vsm--toggle-btn {
}
.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  background-color: transparent;
}
</style>
