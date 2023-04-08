<script>
import { mapActions } from 'pinia';
import { useMovieStore } from '@/stores/useMovieStore';

export default {
  props: ['movie'],
  methods: {
    ...mapActions(useMovieStore, ['addFavorite']),
    addFavoriteMovie() {
      this.addFavorite(this.movie.id);
    },
  },
};
</script>
<template>
  <div class="col-md-3 mb-3">
    <div v-if="this.$route.fullPath === '/favorites'">
      <div class="card rounded" style="background-color: white; border: none">
        <img :src="movie.imgUrl" :alt="movie.title" class="rounded" />
      </div>
    </div>
    <div v-else>
      <router-link class="remove-text-decoration" :to="{ name: 'detailMovie', params: { movieId: movie.id } }">
        <div class="card rounded" style="background-color: white; border: none">
          <img :src="movie.imgUrl" :alt="movie.title" class="rounded" style="width: 22vh; height: 30vh" />
        </div>
      </router-link>
      <div>
        <i class="fa-solid fa-lg fa-bookmark float-end p-4" @click.prevent="addFavoriteMovie"></i>
      </div>
    </div>
    <span v-if="movie.Genre.name === 'Action'" class="badge rounded-pill mt-3 bg-primary">
      {{ movie.Genre.name }}
    </span>
    <span v-if="movie.Genre.name === 'Romance'" class="badge rounded-pill mt-3 bg-success">
      {{ movie.Genre.name }}
    </span>
    <span v-if="movie.Genre.name === 'Comedy'" class="badge rounded-pill mt-3 bg-warning">
      {{ movie.Genre.name }}
    </span>
    <p class="mt-2">
      <b>{{ movie.title }}</b> <br />
      {{ movie.synopsis.substr(0, 100) }}
    </p>
  </div>
</template>
