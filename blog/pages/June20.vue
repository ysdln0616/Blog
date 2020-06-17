<template>
  <div>
    <div class = "title">
      {{ topTitle }}
    </div>
    <ul v-if = "top" class="links">
      <li v-for="info in blogs" :key="info">
        <p>
          <a class="mDate">{{ info.date }}</a>
          <a  class="perLink" v-on:click="topTitle = info.title,top = false,date = info.date">{{ info.title }}</a>
        </p>
      </li>
    </ul>

<!-- 20200606 -->
    <div v-if="topTitle == blogs[0].title" class="document">
      <h4>swiftで親ノードから子ノードを削除しないとまた追加できないというのは有名な話()だったんですけど、子ノードから親ノードを消さないとずっとエラーが出てくることがわかりました。</h4>
      <img  id="photo" src="../../photo/0606error.png" alt="エラー文" title="エラー文"/>
      <h4>調べても親ノードから子ノードを消せば良いってずっとエラーが出てくるからほんとにわからなかったです。</h4>
      <h4>consoleしたときにバグが出てこなくなることもありますよね！許さない。</h4>
      <h4>SKActionから実行するときに、オーディオの再生を停止することはできないらしくて、BGMが止まりません。</h4>
      <h4>それどころか二重奏です。</h4>
      <h4>ちなみに4月からテトリスもどきをswiftで作っているんですけど、その記事はまだ書いていません。待ってて。</h4>
      <h4>誕生日までには終わらせたいな....。</h4>
      <h4>あと気持ち悪いやつ取れたので貼ります。</h4>
      <img id="photo" src="../../photo/0606back.png" alt="中国語？" title="中国語？"/>
      <h4>戻るって打ってるのになんか字が違うんですよ。</h4>
      <h4>なにこれ</h4>
    </div>

<!-- 20200614 -->
    <div v-if="topTitle == blogs[1].title" class="document">
      <h4>このブログもだんだん量が増えていくことが確定していますね。</h4>
      <h4>先輩がNuxtをお勧めしてくれたので今このblogをNuxtで書き換えようとしています。</h4>
      <h4>しんどいです。</h4>
    </div>

    <div>
      <p v-if="top" class="back">
        <nuxt-link class="perLink" to="/mBlog">←BLOG</nuxt-link>
      </p>
      <p v-else class="back">
        <a class="perLink" v-on:click="topTitle='2020年6月のブログ',top=true">←2020年6月のブログ</a>
      </p>  
    </div>
  </div>
</template>

<script>

export default {
  name: "June20",
  layout: 'default',
  data() {
    return{
      top: true,
      blogs:[
        {
          title: "swift　テトリスもどき　その...?",
          date:'20200606'
        },
        {
          title: "Nuxt",
          date:'20200614'
        }
      ],
      topTitle: '2020年6月のブログ',
      date: '',
    }
  }
}

import '@/assets/css/profile.css'
</script>
