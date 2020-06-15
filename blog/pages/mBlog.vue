<template>
  <div class="tableOfContnts">
    <div class="mainContents">
      <div class="v_line_left">
        <div class="border"></div>
        <div class="title">
          TABLE OF CONTENTS
        </div>

        <div class = "SNSLink">

        <ul>
          <li>
            <div>
              <nuxt-link to="/profile">PROFILE</nuxt-link>
            </div>
          </li>
          <li>
            <p>
              <nuxt-link to="/mBlog" >BLOG</nuxt-link>
            </p>
          </li>
        </ul>

        <div class="border"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "mBlog"
}

import '@/assets/css/profile.css'
</script>

<style>

body {
  background-color: rgb(98, 140, 186);
}

.mainContents {
  background-color: rgb(243, 178, 172);
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
}

.tablelink {
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
  background: linear-gradient(#f3b2ac, #ea7775);
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


</style>
