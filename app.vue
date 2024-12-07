<template>
  <div>
    <h1>Welcome to my Nuxt App!</h1>
    <CustomButton label="Click Me" @clicked="handleClick"/>
  </div>
</template>

<script>
// Import the CustomButton component
import CustomButton from '~/components/CustomButton.vue'

export default {
  components: {
    CustomButton
  },
  methods: {
    handleClick() {
      alert('Button clicked!');
    }
  }
}
</script>

<style>
/* You can add global styles here or use scoped styles in individual components */
</style>
