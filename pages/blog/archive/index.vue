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
      <div class="new">{{monthes[0].title}}</div>
      <li v-for="info in blogs" :key="info">
        <div v-if="info.month==monthes[0].to">
        <div class="border"></div>
        <p>
            <a  v-if="info==blogs[0]" class="new">new</a>
            <nuxt-link   class="perLink"
             :to= "{path:`/blog/archive/${info.month}/${info.id}`}"
             >{{ info.title }}</nuxt-link>
            <a class="mDate">{{ info.date }}</a>
        </p>
        </div>
      </li>
      <div class="border"></div>
      
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
  name: "BLOG",
  layout: 'default',
  computed: {
    blogs:function(){
      var blogs=[];
      for(var i=0;i<this.$store.getters['blogsData'].length;i++){
        blogs.push(this.$store.getters['blogsData'][i])
      }
      blogs.sort(function(a,b){
        if( a.date > b.date ) return -1;
        if( a.date < b.date ) return 1;
        return 0;
      });
      return blogs
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

