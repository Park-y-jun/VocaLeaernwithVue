<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: #4CAF50; 
  border: none;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
}

button:hover {
  background-color: #45a049; 
}

button:active {
  background-color: #3e8e41; 
  box-shadow: 0 5px #666; 
  transform: translateY(4px); 
}

</style>