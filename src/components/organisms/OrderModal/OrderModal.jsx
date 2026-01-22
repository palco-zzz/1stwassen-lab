import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, ShoppingBag, Sparkles, Home, Zap } from 'lucide-react';

const OrderModal = ({ isOpen, onClose }) => {
  const [orderForm, setOrderForm] = useState({
    name: '',
    category: 'Sepatu',
    service: 'Deep Clean',
    method: 'Drop Store',
    address: ''
  });

  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrderForm(prev => ({ ...prev, [name]: value }));
  };

  const sendToWhatsApp = () => {
    const message = `Halo Admin Wassen Lab! 👋%0A%0ASaya mau booking treatment dong:%0A👤 Nama: ${orderForm.name}%0A👟 Kategori: ${orderForm.category}%0A✨ Service: ${orderForm.service}%0A🚚 Metode: ${orderForm.method}%0A${orderForm.method === 'Pickup Delivery' ? `📍 Alamat: ${orderForm.address}%0A` : ''}%0AMohon infonya ya!`;
    window.open(`https://wa.me/6285259499125?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            className="relative bg-white w-full max-w-md border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] rounded-3xl p-6 md:p-8 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-red-100 rounded-full transition-colors clickable"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-3xl font-black uppercase mb-2">Order Cepat</h3>
            <p className="text-neutral-500 text-sm mb-6">Isi form biar admin ga nanya-nanya lagi.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase mb-1">Nama Lo</label>
                <div className="flex items-center border-2 border-black rounded-xl px-3 py-2 bg-neutral-50 focus-within:bg-white focus-within:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <User className="w-5 h-5 text-neutral-400 mr-2" />
                  <input
                    type="text"
                    name="name"
                    value={orderForm.name}
                    onChange={handleOrderChange}
                    placeholder="Siapa nama lo?"
                    className="w-full bg-transparent outline-none text-sm font-bold clickable"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Barang</label>
                  <div className="border-2 border-black rounded-xl px-2 py-2 bg-neutral-50 relative">
                    <ShoppingBag className="w-4 h-4 absolute top-3 left-3 text-neutral-400" />
                    <select
                      name="category"
                      value={orderForm.category}
                      onChange={handleOrderChange}
                      className="w-full bg-transparent outline-none text-sm font-bold pl-8 appearance-none clickable"
                    >
                      <option>Sepatu</option>
                      <option>Tas</option>
                      <option>Helm</option>
                      <option>Topi</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Treatment</label>
                  <div className="border-2 border-black rounded-xl px-2 py-2 bg-neutral-50 relative">
                    <Sparkles className="w-4 h-4 absolute top-3 left-3 text-neutral-400" />
                    <select
                      name="service"
                      value={orderForm.service}
                      onChange={handleOrderChange}
                      className="w-full bg-transparent outline-none text-sm font-bold pl-8 appearance-none clickable"
                    >
                      <option>Fast Clean</option>
                      <option>Deep Clean</option>
                      <option>Unyellowing</option>
                      <option>Whitening</option>
                      <option>Repaint</option>
                      <option>Reglue</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-1">Mau Gimana?</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setOrderForm(prev => ({ ...prev, method: 'Drop Store' }))}
                    className={`p-3 border-2 border-black rounded-xl text-xs font-bold transition-all clickable ${orderForm.method === 'Drop Store' ? 'bg-black text-white' : 'bg-white hover:bg-neutral-100'}`}
                  >
                    🏃 Drop Sendiri
                  </button>
                  <button
                    onClick={() => setOrderForm(prev => ({ ...prev, method: 'Pickup Delivery' }))}
                    className={`p-3 border-2 border-black rounded-xl text-xs font-bold transition-all clickable ${orderForm.method === 'Pickup Delivery' ? 'bg-black text-white' : 'bg-white hover:bg-neutral-100'}`}
                  >
                    🛵 Jemput Bola
                  </button>
                </div>
              </div>

              {orderForm.method === 'Pickup Delivery' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                >
                  <label className="block text-xs font-bold uppercase mb-1">Alamat Jemput</label>
                  <div className="flex items-start border-2 border-black rounded-xl px-3 py-2 bg-neutral-50 focus-within:bg-white focus-within:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <Home className="w-5 h-5 text-neutral-400 mr-2 mt-1" />
                    <textarea
                      name="address"
                      value={orderForm.address}
                      onChange={handleOrderChange}
                      placeholder="Jalan apa, nomor berapa..."
                      rows="2"
                      className="w-full bg-transparent outline-none text-sm font-bold resize-none clickable"
                    />
                  </div>
                </motion.div>
              )}

              <button
                onClick={sendToWhatsApp}
                className="w-full py-4 bg-red-600 text-white border-2 border-black rounded-xl font-black text-lg shadow-[4px_4px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2 clickable mt-4"
              >
                GAS KIRIM WA <Zap className="w-5 h-5 fill-yellow-400 text-black" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
