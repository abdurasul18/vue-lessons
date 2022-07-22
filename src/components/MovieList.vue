<template>
  <div>
    <h2 class="title">Movies</h2>

    <input
      placeholder="Search"
      class="searchInput"
      type="text"
      v-model="searchVal"
    />
    <div class="row" v-if="movies.length">
      <movie-card v-for="(movie, index) in movies" :key="index" :movie="movie">
      </movie-card>
    </div>
    <h5 v-else-if="!loading">Ma'lumot topilmadi</h5>
    <div class="loader" v-if="loading">
      <img src="@/assets/loader.svg" alt="" />
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/cards/MovieCard.vue";
export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: [],
      loading: false,
      searchVal: "",
    };
  },
  computed: {},
  methods: {
    async getMovies() {
      try {
        this.loading = true;
        const apiKey = "fa61e6fa7724edd99048bc5f0b11ae72";
        let res = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`
        );
        this.movies = (await res.json()).results;
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
      console.log(this.$route);
    this.getMovies();
  },
};
0;
</script>

<style>
</style>