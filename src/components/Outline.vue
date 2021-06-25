<template>
  <section id="Outline" class="outlineSection">
    <div class="animCubes">
      <span class="animCube" v-for="animCube of 10" :key="animCube"></span>
    </div>
    <div class="sectionWrap">
      <h3 class="sectionTitle">OUTLINE</h3>
      <div class="outLineWrap">
        <div class="dateTimeWrap">
          <div class="dateTimeTitle">
            <h4>日時</h4>
          </div>
          <div class="date">
            <p>{{ date }}</p>
          </div>
          <div class="time">
            <p>{{ time }}</p>
          </div>
        </div>

        <div class="timeLineWrap">
          <div class="timeLineTitle">
            <h4>タイムテーブル</h4>
          </div>
          <div class="startTimeEventsWrap">
            <ul class="startTimeWrap">
              <li
                class="startTime"
                v-for="startTime in startTimes"
                :key="startTime.sTime"
              >
                <p>{{ startTime.sTime }}</p>
              </li>
            </ul>
            <ul class="eventsWrap">
              <li class="event" v-for="event of 6" :key="event">
                <p>第{{ event }}回</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="venueFormatWrap">
          <div class="venueWrap">
            <div class="venueTitle">
              <h4>会場</h4>
            </div>
            <div class="venue">
              <p>{{ venue }}</p>
            </div>
          </div>
          <div class="formatWrap">
            <div class="formatTitle">
              <h4>形式</h4>
            </div>
            <div class="format">
              <p>{{ format }}</p>
            </div>
          </div>
        </div>

        <div class="joinTitle">
          <h4>参加用URL</h4>
        </div>

        <div class="joinWrap">
          <div class="intWrap">
            <a class="intLink" :href="intLink" target="_blank" rel="noopener">
              <p>{{ intLinkText }}</p>
            </a>
          </div>
          <div class="extWrap">
            <a class="extLink" :href="extLink" target="_blank" rel="noopener">
              <p>{{ extLinkText }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      date: "2021 / 07 / 10",
      time: "13:00 ~ 16:00",
      venue: "GoogleMeetによるオンライン開催",
      format: "スライドおよび前期成果物を⽤いた口頭発表",
      startTimes: [
        { sTime: "13:00~" },
        { sTime: "13:30~" },
        { sTime: "14:00~" },
        { sTime: "14:30~" },
        { sTime: "15:00~" },
        { sTime: "15:30~" },
      ],
      intLink: "https://classroom.google.com/c/MzMwOTU1MTkwNDEw",
      intLinkText: "GoogleClassroomはこちら",
      extLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdyB8h6L5Kyr8VdAr0wW4UNzGPS0WYbItZ-6U2hnRlz-Sjvfw/viewform",
      extLinkText: "プロジェクト中間発表会に参加希望の関係者の方はこちら",
    };
  },
};
</script>

<style scoped>
.outlineSection {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--bg-green);
  overflow: hidden;
}

.outLineWrap {
  padding: 40px 0 120px 0;
}

.dateTimeWrap,
.venueWrap,
.formatWrap {
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 0.5fr minmax(50px, 1fr);
  box-shadow: 0px 1px 3px 0px var(--shadow-black);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
  text-align: center;
  overflow: hidden;
}

.dateTimeWrap {
  line-height: 52px;
}

.dateTimeWrap p {
  margin: 12px 0;
}

.venueFormatWrap {
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 6rem 0;
  overflow: hidden;
}

.venueFormatWrap p {
  margin: 0;
  padding: 20px;
}

.venueWrap,
.formatWrap {
  width: 48%;
  grid-template-columns: 1fr;
  border-radius: 6px;
}

.venueTitle,
.formatTitle,
.timeLineTitle {
  max-height: 50px;
  border-radius: 6px 6px 0 0;
  text-align: center;
  background-color: var(--menu-green);
}

.joinTitle {
  text-align: center;
  margin: 30px 0;
}

h3,
h4 {
  color: var(--text-white);
}

h4 {
  font-size: 1.6rem;
  margin: 10px;
  line-height: 30px;
  text-shadow: 0px 1px 1px var(--alpha-white);
}

p {
  font-weight: 600;
  color: var(--text-green);
  text-shadow: 0px 1px 1px var(--dot-black);
  margin: 10px 0;
}

ul,
li {
  list-style: none;
  font-size: 0;
}

.dateTimeTitle {
  background-color: var(--menu-green);
  grid-column: 1 / 3;
  border-radius: 6px 6px 0 0;
}

.date,
.time,
.venue,
.format {
  background-color: var(--bg-white);
  border-radius: 0 0 6px 6px;
}

.date {
  grid-row: 2;
  grid-column: 1;
  border-radius: 0 0 0 6px;
}

.time {
  grid-row: 2;
  grid-column: 2;
  border-radius: 0 0 6px 0;
}

.date p {
  border-right: solid 2px;
  border-radius: 1px;
}

.time p {
  border-left: solid 2px;
  border-radius: 1px;
}

.venue,
.format {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  height: 100px;
}

.timeLineWrap {
  position: relative;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  background-color: var(--bg-white);
  box-shadow: 0px 1px 3px 0px var(--shadow-black);
  margin: 3rem 0 0 0;
  border-radius: 6px;
  overflow: hidden;
}

