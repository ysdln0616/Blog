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

/* body {
  background-color: rgb(98, 140, 186);
}

.v_line_left {
  border-left: solid 1px black;
  border-right: solid 1px black;
  padding-left: 0px;
}

.border {
  border-bottom: solid 1px #000;
}
.mborder {
  border-bottom: solid 1px #000;
}

.mainContents {
  position: relative;
  margin: 20px;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-color: #fff;
  opacity: 0.9;
  font-weight: 700;
}
.mainContents h2 {
  position: relative;
  padding-left: 20px;
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 1px rgb(54, 72, 94);
  font-size: 24px;
}

.mainContents ul {
  list-style: none;
  position: relative;
  font-size: 20px;
  padding-left: 40px;
  padding-right: 40px;
}

.blogtitle {
  position: relative;
  border-radius: 20px;
  font-size: 24px;
  font-weight: 700;
  padding: 10px;
  margin-top: 2px;
  margin-bottom: 2px;
}

#m01 {
  background: #a284c9;
}

#m01 a {
  margin-left: 10px;
  color: #cf9a88;
  -webkit-text-stroke: 1px #47335f;
  text-decoration-color: #47335f;
}

#m02 {
  background: #7b82c5;
}

#m02 a {
  margin-left: 10px;
  color: #f1cdc3;
  -webkit-text-stroke: 1px #dc462c;
  text-decoration-color: #dc462c;
}

#m10 {
  background: #ff7163;
}

#m10 a {
  margin-left: 10px;
  color: #d6c3e5;
  -webkit-text-stroke: 1px #006898;
  text-decoration-color: #006898;
}

#m08 {
  background: #ffd956;
}

#m08 a {
  margin-left: 10px;
  color: #3189de;
  -webkit-text-stroke: 1px #5d72fd;
  text-decoration-color: #5d72fd;
}

#m11 {
  background: #ff6b90;
}

#m11 a {
  margin-left: 10px;
  color: #ff9256;
  -webkit-text-stroke: 1px #a8344d;
  text-decoration-color: #aa3651;
}

#m06 {
  background: rgb(121, 187, 156);
}

#m06 a {
  margin-left: 10px;
  color: #8db0fc;
  -webkit-text-stroke: 1px #34271c;
  text-decoration-color: #42876f;
}

.backPreparge {
  position: relative;
  font-size: 20px;
  margin-left: 20px;
  color: rgb(164, 187, 214);
  -webkit-text-stroke: 1px rgb(54, 72, 94);
  background: linear-gradient(#fff, rgb(164, 187, 214));
  opacity: 0.9;
  text-decoration-color: rgb(98, 140, 186);
  font-weight: 700;
} */


</style>
