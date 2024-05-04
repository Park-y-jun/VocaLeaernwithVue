<template>
 <section>

  <div class="vocaLearn__running" v-if="!isFinished && questions.length > 0">
    <div v-if="currentQuestion"  @click="toggleAnswer">
      <div class="vocaLearn__question">
        {{ currentQuestion.question }}
      </div>
      <div class="vocaLearn__answer" v-if="showAnswer">
        {{ currentQuestion.answer }}
      </div>
    </div>
  </div>

  <div class="vocaLearn__end" v-else>
    <h1>오늘의 학습이 끝났습니다</h1>
  </div>

  <div class="vocaLearn__btn">
    <base-button @click="nextQuestion('EASY')">쉬움</base-button>
    <base-button @click="nextQuestion('NORMAL')">중간</base-button>
    <base-button @click="nextQuestion('HARD')">어려움</base-button>
  </div>

 </section>  
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      isFinished: false,
      showAnswer: false,
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
        this.showAnswer = false;   
    },

    toggleAnswer() {
      this.showAnswer = !this.showAnswer; 
    }
  }
}
</script>

<style scoped>
.vocaLearn__running, .vocaLearn__end {
  margin-top: 50px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.vocaLearn__running div, .vocaLearn__end h1 {
  margin: 20px 0;
}

.vocaLearn__question, .vocaLearn__answer {
  width: 1000px; 
  height: 100px;
  font-size: 1.2em; 
  padding: 20px; 
  background-color: #f8f9fa; 
  border-radius: 10px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  margin: 0 auto 20px; 
  text-align: center;   
}

.vocaLearn__answer {
  background-color: #e9ecef;
  
}

.vocaLearn__btn {
  margin: 20px;
  display: flex;
  justify-content: center;
}

.vocaLearn__btn > button {
  width: 140px;
  height: 50px;
  margin: auto 50px;
}
</style>