<template>
  <div>
    <div class = "title">
      {{ topTitle }}
    </div>
    <ul class="links">
      <li v-for="info in blogs" :key="info">
        <p>
          <!-- <a class="mDate">{{ info.date }}</a> -->
          <div>
            <nuxt-link  class="perLink" :to= "{path:`/Blog/June20/${info.id}`,query:{title:`${info.title}`,date:`${info.date}`,id:`${info.id}`}}">{{ info.title }}</nuxt-link>
          </div>
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
  data() {
    return{
      blogs:[
         {
          title: "私の人生 enjoy!",
          date:'2020-06-19',
          id:'19'
        },
        {
          title: "swift　テトリスもどき　その...?",
          date:'2020-06-06',
          id:'06'
        },
        {
          title: "Nuxt",
          date:'2020-06-14',
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