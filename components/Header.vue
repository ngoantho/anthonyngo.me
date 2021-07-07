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
        <HeaderMenu/>
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
