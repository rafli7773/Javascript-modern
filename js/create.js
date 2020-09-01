	
	// object literal 

	// let mahasiswa={
	// 	nama:'rafli',
	// 	energy:10,
	// 	makan: function(porsi){
	// 		this.energy = this.energy + porsi;
	// 		console.log(`halo ${this.nama}, selamat makan`);
	// 	}
		
	// }

// function declaration

const methodMahasiswa = {
	makan : function(porsi){
	this.energy += porsi;
	console.log(`halo ${this.nama}, selamat makan!`);
	},

	main : function(jam){
		this.energy -= jam;
		console.log(`halo ${this.nama}, selamat main`);
	},
	tidur : function(jam){
		this.energy += jam * 2;
		console.log(`halo ${this.nama}, selamat tidur`);
	}

};

function Mahasiswa(nama,energy){
	let mahasiswa = Object.create(methodMahasiswa);
	mahasiswa.nama = nama;
	mahasiswa.energy = energy;
	// mahasiswa.makan = methodMahasiswa.makan;
	// mahasiswa.main = methodMahasiswa.main;
	// mahasiswa.tidur = methodMahasiswa.tidur;


	return mahasiswa;
}

let rafli = Mahasiswa('rafli', 10);

