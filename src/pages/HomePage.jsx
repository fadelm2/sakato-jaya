import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import Footer from "@/components/Footer/Footer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

console.log("BACKEND_URL:", BACKEND_URL);
console.log("API:", API);

const HomePage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      setMenuItems(data.menu_items); // <--- sesuaikan isi file
      setLoading(false);
    } catch (error) {
      console.error("Error fetching menu:", error);
      setLoading(false);
    }
  };

  const scrollToMenu = () => {
    document.getElementById('menu-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

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
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Tentang Kami</Link>
            </div>
            <a 
              href="https://wa.me/62859106614314"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium transition-colors flex items-center space-x-2"
              data-testid="header-whatsapp-btn"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Pesan Sekarang</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-in space-y-6">
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 fill-current" />
                <span>20 Tahun Pengalaman</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Cita Rasa Autentik
                <span className="block text-red-600">Masakan Padang</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nikmati kelezatan nasi box dengan rendang, ayam, dan ikan khas Padang yang menggugah selera. Dibuat dengan resep turun temurun selama 20 tahun.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={scrollToMenu}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg"
                  data-testid="hero-lihat-menu-btn"
                >
                  Lihat Menu
                </Button>
                <a href="https://wa.me/62859106614314" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 rounded-full text-lg font-semibold"
                    data-testid="hero-pesan-whatsapp-btn"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Pesan via WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative fade-in">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1688084546323-fcd3f9d8389b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxyZW5kYW5nJTIwYmVlZnxlbnwwfHx8fDE3NjQ2NTExNzF8MA&ixlib=rb-4.1.0&q=85" 
                  alt="Rendang Khas Padang" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-red-500 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold">20+</div>
              <div className="text-red-100 text-lg">Tahun Pengalaman</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">1000+</div>
              <div className="text-red-100 text-lg">Pelanggan Puas</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">4</div>
              <div className="text-red-100 text-lg">Menu Spesial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu-preview" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Menu Favorit Kami</h2>
            <p className="text-lg text-gray-600">Pilihan terbaik dari dapur kami</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {menuItems.map((item) => (
                <Card key={item.id} className="menu-card overflow-hidden border-0 shadow-lg" data-testid={`menu-card-${item.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-gray-900" data-testid={`menu-name-${item.id}`}>{item.name}</h3>
                    <p className="text-gray-600 text-sm" data-testid={`menu-desc-${item.id}`}>{item.description}</p>
                    <div className="text-2xl font-bold text-red-600" data-testid={`menu-price-${item.id}`}>Rp {item.price.toLocaleString('id-ID')}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link to="/menu">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-full text-lg font-semibold"
                data-testid="lihat-semua-menu-btn"
              >
                Lihat Semua Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Galeri Makanan</h2>
            <p className="text-lg text-gray-600">Lihat kelezatan masakan kami</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1688084546323-fcd3f9d8389b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxyZW5kYW5nJTIwYmVlZnxlbnwwfHx8fDE3NjQ2NTExNzF8MA&ixlib=rb-4.1.0&q=85" 
                alt="Rendang" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1688084442478-3b499d17126f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxyZW5kYW5nJTIwYmVlZnxlbnwwfHx8fDE3NjQ2NTExNzF8MA&ixlib=rb-4.1.0&q=85" 
                alt="Nasi Box" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/14314105/pexels-photo-14314105.jpeg" 
                alt="Ayam Padang" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/34985384/pexels-photo-34985384.jpeg" 
                alt="Menu Lengkap" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1733414717515-d997dafb7341?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxwYWRhbmclMjBmb29kJTIwbmFzaSUyMGJveHxlbnwwfHx8fDE3NjQ2NTExNjZ8MA&ixlib=rb-4.1.0&q=85" 
                alt="Nasi Kuning" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1711429513678-93f414d22809?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwcmVzdGF1cmFudHxlbnwwfHx8fDE3NjQ2NTExNzd8MA&ixlib=rb-4.1.0&q=85" 
                alt="Suasana" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold">Siap Memesan?</h2>
          <p className="text-xl text-red-100">Hubungi kami sekarang untuk pemesanan nasi box Anda</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/62859106614314" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-semibold w-full sm:w-auto"
                data-testid="cta-whatsapp-btn"
              >
                <Phone className="w-5 h-5 mr-2" />
                +62 859-1066-14314
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default HomePage;