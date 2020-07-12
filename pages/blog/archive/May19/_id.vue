<template>
  <div>
    <div class = "title">
      <div class="Bar">
        <nuxt-link v-if="bePre" class="preBar" :to= "{path:`/blog/archive/${preBlog.month}/${preBlog.id}`}">←{{preBlog.title}}</nuxt-link>
        <nuxt-link v-if="beNext" class="nextBar" :to= "{path:`/blog/archive/${nextBlog.month}/${nextBlog.id}`}">{{nextBlog.title}}→</nuxt-link>
     </div>
     <div class="border"></div>
    </div>
     
    
<!-- 20190520 -->
    <div v-if="this.$route.params['id']  == '20'" class="document">
        <h4>ブログ欄を作ってみました</h4>
    </div>

<!-- 20190521 -->
    <div v-if="this.$route.params['id']  == '21'" class="document">
      <h4>私の友達に５月誕生日の人が多いのですが</h4>
      <h4>今日はその中でも高校であっただいぶ仲が良い友達の誕生日でした。</h4>
      <h4>去年までは直接祝えたのに大学が違うのでなかなか会えなくて悲しいですね。</h4>
      <h4>今日は初めて電話しながら寝落ちしました。寝不足です。</h4>
      <p>
        <img id="photo" src="@/assets/photo/IMG_9614.jpeg"
         alt="電話してたよ" title="いつのまにか切れてた"/>
      </p>
    </div>

<!-- 20190531 -->
    <div v-if="this.$route.params['id']  == '31'" class="document">
      <h4>東京駅に行きました。</h4>
      <h4>高校の時に定期券内だったのでよく散策してました。</h4>
      <h4>大学になって東京駅は定期ではなくなってしまったのですが</h4>
      <h4>近くの駅が定期なのでバイトの面接に行きました。</h4>
      <h4>
      やっはり好きな景色です。</h4>
      <p>
        <img id="photo" src="@/assets/photo/IMG_9567.jpg" 
         alt="東京駅からの景色"  title="東京駅からの景色"/>
      </p>
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
  name: "May19-id",
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
        if(this.blogs[i].month == "May19" && this.blogs[i].id == this.$route.params['id']){
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

// import '@/assets/css/design01.css'
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