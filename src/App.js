import "./App.css";
import { Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
        <Routes>
          {/* <Route name="Home" /> */}
          {/* <Route name="Contact" /> */}
          {/* <Route name="Register" /> */}
        </Routes>

      <h1 style={{ color: '#fff', fontFamily: "Bold" }}>GET LINKED</h1>
      <h1 style={{ color: '#fff', fontFamily: "SemiBold" }}>GET LINKED</h1>
      <h1 style={{ color: '#fff', fontFamily: "Medium" }}>GET LINKED</h1>
      <h1 style={{ color: '#fff', fontFamily: "Regular" }}>GET LINKED</h1>
      <h1 style={{ color: '#fff', fontFamily: "Light" }}>GET LINKED</h1>
      <h1 style={{ color: '#fff', fontFamily: "ExtraLight" }}>GET LINKED</h1>
    </div>
  );
};

export default App;
