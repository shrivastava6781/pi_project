import './App.css';

import React from 'react';
import{BrowserRouter, Routes, Route} from "react-router-dom";
// import SignUp from './components/SignUp/signUp';
import UserRole from './UserRole/UserRole';
import Signup from './Pages/signup';
import Signin from './Pages/signin';
import Forms from './student/forms';
import MyResponse from './student/myResponse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/"  element={<UserRole/>}/>
        <Route path = "/signUp" element= {<Signup/>}/>
        <Route path = "/signin" element= {<Signin/>}/>
        <Route path = "/forms" element= {<Forms />}/>
        <Route path = "/responce" element= {<MyResponse />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
