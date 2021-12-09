import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Page1 from"./Components/page1" 
import Page2 from"./Components/page2" 
import Page3 from"./Components/page3" 
import Page4 from"./Components/page4" 
import Navigation from "./Navigation";

function App() {
  return (
    
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path="page1" element={<Page1 />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
          <Route exact path="page4" element={<Page4 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// https://dev.to/salehmubashar/react-router-dom-36a2