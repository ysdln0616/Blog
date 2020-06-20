<template>
  <div>
    <div class = "title">
      <div>{{blogs.title}}</div>
      <a class="mDate">{{ blogs.date }}</a>
    </div>
    
    <!-- 20190520 -->
    <div v-if="this.$route.params['id']  == '20'" class="document">
        <h4>ブログ欄を作ってみました</h4>
    </div>

    <!-- 20190521 -->
    <div v-if="this.$route.params['id']  == '21'" class="document">
        <h4>
            私の友達に５月誕生日の人が多いのですが
        </h4>
        <h4>
            今日はその中でも高校であっただいぶ仲が良い友達の誕生日でした。
        </h4>
        <h4>
            去年までは直接祝えたのに大学が違うのでなかなか会えなくて悲しいですね。
        </h4>
        <h4>
            今日は初めて電話しながら寝落ちしました。寝不足です。
        </h4>
        <p>
            <img id="photo" 
            src="@/assets/photo/IMG_9614.jpeg"
            alt="電話してたよ"
            title="いつのまにか切れてた"/>
        </p>
    </div>

     <!-- 20190531 -->
    <div v-if="this.$route.params['id']  == '31'" class="document">
        <h4>
            東京駅に行きました。
        </h4>
        <h4>
            高校の時に定期券内だったのでよく散策してました。
        </h4>
        <h4>
            大学になって東京駅は定期ではなくなってしまったのですが
        </h4>
        <h4>
            近くの駅が定期なのでバイトの面接に行きました。
        </h4>
        <h4>
            やっはり好きな景色です。
        </h4>
        <p>
            <img id="photo" 
            src="@/assets/photo/IMG_9567.jpg" 
            alt="東京駅からの景色" 
            title="東京駅からの景色"/>
        </p>
    </div>

    <div>
      <p class="back">
        <nuxt-link class="perLink" to="/Blog/May19">←2019年5月</nuxt-link>
      </p>
    </div>

    
  </div>
</template>

<script>

export default {
  name: "May19-id",
  layout: 'default',
  computed: {
    blogs:function(){
      for(var i=0;i<this.$store.getters['blogsData'].length;i++){
        if(this.$store.getters['blogsData'][i].month == "May19" && this.$store.getters['blogsData'][i].id == this.$route.params['id']){
          return this.$store.getters['blogsData'][i]
        }
      }
    }
  }
}

import '@/assets/css/profile.css'
</script>
