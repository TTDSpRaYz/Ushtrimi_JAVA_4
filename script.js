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
