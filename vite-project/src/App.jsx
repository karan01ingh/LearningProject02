import { useState ,useCallack, useCallback} from 'react'
import './App.css'
function App() {
  let [length,setLength]=useState(0);
  let [number,setNumber]=useState("false");
  let [character,setCharacter]=useState("false");
  let [password,setPassword]=useState("");
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number)str+="0123456789";
    if(character) str+="+*/-@$%^&!~`";
    for (let index =1; index < length; index++){
      let j=Math.floor(Math.random()*string.length()+1)
      pass=pass+string.charAt(j);   
    }
    setPassword(pass);
  },[number,length,character,setPassword]);
    // document.getElementById('pass').innerText=password;
  return(
    <>
    <h1 className='text-6xl text-center text-white '>Password Generator</h1>
    <br />
    <div className='text-white text-3xl '>
      <label htmlFor="pass">Password</label>
    <input type="text" placeholder='password' id='
    pass' style={{marginLeft:20,color:"black",marginRight:10}}/>
    <button style={{backgroundColor:"red",borderRadius:20,width:80,height:45}}>Copy</button>
    <br />
    <label htmlFor="check">NumberAllowed</label>
    <input type="checkbox" name="" id="" onClick={()=>{console.log("xx")}} />
    <label htmlFor=""style={{marginLeft:20}}>SpeialCharacter</label>
    <input type="checkbox" name="" id="" onClick={()=>{console.log("uu")}}/>
    </div>
    <br />
    <h3 className='text-3xl text-white text-center'>length({length})</h3>
    <input type="range" name="" id="" />

    </>
  )

  }
export default App
