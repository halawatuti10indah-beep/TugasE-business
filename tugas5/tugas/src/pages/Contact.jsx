export default function Contact() {
  return (
    <div className="page">
      <div className="page-content">
        <h1>Hubungi Kami</h1>
        <p>Email: support@example.com</p>
        <p>Telepon: +62 812-3456-7890</p>
        <button onClick={() => alert("Pesan terkirim!")}>Kirim Pesan</button>
      </div>
    </div>
  );
}
