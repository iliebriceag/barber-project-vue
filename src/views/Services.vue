<template>
    <div class="wrapper">

        <div :class="['content', { 'content-expanded': !sidebarVisible }]">

            <section id="services" class="services">
                <div class="container">
                    <my-title name="Serviciile Noastre"/>
                    <div class="row row row-cols-2 row-cols-md-3 row-cols-lg-6  text-center">
                        <div class="col-lg-4 mt-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title primary-color"><img src="../assets/icons/cut.svg" alt="Frizerie Sector 6, Bucuresti"
                                            style="height: 100px;"></h5>
                                    <h5 class="card-title">Tuns modern</h5>
                                    <p class="card-text">Tunsori și stilizare a părului.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mt-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title primary-color"><img src="../assets/icons/mustache.svg" alt="Frizerie Sector 6, Bucuresti"
                                            style="height: 100px;"></h5>
                                    <h5 class="card-title">Barbă perfectă</h5>
                                    <p class="card-text">Îngrijire și modelare pentru barbă.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mt-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title"><img src="../assets/icons/hands.svg" alt="Frizerie Sector 6, Bucuresti"
                                            style="height: 100px;">
                                    </h5>
                                    <h5 class="card-title">Masaj scalp</h5>
                                    <p class="card-text">Relaxare totală cu masaj pentru scalp.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card mt-4">
                                <div class="card-body">
                                    <h5 class="card-title"><img src="../assets/icons/cut.svg" alt="Frizerie Sector 6, Bucuresti"
                                            style="height: 100px;">
                                    </h5>
                                    <h5 class="card-title">Tuns clasic</h5>
                                    <p class="card-text">Oferim tuns și modelare păr.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mt-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title"><img src="../assets/icons/cream.svg" alt="Frizerie Sector 6, Bucuresti"
                                            style="height: 100px;">
                                    </h5>
                                    <h5 class="card-title">Tratamente</h5>
                                    <p class="card-text">Pentru păr și scalp.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mt-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title"><img src="../assets/icons/chair.svg" alt="Frizerie Sector 6, Bucuresti"
                                            style="height: 100px;">
                                    </h5>
                                    <h5 class="card-title">Consiliere</h5>
                                    <p class="card-text">Sfaturi pentru îngrijirea părului și a bărbii.</p>
                                </div>
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
