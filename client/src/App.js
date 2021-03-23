import { Component } from 'react'
import TodoForm from './components/todos/TodoForm';
import axios from 'axios';
class App extends Component {
  state = { todos: [] }
  componentDidMount() {
    // make a api call to our rails end to get all todos
    // set the todos on to state 
  }
            // { title: 'react', complete }
  addTodo = (todo) => {
    // make a api call to add in our rails server and our db
                            // { todo: { title: 'react', complete } }
    axios.post('/api/todos', { todo })
      .then( res => {
        // add the new todo to the front end 
        const { todos } = this.state 
        this.setState({ todos: [ ...todos, res.data ] })
      })
      .catch( err => console.log(err))
  }
  updateTodo = (id, updatedTodo) => {
    // update in our back end and db with api call 
    // update the todo in the front end 
  }
  deleteTodo = (id) => {
    // make api call to delete in the back end and db
    // delete the todo in the frontend 
  }
  render() {
    return (
      <>
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
      </>
    )
  }
}
export default App;