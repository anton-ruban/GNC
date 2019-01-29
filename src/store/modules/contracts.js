// initial state
const state = {
  selectedContractsId: 'contracts1',
  selectedContractId: 'contract1',
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
          product: 'SPDB-AUA/CNY',
          sellAmount: 'N/A',
          sellingPrice: 281.79,
          buyingPrice: 281.79,
          buyAmount: 'N/A',
          marketPrice: 'SPDB',
          percent: '',
          fallAndRaise: '',
          overviewId: 'overview1',
          description: 'TF9 • GBP'
        },
        {
          id: 'contract2',
          value: false,
          product: 'SPDB-GLD/CNY',
          sellAmount: 'N/A',
          sellingPrice: 282.89,
          buyingPrice: 282.89,
          buyAmount: 'N/A',
          marketPrice: 'SPDB',
          percent: '',
          fallAndRaise: '',
          overviewId: 'overview2',
          description: 'TF9 • GBP'
        },
      ],
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
