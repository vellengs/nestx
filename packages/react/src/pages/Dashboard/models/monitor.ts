import { queryTags } from '@/services/api';
import { ModelType } from '@/models/connect';

interface MonitorState {
  [key: string]: any;
}

const MonitorModel: ModelType<MonitorState> = {
  namespace: 'monitor',
  state: {
    tags: [],
  },
  effects: {
    *fetchTags(_, { call, put }) {
      const response = yield call(queryTags);
      yield put({
        type: 'saveTags',
        payload: response.list,
      });
    },
  },
  reducers: {
    saveTags(state, action) {
      return {
        ...state,
        tags: action.payload,
      };
    },
  },
};

export default MonitorModel;