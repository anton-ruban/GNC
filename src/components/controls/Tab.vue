<template>
  <div>
    <!-- <span :class="[{'active': selectedTabIndex === index},'panel-title']" v-for="(tab, index) in tabs" :key="index" @click="$emit('change', index)">
      {{tab.name}}
      <template v-if="tab.subItems && selectedTabIndex === index">
        <a>( {{tab.subItems[tab.selectedSubItemIndex].name}} )</a>
      </template>
    </span> -->
    <v-menu open-on-hover offset-y v-for="(tab, tabIndex) in tabs" :key="tabIndex">
      <span
        :class="[{'active': selectedTabIndex === tabIndex},'panel-title']"
        slot="activator"
        @click="$emit('change', tabIndex)"
      >
        {{tab.name}}
        <template v-if="tab.subItems && selectedTabIndex === tabIndex">
          <a>( {{tab.subItems[tab.selectedSubItemIndex].name}} )</a>
        </template>
      </span>

      <ul v-if="tab.subItems" class="item-list">
        <li
          class="list-item"
          v-for="(subItem, subItemIndex) in tab.subItems"
          :key="subItemIndex"
          @click="$emit('subChange', {tabIndex, subItemIndex})"
        >
          <span class="item-name">{{ subItem.name }}</span>
        </li>
      </ul>
    </v-menu>
  </div>
</template>

<script>

export default {
  name: 'SelectByArrow',
  props: {
    tabs: Array,
    selectedTabIndex: Number,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .panel-title {
    padding-right: 16px;
    color: #777;
    max-width: 100%;
    overflow: hidden;
    line-height: 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: #111;
    }
    &.active {
      color: #111;
    }
  }
  .item-list {
    list-style-type: none;
    padding: 0;
    background: #fff;
    width: 150px;
    .list-item {
      padding: 2px 8px;
      color: #111;
      height: 35px;
      display: flex;
      align-items: center;
      cursor: pointer;
      border-bottom: 1px solid #ddd;
      &:hover {
        background: #eee;
      }
    }
  }
</style>
