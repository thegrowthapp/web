import axios from 'axios'

import { fetchUserUrl } from './endpoints/userApi'

export function fetchUser(id) {
  return {
    type: 'FETCH_USER',
    payload: axios.get(fetchUserUrl(id))
  }
}
