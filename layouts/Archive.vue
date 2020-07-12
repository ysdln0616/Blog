<template>
  <div>
    <Header/>
    <div class=rightBar></div>
    <div class="blogMain">
      <div class="leftBar">
      <div class="blogBack">
        <nuxt />
      </div>
      </div>
      <div class="parentsOfUnderBar">
        <div class="underBar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'


export default {
  components: {
    Header
  }
}
</script>

<style scoped>
html {
  background-color: #ffffff;
  display: block;
  font-family: 'Hiragino Kaku Gothic', 'ProN',sans-serif;
  word-spacing: 0;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 0;
  margin-right: 0;
}

.blogMain{
  animation-name:blogMain;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  position: relative;
  margin-top:16px;
  margin-left:40px;
  margin-right:40px;
  border-top:solid 5px black;
  overflow: hidden;
}
@keyframes blogMain{
  0% {margin-left:calc(100%-42.5px); width: 0px; border-top:solid 5px #fff;}
  25% {margin-left:calc(100%-42.5px);width: 0px; border-top:solid 5px #fff;}
  26% {margin-left:calc(100%-42.5px);width: 0px; border-top:solid 5px #000;}
	50% {margin-left:40px;width:calc(100%-80px);border-top:solid 5px #000;}
	51% {margin-left:40px;width:calc(100%-80px);border-top:solid 5px #000;}
	100% {margin-left:40px;width:calc(100%-80px);border-top:solid 5px #000;}
}
.rightBar{
  animation-name:rightBar;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  position: relative;
  float: right;
  margin-right: 40px;
  border-right:solid 5px black;
  height: 10em;
  margin-top:16px;
}
@keyframes rightBar{
  0% {margin-top:calc(10em+16px); height: 0em;}
100% {margin-top:16px; height: 10em;}
}      

.leftBar{
  animation-name:leftBar;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  position: relative;
  border-left:solid 5px black;
  padding-top:2em;
  padding-bottom:2em;
}
@keyframes leftBar{
  0% {transform: translateY(-100%);}
  50% {transform: translateY(-100%);}
  51% {transform: translateY(-100%);}
	100% {transform: translateY(0);}
}      

.blogBack{
  animation-name:blogBack;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  position: relative;
  margin-left: 2em;
  margin-right: calc(2em);
  background-color: #98c7df;
  overflow: hidden;
}

@keyframes blogBack{
  0% {opacity: 0;}
  75% {opacity: 0;}
  76% {opacity: 0;}
  100% {opacity: 1;}
}


.parentsOfUnderBar{
  animation-name:underBar;
  animation-duration: 3s;
  animation-timing-function: ease-out;
  position: relative;
  width: 30%;
}
.underBar{
  border-top:solid 5px black;
}
@keyframes underBar{
  0% {opacity: 0; width: 0%;}
  66% {opacity: 0;width: 0%;}
  66.7% {opacity: 1;width: 0%;}
  100% {opacity: 1;width: 30%;}
}
</style>