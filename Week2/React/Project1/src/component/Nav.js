import React, { useEffect, useState } from "react";
export default function Nav(props) {
  let [search,setSearch]=useState("")
  let Change=(e)=>{
  //   console.log(e.target.value)
  setSearch(e.target.value)
   }
   useEffect(()=>{
     props.setSearch(search)
   },[search])

  return (
    <div className="title">
      <h2> Favorite Shows</h2>
      <input placeholder='search' onChange={Change} />
        <button onClick={useEffect}>Search</button>
         
    </div>
  );
  }
