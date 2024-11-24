# 📋 Automasi Pengiriman Undangan Pernikahan dengan Node.js  
Program ini dirancang untuk membantu mengirimkan undangan pernikahan secara otomatis melalui WhatsApp. Dengan membaca data dari file Excel, Anda dapat menghemat waktu dan tenaga dalam proses distribusi undangan.  

## 🛠️ **Fitur**  
- **Autentikasi Otomatis**: Menggunakan library `whatsapp-web.js` dengan metode autentikasi lokal (QR Code).  
- **Integrasi Excel**: Membaca data undangan dari file Excel menggunakan `xlsx`.  
- **Pengiriman Pesan**: Mengirimkan pesan undangan secara otomatis kepada kontak di file Excel.  
- **Pesan yang Dipersonalisasi**: Menyesuaikan isi pesan berdasarkan nama penerima dan informasi lainnya.  
- **Jeda Pengiriman Acak**: Menghindari deteksi spam dengan jeda waktu pengiriman pesan yang bervariasi.  

## 📦 **Dependencies**  
Program ini membutuhkan library berikut:  
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)  
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal)  
- [xlsx](https://github.com/SheetJS/sheetjs)  

Install dependencies dengan perintah:  
```bash
npm install

### 2. **Install dependencies**
Install semua library yang dibutuhkan:  
```bash
npm install


