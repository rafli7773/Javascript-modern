// const yuda = function(nama){
// 	return `Halo, ${nama}`;
// }
// console.log(yuda('yuda'));

// let yuda = (nama)=>{
// 	return `Halo ${nama}`;
// }
// console.log(yuda('yuda'));

// let yuda = (nama, waktu)=>{
// 	return `Halo ${waktu} ${nama}`;
// }
// console.log(yuda('yuda', 'malam'));

// implisit return

// let yuda = nama => `Halo ${nama}`;
// console.log(yuda('yuda'));

// const halo = () => `hello world`;
// console.log(halo());

let siswa = ['yuda', 'yuddi', 'anjayy'];
// let jumlahHuruf = siswa.map(function(nama){
// 	return nama.length;
// });
// console.log(jumlahHuruf);

// pake arrow function

// let jumlahHuruf = siswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// tambahin object

jumlahHuruf = siswa.map(nama => ({
	nama:nama, jmlHuruf:nama.length
}));
console.table(jumlahHuruf);