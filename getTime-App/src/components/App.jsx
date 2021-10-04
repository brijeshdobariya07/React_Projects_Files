import React from "react";

function App() {
    const now = new Date().toLocaleTimeString();
    const [time,setTime] = React.useState(now);

    function getTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setInterval(getTime,1000)}>Get Time</button>
    </div>
  );
}

export default App;
