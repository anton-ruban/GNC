<template>
  <div class="select-control">
    <v-btn depressed small icon @click="decrease()" :disabled="count === 0">
      -
    </v-btn>
    <span>{{count}}</span>
    <v-btn depressed small icon @click="increase()">
      +
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'SelectByArrow',
  props: {
    count: Number,
    stepValue: Number
  },
  methods: {
    decrease() {
      this.$emit('change', +(this.count - this.stepValue).toFixed(12));
    },
    increase() {
      this.$emit('change', +(this.count + this.stepValue).toFixed(12));
    }
  },
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
    color: #888;
    font-size: 18px;
  }
  span {
    color: #333;
    white-space: nowrap;
  }
}
</style>
