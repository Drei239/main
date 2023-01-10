import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//A.1
function hailStone(n) {
  let inputNum = n;
  let sequence = [];

  if (n == 1) {
    sequence.push(n);
  } else {
    while (n != 1) {
      if (n % 2 == 0) {
        sequence.push(n);
        n = n / 2
      } else {
        sequence.push(n);
        n = ((n * 3) + 1)
      }
    } sequence.push(1);
  }
  console.log(`hailstone(${inputNum})`, sequence);
  return sequence;
}
hailStone(7);
hailStone(10);
hailStone(1);

//A.2
let case1 = { "Shampoo": 5.99, "Rubber Ducks": 15.99 };
let case2 = { "Flatscreen TV": 399.99 };
let case3 = { "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 };
let case4 = { "1": 2.3, "2": 35.4, "3": 42.2 };

function freeShipping(order) {
  let isFreeShip = false;
  let sumValues = ((Object.values(order)).reduce((a, b) => a + b)) >= 50 ? isFreeShip = true : false;
  console.log("Freeshipping", order, isFreeShip);
  return isFreeShip
}

freeShipping(case1);
freeShipping(case2);
freeShipping(case3);
freeShipping(case4);


root.render(
  <NextUIProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NextUIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
