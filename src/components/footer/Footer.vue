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
          <span class="info-label">可用现金</span>
          <span class="info-text">99,746.39</span>
        </div>
        <div class="flex-container">
          <span class="info-label">账户总值</span>
          <span class="info-text">90,052.30</span>
        </div>
        <div class="flex-container">
          <span class="info-label">初始保证金可用</span>
          <span class="info-text">68,119.74</span>
        </div>
        <div class="flex-container">
          <span class="info-label">保证金占用比例</span>
          <span class="info-progress-bg">
            <span class="progress-bar" style="width: 75.64%;"></span>
          </span>
          <span class="info-text">24.36%</span>
        </div>
      </div>
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
  min-height: 34px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: #444;
  flex: 0 0 auto;
  margin-bottom: 8px;
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
      overflow: hidden;
      align-items: center;
      display: flex;
      flex: 1 0 auto;
      margin: 0;
      margin-top: -8px;
      .flex-container {
        display: flex;
        align-items: center;
        margin-right: 16px;
        flex: 0 0 auto;
        width: auto;
        .trial {
          width: 170px;
          line-height: 20px;
          outline: 1px solid #555;
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
          background: #555;
          &:hover {
            background: #666;
            color: #eee;
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
            background: #222;
            width: 75.67%;
            right: 0;
            height: 0.67rem;
          }
        }
      }
    }
  }
}
</style>
