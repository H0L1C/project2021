<template>
  <nav class="menu">
    <ul>
      <li
        class="topLink"
        v-scroll-to="{
          el: '#Top',
        }"
      >
        TOP
      </li>

      <li
        class="aboutLink"
        v-scroll-to="{
          el: '#About',
        }"
      >
        ABOUT
      </li>

      <li
        class="outlineLink"
        v-scroll-to="{
          el: '#Outline',
        }"
      >
        OUTLINE
      </li>

      <li
        class="contentsLink"
        v-scroll-to="{
          el: '#Contents',
        }"
      >
        PROJECT
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  position: fixed;
  display: inline-block;
  width: auto;
  height: 30px;
  border-radius: 30px;
  background-color: var(--menu-green);
  box-shadow: 0px 1px 3px 0px var(--shadow-black);
  top: 30px;
  right: 60px;
  padding: 0.5em 1.5em 0.5em 1.5em;
  z-index: 9997;
  user-select: none;
}
ul {
  position: relative;
  height: 30px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}

li {
  position: relative;
  display: inline-block;
  top: 0;
  list-style: none;
  line-height: 30px;
  margin: 0 10px;
  padding: 0;
  cursor: pointer;
  font-family: "Montserrat";
  font-weight: 600;
  color: var(--text-white);
  transition: all 0.3s ease-in-out;
}

.topLink:hover,
.aboutLink:hover,
.outlineLink:hover,
.contentsLink:hover {
  transform: translate(0, -2px);
}

.topLink::after,
.aboutLink::after,
.outlineLink::after,
.contentsLink::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--bg-white);
  transform: scale(0, 1);
  transform-origin: center top;
  transition: all 0.3s ease;
}

.topLink:hover::after,
.aboutLink:hover::after,
.outlineLink:hover::after,
.contentsLink:hover::after {
  transform: scale(1, 1);
}

h2 {
  color: var(--text-white);
  text-align: center;
}
</style>