import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
    </button>
  );
}

export default Counter;
