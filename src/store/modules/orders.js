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
        product: '英国富时100指数, 三月 2019年',
        type: '限价',
        buySell: '买入',
        quantity: 2,
        price: 6885.50,
        currentPrice: 6918.50,
        validPeriod: '取消前有效(G.T.C.)',
        orderDate: '21-Jan-2019',
        isPending: true,
      },
      {
        value: false,
        product: 'EURO STOXX® 50 Index - Mar 2019',
        type: '限价',
        buySell: '买入',
        quantity: 2,
        price: 6885.50,
        currentPrice: 6918.50,
        validPeriod: '取消前有效(G.T.C.)',
        orderDate: '21-Jan-2019',
        isPending: false
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
