<template>
  <div id="menuLink">
    <a v-for="item in menuItems" :key="item.name" @click="toPath(item.path)">
      <i :class="`iconfont ${item.icon}`"></i>
      {{ item.name }}
    </a>
  </div>
</template>

<script lang="ts">
interface MenuItem {
  name: string;
  icon: string;
  path: string;
}

import { toPathFunc } from '../../../../types';
import { defineComponent, Ref, ref } from 'vue';
import { useMyRouter } from '@/utils/useMyRouter';
export default defineComponent({
  name: 'myMenu', // Do not use built-in or reserved HTML elements as component id: menu
  setup() {
    const { toPath } = useMyRouter();
    const menuItems: Ref<MenuItem[]> = ref([
      { name: '首页', icon: 'icon-shouye1-copy', path: '/' },
      {
        name: '文章列表',
        icon: 'icon-16pxwenzhang',
        path: '/article'
      },
      { name: '云相册', icon: 'icon-xiangce', path: '/photos' },
      { name: '个人信息', icon: 'icon-guanyu', path: '/profile' },
      { name: '留言板', icon: 'icon-liuyan', path: '/message' },
      {
        name: 'GitHub',
        icon: 'icon-git',
        path: 'https://github.com/WangMaoquan'
      },
      { name: '登陆 / 注册', icon: 'icon-denglu', path: '/login' }
    ]);

    return {
      menuItems,
      toPath
    };
  }
});
</script>

<style lang="scss" scoped>
#menuLink {
  display: flex;
  height: 3rem;
  justify-content: center;
  align-items: center;
  a {
    font-family: '微软雅黑';
    color: #f2f2f2;
    margin: 0 1rem;
    padding: 0.3rem;
    font-size: 13px;
    transition: all 0.5s;
  }
  a:hover {
    background: #222;
    border-radius: 5px;
    color: lightgreen;
  }
}
</style>
