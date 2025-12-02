import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Phone, ShoppingCart, Plus, Minus, X } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const MenuPage = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderForm, setOrderForm] = useState({
    customer_name: "",
    phone: "",
    address: "",
    delivery_time: "",
    notes: ""
  });

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

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    toast.success(`${item.name} ditambahkan ke keranjang`);
  };

  const updateQuantity = (itemId, delta) => {
    setCart(cart.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + delta;
        if (newQuantity <= 0) return null;
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
    toast.info("Item dihapus dari keranjang");
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      toast.error("Keranjang Anda kosong!");
      return;
    }

    const orderData = {
      ...orderForm,
      items: cart.map(item => ({
        menu_id: item.id,
        menu_name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total_amount: getTotalAmount()
    };

    try {
      const response = await axios.post(`${API}/orders`, orderData);
      
      // Create WhatsApp message
      const message = `Halo, saya ingin memesan:

${cart.map(item => `${item.quantity}x ${item.name} - Rp ${(item.price * item.quantity).toLocaleString('id-ID')}`).join('\n')}

Total: Rp ${getTotalAmount().toLocaleString('id-ID')}

Nama: ${orderForm.customer_name}
No HP: ${orderForm.phone}
Alamat: ${orderForm.address || '-'}
Waktu: ${orderForm.delivery_time}
Catatan: ${orderForm.notes || '-'}

Terima kasih!`;
      
      const whatsappUrl = `https://wa.me/62859106614314?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset form and cart
      setCart([]);
      setOrderForm({
        customer_name: "",
        phone: "",
        address: "",
        delivery_time: "",
        notes: ""
      });
      setShowOrderForm(false);
      toast.success("Pesanan berhasil! Silakan lanjutkan di WhatsApp.");
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Gagal membuat pesanan. Silakan coba lagi.");
    }
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
              <Link to="/menu" className="text-red-600 font-medium">Menu</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Tentang Kami</Link>
            </div>
            <Button
              onClick={() => setShowOrderForm(true)}
              className="bg-red-600 hover:bg-red-700 text-white rounded-full relative"
              disabled={cart.length === 0}
              data-testid="cart-btn"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Keranjang
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center" data-testid="cart-count">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Menu Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Menu Kami</h1>
            <p className="text-lg text-gray-600">Pilih nasi box favorit Anda</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.map((item) => (
                <Card key={item.id} className="menu-card overflow-hidden border-0 shadow-lg" data-testid={`menu-item-${item.id}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900" data-testid={`item-name-${item.id}`}>{item.name}</h3>
                    <p className="text-gray-600 text-sm" data-testid={`item-desc-${item.id}`}>{item.description}</p>
                    <div className="text-2xl font-bold text-red-600" data-testid={`item-price-${item.id}`}>Rp {item.price.toLocaleString('id-ID')}</div>
                    <Button 
                      onClick={() => addToCart(item)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold"
                      data-testid={`add-to-cart-${item.id}`}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Tambah ke Keranjang
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Order Form Dialog */}
      <Dialog open={showOrderForm} onOpenChange={setShowOrderForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="order-dialog">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Keranjang Pesanan</DialogTitle>
            <DialogDescription className="text-gray-600">
              Periksa pesanan Anda dan lengkapi form untuk melanjutkan ke WhatsApp
            </DialogDescription>
          </DialogHeader>
          
          {/* Cart Items */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Item Pesanan:</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg" data-testid={`cart-item-${item.id}`}>
                <div className="flex-1">
                  <p className="font-semibold" data-testid={`cart-item-name-${item.id}`}>{item.name}</p>
                  <p className="text-sm text-gray-600" data-testid={`cart-item-price-${item.id}`}>Rp {item.price.toLocaleString('id-ID')}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, -1)}
                    data-testid={`decrease-qty-${item.id}`}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="font-semibold w-8 text-center" data-testid={`cart-qty-${item.id}`}>{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, 1)}
                    data-testid={`increase-qty-${item.id}`}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => removeFromCart(item.id)}
                    data-testid={`remove-item-${item.id}`}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-red-600" data-testid="total-amount">Rp {getTotalAmount().toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <form onSubmit={handleOrderSubmit} className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="customer_name">Nama Lengkap *</Label>
              <Input
                id="customer_name"
                value={orderForm.customer_name}
                onChange={(e) => setOrderForm({...orderForm, customer_name: e.target.value})}
                required
                placeholder="Masukkan nama Anda"
                data-testid="input-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Nomor HP *</Label>
              <Input
                id="phone"
                value={orderForm.phone}
                onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                required
                placeholder="08xx xxxx xxxx"
                data-testid="input-phone"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Alamat Pengiriman</Label>
              <Textarea
                id="address"
                value={orderForm.address}
                onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                placeholder="Masukkan alamat lengkap (opsional jika ambil sendiri)"
                rows={3}
                data-testid="input-address"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="delivery_time">Waktu Ambil/Kirim *</Label>
              <Input
                id="delivery_time"
                type="datetime-local"
                value={orderForm.delivery_time}
                onChange={(e) => setOrderForm({...orderForm, delivery_time: e.target.value})}
                required
                data-testid="input-delivery-time"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Catatan Tambahan</Label>
              <Textarea
                id="notes"
                value={orderForm.notes}
                onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                placeholder="Catatan khusus untuk pesanan Anda"
                rows={2}
                data-testid="input-notes"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-full text-lg font-semibold"
              data-testid="submit-order-btn"
            >
              <Phone className="w-5 h-5 mr-2" />
              Pesan via WhatsApp
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuPage;