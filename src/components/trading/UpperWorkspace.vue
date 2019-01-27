<template>
  <multipane class="upper-workspace" layout="vertical" @paneResizeStop="resizeEnd($event)">
    <div :style="{ width: '50%', maxWidth: '90%', minWidth: '300px', minHeight: '100%' }">
      <WatchPanel/>
    </div>
    <multipane-resizer></multipane-resizer>
    <div :style="{ flexGrow: 1, zIndex: 0, }">
      <WatchDetailPanel ref="watchDetailPanel"/>
    </div>
  </multipane>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';
import WatchPanel from './WatchPanel.vue';
import WatchDetailPanel from './WatchDetailPanel.vue';

const SPACE_OFFSET = 40;

export default {
  name: 'TradingView',
  components: {
    Multipane,
    MultipaneResizer,
    WatchPanel,
    WatchDetailPanel
  },
  methods: {
    resizeEnd(containerElement) {
      this.$refs.watchDetailPanel.resizeChart(window.innerWidth - containerElement.offsetWidth - SPACE_OFFSET);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.upper-workspace {
  width: 100%;
  height: 100%;
}
.multipane-resizer {
  margin-left: 0 !important;
  width: 8px !important;
  left: 0 !important;
  background: #222;
}
</style>
