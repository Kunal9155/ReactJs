import React , { useState} from 'react'


const UseStateBasics =()=>{
const [title,setTitle]=useState('one')

const ChangeTitle =() =>{
  
  if(title == 'one') {
    setTitle('two')
  }
  else if(title == 'two'){
    setTitle('three')
  }  
  else if(title != 'two'){
    setTitle('four')
  }  
  else{
    setTitle('five')
  } 
  ;
};
  return(
    <center>
    <h1>{title}</h1>
    <button onClick= {ChangeTitle} >Change the title</button>
    </center>
  );
}

export default UseStateBasics;