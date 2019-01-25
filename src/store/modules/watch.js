// initial state
const state = {
  isOpenContractDialog: false,
  isOpenWatchlistPicker: false,
  watchlist: {
    selectedWatch: null,
    myWatchlists: [
      {
        id: 'watch3',
        title: '我的行情列表',
        contractId: 'contracts1'
      },
    ],
    standardWatchlist: [],
    recent: [
      {
        id: 'watch7',
        type: 'fu',
        title: 'SPDB-AUA/CNY',
        contractId: 'contracts1'
      },
      {
        id: 'watch11',
        type: 'fu',
        title: 'SPDB-GLD/CNY',
        contractId: 'contracts1'
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
