import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter-form-container">
      <input className="title-text-box form-item" type="text" placeholder="Title goes here"/>

      <textarea className="description-text-area form-item" />

      <div className="checkbox-container form-item">
        <input className="confirm-checkbox" type="checkbox" />
        <div>I agree</div>
      </div>

      <button className="counter-button form-item" type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
      </button>
    </div>
  );
}

export default Counter;
