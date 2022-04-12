import './App.css';

// components
import ButtonCounter from './components/ButtonCounter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h2>Intro React App</h2>
      <hr />
      { /* an example of working with useState and useEffect, with button clicking counters  */}
      <ButtonCounter />
      <hr />
      { /* an example of working with axios/promises to retrieve data from APIs  */}
      <TodoList />
    </div>
  );
}

export default App;
