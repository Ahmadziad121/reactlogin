import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Car from './Car';
import Navbar from './boot';
import Car2 from './navbar2';
import { BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return ( <div className="App">
    <Navbar/>
    <Car2/>
    
     <Router>
                <div className="App">
                    <ul className="App-header">
                        <li>
                            <link to="/Home">
                                Home
                            </link>
                        </li>
                        <li>
                            <link to="/Product">Product</link>
                        </li>
                        <li>
                            <link to="/Payment">Payment</link>
                        </li>
                    </ul>
                
                <Routes>
                  <Route
                  exact
                  path="/Home"
                  element={<Home/>}></Route>
                  <Route
                  exact
                  path="/Prouduct"
                  element={<Product/>}></Route>
                  <Route
                  exact
                  path="/Payment"
                  element={<Payment/>}></Route>
                
                </Routes>
            </Router>
    </div>
  );
}

export default App;
