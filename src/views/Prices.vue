<template>
    <div class="wrapper">



        <div :class="['content', { 'content-expanded': !sidebarVisible }]">

            <section class="mt-5 mb-5" id="prices">
                <div class="container">
                    <div class="row">
                        <div class="mb-4">
                            <my-title name="Listă prețuri"/>

                        </div>
                        <div class="card border-0 p-3">
                            <div>
                                <h6 class="d-flex">
                                    Tuns clasic
                                    <span class="price-list-divider"></span>

                                    <span>20 lei</span>
                                </h6>
                            </div>

                            <div>
                                <h6 class="d-flex">
                                    Tuns fade
                                    <span class="price-list-divider"></span>

                                    <span>30 lei</span>
                                </h6>
                            </div>

                            <div>
                                <h6 class="d-flex">
                                    Tuns barbă
                                    <span class="price-list-divider"></span>

                                    <span>10 lei</span>
                                </h6>
                            </div>

                            <div>
                                <h6 class="d-flex">
                                    Contur barbă
                                    <span class="price-list-divider"></span>

                                    <span>10lei</span>
                                </h6>
                            </div>

                            <div>
                                <h6 class="d-flex">
                                    Vopsit barbă
                                    <span class="price-list-divider"></span>

                                    <span>25 lei</span>
                                </h6>
                            </div>
                            <div>
                                <h6 class="d-flex">
                                    Model
                                    <span class="price-list-divider"></span>

                                    <span>10 lei</span>
                                </h6>
                            </div>
                            <div>
                                <h6 class="d-flex">
                                    Spălat
                                    <span class="price-list-divider"></span>

                                    <span>10 lei</span>
                                </h6>
                            </div>
                            <div>
                                <h6 class="d-flex">
                                    Stilizat
                                    <span class="price-list-divider"></span>

                                    <span>5 lei</span>
                                </h6>
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
