import { useState } from 'react'

function Button({text}) {
    const [count, setCount] = useState(0)

    return (
          <button onClick={() => setCount((count) => count + 1)}>
            {text} {count}
          </button>
        )
  }
  
export default Button