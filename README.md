# NetMate

React ve Express ile geliştirilen bir sosyal medya projesi. Kullanıcı kaydı ve giriş backend'e bağlıdır. Gönderi, yorum, beğeni, profil düzenleme ve takip etme özellikleri şu anda frontend'de örnek veriler ve local state ile çalışır.

## Geliştiriciler

- [Selim Eminoğlu](https://github.com/SelimEminoglu61)
- [Hasan Kuray](https://github.com/hasankurayy)

## Kullanılan teknolojiler

| Alan | Teknolojiler |
| --- | --- |
| Frontend | React, Vite, React Router |
| Formlar | Formik, Yup, yup-password |
| Stil ve animasyon | Sass/SCSS, Framer Motion |
| Bildirimler | React Toastify |
| Backend | Node.js, Express |
| Veritabanı erişimi | MongoDB Node.js driver |
| Kimlik doğrulama | bcrypt, JSON Web Token (JWT) |
| Geliştirme araçları | ESLint, nodemon |

## Proje yapısı

```text
NetMate/
├── client/
│   ├── public/             # Logo, avatar ve ikonlar
│   └── src/
│       ├── assets/scss/    # Genel, form, home, profile ve logo stilleri
│       ├── components/    # Header, Feed, Posts, PostCreate, Suggestions
│       ├── container/     # LoginForm, RegisterForm, Logoİntro
│       ├── pages/         # Login, Register, Home, Profile
│       ├── router/        # Sayfa yönlendirmeleri
│       ├── App.jsx
│       └── main.jsx
├── server/
│   ├── middleware/auth.js # JWT doğrulaması
│   ├── routes/            # Kayıt ve giriş endpointleri
│   ├── db.js              # MongoDB bağlantı yardımcısı
│   └── index.js           # Express uygulaması
├── First_Task/            # Tasarım referansları ve wireframe PDF'leri
└── README.md
```

## Mevcut özellikler

### Kayıt ve giriş

- Login/Register arayüzleri ve Formik + Yup doğrulamaları.
- MongoDB `Users` koleksiyonuna kullanıcı kaydı.
- Şifrenin bcrypt ile hash'lenmesi ve girişte karşılaştırılması.
- Başarılı girişte iki saat geçerli JWT üretilmesi.
- Tokenın yalnızca başarılı giriş cevabında `sessionStorage` içine kaydedilmesi.
- `Authorization: Bearer <token>` ile korumalı endpoint erişimi.
- Animasyonlu logo ve başarı/hata bildirimleri.

### Feed — frontend state

- Metin gönderisi oluşturma; boş gönderiyi engelleme.
- Beğenme ve beğeniyi geri alma.
- Yorum alanını açma/kapatma.
- Yorum gönderme ve listeleme; boş yorumu engelleme.
- Gönderi başına ayrı yorum taslağı.

### Profil — frontend state

- Sol navigasyon, orta profil ve sağ öneriler/AI alanından oluşan üç kolonlu görünüm.
- Banner alanı, örnek avatar, profil bilgileri ve istatistikler.
- Posts / Media / Likes sekmeleri ve örnek içerikler.
- Kontrollü form alanlarıyla Edit Profile modalı; Save / Cancel.
- Modalın arka plana tıklanınca kapanması.
- Önerilen kullanıcılar için Follow/Unfollow ve Following sayısının güncellenmesi.

Frontend state ile yapılan değişiklikler sayfa yenilendiğinde kalıcı değildir. Home ve Profile gönderileri ayrı örnek veri kaynaklarıdır. Görsel/video yükleme ve AI işlevleri henüz uygulanmamıştır.

## Sayfalar ve API

Frontend route'ları: `/login`, `/register`, `/home`, `/profile`. Kök adres `/login` sayfasına yönlenir.

| Metot | Endpoint | Açıklama | Token gerekli mi? |
| --- | --- | --- | --- |
| POST | `/api/register/getRegister` | Kullanıcı kaydı | Hayır |
| POST | `/api/login/getLogin` | E-posta/şifre kontrolü ve JWT üretimi | Hayır |
| GET | `/api/test` | JWT doğrulamasını kontrol eden test endpointi | Evet |

Login tokenında `userId` bulunur. Auth middleware doğrulanan token verisini `req.user` içine yerleştirir. JWT için kullanılan ortam değişkeni `JWT_SECRET_KEY`'dir.

`GET /api/users/me` ve `PATCH /api/users/me` henüz uygulanmamıştır.

## Yerel çalıştırma

Node.js ve npm kurulu olmalı; MongoDB bağlantısı ve JWT yapılandırması yerel ortamda hazır olmalıdır.

Backend'i bir terminalde başlat:

```sh
cd server
npm install
npm run dev
```

Frontend'i ayrı bir terminalde başlat:

```sh
cd client
npm install
npm run dev
```

Frontend'in varsayılan geliştirme adresi `http://localhost:5173`, backend'in varsayılan adresi `http://localhost:5000`'dir. Mevcut frontend API istekleri backend'in bu adresini kullanır; CORS da frontend'in bu adresine izin verir.

Frontend için ek komutlar (`client` klasöründe):

```sh
npm run lint
npm run build
npm run preview
```

## Bilinen eksikler

- `/home` ve `/profile` için frontend route koruması ve çıkış akışı henüz yok.
- Backend'de kayıt verilerinin doğrulanması ve duplicate e-posta kontrolü eksik; e-posta unique index'i de planlanıyor.
- Backend hata cevapları ortak `{ message: "..." }` formatına getirilmeli.
- `Logoİntro.jsx` içindeki `motion` importu JSX'te kullanıldığı hâlde ESLint tarafından kullanılmıyor olarak işaretleniyor; import silinmemeli.
- Header'daki hamburger butonunun davranışı henüz yok. Home'daki Suggestions ve AI alanları placeholder.
- Explore, Messages ve Settings bağlantıları gelecekteki sayfalar için bırakıldı; route'ları henüz yok. Messages bağlantısı şu anda `/notifications` adresine gidiyor.
- Mobil ekranlar için responsive düzen henüz tamamlanmadı.
- Backend test scripti henüz gerçek test içermiyor.

## Sonraki geliştirmeler

- [ ] `GET /api/users/me`: Tokenla giriş yapan kullanıcıyı bulma ve `hashedPassword` alanını cevap dışında bırakma.
- [ ] Profil ekranını gerçek kullanıcı verisine bağlama; yüklenme ve hata durumları ekleme.
- [ ] `PATCH /api/users/me`: İzin verilen profil alanlarını doğrulayıp güncelleme ve Edit Profile modalını bağlama.
- [ ] Frontend route koruması, token süresi dolduğunda yönlendirme ve çıkış akışı.
- [ ] Backend doğrulaması, duplicate e-posta kontrolü ve unique index.
- [ ] Gönderi, beğeni, yorum ve takip özelliklerini MongoDB'ye bağlama.
- [ ] Profil resmi ve gönderi görseli yükleme.
- [ ] Responsive tasarım, Explore, Messages ve Settings sayfaları.
- [ ] İsteğe bağlı bildirimler, gerçek zamanlı mesajlaşma, AI ve admin paneli.

## Güvenlik

`.env`, `.env.*`, `*.pem`, `*.key` ve credential dosyaları ile token, parola veya connection string içeren dosyalar gizli tutulmalıdır. Secret değerleri kaynak koduna, README'ye veya paylaşılan çıktılara eklenmemelidir. Projedeki dosya erişim kuralları `AGENTS.md` içinde yer alır.
