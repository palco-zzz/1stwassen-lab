import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Sparkles, Zap, ShieldCheck, Instagram, MessageCircle, ChevronRight, ChevronLeft, Tag, Menu, X, Star, ExternalLink, Quote, Package, Truck, ShoppingBag, User, Phone, Home } from 'lucide-react';

const WassenLabLanding = () => {
const targetRef = useRef(null);
const { scrollYProgress } = useScroll();

// --- STATE FOR ORDER MODAL ---
const [isOrderOpen, setIsOrderOpen] = useState(false);
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
    window.open(`https://wa.me/6285259499125?text=${message}`, '\_blank');
};

// --- CUSTOM CURSOR LOGIC ---
const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
const [cursorVariant, setCursorVariant] = useState("default");

const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

// Ref for horizontal scroll
const tabsContainerRef = useRef(null);

// --- HERO TEXT ROTATION LOGIC ---
const [textIndex, setTextIndex] = useState(0);
const heroTexts = [
{ text: "SEPATU LO BULUK? 🚩", color: "text-red-600" },
{ text: "OUTFIT KUCEL? SKIP.", color: "text-black" },
{ text: "TAS JAMURAN? NO WAY.", color: "text-red-600" },
{ text: "AUTO GLOW UP ✨", color: "text-black" }
];

useEffect(() => {
const interval = setInterval(() => {
setTextIndex((prev) => (prev + 1) % heroTexts.length);
}, 2500);
return () => clearInterval(interval);
}, []);

// --- VELOCITY MARQUEE LOGIC ---
const useMarquee = (baseVelocity) => {
const baseX = useMotionValue(0);
const { scrollY } = useScroll();
const scrollVelocity = useVelocity(scrollY);
const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

    const x = useTransform(baseX, (v) => `${v}%`);

    useAnimationFrame((t, delta) => {
      let moveBy = baseVelocity * (delta / 1000);
      let boostMultiplier = 1 + (Math.abs(velocityFactor.get()) / 100);
      moveBy = moveBy * boostMultiplier;
      let newX = baseX.get() + moveBy;

      if (baseVelocity < 0 && newX <= -50) {
        newX = 0;
      } else if (baseVelocity > 0 && newX >= 0) {
        newX = -50;
      }

      baseX.set(newX);
    });

    return x;

};

const marqueeX = useMarquee(-3);
const marqueeXReverse = useMarquee(3);

const scrollTabs = (direction) => {
if (tabsContainerRef.current) {
const scrollAmount = 150;
const currentScroll = tabsContainerRef.current.scrollLeft;
tabsContainerRef.current.scrollTo({
left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
behavior: 'smooth'
});
}
};

useEffect(() => {
const moveCursor = (e) => {
setCursorPos({ x: e.clientX, y: e.clientY });
cursorX.set(e.clientX);
cursorY.set(e.clientY);

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
          x: (e.clientX - centerX) / 50,
          y: (e.clientY - centerY) / 50
      });
    };

    const checkHover = (e) => {
        const target = e.target;
        if (
            target.tagName === 'A' ||
            target.tagName === 'BUTTON' ||
            target.closest('a') ||
            target.closest('button') ||
            target.classList.contains('cursor-pointer') ||
            target.classList.contains('clickable')
        ) {
            setCursorVariant("hover");
        } else {
            setCursorVariant("default");
        }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", checkHover);
    };

}, [cursorX, cursorY]);

const variants = {
default: {
height: 32,
width: 32,
x: -16,
y: -16,
borderWidth: 2,
borderColor: "#000000",
backgroundColor: "transparent",
mixBlendMode: "normal"
},
hover: {
height: 64,
width: 64,
x: -32,
y: -32,
borderWidth: 0,
backgroundColor: "#DC2626",
opacity: 0.5,
mixBlendMode: "multiply",
}
};

const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

const [activeTab, setActiveTab] = useState('shoes');
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [activeLocation, setActiveLocation] = useState(0);

