<template>
  <div>
    <Header/>
        <nuxt />
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

<style >
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
  margin-left: 0;
  margin-right: 0;
}

</style>
