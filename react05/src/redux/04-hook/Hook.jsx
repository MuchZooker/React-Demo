
import React, { useState,useEffect } from 'react'
function Hook() {
    // // 声明一个新的叫做 “count” 的 state 变量
    // const [count, setCount] = useState(0);
  
    // return (
    //   <div>
    //     <p>You clicked {count} times</p>
    //     <button onClick={() => setCount(count + 1)}>
    //       Click me
    //     </button>
    //   </div>
    // );


    const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
  }
export default Hook