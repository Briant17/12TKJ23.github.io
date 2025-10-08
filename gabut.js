// Fungsi untuk modal galeri
function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = src;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Tutup modal jika klik di luar gambar
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Tambah pesan kenangan
document.getElementById('form-pesan').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const pesanText = document.getElementById('pesan-text').value;
    
    if (nama && pesanText) {
        const pesanList = document.getElementById('pesan-list');
        const newPesan = document.createElement('div');
        newPesan.classList.add('pesan-item');
        newPesan.innerHTML = `<strong>${nama}:</strong> ${pesanText}`;
        pesanList.appendChild(newPesan);
        
        // Reset form
        document.getElementById('nama').value = '';
        document.getElementById('pesan-text').value = '';
        
        alert('Pesan kenangan berhasil ditambahkan! Terima kasih. ❤️');
    }
});

// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
