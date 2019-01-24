<template>
  <div class="main-menu">
    <div>
      <nav>
        <router-link to="/main/trading">交易</router-link>
        <router-link to="/main/news">新闻与研究</router-link>
        <!-- <router-link to="/main/">账户</router-link> -->
      </nav>
    </div>
    <div class="search">
      <input type="search" placeholder="搜索产品" value=""/>
      <i class="fa fa-search"></i>
      <div></div>
      <button class="search-dropdown btn" type="button">
        <i class="fa fa-angle-down"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-menu {
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
}
nav {
  display: flex;
  flex: 1 0 auto;

  a {
    font-size: 14px;
    text-transform: uppercase;
    background: transparent;
    line-height: 1em;
    font-weight: bold;
    text-align: center;
    display: block;
    color: #888;
    width: 100%;
    white-space: nowrap;
    padding: 6.5px 8px;
    &:hover {
      color: #111;
    }
    &.router-link-active {
      color: #111;
    }
  }
}
.search {
  margin: 0 16px;
  position: relative;
  input[type=search] {
    width: 180px;
    padding-left: 28px;
    text-overflow: ellipsis;
    background-color: #666;
    color: #ddd;
    outline: 0;
    border: 1px solid #ddd;
    border-radius: 0;
    display: block;
    height: 24px;
    padding-right: 36px;
    &::placeholder {
      color: #aaa;
      font-style: italic;
    }
    &:focus {
      background: #888;
      color: #fff;
    }
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
  i {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 8px;
    font-size: 16px;
    height: 20px;
    color: #ddd;
    line-height: 24px;
    pointer-events: none;
  }
  .search-dropdown {
    position: absolute;
    right: 24px;
    width: auto;
    top: 0;
    bottom: 0;
    padding: 0;
    cursor: pointer;
    i {
      color: #aaa;
    }
  }
}
</style>
