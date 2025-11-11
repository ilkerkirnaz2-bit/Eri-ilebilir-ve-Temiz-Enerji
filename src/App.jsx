// src/App.jsx dosyasının yeni ve zenginleştirilmiş içeriği

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      
      {/* BAŞLIK (HEADER) BÖLÜMÜ - Arka Plan Yeşil olacak */}
      <header className="bg-green-700 text-white p-4 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Erişilebilir & Temiz Enerji Portalı</h1>
          <nav>
            <a href="#tanim" className="mx-3 hover:text-green-200 transition duration-300">Tanım & Kapsam</a>
            <a href="#epdk" className="mx-3 hover:text-green-200 transition duration-300">Yasal Çerçeve</a>
            <a href="#guncel" className="mx-3 hover:text-green-200 transition duration-300">Gelecek Hedefleri</a>
          </nav>
        </div>
      </header>

      {/* ANA İÇERİK (MAIN) BÖLÜMÜ */}
      <main className="container mx-auto p-8">
        
        {/* TANIM VE GİRİŞ (Arka plan beyaz) */}
        <section id="tanim" className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 border-b-2 pb-2">Kapsamlı Tanım ve Önemi</h2>
          <p className="text-lg text-gray-700 mb-4">
            Erişilebilir ve Temiz Enerji (Sürdürülebilir Kalkınma Amacı 7), hem çevresel sürdürülebilirliği hem de sosyal eşitliği amaçlayan küresel bir hedeftir. Bu, herkesin düşük maliyetle, güvenilir ve modern enerji hizmetlerine erişimini sağlamayı ifade eder.
          </p>
          <p className="text-lg text-gray-700">
            Enerjiye erişim, eğitim, sağlık ve ekonomik kalkınma gibi temel insan haklarının gerçekleştirilmesi için bir ön koşuldur. Temiz enerji kullanımı ise iklim krizini yavaşlatmanın temel yoludur.
          </p>
        </section>

        {/* EPDK VE YASAL ÇERÇEVE (Kartlar) */}
        <section id="epdk" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Yasal Çerçeve ve Düzenleyici Kurumlar (EPDK)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Kart 1: EPDK Rolü */}
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md border-l-4 border-yellow-600">
              <h3 className="text-2xl font-bold text-yellow-700 mb-3">Enerji Piyasası Düzenleme Kurumu (EPDK)</h3>
              <p className="text-gray-700">
                Türkiye'de enerji piyasasının şeffaf, rekabetçi ve istikrarlı bir şekilde işlemesini sağlamakla görevlidir. Temiz enerji alanındaki teşvik, lisanslama ve fiyatlandırma süreçlerini EPDK yönetir. 
              </p>
            </div>
            
            {/* Kart 2: Temel Kanunlar */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Yenilenebilir Enerji Kaynakları Kanunu</h3>
              <p className="text-gray-700">
                Güneş, rüzgar, jeotermal gibi temiz enerji kaynaklarının kullanımını ve yaygınlaşmasını teşvik eden yasal zemini oluşturur. Bu kanun, yatırımcılara alım garantisi gibi destekler sunar.
              </p>
            </div>
          </div>
        </section>

        {/* GELECEK HEDEFLERİ */}
        <section id="guncel" className="bg-green-100 p-8 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-400 pb-2">Küresel ve Ulusal Temiz Enerji Hedefleri</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            <li>**Küresel Hedef (SDG 7):** 2030 yılına kadar yenilenebilir enerjinin küresel enerji karışımındaki payını önemli ölçüde artırmak.</li>
            <li>**Türkiye Hedefi:** Enerji tüketiminde yenilenebilir kaynakların payını artırmak ve enerji verimliliğini yükseltmek (Kaynak: Ulusal Enerji Planları).</li>
            <li>**Odak Noktası:** Özellikle evsel ve ticari alanlarda çatı üstü güneş enerjisi (lisanssız elektrik üretimi) teşvikleri büyük önem taşımaktadır.</li>
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
