<template>
  <div class="product-panel">
    <div class="head">
      <div>
        <Tab :tabs="watchTabs" :selectedTabIndex="selectedWatchTabIndex" @change="selectWatchTab($event)"/>
      </div>
      <OpenContractDialogOpener />
    </div>
    <div class="content">
      <div class="content-section">
        <div class="content-head">
          <WatchlistPicker />
          <!-- <v-btn depressed small color="#d5d5d5">编辑</v-btn> -->
        </div>
        <div class="content-body">
          <v-data-table
            :headers="contracts.headers"
            :items="contracts.data[selectedContractsId]"
            hide-actions
          >
            <template slot="items" slot-scope="props">
              <tr @click="selectRow(props.item)" :class="[{'active': selectedContractId === props.item.id}]">
                <td valign="middle"><img src="../../assets/fu.png" width="16" class="product-icon"/>{{ props.item.product }}</td>
                <td class="text-xs-right">{{ props.item.sellAmount > 0 ? props.item.sellAmount : '-' }}</td>
                <td class="text-xs-right"><div class="clickable-div" @click="toggleTradingPanelDialog(true)">{{ props.item.sellingPrice }}</div></td>
                <td class="text-xs-right"><div class="clickable-div" @click="toggleTradingPanelDialog(true)">{{ props.item.buyingPrice }}</div></td>
                <td class="text-xs-right">{{ props.item.buyAmount > 0 ? props.item.buyAmount : '-' }}</td>
                <td class="text-xs-right">{{ props.item.marketPrice }}<AvailableStatus /></td>
                <td class="text-xs-right">{{ props.item.percent }}</td>
                <td class="text-xs-right">{{ props.item.fallAndRaise }}</td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import WatchlistPicker from '../popovers/WatchlistPicker.vue';
import OpenContractDialogOpener from '../dialogs/OpenContractDialogOpener.vue';
import AvailableStatus from '../controls/AvailableStatus.vue';
import Tab from '../controls/Tab.vue';

export default {
  name: 'InstrumentPanel',
  components: {
    WatchlistPicker,
    OpenContractDialogOpener,
    AvailableStatus,
    Tab
  },
  methods: {
    toggleTradingPanelDialog (e) {
      this.$store.commit('tradingPanel/toggleTradingPanelDialog', e);
    },
    selectWatchTab(e) {
      this.$store.commit('tabs/selectWatchTab', e);
    },
    selectRow(e) {
      this.$store.commit('contracts/selectContract', e.id);
      this.$store.commit('overview/selectOverview', e.overviewId);
    }
  },
  computed: {
    ...mapState('contracts', {
      contracts: state => state.contracts,
      selectedContractsId: state => state.selectedContractsId,
      selectedContractId: state => state.selectedContractId,
    }),
    ...mapState('tabs', {
      watchTabs: state => state.watchTabs,
      selectedWatchTabIndex: state => state.selectedWatchTabIndex
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.product-panel {
  width: 100%;
  height: 100%;
  .head {
    border: 0;
    background-color: #ccc;
    padding-left: 8px;
    padding-right: 8px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content {
    padding: 8px;
    padding-top: 0;
    background-color: #ccc;
    height: calc(100% - 32px);
    .content-section {
      background: #fff;
      width: 100%;
      height: 100%;
      .content-head {
        display: flex;
        justify-content: space-between;
        .v-btn {
          font-weight: bold;
          font-size: 12px;
        }
      }
      .content-body {
        height: calc(100% - 40px);
        overflow: auto;
        .active {
          background: #eee;
        }
        .clickable-div {
          cursor: pointer;
          background: #e5e5e5;
          padding-right: 5px;
          border-radius: 2px;
          &:hover {
            background: #d5d5d5;
          }
        }
        .product-icon {
          margin-right: 4px;
          vertical-align: -20%;
        }
      }
    }
  }
}
</style>
