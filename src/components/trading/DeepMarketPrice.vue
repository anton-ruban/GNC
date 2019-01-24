<template>
  <div class="market-price">
    <v-data-table
      :headers="marketPrices.headers"
      :items="marketPrices.data"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.pendingOrder1 }}</td>
        <td>{{ props.item.sellingPrice }}</td>
        <td class="graph-td">
          <div class="graph">
            <div class="left">
              <div :style="{width: (props.item.pendingOrder1 > props.item.pendingOrder2 ? 100 : props.item.pendingOrder1 * 100 / props.item.pendingOrder2)  + '%'}" class="blueBlock"></div>
            </div>
            <div class="right">
              <div :style="{width: (props.item.pendingOrder2 > props.item.pendingOrder1 ? 100 : props.item.pendingOrder2 * 100 / props.item.pendingOrder1)  + '%'}" class="redBlock"></div>
            </div>
          </div>
        </td>
        <td>{{ props.item.buyingPrice }}</td>
        <td>{{ props.item.pendingOrder2 }}</td>
      </template>
    </v-data-table>
    <div class="text-section" v-if="isOpenDetails">
      <div><b>Level 2 数据/订单簿</b></div>
      <div>可用时需要订阅</div>
    </div>
    <a @click="toggleDetails(!isOpenDetails)">{{isOpenDetails ? '隐藏深度行情' : '显示深度行情'}}</a>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'DeepMarketPrice',
  components: {
  },
  methods: {
    toggleDetails(e) {
      this.$store.commit('marketPrices/toggleDetails', e);
    }
  },
  computed: {
    ...mapState('marketPrices', {
      marketPrices: state => state.marketPrices,
      isOpenDetails: state => state.isOpenDetails,
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.market-price {
  text-align: center;
  background: #fff;
  .graph-td {
    width: 132px;
    .graph {
      width: 100%;
      height: 8px;
      background: #ddd;
      .left {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        .blueBlock {
          height: 8px;
          background: #39d;
        }
      }
      .right {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        .redBlock {
          height: 8px;
          background: #e22;
        }
      }
    }
  }
  .text-section {
    color: #888;
    font-size: 14px;
    color: #888;
    padding: 8px;
  }
  a {
    color: #39d;
    text-decoration: none;
    font-size: 12px;
  }
}
</style>
