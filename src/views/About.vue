<template>
    <div class="wrapper mt-3">

        <div :class="['content', { 'content-expanded': !sidebarVisible }]">

            <section id="about" class="about mt-5 mb-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <img src="../assets/images/hero-bg.jpg" class="img-fluid rounded" alt="Despre Noi">
                        </div>
                        <div class="col-lg-6 card border-0 p-3">
                            <h2>Despre Noi</h2>
                            <p> Suntem o echipă specializată în aranjarea și îngrijirea părului și a bărbii,
                                oferim servicii personalizate pentru bărbați. Noi vă asigurăm menținerea
                                aspectului îngrijit și elegant, sfaturi și recomandări pentru îngrijirea părului și a
                                bărbii,
                                bazate pe tipul de păr,
                                forma feței și preferințele individuale ale fiecărui client..</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>

    <Footer />

    <Actions />

</template>


<style scoped>
.price-list-divider {
    background: #da8a12;
    flex: auto;
    height: 1px;
    margin: auto 20px 0;
}

@media only screen and (max-width : 768px) {
    .hero {
        padding: 60% 0;
    }
}

@media only screen and (max-width : 992px) {
    .hero {
        padding: 30% 0;
    }
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
