<template>
  <button
    class="bg-navText text-insideBtnText font-extrabold   px-6 py-2 rounded-2xl text-center inline-block hover:bg-blue-200">
   {{ label }}
  </button>
</template>

<script>

export default {
  name: "BtnComponent",
  props:{
    label:{
      type:String
    }
  }
}

</script>
