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
      "c436f8eb0b624830be4f9341727da64a"
    );
    return { blockMap };
      }
  }
</script>

<style>
@import "vue-notion/src/styles.css";
</style>
