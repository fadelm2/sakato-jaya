import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Phone, ShoppingCart, Plus, Minus, X } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

/* =======================
   STATIC MENU DATA
======================= */
const STATIC_MENU_ITEMS = [
  {
    id: "ayam-001",
    name: "Nasi Box Ayam Goreng",
    description:
        "Nasi putih hangat dengan ayam goreng rempah khas Padang, sambal merah, dan lauk pelengkap",
    price: 25000,
    image: "/assets/ayamgorengpadang.png",
    category: "nasi_box",
  },
  {
    id: "rendang-001",
    name: "Nasi Box Rendang",
    description:
        "Nasi putih dengan rendang sapi empuk bumbu meresap, sambal hijau, dan sayur",
    price: 30000,
    image: "/assets/nasibox-rendang.png",
    category: "nasi_box",
  },
  {
    id: "bakar-001",
    name: "Nasi Box Ayam Bakar",
    description:
        "Nasi putih dengan ayam bakar, sambal andalan, dan lauk sayur pelengkap",
    price: 28000,
    image: "/assets/ayambakar.jpg",
    category: "nasi_box",
  },
  {
    id: "rendang-special-001",
    name: "Rendang Khas Padang",
    description:
        "Rendang sapi original dengan resep turun temurun 20 tahun, bumbu rempah lengkap",
    price: 35000,
    image:
        "https://images.pexels.com/photos/34985384/pexels-photo-34985384.jpeg",
    category: "nasi_box",
  },
];

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const MenuPage = () => {
  const navigate = useNavigate();

  const [menuItems] = useState(STATIC_MENU_ITEMS);
  const [cart, setCart] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const [orderForm, setOrderForm] = useState({
    customer_name: "",
    phone: "",
    address: "",
    delivery_time: "",
    notes: "",
  });

  /* =======================
     CART LOGIC
  ======================= */
  const addToCart = (item) => {
    const exist = cart.find((c) => c.id === item.id);

    if (exist) {
      setCart(
          cart.map((c) =>
              c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
          )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    toast.success(`${item.name} ditambahkan`);
  };

  const updateQuantity = (id, delta) => {
    setCart(
        cart
            .map((item) => {
              if (item.id === id) {
                const qty = item.quantity + delta;
                if (qty <= 0) return null;
                return { ...item, quantity: qty };
              }
              return item;
            })
            .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i.id !== id));
    toast.info("Item dihapus");
  };

  const getTotalAmount = () =>
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  /* =======================
     SUBMIT ORDER
  ======================= */
  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Keranjang kosong");
      return;
    }

    const orderData = {
      ...orderForm,
      items: cart.map((i) => ({
        menu_id: i.id,
        name: i.name,
        price: i.price,
        quantity: i.quantity,
      })),
      total_amount: getTotalAmount(),
    };

    try {
      await axios.post(`${API}/orders`, orderData);

      const message = `Halo, saya ingin memesan:

${cart
          .map(
              (i) =>
                  `${i.quantity}x ${i.name} - Rp ${(i.price * i.quantity).toLocaleString(
                      "id-ID"
                  )}`
          )
          .join("\n")}

Total: Rp ${getTotalAmount().toLocaleString("id-ID")}

Nama: ${orderForm.customer_name}
No HP: ${orderForm.phone}
Alamat: ${orderForm.address || "-"}
Waktu: ${orderForm.delivery_time}
Catatan: ${orderForm.notes || "-"}

Terima kasih 🙏`;

      window.open(
          `https://wa.me/62859106614314?text=${encodeURIComponent(message)}`,
          "_blank"
      );

      setCart([]);
      setShowOrderForm(false);
      setOrderForm({
        customer_name: "",
        phone: "",
        address: "",
        delivery_time: "",
        notes: "",
      });

      toast.success("Pesanan dikirim ke WhatsApp");
    } catch (err) {
      toast.error("Gagal membuat pesanan");
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur shadow">
          <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-bold text-xl">Sakato Jaya</span>
            </div>

            <Button
                onClick={() => setShowOrderForm(true)}
                disabled={cart.length === 0}
                className="bg-red-600 rounded-full relative"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Keranjang
              {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                {cart.reduce((s, i) => s + i.quantity, 0)}
              </span>
              )}
            </Button>
          </div>
        </nav>

        {/* MENU */}
        <section className="pt-24 px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">Menu Kami</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item) => (
                <Card key={item.id} className="shadow-lg">
                  <div className="h-56 overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                  </div>

                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-xl font-bold text-red-600">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>

                    <Button
                        onClick={() => addToCart(item)}
                        className="w-full bg-red-600 rounded-full"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Tambah
                    </Button>
                  </CardContent>
                </Card>
            ))}
          </div>
        </section>

        {/* DIALOG ORDER */}
        <Dialog open={showOrderForm} onOpenChange={setShowOrderForm}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Keranjang</DialogTitle>
              <DialogDescription>Lengkapi data pesanan</DialogDescription>
            </DialogHeader>

            {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <div className="flex gap-2 items-center">
                    <Button size="sm" onClick={() => updateQuantity(item.id, -1)}>
                      <Minus size={14} />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button size="sm" onClick={() => updateQuantity(item.id, 1)}>
                      <Plus size={14} />
                    </Button>
                    <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeFromCart(item.id)}
                    >
                      <X size={14} />
                    </Button>
                  </div>
                </div>
            ))}

            <p className="font-bold text-right">
              Total: Rp {getTotalAmount().toLocaleString("id-ID")}
            </p>

            <form onSubmit={handleOrderSubmit} className="space-y-3">
              <Input
                  placeholder="Nama"
                  required
                  value={orderForm.customer_name}
                  onChange={(e) =>
                      setOrderForm({ ...orderForm, customer_name: e.target.value })
                  }
              />
              <Input
                  placeholder="No HP"
                  required
                  value={orderForm.phone}
                  onChange={(e) =>
                      setOrderForm({ ...orderForm, phone: e.target.value })
                  }
              />
              <Input
                  type="datetime-local"
                  required
                  value={orderForm.delivery_time}
                  onChange={(e) =>
                      setOrderForm({ ...orderForm, delivery_time: e.target.value })
                  }
              />
              <Textarea
                  placeholder="Alamat / catatan"
                  value={orderForm.address}
                  onChange={(e) =>
                      setOrderForm({ ...orderForm, address: e.target.value })
                  }
              />

              <Button
                  type="submit"
                  className="w-full bg-green-600 rounded-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Pesan via WhatsApp
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
  );
};

export default MenuPage;
