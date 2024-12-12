document.addEventListener('DOMContentLoaded', function () {
    // Menü öğelerini seçiyoruz
    const menuLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuCollapse = document.getElementById('navbarNav');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Menü öğesine tıklanınca menüyü kapat
            if (menuCollapse.classList.contains('show')) {
                // Bootstrap'in collapse işlevini tetikleyerek menüyü kapat
                const bsCollapse = new bootstrap.Collapse(menuCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

    // Sayfa yüklendikten sonra animasyonu başlat
    document.getElementById('logo').classList.add('start-shake');

    setTimeout(function() {
        // Logo ve yazıyı gizle
        document.getElementById('logo-container').style.display = 'none'; 
        
        // Sayfa içeriğini göster
        const pageContent = document.getElementById('page-content');
        pageContent.style.display = 'block'; // Sayfa içeriğini göstermek için display: block;
        
        setTimeout(function() {
            // Sayfa içeriği görünür hale gelsin
            pageContent.classList.add('show'); 
        }, 50); // Küçük bir gecikme ile animasyon başlasın

    }, 2500); // Animasyon süresi ve biraz ekstra bekleme (2.5 saniye)
});
