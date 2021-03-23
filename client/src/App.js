import { Component } from 'react'
import TodoForm from './components/todos/TodoForm';
import TodoList from './components/todos/TodoList';
import axios from 'axios';
class App extends Component {
  state = { todos: [] }
  componentDidMount() {
    // make a api call to our rails end to get all todos
    axios.get('/api/todos')
      .then( res => {
        // set the todos on to state 
        this.setState({ todos: res.data })
      })  
      .catch( err => console.log(err))
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
  updateTodo = (id, todo) => {
    // update in our back end and db with api call 
    axios.put(`/api/todos/${id}`, { todo })
      .then( res => {
        // update the todo in the front end 
        const todos = this.state.todos.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        this.setState({ todos })
      })
      .catch( err => console.log(err))
  }
  deleteTodo = (id) => {
    // make api call to delete in the back end and db
    axios.delete(`/api/todos/${id}`)
      .then( res => {
        // delete the todo in the frontend 
        const { todos } = this.state 
        this.setState({ todos: todos.filter( t => t.id !== id )})
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }
  render() {
    const { todos } = this.state
    return (
      <>
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          todos={todos} 
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />
      </>
    )
  }
}
export default App;