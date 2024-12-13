<template>
  <div class="bg-black mx-auto w-10/12 sm:w-8/12 h-60 flex items-center justify-center flex-col">
    <h1 class="text-text p-4 font-general">Wanna see something creative...</h1>

   <div>

    <Btn label="Go to Blogs" @click="goToReadBlog"/>
   </div>
  </div>
</template>

<script>
import Btn from './Btn.vue';
import { useRouter } from "vue-router";

export default {
  name: "FooterComponent",
  components:{
    Btn
  },
  setup() {
    const router = useRouter();

    const goToReadBlog = () => {
      router.push({ name: 'blog' }); // Ensure 'blog' is correctly defined in your routes
    };

    return {
      goToReadBlog,
    };
  }
}

</script>
