import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Phone,
    Award,
    Users,
    Heart,
    Clock,
} from "lucide-react";
import Footer from "@/components/Footer/Footer";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">
                                Sakato Jaya – Cibubur & Cileungsi
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <Link className="text-gray-700 hover:text-red-600 font-medium" to="/">Beranda</Link>
                            <Link className="text-gray-700 hover:text-red-600 font-medium" to="/menu">Menu</Link>
                            <Link className="text-red-600 font-medium" to="/about">Tentang Kami</Link>
                        </div>

                        {/* CTA WA */}
                        <a
                            href="https://wa.me/6285910661431"
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

            {/* HERO */}
            <section className="pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Tentang Kami
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Lebih dari 20 tahun menghadirkan cita rasa autentik masakan Padang.
                    </p>
                </div>

                {/* Story */}
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Cerita Kami
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Sakato Jaya berdiri dengan misi sederhana: menghadirkan kelezatan masakan
                            Padang autentik ke masyarakat Cibubur dan Cileungsi. Dengan pengalaman
                            lebih dari <span className="font-semibold text-red-600">20 tahun</span>,
                            kami telah melayani ribuan pelanggan dengan kualitas terbaik.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Resep turun temurun, bumbu pilihan, dan teknik memasak tradisional menjadi
                            kunci rasa yang terus kami jaga hingga hari ini.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Kami bangga menjadi pilihan utama untuk nasi box, catering harian, dan pesanan acara.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1711429513678-93f414d22809?auto=format&q=80"
                                alt="Rumah Makan Sakato Jaya"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* VALUES */}
                <div className="max-w-7xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        Nilai-Nilai Kami
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <ValueCard
                            icon={<Award className="w-8 h-8 text-red-600" />}
                            title="Kualitas Terjamin"
                            desc="Menggunakan bahan-bahan pilihan terbaik."
                            bg="bg-red-100"
                        />
                        <ValueCard
                            icon={<Users className="w-8 h-8 text-yellow-600" />}
                            title="Pelayanan Ramah"
                            desc="Tim berpengalaman dan profesional."
                            bg="bg-yellow-100"
                        />
                        <ValueCard
                            icon={<Heart className="w-8 h-8 text-green-600" />}
                            title="Dibuat dengan Cinta"
                            desc="Setiap hidangan diracik penuh dedikasi."
                            bg="bg-green-100"
                        />
                        <ValueCard
                            icon={<Clock className="w-8 h-8 text-blue-600" />}
                            title="20 Tahun Pengalaman"
                            desc="Dipercaya selama dua dekade."
                            bg="bg-blue-100"
                        />
                    </div>
                </div>

                {/* MENU SIGNATURE */}
                <div className="max-w-7xl mx-auto bg-gradient-to-r from-red-600 to-red-700 text-white rounded-3xl p-8 md:p-12 mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Menu Unggulan Kami
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Nasi Box Spesial</h3>
                            <ul className="space-y-3">
                                {[
                                    "Nasi Box Ayam – ayam goreng rempah dan sambal Padang",
                                    "Nasi Box Rendang – rendang sapi empuk berbumbu kuat",
                                    "Nasi Box Ikan – ikan goreng/bakar sambal andaliman",
                                    "Rendang Khas Padang – resep original turun-temurun",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2">
                                        <span className="text-yellow-300 mt-1">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Keunggulan Kami</h3>
                            <ul className="space-y-3">
                                {[
                                    "Porsi pas dan mengenyangkan",
                                    "Harga terjangkau untuk semua kalangan",
                                    "Kemasan higienis & praktis",
                                    "Cocok untuk acara & pesanan besar",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2">
                                        <span className="text-yellow-300 mt-1">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Siap Mencoba?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Hubungi kami dan rasakan kelezatan masakan Padang terbaik.
                    </p>

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
            </section>

            <Footer />
        </div>
    );
};

const ValueCard = ({ icon, title, desc, bg }) => (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-6 text-center space-y-4">
            <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
        </CardContent>
    </Card>
);

export default AboutPage;
