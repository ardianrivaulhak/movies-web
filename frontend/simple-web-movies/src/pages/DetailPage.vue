<script>
import { mapActions, mapState } from 'pinia';
import { useMovieStore } from '@/stores/useMovieStore';

export default {
  computed: {
    urlQr() {
      return window.location.href;
    },
    ...mapState(useMovieStore, ['movie', 'loading']),
  },
  methods: {
    ...mapActions(useMovieStore, ['movieById']),
  },
  created() {
    this.movieById(this.$route.params.movieId);
  },
};
</script>
<template>
  <div v-if="loading">
    <div class="d-flex justify-content-center mt-5 mb-5">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <!-- Detail Page -->
    <div class="row mt-5">
      <div class="col-md-8">
        <div class="video-container">
          <iframe width="100%" height="400" :src="movie.trailerUrl" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-md-4">
        <img :src="movie.imgUrl" style="width: 100%; height: 480px; object-fit: cover" :alt="movie.title" />
      </div>
    </div>

    <div class="mt-5 mb-5">
      <div class="row">
        <div class="col-md-9">
          <h3>{{ movie.title }}</h3>
          <table>
            <tr>
              <th>Rating</th>
              <th>:</th>
              <td>{{ movie.rating }}</td>
            </tr>
            <tr>
              <th>Genre</th>
              <th>:</th>
              <td>{{ movie.Genre.name }}</td>
            </tr>
          </table>
          <p class="mt-3">{{ movie.synopsis }}</p>
        </div>
        <div class="col-md-3">
          <div class="card" style="border: none">
            <h4>Share Qr Code</h4>
            <center>
              <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlQr}`" width="300" height="300" alt="" />
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
