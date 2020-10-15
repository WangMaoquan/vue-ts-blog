<template>
  <Layout />
</template>

<script lang="ts">
import Layout from './components/Layout/index.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'app',
  components: {
    Layout
  }
});
</script>

<style lang="scss" scoped>

</style>
