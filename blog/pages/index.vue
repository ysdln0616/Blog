<template>
  <div class="tableOfContnts">
    <div class="mainContents">
      <div class="v_line_left">
        <div class="border"></div>
        <div class="title">
          TABLE OF CONTENTS
        </div>

        <ul class="links">
          <li>
            <p>
              <nuxt-link class="moveLink" to="/profile">PROFILE</nuxt-link>
            </p>
          </li>
          <!-- <li>
            <p>
              <nuxt-link class="moveLink" to="/mBlog" >BLOG</nuxt-link>
            </p>
          </li> -->
        </ul>

        <div class="border"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TABLE"
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

.moveLink {
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
  background: linear-gradient(#f3b2ac, #ea7775);
  text-decoration-color: rgb(98, 140, 186);
}

</style>
