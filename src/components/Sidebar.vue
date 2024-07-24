<template>
  <div class="d-flex">
    <nav id="sidebar" :class="{ 'active': isSidebarOpen }">
      <div class="sidebar-header">
        <img src="/logo.png" alt="frizer" class="logo mb-4">

      </div>

      <div class="list-unstyled components" @click="handleLinkClick">
        <router-link to="/">Acasă</router-link>
        <router-link to="/preturi">Prețuri</router-link>
        <router-link to="/servicii">Servicii</router-link>
        <router-link to="/galerie">Galerie</router-link>
        <router-link to="/despre">Despre Noi</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="social mt-5">
        <a href="" class="me-2"><i class="bi bi-facebook"></i></a>
        <a href=""><i class="bi bi-instagram"></i></a>
      </div>
    </nav>
    <div id="content" class="w-100">
      <div class="top-bar d-lg-none">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6">
              <div class="top-bar-left">
                <div class="text">
                  <h2>08:00 - 19:00</h2>
                  <p>Deschis, Luni - Vineri</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="top-bar-right">
                <div class="social">
                  <a href=""><i class="bi bi-telephone-fill"></i></a>
                  <a href=""><i class="bi bi-whatsapp"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-nav d-flex d-lg-none">
        <div class="d-lg-none btn-toggle d-flex fs-6">
          <div class="all d-flex align-items-center" @click="toggleMenu">
            <div class="title me-1">
              <span>Meniu</span>
            </div>
            <div class="hamburger-menu">
              <div :class="{ 'line': true, 'line1': true, 'open': isOpen }"></div>
              <div :class="{ 'line': true, 'line2': true, 'open': isOpen }"></div>
              <div :class="{ 'line': true, 'line3': true, 'open': isOpen }"></div>
            </div>
          </div>
        </div>
        <img src="/mobile-logo.png" alt="barber" class="mobile-logo animate fadeIn two">
        <router-link to="/" class="d-lg-none btn-home d-flex fs-6"><span><i
              class="bi bi-house-door-fill me-1"></i>Acasă</span>
        </router-link>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'Sidebar',
  data() {
    return {
      isSidebarOpen: true,
      isOpen: false
    };
  },
  methods: {
    handleLinkClick() {
      if (window.innerWidth < 992) {
        this.isSidebarOpen = true;
        this.isOpen = !this.isOpen;
      }
    },
    toggleMenu() {
      this.isSidebarOpen = !this.isSidebarOpen;
      this.isOpen = !this.isOpen;
      this.$emit('toggle', this.isOpen);
    }
  },
  created() {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $('.navigation').toggleClass("blue");
        }
      });
    });
  }
};
</script>

<style scoped>
.top-bar {
  position: relative;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #111;
  z-index: 99999;
}

.top-bar .top-bar-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.top-bar .top-bar-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.top-bar .text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60px;
  padding-right: 10px;
  text-align: center;
}

.top-bar .text:last-child {
  border-right: 1px solid rgba(255, 255, 255, .15);
}

.top-bar .text h2 {
  color: #eeeeee;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  margin: 0;
}

.top-bar .text p {
  color: #eeeeee;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
}

.top-bar .social {
  display: flex;
  height: 60px;
  font-size: 0;
  justify-content: flex-end;
}

.top-bar .social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 100%;
  border-radius: 0px;
  font-size: 22px;
  border: none;
  background-color: transparent;
}

.top-bar .social a:hover {
  background-color: #da8a12;

}

.top-bar .social a:last-child {
  border-left: 1px solid rgba(255, 255, 255, .15);
}

.mobile-logo {
  filter: invert(66%) sepia(29%) saturate(5784%) hue-rotate(3deg) brightness(95%) contrast(86%);
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}

.all:hover .line {
  background-color: #da8a12;
}

.hamburger-menu {
  width: 18px;
  height: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 1px;
  background-color: #fff;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.line1.open {
  transform: rotate(45deg) translate(5px, 2px);
}

.line2.open {
  opacity: 0;
}

.line3.open {
  transform: rotate(-45deg) translate(5px, -2px);
}

/*  */

.mobile-nav {
  position: sticky;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 9222;
  background-color: #111;
  height: 70px;
}

div a {
  display: block;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
}

div a:hover {
  background-color: #da8a12;
}

div.list-unstyled {
  text-align: center;
}

.social a {
  display: inline;
  cursor: pointer;
  color: white !important;
  background-color: #444;
  padding: 10px 15px;
  border-radius: 100%;
  border: none;

}

div.social {
  text-align: center;
}

.logo {
  margin-top: 120px;
  width: 340px;
  -webkit-filter: invert(100%);
  filter: invert(100%);
}

.btn-toggle {
  position: absolute;
  top: 22px;
  right: 10px;
  color: #fff;
  font-weight: 400;
}

.btn-toggle:hover {
  background-color: #111;
  cursor: pointer;
}

.btn-toggle:hover i {
  color: #da8a12;
  cursor: pointer;
}

.btn-home {
  position: absolute;
  top: 22px;
  left: 10px;
  color: #fff;
  font-weight: 400;
}

.btn-home:hover {
  background-color: #111;
  cursor: pointer;
}

.btn-home:hover i {
  color: #da8a12;
  cursor: pointer;
}

#sidebar {
  width: 350px;
  position: fixed;
  height: 100%;
  z-index: 1000;
  left: 0;
  top: 0;
  background: #111;
  overflow-x: hidden;
  transition: all 0.3s;
}

#sidebar.active {
  left: -350px;
}

#content {
  flex: 1;
  transition: margin-left 0.3s;
}

@media (min-width: 992px) {
  #sidebar {
    left: -350px;
  }

  #sidebar.active {
    left: 0;
  }

  #content {
    margin-left: 350px;
  }

  .btn-home {
    display: block;
  }
}
</style>
