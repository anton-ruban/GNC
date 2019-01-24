<template>
  <v-dialog :value="isOpenConfirmOrderDialog" width="380" @input="toggleConfirmOrderDialog($event)">
    <v-layout class="white" column>
      <TitleBar title="确认订单" hideBack hideClose/>
      <div class="dialog-body">
        <div class="summary">
          <img src="../../assets/fu.png"/>
          <div class="text">
            <span class="company-name">Canadian Pacific Railway Ltd</span>
            <span class="desc">CP:xtse•CAD</span>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="details">
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
        <div class="action-bar">
          <v-btn small depressed color="#ebebeb" @click="toggleConfirmOrderDialog(false)">取消</v-btn>
          <v-btn small depressed color="#39d" class="ok-button" @click="toggleTradingPanelDialog(false)">确认</v-btn>
        </div>
      </div>
    </v-layout>
  </v-dialog>
</template>

<script>
import TitleBar from '../controls/TitleBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'TradingPanelDialog',
  components: {
    TitleBar,
  },
  methods: {
    toggleTradingPanelDialog (e) {
      this.$store.commit('tradingPanel/toggleTradingPanelDialog', e);
    },
    toggleConfirmOrderDialog (e) {
      this.$store.commit('tradingPanel/toggleConfirmOrderDialog', e);
    },
    toggleShowDetails (e) {
      this.$store.commit('tradingPanel/toggleShowDetails', e);
    }
  },
  computed: {
    ...mapState('tradingPanel', {
      isOpenConfirmOrderDialog: state => state.isOpenConfirmOrderDialog,
      isAddStopPanel: state => state.isAddStopPanel,
      isShowDetails: state => state.isShowDetails,
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
