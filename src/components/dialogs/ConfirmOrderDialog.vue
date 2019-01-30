<template>
  <v-dialog :value="isOpenConfirmOrderDialog" width="380" @input="toggleConfirmOrderDialog($event)">
    <v-card>
      <v-layout column>
        <TitleBar title="确认订单" hideBack hideClose/>
        <div class="dialog-body">
          <div class="summary">
            <img src="../../assets/fu.png"/>
            <div class="text">
            <span class="company-name">{{selectedContract.product}}</span>
            <span class="desc">{{selectedContract.description}}</span>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="details">
            <div class="item-row">
              <span class="label">账号</span>
              <span>{{newTrade.accountNumber}}</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">买入/卖出</span>
              <span>{{newTrade.buySell}}</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">手</span>
              <span>{{newTrade.amount}}</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">订单类型</span>
              <span>{{newTrade.type}}</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">价格</span>
              <span>{{newTrade.price}}</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">有效期</span>
              <span>{{newTrade.validPeriod}}</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">止盈</span>
              <span>{{newTrade.takeProfit}}</span>
            </div>
            <v-divider></v-divider>
            <div class="item-row">
              <span class="label">止损</span>
              <span>{{newTrade.stopLoss}}</span>
            </div>
            <v-divider></v-divider>
          </div>
          <div class="action-bar">
            <v-btn small depressed @click="toggleConfirmOrderDialog(false)">取消</v-btn>
            <v-btn small depressed color="#39d" class="ok-button" @click="toggleTradingPanelDialog(false)">确认</v-btn>
          </div>
        </div>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'TradingPanelDialog',
  components: {
    TitleBar,
  },
  methods: {
    toggleTradingPanelDialog (e) {
      this.$store.commit('trading/toggleTradingPanelDialog', e);
    },
    toggleConfirmOrderDialog (e) {
      this.$store.commit('trading/toggleConfirmOrderDialog', e);
    },
    toggleShowDetails (e) {
      this.$store.commit('trading/toggleShowDetails', e);
    }
  },
  computed: {
    ...mapState('trading', {
      isOpenConfirmOrderDialog: state => state.isOpenConfirmOrderDialog,
      isAddStopPanel: state => state.isAddStopPanel,
      isShowDetails: state => state.isShowDetails,
      newTrade: state => state.newTrade,
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
  position: relative;
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
  .action-bar {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    .v-btn {
      width: 175px;
      margin: 0;
      &:first-child {
        margin-right: 8px;
      }
      &.ok-button {
        color: #fff;
      }
    }
  }
}
</style>
