<template>
  <div class="form__background">
    <form class="form__container">
      <slot></slot>
    </form>
  </div>
</template>

<style scoped>
.form__background {
  background-color: rgba(0, 0, 0, 0.6); 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form__container {
  background-color: #ffffff; 
  padding: 20px;
  max-width: 500px;
  width: 100%;
  height: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  animation: modalFadeIn 0.5s ease-out;
  margin-bottom: 100px; 
}

.form__container > * {
  margin-bottom: 20px; 
}

.form__container > *:last-child {
  margin-bottom: 0; 
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>