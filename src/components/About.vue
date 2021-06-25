<template>
  <section id="About" class="aboutSection">
    <div class="animWaves">
      <span class="animWave" v-for="animWave of 3" :key="animWave"></span>
    </div>
    <div class="diamonds">
      <span class="diamond" v-for="diamnod of 3" :key="diamnod"></span>
    </div>
    <div class="sectionWrap">
      <h3 class="sectionTitle">ABOUT</h3>
      <div class="sectionTextWrap">
        <p v-for="aboutText in aboutTexts" :key="aboutText.text">
          {{ aboutText.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      aboutTexts: [
        {
          text: "3年次の必修科目「プロジェクト」は専修大学ネットワーク情報学部のカリキュラムの中心に据えられているグループワーク型の演習科目です。 教員や学生が立案した研究テーマごとにチームを組み、1年間かけて共同で研究や開発を行い、その成果を発表します。 ",
        },
        {
          text: "プロジェクトには具体的な学修内容や学修方法がなく、学生と担当教員がディスカッションを重ね、自分たちでそれらを創り上げていくことが最大の特徴と言えます。",
        },
        {
          text: "これらの活動を通じて技術や知識を培うだけでなく、仲間や教員と意思疎通をするためのコミュニケーション能力や、自らの考えを人に伝えるためのプレゼンテーション能力も伸ばすことができます。 また、これがプロジェクトの重要な学修目標でもあります。",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  font-size: 0;
}

.aboutSection {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 70vh;
  overflow: hidden;
  background-image: radial-gradient(var(--dot-black) 1px, transparent 1px),
    radial-gradient(var(--bg-white) 0px, var(--text-white) 1px);
  background-size: 20px 20px;
}

.sectionTextWrap {
  position: relative;
  margin-bottom: 16rem;
  padding: 20px;
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: var(--alpha-white);
  box-shadow: 0px 1px 2px 0px var(--dot-black);
  border-radius: 20px;
  z-index: 9801;
}

.sectionTextWrap p {
  font-family: "Noto Sans JP", "Helvetica Neue", "Helvetica", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;
  color: var(--text-black);
  letter-spacing: 1;
  line-height: 1.75;
}

h3 {
  color: var(--text-green);
}

p {
  margin: 16px 0;
}

.animWaves {
  position: absolute;
  bottom: 0;
  left: 40rem;
  width: 500px;
  height: 500px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transform: translate3d(0, 0, 0) scale(6, 1);
}

.animWave {
  position: absolute;
  top: 27rem;
  right: 0;
  background-color: var(--bg-green);
  width: 500px;
  height: 500px;
  transform-origin: 50% 50%;
  border-radius: 42%;
  -webkit-animation: wave 20s infinite linear;
  animation: wave 20s infinite linear;
  opacity: 0.4;
}

.animWave:nth-child(2) {
  -webkit-animation: wave 26s infinite linear;
  animation: wave 26s infinite linear;
  opacity: 0.1;
  background-color: var(--text-white);
}

.animWave:nth-child(3) {
  -webkit-animation: wave 18s 10s infinite linear;
  animation: wave 18s 10s infinite linear;
  opacity: 1;
}

.diamonds {
  position: absolute;
  top: 5rem;
  left: -16rem;
  width: 500px;
  height: 500px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transform: scale(2, 2);
  z-index: 9800;
}

.diamond {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%) rotate(45deg);
  background-color: var(--bg-green);
  box-sizing: border-box;
  border-radius: 10%;
  opacity: 0.4;
}

.diamond:nth-child(2) {
  top: 30%;
  left: 50%;
  opacity: 0.8;
}

.diamond:nth-child(3) {
  top: 40%;
  left: 60%;
  opacity: 0.6;
}

@-webkit-keyframes wave {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}

@keyframes wave {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 959px) {
}

@media screen and (max-width: 690px) {
}

@media screen and (max-width: 415px) {
  .sectionTextWrap {
    margin-bottom: 10rem;
  }
}
</style>

