<template>
  <div id="hex">
    <div id="inner">
      <p id="txt">A</p>
    </div> 
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="scss" scoped>
#hex {
  margin-top: 70px;
  width: 208px;
  height: 120px;
  position: relative;
  background: $primary;
}
#hex:before, #hex:after {
  content: "";
  border-left: 104px solid transparent;
  border-right: 104px solid transparent;
  position: absolute;
}
#hex:before {
  top: -60px;
  border-bottom: 60px solid $primary;
}
#hex:after {
  bottom: -60px;
  border-top: 60px solid $primary;
  right: 0px;
}

#inner {
  background: blue;
  transform: scale(.8, .8);
  z-index: 1;
}
#inner:before, #inner:after {
  content: "";
  border-left: 104px solid transparent;
  border-right: 104px solid transparent;
  position: absolute;
}
#inner:before {
  top: -60px;
  border-bottom: 60px solid blue;
}
#inner:after {
  bottom: -60px;
  border-top: 60px solid blue;
  right: 0px;
}

#txt {
  height: 120px;
  z-index: 2;
}
#txt:after {
  content: "";
  border-left: 104px solid transparent;
  border-right: 104px solid transparent;
  position: absolute;
  bottom: -80px;
  border-top: 60px solid red;
  z-index: 999;
}
</style>
