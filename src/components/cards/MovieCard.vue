<template>
  <div class="card">
    <router-link
      :to="`movie/${movie.id}`"
    >
      <img
        class="card-img movie-img"
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        :alt="movie.title"
      />
      <div class="text">{{ movie.title }}</div>
      <div class="badge" >
        {{ movie.vote_average }}
      </div>
    </router-link>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
   
  },
  methods: {
   
  },
  mounted() {},
};
</script>

<style scoped>
.card-img {
  height: 270px;
}
</style>