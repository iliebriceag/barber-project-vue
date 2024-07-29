<template>




    <div :class="['content', { 'content-expanded': !sidebarVisible }]">

        <div class="row  d-none d-lg-flex">
            <div class="col-lg-8 info">
                <div class="row">
                    <div class="col-md-4 animate fadeInRight">
                        <div class="media">
                            <h5 class="d-flex text-white"><i class="bi bi-telephone-fill me-1"></i>0722 669 299</h5>
                            <p class="ms-4 text-secondary">Sunați-ne 24/7, vă vom răspunde cât mai repede</p>
                        </div>
                    </div>
                    <div class="col-md-4 animate fadeInRight one">
                        <div class="media">

                            <div class="media-body">
                                <h5 class="d-flex text-white"><i class="bi bi-geo-alt-fill me-1"></i>București, Sector 6
                                </h5>
                                <p class="ms-4 text-secondary">Bulevardul Uverturii 118, București 077042</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 animate fadeInRight two">
                        <div class="media">
                            <h5 class="d-flex text-white"><i class="bi bi-clock-fill me-1"></i>Zilnic: 08:00 - 19:00
                            </h5>
                            <p class="ms-4 text-secondary">Luni - Vineri, Sâmbătă <br> Duminică: ÎNCHIS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="hero">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col">
                        <h1 class="text-white animate fadeInUp one">Bine ați venit!</h1>
                        <p class="fs-4 animate fadeIn three">Servicii profesionale de tuns și
                            îngrijire pentru bărbați, stiluri de
                            tunsori,
                            adaptate fiecărui
                            client în parte, luând în considerare preferințele individuale și tendințele actuale în
                            modă.
                        </p>
                        <a href="https://wa.me/+40722669299" class="btn btn-primary animate fadeInDown two">Programare
                            online</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="services" class="services">
            <div class="container">

                <my-title name="Serviciile Noastre" />

                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6  text-center">
                    <div class="col-lg-4 mt-4 fadein">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title primary-color"><img src="../assets/icons/cut.svg" alt="Frizerie Sector 6, Bucuresti"
                                        style="height: 100px;"></h5>
                                <h5 class="card-title">Tuns modern</h5>
                                <p class="card-text">Tunsori și stilizare a părului.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-4 fadein">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title primary-color"><img src="../assets/icons/mustache.svg" alt="Frizerie Sector 6, Bucuresti"
                                        style="height: 100px;"></h5>
                                <h5 class="card-title">Barbă perfectă</h5>
                                <p class="card-text">Îngrijire și modelare pentru barbă.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-4 fadein">
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
                    <div class="col-lg-4 fadein">
                        <div class="card mt-4">
                            <div class="card-body">
                                <h5 class="card-title"><img src="../assets/icons/cut.svg" alt="Frizerie Sector 6, Bucuresti" style="height: 100px;">
                                </h5>
                                <h5 class="card-title">Tuns clasic</h5>
                                <p class="card-text">Oferim tuns și modelare păr.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-4 fadein">
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
                    <div class="col-lg-4 mt-4 fadein">
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

        <section id="gallery" class="gallery">
            <div class="container">
                <my-title name="Galerie Foto" />
                <div class="mt-5 mb-4\5">
                    <div class="row gallery">
                        <div class="col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Frizerie Sector 6, Bucuresti"></a>
                        </div>
                        <div class="col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Frizerie Sector 6, Bucuresti"></a>
                        </div>
                        <div class="col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Frizerie Sector 6, Bucuresti"></a>
                        </div>
                        <div class="col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Frizerie Sector 6, Bucuresti"></a>
                        </div>
                        <div class="col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Frizerie Sector 6, Bucuresti"></a>
                        </div>
                        <div class="col-md-4 col-6 gallery-card">
                            <a href="/images/barber-hero.jpg" data-lightbox="models"><img src="/images/barber-hero.jpg" class="gallery-img" alt="Frizerie Sector 6, Bucuresti"></a>
                        </div>
                       
                    </div>
                    <div class="more float-end btn-more"> <router-link to="/galerie" class="text-decoration-none text-white"><i class="bi bi-chevron-compact-right me-1"></i>Vezi mai multe...</router-link></div>
                </div>
            </div>
        </section>

        <section class="mt-5 mb-5" id="prices">
            <div class="container">
                <div class="row">
                    <div class="mb-4">
                        <my-title name="Listă prețuri" />
                    </div>
                    <div class="card border-0 p-3">
                        <div>
                            <h6 class="d-flex">
                                Tuns clasic
                                <span class="price-list-divider"></span>

                                <span data-aos="fade-down-left" data-aos-duration="1000">20 lei</span>
                            </h6>
                        </div>

                        <div>
                            <h6 class="d-flex">
                                Tuns fade
                                <span class="price-list-divider"></span>

                                <span data-aos="fade-down-left" data-aos-duration="1300">30 lei</span>
                            </h6>
                        </div>

                        <div>
                            <h6 class="d-flex">
                                Tuns barbă
                                <span class="price-list-divider"></span>

                                <span data-aos="fade-down-left" data-aos-duration="1600">10 lei</span>
                            </h6>
                        </div>

                        <div>
                            <h6 class="d-flex">
                                Contur barbă
                                <span class="price-list-divider"></span>

                                <span data-aos="fade-down-left" data-aos-duration="1900">10 lei</span>
                            </h6>
                        </div>

                        <div>
                            <h6 class="d-flex">
                                Vopsit barbă
                                <span class="price-list-divider"></span>

                                <span data-aos="fade-down-left" data-aos-duration="2200">25 lei</span>
                            </h6>
                        </div>
                        <div>
                            <h6 class="d-flex">
                                Model
                                <span class="price-list-divider"></span>

                                <span data-aos="fade-down-left" data-aos-duration="2500">10 lei</span>
                            </h6>
                        </div>
                        <div>
                            <h6 class="d-flex">
                                Spălat
                                <span class="price-list-divider"></span>

                                <span data-aos="fade-down-left" data-aos-duration="2800">10 lei</span>
                            </h6>
                        </div>
                        <div>
                            <h6 class="d-flex">
                                Stilizat
                                <span class="price-list-divider"></span>

                                <span data-aos="fade-down-left" data-aos-duration="3000">5 lei</span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about mt-5 mb-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <img src="../assets/images/hero-bg.jpg" class="img-fluid rounded image-right" alt="Frizerie Sector 6, Bucuresti">
                    </div>
                    <div class="col-lg-6 card border-0 p-3 fadein card-left">
                        <my-title name="Despre Noi" />

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

        <section class="mt-5 mb-5" id="contact">
            <div class="container">
                <my-title name="Contact" />
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="wrapper">
                            <div class="row mb-5">
                                <div class="col-md-2">
                                    <div class="dbox w-100 text-center">
                                        <a href="http://maps.google.com/?q=Bulevardul Uverturii 118" class="text-white">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <i class="bi bi-geo-alt-fill"></i>
                                            </div>
                                        </a>
                                        <div class="text-muted">
                                            <p> Bulevardul Uverturii 118, București 077042 </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="dbox w-100 text-center">
                                        <a href="tel:0722669299" class="text-white">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <i class="bi bi-telephone-fill"></i>
                                            </div>
                                        </a>
                                        <div class="text-muted">
                                            <p>0722 669 299</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="dbox w-100 text-center">
                                        <div class="icon d-flex align-items-center justify-content-center">
                                            <i class="bi bi-envelope-open-fill"></i>
                                        </div>
                                        <div class="text-muted">
                                            <p>contact@maostudio.ro</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="dbox w-100 text-center">
                                        <div class="icon d-flex align-items-center justify-content-center">
                                            <i class="bi bi-facebook"></i>
                                        </div>
                                        <div class="text-muted">
                                            <p>/Mao Studio</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="dbox w-100 text-center">
                                        <div class="icon d-flex align-items-center justify-content-center">
                                            <i class="bi bi-instagram"></i>
                                        </div>
                                        <div class="text-muted">
                                            <p>/Mao Studio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row no-gutters">

                                <div class="col-md-5 d-flex align-items-stretch fadein">
                                    <div class="info-wrap w-100 p-5 image">
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="contact-wrap w-100 p-md-5 p-4">
                                        <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                                            <div class="row">
                                                <div class="col-md-6 mt-3">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="name" id="name"
                                                            placeholder="Nume">
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" name="email" id="email"
                                                            placeholder="Email">
                                                    </div>
                                                </div>
                                                <div class="col-md-12 mt-3">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="subject"
                                                            id="subject" placeholder="Subiect">
                                                    </div>
                                                </div>
                                                <div class="col-md-12 mt-3">
                                                    <div class="form-group">
                                                        <textarea name="message" class="form-control" id="message"
                                                            cols="30" rows="4" placeholder="Mesajul tău"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group mt-3">
                                                        <input type="submit" value="Trimite mesaj"
                                                            class="btn btn-primary">
                                                        <div class="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <iframe width="100%" height="400" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Bulevardul Uverturii 118&t=&z=19&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </section>

    </div>

    <Footer />

    <Actions />

