import { Clock, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Sakato Jaya Cibubur Cileungsi</h3>
                            <p className="text-gray-400">
                                Rumah Makan Padang dengan pengalaman 20 tahun melayani cita rasa autentik di Cileungsi Cibubur.
                            </p>
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

                                {/* Lokasi ditambahkan di sini */}
                                <li className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Cibubur – Cileungsi</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Rumah Makan Sakato Jaya. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
