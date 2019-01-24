<template>
  <div class="content-head">
    <div class="description">
      <h1>活跃交易者的首选</h1>
      <li class="description-item">
        <v-icon>check</v-icon>
        一个账户有35,000多个交易品种
      </li>
      <li class="description-item">
        <v-icon>check</v-icon>
        备受赞誉的交易平台
      </li>
      <li class="description-item">
        <v-icon>check</v-icon>
        备受赞誉的交易平台
      </li>
      <li class="description-item">
        <v-icon>check</v-icon>
        行业领先的价格
      </li>
      <li class="description-item">
        <v-icon>check</v-icon>
        5天24小时定制专家服务
      </li>
      <li class="description-item">
        <v-icon>check</v-icon>
        拥有25年交易经验的受监管欧盟银行
      </li>
    </div>
    <v-btn large depressed color="#06a53b" @click="getStarted()">立即开户</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  .content-head {
    background-image: url('../../assets/login-bg.png');
    background-size: cover;
    height: 600px;
    padding-left: 200px;
    padding-top: 90px;
    .description {
      color: #fff;
      h1 {
        font-size: 45px;
        margin-bottom: 35px;
      }
      .description-item {
        font-size: 18px;
        list-style-type: none;
        padding-left: 15px;
        margin-bottom: 10px;
        .v-icon {
          color: #3b78db;
        }
      }
    }
    .v-btn {
      color: #fff;
      margin-top: 30px;
      margin-left: 230px;
    }
  }
</style>
