<template>
  <transition name="loadingFade">
    <div class="loadingAnim" v-if="loading"></div>
  </transition>
  <Top />
  <mq-layout :mq="['xl', 'lg']">
    <Menu />
  </mq-layout>
  <mq-layout :mq="['md', 'sm', 'xs']">
    <Hamburger />
  </mq-layout>
  <About />
  <Outline />
  <Projects />
  <Footer />
</template>

<script>
import Top from "./components/Top.vue";
import Menu from "./components/Menu.vue";
import Hamburger from "./components/Hamburger.vue";
import About from "./components/About.vue";
import Outline from "./components/Outline.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 300);
  },
  components: {
    Top,
    Menu,
    Hamburger,
    About,
    Outline,
    Projects,
    Footer,
  },
};
</script>

<style>
.loadingAnim {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  top: 0;
  left: 0;
  background-color: var(--bg-black);
  z-index: 9999 !important;
}

.loadingFade-enter-active,
.loadingFade-leave-active {
  transition: opacity 0.8s;
}
.loadingFade-enter,
.loadingFade-leave-to {
  opacity: 0;
}
</style>

