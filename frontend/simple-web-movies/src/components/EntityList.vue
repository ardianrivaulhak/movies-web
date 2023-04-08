<script>
import EntityItem from '@/components/EntityItem.vue';
import { mapActions, mapState } from 'pinia';
import { useMovieStore } from '@/stores/useMovieStore';

export default {
  props: ['title', 'genreId'],
  components: {
    EntityItem,
  },
  computed: {
    ...mapState(useMovieStore, ['movies', 'loading']),
  },
  methods: {
    ...mapActions(useMovieStore, ['readAllMovie']),
  },
  created() {
    this.readAllMovie();
  },
};
</script>
<template>
  <div v-if="loading">
    <div class="d-flex justify-content-center mt-5">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <div v-else>
    <div v-if="movies.movies.length === 0" class="text-center mt-5">
      <h3>Data Not Found</h3>
    </div>
    <div v-else>
      <div class="row mb-3">
        <EntityItem v-for="(movie, idx) in movies.movies" :key="idx" :movie="movie" />
      </div>
    </div>
  </div>
</template>
