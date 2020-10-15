import { createStore } from 'vuex';

export default createStore({
  state: {
    isshow: false,
    fontColor: false,
    Color: '#333',
    LoadingShow: false,
    LoadingTitle: '正在加载请稍后...',
    baseURL: 'http://localhost:3000'
  },
  mutations: {
    updateShow(state, payload) {
      state.isshow = payload;
    },
    updatefont(state, payload) {
      state.fontColor = payload;
      payload ? (state.Color = '#fff') : (state.Color = '#333');
    },
    LoadingTitleChange(state, payload) {
      state.LoadingTitle = payload.title;
      state.LoadingShow = payload.isshow;
    }
  },
  actions: {},
  modules: {}
});
