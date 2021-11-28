import { createStore, applyMiddleware } from 'redux'
import * as RR from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { Dispatch } from 'react'

const middleware = applyMiddleware(thunk)

const store = createStore(rootReducer, {}, composeWithDevTools(middleware))

export const useDispatch = () => RR.useDispatch<Dispatch<any>>()
export const useSelector: RR.TypedUseSelectorHook<any> = RR.useSelector

export default store
