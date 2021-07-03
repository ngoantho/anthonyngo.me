<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
      return {
        blockMap: null 
      }
    },
    async asyncData({ $notion }) {
      
// use Notion module to get Notion blocks from the API via a Notion pageId
    const blockMap = await $notion.getPageBlocks(
      "8c1ab01960b049f6a282dda64a94afc7"
    );
    return { blockMap };
      }
  })
</script>

<style>
@import "vue-notion/src/styles.css";
</style>
