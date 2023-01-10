import { Input, Spacer, Text } from '@nextui-org/react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentNumber, setCurrentNumber] = useState("Nhập cái gì đó hộ cái!");

  function handleChange(e) {
    let inputNum = e.target.value;
    if (isNaN(inputNum)) {
      setCurrentNumber("Nhập số thập phân mới convert được!");
    } if (inputNum > 3000 || inputNum <= 0) {
      setCurrentNumber("Nhập số từ 1-3000 mới convert được!");
    } else {
      let mapRoman = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100,
        XC: 90, L: 50, XL: 40, X: 10, IX: 9,
        V: 5, IV: 4, I: 1
      }, romanNum = '', i;
      for (i in mapRoman) {
        while (inputNum >= mapRoman[i]) {
          romanNum += i;
          inputNum -= mapRoman[i];
        }
      }
      setCurrentNumber(romanNum);
    }

  };


  return (
    <div className="App">
      <div className="converter-wrapper">
        <Text h1>Biến số thập phân thành chữ số La Mã</Text>
        <Text h4>Enter your decimal number and magic will happens</Text>
        <Input placeholder="Nhập số thập phân muốn convert sang chữ số La Mã" size='xl' fullWidth name='inputNum' onChange={handleChange} />
        <Spacer y={1} />
        <Text h1>{currentNumber}</Text>
      </div>
    </div>
  );
}

export default App;
