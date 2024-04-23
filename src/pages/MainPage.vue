<template>
  <section>
    <div class="list__frame">
      <ul>
        <deck-list
          v-for="list in lists"
          :key="list.id"
          :name="list.name"
        ></deck-list>
      </ul>
    </div>
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
      lists: [{
        id: '1',
        name: '리스트 1번'
      },
      {
        id: '2',
        name: '리스트 2번'
      },
      {
        id: '3',
        name: '리스트 3번'
      },
      {
        id: '4',
        name: '리스트 4번'
      },
    ]
    }
  },
  mounted() {
    this.$el.addEventListener('mousemove', this.handleEvent);
    this.$el.addEventListener('click', this.handleEvent);
    document.addEventListener('keydown', this.handleEvent);
  },
  beforeDestroy() {
    this.$el.removeEventListener('mousemove', this.handleEvent);
    this.$el.removeEventListener('click', this.handleEvent);
    document.removeEventListener('keydown', this.handleEvent); 
  },
  methods: {
    handleEvent() {
      this.$router.push('/sign-in');
      this.$el.removeEventListener('mousemove', this.handleEvent);
      this.$el.removeEventListener('click', this.handleEvent);
      document.removeEventListener('keydown', this.handleEvent); 
    },
  }
}
</script>

<style scoped>
  .list__frame {
    width: 100%;
    height: 100%;
  }
</style>