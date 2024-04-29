<template>
  <section>
    <basic-form @submit.prevent="onSubmit">
      <div class="form__control">
          <h1>회원가입</h1>
        </div>
        <div class="form__control">
          <input v-model="userId" type="text" name="id" placeholder="아이디" required>
        </div>
        <div class="form__control">
          <input v-model="password" name="password" type="password" placeholder="비밀번호" required>
        </div>
        <base-button type="submit">제출</base-button>
    </basic-form>
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
  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch('register', {
        id: this.userId,
        password: this.password
      })
      this.$router.push('/sign-in')
      } catch(error) {
        //http 에러 이외의 프론트엔드적 에러처리
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