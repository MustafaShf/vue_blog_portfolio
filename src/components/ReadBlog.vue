<template>
  <div class="mt-4 mx-auto w-10/12 sm:w-8/12">
    <h1 class="text-white text-xl font-semibold sm:text-3xl border-b border-gray-600 py-2 inline-block">{{ blog.heading
      }}</h1>
    <p class="text-white text-justify leading-relaxed sm:leading-loose tracking-tight mt-4">
      {{blog.content}}

    </p>

  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { db } from "../main"; // Ensure this is the correct Firebase config
import { doc, getDoc } from "firebase/firestore";

const blog = ref({});

const route = useRoute();
const blogId = route.params.id;

const getBlogDetail = async () => {
  try {
    // Firestore reference to the specific blog using the id
    const blogRef = doc(db, "blogs", blogId);
    const blogSnap = await getDoc(blogRef);

    if (blogSnap.exists()) {
      blog.value = blogSnap.data(); // Set the blog data to reactive variable
    } else {
      console.log("No such blog!");
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
  }
};

onMounted(() => {
  getBlogDetail();
});


</script>
