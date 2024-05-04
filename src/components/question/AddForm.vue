<template>
  <section>
    <basic-form @submit.prevent="onSubmit">
      <div class="form__input">      
        <input v-model="question" type="text" id="question" placeholder="단어 문제를 입력하세요" required>
        <input v-model="answer" type="text" id="answer" placeholder="정답을 입력하세요" required>    
      </div>
      <div class="form__btn">
        <base-button type="submit">단어 추가</base-button>
      </div>
    </basic-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      question: '',
      answer: '',
    }
  },
  computed: {
    deckId() {
     return this.$route.params.deckId
    }
  },
  methods: {
   async onSubmit() {
    const deckId = this.deckId
    await this.$store.dispatch('question/newQuestion', {list: deckId, question: this.question, answer: this.answer})

    this.$router.push('/home');
   }
  }
}
</script>

<style scoped>
  .form__input {
    margin-top: 40px
  }
 
  .form__input > input {
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