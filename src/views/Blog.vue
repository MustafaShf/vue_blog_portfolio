<template>
  <div class="mx-auto w-10/12 sm:w-8/12 bg-black-400">
    <BlogList/>
  </div>
</template>

<script>
import BlogList from '@/components/BlogList.vue';
export default {
  name: "BlogView",
  components:{
    BlogList,
  }

}
</script>
