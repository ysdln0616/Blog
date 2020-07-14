<template>
  <div>
    <ul  class="links">  
      <div class="nowMenu">2020年7月</div>
      <li v-for="info in showBlogs" :key="info">
        <div class="border"></div>
        <p>
          <a  v-if="info==blogs[0]" class="new">new</a>
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
  </div>

</template>

<script>

export default {
  name: "July20",
  layout: 'Archive',
  data:function(){
    return{
      bePre:true,
      beNext:true
    }
  },
  computed: {
    blogs:function(){
      var arrayBlogs=[];
      for(var i=0;i<this.$store.getters['blogsData'].length;i++){
        arrayBlogs.push(this.$store.getters['blogsData'][i])
      }
      arrayBlogs.sort(function(a,b){
        if( a.date > b.date ) return -1;
        if( a.date < b.date ) return 1;
        return 0;
      });
      return arrayBlogs
    },
    showBlogs:function(){
      var arrayShowBlogs=[]
      for(var i=0;i<this.blogs.length;i++){
        if(this.blogs[i].month == "July20"){
          arrayShowBlogs.push(this.blogs[i])
        }
      }
      return arrayShowBlogs
    },
    monthes:function(){
      var arrayMonth = []
      for(var i=0;i<this.$store.getters['monthes'].length;i++){
        var blogCount=0;
        for(var j=0;j<this.$store.getters['blogsData'].length;j++){
          if(this.$store.getters['blogsData'][j].month ==this.$store.getters['monthes'][i].to){
            blogCount+=1;
          }
        }
        arrayMonth.push(
          {
            to:this.$store.getters['monthes'][i].to,
            title:this.$store.getters['monthes'][i].title,
            blogCount:blogCount
          }
        )
      }
      return arrayMonth
    },
    preMonth:function(){
      for(var i=0;i<this.$store.getters['monthes'].length;i++){
        if(this.$store.getters['monthes'][i].to=="July20"){
          if(i+1<this.$store.getters['monthes'].length){
            return this.$store.getters['monthes'][i+1]
          }else{
            this.bePre=false
            return this.$store.getters['monthes'][0]
          }
        }
      }
    },
    nextMonth:function(){
      for(var i=0;i<this.$store.getters['monthes'].length;i++){
        if(this.$store.getters['monthes'][i].to=="July20"){
          if(i!=0){
            return this.$store.getters['monthes'][i-1]
          }else{
            this.beNext=false
            return this.$store.getters['monthes'][0]
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.perLink{
  cursor: pointer;
  color: rgb(54, 72, 94);
  font-weight: 600;
  font-size: 24px;
  background-color: #98c7df;
}
</style>