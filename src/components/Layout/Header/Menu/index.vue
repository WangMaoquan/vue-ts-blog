<template>
  <div id="menuLink">
    <a
      v-for="(item, index) in menuItems"
      :key="index"
      @click="toPath(item.path)"
    >
      <template>
        {{ switchIcon(item.iconName) }}
      </template>
      {{ item.name }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref } from 'vue';
import {
  HomeOutlined,
  YoutubeOutlined,
  GithubOutlined,
  UserOutlined,
  FileTextOutlined,
  HeartOutlined,
  CameraOutlined
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'myMenu', // Do not use built-in or reserved HTML elements as component id: menu 
  setup() {
    const router = useRouter()
    const menuItems = ref([
      { name: '首页', iconName: 'HomeOutlined', path: '/' },
      {
        name: '文章列表',
        iconName: 'YoutubeOutlined',
        path: '/article'
      },
      { name: '云相册', iconName: 'CameraOutlined', path: '/photos' },
      { name: '个人信息', iconName: 'UserOutlined', path: '/profile' },
      { name: '留言板', iconName: 'FileTextOutlined', path: '/message' },
      {
        name: 'GitHub',
        iconName: 'GithubOutlined',
        path: 'https://github.com/WangMaoquan'
      },
      { name: '登陆 / 注册', iconName: 'HeartOutlined', path: '/login' }
    ]);

    const switchIcon = (iconName: string) => {
      return h(iconName);
    };

    const toPath = (path: string) => {
      router.push(path);
    }

    return {
      menuItems,
      switchIcon,
      toPath
    };
  },
  components: {
    HomeOutlined,
    YoutubeOutlined,
    GithubOutlined,
    UserOutlined,
    FileTextOutlined,
    HeartOutlined,
    CameraOutlined
  }
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'codeleilei';
  src: url('../../../../assets/font/2012DingYongKangYingBiKaiShuXinBan-2.ttf');
}
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

