<template>
  <div class="mx-auto w-10/12 sm:w-8/12 border-b border-gray-600 py-2">
    <nav class="bg-black text-navText flex items-center justify-between">
      <!-- Logo -->
      <h1 class="text-white text-3xl font-extrabold font-general tracking-tighter">MustafaBlog's</h1>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-4 text-navText">
        <router-link to="/" class="hover:text-gray-400">Home</router-link>
        <router-link to="/blog" class="hover:text-gray-400">Blog</router-link>
        <router-link to="/login" class="hover:text-gray-400">Login</router-link>
      </div>

      <!-- Mobile Hamburger -->
      <button
        @click="toggleMenu"
        class="text-white md:hidden focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Mobile Dropdown Menu -->
      <div
        :class="{
          'block': isMenuOpen,
          'hidden': !isMenuOpen,
        }"
        class="absolute top-14 left-1/2 transform -translate-x-1/2 w-10/12 sm:w-8/12 text-navText bg-black md:hidden rounded-lg shadow-lg z-10"
      >
        <router-link
          to="/"
          class="block py-2 px-4 hover:text-gray-400 border-b border-gray-600"
          @click="closeMenu"
        >
          Home
        </router-link>
        <router-link
          to="/blog"
          class="block py-2 px-4 hover:text-gray-400 border-b border-gray-600"
          @click="closeMenu"
        >
          Blog
        </router-link>
        <router-link
          to="/login"
          class="block py-2 px-4 hover:text-gray-400"
          @click="closeMenu"
        >
          Login
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false, // Tracks if the menu is open
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggles the menu
    },
    closeMenu() {
      this.isMenuOpen = false; // Closes the menu
    },
  },
};
</script>

<style scoped>
/* Optional: Add smooth transition for mobile menu */
</style>
