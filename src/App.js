import logo from './logo.svg';
import './App.css';
import ColorForm from './components/colorForm';
import { useState } from 'react';
import Box from './components/box';

function App() {
  const [colors, setColors] = useState([])
  const addColor = (color) =>{
    setColors([...colors, color])
  }
  console.log(colors)
  return (
    <div>
        <ColorForm onAdd={addColor}/>
        <div style={{display:"flex"}}>
        { 
          colors.map((color)=> <Box color={color}/>)
        }
        </div>
    </div>
  );
}

export default App;
