<template>
  <section>

    <basic-form @submit.prevent="onSubmit">
      <div class="form__control">
          <h1>로그인</h1>
        </div>
        <div class="form__control">
          <input v-model="userId" type="text" name="id" placeholder="아이디" required>
        </div>
        <div class="form__control">
          <input v-model="password" type="password" name="password" placeholder="비밀번호" required>
        </div>

        <div class="form__btn">
          <base-button type="submit">로그인</base-button>
        <router-link to="/sign-up">
          <base-button>회원가입</base-button>
        </router-link>
        </div>
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
      await this.$store.dispatch('login', {
        id: this.userId,
        password: this.password
      })
      this.$router.push('/home')     
    }
  }
}
</script>

<style scoped>
  .form__control > h1 {
    font-size: 27px;
  }

  .form__control > input {
    margin: 5px;
    height: 40px;
    width: 300px;
  }

  .form__btn {
    margin-top: 10px;
  }

  .form__btn > button {
    margin: 10px;
  }
</style>