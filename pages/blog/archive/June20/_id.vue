<template>
  <div>
    <div class = "title">
      <div class="Bar">
        <nuxt-link v-if="bePre" class="preBar" :to= "{path:`/blog/archive/${preBlog.month}/${preBlog.id}`}">←{{preBlog.title}}</nuxt-link>
        <nuxt-link v-if="beNext" class="nextBar" :to= "{path:`/blog/archive/${nextBlog.month}/${nextBlog.id}`}">{{nextBlog.title}}→</nuxt-link>
     </div>
     <div class="border"></div>
    </div>
     
     <!-- 20200619 -->
    <div v-if="this.$route.params['id']  == '19'" class="document">
      <h4>今年の6月16日に20才になりました。</h4>
      <h4>小さい頃は20才になる瞬間がくるなんて信じられなかったんですけど、ほんとになるんですね。</h4>
      
      <div class="border"></div>
      <h4>私は毎年毎年、人間的に成長するための目標を立てています。</h4>
      <h4>例えば、相手が久しぶりにLineを返してくれたとしましょう。その時までの私は大体「なんで遅くなったの（怒）」などのアクションをしてしまいがちでした。</h4>
      <h4>しかし、久しぶりに返したのに怒られたらもっと返す気をなくします。だから「返してくれて嬉しい」と言うようにしようと決めました。</h4>
      <h4>また、人間みんな好きな人には優しくできると思うので、みんなのことを好きだと思って接するように決めました。ちなみにこれを実行してたら本当にみんなが好きになったので結構幸せです。</h4>
      <h4>こういうやつですね。</h4>
      <h4>私は周りを幸せにできる人になりたいから、こう言う細かいところを目標にして、達成を積み重ねて、素敵な人になります。（宣言）</h4>
      <h4>そして私は自分が幸せであることがみんなの幸せにつながると信じて疑ってません。だから私も幸せになります。ふふ。</h4>

      <div class="border"></div>
      <h4>今年は、大学二年生になって先輩になったことだし、良き先輩になれるようにしたいなと思っています。</h4>
      <h4>ちなみに後輩用にこんなものを書きました。<a class="perLink" href="https://hackmd.io/@ysdln0616/BJonxH5s8">るな子がOSKに入って一年過ごした議事録</a>を書きました。</h4>
      <h4>まだコロナの影響で後輩ができてないですが...。</h4>
      <h4>私の母親が、自分が子供の時に嫌だったことは私にしないと宣言していました。子供の時期は誰にでもあれど、親になると子供の頃嫌だったことを子供にしてしまうことがあります。</h4>
      <h4>私も先輩になっても一番下の学年だった時の気持ちを忘れないで、なおして後輩に接したり引き継げるようにしたいです。</h4>

      <div class="border"></div>

      <h4>最近の宣言を書いておきます。</h4>
      <h4>・無視って犯罪でもないけど、いじめとされるくらいには人を傷つける部類だし、直接会えないと起こりやすいことだから積極的に反応返事をしていくことにする</h4>
      <h4>・一人称を私にする</h4>
      <h4>・歯磨きもフロスもして15分くらいやる。これあさの不快感が段違いだからおすすめです。</h4>

      <h4>これからは宣言を書いていこうと思うので、参考にしてくれたら嬉しいです。</h4>

      <h4>
        深夜テンションで書いてるからキッツイわ。最近先輩から良い刺激を得てるので作業進みまくりですわ。嬉しい。
      </h4>
    </div>

<!-- 20200606 -->
    <div v-if="this.$route.params['id']  == '06'" class="document">
      <h4>swiftで親ノードから子ノードを削除しないとまた追加できないというのは有名な話()だったんですけど、子ノードから親ノードを消さないとずっとエラーが出てくることがわかりました。</h4>
      <img  id="photo" src="@/assets/photo/0606error.png" alt="エラー文" title="エラー文"/>
      <h4>調べても親ノードから子ノードを消せば良いってずっとエラーが出てくるからほんとにわからなかったです。</h4>
      <h4>consoleしたときにバグが出てこなくなることもありますよね！許さない。</h4>
      <h4>SKActionから実行するときに、オーディオの再生を停止することはできないらしくて、BGMが止まりません。</h4>
      <h4>それどころか二重奏です。</h4>
      <h4>ちなみに4月からテトリスもどきをswiftで作っているんですけど、その記事はまだ書いていません。待ってて。</h4>
      <h4>誕生日までには終わらせたいな....。</h4>
      <h4>あと気持ち悪いやつ取れたので貼ります。</h4>
      <img id="photo" src="@/assets/photo/0606back.png" alt="中国語？" title="中国語？"/>
      <h4>戻るって打ってるのになんか字が違うんですよ。</h4>
      <h4>なにこれ</h4>
    </div>

<!-- 20200614 -->
    <div v-if="this.$route.params['id'] =='14'" class="document">
      <h4>このブログもだんだん量が増えていくことが確定していますね。</h4>
      <h4>先輩がNuxtをお勧めしてくれたので今このblogをNuxtで書き換えようとしています。</h4>
      <h4>しんどいです。</h4>
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
  name: "June20-id",
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
        if(this.blogs[i].month == "June20" && this.blogs[i].id == this.$route.params['id']){
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
