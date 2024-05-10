<template>
  <section>

    <div class="list__frame" v-if="!isDeckForm">
      <ul v-if="lists && lists.length > 0">
        <deck-list
          v-for="list in lists"
          :key="list._id"
          :deckId="list._id"
          :name="list.listName"
        ></deck-list>
      </ul>

      <div class="list__noList" v-else>
        <h1>New Deck 버튼을 눌러서 단어장을 만드세요</h1>
      </div>
    </div>

    <basic-form @submit.prevent="onSubmit" v-if="isDeckForm">
      <div class="form__input">
        <input v-model="deckName" type="text" name="deckName" placeholder="단어장 이름을 입력하세요" required>
      </div>
      <div class="form__btn">
        <base-button type="submit">제출</base-button>
        <base-button @click="closeForm">닫기</base-button>
      </div>   
    </basic-form> 

  </section>
</template>

<script>
import DeckList from '../components/deck/DeckList.vue';

export default {
  components: {
    DeckList
  },
  data() {
    return {
    deckName: '',
    }
  },

  created() {
  if (!this.$store.getters.loginState) {
    this.$router.push('/sign-in');
  } else {
    const userKey = this.userInfo._id;
    if (userKey) {
      this.$store.dispatch('deck/fetchDecks', userKey);
    }
  }
},

  computed: {
    isDeckForm() {
      return this.$store.getters['is/isDeckForm']
    },

    userInfo() {
      return this.$store.getters.user
    },
    
    lists() {
      return this.$store.getters['deck/decks']
    }
  },

  methods: {
    async onSubmit() {
      const userKey = this.userInfo._id

      await this.$store.dispatch('deck/newDeck', { listName: this.deckName, user: userKey })
      await this.$store.dispatch('deck/fetchDecks', userKey);

      this.$store.dispatch('is/toggleDeckForm', false);
      this.deckName = '';
    },

    closeForm() {
      this.$store.dispatch('is/toggleDeckForm', false);
    }
  }
}
</script>

<style scoped>
  .list__noList{
    margin-top: 100px;
  }
  .form__input {
    margin-top: 60px
  }
 
  .form__input > input {
    margin: 5px;
    height: 40px;
    width: 300px;
  }

  .form__btn {
    margin-top: 20px;
  }

  .form__btn > button {
    margin: auto 30px;
  }
</style>