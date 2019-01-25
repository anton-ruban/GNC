// initial state
const state = {
  orders: {
    headers: [
      {
        text: '产品',
        align: 'left',
        value: 'product'
      },
      { text: '类型', value: 'type', align: 'left'},
      { text: '买入/卖出', value: 'buySell', align: 'left' },
      { text: '数量', value: 'quantity', align: 'right' },
      { text: '价格', value: 'price', align: 'right' },
      { text: '现价', value: 'currentPrice', align: 'right' },
      { text: '止损', value: 'stopLoss', align: 'center' },
      { text: '限价', value: 'limitPrice', align: 'center' },
      { text: '有效期', value: 'validPeriod', align: 'right' },
      { text: '下单日期', value: 'orderDate', align: 'right' }
    ],
    data: [
      {
        value: false,
        product: 'GLD/CNY',
        type: '限价',
        buySell: '买入',
        quantity: 2,
        price: 281,
        currentPrice: 282.89,
        validPeriod: 'N/A',
        orderDate: '30-Jan-2019',
        isPending: true,
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
