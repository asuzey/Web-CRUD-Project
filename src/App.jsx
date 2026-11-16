import { useState, useEffect } from 'react';

export default function App() {
  // Sayfa ilk acildiginda tarayici hafizasindan (localStorage) verileri okuyorum
  const [gorevler, setGorevler] = useState(() => {
    const kayitli = localStorage.getItem('WEB_CRUD_KEY');
    return kayitli ? JSON.parse(kayitli) : [
      { id: 1, baslik: 'JavaScript Projesini Tamamla' }
    ];
  });

  const [baslik, setBaslik] = useState('');
  const [duzenleId, setDuzenleId] = useState(null);

  // Gorevler listesi her degistiginde tarayici hafizasina kalici olarak kaydediyorum
  useEffect(() => {
    localStorage.setItem('WEB_CRUD_KEY', JSON.stringify(gorevler));
  }, [gorevler]);

  // EKLE (Create) ve GÜNCELLE (Update) islemini tek buton altinda yonetiyorum
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!baslik.trim()) return;

    if (duzenleId) {
      // Eger duzenleme modundaysak, secilen gorevin basligini guncelliyorum
      setGorevler(gorevler.map(g => g.id === duzenleId ? { ...g, baslik } : g));
      setDuzenleId(null);
    } else {
      // Yeni gorev ekleme islemi (Listeye en basa ekliyorum)
      setGorevler([{ id: Date.now(), baslik }, ...gorevler]);
    }
    setBaslik('');
  };

  // SİLME (Delete) islemi: Tiklanan id disindakileri filtreleyip listeden cikariyorum
  const handleSil = (id) => {
    setGorevler(gorevler.filter(g => g.id !== id));
  };

  // DÜZENLEME icin secilen gorevin bilgilerini inputa tasiyorum
  const handleDuzenle = (g) => {
    setDuzenleId(g.id);
    setBaslik(g.baslik);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', fontFamily: 'Arial', background: '#f4f4f9', borderRadius: '8px' }}>
      <h2>Web CRUD Projesi (React + LocalStorage)</h2>
      
      {/* EKLE / GÜNCELLE FORMU */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        <input 
          type="text" 
          placeholder="Görev adı..." 
          value={baslik} 
          onChange={e => setBaslik(e.target.value)}
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        <button type="submit" style={{ padding: '8px 15px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {duzenleId ? 'Güncelle' : 'Ekle'}
        </button>
      </form>

      {/* LİSTELEME (Read) BÖLÜMÜ */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {gorevler.length === 0 ? <p style={{ color: '#888' }}>Henüz görev yok.</p> : gorevler.map(g => (
          <li key={g.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#fff', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ddd' }}>
            <span>{g.baslik}</span>
            <div style={{ display: 'flex', gap: '5px' }}>
              <button onClick={() => handleDuzenle(g)} style={{ background: '#e0f2fe', color: '#0369a1', border: 'none', padding: '5px 8px', borderRadius: '4px', cursor: 'pointer' }}>Düzenle</button>
              <button onClick={() => handleSil(g.id)} style={{ background: '#fee2e2', color: '#991b1b', border: 'none', padding: '5px 8px', borderRadius: '4px', cursor: 'pointer' }}>Sil</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}