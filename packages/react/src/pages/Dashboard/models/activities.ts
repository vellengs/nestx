import { queryActivities } from '@/services/api';
import { ModelType } from '@/models/connect';

interface ActivitiesState {
  list: any[];
}

const ActivitiesModel: ModelType<ActivitiesState> = {
  namespace: 'activities',

  state: {
    list: [],
  },

  effects: {
    *fetchList(_, { call, put }) {
      const response = yield call(queryActivities);
      yield put({
        type: 'saveList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};

export default ActivitiesModel;
