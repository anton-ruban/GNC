<template>
  <div class="status-inline">
    <div :class="[{ 'off': isOff }, 'status']"></div>
  </div>
</template>

<script>

export default {
  name: 'AvailableStatus',
  props: {
    isOff: Boolean,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.status-inline {
  width: 20px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .status {
    background: #00a800;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
}
</style>
