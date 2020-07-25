<template>
  <div>
    <div class = "title">
      <div class="Bar">
        <nuxt-link v-if="bePre" class="preBar" :to= "{path:`/blog/archive/${preBlog.month}/${preBlog.id}`}">←{{preBlog.title}}</nuxt-link>
        <nuxt-link v-if="beNext" class="nextBar" :to= "{path:`/blog/archive/${nextBlog.month}/${nextBlog.id}`}">{{nextBlog.title}}→</nuxt-link>
     </div>
     <div class="border"></div>
    </div>
     
     <!-- 20200715 -->
    <div v-if="this.$route.params['id']  == '15'" class="document">
      <h4>歯磨きはどのぐらいの頻度でしますか？（毎食後とか）</h4>
      <h4>何分くらい磨きますか</h4>
      <h4>...</h4>
      <h4>まあそれはいいんですよう</h4>
      <h4>聞きたいのは鏡を見ながら磨いてますかってことなんですよ</h4>
      <h4>鏡見ないで歯磨きするのって鏡見ないで化粧をする、髪の毛をセットする...と同義だと思ってるので絶対見るんですけど</h4>
      <h4>歯をひん剥いて磨いてるんですよ</h4>
      <h4>歯間フロスをしてるときなんて人に見せられたもんじゃないです</h4>
      <h4>人前で歯を磨くときどうすればいいんですかね...</h4>
      <h4>(母と二人で歯をひん剥いてた)</h4>
      <h4>ちなみにうちの犬は歯磨きがすっっごく嫌い</h4>
      <h4>なんなん</h4>  
    </div>

<!-- 20200723 -->
    <div v-if="this.$route.params['id']  == '23'" class="document">
      <h4>部屋がきれいになったのでうちのおばあちゃんが作ってくれたぬいぐるみを飾ることにしました</h4>
      <p>
        <img id="photo" src="@/assets/photo/IMG_9113.jpeg"
          alt="zoe" title="zoe"/>
      </p>
      <h4>名前はzoeです</h4>
      <h4>可愛いでしょ</h4>
      <h4>うちのワンコに噛まれないように気をつけます</h4>
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
  name: "July20-id",
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
        if(this.blogs[i].month == "July20" && this.blogs[i].id == this.$route.params['id']){
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