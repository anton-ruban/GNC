// initial state
const state = {
  isOpenTradingPanelDialog: false,
  isOpenConfirmOrderDialog: false,
  isAddStopPanel: false,
  isShowDetails: false,
  newTrading: {
    type: {
      selectedIndex: 0,
      options: ['止损', '浮动止损', '止损限价'],
    },
    buySell: {
      selectedIndex: 0,
      options: ['买入1', '买入2'],
    },
    validPeriod: {
      selectedIndex: 0,
      options: ['取消前有效(G.T.C.) 1', '取消前有效(G.T.C.) 2'],
    },
    amount: { stepValue: 1, count: 0},
    price: {stepValue: 0.01, count: 110.05},
    stopLimitPrice: {stepValue: 0.01, count: 110.05},
    takeProfit: {stepValue: 0.01, count: 0},
    stopLoss: {stepValue: 0.01, count: 0},
  }
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
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
    state.newTrading[newTradingKey].selectedIndex = selectedIndex;
  },
  selectNewTradingCount(state, {newTradingKey, newCount}) {
    state.newTrading[newTradingKey].count = newCount;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
