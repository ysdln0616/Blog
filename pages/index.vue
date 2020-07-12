<template>
  <div>
    <ul class="links">
      <div class = "nowMenu">Home</div>
      <li v-for="info in blogs" :key="info">
        <div class="border"></div>
        <p>
            <a  v-if="info==blogs[0]" class="new">new</a>
            <nuxt-link  class="perLink"
             :to= "{path:`/blog/archive/${info.month}/${info.id}`}"
             >{{ info.title }}</nuxt-link>
            <a class="mDate">{{ info.date }}</a>
        </p>
      </li>
      <div class="border"></div>
    </ul>
  </div>

</template>

<script>
export default {
  name: "BLOG",
  layout: 'Archive',
  computed: {
    blogs:function(){
      var blogs=[];
      for(var i=0;i<this.$store.getters['blogsData'].length;i++){
        blogs.push(this.$store.getters['blogsData'][i])
      }
      blogs.sort(function(a,b){
        if( a.date > b.date ) return -1;
        if( a.date < b.date ) return 1;
        return 0;
      });
      return blogs
    }
  }
}
</script>

<style scoped>
.nowMenu {
  word-wrap: break-word;
  cursor: pointer;
  color: rgb(54, 72, 94);
  margin-right:  10px;
  font-weight: 100;
  text-decoration: none;
  font-size: 18px;
}
.menu {
  cursor: pointer;
  color: rgb(54, 72, 94);
  margin-right:  10px;
  font-weight: 100;
  font-size: 18px;
}
.perLink{
  cursor: pointer;
  color: rgb(54, 72, 94);
  font-weight: 600;
  font-size: 24px;
  background-color: #98c7df;
}
</style>