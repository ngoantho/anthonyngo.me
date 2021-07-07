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
      "7d6c8bc5aee24f089dd6a84d6b8f9b11"
    );
    return { blockMap };
      }
  }
</script>

<style>
@import "vue-notion/src/styles.css";
</style>
