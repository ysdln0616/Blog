<template>
  <div>
    <div class="title">
      BLOG
    </div>
    <ul>
      <li>
        <p>
          <nuxt-link class="perLink" to="/June20">2020年6月</nuxt-link>
        </p>
      </li>
      <!-- <li>
        <p>
          <nuxt-link class="perLink" to="/blog/202005">2020年5月</nuxt-link>
        </p>
      </li>
      <li>
        <p>
          <nuxt-link class="perLink" to="/blog/202004">2020年4月</nuxt-link>
        </p>
      </li>
      <li>
        <p>
          <nuxt-link class="perLink" to="/blog/202003">2020年3月</nuxt-link>
        </p>
      </li>
      <li>
        <p>
          <nuxt-link class="perLink" to="/blog/201906">2019年6月</nuxt-link>
        </p>
      </li>
      <li>
        <p>
          <nuxt-link class="perLink" to="/blog/201906">2019年5月</nuxt-link>
        </p>
      </li> -->
    </ul>

    <div>
      <p class="back">
        <nuxt-link class="perLink" to="/">←TABLE OF CONTENTS</nuxt-link>
      </p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "mBlog",
  layout: 'default'
}
import '@/assets/css/profile.css'
</script>

