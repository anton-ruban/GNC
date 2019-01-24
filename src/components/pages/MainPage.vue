<template>
  <div class="main-container">
    <Header />
    <TradingView />
    <Footer />
  </div>
</template>

<script>
import Header from '../header/Header.vue';
import Footer from '../footer/Footer.vue';
import TradingView from '../trading/TradingView.vue';

export default {
  name: 'MainPage',
  components: {
    Header,
    Footer,
    TradingView,
  },
  computed: {
  }
}
</script>

<style lang="scss">
  .main-container {
    width: 100%;
    height: 100%;
  }
</style>
