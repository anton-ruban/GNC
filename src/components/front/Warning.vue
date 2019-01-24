<template>
  <div class="warning-container">
    <h1>风险警示</h1>
    <p>
      Consumer advisory. Crypto currencies trading (involving bitcoin, litecoin, etc.) is always accompanied by high risks. The market of crypto currencies represents
      new and unstudied economic reality without any guarantees of its growth. Ath the present time crypto currencies are limitedly used in commercial trade, but
      speculators use them rather widely which results is one of the reasons of high volatility and can negatively affect investments into crypto currencies. In order to
      participate in crypto currencies trading it is necessary to adequately evaluate the benefits and risks of investments and fully understand that one of the
      probable cases of such activity can be a complete loss of investments. None of the materials published on this website should be considered as the proposal of
      selling or buying crypto currency from digifinex.com. Users are advised to read the Legal Agreements section carefully.<br/><br/>
      比特币、莱特币等数字货币系特殊的副以商品，作为互联网上的商品买卖行为，晋通民众在自担风险的前提下拥有参与的自由。数字货币行业目前存在很多不确 定，不可控的风险因素（如预挖、暴污长暴跌、庄家
      操控、团阶解散、技术缺陷等），导致交易具有极高的风险。数字币交易所仅为数字货币等虚拟商品的爱好 者提供一个自由的网上交换平台，对在数字币交易所平台交换的数字货币等虚拟商品的来源、价值网站运
      营方不承担州可审查、担保、卿尝的法律责任。 <br/><br/>
      请您务必汪意以下几点：<br/>
      1．警惕虚假宣传，不要听信州可币值会永远上涨的宣传，数字货币作为一种念以商品，具有极高的风险，很可能出现价值归零的情况。 <br/>
      2．对于拍犷和运营方的市场承诺，需要谨慎判别，目前并没有相关法律能保证其兑现承诺，数字币交易所不刽洲引可数字货币进行背书和承诺。 <br/>
      3．坚决拒绝多层次传销组织，在我国参与该类组织是玉法行为，造成的一切后果自负，平创寻酉治相关撕去部门的要求进行调查、取证。<br/>
      4．根据新加坡反洗钱法<a>《Anti-Money Laundering/Countering the Financing of Terrorism and Targeted Financial Sanctions》</a>等有关法律规定，严格禁止利用平 刽断于洗钱等违法犯=活动，平台将
      酉治相关执法部门的要菊兰行调查、取证。 <br/>
      5．数字货币和数字积分等念以商品所对应的实物财产和持有者享有的权利存在因发行方等义务相关方破产，关闭或违法百巴霏等其他经营风险导致无去兑现的风 险。<br/>
      6．在l数字币交易所汪朋参与交换的用户，应保证注册身份信息的真实、准确，保困以交换的数字货币等虚拟商品的来源台祛。因信息不真实造成的州可问题， 平台概不负责。 <br/>
      7．因新加坡国家法律，法规及政策性交件的制定和修改，导致数字货币等虚拟商品的交易被暂停或者禁止的，由此导啤致的全部损失由用户自行承担。 <br/>
      8.请控制风险，不要投入趟立您风险承受能力的资金，不要购买您所不了解的数字货币，数字积分等虚拟商品。 
    </p>
    <div class="checkbox-section">
      <v-checkbox
        label="我已经认真阅读以上风险提示，并已同意数字币的使用条款，隐私政策，反洗钱条例，同意在自担风险，自担损失的情况下参与交易"
        v-model="checkbox1"
        class="checkbox-item"
      ></v-checkbox>
      <v-checkbox
        label="我不是美国人也不是新加坡人"
        v-model="checkbox2"
        class="checkbox-item"
      ></v-checkbox>
    </div>
    <div class="actions">
      <v-btn large color="primary" :disabled="!checkbox1 || !checkbox2" @click="signup()">继续注册</v-btn>
      <v-btn large color="warning" @click="cancel()">取消</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Warning',
  data () {
    return {
      checkbox1: false,
      checkbox2: false,
    }
  },
  methods: {
    cancel () {
      history.back()
    },
    signup() {
      this.$router.push({ path: 'signup' })
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .warning-container {
    margin: 50px auto;
    width: 75%;
    h1 {
      text-align: center;
      margin-bottom: 50px;
      font-size: 30px;
      font-weight: 700;
      color: #121212;
    }
    p {
      font-size: 20px;
      color: #715555;
    }
    .checkbox-section {
      margin-top: 40px;
      .checkbox-item {
        margin-top: 0;
      }
    }
    .actions {
      text-align: center;
    }
  }
</style>
