import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK ve Gizlilik Politikası | Webimza",
  description: "Webimza'nın KVKK kapsamındaki gizlilik politikası ve kişisel verilerin korunması hakkında bilgi.",
  alternates: {
    canonical: "https://webimza.com/kvkk",
  },
  openGraph: {
    title: "KVKK ve Gizlilik Politikası | Webimza",
    description: "Webimza'nın KVKK kapsamındaki gizlilik politikası ve kişisel verilerin korunması hakkında bilgi.",
    url: "https://webimza.com/kvkk",
    siteName: "Webimza",
    locale: "tr_TR",
    type: "website",
  }
};

export default function KVKKPage() {
  return (
    <>
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary/5 p-6 rounded-xl mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ color: '#6482AD' }}>
              KVKK ve Gizlilik Politikası
            </h1>
            <p className="text-lg text-primary/70">
              Webimza olarak kişisel verilerinizin güvenliği bizim için önceliklidir. Bu politika, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4" style={{ color: '#6482AD' }}>1. Giriş</h2>
            <p className="mb-4">
              Webimza ("biz", "bizim" veya "şirketimiz") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında hukuka ve dürüstlük kurallarına uygun olarak işleyebilecek, kaydedebilecek, saklayabilecek, sınıflandırabilecek, güncelleyebilecek ve mevzuatın izin verdiği hallerde üçüncü kişilere açıklayabilecek/aktarabileceğiz.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4" style={{ color: '#6482AD' }}>2. Kişisel Veri Toplanması</h2>
            <p className="mb-4">
              Webimza, müşterileri, potansiyel müşterileri, çalışanları, iş ortakları ve web sitesi ziyaretçileri hakkında kişisel veriler toplamaktadır. Bu veriler aşağıdakileri içerebilir:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>İsim, soyadı, e-posta adresi, telefon numarası gibi iletişim bilgileri</li>
              <li>Web sitemizi kullanırken otomatik olarak toplanan veriler (IP adresi, tarayıcı türü, ziyaret tarihi ve saati gibi)</li>
              <li>İletişim formlarımız aracılığıyla gönderdiğiniz bilgiler</li>
              <li>Sosyal medya üzerinden bizimle etkileşime geçtiğinizde paylaştığınız bilgiler</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4" style={{ color: '#6482AD' }}>3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="mb-4">
              Kişisel verilerinizi aşağıdaki amaçlar doğrultusunda işlemekteyiz:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Hizmetlerimizi sunmak ve geliştirmek</li>
              <li>Müşteri ilişkilerini yönetmek ve müşteri memnuniyetini sağlamak</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              <li>Pazarlama faaliyetlerinde bulunmak (onayınız olması durumunda)</li>
              <li>Web sitemizin ve hizmetlerimizin güvenliğini sağlamak</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4" style={{ color: '#6482AD' }}>4. Kişisel Verilerin Saklanması ve Güvenliği</h2>
            <p className="mb-4">
              Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca saklanmaktadır. Bu süre sona erdiğinde, kişisel verileriniz silinmekte, yok edilmekte veya anonim hale getirilmektedir.
            </p>
            <p className="mb-4">
              Webimza, kişisel verilerin güvenliğini sağlamak amacıyla uygun güvenlik düzeyini temin etmeye yönelik gerekli her türlü teknik ve idari tedbiri almaktadır.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4" style={{ color: '#6482AD' }}>5. Kişisel Verilerin Aktarılması</h2>
            <p className="mb-4">
              Webimza, kişisel verilerinizi yalnızca yasal yükümlülüklerini yerine getirmek, hizmetlerini sunmak ve geliştirmek amacıyla ve mevzuatta öngörülen güvenlik önlemlerini alarak üçüncü kişilere aktarabilir. Bu üçüncü kişiler arasında iş ortaklarımız, tedarikçilerimiz, yasal otoriteler ve hizmet sağlayıcılarımız bulunabilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4" style={{ color: '#6482AD' }}>6. Çerezler (Cookies)</h2>
            <p className="mb-4">
              Web sitemiz, çerezler kullanmaktadır. Çerezler, web sitesinin daha verimli çalışmasını sağlayan, kullanıcı deneyimini iyileştiren ve web sitesinin belirli özelliklerinin düzgün çalışmasını sağlayan küçük metin dosyalarıdır.
            </p>
            <p className="mb-4">
              Kullandığımız çerezler hakkında detaylı bilgi için lütfen Çerez Politikamızı inceleyiniz.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4" style={{ color: '#6482AD' }}>7. Haklarınız</h2>
            <p className="mb-4">
              KVKK'nın 11. maddesi uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
              <li>Kişisel verilerinizin aktarıldığı üçüncü kişilere yukarıda belirtilen düzeltme, silme ve yok edilme bildiriminin yapılmasını isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4" style={{ color: '#6482AD' }}>8. İletişim</h2>
            <p className="mb-4">
              Kişisel verileriniz ile ilgili sorularınız veya talepleriniz için aşağıdaki iletişim bilgilerini kullanabilirsiniz:
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="font-medium">Webimza</p>
              <p>E-posta: info@webimza.com</p>
              <p>Telefon: 0553 898 06 16</p>
              <p>Adres: İzmir, Türkiye</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4" style={{ color: '#6482AD' }}>9. Politika Güncellemeleri</h2>
            <p className="mb-4">
              Bu politika, gerektiğinde güncellenebilir. Güncellemeler web sitemizde yayınlanacaktır. Politikanın son güncellenme tarihi sayfanın alt kısmında belirtilmektedir.
            </p>
            <p className="text-sm text-primary/50 mt-6">
              Son güncelleme: 1 Haziran 2023
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
} 