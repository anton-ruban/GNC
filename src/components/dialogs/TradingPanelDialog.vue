<template>
  <v-dialog :value="isOpenTradingPanelDialog" width="380" @input="toggleTradingPanelDialog($event)">
    <v-card>
    <v-layout column>
      <TitleBar title="交易面板" hideBack @close="toggleTradingPanelDialog(false)" />
      <div class="dialog-body">
        <div class="summary">
          <img src="../../assets/fu.png"/>
          <div class="text">
            <span class="company-name">{{selectedContract.product}}</span>
            <span class="desc">{{selectedContract.description}}</span>
          </div>
          <v-btn icon small><v-icon>info</v-icon></v-btn>
          <v-btn icon small><v-icon>money</v-icon></v-btn>
          <v-btn icon small><v-icon>search</v-icon></v-btn>
        </div>
        <v-divider></v-divider>
        <div class="summary-table">
          <div class="item">
            <div class="label">卖出价</div>
            <div class="value">{{selectedContract.sellingPrice}}</div>
          </div>
          <div class="item">
            <div class="label">买入价</div>
            <div class="value">{{selectedContract.buyingPrice}}</div>
          </div>
          <div class="item">
            <div class="label">最新价</div>
            <div class="value">{{overviews[selectedOverviewId].latestPrice.value}}</div>
          </div>
          <div class="item">
            <div class="label">涨跌价</div>
            <div class="value">{{overviews[selectedOverviewId].riseAndFall.value}}</div>
          </div>
          <div class="item">
            <div class="label">涨跌幅%</div>
            <div class="value">{{overviews[selectedOverviewId].percentChange.value}}</div>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="clock-info">
          <div>
            <v-icon>query_builder</v-icon>
            15 分钟延时 – 18:41:25
          </div>
          <div>
            SPDB
            <AvailableStatus />
          </div>
        </div>
        <div class="edit-list">
          <div class="edit-row">
            <div class="label">类型</div>
            <SelectByArrow :options="tradeOptions.type.options" :selectedIndex="tradeOptions.type.selectedIndex" @change="selectNewTradingOption('type', $event)"></SelectByArrow>
          </div>
          <div class="edit-row">
            <div class="label">买入/卖出</div>
            <SelectByArrow :options="tradeOptions.buySell.options" :selectedIndex="tradeOptions.buySell.selectedIndex" @change="selectNewTradingOption('buySell', $event)"></SelectByArrow>
          </div>
          <div class="edit-row">
            <div class="label">数量</div>
            <Counter :stepValue="tradeOptions.amount.stepValue" :count="tradeOptions.amount.count" @change="selectNewTradingCount('amount', $event)"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">价格</div>
            <Counter :stepValue="tradeOptions.price.stepValue" :count="tradeOptions.price.count" @change="selectNewTradingCount('price', $event)"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">止损限价价格</div>
            <Counter :stepValue="tradeOptions.stopLimitPrice.stepValue" :count="tradeOptions.stopLimitPrice.count" @change="selectNewTradingCount('stopLimitPrice', $event)"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">有效期</div>
            <SelectByArrow :options="tradeOptions.validPeriod.options" :selectedIndex="tradeOptions.validPeriod.selectedIndex" @change="selectNewTradingOption('validPeriod', $event)"></SelectByArrow>
          </div>
        </div>
        <div class="section-divider">
          <v-divider></v-divider>
          <a @click="toggleAddStopPanel(!isAddStopPanel)">{{isAddStopPanel ? '移除止盈/止损' : '添加止盈/止损'}}</a>
          <v-divider></v-divider>
        </div>
        <div class="edit-list" v-if="isAddStopPanel">
          <div class="edit-row">
            <div class="label">止盈</div>
            <Counter :stepValue="tradeOptions.takeProfit.stepValue" :count="tradeOptions.takeProfit.count" @change="selectNewTradingCount('takeProfit', $event)"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">止损</div>
            <Counter :stepValue="tradeOptions.stopLoss.stepValue" :count="tradeOptions.stopLoss.count" @change="selectNewTradingCount('stopLoss', $event)"></Counter>
          </div>
        </div>
        <v-btn class="order-button" small depressed color="#39d" @click="toggleConfirmOrderDialog(true)">建立订单</v-btn>
        <div class="section-divider">
          <v-divider></v-divider>
          <a @click="toggleShowDetails(!isShowDetails)">{{isShowDetails ? '隐藏详细信息' : '显示详细信息'}}</a>
          <v-divider></v-divider>
        </div>
        <div class="details" v-if="isShowDetails">
          <v-divider></v-divider>
          <div class="item-row">
            <span class="label">佣金</span>
            <span>0 CNY</span>
          </div>
          <v-divider></v-divider>
          <div class="item-row">
            <span class="label">名义值</span>
            <span>0 CNY</span>
          </div>
          <v-divider></v-divider>
        </div>
      </div>
    </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import AvailableStatus from '../controls/AvailableStatus.vue';
