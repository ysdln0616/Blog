<template>
    <div>
      <div class="title">
        PROFILE
      </div>
      <dt>
          <p>
            るな子
          </p>
          <p>
            東京理科大学の2年生。一年生の時から応用数学研究部のWeb班に所属している。2019年度の理大祭で"
            <a class="perLink" href="https://oskweb-trousse.firebaseapp.com"
              >Trousse</a
            >"というサイトをWeb班で作ってみた。2020年度の理大祭ではTrousseをパワーアップしようと思っている。
            なおTrousseを使うにはGoogleアカウントが必要である。今はjs,Swiftを主にやっている。
          </p>
          <p>誕生日は2000/6/16</p>
        </dt>

        <div class="SNSLink">
          <ul>
            <li>
              <a class="perLink" href="https://twitter.com/ysdln0616sec">TWITTER</a>
            </li>
            <li>
              <a class="perLink" href="https://www.instagram.com/ysdln0616">INSTAGRAM</a>
            </li>
            <li>
              <a class="perLink" href="https://ja.foursquare.com/user/538658549">FOURSQUARE</a>
            </li>
            <li>
              <a class="perLink" href="https://github.com/ysdln0616">GITHUB</a>
            </li>
          </ul>
        </div>
        <div>
          <p class="back">
              <nuxt-link class="perLink" to="/">←TABLE OF CONTENTS</nuxt-link>
          </p>
      </div>
</template>

<script>

export default {
    name: "profile"
}
import '@/assets/css/profile.css'
</script>
