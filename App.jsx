export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* BAŞLIK (HEADER) BÖLÜMÜ */}
      <header className="bg-green-700 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Erişilebilir & Temiz Enerji</h1>
          <nav>
            <a href="#tanim" className="mx-2 hover:text-green-200 transition duration-300">Tanım</a>
            <a href="#amaclar" className="mx-2 hover:text-green-200 transition duration-300">Amaçlar</a>
            <a href="#cozumler" className="mx-2 hover:text-green-200 transition duration-300">Çözümler</a>
          </nav>
        </div>
      </header>

      {/* ANA İÇERİK BÖLÜMÜ */}
      <main className="container mx-auto p-8">
        
        {/* TANITIM VE GİRİŞ */}
        <section className="text-center mb-12">
          <h2 id="tanim" className="text-4xl font-extrabold text-gray-800 mb-4">Geleceğimizi Aydınlatıyoruz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temiz enerjiye erişim, sadece çevresel bir zorunluluk değil, aynı zamanda küresel kalkınmanın ve ekonomik eşitliğin temel direğidir. Herkes için sürdürülebilir enerji.
          </p>
        </section>

        {/* TEMEL AMAÇLAR */}
        <section id="amaclar" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-yellow-500">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">1. Enerji Eşitliği</h3>
            <p className="text-gray-600">
              Enerji yoksulluğunu ortadan kaldırarak kırsal ve yoksul bölgeler dahil herkesin uygun fiyatlı elektriğe ulaşımını sağlamak.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">2. Sürdürülebilirlik</h3>
            <p className="text-gray-600">
              Gezegenimizi korumak adına fosil yakıtlar yerine güneş, rüzgar ve hidroelektrik gibi yenilenebilir kaynaklara geçişi hızlandırmak.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-green-500">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">3. Teknolojik Gelişim</h3>
            <p className="text-gray-600">
              Enerji verimliliğini artıran ve depolama sorununu çözen yeni nesil temiz enerji teknolojilerine yatırım yapmak ve bunları yaygınlaştırmak.
            </p>
          </div>
        </section>

        {/* ÇÖZÜMLER VE EYLEM */}
        <section id="cozumler" className="bg-green-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Uygulanabilir Çözümler</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Kırsal bölgelerde küçük ölçekli güneş enerjisi sistemlerinin kurulumunu teşvik etmek.</li>
            <li>Kamu binalarında enerji verimliliği denetimleri ve yalıtım projelerini zorunlu kılmak.</li>
            <li>Temiz enerji projelerine yönelik mikro kredi ve finansman mekanizmalarını geliştirmek.</li>
          </ul>
        </section>
        
      </main>
      
      {/* ALT BÖLÜM (FOOTER) */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>© 2025 Erişilebilir Temiz Enerji Girişimi. Web ve Mobil Tasarım Ödevi.</p>
      </footer>
    </div>
  );
}
