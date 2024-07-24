<template>
    <div class="wrapper">



        <div :class="['content', { 'content-expanded': !sidebarVisible }]">

            <section class="mt-5 mb-5" id="contact">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 text-center mb-5">
                            <h2>Contact</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <div class="wrapper">
                                <div class="row mb-5">
                                    <div class="col-md-2">
                                        <div class="dbox w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <i class="bi bi-geo-alt-fill"></i>
                                            </div>
                                            <div class="text">
                                                <p> 198 West 21th Street, Suite 721 New York NY
                                                    10016</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="dbox w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <i class="bi bi-telephone-fill"></i>
                                            </div>
                                            <div class="text">
                                                <p>+ 1235 2355 98</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="dbox w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <i class="bi bi-envelope-open-fill"></i>
                                            </div>
                                            <div class="text">
                                                <p>info@yoursite.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="dbox w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <i class="bi bi-facebook"></i>
                                            </div>
                                            <div class="text">
                                                <p>/Mao Studio</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="dbox w-100 text-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <i class="bi bi-instagram"></i>
                                            </div>
                                            <div class="text">
                                                <p>/Mao Studio</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">

                                    <div class="col-md-5 d-flex align-items-stretch">
                                        <div class="info-wrap w-100 p-5 image">
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="contact-wrap w-100 p-md-5 p-4">
                                            <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                                                <div class="row">
                                                    <div class="col-md-6 mt-3">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" name="name"
                                                                id="name" placeholder="Nume">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mt-3">
                                                        <div class="form-group">
                                                            <input type="email" class="form-control" name="email"
                                                                id="email" placeholder="Email">
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
    </div>

    <Footer />

    <Actions />

</template>


<style scoped>


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

/*  */

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
