# Web CRUD Projesi (React + LocalStorage)

React ve Vite ile geliştirilmiş, verileri tarayıcının **LocalStorage**'ında saklayan basit bir görev yönetimi (CRUD) uygulamasıdır.

--> **Canlı Demo:** [fantastic-truffle-07863d.netlify.app](https://fantastic-truffle-07863d.netlify.app/)

##  Özellikler

-  **Ekleme (Create):** Yeni görev ekleyebilirsiniz.
-  **Listeleme (Read):** Eklenen tüm görevler liste halinde görüntülenir.
-  **Düzenleme (Update):** Mevcut görevleri güncelleyebilirsiniz.
-  **Silme (Delete):** İstemediğiniz görevleri silebilirsiniz.
-  **Kalıcı veri:** Görevler LocalStorage'da tutulur; sayfa yenilense bile kaybolmaz.

##  Kullanılan Teknolojiler

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript (ES6+)
- LocalStorage API
- [Netlify](https://www.netlify.com/) (yayınlama)

##  Kurulum ve Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için:

```bash
# Depoyu klonlayın
git clone https://github.com/asuzey/Web-CRUD-Project.git

# Proje klasörüne girin
cd Web-CRUD-Project

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Ardından tarayıcınızda terminalde gösterilen adresi (genellikle `http://localhost:5173`) açın.

### Üretim için derleme

```bash
npm run build
npm run preview
```

##  Kullanım

1. Üstteki kutuya görev adını yazın ve **Ekle** butonuna tıklayın.
2. Bir görevi değiştirmek için yanındaki **Düzenle** butonunu kullanın.
3. Bir görevi kaldırmak için **Sil** butonuna tıklayın.

##  Geliştirici

**Asuman Zeynep Bayram** — [github.com/asuzey](https://github.com/asuzey)
