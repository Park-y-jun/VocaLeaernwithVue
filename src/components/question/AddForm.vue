<template>
  <section>
    <basic-form @submit.prevent="onSubmit">
      <div class="form__control">
        <input v-model="question" type="text" id="question" placeholder="단어 문제를 입력하세요" required>
      </div>
      <div class="form__control">
        <input v-model="answer" type="text" id="answer" placeholder="정답을 입력하세요" required>
      </div>
      <base-button type="submit">단어 추가</base-button>
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