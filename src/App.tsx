import React, { useEffect } from "react"
import './App.css'
import { getUpcomingLaunches } from "./redux/actions/launchesActions"
import { useDispatch, useSelector } from "./redux/store"

function App() {
  const dispatch = useDispatch();

  const { launchesReducer } = useSelector((state) => state);

  useEffect(() => dispatch(getUpcomingLaunches()), [dispatch]);

  console.log(launchesReducer);

  return (
    <div>
      App
    </div>
  )
}

export default App
