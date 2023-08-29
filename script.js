document.addEventListener("DOMContentLoaded", function () {
    // Ini adalah event listener yang akan berjalan ketika halaman selesai dimuat.

    const boxSupplier = document.querySelector(".box-supplier");
    const boxPembayaran = document.querySelector(".box-pembayaran");

    // Di atas, kita mengambil referensi elemen dengan class "box-supplier" dan "box-pembayaran".

    const toggleBox = (targetBox) => {
        // Ini adalah fungsi yang akan mengganti tampilan antara box-supplier dan box-pembayaran.

        boxSupplier.style.display = "none";
        boxPembayaran.style.display = "none";
        // Pertama, kita menyembunyikan keduanya.

        targetBox.style.display = "flex";
        // Kemudian, kita menampilkan elemen target (box-supplier atau box-pembayaran).

        // Menghapus class active dari semua h2 pada box-satu-partners
        boxSatuPartners.querySelectorAll("h2").forEach((h2) => {
            h2.classList.remove("active")
        });
    };

    const boxSatuPartners = document.querySelector(".box-satu-partners");
    // Di atas, kita mengambil referensi elemen dengan class "box-satu-partners".

    boxSatuPartners.addEventListener("click", (event) => {
        // Ini adalah event listener yang akan berjalan ketika elemen dengan class "box-satu-partners" di-klik.

        const target = event.target.textContent.toLowerCase();
        // Di atas, kita mendapatkan teks yang diklik (Supplier atau Pembayaran) dan mengubahnya menjadi huruf kecil.

        if (target === "supplier") {
            toggleBox(boxSupplier);
            // Jika teks adalah "supplier", kita panggil fungsi toggleBox untuk menampilkan box-supplier.

            event.target.classList.add("active"); // Menambahkan class active pada h2 yang diklik

        } else if (target === "pembayaran") {
            toggleBox(boxPembayaran);
            // Jika teks adalah "pembayaran", kita panggil fungsi toggleBox untuk menampilkan box-pembayaran.

            event.target.classList.add("active"); // Menambahkan class active pada h2 yang diklik
        }
    });

    // Tampilkan box-supplier secara default saat halaman dimuat
    toggleBox(boxSupplier);
    // Di sini, kita panggil fungsi toggleBox untuk menampilkan box-supplier saat halaman dimuat.
});

// ABOUT

// document.addEventListener('DOMContentLoaded', function() {
//     const readMoreLink = document.getElementById('read-more-link');
//     const container = document.querySelector('.container');
  
//     readMoreLink.addEventListener('click', function(event) {
//       event.preventDefault();
      
//       // Mengganti konten dalam elemen .container dengan konten dari header.html
//       container.innerHTML = `
//       <header>
//             <nav>
//                 <div class="logo">
//                     <img src="../assets/image/logoESKADO.png" alt="Logo Eskado">
//                     <img src="../assets/image/logoSetiaKawan.jpg" alt="Logo Setia Kawan">
//                 </div>
//                 <div class="menu">
//                     <ul>
//                         <li><a href="#">Beranda</a></li>
//                         <li><a href="#">Tentang Perusahaan</a></li>
//                         <li><a href="#">Toko</a></li>
//                         <li><a href="#">Produk</a></li>
//                         <li><a href="#">Karir</a></li>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//         <!-- Konten dari header.html -->
//         <!-- Pastikan Anda menyertakan semua elemen yang dibutuhkan -->
//       `;
//     });
//   });
  
  
  


  