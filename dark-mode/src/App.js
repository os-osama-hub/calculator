
import './App.css';
import React,{useState}from 'react'
function App() {
 const[value,setValue]=useState('')

 const handleClick =(e)=>{
  setValue(value+e.target.value)
 }
const buttons = [
  ['AC','DC','*','/'],
['7','8','9','-'],
['4','5','6','+'],
['0','2','3','='],
['0','.']
]

  return (
<div className='container'>
  <div className='calculator'>
    <form action=""> 
      <div className="display">
        <input type='text' value={value} readOnly></input>
      </div>
      
      {buttons.map((row, rowIndex)=>(
        <div key={rowIndex} >
          {row.map((btn)=>(
            <input key={btn}
            type='button'
            value={btn}
            onClick={(e)=>{
              if(btn==='AC')setValue('');
              else if(btn==='DC')setValue(value.slice(0,-1))
                else if(btn === '=')setValue(eval(value))
              else setValue(value+e.target.value)
            }}></input>
          ))}
        </div>
      ))}
      
       </form>
  </div>
</div>
  );
}

export default App;
