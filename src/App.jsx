import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Todo ekleme
  const addTodo = () => {
    if (input.trim() === '') return
    
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    }
    setTodos([...todos, newTodo])
    setInput('')
  }

  // Todo silme
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Todo tamamla/işaretle
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div className="container">
      <h1>My To-Do List</h1>
      
      {/* Input + Button */}
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Yeni bir todo yaz..."
        />
        <button onClick={addTodo}>Ekle</button>
      </div>

      {/* Todo Listesi */}
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            
            <span>{todo.text}</span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="delete-btn"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>

      <p className="count">Toplam: {todos.length} | Tamamlanan: {todos.filter(t => t.completed).length}</p>
    </div>
  )
}

export default App