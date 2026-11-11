console.log("Ushtrimi 1");
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

console.lof("Shuma totale (me transport): " + shumaTotale);

console.log("Ushtrimi 2");
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


console.log("Ushtrimi 3");


