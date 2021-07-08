<template>
  <div class="container">
    <b-navbar> 
      <template #brand>
        <b-navbar-item>
          <NuxtLink to="/">
            <BrandIcon/>
          </NuxtLink>
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item>
          <NuxtLink to="/career">Career</NuxtLink>
        </b-navbar-item>
        <b-navbar-item>
          <NuxtLink to="/projects">Projects</NuxtLink>
        </b-navbar-item>
        <b-navbar-item>
          <NuxtLink to="/experience">Experience</NuxtLink>
        </b-navbar-item>
        <b-navbar-item>
          <NuxtLink to="/book-notes">Book Notes</NuxtLink>
        </b-navbar-item>
        <b-navbar-item tag="a">
          <a href="//wiki.anthonyngo.me" target="blank">Garden↗</a>
        </b-navbar-item>
        <b-navbar-item tag="a">
          <a href="//blog.anthonyngo.me" target="blank">Blog↗</a>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button" outlined>Resume</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style scoped>
.container {
  max-width: 708px;
}
</style>
