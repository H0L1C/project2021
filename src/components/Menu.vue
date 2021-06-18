<template>
  <nav class="menu">
    <ul>
      <li
        class="topLink"
        v-scroll-to="{
          el: '#Top',
          offset: -60,
        }"
      >
        TOP
      </li>

      <li
        class="aboutLink"
        v-scroll-to="{
          el: '#About',
          offset: -60,
        }"
      >
        ABOUT
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  width: 60%;
  height: 10vh;
  background-color: var(--bg-green);
}

li {
  list-style: none;
  line-height: 1.5;
  margin: 1px 0;
  padding: 0.4em 0;
  cursor: pointer;
}

h2 {
  color: var(--text-white);
  text-align: center;
}
</style>