.startTimeEventsWrap {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  padding-bottom: 20px;
}

.startTimeWrap,
.eventsWrap {
  display: grid;
  grid-template-columns: repeat(6, minmax(90px, 1fr));
  padding: 0 20px 0 20px;
}

.startTimeWrap {
  margin: 40px 0 0 0;
}

.eventsWrap {
  height: 50px;
  line-height: 30px;
  margin: 0 0 20px 0;
}

.startTime,
.event {
  font-size: 1rem;
  border-left: dotted 2px var(--menu-green);
}

.startTime::before {
  content: "";
  position: absolute;
  display: inline-block;
  margin: -0.1rem 0 0 -0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--menu-green);
}

.event {
  text-align: center;
  background-color: rgba(89, 160, 147, 0.5);
}

.event:nth-child(2) {
  background-color: rgba(89, 160, 147, 0.6);
}

.event:nth-child(3) {
  background-color: rgba(89, 160, 147, 0.7);
}

.event:nth-child(4) {
  background-color: rgba(89, 160, 147, 0.8);
}

.event:nth-child(5) {
  background-color: rgba(89, 160, 147, 0.9);
}

.event:nth-child(6) {
  background-color: rgba(89, 160, 147, 1);
}

.startTime p {
  padding: 0 0 0 0.8rem;
  letter-spacing: 0.08rem;
  color: var(--text-green);
}

.event p {
  font-family: "Noto Sans JP", "Helvetica Neue", "Helvetica", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;
  color: var(--text-black);
}

.joinWrap {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
}

.intWrap,
.extWrap {
  width: 100%;
  height: 100%;
  background-color: var(--menu-green);
  border: solid 2px var(--text-white);
  border-radius: 6px;
  box-shadow: 0px 1px 3px 0px var(--shadow-black);
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}

.intWrap {
  margin: 0 0 30px 0;
  border-radius: 0 6px 6px 6px;
}

.intWrap::before {
  content: "専修大学生限定！";
  position: absolute;
  top: -1rem;
  left: 0;
  height: 24px;
  padding: 0.2rem 1.4rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px 6px 6px 0;
  border: solid 2px var(--text-white);
  color: var(--menu-green);
  background-color: var(--text-white);
  transition: all 0.3s ease-in-out;
  backface-visibility: hidden;
  font-family: "Noto Sans JP", "Helvetica Neue", "Helvetica", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;
}

.intWrap:hover,
.extWrap:hover {
  background-color: var(--text-white);
  border: solid 2px var(--menu-green);
}

.intWrap:hover p,
.extWrap:hover p {
  color: var(--menu-green);
  transform: scale(1.1);
}

.intWrap:hover::before {
  background-color: var(--menu-green);
  border: solid 2px var(--menu-green);
  color: var(--text-white);
}

.intLink,
.extLink {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.intLink p,
.extLink p {
  margin: 0;
  color: var(--text-white);
  padding: 1.4rem;
  font-size: 1.2rem;
}

.animCubes {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  bottom: 0;
}

.animCube {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(250, 250, 250, 0.2);
  animation: cube 30s linear infinite;
  bottom: -150px;
}

.animCube:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.animCube:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.animCube:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.animCube:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.animCube:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.animCube:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.animCube:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.animCube:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.animCube:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.animCube:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes cube {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.6;
    border-radius: 10%;
  }

  100% {
    transform: translateY(-80rem) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

@media screen and (max-width: 959px) {
  .dateTimeWrap,
  .venueWrap,
  .formatWrap {
    font-size: 1.4rem;
  }
}

@media screen and (max-width: 690px) {
  .startTimeEventsWrap {
    display: grid;
    grid-template-columns: minmax(80px, 1fr) 3fr;
    grid-template-rows: 1fr;
    padding: 20px 10px;
  }

  .startTimeWrap,
  .eventsWrap {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    padding: 20px;
  }

  .startTimeWrap {
    margin: 0;
  }

  .startTime,
  .event {
    font-size: 0.9rem;
    line-height: 60px;
  }

  .event {
    border-left: 0;
  }

  .startTime::before {
    margin: 0 0 0 -0.3rem;
  }

  .venueFormatWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 40px 0;
  }

  .venueWrap,
  .formatWrap {
    width: 100%;
    margin: 20px 0;
  }
}

@media screen and (max-width: 415px) {
  .dateTimeWrap {
    grid-template-rows: 0.5fr minmax(1fr, 50px) minmax(1fr, 50px);
    grid-template-columns: 1fr;
    font-size: 1.4rem;
  }

  .date {
    grid-row: 2;
    grid-column: 1;
    border-radius: 0;
  }

  .time {
    grid-row: 3;
    grid-column: 1;
    border-radius: 0 0 6px 6px;
  }

  .date p {
    margin: 0 10px;
    padding: 10px 0;
    border: 0;
    border-bottom: solid 2px;
    border-radius: 0;
  }

  .time p {
    margin: 0 10px;
    padding: 10px 0;
    border: 0;
    border-top: solid 2px;
    border-radius: 0;
  }

  .startTime p {
    padding-left: 6px;
  }

  .startTimeWrap,
  .eventsWrap {
    padding: 4px;
  }

  .joinTitle {
    margin: 30px 0 60px 0;
  }
}
</style>