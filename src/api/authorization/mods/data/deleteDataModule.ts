/**
 * @description 删除模块
 */

import { initRequest } from '../../../../common';
import Config from 'react-native-config';

const backEndUrl = Config['authorization'];

// 初始值
export const init = undefined;
// 接口地址
export const url = '/data/module/delete';

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.post(backEndUrl + '/data/module/delete', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params,
  });
  return result;
}
