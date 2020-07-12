<template>
  <div>
    <ul class="monthList">
       <div class="nowMenu">ARCHIVE</div>
      <li v-for="info in monthes" :key="info">
        <div class="border"></div>
        <div class="parentOfMonth">     
          <nuxt-link  class="perLink" :to= "{path:`/blog/archive/${info.to}`}" >{{ info.title }}({{info.blogCount}})</nuxt-link>
        </div>
      </li>
      <div class="border"></div>
    </ul>
  </div>
</template>

  
<script>
export default {
  name: "BLOG",
  layout: 'Archive',
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
// import '@/assets/css/profile.css'
</script>

<style scoped>
.nowMenu {
  word-wrap: break-word;
  cursor: pointer;
  color: rgb(54, 72, 94);
  font-weight: 100;
  /* font-size: 24px; */
  text-decoration: none;
}
.parentOfMonth{
  text-align: center;
  margin: 0.3em;
}
.monthList{
  /* padding-top: 2em; */
  padding-bottom: 2em;
  list-style: none;
  padding-left: 2em;
  padding-right: 2em;
}
.perLink{
  cursor: pointer;
  color: rgb(54, 72, 94);
  font-weight: 600;
  font-size: 24px;
  background-color: #98c7df;
}
</style>

