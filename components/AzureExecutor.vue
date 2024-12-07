<template>
  <div class="main-container">
    <div class="background"></div>
    <div class="content">
      <h1>Azure Executor</h1>
      <div class="buttons">
        <button class="btn" @mouseover="hover = true" @mouseleave="hover = false">
          Features
        </button>
        <button class="btn" @mouseover="hover = true" @mouseleave="hover = false">
          Discord
        </button>
        <button class="btn" @mouseover="hover = true" @mouseleave="hover = false">
          Download
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const hover = ref(false);
</script>

<style scoped>
.main-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  overflow: hidden;
  color: white;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, purple, black);
  animation: wave-animation 5s infinite linear;
  z-index: -1;
}

@keyframes wave-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}

.content {
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 30px;
  font-family: 'Arial', sans-serif;
  color: white;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  padding: 15px 30px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: purple;
  color: black;
  box-shadow: 0 0 10px purple;
}

</style>
