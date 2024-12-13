<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';

import NavBar from './components/Navbar.vue';
</script>

<template>
  <NavBar />
  <router-view />
  <Footer/>
</template>

<style>
@import "auto-typer-vue3/dist/style.css";
</style>
