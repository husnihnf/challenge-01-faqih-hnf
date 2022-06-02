// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// Color List
const yellow = "Yellow";
const pink = "Pink";
const white = "White";
const purple = "Purple";
const blue = "Blue";
const black = "Black";
const grey = "Grey";

// Restaurant List
const bento = "Bento";
const sushi = "Sushi";
const pancake = "Pancake";
const eggy = "Eggy";
const tempura = "Tempura";
const padang = "Padang";
const tteok = "Tteok";
const katsu = "Katsu";
const geprek = "Geprek";

let monicasColor = new Set();
monicasColor.add(yellow);
monicasColor.add(pink);
monicasColor.add(white);
monicasColor.add(purple);

let wendysColor = new Set();
wendysColor.add(blue);
wendysColor.add(black);
wendysColor.add(grey);

let monicasResto = new Set();
monicasResto.add(bento);
monicasResto.add(sushi);
monicasResto.add(pancake);
monicasResto.add(eggy);
monicasResto.add(tempura);
monicasResto.add(bento);
monicasResto.add(eggy);
monicasResto.add(padang);
monicasResto.add(tteok);
monicasResto.add(sushi);
monicasResto.add(sushi);

let wendysResto = new Set();
wendysResto.add(tempura);
wendysResto.add(bento);
wendysResto.add(sushi);
wendysResto.add(pancake);
wendysResto.add(padang);
wendysResto.add(katsu);
wendysResto.add(geprek);
wendysResto.add(pancake);
wendysResto.add(eggy);

// Start Test
const firstUser = {
    name: "Monica",
    gender: "female",
    age: "17",
    email: "monica@dingdong.com",
    favoriteColor: [...monicasColor],
    isHavePet: "Yes",
    education: [
        { name: "SD 01", city: "Jakarta", graduate: "2016" },
        { name: "SMP 02", city: "Jakarta", graduate: "2019" },
        { name: "SMA 03", city: "Tangerang" },
    ],
    favoriteRestaurant: [...monicasResto],
};
const secondUser = {
    name: "Wendy",
    gender: "male",
    age: "23",
    email: "wendy@dingdong.com",
    favoriteColor: [...wendysColor],
    isHavePet: "No",
    education: [
        { name: "SD 02", city: "Jakarta", graduate: "2010" },
        { name: "SMP 03", city: "Bogor", graduate: "2013" },
        { name: "SMA 01", city: "Surabaya", graduate: "2016" },
        { name: "Universitas Maju", city: "Tangerang" },
    ],
    favoriteRestaurant: [...wendysResto],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users,
};
