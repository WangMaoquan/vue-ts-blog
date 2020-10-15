<template>
  <div id="index" :class="`adminCssStyle ${currnetRouteNameIsNotHome === true ? 'index_container' :''} `">
    <div v-show="!ChangeMode" class="moon"></div>
    <div v-show="ChangeMode" class="night"></div>
    <lightSwitch @changeBackground="changeBackground" />
    <Header
      v-if="!isContainAdmin"
      :class="{ active: currnetRouteNameIsNotHome || isShow }"
      class="header"
    />
    <router-view v-slot="{ Component }" :class="{ router_content: currnetRouteNameIsNotHome }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <Loading class="LoadingStyle" v-show="isLoadingShow" />
    <MainInfo />
    <Footer v-if="!isContainAdmin" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watchEffect } from 'vue';
import Header from './Header/index.vue';
import Footer from './Footer/index.vue';
import MainInfo from './MainInfo/index.vue';
import lightSwitch from '../LightSwitch/index.vue';
import Loading from '../Loading/index.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
export default defineComponent({
  components: {
    Header,
    Footer,
    MainInfo,
    lightSwitch,
    Loading
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    watchEffect(() => {
      document.onclick = (e) => {
        const { className, tagName } = e.target as HTMLElement;
        if (className !== 'meun iconfont icon-toggle') {
          store.commit('updateShow', false);
        }
      };
    });

    const isContainAdmin = computed(() => {
      return route.path.includes('admin');
    });

    const ChangeMode = computed(() => {
      return store.state.fontColor;
    });

    const changeBackground = () => {
      store.commit('updatefont', !store.state.fontColor);
    };

    const isLoadingShow = computed(() => {
      return store.state.LoadingShow
    })

    const isShow = computed(() => {
      return store.state.isShow
    })


    const currnetRouteNameIsNotHome = computed(() => {
      return route.name !== 'home'
    })

    return {
      isContainAdmin,
      ChangeMode,
      changeBackground,
      isLoadingShow,
      isShow,
      currnetRouteNameIsNotHome
    };
  }
});
</script>

<style lang="scss" scoped>
.index_container {
  display: flex;
  flex-wrap: wrap;
  .moon,
  .night {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .night {
    background: url('../../assets/images/night.gif') center;
  }
  .moon {
    background: url('../../assets/images/light.jpg') center;
  }
  .router_content {
    animation: animate 2s;
  }
  .header {
    width: 100%;
    height: 3rem;
    z-index: 999;
    transition: all 0.6s;
  }
  .active,
  .current {
    position: sticky;
    background: linear-gradient(#333, #456);
    animation: animate 1s;
  }
  @keyframes animate {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .LoadingStyle {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
  }
}
.adminCssStyle {
  background: #fff !important;
}
</style>
