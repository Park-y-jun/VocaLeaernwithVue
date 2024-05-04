<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

button { 
  width: 150px;
  height: 80px;
  background-color: white;
  border: 1px solid #4CAF50; 
  border-radius: 10px;
  color: #4CAF50;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  font-size: 20px;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}

button:hover {
  background-color: #45a049;
  color: white; 
}

button:active {
  background-color: #3e8e41; 
  box-shadow: 0 5px #666; 
  transform: translateY(4px); 
  color: white; 
}
</style>