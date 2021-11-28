import React, { useState } from 'react'
import './App.css'
import { getUpcomingLaunches } from './redux/actions/launchesActions'
import { useDispatch, useSelector } from './redux/store'

function App() {
  const dispatch = useDispatch()
  const [searched, setSearched] = useState(false)

  const { results, status, error } = useSelector((state) => state.launchesReducer)

  const getLaunches = () => {
    dispatch(getUpcomingLaunches())
    setSearched(true)
  }

  return (
    <div>
      <div>title</div>
      <div>some text and filter</div>
      <button onClick={getLaunches}>get launches</button>
      {status === 'loading' && <div>spinner</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'idle' && !!results?.length && <div>map</div>}
      {status === 'idle' && !results?.length && searched && <div>sorry, no results</div>}
    </div>
  )
}

export default App
