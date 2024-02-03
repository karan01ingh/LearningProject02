import { useState ,useCallback,useEffect} from 'react'
import './App.css'
function App(){
  const [length,setLength]=useState(10);
  const [numberallow,setNumberallow]=useState(false)
  const [charallow,setCharallow]=useState(false)
  const [pass,setPass]=useState("");
  const passGenerator=useCallback(()=>{
    let password=""
    let string="ASDFGHJKLZXCVBNMTYUIOPwertyuiopfdsacvbnm"
    if(numberallow)string+="01654789"
    if(charallow)string+="!@#$%^&*"
    for(let index=1;index<=length;index++){
      let j=Math.floor(Math.random()*string.length+1)
      password=password+string.charAt(j)
    }
    setPass(password)
  },[length,numberallow,charallow])
  useEffect(()=>{
    passGenerator()
  },[length,numberallow,charallow])
  return(
    <>
    <div style={{backgroundColor:"black",color:"beige"}}>
      <h1>PassWord Generator</h1>
      <label htmlFor="text">Password</label>
      <input type="text" id='text' value={pass} style={{color:"black"}} readOnly/>
      <button style={{backgroundColor:"blue"}}>COPY</button>
      <br />
      <label htmlFor="text" id='numbers'>Numbers</label>
      <input type="checkbox" name="" id="numbers" onChange={()=>{
        if(numberallow)setNumberallow(false)
        else setNumberallow(true)
      }}/>
      <br />
      <label htmlFor="text" id='char'>SpecailCharacters</label>
      <input type="checkbox" name="" id="char"onChange={()=>{
        if(charallow)setCharallow(false)
        else setCharallow(true)
      }}/>
      <br />
      <h2>Length:{length}</h2>
      <input type="range" value={length} onChange={(e)=>{setLength(e.target.value)}}/>
    </div>
    </>
  )
}
export default App
