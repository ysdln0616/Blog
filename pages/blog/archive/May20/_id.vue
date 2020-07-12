<template>
  <div>
     <div class = "title">
      <div class="Bar">
        <nuxt-link v-if="bePre" class="preBar" :to= "{path:`/blog/archive/${preBlog.month}/${preBlog.id}`}">←{{preBlog.title}}</nuxt-link>
        <nuxt-link v-if="beNext" class="nextBar" :to= "{path:`/blog/archive/${nextBlog.month}/${nextBlog.id}`}">{{nextBlog.title}}→</nuxt-link>
     </div>
     <div class="border"></div>
    </div>
    
<!-- 20200522 -->
    <div v-if="this.$route.params['id']  == '22'" class="document">
      <h4>2019年に応用数学研究部に入ってから初めて自分で作ったこのサイトをいろいろ直しました。</h4>
      <h4>去年は始めたばっかりで拡張の方向性などまっっっったく考慮していなかったので、positionを絶対的に置いてるものが多かったです。</h4>
      <h4>それを覚えていなかったのでborderを一番下に書いたはずなのに途中に生えたのでとても面白かったです。</h4>
      <h4>デザインの勉強など全然していませんが4色以上使ってデザインできるようになりたいです。</h4>
      <h4>来年も今書いてるコードが面白く思えるくらいに成長していたらいいなと思います。</h4>
      <h4>全然ブログ書いていなかったので過去にやったことなども後々書きます...。</h4>
      <h4>もちろん今後作るものもあげます。はい。</h4>
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
  name: "May20-id",
  layout: 'design01',
  data:function(){
    return{
      bePre:true,
      beNext:true
    }
  },
  mounted() {
    this.updateHeader()
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
        if(this.blogs[i].month == "May20" && this.blogs[i].id == this.$route.params['id']){
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
  },
  methods: {
    updateHeader() {
      this.$nuxt.$emit('updateHeader', this.showBlogs)
    }
  }
}
</script>

<style scoped>
.perLink {
  font-weight: 600;
  cursor: pointer; 
  color: #36485e;
  background: #98c7df 
}
.preBar{
  text-decoration: none;
}
.nextBar{
  text-decoration: none;
}
</style>