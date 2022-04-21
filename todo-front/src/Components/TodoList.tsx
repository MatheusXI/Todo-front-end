import Todo from "./Todo"

const store = ['todo1', 'todo2']
const TodoList =() => {
    return (
        <ul>
            {store.map((todo) => <Todo todo={todo}/>)}
        </ul>
    )
}
export default TodoList