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
  align-items: center; 
  border-bottom: 1px solid #bcbcbc; 
  padding: 20px;
  margin-top: 80px; 
}


.list__element:hover {
  background-color: #f5f5f5; 
}

.list__name h1 {
  width: auto; 
  margin-left: 100px; 
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}

.list__button {
  display: flex;
  gap: 10px;
  width: auto; 
  margin-right: 100px; 
}

.list__button base-button {
  flex-grow: 1; 
  margin: 0 8px; 
}
</style>
