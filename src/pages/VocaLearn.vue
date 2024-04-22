<template>
  <section>
    <div class="vocaLearn__frame">
    <question-answer :words="words"></question-answer>
  </div>
  </section>
</template>

<script>
import QuestionAnswer from '../components/question/QuestionAnswer.vue';

export default {
  components: {
    QuestionAnswer
  },
  data() {
    return {
      words: [
        {
          id: '1번',
          question: '1번 문제',
          answer: '1번 답',
          difficulty: 'HARD'
        },
        {
          id: '2번',
          question: '2번 문제',
          answer: '2번 답',
          difficulty: 'HARD'
        },
        {
          id: '3번',
          question: '3번 문제',
          answer: '3번 답',
          difficulty: 'HARD'
        },
        {
          id: '4번',
          question: '4번 문제',
          answer: '4번 답',
          difficulty: 'HARD'
        },
         {
          id: '5번',
          question: '5번 문제',
          answer: '5번 답',
          difficulty: 'HARD'
        },
      ]
    }
  }
}
</script>