import { useReducer } from 'react';
import './App.css';
import Home from './components/pages/Home';
import { ComponentReducer, Context, InitialComponentState } from './components/reducer';
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  const [state, dispatch] = useReducer(
    ComponentReducer,
    InitialComponentState
  );
  return (
    <Context.Provider value={{ dispatch, state }}>
      <div className="App">
      <Router>
        <Routes>
          <Route path='/*' element={<Home />} />
          {/* <Route path='/signup' element={<div />} /> */}
        </Routes>
      </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
