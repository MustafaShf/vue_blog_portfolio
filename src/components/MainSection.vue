<template>
  <div class="bg-black mx-auto w-10/12 sm:w-8/12 flex justify-center items-center font-general"
    style="height: calc(100vh - 8rem);">
    <div class="flex flex-col justify-center items-center">
      <AutoTyperVue componentTag="h1" :text="text" class="text-white text-2xl sm:text-4xl font-extrabold font-general" />
      <div class="text-gray-600 tracking-tighter text-sm sm:text-base">a blog site made for me by me</div>
    </div>
  </div>
</template>

<script setup>
import { AutoTyperVue } from 'auto-typer-vue3';

const text = [
  "Mustafa's Blog",
  "place to dump thoughts...",
  "maybe?",
  "scroll down already...",
  "..."
];
</script>
