import {useState,useEffect} from "react"
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{console.log("CounterUpdated")})
  
return(
    <div>

        <h1>Score : {count}</h1>
        <button onClick ={()=>setCount(count+1)}>Count</button>
    </div>
)
}
export default Counter;