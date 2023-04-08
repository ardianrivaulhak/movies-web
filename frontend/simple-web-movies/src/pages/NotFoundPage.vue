<script>
import { RouterLink } from 'vue-router'

export default {

}
</script>
<template>
    <div>
        <div class="d-flex justify-content-center align-items-center h-100 p-5">
            <img src="../assets/images/text-404.png" class="p-0" style="width: 50%" alt="" srcset="">
            <br>
        </div>
        <center>
            <router-link class="btn btn-primary" style="width: 150px" :to="{ name: 'home' }">Back to home</router-link>
        </center>
    </div>
</template>