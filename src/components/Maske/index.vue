<template>
  <div id="Maske">
    <Center class="center" />
    <div class="bg"></div>
  </div>
</template>

<script lang="ts">
import Center from '../Center/index.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'maske',
  components: {
    Center
  }
});
</script>

<style lang="scss">
#Maske {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.5s;
  z-index: 5;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
  }
  .bg {
    width: 100%;
    height: 100vh;
    animation: linears 15s infinite;
    background: linear-gradient(
      125deg,
      #2980b9,
      #633bd3,
      #8e44ad,
      #192f44,
      #27ae60
    );
    background-size: 800%;
    z-index: -99;
  }
  @keyframes linears {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
