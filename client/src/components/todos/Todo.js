import { Component } from 'react';
import TodoForm from './TodoForm';
class Todo extends Component {
  state = { editing: false }
  toggleForm = () => {
    const { editing } = this.state 
    this.setState({ editing: !editing })
  }
  render() {
    const { editing } = this.state
    const { id, title, complete, deleteTodo } = this.props
    return(
      <>
        <h1>Title: {title}</h1>
        <p>
          { 
            complete ?
            "completed" :
            "active"
          }
        </p>
        {
          editing ? 
            <TodoForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
          <button onClick={() => this.toggleForm()}>Edit</button>
        }
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </>
    )
  }
}
export default Todo;