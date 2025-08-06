import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons' 


import { v4 as uuidv4 } from 'uuid';

const Home = () => {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [finish, setfinish] = useState(true)


  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.id
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const toggleFinish = (e) => {
    setfinish(!finish)
  }



  return (

    <div className='flex justify-center items-center'>
      <div className="max-w-screen mx-auto bg-[#212529] my-8 rounded-xl p-5 min-h-[80vh] min-w-[50vw]">
        <h1 className='text-2xl font-bold text-[#F2E9E4] mt-2 ml-2'>To-dos</h1>
        <div className="add-todo ml-2">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder='Add Your Task Here'
            className=' bg-[#E9ECEF] text-[#111] min-w-[86%] rounded-l-full sm:rounded-l-full min-h-9.5 px-4 py-2 my-3 placeholder-gray-400 focus:outline-none' />
          <button
            onClick={handleAdd}
            disabled={todo.length < 3}
            className='bg-[#6C757D] min-w-[13%] rounded-r-full min-h-9.5 py-2 px-1 text-white sm:font-bold sm:text-l'>
            Add
          </button>
          <h2 className='text-xl font-bold text-[#E9ECEF] mt-2 ml-2 mb-3'>Your Task's</h2>
        </div>

        {todos.length === 0 && <div className='text-l font-medium mt-2 ml-5 text-[#F4EDE4]'>Nothing to do — add a task!</div>}
        {todos.length != 0 && <div className='text-l font-medium my-2 ml-4 text-[#F4EDE4]'>
        <input type="checkbox" onChange={toggleFinish} checked={finish} id="" /> Completed todos</div>}
        {todos.map((ele, idx) => {
          return (finish || !ele.isCompleted) &&
            <div key={ele.id} className="flex items-center justify-between rounded-lg py-2.5 px-4 mt-2 mx-2 bg-[#F8F9FA] ">
              <div className='flex gap-2.5'>
                <input type="checkbox" onChange={handleCheckbox} name="" checked={ele.isCompleted} id={ele.id} />
                <div className={ele.isCompleted ? "line-through text-gray-500" : "text-[#111]"}>
                  {ele.todo}
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={(e) => { handleEdit(e, ele.id) }} className="bg-[#343A40] text-white rounded">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button onClick={(e) => { handleDelete(e, ele.id) }} className="bg-[#343A40] text-white rounded">
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Home
