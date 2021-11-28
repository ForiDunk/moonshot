import {
  GET_UPCOMING_LAUNCHES_FAIL,
  GET_UPCOMING_LAUNCHES_REQUEST,
  GET_UPCOMING_LAUNCHES_SUCCESS
} from "../types/launchesTypes"

export const LAUNCHES_API = "https://lldev.thespacedevs.com/2.2.0";

export const getUpcomingLaunches = (options?: {}) => async (dispatch: any) => {
  dispatch({ type: GET_UPCOMING_LAUNCHES_REQUEST });

  try {
  const response: any = await fetch(`${LAUNCHES_API}/launch/upcoming`, options);
    if (response?.status >= 400) {
      console.error(response);
      throw new Error('something went wrong');
    }
    const data = await response.json();
    dispatch({ type: GET_UPCOMING_LAUNCHES_SUCCESS, payload: data?.results })
  } catch(error) {
    dispatch({ type: GET_UPCOMING_LAUNCHES_FAIL, payload: error?.message || 'something went wrong' })
  }
};

