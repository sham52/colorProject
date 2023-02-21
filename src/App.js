import './App.css';
import { useState } from 'react';
import Box from './Box'
import Input from './Input';
function App() {
  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  return (
    <div className="App">
      <Box
        color={color}
        hexValue={hexValue}
      />
      <div className="inputContainer">
        <Input
          hexValue={hexValue}
          setHexValue={setHexValue}
          color={color}
          setColor={setColor}
        />

      </div>

    </div>
  );
}
App.defaultProps = {
  color: "empty"
}


export default App;
