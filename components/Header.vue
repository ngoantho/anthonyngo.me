<template>
  <div class="container">
    <b-navbar> 
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <BrandIcon/>
        </b-navbar-item>
      </template>
      <template #end>
        <HeaderMenu/>
      </template>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style>
</style>
