import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editTodo, comptodo, addTodo, removecompTodo } from '../features/TodoSlice';

function Todo() {
  const dispatch = useDispatch();
  const [change, setChange] = useState("")
  const btnref = useRef(null);
  const btn2ref = useRef(null);
  const divref = useRef(null);
  const div2ref = useRef(null);
  const inputref = useRef(null);
  const handleclick = () => {
    btnref.current.style.display = "inline"
    inputref.current.style.display = "inline"
    divref.current.style.display = "none"
    btn2ref.current.style.display = "none"
  }

  const todos = useSelector((state) => {
    return state.todos
  })
  const comp = useSelector((state) => {
    return state.comp
  })
  let progress = comp.length / (todos.length + comp.length) * 100
  console.log(progress)
  return (
    <>
      <br />
      <h1 className='text-3xl'>Todos</h1>
      <br />
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='flex flex-row gap-1.5'>
              <input type="checkbox" onChange={() => {
                div2ref.current.style.display = "inline"
                dispatch(comptodo(todo.text))
                dispatch(removeTodo(todo.id))
              }} />
              <div className='text-white' ref={divref}>{todo.text}</div>
              <input ref={inputref} value={change} onChange={(e) => setChange(e.target.value)} className='hidden text-white border border-white' />
            </div>
            <div>
              <button ref={btn2ref} onClick={handleclick} className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md mr-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.313 3 21l1.687-4.5L16.862 3.487z"
                  />
                </svg>

              </button>
              <button className='hidden text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md mr-3.5' onClick={() => {
                dispatch(editTodo({ id: todo.id, text: change }))
                divref.current.style.display = "inline"
                btn2ref.current.style.display = "inline"
                btnref.current.style.display = "none"
                inputref.current.style.display = "none"
              }} ref={btnref} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>


            </div>
          </li>
        ))}
      </ul>
      <br />
      <div className='text-3xl hidden' style={{
        display: comp.length === 0 ? 'none' : 'block'
      }} ref={div2ref}>Completed</div>
      <ul className="list-none">

        {comp.map((elem) => (
          <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={elem.id}>
            <div className='flex flex-row gap-2.5'>
              <input type="checkbox" checked onChange={() => {
                dispatch(addTodo(elem.text))
                dispatch(removecompTodo(elem.id))
              }} />
              <del className='text-white'>{elem.text}</del>
            </div>
            <button
              onClick={() => {
                dispatch(removecompTodo(elem.id))

              }}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <br />
      <div className='text-3xl mb-3.5' style={{
        display: comp.length === 0 ? 'none' : 'block'
      }} >Progress Bar</div>
      <div className="w-full bg-gray-200 rounded-full h-4" style={{
        display: comp.length === 0 ? 'none' : 'block'
      }} >
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  )
}

export default Todo
