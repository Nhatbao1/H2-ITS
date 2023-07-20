import { useState } from 'react';
import './App.css';
import GridComponent from './GridComponent';
function App() {
  const [row, setRow] = useState();
  const [col, setCol] = useState();

  return (
    <>
      <h1>Grid Change Color</h1>
      <div className="App">
        <div className="input">
          <input type="text" placeholder='Nhap So Hang' onChange={(e) => setCol(e.target.value)} />
          <input type="text" placeholder='Nhap So Cot' onChange={(e) => setRow(e.target.value)} />
        </div>
      </div>
      <GridComponent row={row} col={col}></GridComponent>
    </>

  );
}

export default App;
