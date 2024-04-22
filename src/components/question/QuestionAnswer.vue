<template>
  <div v-if="!isFinished">
    <div>
      {{ currentQuestion.question }}
    </div>
    <div>
      {{ currentQuestion.answer }}
    </div>
  </div>
  <div v-if="isFinished">
    <h1>끝났습당</h1>
  </div>
  
  <base-button @click="nextQuestion('EASY')">쉬움</base-button>
  <base-button @click="nextQuestion('MEDIUM')">중간</base-button>
  <base-button @click="nextQuestion('HARD')">어려움</base-button>
</template>

<script>
export default {
 
  props: ['words'],
  data() {
    return {
      currentIndex: 0,
      isFinished: false
    }
  },
  computed: {
    currentQuestion() {
      return this.words[this.currentIndex]
    }
  },
  methods: {
    nextQuestion(difficulty) {
      console.log(difficulty)

      if (this.currentIndex < this.words.length - 1) {
        this.currentIndex += 1;
      } else {
        this.isFinished = true;
      }
    }
  }
}
</script>