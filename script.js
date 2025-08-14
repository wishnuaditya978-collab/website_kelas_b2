// Fungsi untuk mengecek apakah elemen sudah terlihat di layar
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Fungsi untuk menambahkan kelas animasi saat elemen terlihat
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-in, .animate-zoom-in');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.style.opacity = '1';
        }
    });
};

// Panggil fungsi saat halaman dimuat dan saat di-scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);
