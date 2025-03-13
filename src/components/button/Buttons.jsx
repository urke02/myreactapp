import { useState } from 'react';

export default function Buttons() {
    const [activeButtons, setActiveButtons] = useState([]);

    const handleClick = (index) => {
      setActiveButtons((prev) => [...prev, index]);
  
      setTimeout(() => {
        setActiveButtons((prev) => prev.filter((btn) => btn !== index));
      }, 5000);
    };
  
    return (
      <div>
        {[0, 1].map((index) => (
          <button key={index} onClick={() => handleClick(index)}>{activeButtons.includes(index) ? "Loading..." : "Click me"}</button>
        ))}
      </div>
    )
}
