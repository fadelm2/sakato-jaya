import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Award, Users, Heart, Clock,Locate } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header/Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sakato Jaya</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Beranda</Link>
              <Link to="/menu" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Menu</Link>
              <Link to="/about" className="text-red-600 font-medium">Tentang Kami</Link>
            </div>
            <a 
              href="https://wa.me/62859106614314" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Pesan Sekarang</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Tentang Kami</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Perjalanan 20 tahun melayani cita rasa autentik masakan Padang</p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Cerita Kami</h2>
              <p className="text-gray-600 leading-relaxed">
                Rumah Makan Sakato Jaya didirikan dengan misi sederhana: membawa kelezatan masakan Padang yang autentik ke setiap pelanggan. Dengan pengalaman lebih dari <span className="font-semibold text-red-600">20 tahun</span>, kami telah melayani ribuan pelanggan dengan dedikasi penuh.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Resep kami diwariskan turun-temurun, menggunakan bumbu pilihan dan teknik memasak tradisional yang menjaga keaslian rasa. Setiap hidangan dibuat dengan penuh kasih sayang dan perhatian terhadap detail.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kami bangga menjadi pilihan utama untuk nasi box dan hidangan Padang di wilayah kami. Kepuasan pelanggan adalah prioritas utama kami.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1711429513678-93f414d22809?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwcmVzdGF1cmFudHxlbnwwfHx8fDE3NjQ2NTExNzd8MA&ixlib=rb-4.1.0&q=85" 
                  alt="Rumah Makan Sakato Jaya" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Nilai-Nilai Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Kualitas Terjamin</h3>
                  <p className="text-gray-600 text-sm">Menggunakan bahan-bahan pilihan berkualitas tinggi</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Pelayanan Ramah</h3>
                  <p className="text-gray-600 text-sm">Tim yang berpengalaman dan siap melayani</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Dibuat dengan Cinta</h3>
                  <p className="text-gray-600 text-sm">Setiap hidangan dibuat dengan dedikasi penuh</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Pengalaman 20 Tahun</h3>
                  <p className="text-gray-600 text-sm">Dipercaya selama lebih dari dua dekade</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Menu Signature */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-white mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Menu Unggulan Kami</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Nasi Box Spesial</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span><strong>Nasi Box Ayam</strong> - Ayam goreng rempah dengan sambal khas Padang</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span><strong>Nasi Box Rendang</strong> - Rendang sapi empuk dengan bumbu meresap</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span><strong>Nasi Box Ikan</strong> - Ikan goreng/bakar dengan sambal andaliman</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span><strong>Rendang Khas Padang</strong> - Rendang original dengan resep turun temurun</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Keunggulan Kami</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span>Porsi yang pas dan mengenyangkan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span>Harga terjangkau untuk semua kalangan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span>Kemasan praktis dan higienis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span>Tersedia untuk acara dan pesanan dalam jumlah besar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Siap Mencoba?</h2>
            <p className="text-lg text-gray-600">Hubungi kami sekarang dan rasakan kelezatan masakan Padang kami</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-full text-lg font-semibold">
                  Lihat Menu
                </Button>
              </Link>
              <a href="https://wa.me/6285910661431" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Pesan Sekarang
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sakato Jaya</h3>
              <p className="text-gray-400">Rumah Makan Padang dengan pengalaman 20 tahun melayani cita rasa autentik.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Nasi Box Ayam</li>
                <li>Nasi Box Rendang</li>
                <li>Nasi Box Ikan</li>
                <li>Rendang Khas Padang</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+62 859-1066-14314</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Setiap Hari: 08:00 - 20:00</span>
                </li>
              </ul>
            </div>
                 <div>
              <h4 className="text-lg font-semibold mb-4">Location</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Locate className="w-4 h-4" />
                  <span>Cileungsi Cibubur</span>
                </li>
              </ul>
            </div>
            
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Rumah Makan Sakato Jaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;