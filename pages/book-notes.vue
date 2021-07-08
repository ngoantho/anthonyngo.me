<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script lang="js">
export default {
    data() {
      return {
        blockMap: null 
      }
    },
    async asyncData({ $notion }) {
      
// use Notion module to get Notion blocks from the API via a Notion pageId
      const blockMap = null    
      return { blockMap };
    }
  }
</script>

<style>
@import "vue-notion/src/styles.css";
</style>
