<template>
    <div class="header">
        <div class="topline"></div>
        <div class="line">
            <nuxt-link  :to= "{path:`/`}" class="headerList">Home</nuxt-link> 
            <nuxt-link  :to= "{path:`/blog/entrylist/1`}" class="headerList">Blog</nuxt-link>
            <nuxt-link  :to= "{path:`/blog/archive`}" class="headerList">Archive</nuxt-link>
            <nuxt-link  :to= "{path:`/aboutme`}" class="headerList">Profile</nuxt-link>
        </div>
        <div class="underline"></div>
        <div class="parentsOfLine">
            <div class="shortLine"></div>
        </div>
    </div>
</template>

<style >
.header{
  margin-left: 40px;
  margin-right: 40px;
}

.line{
  /* border-top: 2px solid ; */
  border-left: solid 2px;
  border-image: linear-gradient(0.5turn, #98c7df, #EA9FD0  );
  border-image-slice: 1;
  position: relative;
  /* margin-top: 1em; */
  padding-left: 1em;
  /* margin-left: 5%; */
  /* margin-right: 5%; */
  /* width:60%; */
  min-width: 5em;
}

.line .headerBlog{
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2em;
  padding: 0;
  margin: 0;
  font-weight: 600;
  transform: translateY(-33%) translateX(0.5em);
}

.headerBlog{
  color: black;
  text-decoration: none;
}

.headerList{
  color: black;
  text-decoration: none;
}

.parentsOfLine{
  width: 25%;
}

.shortLine{
  border-top: 10px solid;
  border-image: linear-gradient(to right, #98c7df 0%, #EA9FD0  100%);
  border-image-slice: 1;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  transform: translateY(-60%) translateX(275%);
}

.topline{
    border-top: 2px solid ;
  border-image: linear-gradient(0.5turn, #98c7df, #EA9FD0  );
  border-image-slice: 1;
  position: absolute;
  padding-left: 1em;
  /* margin-left: 20px; */
  /* margin-right: 20px; */
  width:30%;
  min-width: 5em;

}

.underline{
  border-top: 2px solid #EA9FD0 ;
  position: relative;
}


</style>
