<template>
  <div class="mainContents">
    <div class="v_line_left">
      <div class="border"></div>
        <nuxt />
      <div class="border"></div>
    </div>
  </div>
</template>

<style>
html {
  background-color: rgb(98, 140, 186);
  display: block;
  font-family: 'Hiragino Kaku Gothic', 'ProN',sans-serif;
  word-spacing: 0;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.mainContents {
  background-color: rgb(243, 178, 172);
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
}

.mainContents dt {
  color: rgb(98, 140, 186);
}
</style>
