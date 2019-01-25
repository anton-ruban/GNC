<template>
  <v-app dark>
    <div id="app">
      <MainPage />
      <TradingPanelDialog/>
      <ConfirmOrderDialog/>
    </div>
  </v-app>
</template>

<script>
import TradingPanelDialog from './components/dialogs/TradingPanelDialog.vue';
import ConfirmOrderDialog from './components/dialogs/ConfirmOrderDialog.vue';
import MainPage from './components/pages/MainPage.vue';

export default {
  name: 'app',
  components: {
    MainPage,
    TradingPanelDialog,
    ConfirmOrderDialog
  }
}
</script>

<style lang="scss">
html, body, h1, h2, h3, h4, h5, h6, p, pre, dl, dd, ol, ul, menu, form, table, th, td, caption {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden !important;
  cursor: default;
  background: #eee;
}

html {
  color: #eee;
  font-family: "HelveticaNeue","Helvetica Neue","sans-serif",Arial;
  font-size: 8px;
}

body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: default;
  background: #eee;
  font-size: 12px;
  line-height: 20px;
  color: #eee;
}

a {
  color: #39d;
  text-decoration: none;
  cursor: pointer;
}

#app {
  width: 100%;
  height: 100%;
  min-width: 1024px;
  min-height: 300px;
  background-color: #222;
  overflow: auto;
}
button, select {
  text-transform: none;
  outline: 0;
  cursor: pointer;
}
button, input, optgroup, select, textarea {
  color: inherit;
  font: inherit;
  margin: 0;
  border: 0;
}
.btn {
  position: relative;
  font-size: 11px;
  line-height: 1em;
  vertical-align: middle;
  display: block;
  width: 100%;
  padding: 6.5px 8px;
  background: #e5e5e5;
  color: #eee;
  border-radius: 2px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}

.v-table {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background: none !important;
  thead {
    tr {
      height: 25px !important;
      padding: 0 8px !important;
      border: 1px solid #222 !important;
      &.v-datatable__progress {
        height: auto !important;
      }
      th {
        padding: 0 8px !important;
      }
    }
  }
  tbody {
    tr {
      border: 1px solid #222 !important;
      &:hover {
        background: #444 !important;
      }
    }
    td {
      height: 25px !important;
      font-size: 12px !important;
      padding: 0 8px !important;
    }
  }
}
// Custom scrollbars

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-thumb {
  min-height: 40px;
  background: rgba(120, 122, 147, 0.5); // 'slate gray' with opacity 0.5
}

// fix conflict css of multipan and vuetify popover
.multipane > div {
  position: initial;
}
</style>
