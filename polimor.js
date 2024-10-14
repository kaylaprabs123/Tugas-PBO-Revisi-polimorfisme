// Kelas Utama: Kapal
class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infokapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
    }
}

// Subclass KapalPenumpang
class KapalPenumpang extends Kapal {
    constructor(nama, panjang, lebar, kapasitasPenumpang) {
        super(nama, "Penumpang", panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infokapal() {
        return `${super.infokapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }
}

// Subclass KapalTanker
class KapalTanker extends Kapal {
    constructor(nama, panjang, lebar, kapasitasMinyak) {
        super(nama, "Tanker", panjang, lebar);
        this.kapasitasMinyak = kapasitasMinyak;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas minyak: ${this.kapasitasMinyak} liter.`;
    }
}

// Subclass KapalKargo
class KapalKargo extends Kapal {
    constructor(nama, panjang, lebar, kapasitasMuatan) {
        super(nama, "Kargo", panjang, lebar);
        this.kapasitasMuatan = kapasitasMuatan;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas muatan: ${this.kapasitasMuatan} ton.`;
    }
}

// Subclass KapalFeri
class KapalFeri extends Kapal {
    constructor(nama, panjang, lebar, kapasitasKendaraan) {
        super(nama, "Feri", panjang, lebar);
        this.kapasitasKendaraan = kapasitasKendaraan;
    }

    infokapal() {
        return `${super.infokapal()} Kapasitas kendaraan: ${this.kapasitasKendaraan} kendaraan.`;
    }
}

// Menggunakan Polimorfisme
const kapalPenumpang = new KapalPenumpang("Titanic", 269, 28, 3547);
const kapalTanker = new KapalTanker("SuperTanker", 330, 60, 500000);
const kapalKargo = new KapalKargo("CargoMax", 210, 32, 15000);
const kapalFeri = new KapalFeri("Feri Jawa", 120, 25, 300);

console.log(kapalPenumpang.infokapal());
console.log(kapalTanker.infokapal());
console.log(kapalKargo.infokapal());
console.log(kapalFeri.infokapal());
