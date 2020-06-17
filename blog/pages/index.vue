<template>
  <div>
    <div class="title">
      TABLE OF CONTENTS
    </div>
    <ul class="links">
      <li>
        <p>
          <nuxt-link class="perLink" to="/profile">PROFILE</nuxt-link>
        </p>
      </li>
      <li>
        <p>
          <nuxt-link class="perLink" to="/mBlog" >BLOG</nuxt-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "index",
  layout: 'default'
}

import '@/assets/css/profile.css'
</script>

