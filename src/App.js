import './App.css';
import { useState } from 'react';
import Box from './Box'
import Input from './Input';
import ToggleDark from './ToggleDark';
function App() {
  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="App">
      <Box
        color={color}
        hexValue={hexValue}
        isDark={isDark}
      />
      <div className="inputContainer">
        <Input
          hexValue={hexValue}
          setHexValue={setHexValue}
          color={color}
          setColor={setColor}
        />
      </div>
      <ToggleDark isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}
App.defaultProps = {
  color: "empty"
}


export default App;
