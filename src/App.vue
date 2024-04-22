<template>
  <!-- <the-header v-if="!isLoggedIn"></the-header> -->
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      isLoggedIn: true
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

div {
  border: 1px solid black;
  text-align: center;
}

a {
  text-decoration: none;
  color: black;
}
</style>