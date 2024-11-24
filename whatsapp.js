const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const XLSX = require('xlsx');
const randomDelay = () => Math.floor(Math.random() * (60000 - 5000 + 1) + 5000); // Random delay between 5 to 60 seconds

// Buat instance client dengan autentikasi lokal dan menampilkan browser
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: false, // Menonaktifkan mode headless untuk menampilkan browser
        args: ['--no-sandbox', '--disable-setuid-sandbox'] // Opsi tambahan untuk stabilitas
    }
});

// Fungsi untuk membaca file Excel dan mengambil data dari A, B, C, D
const readExcelData = () => {
    const workbook = XLSX.readFile('undangan.xlsx');
    const sheet = workbook.Sheets[workbook.SheetNames[0]]; // Ambil sheet pertama
    const data = [];

    let row = 2; // Mulai dari baris pertama yang ada datanya
    while (sheet[`A${row}`]) {
        const A = sheet[`A${row}`] ? sheet[`A${row}`].v : '';
        const B = sheet[`B${row}`] ? sheet[`B${row}`].v : '';
        const C = sheet[`C${row}`] ? sheet[`C${row}`].v : '';
        const D = sheet[`D${row}`] ? sheet[`D${row}`].v : '';

        // Tambahkan ke array data meskipun kolom B kosong
        if (A && C && D) {
            data.push({ A, B, C, D });
        }

        row++;
    }
    return data;
};

// Ketika client siap
client.on('ready', () => {
    console.log('Client is ready!');

    const data = readExcelData();

    const sendMessageInterval = async () => {
        for (const { A, B, C, D } of data) {
            const formattedC1 = C.replace(/ /g, '%20');

            // Format bagian "Kepada Yth" tergantung apakah B kosong
            const recipient = B
                ? `Kepada Yth, Bpk/Ibu/Sdr/i \n*${A}* & *${B}*`
                : `Kepada Yth, Bpk/Ibu/Sdr/i \n*${A}*`;

            // Format pesan yang akan dikirim
            const message = `
Bismillahirrahmanirrahim
Assalamu'alaikum Wr. Wb. 

${recipient}

Dengan segala hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

*Mela Milani* 
& 
*Agusti Dwinanda*

yang InsyaAllah akan dilaksanakan pada:

Akad Nikah
🗓️ : Tanggal
🕖 : Jam
📍 : Alamat

Resepsi
🗓️ : Tanggal
🕖 : Jam
📍 : Alamat

Untuk informasi detail mengenai undangan kami, silahkan kunjungi link dibawah ini:
${formattedC1}

Merupakan suatu kehormatan dan kebahagiaan tersendiri apabila berkenan hadir dan memberikan doa restu kepada kami berdua.

Atas perhatiannya kami ucapkan banyak terima kasih.  

Salam hangat,
*Mela & Agusti*
`;

            const phoneNumber = D;
            const formattedNumber = `${phoneNumber}@c.us`;

            try {
                await client.sendMessage(formattedNumber, message);
                console.log(`Pesan berhasil dikirim ke ${phoneNumber}`);
            } catch (error) {
                console.log('Gagal mengirim pesan:', error);
            }

            const delay = randomDelay();
            console.log(`Menunggu ${delay / 1000} detik sebelum mengirim pesan berikutnya...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }

        console.log('Selesai mengirim pesan ke semua nomor!');
    };

    sendMessageInterval();
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Scan QR Code di atas untuk login.');
});

client.on('disconnected', (reason) => {
    console.log('Client disconnected:', reason);
});

client.initialize();
