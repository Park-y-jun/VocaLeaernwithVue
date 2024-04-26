<template>
  <the-header v-if="isLoggedIn"></the-header>
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
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.loginState
    },
  },
  methods: {
    checkLoginState() {
      this.$store.dispatch('checkLoginState')
    }
  },
  created() {
    this.checkLoginState()
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  font-family: sans-serif;
}

body {
  display: flex;
  flex-direction: column;
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