<template>
    <div>
        <div class = "title">
            <div>
                {{blogs.title}}
            </div>
            <a class="mDate">{{ blogs.date }}</a>
        </div>
     
        <!-- 20190613 -->
        <div v-if="this.$route.params['id']  == '13'" class="document">
            <h4>
                メイベリンの新作のリップのイベントに行ってきました。
                もともとこのリップは15番を持っていて違う色もあったら良いなと思っていたので嬉しいです。
            </h4>
            <p>
                <img
                id="photo"
                src="@/assets/photo/IMG_0318.JPG"
                alt="ベンチ"
                title="maybelline"
                />
            </p>
            <p>
                <img
                id="photo"
                src="@/assets/photo/IMG_0315.jpg"
                alt="lip"
                title="SP
                ステイマットインク"
                />
            </p>
            <p>
                <img
                id="photo"
                src="@/assets/photo/IMG_0313.JPG"
                alt="lip"
                title="SP
                ステイマットインク"
                />
            </p>
            <h4>
            お土産に新作のリップをもらいました。
            </h4>
            <p>
                <img
                id="photo"
                src="@/assets/photo/IMG_0407.jpg"
                alt="lip"
                title="SP
                ステイマットインク"
                />
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

        <div>
            <p class="back">
                <nuxt-link class="perLink" to="/Blog/June19">←2019年6月</nuxt-link>
            </p>
        </div>   
    </div>
</template>

<script>

export default {
  name: "June19-id",
  layout: 'default',
  computed: {
    blogs:function(){
      for(var i=0;i<this.$store.getters['blogsData'].length;i++){
        if(this.$store.getters['blogsData'][i].month == "June19" && this.$store.getters['blogsData'][i].id == this.$route.params['id']){
          return this.$store.getters['blogsData'][i]
        }
      }
    }
  }
}

import '@/assets/css/profile.css'
</script>
