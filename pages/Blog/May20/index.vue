<template>
  <div>
    <div class = "title">
      2020年5月
    </div>
    <ul class="links">
      <li v-for="info in blogs" :key="info">
        <p>
            <nuxt-link  class="perLink"
             :to= "{path:`/blog/${info.month}/${info.id}`}"
             >{{ info.title }}</nuxt-link>
            <a class="mDate">{{ info.date }}</a>
        </p>
      </li>
    </ul>

    <div>
      <p class="back">
        <nuxt-link class="perLink" to="/blog">←BLOG</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "May20",
  layout: 'default',
  computed: {
    blogs:function(){
      var month=[];
      for(var i=0;i<this.$store.getters['blogsData'].length;i++){
        if(this.$store.getters['blogsData'][i].month == "May20"){
          month.push(this.$store.getters['blogsData'][i])
        }
      }
      month.sort(function(a,b){
        if( a.id > b.id ) return -1;
        if( a.id < b.id ) return 1;
        return 0;
      });
      return month
    }
  }
}

import '@/assets/css/profile.css'
</script>