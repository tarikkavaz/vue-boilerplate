<template>
  <Menu />
  <div class="container px-4 mx-auto mt-10 md:px-0">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  mounted() {
    this.$store.dispatch("loadProducts");
    this.$store.dispatch("loadUsers");
  },
  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
