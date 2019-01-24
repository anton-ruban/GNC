<template>
  <div class="select-control">
    <v-btn depressed small icon @click="$emit('change', selectedIndex - 1)" :disabled="selectedIndex === 0">
      <v-icon>chevron_left</v-icon>
    </v-btn>
    <span>{{options[selectedIndex]}}</span>
    <v-btn depressed small icon @click="$emit('change', selectedIndex + 1)" :disabled="selectedIndex === options.length - 1">
      <v-icon>chevron_right</v-icon>
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'SelectByArrow',
  props: {
    selectedIndex: Number,
    options: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.select-control {
  height: 32px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .v-btn {
    margin: 0;
    i {
      color: #888;
    }
  }
  span {
    color: #333;
    white-space: nowrap;
  }
}
</style>