</template>


<style scoped>
.btn-more {
    background-color: #da8a12;
    padding: 3px 15px;
    border: none;
    border-radius: 5px;
}

.card-left {
    margin-left: -100px;
}

.image-right {
    margin-left: 100px;
}

@media only screen and (max-width : 992px) {
    .card-left {
        margin-left: 0;
    }

    .image-right {
        margin-left: 0;
    }
}

.info {
    position: absolute;
    top: 20px;
    right: 0;
    padding: 30px;
    background-color: #00000096;
    color: white !important;
}

/*  */
.gallery-img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.gallery-card {
    margin-bottom: 20px;
}

.more {
    cursor: pointer;
}

/*  */

.image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(/src/assets/images/barber-hero.jpg);
}

.form-control {
    height: 36px;
    background: #fff;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    border-radius: 2px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-control::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.3) !important;
}

.form-control::-moz-placeholder {
    color: rgba(0, 0, 0, 0.3) !important;
}

.form-control:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.3) !important;
}

.form-control:-moz-placeholder {
    color: rgba(0, 0, 0, 0.3) !important;
}

.form-control:focus,
.form-control:active {
    border-color: #da8a12 !important;
}

textarea.form-control {
    height: inherit !important;
}

.contact-wrap {
    background: #fff;
}

