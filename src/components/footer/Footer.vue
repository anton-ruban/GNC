<template>
  <footer id="footer" class="grid-cell g--fit">
    <div class="footer-body">
      <div class="acctsummary">
        <div class="flex-container">
          <div class="trial">
            <span class="trial-text">TRIAL_9118976</span>
            <span class="trial-text">USD</span>
          </div>
          <button class="btn info-button-box" type="button">
            <i class="fa fa-info"></i>
          </button>
        </div>
        <div class="flex-container">
          <span class="info-label">Cash available</span>
          <span class="info-text">99,746.39</span>
        </div>
        <div class="flex-container">
          <span class="info-label">Account value</span>
          <span class="info-text">90,052.30</span>
        </div>
        <div class="flex-container">
          <span class="info-label">Initial margin available</span>
          <span class="info-text">68,119.74</span>
        </div>
        <div class="flex-container">
          <span class="info-label">Margin utilisation</span>
          <span class="info-progress-bg">
            <span class="progress-bar" style="width: 75.64%;"></span>
          </span>
          <span class="info-text">24.36%</span>
        </div>
      </div>
    </div>
    <div class="data-disclaimer-link">
      Market data provided by Saxo Bank • 
      <button class="btn btn--inline btn--link" type="button">Data Disclaimer</button>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
footer {
  position: relative;
  min-height: 42px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: #ccc;
  flex: 0 0 auto;
  padding: 0;
  .footer-body {
    display: flex;
    flex: 1 0 auto;
    padding: 0;
    margin: 0;
    max-width: 100%;
    text-align: start;
    .acctsummary {
      padding: 8px 8px;
      border-right: 1px solid #b7b7b7;
      border-left: 1px solid #b7b7b7;
      overflow: hidden;
      padding-bottom: 16.5px;
      align-items: center;
      display: flex;
      flex: 1 0 auto;
      margin: 0;
      margin-top: -8px;
      padding-bottom: 16.5px;
      .flex-container {
        display: flex;
        align-items: center;
        margin-right: 16px;
        flex: 0 0 auto;
        width: auto;
        .trial {
          width: 170px;
          line-height: 20px;
          outline: 1px solid #e5e5e5;
          outline-offset: -1px;
          display: flex;
          padding: 0 8px;
          font-weight: bold;
          justify-content: space-between;
          margin-right: 8px;
        }
        .info-button-box {
          width: 24px;
          height: 24px;
          &:hover {
            background: #d5d5d5;
            color: #111;
          }
        }
        .info-label {
          margin-right: 4px;
          color: #777;
        }
        .info-progress-bg {
          margin-right: 4px;
          width: 60px;
          background-image: linear-gradient(to right,#6eb739,#faee6a 50%,#e35837);
          background-repeat: no-repeat;
          height: 0.67rem;
          position: relative;
          .progress-bar {
            position: absolute;
            background: #ddd;
            width: 75.67%;
            right: 0;
            height: 0.67rem;
          }
        }
      }
    }
  }
  .data-disclaimer-link {
    color: #999;
    text-transform: uppercase;
    background-color: #eee;
    width: 100%;
    border-top: 1px solid #b7b7b7;
    position: absolute;
    z-index: 1;
    bottom: 0;
    line-height: 11px;
    text-align: right;
    text-align: end;
    font-size: 9px;
    button {
      display: inline-block;
      width: auto;
      vertical-align: baseline;
      color: inherit;
      text-transform: inherit;
      font-size: inherit;
      font-weight: inherit;
      padding: 0;
      line-height: inherit;
      &:hover {
        color: #39d;
        background: transparent;
      }
    }
  }
}
</style>
