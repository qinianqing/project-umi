import { queryItem } from '../services/api'
export default {
  state: {
    items: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/item') {
          dispatch({
            type: 'fetch'
          })
        }
      })
    },
  },
  reducers: {
    update(state,action) {
      return { ...state, ...action.payload }
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      const itemList = yield call(queryItem);
      console.log("dd",itemList)
      yield put({
        type:'update',
        payload:{
          items:itemList
        }
      })
    },
  },
}