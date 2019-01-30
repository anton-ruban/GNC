// initial state
const state = {
  isOpenTradingPanelDialog: false,
  isOpenConfirmOrderDialog: false,
  isAddStopPanel: false,
  isShowDetails: false,
  tradeOptions: {
    type: {
      selectedIndex: 0,
      options: ['限价', '止损', '市价'],
    },
    buySell: {
      selectedIndex: 0,
      options: ['买入', '卖出'],
    },
    validPeriod: {
      selectedIndex: 0,
      options: ['取消前有效(G.T.C.)', '当日有效订单', '一周', '一个月', '周末', '月末'],
    },
    amount: { stepValue: 1, count: 0},
    price: {stepValue: 0.01, count: 282.89},
    stopLimitPrice: {stepValue: 0.01, count: 282.89},
    takeProfit: {stepValue: 0.01, count: 0},
    stopLoss: {stepValue: 0.01, count: 0},
  },
  newTrade: {}
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  updateNewTrade(state, newTrade) {
    state.newTrade = newTrade;
  },
  toggleConfirmOrderDialog(state, isOpen) {
    state.isOpenConfirmOrderDialog = isOpen;
  },
  toggleTradingPanelDialog(state, isOpen) {
    if (!isOpen) {
      state.isOpenConfirmOrderDialog = false;
    }
    state.isOpenTradingPanelDialog = isOpen;
  },
  toggleAddStopPanel(state, isOpen) {
    state.isAddStopPanel = isOpen;
  },
  toggleShowDetails(state, isOpen) {
    state.isShowDetails = isOpen;
  },
  selectNewTradingOption(state, {newTradingKey, selectedIndex}) {
    state.tradeOptions[newTradingKey].selectedIndex = selectedIndex;
  },
  selectNewTradingCount(state, {newTradingKey, newCount}) {
    state.tradeOptions[newTradingKey].count = newCount;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
