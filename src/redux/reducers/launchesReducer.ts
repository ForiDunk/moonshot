import {
  GET_UPCOMING_LAUNCHES_FAIL,
  GET_UPCOMING_LAUNCHES_REQUEST, GET_UPCOMING_LAUNCHES_SUCCESS
} from "../types/launchesTypes"

interface LaunchesState {
  results: Array<any>,
  status: 'idle' | 'loading' | 'failed';
  error: string
}

const INITIAL_STATE: LaunchesState = {
  results: [],
  status: 'idle',
  error: ''
};
export const launchesReducer = (state = INITIAL_STATE, action: any): LaunchesState => {
  switch (action.type) {
    case GET_UPCOMING_LAUNCHES_REQUEST:
      return {
        ...INITIAL_STATE,
        status: 'loading',
        error: '',
      };
    case GET_UPCOMING_LAUNCHES_SUCCESS:
      return {
        ...state,
        results: action.payload,
        status: 'idle',
      };
    case GET_UPCOMING_LAUNCHES_FAIL:
      return {
        ...state,
        results: [],
        status: 'failed',
        error: action.payload,
      };
    default:
      return state;
  }
};
