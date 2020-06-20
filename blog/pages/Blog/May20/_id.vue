<template>
  <div>
    <div class = "title">
      <div>
      {{blogs.title}}
      </div>
      <a class="mDate">{{ blogs.date }}</a>
    </div>
     
     <!-- 20200522 -->

      <div v-if="this.$route.params['id']  == '22'" class="document">
          <h4>
            2019年に応用数学研究部に入ってから初めて自分で作ったこのサイトをいろいろ直しました。
          </h4>
          <h4>
            去年は始めたばっかりで拡張の方向性などまっっっったく考慮していなかったので、positionを絶対的に置いてるものが多かったです。
          </h4>
          <h4>
            それを覚えていなかったのでborderを一番下に書いたはずなのに途中に生えたのでとても面白かったです。
          </h4>
          <h4>
            デザインの勉強など全然していませんが4色以上使ってデザインできるようになりたいです。
          </h4>
          <h4>
            来年も今書いてるコードが面白く思えるくらいに成長していたらいいなと思います。
          </h4>
          <h4>
            全然ブログ書いていなかったので過去にやったことなども後々書きます...。
          </h4>
          <h4>もちろん今後作るものもあげます。はい。</h4>
    </div>

    <div>
      <p class="back">
        <nuxt-link class="perLink" to="/Blog/May20">←2020年5月</nuxt-link>
      </p>
    </div>

    
  </div>
</template>

<script>

export default {
  name: "May20-id",
  layout: 'default',
  computed: {
    blogs:function(){
      for(var i=0;i<this.$store.getters['blogsData'].length;i++){
        if(this.$store.getters['blogsData'][i].month == "May20" && this.$store.getters['blogsData'][i].id == this.$route.params['id']){
          return this.$store.getters['blogsData'][i]
        }
      }
    }
  }
}

import '@/assets/css/profile.css'
</script>
