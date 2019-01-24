<template>
  <div class="text-xs-center">
    <v-dialog
      :value="isOpenContractDialog"
      @input="toggleOpenContractDialog($event)"
      width="300"
    >
      <v-btn class="open-button" depressed slot="activator" small>申请开通合约权限</v-btn>
      <v-card>
        <TitleBar title="申请开通合约权限" hideBack hideClose/>
        <v-card-text>
          尊敬的客户您好，如果您想开通合约权限，请发送邮件到***@***.com。 请注明账号用户名，交易所和合约名称，谢谢配合！
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            small
            @click="toggleOpenContractDialog(false)"
          >
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TitleBar from '../controls/TitleBar.vue';

export default {
  name: 'OpenContractDialogOpener',
  components: {
    TitleBar,
  },
  methods: {
    toggleOpenContractDialog (e) {
      this.$store.commit('watch/toggleOpenContractDialog', e);
    }
  },
  computed: {
    ...mapState('watch', {
      isOpenContractDialog: state => state.isOpenContractDialog
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .open-button {
    font-size: 12px;
    margin: 0;
    padding: 0 10px;
    height: 24px;
  }
</style>
