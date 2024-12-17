import React, {ReactElement, useState} from 'react';
import Todo from "./Todo";

export interface TodoProps {

}

export function TodoList(props: TodoProps): ReactElement {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState<string>("");

    // Add a new todo
    const addTodo = () => {
        if (input.trim()) {
            const newTodo: Todo = {
                id: Date.now(),
                content: input,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setInput("");
        }
    };

    // Toggle completed status
    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Delete a todo
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };


    return (
        <>
            <div style={{
                fontFamily: "Arial",
                maxWidth: "400px",
                margin: "auto"
            }}>
                <h1>Todo App</h1>
                <div style={{display: "flex", marginBottom: "10px"}}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                setInput(e.currentTarget.value);
                                addTodo();
                            }
                        }}
                        placeholder="Add a new task"
                        style={{flex: 1, padding: "5px"}}
                    />
                    <button onClick={addTodo}
                            style={{marginLeft: "5px", padding: "5px"}}>
                        Add
                    </button>
                </div>
                <ul style={{listStyle: "none", padding: 0}}>
                    {
                        todos.map((todo) => (
                            <li
                                key={todo.id}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <span
                                    onClick={() => toggleTodo(todo.id)}
                                    style={{
                                        fontWeight: todo.completed ? "normal": "bold",
                                        textDecoration: todo.completed ? "line-through" : "none",
                                        cursor: "pointer",
                                    }}
                                >
                                  {todo.content}
                                </span>
                                <button onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}