import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Login from './login';
import imageone from "./image/Rectangle 48.jpg"
function App() {
  return (
    <Router>

    
    <div>

      <img src={imageone} all="logo" />
      <div className='mainbody'>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>

        </Routes>
      {/* <Login/>    */}
       {/* <Register/> */}
       </div>  

   
    </div>
    </Router>
  );
  // <Router>
  //     <Routes>
  //       <Route path='/' element={<Login/>} />
  //       {/* <Route path='/' element={<Register/>} /> */}

  //     </Routes>
  // </Router>
  // );
}

export default App;
