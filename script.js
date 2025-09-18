document.getElementById('startBtn').addEventListener('click', function() {
    // Menjatuhkan gambar Sanrio
    const sanrioImages = document.querySelectorAll('.sanrio-image');
    sanrioImages.forEach(image => {
        image.style.transform = 'translateY(300px)';
    });

    // Menampilkan chat bubble
    const chatBubble = document.getElementById('chatBubble');
    chatBubble.style.display = 'block';

    // Membuat efek jatuh setelah klik
    setTimeout(() => {
        sanrioImages.forEach(image => {
            image.style.transition = 'transform 1s ease';
            image.style.transform = 'translateY(500px)';
        });
    }, 300);
});
