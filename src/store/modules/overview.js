// initial state
const state = {
  selectedOverviewId: 'overview1',
  overviews: {
    overview1: {
      latestPrice: {
        label: '最新价',
        value: 1278.32
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 1278.35,
      },
      low: {
        label: '最低价',
        value: 1278.28,
      },
      high: {
        label: '最高价',
        value: 1278.45,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 20
      }
    },
    overview2: {
      latestPrice: {
        label: '最新价',
        value: 8703.25
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 8703.26,
      },
      low: {
        label: '最低价',
        value: 8703.11,
      },
      high: {
        label: '最高价',
        value: 8703.55,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 25
      }
    },
    overview3: {
      latestPrice: {
        label: '最新价',
        value: 15.227
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 15.225,
      },
      low: {
        label: '最低价',
        value: 15.222,
      },
      high: {
        label: '最高价',
        value: 15.239,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 12
      }
    },
    overview4: {
      latestPrice: {
        label: '最新价',
        value: 6.8063
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 6.8062,
      },
      low: {
        label: '最低价',
        value: 6.8061,
      },
      high: {
        label: '最高价',
        value: 6.807,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 19
      }
    },
    overview5: {
      latestPrice: {
        label: '最新价',
        value: 106.49
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 106.55,
      },
      low: {
        label: '最低价',
        value: 106.44,
      },
      high: {
        label: '最高价',
        value: 106.58,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 250
      }
    },
    overview6: {
      latestPrice: {
        label: '最新价',
        value: 150.93
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 150.94,
      },
      low: {
        label: '最低价',
        value: 150.91,
      },
      high: {
        label: '最高价',
        value: 151.22,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 252
      }
    },
    overview7: {
      latestPrice: {
        label: '最新价',
        value: 122.24
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 122.21,
      },
      low: {
        label: '最低价',
        value: 122.21,
      },
      high: {
        label: '最高价',
        value: 122.29,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 290
      }
    },
    overview8: {
      latestPrice: {
        label: '最新价',
        value: 281.59
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 281.57,
      },
      low: {
        label: '最低价',
        value: 281.54,
      },
      high: {
        label: '最高价',
        value: 281.65,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 210
      }
    },
    overview9: {
      latestPrice: {
        label: '最新价',
        value: 281.51
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 281.48,
      },
      low: {
        label: '最低价',
        value: 281.45,
      },
      high: {
        label: '最高价',
        value: 281.69,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 22
      }
    },
    overview10: {
      latestPrice: {
        label: '最新价',
        value: 282.65
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 282.62,
      },
      low: {
        label: '最低价',
        value: 282.44,
      },
      high: {
        label: '最高价',
        value: 282.69,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 12
      }
    },
    overview11: {
      latestPrice: {
        label: '最新价',
        value: 286.22
      },
      riseAndFall: {
        label: '净涨跌',
        value: 39.45
      },
      percentChange: {
        label: '涨跌幅%',
        value: '0.53%'
      },
      open: {
        label: '开市价',
        value: 286.21,
      },
      low: {
        label: '最低价',
        value: 286.15,
      },
      high: {
        label: '最高价',
        value: 286.35,
      },
      expireDate: {
        label: '到期日',
        value: '14-Mar-2019',
      },
      lastUpdate: {
        label: '上次更新',
        value: '15:07:28',
      },
      tradingAmount: {
        label: '交易量',
        value: 19
      }
    }
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
  selectOverview(state, overviewId) {
    state.selectedOverviewId = overviewId
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