useEffect(() => {
const handleScroll = () => setScrolled(window.scrollY > 50);
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

const handleSmoothScroll = (e, href) => {
e.preventDefault();
const element = document.querySelector(href);
if (element) element.scrollIntoView({ behavior: 'smooth' });
};

// ... (Data Arrays)
const pricelist = {
shoes: [
{ name: "Fast Clean", price: "25K", desc: "Cuci luar doang. Sat set.", time: "24 Jam" },
{ name: "Deep Clean", price: "40K", desc: "Cuci total luar dalam.", time: "3-4 Hari" },
{ name: "Unyellowing", price: "60K", desc: "Bye bye noda kuning.", time: "4-5 Hari" },
{ name: "Whitening", price: "60K", desc: "Putih silau men.", time: "4-5 Hari" },
{ name: "Reglue", price: "30K+", desc: "Lem ulang yang mangap.", time: "3-5 Hari" },
{ name: "Repaint", price: "100K+", desc: "Ganti warna total.", time: "1-2 Mgg" },
],
bags: [
{ name: "Small Bag", price: "35K", desc: "Sling/Waistbag.", time: "3-4 Hari" },
{ name: "Medium Bag", price: "45K", desc: "Backpack/Tote.", time: "3-5 Hari" },
{ name: "Large Bag", price: "65K", desc: "Carrier/Koper.", time: "5-7 Hari" },
{ name: "Leather", price: "50K+", desc: "Perawatan kulit.", time: "5-7 Hari" },
],
helmets: [
{ name: "Half Face", price: "30K", desc: "Cuci busa & kaca.", time: "2-3 Hari" },
{ name: "Full Face", price: "40K", desc: "Detailing total.", time: "2-3 Hari" },
],
others: [
{ name: "Topi", price: "20K", desc: "Caps/Bucket hat.", time: "2-3 Hari" },
{ name: "Sandal", price: "20K", desc: "Cuci bersih.", time: "2 Hari" },
{ name: "Express", price: "+15K", desc: "Prioritas 3 Jam.", time: "3-6 Jam" },
]
};

const navLinks = [
{ title: "HOME", href: "#home" },
{ title: "SERVICES", href: "#services" },
{ title: "CARA ORDER", href: "#how-it-works" },
{ title: "PRICELIST", href: "#pricelist" },
{ title: "TESTIMONI", href: "#testimonials" },
{ title: "LOCATIONS", href: "#location" },
];

const locations = [
{
id: 0,
name: "MAIN LAB",
address: "Jl. Jenderal Sudirman No.93, Purworejo",
desc: "Store Pusat. Cuci express ditungguin bisa. Parkir luas, free WiFi.",
link: "https://maps.app.goo.gl/sJwnPbsuZajDLu277",
type: "HEADQUARTERS",
color: "bg-red-600"
},
{
id: 1,
name: "DW by SAKA",
address: "Jl. A. Yani No.2, Purworejo",
desc: "Drop point tengah kota. Sebelah alun-alun. Sekalian nongkrong.",
link: "https://maps.app.goo.gl/2gLWXinPi14FRfe58",
type: "DROP POINT",
color: "bg-blue-600"
},
{
id: 2,
name: "Alfamart Kutoarjo 2",
address: "Jl. Pangeran Diponegoro No.107, Kutoarjo",
desc: "Drop point area Kutoarjo. Sambil jajan, sambil drop sepatu.",
link: "https://www.google.com/maps/place/Alfamart+Kutoarjo+2/@-7.7215649,109.912448,3a,57.3y,198.95h,82.35t/data=!3m7!1e1!3m5!1sjT6e_uZVen86y170WHnNxA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.651015625880461%26panoid%3DjT6e_uZVen86y170WHnNxA%26yaw%3D198.9504809520889!7i16384!8i8192!4m7!3m6!1s0x2e7ac100c108060b:0x84bdded7c1eb6b72!8m2!3d-7.7217542!4d109.9123773!10e5!16s%2Fg%2F11hnmzcj7_?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D",
type: "DROP POINT",
color: "bg-orange-500"
}
];

const testimonials = [
{
name: "Budi Santoso",
role: "Anak Skate",
text: "Sepatu gue yang buluk jadi kinclong lagi. Gila sih, kirain bakal dibuang, ternyata bisa diselamatin.",
color: "bg-yellow-300",
rotation: "rotate-2"
},
{
name: "Siti Aminah",
role: "Mahasiswi",
text: "Service cepet, admin ramah, harga pelajar. Rekomen banget buat anak kosan yang mager nyuci.",
color: "bg-red-300",
rotation: "-rotate-1"
},
{
name: "Rizky Pratama",
role: "Ojol Ganteng",
text: "Helm wangi banget abis dicuci disini. Ga malu lagi jemput penumpang. Visor juga jadi bening parah.",
color: "bg-blue-300",
rotation: "rotate-3"
},
{
name: "Citra Kirana",
role: "Pegawai Bank",
text: "Tas kerja aman sentosa. Noda tinta ilang tanpa bekas. Next bakal bawa koper kesini.",
color: "bg-white",
rotation: "-rotate-2"
}
];

const steps = [
{
id: 1,
title: "DROP / PICKUP",
desc: "Antar ke Main Lab, Drop Point, atau chat WA buat kita jemput.",
icon: <Package className="w-8 h-8 md:w-10 md:h-10 text-white" />,
color: "bg-black",
textColor: "text-white",
rotate: "-rotate-2"
},
{
id: 2,
title: "MAGIC PROCESS",
desc: "Tim ahli kami bakal nyuci, repaint, & benerin sepatu lo penuh cinta.",
icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-black" />,
color: "bg-yellow-400",
textColor: "text-black",
rotate: "rotate-1"
},
{
id: 3,
title: "SIAP FLEXING",
desc: "Udah ganteng? Kita kabarin. Tinggal ambil atau kita anter balik.",
icon: <Truck className="w-8 h-8 md:w-10 md:h-10 text-white" />,
color: "bg-red-600",
textColor: "text-white",
rotate: "-rotate-2"
}
];

return (
<div 
        className="bg-[#FDFBF7] text-neutral-900 font-sans overflow-x-hidden selection:bg-black selection:text-[#FDFBF7] relative md:cursor-none"
    >
{/_ --- QUICK ORDER MODAL --- _/}
<AnimatePresence>
{isOrderOpen && (
<div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
{/_ Backdrop _/}
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
onClick={() => setIsOrderOpen(false)}
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
                        onClick={() => setIsOrderOpen(false)}
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


      {/* --- CUSTOM CURSOR (DESKTOP ONLY) --- */}
      <motion.div
        className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
            x: cursorX,
            y: cursorY
        }}
      >
           <motion.div
            className="rounded-full"
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
          />
      </motion.div>

      <motion.div
        className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[10000]"
        style={{
            x: cursorPos.x - 6,
            y: cursorPos.y - 6
        }}
      />

      {/* --- VISUAL POLISH (TEXTURE & NOISE) --- */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/crinkled-paper.png')]"></div>

      <div
        className="fixed inset-0 z-[100] pointer-events-none opacity-20 mix-blend-overlay"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* --- ORGANIC NAVBAR --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none"
      >
        <div className={`
          pointer-events-auto
          flex items-center justify-between
          px-4 py-3
          bg-[#FDFBF7]/90 backdrop-blur-sm
          border-2 border-black
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          transition-all duration-300
          ${scrolled ? "w-[90%] md:w-[60%] rounded-full" : "w-[95%] md:w-[90%] rounded-[2rem]"}
        `}>
            <div className="flex items-center gap-2 transform -rotate-2">
                <div className="w-10 h-10 bg-black text-[#FDFBF7] flex items-center justify-center font-black text-xl rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-pulse">
                    W
                </div>
                <span className="font-black text-xl tracking-tighter hidden md:block">WASSEN.</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <a
                        key={link.title}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="text-sm font-bold uppercase tracking-wider hover:underline decoration-2 decoration-wavy underline-offset-4 decoration-red-600 transition-all cursor-pointer"
                    >
                        {link.title}
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-3">
                 <button
                  onClick={() => setIsOrderOpen(true)}
                  className="hidden md:flex px-6 py-2 bg-red-600 text-[#FDFBF7] text-sm font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all rounded-lg items-center gap-2 cursor-pointer clickable"
                >
                  BOOK NOW
                </button>
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg border-2 border-black"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </div>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed inset-0 bg-[#FDFBF7] z-[60] flex flex-col justify-center items-center border-l-4 border-black"
            >
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors clickable"
                >
                    <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col gap-6 text-center">
                     {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-5xl font-black uppercase tracking-tighter hover:text-red-600 transition-colors transform hover:-skew-x-12 clickable"
                        >
                            {link.title}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            setIsOrderOpen(true);
                        }}
                        className="mt-4 px-8 py-4 bg-red-600 text-white border-4 border-black rounded-xl font-black text-2xl shadow-[6px_6px_0px_0px_black] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all clickable"
                    >
                        BOOK SEKARANG
                    </button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* --- IMPERFECT HERO (UPDATED WITH OPTIMIZED FONT SIZE) --- */}
      <header id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 px-4">
        <motion.div
            style={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
            className="absolute top-20 right-[10%] w-32 h-32 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div
            style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
            className="absolute bottom-20 left-[10%] w-48 h-48 bg-black rounded-full mix-blend-multiply filter blur-2xl opacity-10"
        />

        <div className="z-10 text-center relative w-full max-w-[100vw] overflow-hidden">
          <motion.div
            initial={{ rotate: -5, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-block border-2 border-black bg-[#FDFBF7] px-4 py-2 mb-6 rounded-[255px_15px_225px_15px_/_15px_225px_15px_255px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <p className="text-sm font-mono font-bold tracking-widest uppercase">✨ Purworejo's Finest</p>
          </motion.div>

          <motion.div
            style={{ scale: heroScale, y: heroY }}
            className="w-full px-2 text-[10vw] md:text-[8vw] leading-[0.9] md:leading-[0.85] font-black tracking-tighter text-black mix-blend-darken flex flex-col items-center"
          >
            <span>JANGAN BIARIN</span>
            <div className="h-[1.1em] relative w-full flex justify-center items-center overflow-hidden my-1 md:my-2">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={textIndex}
                        initial={{ y: 100, opacity: 0, rotate: 5 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -100, opacity: 0, rotate: -5 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                        className={`absolute whitespace-nowrap ${heroTexts[textIndex].color}`}
                    >
                        {heroTexts[textIndex].text}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span>BESTIE.</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-lg md:text-2xl font-medium max-w-xl mx-auto text-neutral-600 leading-snug px-4"
          >
            Shoes & Apparel Treatment paling valid di Purworejo. <br/>
            <span className="bg-red-600 text-white px-1 font-bold">Anti Ribet</span> bikin barang lo fresh lagi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center gap-4 cursor-pointer clickable"
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOrderOpen(true)}
          >
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center animate-spin-slow">
                <Star className="w-8 h-8 fill-black" />
              </div>
          </motion.div>
        </div>
      </header>

      {/* --- KINETIC MARQUEE (UPDATED WITH VELOCITY) --- */}
      <div className="py-8 bg-black border-y-4 border-black rotate-1 scale-105 origin-left z-20 relative overflow-hidden">
        <motion.div style={{ x: marqueeX }} className="flex gap-12 whitespace-nowrap">
          {[1,2,3,4, 1, 2, 3, 4].map((i, index) => (
              <span key={index} className="text-6xl md:text-8xl font-black text-[#FDFBF7] tracking-tighter italic">
                 WASSEN LAB <span className="text-transparent stroke-text">PREMIUM</span> CARE
              </span>
          ))}
        </motion.div>
      </div>

      <div className="py-8 bg-red-600 border-b-4 border-black -rotate-1 scale-105 origin-right z-10 relative overflow-hidden -mt-2">
        <motion.div style={{ x: marqueeXReverse }} className="flex gap-12 whitespace-nowrap">
          {[1,2,3,4, 1, 2, 3, 4].map((i, index) => (
              <span key={index} className="text-4xl md:text-6xl font-bold text-black tracking-widest uppercase">
                 SHOES • BAGS • HELMETS • CAPS • <span className="text-white">REPAINT</span> •
              </span>
          ))}
        </motion.div>
      </div>

      {/* --- IMPERFECT GRID SERVICES --- */}
      <section id="services" className="py-32 px-4 md:px-12 max-w-8xl mx-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase transform -skew-x-6 inline-block border-b-8 border-red-600 leading-[0.8]">
                TREATMENT<br/>MENU
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

          {/* Card 1: Shoes - Big Blob */}
          <motion.div
            whileHover={{ y: -10, rotate: 1 }}
            className="md:col-span-7 bg-[#FDFBF7] border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-[2rem] relative overflow-hidden group min-h-[400px] flex flex-col justify-between cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
            <div>
                <Sparkles className="w-16 h-16 text-black mb-6" />
                <h3 className="text-5xl md:text-6xl font-black mb-4 uppercase leading-none">Shoes<br/>Revival</h3>
                <p className="text-xl font-bold font-mono text-neutral-600">Deep Clean, Unyellowing, Repaint.</p>
            </div>
            <div className="flex gap-2 mt-8 flex-wrap">
                {['Canvas', 'Suede', 'Leather'].map(tag => (
                    <span key={tag} className="px-4 py-2 border-2 border-black rounded-full text-sm font-bold bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{tag}</span>
                ))}
            </div>
          </motion.div>

          {/* Card 2: Express - Vertical Sticker */}
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="md:col-span-5 bg-red-600 border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-[1rem] flex flex-col justify-center items-center text-center text-[#FDFBF7] cursor-pointer"
          >
            <Zap className="w-20 h-20 mb-4 fill-yellow-400 stroke-black stroke-2" />
            <h3 className="text-4xl md:text-6xl font-black italic transform -skew-x-12">FAST<br/>SERVICE</h3>
            <div className="mt-6 bg-black text-white px-6 py-2 rounded font-mono font-bold text-lg rotate-2">
                2 - 6 JAM JADI
            </div>
          </motion.div>

          {/* Card 3: Bags - Wide */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-6 bg-neutral-900 text-[#FDFBF7] border-4 border-black p-10 shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] rounded-[3rem_1rem_3rem_1rem] flex flex-col justify-between cursor-pointer"
          >
             <div className="flex justify-between items-start">
                <ShieldCheck className="w-12 h-12" />
                <span className="text-4xl font-black opacity-20">02</span>
             </div>
             <div className="mt-8">
                <h3 className="text-4xl font-black uppercase">Tas & Koper</h3>
                <p className="text-neutral-400 mt-2 font-mono">Backpack, Carrier, Handbag.</p>
             </div>
          </motion.div>

          {/* Card 4: Helmets - Wide */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-6 bg-[#FDFBF7] border-4 border-black p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[1rem_3rem_1rem_3rem] flex flex-col justify-between cursor-pointer"
          >
             <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">H</div>
                <span className="text-4xl font-black opacity-10">03</span>
             </div>
             <div className="mt-8">
                <h3 className="text-4xl font-black uppercase">Helm</h3>
                <p className="text-neutral-600 mt-2 font-mono">Full face & Half face detailing.</p>
             </div>
          </motion.div>

        </div>
      </section>

      {/* --- HOW IT WORKS (CARA MAIN) --- */}
      <section id="how-it-works" className="py-24 px-4 max-w-7xl mx-auto bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]">
        <div className="text-center mb-16">
             <span className="inline-block bg-yellow-400 border-2 border-black text-black font-bold px-4 py-1 text-sm mb-4 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                GAMPANG BANGET
             </span>
             <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase mb-4">
                CARA <span className="text-transparent stroke-text">MAIN.</span>
             </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 relative">
             {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10, rotate: 0 }}
                        className={`
                            relative z-10 w-full md:w-[350px] p-8 border-4 border-black ${step.color} ${step.textColor} ${step.rotate}
                            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-3xl flex flex-col items-center text-center cursor-default
                        `}
                    >
                         <div className="w-16 h-16 border-4 border-black bg-white rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                             {step.icon}
                         </div>
                         <h3 className="text-2xl font-black uppercase mb-3">{step.title}</h3>
                         <p className="font-bold font-mono text-sm opacity-80">{step.desc}</p>

                         <div className="absolute -top-4 -left-4 w-10 h-10 bg-white border-4 border-black text-black font-black flex items-center justify-center rounded-full text-lg">
                            {step.id}
                         </div>
                    </motion.div>

                    {index !== steps.length - 1 && (
                        <div className="hidden md:flex w-24 h-24 items-center justify-center relative z-0 transform -translate-y-4">
                             <svg viewBox="0 0 100 50" className="w-full h-full text-black/20 fill-none stroke-current stroke-[3] transform rotate-12">
                                 <path d="M10,25 Q50,5 90,25" markerEnd="url(#arrowhead)" />
                             </svg>
                        </div>
                    )}

                    {index !== steps.length - 1 && (
                        <div className="md:hidden h-12 w-1 bg-black/20 rounded-full my-2"></div>
                    )}
                </React.Fragment>
             ))}

             <svg style={{ display: 'none' }}>
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                </defs>
             </svg>
        </div>
      </section>

      {/* --- PRICELIST FOLDER STACK --- */}
      <section id="pricelist" className="py-24 px-4 bg-yellow-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-20 bg-repeat-x opacity-10" style={{ backgroundImage: "radial-gradient(circle, black 2px, transparent 2.5px)", backgroundSize: "20px 20px" }}></div>

        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
                <span className="inline-block bg-black text-white px-4 py-1 font-mono font-bold text-sm mb-4 rotate-3">NO HIDDEN FEES</span>
                <h2 className="text-6xl md:text-7xl font-black tracking-tighter">PRICELIST</h2>
            </div>

            <div className="relative">
                <div
                    onClick={() => scrollTabs('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-40 md:hidden bg-gradient-to-r from-yellow-50 to-transparent pr-4 pl-1 py-4 flex items-center cursor-pointer active:scale-95 transition-transform clickable"
                >
                    <ChevronLeft className="w-6 h-6 text-black animate-pulse" />
                </div>

                <div
                    onClick={() => scrollTabs('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-40 md:hidden bg-gradient-to-l from-yellow-50 to-transparent pl-4 pr-1 py-4 flex items-center cursor-pointer active:scale-95 transition-transform clickable"
                >
                    <ChevronRight className="w-6 h-6 text-black animate-pulse" />
                </div>

                <div
                    ref={tabsContainerRef}
                    className="flex justify-start md:justify-center -mb-1 px-12 md:px-4 pt-4 overflow-x-auto no-scrollbar gap-2 snap-x relative z-30 scroll-smooth"
                >
                    {['shoes', 'bags', 'helmets', 'others'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                flex-shrink-0 snap-center
                                px-6 md:px-8 py-3 md:py-4 rounded-t-2xl font-black uppercase text-sm md:text-base border-x-4 border-t-4 border-black transition-all relative cursor-pointer clickable
                                ${activeTab === tab
                                    ? 'bg-white z-30 -translate-y-2 pb-6'
                                    : 'bg-neutral-300 text-neutral-500 hover:bg-neutral-200'}
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white border-4 border-black rounded-b-3xl rounded-tr-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12 min-h-[400px] relative z-20">
                <div className="absolute top-6 left-6 w-4 h-4 border-2 border-black rounded-full flex items-center justify-center"><div className="w-full h-[2px] bg-black rotate-45"></div></div>
                <div className="absolute top-6 right-6 w-4 h-4 border-2 border-black rounded-full flex items-center justify-center"><div className="w-full h-[2px] bg-black rotate-45"></div></div>
                <div className="absolute bottom-6 left-6 w-4 h-4 border-2 border-black rounded-full flex items-center justify-center"><div className="w-full h-[2px] bg-black rotate-45"></div></div>
                <div className="absolute bottom-6 right-6 w-4 h-4 border-2 border-black rounded-full flex items-center justify-center"><div className="w-full h-[2px] bg-black rotate-45"></div></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 mt-4">
                    <AnimatePresence mode="wait">
                        {pricelist[activeTab].map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: index * 0.05 }}
                                className="border-b-2 border-dashed border-neutral-300 pb-4 group"
                            >
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                                    <h3 className="font-black text-lg md:text-xl uppercase group-hover:text-red-600 transition-colors leading-tight">{item.name}</h3>
                                    <div className="self-start sm:self-auto">
                                        <span className="font-bold font-mono text-base md:text-lg bg-yellow-300 px-2 py-0.5 border border-black transform -rotate-1 inline-block">{item.price}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                                    <span className="font-bold text-xs flex items-center gap-1 opacity-60 bg-neutral-100 w-fit px-2 py-1 rounded-full"><Clock className="w-3 h-3" /> {item.time}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <div className="mt-12 text-center">
                 <a
                    href="https://wa.me/6285259499125"
                    className="inline-flex items-center gap-3 text-lg font-black border-b-4 border-red-600 hover:text-red-600 transition-colors cursor-pointer clickable"
                  >
                    KONSULTASI GRATIS VIA WA <ArrowRight className="w-5 h-5" />
                  </a>
            </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="py-24 px-4 bg-[#FDFBF7] overflow-hidden border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-black -rotate-2 z-0"></div>
                 <h2 className="relative z-10 text-5xl md:text-7xl font-black text-white tracking-tighter uppercase transform rotate-2">
                    KATA TETANGGA
                </h2>
                <p className="relative z-10 text-white font-mono mt-2">Bukan buzzer, ini beneran.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                {testimonials.map((testi, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                        className={`
                            relative p-6 border-4 border-black ${testi.color} ${testi.rotation}
                            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[300px] cursor-default
                        `}
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/50 backdrop-blur-sm border-2 border-white/20 rotate-1 shadow-sm"></div>

                        <div>
                            <div className="mb-4">
                                {[1,2,3,4,5].map(star => (
                                    <Star key={star} className="inline-block w-5 h-5 fill-black text-black" />
                                ))}
                            </div>
                            <p className="font-bold text-lg leading-tight mb-6">"{testi.text}"</p>
                        </div>

                        <div className="flex items-center gap-3 border-t-2 border-black pt-4">
                             <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                                {testi.name.charAt(0)}
                             </div>
                             <div>
                                <h4 className="font-black uppercase text-sm">{testi.name}</h4>
                                <p className="text-xs font-mono font-bold opacity-60">{testi.role}</p>
                             </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* --- LOCATION SECTION --- */}
      <section id="location" className="py-32 bg-black text-[#FDFBF7] relative clip-path-jagged">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
                <h2 className="text-6xl font-black uppercase leading-none mb-6">
                    DROP IT<br/><span className="text-red-600 stroke-text">HERE.</span>
                </h2>
                <p className="text-neutral-400 text-lg max-w-md">
                    Mager ke pusat? Drop aja di point terdekat. Kita jemput bola.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1 space-y-4">
                     {locations.map((loc, index) => (
                        <motion.div
                            key={loc.id}
                            onClick={() => setActiveLocation(index)}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`
                                cursor-pointer group p-6 border-l-4 transition-all duration-300 relative overflow-hidden clickable
                                ${activeLocation === index
                                    ? 'bg-[#222] border-red-600 pl-8'
                                    : 'bg-transparent border-neutral-700 hover:bg-[#111] hover:border-white'}
                            `}
                        >
                             <div className="relative z-10">
                                <span className={`
                                    text-xs font-bold px-2 py-1 rounded mb-2 inline-block
                                    ${activeLocation === index ? 'bg-red-600 text-white' : 'bg-neutral-800 text-neutral-400'}
                                `}>
                                    {loc.type}
                                </span>
                                <h3 className={`text-2xl font-black uppercase ${activeLocation === index ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                                    {loc.name}
                                </h3>
                                <p className="text-neutral-500 text-sm mt-1 font-mono">{loc.address}</p>
                             </div>
                             {activeLocation === index && (
                                 <motion.div
                                    layoutId="activeGlow"
                                    className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent pointer-events-none"
                                 />
                             )}
                        </motion.div>
                     ))}
                </div>

                <div className="flex-1 relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeLocation}
                            initial={{ opacity: 0, y: 20, rotate: 2 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            exit={{ opacity: 0, y: -20, rotate: -2 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full bg-[#FDFBF7] text-black border-4 border-white rounded-3xl p-8 flex flex-col justify-between shadow-[20px_20px_0px_0px_#cc0000] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                     <MapPin className="w-12 h-12 text-red-600 fill-current" />
                                     <span className="font-black text-6xl opacity-10">0{activeLocation + 1}</span>
                                </div>
                                <h3 className="text-4xl font-black uppercase mb-4 leading-none">{locations[activeLocation].name}</h3>
                                <p className="text-lg font-medium text-neutral-600">{locations[activeLocation].desc}</p>
                                <div className="mt-6 p-4 bg-yellow-100 border-2 border-black rounded-lg transform -rotate-1">
                                    <p className="font-mono text-sm font-bold">📍 {locations[activeLocation].address}</p>
                                </div>
                            </div>

                            <div className="relative z-10 mt-8">
                                <a
                                    href={locations[activeLocation].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full block bg-black text-white text-center py-4 rounded-xl font-black text-xl hover:bg-red-600 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer clickable"
                                >
                                    OPEN GOOGLE MAPS <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <div className="absolute -top-10 -right-10 w-full h-full border-4 border-dashed border-neutral-600 rounded-full z-0 animate-spin-slow pointer-events-none"></div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#FDFBF7] text-black py-12 px-6 border-t-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black tracking-tighter uppercase">WASSEN LAB.</h2>
            <p className="font-mono text-sm mt-2 font-bold">EST. 2024 • PURWOREJO</p>
          </div>
          <div className="flex gap-4">
             <a href="https://www.instagram.com/wassen.lab/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer clickable"><Instagram /></a>
             <a href="https://www.tiktok.com/@wassen.lab?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer clickable">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
             </a>
             <a href="https://wa.me/6285259499125" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer clickable"><MessageCircle /></a>
          </div>
        </div>
      </footer>

      <motion.div
        onClick={() => setIsOrderOpen(true)}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 border-2 border-black rounded-full shadow-[4px_4px_0px_0px_black] z-50 flex items-center justify-center cursor-pointer clickable"
      >
        <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
      </motion.div>

      <style>{`
        .stroke-text {
            -webkit-text-stroke: 1px black;
            color: transparent;
        }
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>

);
};

export default WassenLabLanding;
