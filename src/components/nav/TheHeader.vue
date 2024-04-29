<template>
  <header>
    <div class="header__mainPage" v-if="$route.meta.headerType === 'main'">
    <div class="header__mainPageGoHome">
      <base-button>Home</base-button>
    </div>
    <div class="header__mainPageCreateList">
      <base-button @click="toggleDeckForm">단어장 추가</base-button>
    </div>
    <div class="header__mainPageLogout">
      <base-button @click="logout">로그아웃</base-button>
    </div>
    </div>

    <div class="header__vocaLearn" v-else>
    <div class="header__vocaLearnGoHome">
      <base-button>Home</base-button>
    </div>
    <div class="header__vocaLearnEdit">
      <base-button>단어 편집</base-button>
    </div>
    </div>
  </header>
  
</template>

<script>
export default {
  data() {
    return {
      isMainPage: true
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    toggleDeckForm() {
      this.$store.dispatch('is/activeDeckForm', true)
    }
  }
}
</script>

<style scoped>
/* 메인페이지 nav */
.header__mainPage {
  display: flex;
  justify-content: center;
}
.header__mainPageGoHome {
  margin-right: 250px;
}
.header__mainPageLogout {
  margin-left: 250px;
}

/* vocaLearn페이지 nav */
.header__vocaLearn {
  display: flex;
  justify-content: center;
}
.header__vocaLearnGoHome{
  margin-right: 600px;
}


</style>