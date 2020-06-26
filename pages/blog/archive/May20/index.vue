<template>
  <div>
     <div class = "title">
      BLOG <nuxt-link  :to= "{path:`/blog/entrylist`}" class = "menu">新着</nuxt-link><nuxt-link :to= "{path:`/blog/archive`}" class = "nowMenu">月別</nuxt-link>
    </div>

    <ul class="links">
      <li v-for="info in monthes" :key="info">
            <p>
                <nuxt-link  class="perLink" :to= "{path:`/blog/archive/${info.to}`}" >{{ info.title }}({{info.blogCount}})</nuxt-link>
            </p>
      </li>
    </ul>

    <ul  class="links">
      <div class="new">2020年5月</div>
      <li v-for="info in blogs" :key="info">
        <div class="border"></div>
        <p>
          <nuxt-link   class="perLink"
           :to= "{path:`/blog/archive/${info.month}/${info.id}`}"
           >{{ info.title }}</nuxt-link>
          <a class="mDate">{{ info.date }}</a>
        </p>
      </li>
      <div class="border"></div>
      <div class="Bar">
        <nuxt-link v-if="bePre" class="preBar" :to= "{path:`/blog/archive/${preMonth.to}`}">←{{preMonth.title}}</nuxt-link>
        <nuxt-link v-if="beNext" class="nextBar" :to= "{path:`/blog/archive/${nextMonth.to}`}">{{nextMonth.title}}→</nuxt-link>
      </div>
      
    </ul>

    <div>
      <p class="back">
        <nuxt-link  class="perLink" to="/">←TABLE OF CONTENTS</nuxt-link>
      </p>
    </div>
  </div>

</template>

<script>

export default {
  name: "May20",
  layout: 'default',
  computed: {
    blogs:function(){
      var month=[];
      for(var i=0;i<this.$store.getters['blogsData'].length;i++){
        if(this.$store.getters['blogsData'][i].month == "May20"){
          month.push(this.$store.getters['blogsData'][i])
        }
      }
      month.sort(function(a,b){
        if( a.id > b.id ) return -1;
        if( a.id < b.id ) return 1;
        return 0;
      });
      return month
    },
    monthes:function(){
      var blog = []
      for(var i=0;i<this.$store.getters['monthes'].length;i++){
        var blogCount=0;
        for(var j=0;j<this.$store.getters['blogsData'].length;j++){
          if(this.$store.getters['blogsData'][j].month ==this.$store.getters['monthes'][i].to){
            blogCount+=1;
          }
        }
        blog.push(
          {
            to:this.$store.getters['monthes'][i].to,
            title:this.$store.getters['monthes'][i].title,
            blogCount:blogCount
          }
        )
      }
      return blog
    }
  }
}

import '@/assets/css/profile.css'
</script>