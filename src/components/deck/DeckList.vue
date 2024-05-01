<template>
  <li class="list__element">
   <div class="list__name">    
    <h1>{{ name }}</h1>
   </div>
   <div class="list__button">
     <base-button  @click="navigate('add')">단어 추가</base-button>
     <base-button @click="navigate('voca-learn')">학습 시작</base-button>
   </div> 
  </li>
</template>

<script>
export default {
  props: {
    deckId: String,
    name: String
  },
  methods: {
    navigate(targetPath) {
      this.$router.push(`/${targetPath}/${this.deckId}`);
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