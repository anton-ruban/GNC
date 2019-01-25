<template>
  <header>
    <div class="masthead">
      <div class="logos">
        <img alt="logo" src="../../assets/logo.png"/>
        <div class="app-title">银行柜台系统连接平台</div>
      </div>
      <MainMenu/>
      <ActionMenu/>
    </div>
  </header>
</template>

<script>
import MainMenu from './MainMenu.vue';
import ActionMenu from './ActionMenu.vue';

export default {
  name: 'Header',
  components: {
    MainMenu,
    ActionMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  height: 50px;
  flex-direction: column;
  position: relative;
  display: flex;
  padding: 0;
  margin: 0;
  max-width: 100%;
  text-align: left;
  text-align: start;
}
.masthead {
  padding: 0 8px;
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  .logos {
    height: 33px;
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
    .app-title {
      font-size: 15px;
      font-weight: bold;
      line-height: 15px;
      color: #eee;
      text-transform: uppercase;
    }
  }
}
</style>