import SelectByArrow from '../controls/SelectByArrow.vue';
import Counter from '../controls/Counter.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'TradingPanelDialog',
  components: {
    TitleBar,
    AvailableStatus,
    SelectByArrow,
    Counter
  },
  methods: {
    toggleConfirmOrderDialog (e) {
      if (e) {
        const newTrade = {
          accountNumber: 'TRIAL_' + Date.now(),
          type: this.tradeOptions.type.options[this.tradeOptions.type.selectedIndex],
          buySell: this.tradeOptions.buySell.options[this.tradeOptions.buySell.selectedIndex],
          amount: this.tradeOptions.amount.count,
          price: this.tradeOptions.price.count,
          validPeriod: this.tradeOptions.validPeriod.options[this.tradeOptions.validPeriod.selectedIndex],
          takeProfit: this.tradeOptions.takeProfit.count,
          stopLoss: this.tradeOptions.stopLoss.count,
        }
        this.$store.commit('trading/updateNewTrade', newTrade);
      }
      this.$store.commit('trading/toggleConfirmOrderDialog', e);
    },
    toggleAddStopPanel(e) {
      this.$store.commit('trading/toggleAddStopPanel', e);
    },
    toggleTradingPanelDialog (e) {
      this.$store.commit('trading/toggleTradingPanelDialog', e);
    },
    toggleShowDetails (e) {
      this.$store.commit('trading/toggleShowDetails', e);
    },
    selectNewTradingOption (newTradingKey, e) {
      this.$store.commit('trading/selectNewTradingOption', {newTradingKey, selectedIndex: e});
    },
    selectNewTradingCount (newTradingKey, e) {
      this.$store.commit('trading/selectNewTradingCount', {newTradingKey, newCount: e});
    }
  },
  computed: {
    ...mapState('trading', {
      isOpenTradingPanelDialog: state => state.isOpenTradingPanelDialog,
      isAddStopPanel: state => state.isAddStopPanel,
      isShowDetails: state => state.isShowDetails,
      tradeOptions: state => state.tradeOptions,
    }),
    ...mapState('overview', {
      overviews: state => state.overviews,
      selectedOverviewId: state => state.selectedOverviewId
    }),
    ...mapGetters('contracts', {
      selectedContract: 'selectedContract',
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dialog-body {
  padding: 8px;
  height: 560px;
  overflow: auto;
  .summary {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    .text {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-left: 4px;
      line-height: 1;
      .company-name {
        font-size: 12px;
      }
      .desc {
        color: #888;
        margin-top: 3px;
      }
    }
    .v-btn {
      margin: 0;
      color: #888;
      i {
        font-size: 18px;
      }
    }
  }
  .summary-table {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .item {
      text-align: center;
      padding: 4px 8px;
      .label {
        margin-bottom: 4px;
        color: #888;
        font-size: 11px;
      }
    }
  }
  .clock-info {
    display: flex;
    align-items: center;
    color: #888;
    height: 20px;
    font-size: 11px;
    justify-content: space-between;
    margin-bottom: 8px;
    i {
      font-size: 14px;
    }
  }
  .edit-list {
    margin-bottom: 8px;
    .edit-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      padding-left: 8px;
      color: #888;
      background: #222;
    }
  }
  .section-divider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    margin-bottom: 8px;
    a {
      margin: 0 8px;
      color: #39d;
    }
  }
  .details {
    .item-row {
      display: flex;
      align-items: center;
      height: 21px;
      justify-content: space-between;
      .label {
        color: #888;
      }
    }
  }
  .order-button {
    margin: 0;
    width: 100%;
    color: #fff;
    font-weight: bold;
    margin-bottom: 8px;
  }
}
</style>
