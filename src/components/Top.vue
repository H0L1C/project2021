<template>
  <section id="Top" class="topSection">
    <div class="animLines">
      <span class="animLine" v-for="animLine of 3" :key="animLine"></span>
    </div>
    <div class="sectionWrap">
      <div class="titlesWrap">
        <h1 v-for="topTitle of 2" :key="topTitle">{{ mainTitle }}</h1>
        <h2>{{ subTitle }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mainTitle: "PROJECT\nONLINE\nEXHIBITION\n2021",
      subTitle: "専修大学ネットワーク情報学部\nプロジェクト最終発表会",
    };
  },
};
</script>

<style scoped>
ul,
li {
  list-style: none;
}

.topSection {
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-black);
}

.titlesWrap {
  position: relative;
  width: 100%;
  height: 100%;
}

h1,
h2 {
  position: absolute;
  left: 0;
  font-size: 3rem;
  line-height: 1;
  color: var(--text-white);
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-shadow: 0px 1px 3px var(--shadow-black);
}

h1 {
  -webkit-clip-path: polygon(0 0, 100% 0, 0 100%);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  z-index: 9801;
  bottom: 20%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

h1:nth-child(2) {
  -webkit-clip-path: polygon(99% 0, 0 99%, 99% 99%);
  clip-path: polygon(99% 0, 0 99%, 99% 99%);
  color: var(--text-green);
  z-index: 9800;
}

h2 {
  font-size: 1rem;
  line-height: 1.3;
  bottom: 12%;
}

.animLines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
  opacity: 0.7;
}

.animLine {
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.animLine::after {
  content: "";
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 75%,
    #ffffff 100%
  );
  -webkit-animation: drop 7s 0s infinite;
  animation: drop 7s 0s infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

.animLine:nth-child(1) {
  left: 10%;
}

.animLine:nth-child(1)::after {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.animLine:nth-child(3) {
  left: 90%;
}

.animLine:nth-child(3)::after {
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
}

@-webkit-keyframes drop {
  0% {
    top: -50%;
  }
  100% {
    top: 1100%;
  }
}

@keyframes drop {
  0% {
    top: -50%;
  }
  100% {
    top: 1100%;
  }
}

@media screen and (max-width: 959px) {
}

@media screen and (max-width: 690px) {
}

@media screen and (max-width: 415px) {
  .titlesWrap h1 {
    font-size: 2.8em !important;
  }
  .animLine:nth-child(1) {
    left: 1%;
  }
  .animLine:nth-child(3) {
    left: 99%;
  }
}
</style>