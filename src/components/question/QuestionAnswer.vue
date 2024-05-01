<template>
  <div v-if="!isFinished && questions.length > 0">
    <div v-if="currentQuestion">
      <div>
        {{ currentQuestion.question }}
      </div>
      <div>
        {{ currentQuestion.answer }}
      </div>
    </div>
  </div>
  <div v-else>
    <h1>끝났습당</h1>
  </div>
  
  <base-button @click="nextQuestion('EASY')">쉬움</base-button>
  <base-button @click="nextQuestion('NORMAL')">중간</base-button>
  <base-button @click="nextQuestion('HARD')">어려움</base-button>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      isFinished: false
    }
  },
  created() {
    this.$store.dispatch('question/fetchQuestion', this.deckId)
  },
  computed: {
    deckId() {
      return this.$route.params.deckId
    },
    questions() {
      return this.$store.getters['question/questions']
    },
    currentQuestion() {
      return this.questions.length > 0 ? this.questions[this.currentIndex] : null;
    }
  }, 
  methods: {
    async nextQuestion(difficulty) {      
       await this.$store.dispatch('question/modifyDifficulty', { 
          deckId: this.deckId, 
          questionId: this.currentQuestion._id , 
          difficulty: difficulty
         })

       if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex += 1;
       } else {
          this.isFinished = true;
        }   
    }
  }
}
</script>
