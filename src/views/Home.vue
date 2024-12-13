<template>


  <MainSection />
  <FunSection />
  <TechSection />
</template>

<script >

import MainSection from '../components/MainSection.vue';
import FunSection from '../components/FunSection.vue'
import TechSection from '../components/TechSection.vue';

export default {
  name: 'HomeView',
  components: {

    MainSection,
    FunSection,
    TechSection,

  }
};
</script>
