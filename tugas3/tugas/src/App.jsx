import React, { useState, useEffect } from "react";

function App() {
  const [pesan, setPesan] = useState("🌸 Hai, Selamat Datang di Halaman Ajaib saya!");


  useEffect(() => {
    
    console.log("useEffect sedang dijalankan...");

    setTimeout(() => {
      setPesan("✨ Semoga harimu menyenangkan dan penuh semangat! 💪");
    }, 2000);
  }, []); 

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1>Program Simple dengan useEffect</h1>
      <h2>{pesan}</h2>
      <p>(Pesan akan berubah otomatis setelah 2 detik)</p>
    </div>
  );
}

export default App;