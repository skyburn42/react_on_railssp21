import Todo from './Todo';
const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return(
    <>  
      { todos.map( t => 
        <Todo
          key={t.id}
          // title={t.title}
          // id={t.id}
          // complete={t.complete}
          {...t}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      )}
    </>
  )
}
export default TodoList;