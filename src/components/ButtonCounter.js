


// let count = 0

import { useState, useEffect } from "react"


function Monday(props) {
  // states
  //  a variable that React gets to oversee and React will update our screen whenever that state value updates
  let [count, setCount] = useState(0)
  let [donuts, setDonuts] = useState(0)
  
  // effects
  //  we (as developers) want to be notified and react to some state/props change
  const doSomethingWhenCountChanges = () => {
    console.log("//// new counter value:", count)
  }

  //useEffect(/* param-1: a function to call, param-2: when to call the function */)

  useEffect(doSomethingWhenCountChanges, // the function that React should call
    [count]) // dependency array ... this array simply lists what values to react to when they change
  
  useEffect(() => { // the function that React should call (anonymous function)
    console.log("//// new donuts value:", donuts)
  }, [donuts]) // the function that React should call when ANY of these values change
   // dependency array ... this array simply lists what values to react to when they change

  useEffect(() => { // the function that React should call (anonymous function)
    console.log("---- donuts OR count value changed")
  }, [donuts, count]) // the function that React should call when ANY of these values change


  // event handlers
  const handleButtonClick = () => {
    //count++ // BAD BAD BAD! WE SHOULD NOT UPDATE STATE VARIABLES DIRECTLY

    // update state so React knows about the new value
    setCount(count + 1) /// this is asynchronous
    
    
    //console.log("//// new counter value:", count)
  }

  const handleDonutButtonClick = () => {
    //count++ // BAD BAD BAD! WE SHOULD NOT UPDATE STATE VARIABLES DIRECTLY

    // update state so React knows about the new value
    setDonuts(donuts + 1) /// this is asynchronous 
  }

  // render
  const renderOutput = () => {
    return (<div>
      <h3>{`You've clicked this button ${count} times!`}</h3>
      <h3>{`You've eaten ${donuts} donuts!`}</h3>
    </div>)
  }
  
  return (
    <div>
      <button onClick={ handleButtonClick } >Click Me</button>
      <button onClick={ handleDonutButtonClick } >Eat Donuts</button>
      { renderOutput() }
    </div>
  )
}

export default Monday;