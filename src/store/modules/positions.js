// initial state
const state = {
  positions: {
    headers: [
      {
        text: '产品',
        align: 'left',
        value: 'product'
      },
      { text: '状态', value: 'status', align: 'right' },
      { text: '多/空', value: 'ls', align: 'right' },
      { text: '数量', value: 'amount', align: 'right' },
      { text: '开市价', value: 'open', align: 'right' },
      { text: '关闭', value: 'close', align: 'right' },
      { text: '止损', value: 'stop', align: 'center' },
      { text: '限价', value: 'limit', align: 'center' },
      { text: '盈/亏', value: 'pl', align: 'right' },
      { text: '盈亏(CNY)', value: 'plUSD', align: 'right' },
      { text: '盈亏百分比%', value: 'price', align: 'right' },
      { text: '风险敞口', value: 'exposure', align: 'right' },
      { text: '', value: '', align: 'right' }
    ],
    data: [
      {
        value: false,
        product: 'SPDB-AUA/CNY',
        status: 'Open',
        ls: 'Long',
        amount: 10,
        open: 309.97,
        close: 340.97,
        stop: null,
        limit: null,
        pl: -28.18,
        plUSD: -26.18,
        price: -10,
        exposure: ''
      },
      {
        value: false,
        product: 'SPDB-GLD/CNY',
        status: 'Open',
        ls: 'Long',
        amount: 2,
        open: 254.601,
        close: 311.179,
        stop: null,
        limit: null,
        pl: 28.289,
        plUSD: 26.289,
        price: 10,
        exposure: ''
      },
    ]
  },
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
