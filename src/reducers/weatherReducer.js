import { FETCH_WEATHER } from '../actions'

export default (state=[], action) => {

  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.status===200 ? [ action.payload.data, ...state ] : state
  }

  return state
}