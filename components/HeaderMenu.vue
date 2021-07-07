<template>
  <fragment>
    <b-navbar-item tag="router-link" :to="{ path: '/career' }">Career</b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ path: '/projects' }">Projects</b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ path: '/experience' }">Experience</b-navbar-item>
    <b-navbar-item tag="a">
      <a href="//wiki.anthonyngo.me" target="blank">Garden</a>
    </b-navbar-item>
    <b-navbar-item tag="a">
      <a href="//blog.anthonyngo.me" target="blank">Blog</a>
    </b-navbar-item>
    <b-navbar-item tag="div">
      <div class="buttons">
        <a class="button" outlined>Resume</a>
      </div>
    </b-navbar-item>
  </fragment>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style>
</style>
