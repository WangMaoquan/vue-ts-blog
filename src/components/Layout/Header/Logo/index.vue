<template>
  <div id="logocontent">
    <div class="logo_name">
      <i class="meun iconfont icon-toggle" @click="showMenu"></i>
      <img
        v-show="isHome"
        src="../../../../assets/images/logo.jpg"
        alt
      />
      <p v-show="isHome">DECADE</p>
      <i
        @click="toPath('./category')"
        class="search iconfont icon-search1"
      ></i>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default defineComponent({
  name: "logo",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const isHome = computed(() => {
      return route.name !== 'home'
    })
    const toPath = (pathName: string) => {
      router.push(pathName)
    }

    const store = useStore();

    const { isShow } = toRefs(store.state)
    // console.log(isShow)
    const showMenu = () => {
      store.commit("updateShow", !isShow.value)
    }


    return {
      isHome,
      toPath,
      showMenu
    }
  }
});
</script>

<style lang="scss" scope>
#logocontent {
  .logo_name {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.8rem;
    position: relative;
    user-select: none;
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      // font-weight: bold;
      color: lightgreen;
      animation: triggerColor 7s infinite alternate;
    }
    img {
      width: 3.5rem;
      height: 3.5rem;
      margin-top: -2.2rem;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      opacity: 0.9;
    }
  }
  @media screen and(max-width:992px) {
    .meun,
    .search {
      display: block !important;
    }
  }
  .meun,
  .search {
    position: absolute;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
    display: none;
    top: 0.4rem;
  }
  .meun {
    left: 2rem;
  }
  .search {
    right: 2rem;
  }
  .meun:hover,
  .search:hover {
    color: rgb(100, 177, 240);
  }
}
</style>
