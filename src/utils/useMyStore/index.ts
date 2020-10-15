import { computed } from 'vue';
import { useStore } from 'vuex';

const useMyStore = () => {
  const store = useStore();
  const isShow = computed(() => {
    return store.state.isShow;
  });
  return {
    store,
    isShow
  };
};

export default useMyStore;
