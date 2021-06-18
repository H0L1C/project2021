<template>
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
</style>
