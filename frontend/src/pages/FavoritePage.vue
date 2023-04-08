<script>
import EntityItem from '@/components/EntityItem.vue';
import { mapActions, mapState } from 'pinia';
import { useMovieStore } from '@/stores/useMovieStore';

export default {
  components: {
    EntityItem,
  },
  computed: {
    ...mapState(useMovieStore, ['movies', 'loading']),
  },
  methods: {
    ...mapActions(useMovieStore, ['readFavorite']),
  },
  created() {
    this.readFavorite();
  },
};
</script>
<template>
  <div class="container">
    <div v-if="loading">
      <div class="d-flex justify-content-center mt-5 mb-5">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- Bookmark Page -->
      <div class="text-center mt-5">
        <h2>My Favorite List</h2>
      </div>
      <div v-if="movies.length === 0" class="text-center mt-5 mb-5">
        <h4>Data Not Found</h4>
      </div>
      <div v-else>
        <div class="p-5">
          <div class="row mb-3">
            <EntityItem v-for="(movie, idx) in movies" :key="idx" :movie="movie.Movie" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
