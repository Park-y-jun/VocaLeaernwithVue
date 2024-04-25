<template>
  <section>
    <base-form @submit.prevent="onSubmit">
      <div class="form__control">
          <h1>로그인</h1>
        </div>
        <div class="form__control">
          <input v-model="userId" type="text" name="id" placeholder="아이디" required>
        </div>
        <div class="form__control">
          <input v-model="password" type="password" name="password" placeholder="비밀번호" required>
        </div>
        <base-button type="submit">제출</base-button>
        <router-link to="/sign-up">
          <base-button>회원가입</base-button>
        </router-link>
    </base-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      password: '',
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.loginState
    },
    userInfo() {
      return this.$store.getters.user
    }
  },
   methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch('login', {
        id: this.userId,
        password: this.password
      })
      console.log(this.isLoggedIn)
      console.log(this.userInfo)
      this.$router.push('/home')
      } catch(error) {
        
        console.log(error)
      }
     
    }
  }
}
</script>

<style scoped>
  input {
  width: 300px;
  height: 30px;
}
</style>