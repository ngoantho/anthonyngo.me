<template>
  <div id="hexagon">
    <p id="txt">A</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="scss" scoped>
$hexagon-border: blue;
$hexagon-body: yellow;
$hexagon-size: 50px;

#hexagon {
  position: relative;
  height: $hexagon-size;
  width: $hexagon-size;
  background: $hexagon-border;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  #txt {
      z-index: 1;
    }
}
#hexagon:before {
  position: absolute;
  content: '';
}
#hexagon:before {
  top: 4px;  /* border width */
  left: 4px;  /* border width */
  height: calc(100% - 8px);  /* 100% - (2 * border width) */
  width: calc(100% - 8px);  /* 100% - (2 * border width) */
  background: $hexagon-body;
}
#hexagon, #hexagon:before {
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
</style>
