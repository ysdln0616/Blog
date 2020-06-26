<template>
  <div>
    <div class = "title">
      <nuxt-link  :to= "{path:`/blog/entrylist`}" class = "preBar" >BLOG</nuxt-link>
      <nuxt-link  :to= "{path:`/blog/archive/June19`}" class = "preBar" >2019年6月</nuxt-link>
      <div class="border"></div>
    </div>
    
    <div class = "title">
      <div>
        {{showBlogs.title}}
      </div>
      <a class="mDate">{{ showBlogs.date }}</a>
      <div class="Bar">
        <nuxt-link v-if="bePre" class="preBar" :to= "{path:`/blog/archive/${preBlog.month}/${preBlog.id}`}">←{{preBlog.title}}</nuxt-link>
        <nuxt-link v-if="beNext" class="nextBar" :to= "{path:`/blog/archive/${nextBlog.month}/${nextBlog.id}`}">{{nextBlog.title}}→</nuxt-link>
     </div>
    </div>
     
        
<!-- 20190613 -->
    <div v-if="this.$route.params['id']  == '13'" class="document">
      <h4>
        メイベリンの新作のリップのイベントに行ってきました。
        もともとこのリップは15番を持っていて違う色もあったら良いなと思っていたので嬉しいです。
      </h4>
      <p>
        <img id="photo" src="@/assets/photo/IMG_0318.JPG"
          alt="ベンチ" title="maybelline"/>
      </p>
      <p>
        <img id="photo" src="@/assets/photo/IMG_0315.jpg"
         alt="lip" title="SPステイマットインク"/>
      </p>
      <p>
      <img id="photo" src="@/assets/photo/IMG_0313.JPG"
       alt="lip" title="SPステイマットインク"/></p>
      <h4>
        お土産に新作のリップをもらいました。
      </h4>
      <p>
        <img id="photo" src="@/assets/photo/IMG_0407.jpg"
         alt="lip" title="SPステイマットインク"/>
      </p>
    </div>

<!-- 20190615 -->
    <div v-if="this.$route.params['id']  == '15'" class="document">
      <h4>
        うちの犬が13才になりました。
      </h4>
      <h4>
        来年も誕生日を迎えられたら良いですね
      </h4>
    </div>

<!-- ページ移動の -->
    <div class="title">
      <div class="border"></div>
      <div class="Bar">
        <nuxt-link v-if="bePre" class="preBar" :to= "{path:`/blog/archive/${preBlog.month}/${preBlog.id}`}">←{{preBlog.title}}</nuxt-link>
        <nuxt-link v-if="beNext" class="nextBar" :to= "{path:`/blog/archive/${nextBlog.month}/${nextBlog.id}`}">{{nextBlog.title}}→</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "June19-id",
  layout: 'default',
  data:function(){
    return{
      bePre:true,
      beNext:true
    }
  },
  computed: {
    blogs:function(){
      var blogs=[];
      for(var i=0;i<this.$store.getters['blogsData'].length;i++){
        blogs.push(this.$store.getters['blogsData'][i])
      }
      blogs.sort(function(a,b){
        if( a.date > b.date ) return 1;
        if( a.date < b.date ) return -1;
        return 0;
      });
      return blogs
    },
    showBlogs:function(){
      for(var i=0;i<this.blogs.length;i++){
        if(this.blogs[i].month == "June19" && this.blogs[i].id == this.$route.params['id']){
          return this.blogs[i]
        }
      }
    },
    preBlog:function(){
      for(var i=0;i<this.blogs.length;i++){
        if(this.blogs[i]==this.showBlogs){
          if(i!=0){
            return this.blogs[i-1]
          }else{
            this.bePre=false
            return this.blogs[0]
          }
        }
      }
    },
    nextBlog:function(){
      for(var i=0;i<this.blogs.length;i++){
        if(this.blogs[i]==this.showBlogs){
          if(i+1<this.blogs.length){
            return this.blogs[i+1]
          }else{
            this.beNext=false
            return this.blogs[0]
          }
        }
      }
    },
  }
}

import '@/assets/css/profile.css'
</script>
