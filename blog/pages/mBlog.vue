<template>
  <div class="tableOfContnts">
    <div class="mainContents">
      <div class="v_line_left">
        <div class="border"></div>
        <h2 class="title">
          TABLE OF
        </h2>

        <ul class="link">
          <li>
            <p>
              <a class="tablelink" href="profile.html">PROFILE</a>
            </p>
          </li>
          <li>
            <p>
              <a class="tablelink" href="Blog.vue">BLOG</a>
            </p>
          </li>
        </ul>

        <div class="border"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    name: "mBlog",
  components: {
    Logo
  }
}
</script>

<style>
body {
  background-color: rgb(98, 140, 186);
  display: block;
  margin: 8px;
  font-family: 'Hiragino Kaku Gothic', 'ProN';
  word-spacing: 0;

}

.v_line_left {
  border-left: solid 1px black;
  border-right: solid 1px black;
  padding-left: 0px;
}

.border {
  border-bottom: solid 1px #000;
}

.mainContents {
  position: relative;
  margin: 20px;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-color: rgb(243, 178, 172);
  font-weight: 700;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.tableOfContnts ul {
  list-style: none;
  position: relative;
  top: 0px;
  left: 0px;
  font-size: 20px;
  padding-left: 50px;
}

.tablelink {
  position: relative;
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
  background: linear-gradient(#f3b2ac, #ea7775);
  text-decoration-color: rgb(98, 140, 186);
  font-size: 24px;
}

.title {
  position: relative;
  padding-left: 20px;
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 0.8px rgb(54, 72, 94);
  font-size: 24px;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

</style>
