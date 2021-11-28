import {
  GET_UPCOMING_LAUNCHES_FAIL,
  GET_UPCOMING_LAUNCHES_REQUEST,
  GET_UPCOMING_LAUNCHES_SUCCESS
} from "../types/launchesTypes"

export const LAUNCHES_API = "https://lldev.thespacedevs.com";

export const getUpcomingLaunches = (options?: {}) => async (dispatch: any) => {
  dispatch({ type: GET_UPCOMING_LAUNCHES_REQUEST });

  try {
  const data = await fetch(`${LAUNCHES_API}/launch/upcoming`, options)
    dispatch({ type: GET_UPCOMING_LAUNCHES_SUCCESS, payload: data })
  } catch(error) {
    dispatch({ type: GET_UPCOMING_LAUNCHES_FAIL, payload: error })
  }
};

