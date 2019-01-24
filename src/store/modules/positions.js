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
      { text: '盈/亏 (USD)', value: 'plUSD', align: 'right' },
      { text: '盈亏百分比%', value: 'price', align: 'right' },
      { text: '风险敞口', value: 'exposure', align: 'right' },
      { text: '', value: '', align: 'right' }
    ],
    data: [
      {
        value: false,
        product: 'XAU/USD',
        status: '开市价',
        ls: '买入',
        amount: 2,
        open: 1278.31,
        close: 1278.32,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'XAU/CNH',
        status: '开市价',
        ls: '买入',
        amount: 2,
        open: 8703.21,
        close: 8703.25,
        stop: null,
        limit: null,
        pl: 986,
        plUSD: 984,
        price: 8.10,
        exposure: '13.145USD'
      },
      {
        value: false,
        product: 'USD/CNH',
        status: '开市价',
        ls: '买入',
        amount: 2,
        open: 6.8063,
        close: 6.8065,
        stop: null,
        limit: null,
        pl: -986,
        plUSD: -984,
        price: -8.10,
        exposure: '13.145USD'
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
