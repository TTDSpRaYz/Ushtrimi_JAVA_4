console.log("----------------------Ushtrimi 1-------------------");
let sasiaLibra = 3;
let sasiaFletore = 4;
let cmimiLiber = 12.5;
let cmimiFletore = 1.8;
let kostoLiber = sasiaLibra * cmimiLiber;
let kostoFletore = sasiaFletore * cmimiFletore;
let transporti = 2.5;
let shumaTotale = kostoLiber + kostoFletore;

console.log("Fatura per libra: " + kostoLiber);
console.log("Fatura per fletore: " + kostoFletore);
console.log("Shuma totale (pa transport): " + shumaTotale);

shumaTotale += transporti;

console.log("Shuma totale (me transport): " + shumaTotale);

console.log("----------------------Ushtrimi 2-------------------");
const studenti = { aktiviteti : 18, projekti : 24, provimi : 43};
let totaliPike = studenti.aktiviteti + studenti.projekti + studenti.provimi;
let maxPike = 100;
let perqindja = (totaliPike * maxPike) / 100;

console.log("Totali i pikeve: " + totaliPike);
console.log("Perqindja: " + perqindja);

studenti.provimi = 48;
totaliPike = studenti.aktiviteti + studenti.projekti + studenti.provimi;
perqindja = (totaliPike * maxPike) / 100;

console.log("Totali i pikeve: " + totaliPike);
console.log("Perqindja: " + perqindja);


console.log("----------------------Ushtrimi 3-------------------");

let buxheti = 80;
let akomodimi = 96;
let transport = 42;
let ushqimi = 57;

let kostoTotale = akomodimi + transport + ushqimi;
let pjesaESecilit = kostoTotale / 3;

console.log("Kosto totale: " + kostoTotale);
console.log("Pjesa e secilit: " + pjesaESecilit);
console.log("Sa mbeten per secilin: " + (buxheti - pjesaESecilit));   


console.log("----------------------Ushtrimi 4-------------------");
const porosia = { produkti1 : 35, produkti2 : 35, produkti3 : 24 };
let cmimi = porosia.produkti1 + porosia.produkti2 + porosia.produkti3;

console.log("Cmimi para zbritjes: " + cmimi);

let zbritja = 0.15;

console.log("Cmimi pas zbritjes: " + (cmimi * zbritja));

let transp = 4;

cmimi += transp;

console.log("Cmimi pas zbritjes (me transport): " + (cmimi * zbritja));


console.log("----------------------Ushtrimi 5-------------------");
let vlera1 = "25";
let vlera2 = "17";
let vlera3 = "8";

console.log(vlera1 + vlera2 + vlera3);
console.log("Ky rezultat shfaqet per shkak se vlerat tekstuale kur 'mblidhen' vetem bashkohen");
vlera1 = Number(vlera1);
vlera2 = Number(vlera2);
vlera3 = Number(vlera3);
console.log(vlera1 + vlera2 + vlera3);


console.log("----------------------Ushtrimi 6-------------------");
let minEHene = 95;
let minEMarte = 80;
let minEMerkure = 115;

let totalMinuta = minEHene + minEMarte + minEMerkure;
let totalOre = totalMinuta / 60;
let minutaTeMbetura = totalMinuta % 60;

console.log("Total minuta: " + totalMinuta);
console.log("Total ore: " + totalOre);
console.log("Minutat e mbetura: " + minutaTeMbetura);


console.log("----------------------Ushtrimi 7-------------------");
let stoku = 120;
let cmimiNjesi = 6.75;
console.log("Stoku: " + stoku);
console.log("Vlera e stokut: " + (stoku * cmimiNjesi));
stoku -= 18;
console.log("Stoku: " + stoku);
console.log("Vlera e stokut: " + (stoku * cmimiNjesi));
stoku -= 27;
console.log("Stoku: " + stoku);
console.log("Vlera e stokut: " + (stoku * cmimiNjesi));
stoku += 35;
console.log("Stoku: " + stoku);
console.log("Vlera e stokut: " + (stoku * cmimiNjesi));
