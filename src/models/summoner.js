import {querySummoner} from '../services/api';
export default {
  state: {
    summoners:[]
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/summoner') {
          dispatch({
            type: 'fetch'
          })
        }
      })
    },
  },
  reducers: {
    save(state,action) {
      return {...state,...action.payload}
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      const summonerList = yield call(querySummoner);
      yield put({
        type:'save',
        payload:{
          summoners:summonerList
        }
      })
    },
  },
}
