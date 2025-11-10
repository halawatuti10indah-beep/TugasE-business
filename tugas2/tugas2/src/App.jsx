import { useState } from 'react';
import './App.css';

function App() {
  // 1. Buat state untuk menyimpan nilai count
  const [count, setCount] = useState(0);

  // 2. Fungsi untuk menambah nilai
  const tambah = () => {
    setCount(count + 1);
  };

  // 3. Fungsi untuk mengurangi nilai
  const kurang = () => {
    setCount(count - 1);
  };

  // 4. Fungsi untuk mereset nilai ke 0
  const reset = () => {
    setCount(0);
  };

  // 5. Return elemen yang akan tampil di browser
  return (
    <div className="container">
      <h1>Program Counter  dengan useState 👏</h1>
      <h2>Nilai Count: {count}</h2>
      <div className="button-group">
        <button className="tambah" onClick={tambah}>Tambah</button>
        <button className="kurang" onClick={kurang}>Kurang</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;