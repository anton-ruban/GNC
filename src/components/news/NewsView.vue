<template>
  <div class="main-view">
    <div class="head">
      <Tab :tabs="newsTabs" :selectedTabIndex="selectedNewsTabIndex" @change="selectNewsTab($event)"/>
    </div>
    <multipane class="workspace" layout="vertical">
      <div :style="{ width: '50%', maxWidth: '90%', minWidth: '300px', minHeight: '100%' }">
        
      </div>
      <multipane-resizer></multipane-resizer>
      <div :style="{ flexGrow: 1, zIndex: 0, }">
        
      </div>
    </multipane>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Multipane, MultipaneResizer } from 'vue-multipane';
import Tab from '../controls/Tab.vue';

export default {
  name: 'TradingView',
  components: {
    Multipane,
    Tab,
    MultipaneResizer,
  },
  computed: {
    ...mapState('tabs', {
      newsTabs: state => state.newsTabs,
      selectedNewsTabIndex: state => state.selectedNewsTabIndex
    }),
  },
  methods: {
    selectNewsTab(e) {
      this.$store.commit('tabs/selectNewsTab', e);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-view {
  height: calc(100% - 49px - 24px - 42px);
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
  .head {
    background: #ccc;
    padding: 0 8px;
  }
}
.workspace {
  width: 100%;
  height: calc(100% - 30px);
}
.panel-container {
  display: flex;
  width: 100%;
  height: 0;
}
.multipane-resizer {
  margin-left: 0 !important;
  width: 8px !important;
  left: 0 !important;
  background: #ccc;
}
</style>
