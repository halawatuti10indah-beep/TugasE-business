import React from "react";
import Hello from "./Hello";
import PropsDesc from "./PropsDesc";

function App() {
  const handleButton = () => {
    alert("Tombol dipencet");
  };

  return (
    <div>
      {/* Memanggil komponen Hello dengan data berbeda */}
      <Hello name="yayaya yaya" />
      <Hello name="Budi Santoso" />
      <Hello name="Sinta Marpaung" />
      <Hello name="Dewi Lestari" />
      <PropsDesc name="tuti" />
      <button onClick={handleButton}>klik saya</button>
    </div>
  );
}

export default App;
