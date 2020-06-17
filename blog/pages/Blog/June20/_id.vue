<template>
  <div>
    <a class="mDate">{{ this.$route.query.date}}</a>
    <div class = "title">
      {{this.$route.query.title}}
    </div>

<!-- 20200606 -->
    <div v-if="this.$route.query.date==20200606" class="document">
      <h4>swiftで親ノードから子ノードを削除しないとまた追加できないというのは有名な話()だったんですけど、子ノードから親ノードを消さないとずっとエラーが出てくることがわかりました。</h4>
      <img  id="photo" src="../../../../photo/0606error.png" alt="エラー文" title="エラー文"/>
      <h4>調べても親ノードから子ノードを消せば良いってずっとエラーが出てくるからほんとにわからなかったです。</h4>
      <h4>consoleしたときにバグが出てこなくなることもありますよね！許さない。</h4>
      <h4>SKActionから実行するときに、オーディオの再生を停止することはできないらしくて、BGMが止まりません。</h4>
      <h4>それどころか二重奏です。</h4>
      <h4>ちなみに4月からテトリスもどきをswiftで作っているんですけど、その記事はまだ書いていません。待ってて。</h4>
      <h4>誕生日までには終わらせたいな....。</h4>
      <h4>あと気持ち悪いやつ取れたので貼ります。</h4>
      <img id="photo" src="../../../../photo/0606back.png" alt="中国語？" title="中国語？"/>
      <h4>戻るって打ってるのになんか字が違うんですよ。</h4>
      <h4>なにこれ</h4>
    </div>

<!-- 20200614 -->
    <div v-if="this.$route.query.date==20200614" class="document">
      <h4>このブログもだんだん量が増えていくことが確定していますね。</h4>
      <h4>先輩がNuxtをお勧めしてくれたので今このblogをNuxtで書き換えようとしています。</h4>
      <h4>しんどいです。</h4>
    </div>

    <div>
      <p class="back">
        <nuxt-link class="perLink" to="/Blog/June20">←2020年6月</nuxt-link>
      </p>
    </div>

    
  </div>
</template>

<script>

export default {
  name: "June20-id",
  layout: 'default',
  props:{
      title:'',
      data:'',
      id:''
  },
  created(){
    this.setListener()
    console.log("lllll")
  },
  methods:{
    setListener(){
      this.$nuxt.$on('giveBlogs',this.setBlogs),
      console.log("kkkkk")
    },
    setBlogs(blogs){
      this.blogs = blogs || "",
      console.log(this.blogs)
    }
  },
  asyncData (context) {
         console.log("aaa",context.params.blogs)
     },
     fetch(context) {        
         console.log(context.params.blogs)
     },
  
}

import '@/assets/css/profile.css'
</script>
