import {Routes, Route} from "react-router-dom"
import Homepage from "./Pages.js/Homepage"

function App(){
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
      </Routes>
    </div>
  )
}

export default App;
