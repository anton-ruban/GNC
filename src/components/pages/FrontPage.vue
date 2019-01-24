<template>
  <div class="front-page">
    <div class="header">
      <ul class="nav-bar">
        <li class="nav-item">
          为什么选择我们？
        </li>
        <li class="nav-item">平台</li>
        <li class="nav-item">产品</li>
        <li class="nav-item">价格</li>
        <li class="nav-item">专家观点</li>
        <li class="nav-item">支持</li>
      </ul>
      <v-btn class="header-getstarted" large depressed color="#06a53b" @click="getStarted()">立即开户</v-btn>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FrontPage',
  components: {
  },
  methods: {
    getStarted () {
      this.$router.push({ path: 'warning' })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.front-page {
  width: 100%;
  min-width: 800px;
  .header {
    position: fixed;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fdfbfb;
    border-bottom: 1px solid #ccc;
    .nav-bar {
      margin: 0 auto;
      display: flex;
      align-items: center;
      .nav-item {
        cursor: pointer;
        display: inline-block;
        font-size: 22px;
        font-weight: 500;
        margin: 0 18px;
        color: #888;
        list-style-type: none;
        &:hover {
          color: #111;
        }
      }
    }
    .header-getstarted {
      position: absolute;
      right: 40px;
      top: 23px;
      color: #fff;
    }
  }
  .content {
    padding-top: 100px;
  }
}
</style>
