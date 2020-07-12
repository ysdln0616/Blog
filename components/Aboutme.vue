<template>
  <div class="aboutme">
    <div>
      <div class="blogMain"> 
        
          <img class="aboutmePhoto" src="@/assets/photo/aboutme.jpeg"/>
          <img class="aboutmePhoto2" src="@/assets/photo/DSC03759_Original.jpeg"/>
          <div class="rightGreen">
            <div class="greenLine"></div>
        </div> 
      </div>
      <!-- <div class="photoby">
          photo by 
      </div> -->
      <div class="name">
           るなこ 
      </div>
    <dt>
      <p>東京理科大学の2年生。1年生の時から応用数学研究部のWeb班に所属している。</p>
      <p>2020年度の理大祭で"
        <a class="link" href="https://oskweb-trousse.firebaseapp.com">Trousse</a>
        "というサイトをWeb班で作ってみた。</p>
      <p>2020年度の理大祭ではTrousseをパワーアップしようと思っている。</p>
      <p>なおTrousseを使うにはGoogleアカウントが必要である。今はjs,Swiftを主にやっている。</p>
      <p>誕生日は2000/6/16</p>
    </dt>

    <div>
      <ul  style="list-style: none;">
        <li>
          <a class="link" href="https://twitter.com/ysdln0616sec">TWITTER</a>
        </li>
        <li>
          <a class="link" href="https://www.instagram.com/ysdln0616">INSTAGRAM</a>
        </li>
        <li>
          <a class="link" href="https://ja.foursquare.com/user/538658549">FOURSQUARE</a>
        </li>
        <li>
          <a class="link" href="https://github.com/ysdln0616">GITHUB</a>
        </li>
      </ul>
    </div>
</template>

<style scoped>
.aboutme{
  margin-top: 20px;
  text-align: center;
}

.link{
    list-style: none;
    color:black;
}

.aboutmePhoto{
  animation-name:aboutmePhoto;
  animation-duration: 20s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  /* animation-delay: 5s; */
  padding: 16px;
  width: 80%;
  height: auto;
  margin: 0;
  opacity: 1;
  /* position: absolute; */
}

@keyframes aboutmePhoto{
  0% {opacity: 1;}
  46.5% {opacity: 1;}
  46.6% {opacity: 0;}
  96.5% {opacity: 0;}
  96.6% {opacity: 1;}
  100% {opacity: 1;}
}

.aboutmePhoto2{
  animation-name:aboutmePhoto2;
  animation-duration: 20s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  /* animation-delay: 6s; */
  padding-top: 16px;
  width: 80%;
  height: auto;
  left: calc(10%);
  margin: 0;
  position: absolute;
  opacity: 0;
}
@keyframes aboutmePhoto2{
  0% {opacity: 0;}
  46.5% {opacity: 0;}
  46.6% {opacity: 1;}
  96.5% {opacity: 1;}
  96.6% {opacity: 0;}
  100% {opacity: 0;}
}

.photoby{
    font-size: 16px;
}

.name{
    font-size: 24px;
}

.blogMain{
  /* animation-name:blogMain;
  animation-duration: 2s;
  animation-timing-function: ease-out; */
  position: relative;
  margin-top:16px;
  /* margin-left:40px; */
  /* margin-right:40px; */
  border:solid 5px black;
  overflow: hidden;
  max-width: 400px;
  display: block;
  margin: 0 auto;
}
@keyframes blogMain{
  0% {margin-left:calc(100%-42.5px); width: 0px; border-top:solid 5px #fff;}
  25% {margin-left:calc(100%-42.5px);width: 0px; border-top:solid 5px #fff;}
  26% {margin-left:calc(100%-42.5px);width: 0px; border-top:solid 5px #000;}
	50% {margin-left:40px;width:calc(100%-80px);border-top:solid 5px #000;}
	51% {margin-left:40px;width:calc(100%-80px);border-top:solid 5px #000;}
	100% {margin-left:40px;width:calc(100%-80px);border-top:solid 5px #000;}
}

.rightGreen{
  animation-name:rightGreen;
  animation-duration: 10s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  /* animation-delay: 9s; */
  position: absolute;
  transform-origin:left bottom;
  top:calc(-330%);
  left:calc(-30%);
  height: 300%; width: 200%;
  background: #447f95;
}

@keyframes rightGreen{
  10% {transform: rotate(0deg)}
  90% {transform: rotate(0deg)}
  100% {transform: rotate(180deg)}
}

 .greenLine{
  animation-name:greenLine;
  animation-duration: 2s;
  animation-timing-function: ease-out;
}

@keyframes greenLine{
}

</style>