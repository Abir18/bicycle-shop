import './App.css';
import Home from './Pages/Homepage/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './Pages/Homepage/Products/Products';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Products />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
