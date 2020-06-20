<template>
  <div>
    <div class="title">
      BLOG
    </div>

    <ul class="links">
      <li v-for="info in monthes" :key="info">
        <p>
          <nuxt-link  class="perLink" :to= "{path:`/Blog/${info.to}`}">
          {{ info.title }}</nuxt-link>
        </p>
      </li>
    </ul>

    <div>
      <p class="back">
        <a>
        <nuxt-link class="perLink" to="/">←TABLE OF CONTENTS</nuxt-link>
        </a>
      </p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "BLOG",
  layout: 'default',
  computed: {
    monthes:function(){
        return this.$store.getters['monthes']
    }
  }
}
import '@/assets/css/profile.css'
</script>

