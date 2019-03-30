import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';
import request from '@/utils/request';

export async function fakeRegister(params: any) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export default {
  namespace: 'register',

  state: {
    status: undefined,
  },

  effects: {
    *submit({ payload }: any, { call, put }: any) {
      const response = yield call(fakeRegister, payload);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
  },

  reducers: {
    registerHandle(state: any, { payload }: any) {
      setAuthority('user');
      reloadAuthorized();
      return {
        ...state,
        status: payload.status,
      };
    },
  },
};
