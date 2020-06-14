<template>
  <div class="profile">
    <div class="mainContents">
      <div class="v_line_left">
        <div class="border"></div>
        <h2 class="title">
          PROFILE
        </h2>
        <dt>
          <p>
            るな子
          </p>
          <p>
            東京理科大学の2年生。一年生の時から応用数学研究部のWeb班に所属している。2019年度の理大祭で"
            <a class="introLink" href="https://oskweb-trousse.firebaseapp.com"
              >Trousse</a
            >"というサイトをWeb班で作ってみた。2020年度の理大祭ではTrousseをパワーアップしようと思っている。
            なおTrousseを使うにはGoogleアカウントが必要である。今はjs,Swiftを主にやっている。
          </p>
          <p>誕生日は2000/6/16</p>
        </dt>

        <div class="SNSLink">
          <ul>
            <li>
              <a href="https://twitter.com/ysdln0616sec">TWITTER</a>
            </li>
            <li>
              <a href="https://www.instagram.com/ysdln0616">INSTAGRAM</a>
            </li>
            <li>
              <a href="https://ja.foursquare.com/user/538658549">FOURSQUARE</a>
            </li>
            <li>
              <a href="https://github.com/ysdln0616">GITHUB</a>
            </li>
          </ul>
        </div>
        <div>
          <p>
              <nuxt-link class="backPrePage" to="/">TABLE OF CONTENTS</nuxt-link>
          </p>
        </div>
        <div class="border"></div>
      </div>
    </div>
</template>

<script>

export default {
    name: "profile"
}
import '@/assets/css/profile.css'
</script>

<style>
body {
  background-color: rgb(98, 140, 186);
}
.mainContents {
  
  background-color: rgb(243, 178, 172);
}

.mainContents dt {
  color: rgb(98, 140, 186);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
}
.introLink {
  color: rgb(98, 140, 186);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
  background: linear-gradient(rgb(243, 178, 172), #ea7775);
  text-decoration-color: rgb(98, 140, 186);
}
.SNSLink {
  background-color: rgb(234, 154, 147);
}
.SNSLink a {
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
  background: linear-gradient(rgb(234, 154, 147), #ea7775);
  text-decoration-color: rgb(98, 140, 186);
}

.backPrePage {
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
  background: linear-gradient(#f3b2ac, #ea7775);
  text-decoration-color: rgb(98, 140, 186);
}

.tablelink {
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
  background: linear-gradient(#f3b2ac, #ea7775);
  text-decoration-color: rgb(98, 140, 186);
}

.title {
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
}
</style>
