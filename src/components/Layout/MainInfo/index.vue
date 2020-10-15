<template>
  <div :class="{ show: isShow }" class="MeunTab">
    <div class="profile">
      <img
        width="100"
        height="100"
        src="../../../assets/images/swiper1.jpeg"
        alt=""
      />
      <div class="profile">Decade</div>
    </div>
    <a-list style="padding-left: 1.5rem">
      <a-list-item>
        <i class="iconfont icon-qq">: 1782976211,</i>
        <i class="iconfont icon-weixin">: w92626a</i>
      </a-list-item>
      <a-list-item>
        <i @click="goPath('/home')" class="iconfont icon-shouyex">
          首页</i
        >
      </a-list-item>
      <a-list-item>
        <i @click="goPath('/photos')" class="iconfont icon-biaoti">
          云相册</i
        >
      </a-list-item>
      <a-list-item>
        <i @click="goPath('/message')" class="iconfont icon-liuyan2">
          留言板</i
        >
      </a-list-item>
      <a-list-item>
        <i @click="toGithub"
          ><GithubOutlined /> Github</i
        >
      </a-list-item>
      <a-list-item>
        <i @click="goPath('/article')" class="iconfont icon-wenzhang">
          文章列表</i
        >
      </a-list-item>
      <a-list-item>
        <i @click="goPath('/profile')" class="iconfont icon-touxiang">
          个人信息</i
        >
      </a-list-item>
      <a-list-item>
        <i @click="LoginOrRegister" class="iconfont icon-denglu"> 登陆 / 注册</i>
      </a-list-item>
    </a-list>
  </div>
</template>

<script lang="ts">
import {
  GithubOutlined
} from '@ant-design/icons-vue';
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'mainInfo',
  components: {
    GithubOutlined
  },
  setup() {

    const router = useRouter();
    const store = useStore();

    const isShow = computed(() => {
      return store.state.isShow;
    })

    const toGithub = () => {
      location.href = 'https://github.com/WangMaoquan';
    }

    const goPath = (path: string) => {
      router.push(path);
    }

    const LoginOrRegister = () => {
      if (localStorage.getItem('user')) {
        goPath('/login');
        return;
      }
      goPath('/register')
    }

    return {
      goPath,
      isShow,
      toGithub,
      LoginOrRegister
    }
  }
})
</script>

<style lang="scss" scope>
.MeunTab {
  width: 23rem;
  height: 100vh;
  background: url('../../../assets/images/wetherSon.jpg') no-repeat center;
  background-size: cover;
  position: fixed;
  left: -35rem;
  top: 3rem;
  z-index: 998;
  border-right: 1px solid lightblue;
  transition: all 0.5s ease-in-out;
  .ivu-list-item {
    border-bottom: 0;
  }
  i,
  span {
    font-size: 1.2rem;
    font-style: normal;
    margin-left: 1rem;
    color: rgb(255, 0, 106);
  }
  @media screen and (min-width: 992px) {
    i,
    span {
      font-size: 1rem;
      font-style: normal;
      margin-left: 1rem;
    }
  }
  i:hover {
    cursor: pointer;
    color: rgb(56, 255, 6);
  }
  .profile {
    text-align: center;
    div {
      text-align: center;
      color: white;
      font-size: 25px;
      position: relative;
      background: linear-gradient(yellow, red);
      // -webkit-background-clip: text;
      // -moz-background-clip: text;
      color: transparent;
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      transition: all 2s;
      box-shadow: 0 0 5px #fff;
      margin: 1rem;
    }
    img:hover {
      transform: rotate(360deg);
    }
  }
}
.show {
  left: 0;
  animation: borderFlex 0.9s;
}
@keyframes borderFlex {
  0% {
    border-top-right-radius: 500px;
    height: 0;
  }
  100% {
    border-top-right-radius: 0;
    height: 100vh;
  }
}
</style>
