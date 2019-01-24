// initial state
const state = {
  isOpenContractDialog: false,
  isOpenWatchlistPicker: false,
  watchlist: {
    selectedWatch: null,
    myWatchlists: [
      {
        id: 'watch3',
        title: '我的观察列表',
        contractId: 'contracts1'
      },
      {
        id: 'watch4',
        title: 'Popular Products',
        contractId: 'contracts2'
      }
    ],
    standardWatchlist: [
      {
        id: 'watch12',
        type: 'fu',
        title: '期货',
        children: [
          {
            id: 'watch13',
            type: 'fu',
            title: '商品期货',
            contractId: 'contracts3'
          },
          {
            id: 'watch14',
            type: 'fu',
            title: '货币期货',
            contractId: 'contracts3'
          },
        ]
      },
      {
        id: 'watch0',
        type: 'fx',
        title: 'Forex',
        children: [
          {
            id: 'watch7',
            type: 'fx',
            title: 'FX Top 10',
            contractId: 'contracts1'
          },
          {
            id: 'watch11',
            type: 'fx',
            title: 'FX Top 20',
            contractId: 'contracts2'
          }
        ]
      },
      {
        id: 1,
        type: 'cfd',
        title: 'CFDs by region',
        children: [
          {
            id: 'watch8',
            type: 'cfd',
            title: 'CFDs Asian',
            contractId: 'contracts1'
          },
          {
            id: 'watch9',
            type: 'cfd',
            title: 'CFDs Australia',
            contractId: 'contracts2'
          },
          {
            id: 'watch10',
            type: 'cfd',
            title: 'CFDs Austria',
            contractId: 'contracts1'
          }
        ]
      },
      {
        id: 'watch2',
        type: 'bonds',
        title: 'Bonds Online',
        contractId: 'contracts1'
      },
    ],
    recent: [
      {
        id: 'watch7',
        type: 'fx',
        title: 'FX Top 10',
        contractId: 'contracts1'
      },
      {
        id: 'watch11',
        type: 'fx',
        title: 'FX Top 20',
        contractId: 'contracts2'
      }
    ]
  }
}

// getters
const getters = {
  selectedStandardWatch: state => {
    return state.watchlist.selectedWatch;
  }
}

// actions
const actions = {
  selectWatch ({ commit }, watch) {
    commit('selectWatch', watch);

    if ((!watch || !watch.children || watch.children.length === 0)) {
      commit('contracts/selectContractsId', watch.contractId, { root: true })
      commit('toggleWatchlistPicker', false);
    }
  }
}

// mutations
const mutations = {
  selectWatch(state, watch) {
    state.watchlist.selectedWatch = watch;
  },
  toggleWatchlistPicker(state, isOpen) {
    state.isOpenWatchlistPicker = isOpen;

    if (!isOpen) {
      state.watchlist.selectedWatch = null;
    }
  },
  toggleOpenContractDialog(state, isOpen) {
    state.isOpenContractDialog = isOpen
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
