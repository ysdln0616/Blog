<template>
  <div>
    <ul class="links">
      <div class = "nowMenu">BLOG</div>
      <li v-for="info in showBlogs" :key="info">
        <div class="border"></div>
        <p>
            <a  v-if="info==blogs[0]" class="new">new</a>
            <nuxt-link  class="perLink"
             :to= "{path:`/blog/archive/${info.month}/${info.id}`}"
             >{{ info.title }}</nuxt-link>
            <a class="mDate">{{ info.date }}</a>
        </p>
      </li>
      <div class="border"></div>
    </ul>

    <ul  class="links">
        <li v-for="n in blogLength" :key="n" style="display: inline-block">
          <nuxt-link v-if="n==1"  class="nowMenu"  style="margin-right:  10px;" 
             :to= "{path:`/blog/entrylist/${n}`}"
             >{{ n }}</nuxt-link>
             <nuxt-link v-else  class="menu"  style="margin-right:  10px;" 
             :to= "{path:`/blog/entrylist/${n}`}"
             >{{ n }}</nuxt-link>
        </li>
    </ul>
  </div>

</template>

  
<script>
export default {
  name: "BLOG",
  layout: 'Archive',
  data(){
        return{
            num : 1,
            newMenu:'nowMenu',
            monthMenu:'menu',
        }
  },
  computed: {
    blogLength:function () {
        var blogsNumber = Math.ceil(this.$store.getters['blogsData'].length/5)
        return blogsNumber
    },
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
    showBlogs:function(){
        return this.blogs.slice((this.num-1)*5,this.num*5)
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
  margin-right:  10px;
  font-weight: 100;
  text-decoration: none;
  font-size: 18px;
}
.menu {
  cursor: pointer;
  color: rgb(54, 72, 94);
  margin-right:  10px;
  font-weight: 100;
  font-size: 18px;
}
.perLink{
  cursor: pointer;
  color: rgb(54, 72, 94);
  font-weight: 600;
  font-size: 24px;
  background-color: #98c7df;
}
</style>

