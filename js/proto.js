// function Mahasiswa(nama, energi){
// 	this.nama = nama;
// 	this.energi = energi;
// }
// Mahasiswa.prototype.makan = function(porsi){
// 	this.energi += porsi;
// 	return `halo ${this.nama}, selamat makan`;
// }

// Mahasiswa.prototype.main = function(jam){
// 	this.energi -= jam;
// 	return `halo ${this.nama}, selamat main`;
// }

// let rafli = new Mahasiswa('rafli', 10);


//cara membuat class

class Mahasiswa{
	constructor(nama, energi){
		this.nama = nama;
		this.energi = energi;
	}
	makan(porsi){
		this.energi += porsi;
		return `halo ${this.nama}, selamat makan`;
	}
}
let rafli = new Mahasiswa('rafli', 10);