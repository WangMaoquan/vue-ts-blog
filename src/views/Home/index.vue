<template>
  <div id="Home">
    <Maske />
  </div>
</template>

<script lang="ts">
import Maske from '../../components/Maske/index.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'myHome',
  components: {
    Maske
  }
});
</script>

<style lang="scss" scope>
#Home {
  width: 100%;
}
</style>
