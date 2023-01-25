<template>
  <div class="relative z-50">
    <button @click="showMenu = true" v-show="!showMenu">Menu Closed</button>
    <button @click="showMenu = false" v-show="showMenu">Menu Opened</button>

    <div v-if="showMenu" class="absolute w-full py-2 bg-white rounded-lg shadow-xl top-full">
      <a class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#1" @click="showMenu = false">Home</a>
      <a class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#2" @click="showMenu = false">About</a>
      <a class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#3" @click="showMenu = false">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    handleClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.showMenu = false
      }
    }
  }
}
</script>
