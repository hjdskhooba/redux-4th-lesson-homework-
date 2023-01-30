import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTodo, deleteTodo} from './redux/reducers/todos'
import './app.css'
 
function App() {
  const dispatch = useDispatch()
  const todos = useSelector(store => store.todos.todos)
  const [todo, setTodo] = useState('')
  const [tumbler, setTumbler] = useState(false)
  const [tum, setTum] = useState(true)
  
  if(localStorage.getItem('todo') !== null){
    localStorage.getItem('todo', todos)
  }
  const setLocalStorage = () => {
    localStorage.setItem('todo', JSON.stringify(todos))
  }
  const toding = (e) => {
    e.preventDefault()
    if(todo !== ''){
      setTodo('')
      dispatch(addTodo(todo))
    }else{
      console.log('Nothing to do')
    }
  }
  const editing = (chosen, index)=>{
    if(todo === ''){
      dispatch(deleteTodo(index))
      setTodo(chosen)
    }
  }
  const del = (index)=>{
    dispatch(deleteTodo(index))
  }
  const searcher = () => {
    if(tumbler){
      return <input type='search' className='search'/>
    }
  }
  return (
    <div className="App" style={{textAlign:'center'}}>
      <div className='container'>
        <div className='inner'>
          <div className='all'>
          <h3>Redux Todo list</h3>
          <form onSubmit={toding}>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} type='text'/>
            <button onClick={()=>{
              setLocalStorage()
              dispatch(toding)
              }}>add</button>
          </form>
          <ul style={{listStyle: 'none'}}>
            {
              todos.map((item, index) => (
                <li className='todo' key={item.id}>
                  <span onClick={()=>setTum(!tum)} className={tum ? 'todoText' : 'todoText done'}>{item.text}</span>
                    <div className='Box for checkBox'>
                      <button className='delete' onClick={()=>del(index)}>Delete todo</button>
                      <div className='ny'>
                        <input type='checkbox' id='important' name='important'/>
                        <label style={{paddingTop: '4px'}}> URG!</label>
                        <button onClick={()=>editing(item.text, index)}>✏️</button>
                      </div>
                    </div>
                </li>
              ))}
          </ul>
          </div>
          <div className='forDf'>
            <button style={{width: '60px'}} onClick={()=>{setTumbler(!tumbler)}}>{tumbler ? 'X' : 'search'}</button>
            <br/>{searcher()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;