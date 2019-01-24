<template>
  <div class="signup-container">
    <v-tabs
      slot="extension"
      :value="signUpTabs.selectedTabId"
      @input="selectSignUpTab($event)"
      fixed-tabs
      color="transparent"
    >
      <v-tab
        v-for="tab in signUpTabs.tabs"
        :key="tab.id"
        :href="`#${tab.id}`"
        class="tab-name"
      >
        {{tab.tabName}}
      </v-tab>
    </v-tabs>

    <div class="tab-container" v-if="signUpTabs.selectedTabId === 'tab-0'">
      <div class="item-row">
        <span>手机号码:</span>
        <div class="flex-container">
          <div class="dial-code">+86</div>
          <input type="text" placeholder="请输入手机号码"/>
        </div>
      </div>
      <div class="item-row">
        <span>手机验证码:</span>
        <div class="flex-container">
          <input type="text" placeholder="请输入手机验证码"/>
          <v-btn color="primary" depressed>获取验证码</v-btn>
        </div>
      </div>
      <div class="item-row">
        <span>登入密码:</span>
        <input type="password" placeholder="请输入登入密码，密码长度8-20位"/>
      </div>
      <div class="item-row">
        <span>重复密码:</span>
        <input type="password" placeholder="请重复密码"/>
      </div>
      <div class="item-row">
        <span>邀请码:</span>
        <input type="text" placeholder="非必填项"/>
      </div>
      <v-btn color="primary" large depressed class="signup-btn" @click="goTrading()">注册</v-btn>
    </div>
    <div class="tab-container" v-if="signUpTabs.selectedTabId === 'tab-1'">
      <div class="item-row">
        <span>邮箱:</span>
        <input type="password" placeholder="请输入邮箱号码"/>
      </div>
      <div class="item-row">
        <span>邮箱验证码:</span>
        <div class="flex-container">
          <input type="text" placeholder="请输入邮箱验证码"/>
          <v-btn color="primary" depressed>获取验证码</v-btn>
        </div>
      </div>
      <div class="item-row">
        <span>登入密码:</span>
        <input type="password" placeholder="请输入登入密码，密码长度8-20位"/>
      </div>
      <div class="item-row">
        <span>重复密码:</span>
        <input type="password" placeholder="请重复密码"/>
      </div>
      <div class="item-row">
        <span>邀请码:</span>
        <input type="text" placeholder="非必填项"/>
      </div>
      <v-btn color="primary" depressed large class="signup-btn" @click="goTrading()">注册</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SignUp',
  data () {
    return {
      model: 'tab-2',
      text: 'Lorem '
    }
  },
  methods: {
    goTrading() {
      this.$router.push({ path: 'main/trading' })
    },
    selectSignUpTab (e) {
      this.$store.commit('auth/selectSignUpTab', e);
    }
  },
  components: {
  },
  computed: {
    ...mapState('auth', {
      signUpTabs: state => state.signUpTabs,
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .signup-container {
    margin: 100px auto;
    width: 650px;
    border: 1px solid #ccc;
    .tab-name {
      font-size: 20px;
    }
    .tab-container {
      padding: 60px 40px 55px;
    }
    .item-row {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-bottom: 24px;
      height: 54px;
      span {
        width: 120px;
        text-align: right;
        font-weight: 500;
        margin-right: 40px;
      }
      .flex-container {
        display: flex;
        flex: 1;
        align-items: center;
        .dial-code {
          width: 75px;
          text-align: center;
          background: #fff;
          line-height: 54px;
          border:1px solid #ddd;
        }
        .v-btn {
          margin-top: 0;
          margin-bottom: 0;
          height: 54px;
          margin-right: 0;
        }
      }
      input {
        line-height: 54px;
        background: #fff;
        border: 1px solid #ddd;
        flex: 1;
        padding: 0 10px;
      }
    }
    .signup-btn {
      margin-left: 160px;
      width: calc(100% - 160px);
    }
  }
</style>
