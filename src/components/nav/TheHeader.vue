<template>
  <header>
    <div class="header__mainPage" v-if="$route.meta.headerType === 'main'">
      <div class="header__mainPageGoHome">
        <router-link to="/">
          <nav-button>Home</nav-button>
        </router-link>
      </div>
      <div class="header__mainPageCreateList">
        <nav-button @click="toggleDeckForm">New deck</nav-button>
      </div>
      <div class="header__mainPageLogout">
        <nav-button @click="logout">Logout</nav-button>
      </div>
    </div>

    <div class="header__vocaLearn" v-else-if="$route.meta.headerType === 'voca'">
      <div class="header__vocaLearnGoHome">
        <router-link to="/">
          <nav-button>Home</nav-button>
        </router-link>
      </div>
      <div class="header__vocaLearnEdit">
        <nav-button>단어 편집</nav-button>
      </div>
    </div>

    <div class="header__Form" v-else>
      <div class="header__FormGoHome">
        <router-link to="/">
          <nav-button>Home</nav-button>
        </router-link>
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
  computed: {
    isDeckForm() {
      return this.$store.getters['is/isDeckForm']
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/sign-in')
    },
    toggleDeckForm() {
      this.$store.dispatch('is/toggleDeckForm', true)
    }
  },
}
</script>

<style scoped>
header {
  margin: 20px 0;
}

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