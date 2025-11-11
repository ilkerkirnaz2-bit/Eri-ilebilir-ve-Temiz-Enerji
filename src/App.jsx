// src/App.jsx dosyasının yeni içeriği (Daha profesyonel)

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* BAŞLIK (HEADER) BÖLÜMÜ - Arka Plan Yeşil, Logo Tarzı Başlık */}
      <header className="bg-green-800 text-white p-4 shadow-2xl">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-wider border-b-2 border-yellow-400 pb-1">GREENWAY ENERJİ</h1>
          <nav>
            <a href="#tanim" className="mx-3 hover:text-yellow-400 transition duration-300">Tanım</a>
            <a href="#mevzuat" className="mx-3 hover:text-yellow-400 transition duration-300">Mevzuat</a>
            <a href="#kaynaklar" className="mx-3 hover:text-yellow-400 transition duration-300">Kaynaklar</a>
            <a 
              href="https://www.epdk.gov.tr/Detay/Icerik/3-1114/yenilenebilir-enerji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-5 px-4 py-2 bg-yellow-400 text-gray-800 rounded-full font-bold hover:bg-yellow-300 transition duration-300"
            >
              EPDK Resmi Kaynak
            </a>
          </nav>
        </div>
      </header>

      {/* ANA İÇERİK (MAIN) BÖLÜMÜ */}
      <main className="container mx-auto p-8">
        
        {/* TANIM VE KAPSAM - Göz alıcı giriş */}
        <section id="tanim" className="bg-white p-12 rounded-xl shadow-lg mb-16 border-t-8 border-green-600">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Sürdürülebilir Kalkınma ve Enerjiye Erişim</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Erişilebilir ve Temiz Enerji, Birleşmiş Milletler Sürdürülebilir Kalkınma Amacı 7 (SDG 7) ile doğrudan ilişkilidir ve küresel enerji krizine bir çözümdür. Bu, herkes için güvenilir, sürdürülebilir ve modern enerjiye erişimi sağlamayı kapsar. 
          </p>
          <p className="text-lg text-green-700 font-semibold">
            Unutmayın: Enerjiye erişim, sadece bir lüks değil, ekonomik kalkınma ve sosyal eşitliğin temel taşıdır.
          </p>
        </section>

        {/* MEVZUAT VE EPDK BÖLÜMÜ */}
        <section id="mevzuat" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b-4 border-gray-300 pb-2">Yasal Çerçeve ve Düzenleyici Kurumlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Kart 1: EPDK Detay */}
            <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-green-400/50">
              <h3 className="text-2xl font-bold text-green-700 mb-3 flex items-center">
                <span className="text-3xl mr-3">⚖️</span> EPDK'nın Rolü
              </h3>
              <p className="text-gray-700">
                EPDK (Enerji Piyasası Düzenleme Kurumu), Türkiye'deki elektrik, doğal gaz ve petrol piyasalarını düzenler. Kurum, yenilenebilir enerji alanında lisans verme, tarifeleri belirleme ve piyasayı denetleme görevlerini üstlenir. Bu düzenlemeler, yatırımların şeffaf ve güvenli bir ortamda yapılmasını sağlar.
              </p>
            </div>
            
            {/* Kart 2: Kanunlar */}
            <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-green-400/50">
              <h3 className="text-2xl font-bold text-green-700 mb-3 flex items-center">
                <span className="text-3xl mr-3">📜</span> Yasal Destekler
              </h3>
              <p className="text-gray-700">
                5346 Sayılı Yenilenebilir Enerji Kaynakları Kanunu, temiz enerji üretimine teşvikler ve mekanizmalar sunar. Çatı üstü güneş enerjisi gibi lisanssız elektrik üretimi teşvikleri, bireysel kullanıcıların dahi temiz enerji üretimine katılmasına olanak tanır.
              </p>
            </div>
          </div>
        </section>

        {/* KAYNAK VE DETAY LİSTESİ */}
        <section id="kaynaklar" className="bg-green-50 p-10 rounded-xl shadow-inner border-l-8 border-green-600">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Temel Enerji Kaynakları ve Hedefler</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4">
            <li>**Güneş Enerjisi (Solar):** Türkiye'nin potansiyeli en yüksek kaynağıdır. Bireysel ve santral bazında büyük destekler bulunur.</li>
            <li>**Rüzgar Enerjisi:** Karasal ve denizde kurulan türbinlerle önemli bir paya sahiptir. Özellikle Ege ve Marmara'da yoğundur.</li>
            <li>**Küresel Hedef:** 2030 yılına kadar yenilenebilir enerjinin küresel enerji karışımındaki payını önemli ölçüde artırmak hedeflenmektedir.</li>
            <li>**Ödev Notu:** Bu proje Web ve Mobil Tasarım Dersi ödevi için hazırlanmıştır.</li>
          </ul>
        </section>
        
      </main>
      
      {/* ALT BÖLÜM (FOOTER) */}
      <footer className="bg-gray-800 text-white p-6 text-center mt-16">
        <p className="text-sm">GREENWAY ENERJİ © 2025 | Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
