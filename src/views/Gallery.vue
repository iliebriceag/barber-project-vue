<template>
    <div class="wrapper">

        <div :class="['content', { 'content-expanded': !sidebarVisible }]">

            <section id="gallery" class="gallery">
            <div class="container">
                <h2 class="text-center">Galerie Foto</h2>
                <div class="mt-5 mb-4\5">
                    <div class="row">
                        <div class="col-md-4 col-6 gallery-card">
                            <img src="../assets/images/barber-hero.jpg" class="gallery-img" alt="Photo 1">
                        </div>
                        <div class="col-md-4 col-6 gallery-card">
                            <img src="../assets/images/barber-hero.jpg" class="gallery-img" alt="Photo 2">
                        </div>
                        <div class="col-md-4 col-6 gallery-card">
                            <img src="../assets/images/barber-hero.jpg" class="gallery-img" alt="Photo 3">
                        </div>
                        <div class="col-md-4 col-6 gallery-card">
                            <img src="../assets/images/barber-hero.jpg" class="gallery-img" alt="Photo 4">
                        </div>
                        <div class="col-md-4 col-6 gallery-card">
                            <img src="../assets/images/barber-hero.jpg" class="gallery-img" alt="Photo 5">
                        </div>
                        <div class="col-md-4 col-6 gallery-card">
                            <img src="../assets/images/barber-hero.jpg" class="gallery-img" alt="Photo 6">
                        </div>
                    </div>
                </div>
            </div>
        </section>



        </div>
    </div>
    
    <Footer />

    <Actions />

</template>

<style>
.gallery-img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.gallery-card {
    margin-bottom: 20px;
}

</style>

<script>
import Actions from '../components/Actions.vue'
import Footer from '@/components/Footer.vue';
export default {
    data() {
        return {
            sidebarVisible: false,
        };
    },
    components: {
        Actions, Footer
    }
}
</script>
