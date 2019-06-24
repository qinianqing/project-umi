
export default {
  state: 'summonedddr',
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },
  reducers: {
    update(state) {
      return `${state}_summoner`;
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
    },
  },
}
