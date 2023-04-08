<script>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
        NavBar,
        Footer
    }
}
</script>
<template>
    <div>
        <NavBar />
        <RouterView />
        <Footer />
    </div>
</template>