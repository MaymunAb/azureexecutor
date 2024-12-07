<template>
  <button class="custom-button" @click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Click me'
    }
  },
  methods: {
    handleClick() {
      this.$emit('clicked');
    }
  }
}
</script>

<style scoped>
.custom-button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.custom-button:hover {
  background-color: #2980b9;
}
</style>
