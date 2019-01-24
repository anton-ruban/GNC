<template>
  <div class="head">
    <v-btn small icon class="back-button" @click="$emit('back')" v-if="!hideBack">
      <v-icon>chevron_left</v-icon>
    </v-btn>
    <h2>{{title}}</h2>
    <v-btn small icon @click="$emit('close')" class="close-button" v-if="!hideClose">
      <v-icon>close</v-icon>
    </v-btn>
    <v-divider></v-divider>
  </div>
</template>

<script>

export default {
  name: 'TitleBar',
  props: {
    title: String,
    hideBack: Boolean,
    hideClose: Boolean,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .head {
    height: 41px;
    line-height: 41px;
    position: relative;
    h2 {
      font-size: 14px;
      text-align: center;
      color: #888;
    }
    .back-button {
      color: #888;
      position: absolute;
      margin: 0;
      left: 6px;
      top: 6px;
      .v-icon {
        font-size: 15px;
      }
    }
    .close-button {
      color: #888;
      position: absolute;
      margin: 0;
      right: 6px;
      top: 6px;
      .v-icon {
        font-size: 15px;
      }
    }
  }
</style>
