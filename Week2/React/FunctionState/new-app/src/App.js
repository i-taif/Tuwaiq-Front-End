import './App.css';
import Got from './images/GOT.webp'
import Friends from './images/friends.jpg'
import HTGAWM from './images/HTGAWM.jpg'
import React,{useState,useEffect} from 'react'


function App() {
  let [count, setImg]=useState(0)
  let img=[Got,Friends,HTGAWM]
  const nexImg = () => {
    if (count < img.length-1) {
      setImg(++count);
    }else{
      setImg(0)
    }
  }
  useEffect(() => {
    console.log("hello");
  
  },[console.log("world")]);
  // let [task, setTask]=useState("")
  // let [listTask, setListTask]=useState([])
  // setTask=(e)=>{
  //   task=e.target.value
  // }
  // setListTask=()=>{
  //   const obj ={
  //     name:task
  //   }
  //   if(task !==""){
  //     listTask=listTask.concat(obj)
  //     task=""
  //   }
  // }

  // const myTask= listTask.map((item)=>(
  //   <li>{item.name}</li>
  // ))
  return (
    <div className="App">
      <div className='block'>
      <img src={img[count]} alt=""/>
      <button onClick={nexImg}> Click</button>
      </div>
      {/* <div>
        <h1>To Do List</h1>
        <br />
        <input placeholder='Add your task' value={task} onChange={updateTask}
        />
        <button onClick={setTask}>Add Task</button>
        <ul>{myTask}</ul>
      </div> */}
    </div>
  );
}

export default App;
