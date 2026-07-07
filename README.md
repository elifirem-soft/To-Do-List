# To-Do-List

Kullanıcıların günlük görevlerini dinamik olarak eklemesini, düzenlemesini ve listelemesini sağlayan, tarayıcı hafızasıyla (Local Storage) entegre çalışan modern ve minimalist bir yapılacaklar listesi uygulamasıdır.

--- Proje Mimarisi & Dosya Yapısı
Proje, modüler bir frontend yapısı üzerine kurulmuştur ve temel olarak şu bileşenlerden oluşur:

app.jsx : Görev ekleme, silme, filtreleme gibi asenkron DOM manipülasyonlarını yöneten ve Local Storage entegrasyonunu sağlayan ana JavaScript motoru.
index.css : Uygulamanın genel temasını, modern arayüz bileşenlerini ve responsive (mobil uyumlu) yerleşim kurallarını belirleyen ana stil dosyası.
main.jsx : Vite'in giriş noktası (entry point) olarak işlev gören, uygulamayı başlatan ve modülleri (app.js, index.css) bir araya getiren ana betik.

--- Teknolojik Yığın (Tech Stack) & Mimari
Diller: JavaScript (ES6+), HTML5, CSS3
Build Tool: Modern, ultra hızlı modül paketleyici Vite tabanlı geliştirme ortamı.
Paket Yönetimi: Proje bağımlılıklarının yönetimi ve optimize edilmiş production build süreçleri için npm.
Kalıcılık (Persistence): Görev verilerinin güvenli şekilde saklanması için tarayıcı tabanlı Web Storage (Local Storage) entegrasyonu.
