import { useState } from "react"

interface TodoProp {
    todo: string
}
const Todo = ({todo}: TodoProp) => {
    const [done, setDone] = useState(false)
return (
    <div onClick={() => setDone(true)}>
        <li value={`${done}`}>{todo}</li>
        <button>editar</button>
        <button>deletar</button>
    </div>
)
}

export default Todo