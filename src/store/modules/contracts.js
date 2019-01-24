// initial state
const state = {
  selectedContractsId: 'contracts3',
  selectedContractId: 'contract5',
  contracts: {
    headers: [
      {
        text: '产品',
        align: 'left',
        value: 'product'
      },
      { text: '卖出数量', value: 'sellAmount', align: 'right'},
      { text: '卖出价', value: 'sellingPrice', align: 'right' },
      { text: '买入价', value: 'buyingPrice', align: 'right' },
      { text: '买入数量', value: 'buyAmount', align: 'right' },
      { text: '市价', value: 'marketPrice', align: 'right' },
      { text: '%', value: 'percent', align: 'right' },
      { text: '净涨跌', value: 'fallAndRaise', align: 'right' }
    ],
    data: {
      contracts1: [
        {
          id: 'contract1',
          value: false,
          product: 'UK 100',
          sellAmount: 0,
          sellingPrice: 6906.20,
          buyingPrice: 6906.500,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview1',
          description: 'TF9 • GBP'
        },
        {
          id: 'contract2',
          value: false,
          product: 'UK 100',
          sellAmount: 0,
          sellingPrice: 6906.20,
          buyingPrice: 6906.500,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview1',
          description: 'TF9 • GBP'
        },
      ],
      contracts2: [
        {
          id: 'contract3',
          value: false,
          product: 'CK Hutchison Holdings Ltd',
          sellAmount: 0,
          sellingPrice: 77.500,
          buyingPrice: 77.500,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview1',
          description: 'TF9 • GBP'
        },
        {
          id: 'contract4',
          value: false,
          product: 'CK Hutchison Holdings Ltd',
          sellAmount: 0,
          sellingPrice: 77.500,
          buyingPrice: 77.500,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview1',
          description: 'TF9 • GBP'
        },
      ],
      contracts3: [
        {
          id: 'contract5',
          value: false,
          product: 'XAU/USD',
          sellAmount: 0,
          sellingPrice: 1278.32,
          buyingPrice: 1278.29,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview1',
          description: 'XAU • USD'
        },
        {
          id: 'contract6',
          value: false,
          product: 'XAU/CNH',
          sellAmount: 0,
          sellingPrice: 8703.24,
          buyingPrice: 8703.19,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview2',
          description: 'XAU • CNH'
        },
        {
          id: 'contract7',
          value: false,
          product: 'XAG/USD',
          sellAmount: 0,
          sellingPrice: 15.228,
          buyingPrice: 15.221,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview3',
          description: 'XAG • USD'
        },
        {
          id: 'contract8',
          value: false,
          product: 'USD/CNH',
          sellAmount: 0,
          sellingPrice: 6.8064,
          buyingPrice: 6.8062,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview4',
          description: 'USD • CNH'
        },
        {
          id: 'contract9',
          value: false,
          product: '黄金指数',
          sellAmount: 0,
          sellingPrice: 106.52,
          buyingPrice: 106.48,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview5',
          description: 'GCJ9 • GBP'
        },
        {
          id: 'contract10',
          value: false,
          product: '有色系指数',
          sellAmount: 0,
          sellingPrice: 150.96,
          buyingPrice: 150.91,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview6',
          description: 'GCJ9 • GBP'
        },
        {
          id: 'contract11',
          value: false,
          product: '黑色系指数',
          sellAmount: 0,
          sellingPrice: 122.28,
          buyingPrice: 122.21,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview7',
          description: 'GCJ9 • GBP'
        },
        {
          id: 'contract12',
          value: false,
          product: 'Au99.99',
          sellAmount: 0,
          sellingPrice: 281.61,
          buyingPrice: 281.57,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview8',
          description: 'TF9 • GBP'
        },
        {
          id: 'contract13',
          value: false,
          product: 'Au99.95',
          sellAmount: 0,
          sellingPrice: 281.51,
          buyingPrice: 281.48,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview9',
          description: 'TF9 • GBP'
        },
        {
          id: 'contract14',
          value: false,
          product: '黄金6月期货',
          sellAmount: 0,
          sellingPrice: 282.71,
          buyingPrice: 282.59,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview10',
          description: 'TF9 • GBP'
        },
        {
          id: 'contract15',
          value: false,
          product: '黄金12月期货',
          sellAmount: 0,
          sellingPrice: 286.25,
          buyingPrice: 286.19,
          buyAmount: 0,
          marketPrice: 'TSE',
          percent: '0.00%',
          fallAndRaise: 0.00,
          overviewId: 'overview11',
          description: 'TF9 • GBP'
        },
      ]
    }
  },
}

// getters
const getters = {
  selectedContract: state => {
    const result = state.contracts.data[state.selectedContractsId].find(contract => contract.id === state.selectedContractId);
    return result;
  }
}

// actions
const actions = {
}

// mutations
const mutations = {
  selectContractsId(state, contractsId) {
    state.selectedContractsId = contractsId;
  },
  selectContract(state, contractId) {
    state.selectedContractId = contractId;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
