<template>
  <div class="action-bar">
    <button class="btn" type="button" title="2-click trading enabled">
      <i class="fa fa-circle"></i>
    </button>
    <button class="btn" type="button">
      <i class="fa fa-adjust"></i>
    </button>
    <button class="btn" type="button">
      <i class="fa fa-envelope"></i>
    </button>
    <button class="btn" type="button" title="Settings">
      <i class="fa fa-cog"></i>
    </button>
    <button class="logout btn" type="button">登出</button>
  </div>
</template>

<script>
export default {
  name: 'ActionMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.action-bar {
  display: flex;
  align-items: center;
  button {
    background: transparent;
    color: #888;
    font-size: 15px;
    text-transform: none;
    &.logout {
      white-space: nowrap;
    }
    &:hover {
      color: #111;
    }
  }
}
</style>
