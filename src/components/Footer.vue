<template>
  <div class="footerSection">
    <div class="webWrap">
      <div class="webLinkWrap">
        <a
          class="webLink senshu"
          :href="senshuWebLink"
          target="_blank"
          rel="noopener"
        >
          <p class="linkText">{{ senshuWebText }}</p>
          <p class="webText">{{ WebText }}</p>
        </a>
      </div>
      <div class="webLinkWrap">
        <a
          class="webLink net"
          :href="netWebLink"
          target="_blank"
          rel="noopener"
        >
          <p class="linkText">{{ netWebText }}</p>
          <p class="webText">{{ WebText }}</p>
        </a>
      </div>
      <p class="copyright">{{ copyrightText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      senshuWebLink: "https://www.senshu-u.ac.jp/",
      senshuWebText: "専修大学",
      netWebLink: "http://ni.ne.senshu-u.ac.jp/",
      netWebText: "ネットワーク情報学部",
      WebText: "公式サイト",
      copyrightText:
        "© 2021 School of Network and Information, Senshu University, ALL Rights Reserved.",
    };
  },
};
</script>

<style scoped>
.footerSection {
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: var(--menu-green);
  overflow: hidden;
}

.webWrap {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  width: 100%;
  height: 100%;
}

.webLinkWrap {
  width: 80%;
  height: 60px;
  text-align: center;
  background-color: var(--bg-white);
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px var(--shadow-black);
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}

.webLinkWrap:nth-child(1) {
  margin: 80px 0 0 0;
}

.webLinkWrap:nth-child(2) {
  margin: 20px 0 20px 0;
}

.webLink {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
}

.webLink p {
  color: var(--menu-green);
}

.senshu:hover,
.net:hover {
  opacity: 0.7;
}

.linkText {
  font-size: 1.2rem;
  font-weight: bold;
}

.webText {
  font-size: 0.8rem;
  font-weight: normal;
}

.copyright {
  margin: 40px;
  text-align: center;
  font-size: 0.8rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: var(--text-white);
}
</style>