// Pricelist data
export const pricelist = {
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

export const locations = [
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
    link: "https://www.google.com/maps/place/Alfamart+Kutoarjo+2",
    type: "DROP POINT",
    color: "bg-orange-500"
  }
];

export const testimonials = [
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

export const navLinks = [
  { title: "HOME", href: "#home" },
  { title: "SERVICES", href: "#services" },
  { title: "CARA ORDER", href: "#how-it-works" },
  { title: "PRICELIST", href: "#pricelist" },
  { title: "TESTIMONI", href: "#testimonials" },
  { title: "LOCATIONS", href: "#location" },
];

export const heroTexts = [
  { text: "SEPATU LO BULUK? 🚩", color: "text-red-600" },
  { text: "OUTFIT KUCEL? SKIP.", color: "text-black" },
  { text: "TAS JAMURAN? NO WAY.", color: "text-red-600" },
  { text: "AUTO GLOW UP ✨", color: "text-black" }
];
