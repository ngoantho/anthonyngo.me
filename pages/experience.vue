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
    const blockMap = await $notion.getPageBlocks(
      "79d3b784f57a4c1bb8bac0349222fd1a"
    );
    return { blockMap };
      }
  }
</script>

<style>
@import "vue-notion/src/styles.css";
</style>
