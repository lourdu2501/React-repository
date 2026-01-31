import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Details
      </button>

      {show && (
        <div>
          <h2>Player Details</h2>
          <p>Name : ABD</p>
          <p>Age : 44</p>
        </div>
      )}
    </div>
  );
}

export default ShowHide;
