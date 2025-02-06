```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    // Correct: Using useRef to manage the interval ID
    intervalIdRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalIdRef.current);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```