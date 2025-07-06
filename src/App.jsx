import useCostumPointer from "./useCostumPointer";
import useDate from "./useDate";
import useSwitch from "./useSwitch";


function App() {
  const [isOn, toggle] = useSwitch();
  const [currentDate, isRunning, setIsRunning] = useDate();
  const customPointer = useCostumPointer("🔥")
  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
        <button onClick={() => isRunning ? setIsRunning(false) : setIsRunning(true)}>on/off</button>
      </div>
      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>


    </>
  )
}

export default App
