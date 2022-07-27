<template>
  <div>
    <router-view />
    <h1>{{ dmy(date2) }}</h1>
    <multiselect @select="metod" :options="options" v-model="selectedValue">
    </multiselect>

    <swiper :options="myOptions">
      <swiper-slide v-for="(movie, index) in movies" :key="index">
        <movie-card :movie="movie"> </movie-card>
      </swiper-slide>
    </swiper>

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
import { dmy } from "@/util";
import Multiselect from "vue-multiselect";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    MovieCard,
    Multiselect,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      selectedValue: "",
      movies: [],
      loading: false,
      searchVal: "",
      options: ["list", "of", "options"],
      date2: 121645454455,
      myOptions : {
        slidesPerView : 4,
      }
    };
  },
  computed: {},
  methods: {
    dmy,
    async getMovies() {
      try {
        this.loading = true;
        const apiKey = "fa61e6fa7724edd99048bc5f0b11ae72";
        let res = await this.$axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`
        );
        this.movies = res.data.results;
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>