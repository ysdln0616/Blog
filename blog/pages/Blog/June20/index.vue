<template>
  <div>
    <div class = "title">
      2020年6月
    </div>
    <ul class="links">
      <li v-for="info in blogs" :key="info">
        <p>
            <nuxt-link  class="perLink"
             :to= "{path:`/Blog/June20/${info.id}`}"
             >{{ info.title }}</nuxt-link>
            <a class="mDate">{{ info.date }}</a>
        </p>
      </li>
    </ul>

    <div>
      <p class="back">
        <nuxt-link class="perLink" to="/mBlog">←BLOG</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "June20",
  layout: 'default',
  computed: {
    blogs:function(){
      return this.$store.getters['blogsData']
    },
  }
}

import '@/assets/css/profile.css'
</script>