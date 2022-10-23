import "./App.css";
import Productdisplay from "./Productdisplay";
import Productform from "./Productform";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// App - component
 function App() {
  const navigate = useNavigate();
  return(
  <div className="App">
  <nav className="routing">
  <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate("/")}>PRODUCTS</Button>
          <Button color="inherit" onClick={()=>navigate("/productform")}>ADD PRODUCT</Button>
        </Toolbar>
      </AppBar>
      </nav> 

  <Routes>
  <Route path="/" element={<Productdisplay />} />
  <Route path="/productform" element={<Productform />} />
</Routes> 
  </div>
);
}

export default App;