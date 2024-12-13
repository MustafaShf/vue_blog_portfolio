<template>
  <div class="mx-auto font-general text-white max-w-4xl px-4">
    <h1 class="text-xl sm:text-3xl  text-center my-6">Welcome to <span class="font-bold"> GM Blog's</span> </h1>
    <div v-for="blog in blogs" :key="blog.id"
      class="bg-box my-4 py-2 sm:py-6 rounded-xl border border-gray-600 px-6 shadow-lg hover:shadow-xl transition-all relative">
      <h2 class=" text-white font-bold text-lg px-2 py-1 sm:py-2 border-gray-500 inline-block border-b">
        {{ blog.heading }}
      </h2>
      <div class="absolute bottom-3 sm:bottom-7 sm:left-6 left-4 text-sm border px-3 rounded-2xl text-text border-gray-500 bg-black">{{ blog.category }}</div>

      <p class="text-text px-2 py-2 sm:py-4 leading-relaxed">
        {{ truncateContent(blog.content, 4) }}
      </p>
      <div class="text-right">
        <button @click="goToReadBlog(blog.id)"
          class="bg-navText text-insideBtnText font-semibold text-sm px-4 py-2 rounded-full hover:bg-blue-400 transition-all">
          Read me
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { db } from "../main";
import { collection, getDocs } from "firebase/firestore";

const router = useRouter();

const goToReadBlog = (id) => {
  console.log(id)
  router.push({ name: 'BlogDetailPage', params: { id } }); // Use router.push() with id as param
};


// Reactive array to hold blogs
const blogs = ref([]);

// Function to truncate content
const truncateContent = (content, wordCount) => {
  const words = content.split(' ');
  const selectedWords = words.slice(0, wordCount);
  return selectedWords.join(' ') + (words.length > wordCount ? '...' : '');
};

// Firestore collection reference
const allPostCollection = collection(db, "blogs");

// Async function to fetch and process blogs
const getBlogsPost = async () => {
  try {
    const data = await getDocs(allPostCollection);

    // Transform and merge data into a single object per blog
    const filteredData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    console.log(filteredData)

    // Example of merging objects if necessary
    const mergedBlogs = filteredData.reduce((acc, current) => {
      const existingBlog = acc.find(blog => blog.id === current.id);
      if (existingBlog) {
        // Merge current object into the existing one
        Object.assign(existingBlog, current);
      } else {
        // Add new blog object
        acc.push(current);
      }
      return acc;
    }, []);

    // Push merged data into the blogs array
    blogs.value = mergedBlogs;
    console.log(blogs.value);
  } catch (error) {
    console.log(error);
  }
};

// Fetch blogs on component mount
onMounted(() => {
  getBlogsPost();
});
</script>
