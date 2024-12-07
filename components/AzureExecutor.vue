<template>
  <div class="azure-executor">
    <div class="header">
      <h1>Azure Executor</h1>
    </div>
    
    <div class="content">
      <div class="button" @mouseover="onHover" @mouseleave="offHover">
        Features
      </div>
      <div class="button" @mouseover="onHover" @mouseleave="offHover">
        Discord
      </div>
      <div class="button" @mouseover="onHover" @mouseleave="offHover">
        Download
      </div>
    </div>
    
    <!-- Animated background -->
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  methods: {
    onHover(event) {
      event.target.classList.add("hovered");
    },
    offHover(event) {
      event.target.classList.remove("hovered");
    }
  }
}
</script>

<style scoped>
.azure-executor {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
}

.header h1 {
  font-size: 48px;
  color: white;
  margin-bottom: 50px;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.button {
  padding: 15px 30px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.button:hover {
  color: #fff;
  border-color: #9b59b6; /* Purple border on hover */
  box-shadow: 0 0 10px 2px rgba(155, 89, 182, 0.6); /* Purple glow on hover */
}

.hovered {
  color: #9b59b6;
  text-shadow: 0px 0px 15px rgba(155, 89, 182, 0.8); /* Purple glowing text */
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(155, 89, 182, 1) 50%, rgba(0, 0, 0, 1) 100%);
  background-size: 300% 300%;
  animation: waveAnimation 3s ease-in-out infinite;
}

@keyframes waveAnimation {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
