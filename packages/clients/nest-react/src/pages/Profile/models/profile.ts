import { queryBasicProfile, queryAdvancedProfile } from '@/services/api';
import { ModelType } from '@/models/connect';

interface profileModelState {
  basicGoods: any[];
  advancedOperation1: any[];
  advancedOperation2: any[];
  advancedOperation3: any[];
}

const profileModel: ModelType<profileModelState> = {
  namespace: 'profile',

  state: {
    basicGoods: [],
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
  },

  effects: {
    *fetchBasic({ payload }, { call, put }) {
      const response = yield call(queryBasicProfile, payload);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    *fetchAdvanced(_, { call, put }) {
      const response = yield call(queryAdvancedProfile);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default profileModel;
