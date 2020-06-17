<template>
  <div>
    <div class = "title">
      {{ topTitle }}
    </div>
    <ul class="links">
      <li v-for="info in blogs" :key="info">
          <a class="mDate">{{ info.date }}</a>
          <nuxt-link  class="perLink" :to= "{path:`/Blog/June20/${info.id}`,query:{title:`${info.title}`,date:`${info.date}`,id:`${info.id}`}}">{{ info.title }}</nuxt-link>
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
  data() {
    return{
      blogs:[
        {
          title: "swift　テトリスもどき　その...?",
          date:'20200606',
          id:'06'
        },
        {
          title: "Nuxt",
          date:'20200614',
          id:'14'
        }
      ],
      topTitle: '2020年6月',
      date: '',
    }
  },
  mounted(){
    this.giveBlogs()
  },
  methods:{
    giveBlogs(){
      this.$nuxt.$emit('giveBlogs',this.blogs),
      console.log(this.blogs)
    }
  }
}

import '@/assets/css/profile.css'
</script>