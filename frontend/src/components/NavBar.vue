<script>
import { RouterLink } from 'vue-router';
import { mapState, mapActions } from 'pinia';

export default {};
</script>
<template>
  <div>
    <!-- Navbar -->
    <nav class="custom navbar navbar-expand-lg navbar-light p-2">
      <div class="container">
        <a class="navbar-brand" href="#">
          <h3 class="color-white">ARDIAN MOVIE</h3>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/"><b class="color-white">Home</b></a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/favorites"><b class="color-white">Favorite</b> </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style>
.custom {
  background-color: #0d6efc;
  color: white;
}

.color-white {
  color: white;
}
</style>
