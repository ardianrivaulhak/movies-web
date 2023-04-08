<script>
import Carausel from '@/components/Carausel.vue';
import EntityList from '@/components/EntityList.vue';
import { mapActions } from 'pinia';
import { useMovieStore } from '../stores/useMovieStore';

export default {
  data() {
    return {
      title: '',
      genreId: 0,
    };
  },
  components: {
    Carausel,
    EntityList,
  },
  methods: {
    ...mapActions(useMovieStore, ['readAllMovie']),
    searchHandle() {
      let obj = {
        title: this.title,
      };

      if (+this.genreId !== 0) {
        obj.genre = +this.genreId;
      } else if (+this.genreId === 0) {
        delete obj['genre'];
      }

      this.readAllMovie(obj);
      this.$router.push({
        path: '/',
        query: obj,
      });
    },
    clearSearchHandle() {
      let obj = {
        genre: +this.genreId,
      };

      if (+this.genreId === 0) {
        delete obj['genre'];
      }
      this.title = '';
      this.readAllMovie(obj);
      this.$router.push({
        path: '/',
        query: obj,
      });
    },
  },
  created() {
    this.$router.push({
      path: '/',
    });
  },
};
</script>
<template>
  <div class="container">
    <Carausel />

    <!-- List Entity -->
    <div class="row">
      <div class="col-md-3 p-2 pt-4" style="background-color: white">
        <div class="card p-4" style="height: 50%; border: none">
          <p class="m-0 mb-2"><b>MOVIE TITLE</b></p>
          <form @submit.prevent="searchHandle">
            <input type="text" class="form-control form-control-sm" v-model="title" />
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary btn-sm btn-block mt-3">Search</button>
              <button @click.prevent="clearSearchHandle" class="btn btn-outline-primary btn-sm btn-sm btn-block mt-1">Clear Search</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-9 p-5" style="background-color: white">
        <EntityList :title="title" :genreId="genreId" />
      </div>
    </div>
  </div>
</template>
