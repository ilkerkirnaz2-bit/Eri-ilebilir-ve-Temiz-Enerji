// src/App.jsx dosyasının yeni ve tam içeriği

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* BAŞLIK (HEADER) BÖLÜMÜ - Yeşil arka plan, Beyaz yazı */}
      <header className="bg-green-700 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Erişilebilir & Temiz Enerji</h1>
          <nav>
            <a href="#giris" className="mx-3 hover:text-green-200 transition duration-300">Giriş</a>
            <a href="#amaclar" className="mx-3 hover:text-green-200 transition duration-300">Neden Önemli?</a>
            <a href="#kaynaklar" className="mx-3 hover:text-green-200 transition duration-300">Kaynaklar</a>
          </nav>
        </div>
      </header>

      {/* ANA İÇERİK (MAIN) BÖLÜMÜ */}
      <main className="container mx-auto p-8">
        
        {/* TANITIM VE GİRİŞ */}
        <section id="giris" className="text-center mb-16 pt-10">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Geleceğimizi Güneş ve Rüzgarla Aydınlatıyoruz</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Temiz enerjiye erişimin sağlanması, iklim değişikliğiyle mücadelede ve küresel yoksulluğun azaltılmasında kritik rol oynamaktadır. Amacımız, gezegenimizi korurken her bireyin uygun fiyatlı ve güvenilir enerjiye ulaşabilmesidir.
          </p>
        </section>

        {/* AMAÇLAR VE ÖNEM BÖLÜMÜ - Kartlar */}
        <section id="amaclar" className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          
          {/* Kart 1: Sosyal Eşitlik */}
          <div className="bg-white p-8 rounded-xl shadow-2xl transition duration-500 hover:shadow-green-300 border-t-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-gray-700 mb-3">Enerji Eşitliği</h3>
            <p className="text-gray-600">
              Dünya genelinde milyarlarca insan hâlâ güvenilir elektrikten yoksundur. Temiz enerji çözümleri, dağıtık yapısı sayesinde en ücra bölgelere bile hızlı ve düşük maliyetli enerji götürmeyi mümkün kılar.
            </p>
          </div>
          
          {/* Kart 2: Çevresel Sürdürülebilirlik */}
          <div className="bg-white p-8 rounded-xl shadow-2xl transition duration-500 hover:shadow-green-300 border-t-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-700 mb-3">Karbon Nötr Gelecek</h3>
            <p className="text-gray-600">
              Fosil yakıtların aksine, güneş ve rüzgar enerjisi atmosfere karbon emisyonu salmaz. Bu, sera gazı etkisini azaltarak gelecek nesiller için daha yaşanabilir bir çevre bırakmamızın ana yoludur.
            </p>
          </div>
          
          {/* Kart 3: Ekonomik Fırsatlar */}
          <div className="bg-white p-8 rounded-xl shadow-2xl transition duration-500 hover:shadow-green-300 border-t-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-700 mb-3">Ekonomik Büyüme</h3>
            <p className="text-gray-600">
              Temiz enerji sektörüne yapılan yatırımlar, yeni iş kolları ve teknolojilerin ortaya çıkmasını sağlar. Bu sayede, bölgeler ithal enerjiye bağımlılıktan kurtulur ve yerel ekonomiler canlanır.
            </p>
          </div>
        </section>

        {/* ÇÖZÜMLER LİSTESİ */}
        <section id="kaynaklar" className="bg-green-50 p-10 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-300 pb-2">Temel Temiz Enerji Kaynakları</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center"><span className="text-2xl text-yellow-600 mr-3">☀️</span>Güneş Enerjisi (Solar): Fotovoltaik paneller aracılığıyla doğrudan elektrik üretimi.</li>
            <li className="flex items-center"><span className="text-2xl text-blue-600 mr-3">🌬️</span>Rüzgar Enerjisi (Wind): Rüzgar türbinleri ile mekanik enerjiyi elektriğe dönüştürme.</li>
            <li className="flex items-center"><span className="text-2xl text-green-600 mr-3">💧</span>Hidroelektrik: Suyun hareket gücünden faydalanarak büyük ölçekli enerji üretimi.</li>
            <li className="flex items-center"><span className="text-2xl text-red-600 mr-3">🌍</span>Jeotermal Enerji: Yerin derinliklerindeki ısıyı kullanarak sürdürülebilir enerji sağlama.</li>
          </ul>
        </section>
        
      </main>
      
      {/* ALT BÖLÜM (FOOTER) */}
      <footer className="bg-gray-800 text-white p-6 text-center mt-12">
        <p className="text-sm">Web ve Mobil Tasarım Dersi Ödevi • Tüm hakları saklıdır. Erişilebilirliği Destekliyoruz.</p>
      </footer>
    </div>
  );
}
