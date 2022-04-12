import { useEffect, useState } from "react";
import axios from "axios"


function Tuesday(props) {
  // state
  const [todoList, setTodoList] = useState([])
  
  // resources
  const getResources = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
      
      console.log("our data in our response", response.data)

      setTodoList(response.data)

      // this line of code will wait until the above line completes
      console.log("//// [3]")
    }
    catch (e) {
      console.error(e)
    }
  }

  // event handlers
  const addNewTodo = async (evt) => {
    evt.preventDefault()

    const userTitle = evt.target.elements[0].value
    console.log("USER INPUT:", userTitle)

    const newTodoData = {
      title: userTitle,
      userId: 1,
      completed: false
    }

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos", newTodoData) // returns a promise, that we wait until it resolves
      console.log("response from POST call", response.data)
    }
    catch (e) {
      console.error("ERROR!!!!!!", e.response.data)
    }

    
  }

  // effects
  useEffect(() => {
    console.log("//// [1]")
    getResources() // async function (we won't wait for it to complete, for the next line to execute)
    console.log("//// [2]")
  }, []) // only call this effect one time (on initial load)
  

  // render
  const renderTodoList = () => {
    return todoList.map((item, index) => {
      return (
        <li>{ item.title }</li>
      )
    })
  }

  return (
    <div>
      <h3>Here's our To Do items (From API:)</h3>

      <form onSubmit={addNewTodo}>
        <input name="title" placeholder="enter title" />
        <button type="submit">Add New Todo</button>
      </form>
      <hr/>
      <ol>
        { renderTodoList() }
      </ol>
    
      
    </div>
  )
}

export default Tuesday;