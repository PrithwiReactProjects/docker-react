import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginForm from './LoginPage/LoginForm';
import ProtectedPage from './LoginPage/ProtectedPage';


const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
       <Routes>
       <Route
            path="/"
            element={
              <LoginForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
          <Route
            path="/login"
            element={<ProtectedPage authenticated={authenticated} />}
          />
       
        </Routes>
    
    </Router>
  );
};

export default App;
