import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Page1 from"./Components/page1" 
import Page2 from"./Components/page2" 
import Page3 from"./Components/page3" 
import Page4 from"./Components/page4" 

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
            <li><Link to="page4">Page 4</Link></li>
          </ul>
        </div>

        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
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