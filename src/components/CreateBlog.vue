<template>
  <div class="bg-black text-white font-general min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-2xl bg-box border-2 border-gray-600 rounded-lg p-8 shadow-lg">
      <h1 class="text-3xl font-bold text-center mb-8">Write Your Blog</h1>

      <form @submit.prevent="submitBlog">
        <!-- Heading Input -->
        <div class="mb-6">
          <label for="heading" class="block text-lg font-medium text-white mb-2">Blog Heading</label>
          <input
            v-model="heading"
            type="text"
            id="heading"
            class="w-full p-3 bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
            placeholder="Enter blog heading"
            required
          />
        </div>

        <!-- Category Input -->
        <div class="mb-6">
          <label for="category" class="block text-lg font-medium text-white mb-2">Category</label>
          <input
            v-model="category"
            type="text"
            id="category"
            class="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
            placeholder="Enter category"
            required
          />
        </div>

        <!-- Text Area for Blog Content -->
        <div class="mb-6">
          <label for="content" class="block text-lg font-medium text-white mb-2">Blog Content</label>
          <textarea
            v-model="content"
            id="content"
            rows="6"
            class="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
            placeholder="Write your blog content here"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-center">
          <Btn label="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { db } from "../main"; // Make sure this is the correct path
import { collection, addDoc } from "firebase/firestore";
import Btn from './Btn.vue';

// Data for the form
const heading = ref('');
const category = ref('');
const content = ref('');

// Handle form submission
const submitBlog = async () => {
  try {
    // Get a reference to the Firestore 'blogs' collection
    const blogCollection = collection(db, "blogs");

    // Add the blog data to Firestore
    await addDoc(blogCollection, {
      heading: heading.value,
      category: category.value,
      content: content.value,
      createdAt: new Date() // Adding a timestamp for when the blog is created
    });

    // Clear the form after submission
    heading.value = '';
    category.value = '';
    content.value = '';

    console.log("Blog submitted successfully!");
    // You can add further logic here, like redirecting to a different page or showing a success message
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
</script>

