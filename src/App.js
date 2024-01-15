import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import TodoList from './Todolust';
import Searchuser from './UserList';

function App() {
  return (
    <div className="App">
      <h1>Higher Order Components</h1>
      <div className='section'>
          {/* <UserList/> */}
          <Searchuser/>
          <TodoList/>
      </div>
    </div>
  );
}

export default App;
