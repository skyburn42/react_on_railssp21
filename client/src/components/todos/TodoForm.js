import { Component } from 'react';
class TodoForm extends Component {
  state = { title: "", complete: false }
  componentDidMount() {
    if (this.props.id) {
      const { id, title, complete } = this.props 
      this.setState({ id, title, complete})
    }
  }
  // store the user input into state
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { updateTodo, id, toggleForm } = this.props 
      updateTodo(id, this.state)
      toggleForm()
    } else {
      // adding the todo the user made from state to the add function
      this.props.addTodo(this.state)
    }
    // clear out the form
    this.setState({ title: "", complete: false })
  }
  render() {
    const { title } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="title"
          value={title} 
          onChange={this.handleChange} 
          required
          placeholder="Title"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default TodoForm;