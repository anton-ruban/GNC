<template>
  <div class="trading-chart-panel">
    <div class="head">
      <Tab :tabs="watchDetailTabs" :selectedTabIndex="selectedWatchDetailTabIndex" @change="selectWatchDetailTab($event)"/>
    </div>
    <div class="content">
      <template v-if="selectedWatchDetailTabIndex === 0">
        <Overview />
        <div class="divider"></div>
        <div class="scroll-panel">
          <DeepMarketPrice />
          <div class="divider"></div>
          <div class="chart-section">
            <VueTradingView :options="{
              symbol: 'BITFINEX:BTCUSD',
              width: '100%',
              height: 300,
              theme: 'light',
              style: 2,
              withdateranges: true,
            }"/>
          </div>
        </div>
      </template>
      <template v-else-if="selectedWatchDetailTabIndex === 1">
        <VueTradingView :options="{
          symbol: 'BITFINEX:BTCUSD',
          width: '100%',
          height: '100%',
          theme: 'light',
          style: 2,
          hide_side_toolbar: false,
          withdateranges: true,
        }"/>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Overview from './Overview.vue';
import VueTradingView from 'vue-trading-view';
import DeepMarketPrice from './DeepMarketPrice.vue';
import Tab from '../controls/Tab.vue';

export default {
  name: 'WatchDetailPanel',
  components: {
    Overview,
    VueTradingView,
    DeepMarketPrice,
    Tab
  },
  methods: {
    selectWatchDetailTab(e) {
      this.$store.commit('tabs/selectWatchDetailTab', e);
    }
  },
  computed: {
    ...mapState('tabs', {
      watchDetailTabs: state => state.watchDetailTabs,
      selectedWatchDetailTabIndex: state => state.selectedWatchDetailTabIndex
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.trading-chart-panel {
  width: 100%;
  height: 100%;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  .head {
    border: 0;
    background-color: #ccc;
    padding-left: 8px;
    padding-right: 8px;
    height: 32px;
  }
  .content {
    margin: 8px;
    margin-top: 0;
    height: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    .divider {
      margin-top: 8px;
    }
    .scroll-panel {
      flex: 1 1 auto;
      overflow: auto;
      .chart-section {
        width: 100%;
        height: calc(100% - 110px);
        background: #fff;
      }
    }
  }
}
</style>
