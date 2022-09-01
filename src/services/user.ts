import { EndPoint } from '../common/constants';
import axiosI from '../setup/axios/axios.instance';

class User {
  static getUserById(id: number) {
    const params = `${EndPoint.POSTS}${id}`;
    return axiosI.get(params);
  }
}

export { User };
