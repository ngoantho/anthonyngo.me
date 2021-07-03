<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <BrandIcon/>
      </b-navbar-item>
    </template>
    <template #start></template>
    <template #end></template>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style>
</style>
