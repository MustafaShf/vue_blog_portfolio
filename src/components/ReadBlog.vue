<template>
  <div class="mt-4 mx-auto w-10/12 sm:w-8/12">
    <h1 class="text-white text-xl font-semibold sm:text-3xl border-b border-gray-600 py-2 inline-block">
      {{ blog.heading }}
    </h1>
    <!-- Render Markdown content -->
    <div
      v-html="renderedContent"
      class="text-white text-justify leading-relaxed sm:leading-loose tracking-tight mt-4"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { db } from "../main"; // Ensure this is the correct Firebase config
import { doc, getDoc } from "firebase/firestore";
import MarkdownIt from "markdown-it";

const blog = ref({});

const route = useRoute();
const blogId = route.params.id;

// Initialize Markdown-it instance
const md = new MarkdownIt();

const getBlogDetail = async () => {
  try {
    const blogRef = doc(db, "blogs", blogId);
    const blogSnap = await getDoc(blogRef);

    if (blogSnap.exists()) {
      blog.value = blogSnap.data();
    } else {
      console.log("No such blog!");
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
  }
};

// Compute rendered Markdown content
const renderedContent = computed(() => {
  return blog.value.content ? md.render(blog.value.content) : "";
});

onMounted(() => {
  getBlogDetail();
});
</script>
