import { useEffect, useState } from "react"

export default function AboutUs() {

  const [count, setCount] = useState(0);

  const handleDec = () => {
    setCount((prev) => prev-1);
  }

  const handleInc = () => {
    setCount((prev) => prev+1);
  }

  useEffect(() => {
    console.log("rerender")
  },[count]);

  return (
    <section className="section py-12">
      <div className='container'>
        <h1 className='h1'>ABOUT US</h1>
        <button type="button" className="btn" onClick={handleDec}>Decrement</button>
        <span>{count}</span>
        <button type="button" className="btn" onClick={handleInc}>Increment</button>
      </div>
    </section>
  )
}
