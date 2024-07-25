<template>
    <div class="wrapper">

        <div :class="['content', { 'content-expanded': !sidebarVisible }]">

            <section id="gallery" class="gallery">
            <div class="container">
                <my-title name="Galerie Foto"/>
                <div class="mt-5 mb-5">
                    <div class="row gallery">
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
                        </div>
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
                        </div>
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
                        </div>
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
                        </div>
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
                        </div>
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
                        </div>
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
                        </div>
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
                        </div>
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
                        </div>
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
                        </div>
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
                        </div>
                        <div class="image col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Photo 1"></a>
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
