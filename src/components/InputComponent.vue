<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      :class="inputClass"
      v-model="localValue"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    inputClass: {
      type: String,
      default:
        "border bg-box text-white border-gray-300 p-3  focus:ring-2 focus:ring-blue-400 outline-none",
    },
  },
  data() {
    return {
      localValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newValue) {
      this.localValue = newValue;
    },
  },
  methods: {
    updateValue() {
      this.$emit('update:modelValue', this.localValue);
    },
  },
};
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
