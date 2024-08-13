import React,{useState} from 'react'
const Home = () => {
    
    const [inputValue, setInputvalue] = useState(0);
    const increment=()=>{
       setInputvalue(inputValue+1);
    };

    const decrement=()=>{
        setInputvalue(inputValue-1);
    };

const btnstyle={
    padding:20,
    border:"none",
    backgroundColor:"#f1f1f1",
    margin:10,
};
  return (
    <div>
        <input 
        style={{padding:20,border:"1px solid rgba(0,0,0,0.4)"}}
        type="number"
        placeholder="enter something"
        value={inputValue}
        readOnly
        /> 
        <button style={btnstyle} onClick={decrement}>-</button>
        <button style={btnstyle} onClick={increment}>+</button>
        </div>
  );
};

export default Home