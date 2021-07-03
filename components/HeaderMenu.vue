<template>
  <fragment>
    <b-navbar-item tag="router-link" :to="{ path: '/' }">About</b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ path: '/work' }">Work</b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ path: '/experience' }">Experience</b-navbar-item>
    <b-navbar-dropdown label="More">
      <b-navbar-item><!-- Garden --></b-navbar-item>
      <b-navbar-item><!-- Blog --></b-navbar-item>
    </b-navbar-dropdown>
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
