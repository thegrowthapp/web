import BASE_URL from './base'

export function fetchUserUrl(id) {
  return `${BASE_URL}/users/${id}`
}
