export default function reducer(state = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    app: {
      fetching: false,
      fetched: false,
      error: null
    }
  }, action) {
    switch (action.type) {
      case 'FETCH_USER': {
        return {...state, app: {fetching: true}}
      }
      case 'FETCH_USER_REJECTED': {
        return {...state, app: {fetching: false, error: action.payload}}
      }
      case 'FETCH_USER_FULFILLED': {
        return {
          ...state,
          app: {fetching: false, fetched: true},
          user: action.payload,
        }
      }
    }

    return state
}
