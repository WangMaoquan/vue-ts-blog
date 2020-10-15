<template>
  <div id="Header">
    <a-row type="flex">
      <a-col class="logo" :xl="6" :lg="4" :md="24" :sm="24" :xs="24" order="1">
        <Logo />
      </a-col>
      <a-col
        v-show="isActive"
        class="link_meta"
        :xl="18"
        :lg="20"
        :md="0"
        :sm="0"
        :xs="0"
        order="2"
      >
        <Menu />
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import Menu from './Menu/index.vue';
import Logo from './Logo/index.vue';
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'Header',
  setup() {
    const route = useRoute();
    const isActive = computed(() => {
      return route.name !== 'home';
    })
    return {
      isActive
    }
  },
  components: { Menu, Logo }
});
</script>