@media (max-width: 768px) {
    .info-wrap {
        height: 400px;
    }
}

.dbox {
    width: 100%;
    margin-bottom: 25px;
}

@media (max-width: 768px) {
    .dbox {
        margin-bottom: 25px !important;
        padding: 0 20px;
    }
}

.dbox p {
    margin-bottom: 0;
}


.dbox .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #da8a12;
    box-shadow: 1px 1px 5px #222;
    -o-box-shadow: 1px 1px 5px #222;
    -webkit-box-shadow: 1px 1px 5px #222;
    -moz-box-shadow: 1px 1px 5px #222;
    -ms-box-shadow: 1px 1px 5px #222;
    color: white;
    margin: 0 auto;
    margin-bottom: 20px;
}

.dbox .icon span {
    font-size: 20px;
    color: #fff;
}

.dbox .text {
    width: 100%;
}

.btn {
    padding: 12px 16px;
    cursor: pointer;
    border-width: 1px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    box-shadow: 1px 1px 5px #222;
    -o-box-shadow: 1px 1px 5px #222;
    -webkit-box-shadow: 1px 1px 5px #222;
    -moz-box-shadow: 1px 1px 5px #222;
    -ms-box-shadow: 1px 1px 5px #222;
    position: relative;
    margin-bottom: 20px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

@media (prefers-reduced-motion: reduce) {
    .btn {
        -webkit-transition: none;
        -o-transition: none;
        transition: none;
    }
}

.btn:hover,
.btn:active,
.btn:focus {
    outline: none !important;
}

.btn.btn-primary {
    background: #da8a12 !important;
    border-color: #da8a12 !important;
    color: #fff;
}

.btn.btn-primary:hover,
.btn.btn-primary:focus {
    border-color: #da8a12 !important;
    background: #da8a12 !important;
}

.contactForm .label {
    color: #000;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
}

.contactForm .form-control {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0;
}


#contactForm .form-control {
    font-size: 15px;
}

#message {
    resize: vertical;
}

#form-message-warning,
#form-message-success {
    display: none;
}

.submitting {
    float: left;
    width: 100%;
    padding: 10px 0;
    display: none;
    font-size: 16px;
    font-weight: bold;
}

.price-list-divider {
    background-image: linear-gradient(to right, #da8a12 0%, transparent 19%, #da8a12 42%, transparent 79%, #da8a12 100%);
    flex: auto;
    height: 1px;
    margin: auto 20px 0;
}

@media only screen and (max-width : 1400px) {
    .hero {
        padding-top: 35%;
    }
}

@media only screen and (max-width : 768px) {
    .hero {
        padding-top: 50%;
    }
}

@media only screen and (max-width : 992px) {
    .hero {
        padding-top: 30%;
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
