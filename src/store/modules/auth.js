// initial state
const state = {
  isLoggedIn: false,
  signUpTabs: {
    selectedTabId: 'tab-0',
    tabs: [
      {tabName: '手机汪册', id: 'tab-0'},
      {tabName: '邮箱注册', id: 'tab-1'}
    ]
  },
  phoneSignUp: {
    phoneNumber: '',
    phoneVerificationCode: '',
    password: '',
    confirmPassword: '',
    inviteCode: '',
  },
  mailSignUp: {
    email: '',
    emailVerificationCode: '',
    password: '',
    confirmPassword: '',
    inviteCode: ''
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
  selectSignUpTab(state, tabId) {
    state.signUpTabs.selectedTabId = tabId;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
