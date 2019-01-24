<template>
  <v-dialog :value="isOpenTradingPanelDialog" width="380" @input="toggleTradingPanelDialog($event)">
    <v-layout class="white" column>
      <TitleBar title="交易面板" hideBack @close="toggleTradingPanelDialog(false)" />
      <div class="dialog-body">
        <div class="summary">
          <img src="../../assets/fu.png"/>
          <div class="text">
            <span class="company-name">Canadian Pacific Railway Ltd</span>
            <span class="desc">CP:xtse•CAD</span>
          </div>
          <v-btn icon small><v-icon>info</v-icon></v-btn>
          <v-btn icon small><v-icon>money</v-icon></v-btn>
          <v-btn icon small><v-icon>search</v-icon></v-btn>
        </div>
        <v-divider></v-divider>
        <div class="summary-table">
          <div class="item">
            <div class="label">卖出价</div>
            <div class="value">255.270</div>
          </div>
          <div class="item">
            <div class="label">买入价</div>
            <div class="value">255.270</div>
          </div>
          <div class="item">
            <div class="label">最新价</div>
            <div class="value">255.270</div>
          </div>
          <div class="item">
            <div class="label">净涨跌</div>
            <div class="value">255.270</div>
          </div>
          <div class="item">
            <div class="label">涨跌幅%</div>
            <div class="value">255.270</div>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="clock-info">
          <div>
            <v-icon>query_builder</v-icon>
            15 分钟延时 – 18:41:25
          </div>
          <div>
            Toronto Stock Exchange
            <AvailableStatus />
          </div>
        </div>
        <div class="edit-list">
          <div class="edit-row">
            <div class="label">类型</div>
            <SelectByArrow :options="newTrading.type.options" :selectedIndex="newTrading.type.selectedIndex" @change="selectNewTradingOption('type', $event)"></SelectByArrow>
          </div>
          <div class="edit-row">
            <div class="label">买入/卖出</div>
            <SelectByArrow :options="newTrading.buySell.options" :selectedIndex="newTrading.buySell.selectedIndex" @change="selectNewTradingOption('buySell', $event)"></SelectByArrow>
          </div>
          <div class="edit-row">
            <div class="label">数量</div>
            <Counter :stepValue="newTrading.amount.stepValue" :count="newTrading.amount.count" @change="selectNewTradingCount('amount', $event)"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">价格</div>
            <Counter :stepValue="newTrading.price.stepValue" :count="newTrading.price.count" @change="selectNewTradingCount('price', $event)"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">止损限价价格</div>
            <Counter :stepValue="newTrading.stopLimitPrice.stepValue" :count="newTrading.stopLimitPrice.count" @change="selectNewTradingCount('stopLimitPrice', $event)"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">有效期</div>
            <SelectByArrow :options="newTrading.validPeriod.options" :selectedIndex="newTrading.validPeriod.selectedIndex" @change="selectNewTradingOption('validPeriod', $event)"></SelectByArrow>
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
            <Counter :stepValue="newTrading.takeProfit.stepValue" :count="newTrading.takeProfit.count" @change="selectNewTradingCount('takeProfit', $event)"></Counter>
          </div>
          <div class="edit-row">
            <div class="label">止损</div>
            <Counter :stepValue="newTrading.stopLoss.stepValue" :count="newTrading.stopLoss.count" @change="selectNewTradingCount('stopLoss', $event)"></Counter>
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
            <span>0 CAD</span>
          </div>
          <v-divider></v-divider>
          <div class="item-row">
            <span class="label">名义值</span>
            <span>0 CAD</span>
          </div>
          <v-divider></v-divider>
        </div>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import AvailableStatus from '../controls/AvailableStatus.vue';
import SelectByArrow from '../controls/SelectByArrow.vue';
import Counter from '../controls/Counter.vue';
import { mapState } from 'vuex';

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
      this.$store.commit('tradingPanel/toggleConfirmOrderDialog', e);
    },
    toggleAddStopPanel(e) {
      this.$store.commit('tradingPanel/toggleAddStopPanel', e);
    },
    toggleTradingPanelDialog (e) {
      this.$store.commit('tradingPanel/toggleTradingPanelDialog', e);
    },
    toggleShowDetails (e) {
      this.$store.commit('tradingPanel/toggleShowDetails', e);
    },
    selectNewTradingOption (newTradingKey, e) {
      this.$store.commit('tradingPanel/selectNewTradingOption', {newTradingKey, selectedIndex: e});
    },
    selectNewTradingCount (newTradingKey, e) {
      this.$store.commit('tradingPanel/selectNewTradingCount', {newTradingKey, newCount: e});
    }
  },
  computed: {
    ...mapState('tradingPanel', {
      isOpenTradingPanelDialog: state => state.isOpenTradingPanelDialog,
      isAddStopPanel: state => state.isAddStopPanel,
      isShowDetails: state => state.isShowDetails,
      newTrading: state => state.newTrading
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
      background: #ebebeb;
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
