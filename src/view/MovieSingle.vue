<template>
  <div>
    <h1>{{ movie }}</h1>
    <button
      @click="$store.commit('TOGGLE_IS_OPEN', !$store.state.isOpen)"
      class="my-btn"
    > Toggle Sidebar </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {},
    };
  },
  methods: {
    async getMovieById() {
      const apiKey = "fa61e6fa7724edd99048bc5f0b11ae72";
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${apiKey}`
      );
      this.movie = await res.json();
    },
  },
  mounted() {
    this.getMovieById();
  },
};
</script>

<style>
</style>