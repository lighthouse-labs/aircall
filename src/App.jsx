import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './Header.jsx'
import Navigation from './components/Navigation.jsx'
import CallList from './components/CallList.jsx'
import CallDetails from './components/CallDetails.jsx'

const App = () => {
  const [callData, setCallData] = useState([
    //   {
    //     id: 7834,
    //     created_at: '2018-04-19T09:38:41.000Z',
    //     direction: 'outbound',
    //     from: 'Pierre-Baptiste Béchu',
    //     to: '06 46 62 12 33',
    //     via: 'NYC Office',
    //     duration: '120',
    //     is_archived: false,
    //     call_type: 'missed',
    //   },
    //   {
    //     id: 7833,
    //     created_at: '2018-04-18T16:59:48.000Z',
    //     direction: 'outbound',
    //     from: 'Jonathan Anguelov',
    //     to: '06 45 13 53 91',
    //     via: 'NYC Office',
    //     duration: '60',
    //     is_archived: false,
    //     call_type: 'missed',
    //   },
    //   {
    //     id: 7832,
    //     created_at: '2018-04-18T16:53:22.000Z',
    //     direction: 'inbound',
    //     from: '06 19 18 23 92',
    //     to: 'Jonathan Anguelov',
    //     via: 'Support FR',
    //     duration: '180',
    //     is_archived: false,
    //     call_type: 'answered',
    //   },
    //   {
    //     id: 7831,
    //     created_at: '2018-04-18T16:42:55.000Z',
    //     direction: 'inbound',
    //     from: '06 34 45 74 34',
    //     to: 'Xavier Durand',
    //     via: 'Support FR',
    //     duration: '180',
    //     is_archived: false,
    //     call_type: 'answered',
    //   },
    //   {
    //     id: 7830,
    //     created_at: '2018-04-18T16:23:43.000Z',
    //     direction: 'inbound',
    //     from: '+33 6 34 45 74 34',
    //     to: null,
    //     via: 'Support FR',
    //     duration: '120',
    //     is_archived: false,
    //     call_type: 'voicemail',
    //   },
    //   {
    //     id: 7829,
    //     created_at: '2018-04-18T15:43:32.000Z',
    //     direction: 'inbound',
    //     from: '+33 6 34 45 74 34',
    //     to: 'Olivier Pailhes',
    //     via: 'Spain Hotline',
    //     duration: '300',
    //     is_archived: false,
    //     call_type: 'answered',
    //   },
  ])

  useEffect(() => {
    axios
      .get('https://aircall-job.herokuapp.com/activities')
      .then((res) => setCallData(res.data))
  }, [])

  return (
    <div className="container">
      <Header />
      <div className="container-view">Some activities should be here</div>
      <CallList callData={callData} />
      <CallDetails />
      <Navigation />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App
