import { useState } from "react";
function State() {
    const [count, setCount] = useState(0);
    const [boundary,setBoundary]=useState(0);
    return (
        <div>
            <h1>Score : {count}</h1>
            <h1>Boundaries :{boundary}</h1>
            <button onClick={() => setCount(count + 1)}>Score</button>
            <button onClick={() => setBoundary(boundary + 1)}>Boundaries</button>
            {setCount === 4 ? <p>Four</p>:<p>single</p>}
        </div>
    );
}
export default State;