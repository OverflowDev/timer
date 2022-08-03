import './index.css'
import dayjs from 'dayjs'
import CountdownTimer from "./countdown/CountdownTimer";

function App() {
  // *1000 means convert to milliseconds 

  const launchTimestamp = dayjs(1722620833 * 1000)

  return (
    <div className="">
      <CountdownTimer launchTimestamp={launchTimestamp} />
    </div>
  )
  // if (!launchTimestamp) {

  //   return (
  //     <div className="">
  //       <CountdownTimer launchTimestamp={launchTimestamp} />
  //     </div>
  //   )

  // } else {
  //   return (
  //     <div className=''>
  //       <Button />
  //     </div>
  //   )
  // }
}

export default App;
