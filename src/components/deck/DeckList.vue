<template>
  <li class="list__element">
    <div class="list__name">
      <h1>{{ name }}</h1>
    </div>
    <div class="list__button">
      <base-button>단어 추가</base-button>
      <base-button @click="navigate">학습 시작</base-button>
    </div> 
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    name: String
  },
  methods: {
    navigate() {
      this.$router.push('/voca-learn');
    }
  }
}
</script>

<style scoped>
.list__element {
  display: flex;
  justify-content: space-between;
}
.list__name {
  width: 50%;  
  margin-left: 200px;
}

.list__button {
  width: 300px;
  margin-right: 400px;
}
</style>