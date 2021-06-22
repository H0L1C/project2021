<template>
  <transition name="menu">
    <nav class="menu" :class="{ menuAnim: menuActive }">
      <div
        class="menuIconWrap"
        @click="menuActive = !menuActive"
        :class="{ active: !menuActive }"
      >
        <span class="menuIcon"></span>
        <span class="menuIcon"></span>
        <span class="menuIcon"></span>
      </div>
      <ul v-show="!menuActive" :class="{ menuOpen: !menuActive }">
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
  </transition>
</template>

<script>
export default {
  data() {
    return {
      menuActive: true,
    };
  },
};
</script>

<style scoped>
.menu {
  position: fixed;
  display: inline-block;
  width: 340px;
  height: 30px;
  border-radius: 30px;
  color: var(--text-white);
  background-color: var(--menu-green);
  box-shadow: 0px 1px 3px 0px var(--shadow-black);
  top: 30px;
  right: 20px;
  padding: 0.5em 1.5em 0.5em 1.5em;
  z-index: 9997;
  user-select: none;
  cursor: pointer;
  transition: width 0.4s ease, border-radius 0.2s ease-out;
}

.menuIconWrap {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  margin: 0 auto 0 0;
  padding: 0.5em;
  z-index: 9899;
}

.menuIcon {
  display: block;
  width: 24px;
  height: 1px;
  margin: 3px 0;
  padding: 2px 0;
  background: var(--text-white);
  border-radius: 5px;
  transition: all 0.4s ease;
}

.menuIconWrap.active .menuIcon:nth-of-type(1) {
  width: 26px;
  padding: 2px 0;
  transform: translateY(10px) rotate(45deg);
}
.menuIconWrap.active .menuIcon:nth-of-type(2) {
  opacity: 0;
}
.menuIconWrap.active .menuIcon:nth-of-type(3) {
  width: 26px;
  padding: 2px 0;
  transform: translateY(-10px) rotate(-45deg);
}

.menuOpen {
  margin: 0 30px 0 0;
}

.menuCloseWrap {
  margin: 0 4px 0 0;
}

.menuAnim {
  width: 30px;
  border-radius: 10%;
  right: 20px;
  padding: 0.5em;
}

.menu-enter-active,
.menu-leave-active {
  will-change: opacity;
  transition: all 0.5s ease;
  opacity: 0;
}

.menu-enter,
.menu-leave-to {
  opacity: 1;
}

@media screen and (max-width: 415px) {
  .menu {
    width: 120px;
    height: 200px;
  }

  .menuAnim {
    width: 30px;
    height: 30px;
    border-radius: 10%;
    right: 20px;
    padding: 0.5em;
  }

  .menuIconWrap {
    padding: 0;
    top: 0.5em;
    right: 0.5em;
  }

  .menuOpen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    top: 0;
    height: 100%;
  }

  .menuOpen li {
    margin: 6px 0;
  }
}
</style>