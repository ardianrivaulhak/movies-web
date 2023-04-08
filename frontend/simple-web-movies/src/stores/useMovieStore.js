import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import axios from 'axios';
const baseUrl = 'http://localhost:4000';
export const useMovieStore = defineStore({
  id: 'useMovieStore',
  state: () => {
    return {
      movies: [],
      movie: {},
      loading: false,
    };
  },
  getters: {},
  actions: {
    alertSuccess(res) {
      Swal.fire({
        title: 'Success!',
        text: res.message,
        icon: 'success',
        confirmButtonText: 'OK',
      });
    },
    alertError(err) {
      Swal.fire({
        title: 'Error!',
        text: err.response.data.message,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    },
    async readAllMovie(obj) {
      try {
        this.loading = true;
        const { data } = await axios({
          method: 'GET',
          url: `${baseUrl}/movies`,
          params: obj,
        });

        this.movies = data;
      } catch (error) {
        this.alertError(error);
      } finally {
        this.loading = false;
      }
    },
    async movieById(movieId) {
      try {
        this.loading = true;
        const { data } = await axios({
          method: 'GET',
          url: `${baseUrl}/movies/${movieId}`,
        });
        this.movie = data.movie;
      } catch (error) {
        this.alertError(error);
      } finally {
        this.loading = false;
      }
    },

    async addFavorite(movieId) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${baseUrl}/movies/favorites/${movieId}`,
        });
        this.router.push({ name: 'favorites' });
        this.alertSuccess(data);
      } catch (error) {
        this.alertError(error);
      }
    },

    async readFavorite() {
      try {
        this.loading = true;
        const { data } = await axios({
          method: 'GET',
          url: `${baseUrl}/movies/favorites`,
        });
        this.movies = data.favorites;
      } catch (error) {
        this.alertError(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
